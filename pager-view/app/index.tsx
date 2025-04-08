import { useRef, useState } from "react";
import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import PagerView from "react-native-pager-view";

const products = [
  {
    id: "1",
    name: "URBANNEARS",
    tagline: "VIBRANT COLORS",
    description: "Four on-trend colorways to seamlessly suit your style",
    image: require("../assets/pic/Headphone-cuate.png"),
    color: "#1a1a1a",
  },
  {
    id: "2",
    name: "SOUNDMAX",
    tagline: "PURE CLARITY",
    description: "Exceptional sound quality with premium materials",
    image: require("../assets/pic/Headphone-pana.png"),
    color: "#242424",
  },
  {
    id: "3",
    name: "BEATFLOW",
    tagline: "PERFECT HARMONY",
    description: "Immersive audio experience with active noise cancellation",
    image: require("../assets/pic/Headphone-amico.png"),
    color: "#2d2d2d",
  },
  {
    id: "4",
    name: "AUDIOFLEX",
    tagline: "FLEXIBLE DESIGN",
    description: "Ergonomic design for all-day comfort and style",
    image: require("../assets/pic/Headphone-bro.png"),
    color: "#363636",
  },
  {
    id: "5",
    name: "SONICWAVE",
    tagline: "PREMIUM SOUND",
    description: "Professional-grade audio with wireless freedom",
    image: require("../assets/pic/Headphone-rafiki.png"),
    color: "#404040",
  },
];

export default function Index() {
  const { width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        onPageScroll={(e) => {
          const { offset, position } = e.nativeEvent;
          scrollX.setValue(position + offset);
        }}
      >
        {products.map((product, index) => (
          <View
            key={product.id}
            style={[styles.page, { backgroundColor: product.color }]}
          >
            <View style={styles.contentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.tagline}>{product.tagline}</Text>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Shop Now</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.imageContainer}>
                <Image
                  source={product.image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        ))}
      </PagerView>

      <View style={styles.fixedFooter}>
        <View style={styles.colorSelector}>
          {products.map((_, index) => {
            const inputRange = [index - 1, index, index + 1];

            const width = scrollX.interpolate({
              inputRange,
              outputRange: [8, 20, 8],
              extrapolate: "clamp",
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={index}
                style={[
                  styles.colorDot,
                  {
                    width,
                    opacity,
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 30,
    paddingBottom: 100,
  },
  textContainer: {
    alignItems: "flex-start",
    marginBottom: 30,
  },
  title: {
    fontSize: 48,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 1.5,
    marginBottom: 12,
    textTransform: "uppercase",
  },
  tagline: {
    fontSize: 16,
    color: "#ffffff",
    letterSpacing: 4,
    marginBottom: 8,
    opacity: 0.8,
    textTransform: "uppercase",
  },
  description: {
    fontSize: 18,
    color: "#ffffff",
    opacity: 0.7,
    lineHeight: 28,
    maxWidth: "90%",
    marginBottom: 30,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    transform: [{ scale: 1.1 }],
  },
  fixedFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  colorSelector: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  colorDot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ffffff",
  },
  button: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
