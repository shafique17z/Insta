import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { postFooterIcons } from "../../data/posts";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter icons={postFooterIcons} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 1 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{comment.username} </Text>
          <Text style={{ fontWeight: "400" }}>{comment.comment}</Text>
        </Text>
      </View>
    ))}
  </>
);

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 1 }}>
    {!!post.comments.length && (
      <Text style={{ color: "grey" }}>
        View
        {post.comments.length > 1 ? " all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 3 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.username} </Text>
      <Text style={{ fontWeight: "400" }}>{post.caption}</Text>
    </Text>
  </View>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 5 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const PostFooter = ({ icons }) => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFootContainer}>
      <Icon iconUrl={icons[0].icon} iconStyles={styles.footerIconStyles} />
      <Icon iconUrl={icons[1].icon} iconStyles={styles.footerIconStyles} />
      <Icon
        iconUrl={icons[2].icon}
        iconStyles={[styles.footerIconStyles, styles.shareIcon]}
      />
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon
        iconUrl={icons[3].icon}
        iconStyles={[styles.footerIconStyles, styles.bookmarkIcon]}
      />
    </View>
  </View>
);

const Icon = ({ iconUrl, iconStyles }) => (
  <TouchableOpacity>
    <Image source={{ uri: iconUrl }} style={iconStyles} />
  </TouchableOpacity>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 400 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostHeader = ({ post }) => (
  <View style={styles.postHeaderContainer}>
    <View style={styles.postHeaderContent}>
      <Image
        style={styles.headerProfilePic}
        source={{ uri: post.profilePicture }}
      />
      <Text style={styles.postHeaderProfileText}>{post.username}</Text>
    </View>
    <View style={{ alignItems: "center" }}>
      <Text style={styles.threeDots}>...</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  leftFootContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
  footerIconStyles: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  bookmarkIcon: {
    marginRight: 0,
  },
  shareIcon: {
    transform: [{ rotate: "320deg" }],
    marginTop: -3,
  },
  threeDots: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
    marginRight: 8,
    marginBottom: 10,
  },
  postHeaderContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  postHeaderProfileText: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
  },
  headerProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 15,
    borderWidth: 1.5,
    borderColor: "#f46f23",
  },
  postHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: 5,
    padding: 8,
    backgroundColor: "black",
  },
  container: {
    marginBottom: 15,
    // backgroundColor: "tomato",
  },
});

export default Post;
