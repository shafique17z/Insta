import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = () => (
  <View style={styles.container}>
    <Header />
    <FormikPostUploader />
  </View>
);

const Header = () => (
  <View>
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/material-rounded/60/ffffff/delete-sign.png",
          }}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>New post</Text>
      <Text></Text>
      <Image
        source={{
          uri: "https://img.icons8.com/fluency-systems-regular/96/0396ef/long-arrow-right.png",
        }}
        style={{
          width: 30,
          height: 30,
        }}
      />
    </View>
    <Divider width={1} orientation="horizontal" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 1,
  },
  headerContainer: {
    // backgroundColor: "#5e64e5",
    // marginTop: 5,
    padding: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginStart: 25,
    marginEnd: 170, //hardcoded the right arrow icon to the end of screen.
    fontWeight: "700",
    // marginRight: 20,
  },
});

export default AddNewPost;
