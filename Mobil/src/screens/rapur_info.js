import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { useState } from "react";

const rapur_info = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerr}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ position: "absolute", top: 10, left: 27, zIndex: 50 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("grop_info");
              }}
            >
              <Image
                source={require("../../assets/frame4.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              width: "90%",
              height: 50,
              borderColor: "#fff",
              backgroundColor: "#D5E7D4",
              borderWidth: 1,
              marginBottom: 10,
              borderRadius: 30,
              paddingLeft: 45,
              fontSize: 25,
              fontWeight: "700",
              paddingTop: 7,
            }}
          >
            Grup1
          </Text>

          <View style={{ position: "absolute", top: -1, right: 24 }}>
            <Image
              source={require("../../assets/grop1.png")}
              style={{
                width: 65,
                height: 55,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: "75%",
            width: "90%",
            marginTop: "4%",
            justifyContent: "center",
            borderColor: "#000",
            backgroundColor: "#D5E7D4",
            borderRadius: 15,
            borderWidth: 1,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              style={[
                {
                  flexDirection: "row",
                  backgroundColor: "#FFCA42",
                  borderColor: "#FFCA42",
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: "#FFCA42",
                  width: "98%",
                  height: 40,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginTop: 15,
                  alignSelf: "center",
                },
              ]}
            >
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Grup1
              </Text>
              <Text style={styles.submitText}>01.01.2001</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F5460",
  },
  containerr: {
    flex: 1,
    backgroundColor: "#1F5460",
    justifyContent: "center",
    alignItems: "center",
  },
  submit: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#000",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#000",
    width: "40%",
  },
  submitText: {
    color: "#10405A",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default rapur_info;
