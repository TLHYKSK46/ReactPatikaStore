import React from "react";
import { View, Image, Text, TextInput } from "react-native";
import styles from "./Search.style";
const Search = () => {
  const [text, onChangeText] = React.useState("Search..");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
      //  value={text}
        placeholder={"Search..."}
      />
    </View>
  );
};
export default Search;
