import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddToDo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        placeholder="Yeni Yapılacak Ekle"
        onChangeText={changeHandler}
      />
      <Button 
      onPress={() => submitHandler(text)} 
      title="Ekle" 
      color="orange" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
  },
});
