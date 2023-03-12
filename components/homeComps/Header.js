import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { Divider } from "react-native-elements/dist/divider/Divider";

const Header = () => {
  return (
    <View>
      {/* // HEADER CONTAINER */}
      <View style={styles.container}>
        {/* header logo */}
        <TouchableOpacity>
          <Image
            source={require("../../assets/insta-logo.png")}
            style={styles.headerLogo}
          />
        </TouchableOpacity>

        {/* header icons on the right container*/}
        <View style={styles.icContainer}>
          <TouchableOpacity>
            <View style={styles.unreadNotifications} />
            <Image
              source={{
                uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
              }}
              style={styles.headerIcons}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>2</Text>
            </View>

            <Image
              source={{
                uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
              }}
              style={styles.headerIcons}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <Divider width={0.5} orientation="vertical" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
    // paddingBottom: 5,
    // backgroundColor: "grey",
    // borderBottomWidth: 1,
    // borderBottomColor: "yellow",
  },
  unreadNotifications: {
    position: "absolute",
    backgroundColor: "#fd3145",
    width: 8,
    height: 8,
    borderRadius: 4,
    left: 38,
    bottom: 18,
    zIndex: 100,
  },
  unreadBadge: {
    position: "absolute",
    backgroundColor: "#fd3145",
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    left: 32,
    paddingBottom: 1,
    bottom: 16,
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "800",
    // fontFamily: "sans-serif",
    fontSize: 12,
  },
  icContainer: {
    flexDirection: "row",
  },
  headerLogo: {
    width: 120,
    height: 50,
    resizeMode: "contain",
    // start: 15,
  },
  headerIcons: {
    width: 27,
    height: 27,
    resizeMode: "contain",
    marginLeft: 20,
  },
});

export default Header;
