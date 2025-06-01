import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Icon mobile + train

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons
            name="train-outline"
            size={24}
            color="white"
            style={styles.logoIcon}
          />
          <Text style={styles.logoText}>MetroGo</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.skipText}>Bỏ qua</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <Ionicons name="train" size={64} color="white" />
        </View>
        <Ionicons
          name="phone-portrait"
          size={24}
          color="white"
          style={styles.phoneIcon}
        />

        <Text style={styles.title}>
          <Text style={styles.bold}>Đặt vé tàu metro{"\n"}</Text>
          <Text style={styles.highlight}>nhanh chóng & tiện lợi</Text>
        </Text>

        <Text style={styles.description}>
          Ứng dụng đặt vé tàu metro thông minh giúp bạn di chuyển dễ dàng khắp
          thành phố với vài thao tác đơn giản
        </Text>
      </View>

      {/* Button */}
      <View style={styles.buttonWrapper}>
        <Button
          title="Giới thiệu về ứng dụng"
          onPress={() => navigation.navigate("Introduction")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f0ff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoIcon: {
    backgroundColor: "#3478f6",
    padding: 6,
    borderRadius: 8,
    marginRight: 6,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "600",
  },
  skipText: {
    fontSize: 14,
    color: "#333",
  },
  content: {
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 20,
  },
  iconWrapper: {
    width: 140,
    height: 140,
    backgroundColor: "#3478f6",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    elevation: 5,
  },
  phoneIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#18d06f",
    padding: 10,
    borderRadius: 20,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
  },
  bold: {
    fontWeight: "bold",
  },
  highlight: {
    color: "#3478f6",
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginTop: 8,
  },
  buttonWrapper: {
    marginTop: 40,
  },
});
