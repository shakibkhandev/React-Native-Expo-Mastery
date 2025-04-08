import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import React, { useCallback, useMemo, useRef } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleOpenSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>Bottom Sheet Demo</Text>
          <Text style={styles.mainSubtitle}>
            Experience modern UI interactions
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Interactive Sheet</Text>
          <Text style={styles.cardDescription}>
            Open the bottom sheet to explore more features and content
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleOpenSheet}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Open Sheet</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        enableDynamicSizing={true}
        enableHandlePanningGesture={true}
        index={-1}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <BottomSheetView style={styles.contentContainer}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Features</Text>
              <View style={styles.featureList}>
                <View style={styles.featureItem}>
                  <View style={styles.featureIcon}>
                    <Text style={styles.featureIconText}>🎯</Text>
                  </View>
                  <View style={styles.featureContent}>
                    <Text style={styles.featureTitle}>Smooth Animations</Text>
                    <Text style={styles.featureDescription}>
                      Fluid transitions and gestures
                    </Text>
                  </View>
                </View>
                <View style={styles.featureItem}>
                  <View style={styles.featureIcon}>
                    <Text style={styles.featureIconText}>📱</Text>
                  </View>
                  <View style={styles.featureContent}>
                    <Text style={styles.featureTitle}>Responsive Design</Text>
                    <Text style={styles.featureDescription}>
                      Adapts to different screen sizes
                    </Text>
                  </View>
                </View>
                <View style={styles.featureItem}>
                  <View style={styles.featureIcon}>
                    <Text style={styles.featureIconText}>✨</Text>
                  </View>
                  <View style={styles.featureContent}>
                    <Text style={styles.featureTitle}>Modern UI</Text>
                    <Text style={styles.featureDescription}>
                      Clean and intuitive interface
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quick Actions</Text>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.primaryAction]}
                >
                  <Text style={styles.actionButtonText}>Start Demo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.secondaryAction]}
                >
                  <Text style={styles.actionButtonText}>Learn More</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About</Text>
              <Text style={styles.aboutText}>
                This bottom sheet component demonstrates modern UI patterns and
                interactions. It's built with React Native and uses the Gorhom
                Bottom Sheet library for smooth animations and gestures.
              </Text>
            </View>
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  mainContent: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 60,
    marginBottom: 32,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  mainSubtitle: {
    fontSize: 16,
    color: "#AAAAAA",
  },
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    padding: 24,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#AAAAAA",
    marginBottom: 24,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#2196F3",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  sheetBackground: {
    backgroundColor: "#1E1E1E",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  handleIndicator: {
    backgroundColor: "#666",
    width: 40,
    height: 4,
    borderRadius: 2,
  },
  contentContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  featureList: {
    gap: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconText: {
    fontSize: 20,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: "#AAAAAA",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryAction: {
    backgroundColor: "#2196F3",
  },
  secondaryAction: {
    backgroundColor: "#333",
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  aboutText: {
    fontSize: 14,
    color: "#AAAAAA",
    lineHeight: 20,
  },
});
