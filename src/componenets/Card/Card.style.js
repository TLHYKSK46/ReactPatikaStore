import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eceff1",
    borderRadius: 15,
    margin: 5,
    alignItems: "center",
     width: Dimensions.get("window").width / 2.1,
padding:10
  },
  image: {
    borderRadius: 10,
    margin: 5,
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width / 3,
  },
  title: {
    fontWeight: "bold",
    margin: 5,
  },
  price: {
    fontSize: 12,
    textAlign:"left",
        margin: 5,
  },
});
export default styles;
