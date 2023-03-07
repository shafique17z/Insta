import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
// import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HomeScreen /> */}
      <StatusBar style="light" backgroundColor="black" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 30,
  },
});
