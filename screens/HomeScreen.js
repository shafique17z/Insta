import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

import Header from "../components/homeComps/Header";
import Stories from "../components/homeComps/Stories";
import { posts } from "../data/posts";
import Post from "../components/homeComps/Post";
import { bottomTabIcons } from "../data/bottomTabIcons";
import BottomTabs from "../components/homeComps/BottomTabs.js";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 5,
  },
});

export default HomeScreen;
