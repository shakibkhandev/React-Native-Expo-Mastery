import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Following() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Video Post */}
        <View style={styles.post}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=10" }}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <Text style={styles.username}>Tech Reviews</Text>
              <Text style={styles.handle}>@techreviews</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.time}>30m</Text>
            </View>
            <Text style={styles.postText}>
              New iPhone 15 Pro Max review is live! 📱 Check out my full
              breakdown of the camera system and performance improvements.
              #TechReview #Apple
            </Text>
            <View style={styles.videoContainer}>
              <Image
                source={{ uri: "https://picsum.photos/400/225?random=10" }}
                style={styles.videoThumbnail}
              />
              <View style={styles.videoOverlay}>
                <Ionicons name="play-circle" size={50} color="#fff" />
                <Text style={styles.videoDuration}>12:45</Text>
              </View>
            </View>
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>342</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="repeat" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>567</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>2.3K</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={20} color="#a0a0a0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Poll Post */}
        <View style={styles.post}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=11" }}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <Text style={styles.username}>Movie Buff</Text>
              <Text style={styles.handle}>@moviebuff</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.time}>2h</Text>
            </View>
            <Text style={styles.postText}>
              What's your favorite movie genre? 🎬 #MoviePoll
            </Text>
            <View style={styles.pollContainer}>
              <TouchableOpacity style={styles.pollOption}>
                <View style={styles.pollOptionContent}>
                  <Text style={styles.pollOptionText}>Action</Text>
                  <Text style={styles.pollPercentage}>45%</Text>
                </View>
                <View style={[styles.pollBar, { width: "45%" }]} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.pollOption}>
                <View style={styles.pollOptionContent}>
                  <Text style={styles.pollOptionText}>Comedy</Text>
                  <Text style={styles.pollPercentage}>30%</Text>
                </View>
                <View style={[styles.pollBar, { width: "30%" }]} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.pollOption}>
                <View style={styles.pollOptionContent}>
                  <Text style={styles.pollOptionText}>Drama</Text>
                  <Text style={styles.pollPercentage}>15%</Text>
                </View>
                <View style={[styles.pollBar, { width: "15%" }]} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.pollOption}>
                <View style={styles.pollOptionContent}>
                  <Text style={styles.pollOptionText}>Sci-Fi</Text>
                  <Text style={styles.pollPercentage}>10%</Text>
                </View>
                <View style={[styles.pollBar, { width: "10%" }]} />
              </TouchableOpacity>
            </View>
            <Text style={styles.pollInfo}>1.2K votes · 1 day left</Text>
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>89</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="repeat" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>234</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>567</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={20} color="#a0a0a0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Thread Post */}
        <View style={styles.post}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <Text style={styles.username}>Science Daily</Text>
              <Text style={styles.handle}>@sciencedaily</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.time}>4h</Text>
            </View>
            <Text style={styles.postText}>
              🧵 Breaking: Scientists have discovered a new species of deep-sea
              creature! Here's what we know so far... #Science #Discovery
            </Text>
            <View style={styles.threadContainer}>
              <View style={styles.threadLine} />
              <View style={styles.threadContent}>
                <Text style={styles.threadText}>
                  1/5 The creature was found at a depth of 3,000 meters in the
                  Pacific Ocean. It has bioluminescent properties that help it
                  navigate in the darkness.
                </Text>
                <Text style={styles.threadText}>
                  2/5 Researchers have named it "Abyssal Glowfish" due to its
                  unique ability to produce different colors of light depending
                  on its mood or environment.
                </Text>
                <Text style={styles.threadText}>
                  3/5 This discovery could revolutionize our understanding of
                  deep-sea ecosystems and how organisms adapt to extreme
                  pressure and darkness.
                </Text>
                <Text style={styles.threadText}>
                  4/5 The team used advanced ROV technology to capture footage
                  of the creature in its natural habitat, marking the first time
                  it has been observed alive.
                </Text>
                <Text style={styles.threadText}>
                  5/5 Full research paper will be published next month in the
                  Journal of Marine Biology. Stay tuned for more updates! 🔬
                </Text>
              </View>
            </View>
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>178</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="repeat" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>432</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>1.7K</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={20} color="#a0a0a0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quote Post */}
        <View style={styles.post}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=13" }}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <Text style={styles.username}>Mindful Moments</Text>
              <Text style={styles.handle}>@mindfulmoments</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.time}>6h</Text>
            </View>
            <Text style={styles.postText}>
              "The only way to do great work is to love what you do." - Steve
              Jobs
            </Text>
            <View style={styles.quoteContainer}>
              <View style={styles.quoteHeader}>
                <Image
                  source={{ uri: "https://i.pravatar.cc/150?img=14" }}
                  style={styles.quoteAvatar}
                />
                <View>
                  <Text style={styles.quoteName}>Steve Jobs</Text>
                  <Text style={styles.quoteHandle}>@stevejobs</Text>
                </View>
              </View>
              <Text style={styles.quoteText}>
                The only way to do great work is to love what you do.
              </Text>
              <Image
                source={{ uri: "https://picsum.photos/400/200?random=11" }}
                style={styles.quoteImage}
              />
            </View>
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>245</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="repeat" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>789</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>3.2K</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={20} color="#a0a0a0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Event Post */}
        <View style={styles.post}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=15" }}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <Text style={styles.username}>Tech Conference</Text>
              <Text style={styles.handle}>@techconf</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.time}>1d</Text>
            </View>
            <Text style={styles.postText}>
              Join us for the biggest tech conference of the year! 🎉
              #TechConference2023
            </Text>
            <View style={styles.eventContainer}>
              <View style={styles.eventHeader}>
                <Ionicons name="calendar-outline" size={20} color="#1DA1F2" />
                <Text style={styles.eventTitle}>Tech Conference 2023</Text>
              </View>
              <View style={styles.eventDetails}>
                <View style={styles.eventDetail}>
                  <Ionicons name="time-outline" size={16} color="#a0a0a0" />
                  <Text style={styles.eventText}>
                    Nov 15-17, 2023 · 9:00 AM - 6:00 PM
                  </Text>
                </View>
                <View style={styles.eventDetail}>
                  <Ionicons name="location-outline" size={16} color="#a0a0a0" />
                  <Text style={styles.eventText}>
                    Convention Center, San Francisco
                  </Text>
                </View>
                <View style={styles.eventDetail}>
                  <Ionicons name="people-outline" size={16} color="#a0a0a0" />
                  <Text style={styles.eventText}>2.5K attending</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.eventButton}>
                <Text style={styles.eventButtonText}>Register Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>156</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="repeat" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>432</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>987</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={20} color="#a0a0a0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    flex: 1,
  },
  post: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#2c2c2c",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  postContent: {
    flex: 1,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  username: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 4,
  },
  handle: {
    color: "#a0a0a0",
    marginRight: 4,
  },
  dot: {
    color: "#a0a0a0",
    marginRight: 4,
  },
  time: {
    color: "#a0a0a0",
  },
  postText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    color: "#a0a0a0",
    marginLeft: 4,
  },
  // Video styles
  videoContainer: {
    position: "relative",
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden",
  },
  videoThumbnail: {
    width: "100%",
    height: 225,
    borderRadius: 12,
  },
  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  videoDuration: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
  },
  // Poll styles
  pollContainer: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2c2c2c",
    borderRadius: 12,
    overflow: "hidden",
  },
  pollOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#2c2c2c",
    position: "relative",
  },
  pollOptionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
  },
  pollOptionText: {
    color: "#fff",
    fontSize: 16,
  },
  pollPercentage: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  pollBar: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(29, 161, 242, 0.2)",
    zIndex: 0,
  },
  pollInfo: {
    color: "#a0a0a0",
    fontSize: 14,
    marginBottom: 12,
  },
  // Thread styles
  threadContainer: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2c2c2c",
    borderRadius: 12,
    overflow: "hidden",
  },
  threadLine: {
    position: "absolute",
    left: 20,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: "#2c2c2c",
  },
  threadContent: {
    padding: 12,
  },
  threadText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
  },
  // Quote styles
  quoteContainer: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2c2c2c",
    borderRadius: 12,
    overflow: "hidden",
  },
  quoteHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#2c2c2c",
  },
  quoteAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  quoteName: {
    color: "#fff",
    fontWeight: "bold",
  },
  quoteHandle: {
    color: "#a0a0a0",
  },
  quoteText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 22,
    padding: 12,
  },
  quoteImage: {
    width: "100%",
    height: 200,
  },
  // Event styles
  eventContainer: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2c2c2c",
    borderRadius: 12,
    overflow: "hidden",
  },
  eventHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#2c2c2c",
  },
  eventTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  eventDetails: {
    padding: 12,
  },
  eventDetail: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  eventText: {
    color: "#fff",
    marginLeft: 8,
  },
  eventButton: {
    backgroundColor: "#1DA1F2",
    padding: 12,
    alignItems: "center",
  },
  eventButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
