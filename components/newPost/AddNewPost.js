import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const AddNewPost = () => (
  <View style={styles.container}>
    <Header />
  </View>
);

const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
        }}
        style={{
          width: 30,
          height: 30,
        }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    marginTop: 5,
    fontSize: 20,
    fontWeight: "700",
    marginRight: 20,
  },
});

export default AddNewPost;
