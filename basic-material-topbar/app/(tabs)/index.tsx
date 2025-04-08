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

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Post 1 */}
        <View style={styles.post}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=1" }}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <Text style={styles.username}>Sarah Johnson</Text>
              <Text style={styles.handle}>@sarahj</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.time}>2h</Text>
            </View>
            <Text style={styles.postText}>
              Just finished my morning workout! 💪 Feeling energized and ready
              for the day ahead. #FitnessGoals #HealthyLiving
            </Text>
            <Image
              source={{ uri: "https://picsum.photos/400/300?random=1" }}
              style={styles.postImage}
            />
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>24</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="repeat" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>142</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>1.2K</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={20} color="#a0a0a0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Post 2 */}
        <View style={styles.post}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=2" }}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <Text style={styles.username}>Mike Chen</Text>
              <Text style={styles.handle}>@mikechen</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.time}>4h</Text>
            </View>
            <Text style={styles.postText}>
              Amazing sunset at the beach today! Nature never fails to amaze me
              🌅 #NaturePhotography #Sunset
            </Text>
            <Image
              source={{ uri: "https://picsum.photos/400/300?random=2" }}
              style={styles.postImage}
            />
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>18</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="repeat" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>89</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>856</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={20} color="#a0a0a0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Post 3 */}
        <View style={styles.post}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=3" }}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <Text style={styles.username}>Emma Wilson</Text>
              <Text style={styles.handle}>@emmaw</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.time}>6h</Text>
            </View>
            <Text style={styles.postText}>
              Just launched my new tech startup! 🚀 Excited to share our journey
              with you all. #StartupLife #TechInnovation
            </Text>
            <Image
              source={{ uri: "https://picsum.photos/400/300?random=3" }}
              style={styles.postImage}
            />
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>156</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="repeat" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>234</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>2.1K</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={20} color="#a0a0a0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Post 4 */}
        <View style={styles.post}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=4" }}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <Text style={styles.username}>David Kim</Text>
              <Text style={styles.handle}>@davidk</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.time}>8h</Text>
            </View>
            <Text style={styles.postText}>
              Cooking up a storm in the kitchen! 🍳 Here's my latest recipe for
              Korean BBQ. Who's hungry? #Foodie #KoreanCuisine
            </Text>
            <Image
              source={{ uri: "https://picsum.photos/400/300?random=4" }}
              style={styles.postImage}
            />
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>89</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="repeat" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>167</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>943</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={20} color="#a0a0a0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Post 5 */}
        <View style={styles.post}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=5" }}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <Text style={styles.username}>Lisa Martinez</Text>
              <Text style={styles.handle}>@lisam</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.time}>12h</Text>
            </View>
            <Text style={styles.postText}>
              Just completed my first marathon! 🏃‍♀️ Never thought I'd make it,
              but here we are! Thanks for all the support! #Running #Marathon
              #Achievement
            </Text>
            <Image
              source={{ uri: "https://picsum.photos/400/300?random=5" }}
              style={styles.postImage}
            />
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>245</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="repeat" size={20} color="#a0a0a0" />
                <Text style={styles.actionText}>432</Text>
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
});
