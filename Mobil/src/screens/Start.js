import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Start = ({ navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1F5460",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../assets/masseg.png")}
        style={{
          width: "60%",
          height: "40%",
          position: "absolute",
          right: 0,
          top: 25,
        }}
      />

      <Image
        source={require("../../assets/myhome.png")}
        style={{
          width: 200,
          height: 60,
          position: "absolute",
          left: 0,
          top: 25,
        }}
      />
      <Image
        source={require("../../assets/gooo.png")}
        style={{
          width: 257,
          height: 130,
          position: "absolute",
          left: 10,
          top: 300,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={styles.submit}
      >
        <Text style={styles.submitText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={styles.submit2}
      >
        <Text style={styles.submitText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  submit: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFCA42",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#FFCA42",
    width: "90%",
    position: "absolute",
    left: 0,
    marginLeft: "5%",
    top: "70%",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  submit2: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#D5E7D4",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#D5E7D4",
    width: "90%",
    position: "absolute",
    left: 0,
    marginLeft: "5%",
    top: "80%",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  submitText: {
    color: "#10405A",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default Start;
