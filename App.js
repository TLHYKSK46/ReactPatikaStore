import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import Search from "./src/componenets/Search";
import product_data from "./src/product.json";
import Card from "./src/componenets/Card"
export default function App() {
  const renderProduct = ({ item }) => <Card product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
     
      <FlatList data={product_data} renderItem={renderProduct}
        initialNumToRender={2} horizontal={false }numColumns={2} 
        ListHeaderComponent={() => (
           <Search />
        )}
      >

    </FlatList>
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    padding:10
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    color: "#660099",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
});
