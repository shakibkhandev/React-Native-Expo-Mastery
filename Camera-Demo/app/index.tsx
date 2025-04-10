import { Feather, Ionicons } from "@expo/vector-icons";
import {
  CameraMode,
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { Image } from "expo-image";
import * as MediaLibrary from "expo-media-library";
import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] =
    MediaLibrary.usePermissions();
  const ref = useRef<CameraView>(null);
  const [uri, setUri] = useState<string | null>(null);
  const [mode, setMode] = useState<CameraMode>("picture");
  const [facing, setFacing] = useState<CameraType>("back");
  const [recording, setRecording] = useState(false);

  if (!permission || !mediaPermission) {
    return null;
  }

  if (!permission.granted || !mediaPermission.granted) {
    return (
      <View style={styles.container}>
        <View style={styles.permissionContainer}>
          <Ionicons name="camera" size={50} color="#007AFF" />
          <Text style={styles.permissionText}>
            We need your permission to use the camera and save photos
          </Text>
          <View style={styles.permissionButtons}>
            <TouchableOpacity
              style={styles.permissionButton}
              onPress={requestPermission}
            >
              <Text style={styles.permissionButtonText}>
                Grant Camera Access
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.permissionButton}
              onPress={requestMediaPermission}
            >
              <Text style={styles.permissionButtonText}>
                Grant Media Access
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    if (photo?.uri) {
      setUri(photo.uri);
    }
  };

  const recordVideo = async () => {
    if (recording) {
      setRecording(false);
      ref.current?.stopRecording();
      return;
    }
    setRecording(true);
    const video = await ref.current?.recordAsync();
    console.log({ video });
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "picture" ? "video" : "picture"));
  };

  const toggleFacing = () => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  };

  const savePicture = async () => {
    if (uri) {
      try {
        const asset = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.createAlbumAsync("Camera App", asset, false);
        ToastAndroid.show("Picture saved to gallery!", ToastAndroid.SHORT);
      } catch (error) {
        console.error("Error saving picture:", error);
        ToastAndroid.show("Failed to save picture", ToastAndroid.SHORT);
      }
    }
  };

  const renderPicture = () => {
    return (
      <View style={styles.pictureContainer}>
        <Image
          source={{ uri }}
          contentFit="cover"
          style={styles.previewImage}
        />
        <View style={styles.pictureControls}>
          <TouchableOpacity style={styles.controlButton} onPress={savePicture}>
            <Ionicons name="save" size={24} color="white" />
            <Text style={styles.controlButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.controlButton, styles.retakeButton]}
            onPress={() => setUri(null)}
          >
            <Ionicons name="camera" size={24} color="white" />
            <Text style={styles.controlButtonText}>Retake</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderCamera = () => {
    return (
      <CameraView
        style={styles.camera}
        ref={ref}
        mode={mode}
        facing={facing}
        mute={false}
        responsiveOrientationWhenOrientationLocked
      >
        <View style={styles.controlsContainer}>
          <View style={styles.topControls}>
            <TouchableOpacity style={styles.iconButton} onPress={toggleMode}>
              {mode === "picture" ? (
                <Feather name="camera" size={28} color="white" />
              ) : (
                <Feather name="video" size={28} color="white" />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.bottomControls}>
            <TouchableOpacity style={styles.iconButton} onPress={toggleFacing}>
              <Ionicons name="camera-reverse" size={28} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.captureButton}
              onPress={mode === "picture" ? takePicture : recordVideo}
            >
              <View
                style={[
                  styles.captureButtonInner,
                  { backgroundColor: recording ? "#ff4444" : "white" },
                ]}
              />
            </TouchableOpacity>

            <View style={styles.iconButton} />
          </View>
        </View>
      </CameraView>
    );
  };

  return (
    <View style={styles.container}>
      {uri ? renderPicture() : renderCamera()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  permissionContainer: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  permissionText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
    lineHeight: 24,
  },
  permissionButtons: {
    width: "100%",
    gap: 10,
  },
  permissionButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  permissionButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  controlsContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  topControls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  bottomControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  captureButtonInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  pictureContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  previewImage: {
    flex: 1,
    width: "100%",
  },
  pictureControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  controlButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  retakeButton: {
    backgroundColor: "#FF3B30",
  },
  controlButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
