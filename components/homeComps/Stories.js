import { View, Image, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
import { users } from "../../data/users";

const Stories = () => {
  return (
    <View style={styles.container}>
      {/* //scrollview */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* //map through users */}
        {users.map((story, index) => (
          <View style={styles.storyContainer} key={index}>
            <Image
              style={styles.storyStyles}
              source={{ uri: story.imageUri }}
            />
            <Text style={styles.storyNameStyles}>
              {story.username.length > 11
                ? story.username.slice(0, 9).toLowerCase() + "..."
                : story.username.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    // paddingEnd: 10,
    // borderTopWidth: 1,
    // borderTopColor: "red",
    // backgroundColor: "tomato",
  },
  storyStyles: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginLeft: 15,
    borderWidth: 3,
    borderColor: "#f46f23",
    //q: apply a border color, it should be gradient which contains instagram's logo's colors
  },
  storyContainer: {
    //   borderRadius: 50,
    //   padding: 3,
    //   marginLeft: 10,
    //   borderWidth: 3,
    //   borderColor: "pink",
    // justifyContent: "center",
    alignItems: "center",
  },
  storyNameStyles: {
    color: "white",
    marginTop: 2,
    fontWeight: "400",
    marginStart: 12,
  },
});

export default Stories;
