import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./Card.style";
const Card = (props) => {
    console.log(props)
  return(
   <View style={styles.container}>
      <Image style={styles.image} source={{uri:props.product.imgURL}} /> 
      <Text style={styles.title}>{props.product.title}</Text>
      <Text style={styles.price}>{props.product.price}</Text>
      
 

  </View>
  )
};
export default Card;
