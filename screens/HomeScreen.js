import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng đến với ứng dụng Metro Ticket!</Text>
      <Button
        title="Giới thiệu về ứng dụng"
        onPress={() => navigation.navigate("Introduction")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
  },
});
