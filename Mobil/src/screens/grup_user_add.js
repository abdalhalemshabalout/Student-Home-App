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

const grop_info = ({ navigation }) => {
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

          <View style={{ position: "absolute", top: 3, right: 25 }}>
            <Image
              source={require("../../assets/470308-1.png")}
              style={{
                width: 55,
                height: 55,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: "65%",
            width: "90%",
            marginTop: "4%",
            justifyContent: "center",
            borderColor: "#000",
            backgroundColor: "#D5E7D4",
            borderRadius: 15,
            borderWidth: 1,
            marginBottom: 10,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              style={[
                {
                  backgroundColor: "#D5E7D4",
                  borderColor: "#D5E7D4",
                  borderRadius: 17,
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  marginBottom: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 20,
                  paddingTop: 20,
                },
              ]}
            >
              <Image
                source={require("../../assets/219969-11.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 12,
                }}
              />
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Lisa Kudrow
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {
                  backgroundColor: "#D5E7D4",
                  borderColor: "#D5E7D4",
                  borderRadius: 17,
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  marginBottom: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 20,
                  paddingTop: 20,
                  zIndex: 50,
                },
              ]}
            >
              <Image
                source={require("../../assets/219969-11.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 12,
                }}
              />
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Lisa Kudrow
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#FFCA42",
              borderColor: "#FFCA42",
              borderRadius: 17,
              borderColor: "#FFCA42",
              width: "90%",
              height: 45,
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 20,
              flexDirection: "row",
            },
          ]}
        >
          <Image
            source={require("../../assets/add-duotone.png")}
            style={{
              width: 35,
              height: 35,
              marginRight: 55,
              marginLeft: 40,
            }}
          />
          <Text style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}>
            Gruba Ekle
          </Text>
        </TouchableOpacity>
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

export default grop_info;
