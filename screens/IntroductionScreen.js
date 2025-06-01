import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function IntroductionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giới thiệu về Metro Ticket</Text>
      <Text style={styles.body}>
        Ứng dụng Metro Ticket giúp bạn mua vé tàu metro nhanh chóng, tiện lợi và
        an toàn. Bạn có thể xem tuyến đường, đặt vé theo thời gian và lưu vé
        ngay trong ứng dụng.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
