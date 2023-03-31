import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { useState } from "react";

const Add_user_Screen = ({ navigation }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 35, left: 10, zIndex: 2 }}>
        <TouchableOpacity
          style={{ zIndex: 20 }}
          onPress={() => {
            navigation.navigate("Start");
          }}
        >
          <Image
            source={require("../../assets/frame4.png")}
            style={{
              width: 30,
              height: 30,
              marginBottom: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerin}>
        <Image
          source={require("../../assets/imagesremovebgpreview-1.png")}
          style={{ width: 210, height: 210, marginBottom: 5, marginLeft: 25 }}
        />

        <Text style={styles.title}>Hoş Geldin</Text>
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/vector1.png")}
            style={{
              width: 17,
              height: 22,
              marginBottom: 20,
              marginLeft: 15,
              position: "absolute",
              marginTop: 11,
            }}
          />
          <TextInput
            onChange={(text) => setEmail(text, email)}
            value={email}
            style={styles.input}
            placeholder="E-mail"
          ></TextInput>
        </View>
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/frame3.png")}
            style={{
              width: 17,
              height: 22,
              marginBottom: 20,
              marginLeft: 15,
              position: "absolute",
              marginTop: 11,
            }}
          />
          <TouchableOpacity style={{ zIndex: 20 }}>
            <Image
              source={require("../../assets/frame6.png")}
              style={{
                width: 20,
                height: 22,
                marginBottom: 20,
                marginLeft: 15,
                position: "absolute",
                marginTop: 11,
                right: 15,
              }}
            />
          </TouchableOpacity>
          <TextInput
            secureTextEntry={true}
            onChange={(text) => setPassword(text, password)}
            value={password}
            style={styles.input}
            placeholder="********"
          ></TextInput>
        </View>
        <TouchableOpacity
          style={{ width: "100%", marginBottom: 10, marginTop: 7 }}
        >
          <Text
            style={{ color: "#1F5460", textAlign: "right" }}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Şifreni mi Unuttun?
          </Text>
        </TouchableOpacity>
        <View style={{ width: "100%", margin: 10 }}>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => {
              if (email != "" && password != "") {
                navigation.navigate("Home");
              }
            }}
          >
            <Text style={styles.submitText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#1F5460" }}>Hesabın yok mu? </Text>
          <TouchableOpacity>
            <Text
              style={{ color: "#1F5460", textDecorationLine: "underline" }}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Kayıt ol.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 35 }}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons8_Facebook_64.png")}
              style={{
                width: 40,
                height: 40,
                marginBottom: 20,
                marginRight: 5,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../assets/icons8_google_64.png")}
              style={{
                width: 40,
                height: 40,
                marginBottom: 20,
                marginRight: 5,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../assets/icons8_twitter_64.png")}
              style={{
                width: 40,
                height: 40,
                marginBottom: 20,
                marginRight: 5,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  containerin: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 1,
  },
  input: {
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#D1D7D8",
    width: "100%",
    textAlign: "left",
    height: 45,
    paddingLeft: 45,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#1F5460",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 20,
  },
  submit: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFCA42",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#FFCA42",
    height: 45,
  },
  submitText: {
    color: "#10405A",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default Add_user_Screen;
