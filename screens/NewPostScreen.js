import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = () => {
  return (
    <View style={styles.container}>
      <AddNewPost />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewPostScreen;
