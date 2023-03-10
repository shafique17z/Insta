import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{
          uri: activeTab === icon.name ? icon.activeIcon : icon.inactiveIcon,
        }}
        style={[
          styles.bottomTabIconStyles,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon icon={icon} key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // wrapper: {
  //   position: "absolute",
  //   width: "100%",
  //   bottom: "3%",
  //   zIndex: 999,
  //   backgroundColor: "#000",
  // },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 55,
    paddingTop: 10,
  },
  bottomTabIconStyles: {
    width: 30,
    height: 30,
  },
});

export default BottomTabs;
