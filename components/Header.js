import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> YAPILACAKLAR </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "white"
  },
});
