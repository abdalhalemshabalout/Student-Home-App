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

const create_grop = ({ navigation }) => {
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
                navigation.navigate("Add_user_Screen");
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
          <TextInput
            style={{
              width: "90%",
              height: 50,
              borderColor: "#fff",
              borderWidth: 1,
              marginBottom: 10,
              borderRadius: 30,
              paddingLeft: 45,
            }}
          ></TextInput>

          <View style={{ position: "absolute", top: 4, right: 27 }}>
            <Image
              source={require("../../assets/240375-1.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: "70%",
            width: "80%",
            marginTop: "8%",
            textAlign:"left"
          }}
        >
          <Text style={{ marginBottom: 10 ,fontSize:15}}>Katılımcılar</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              style={[
                {
                  backgroundColor: "#D5E7D4",
                  borderColor: "#D5E7D4",
                  borderRadius: 17,
                  borderWidth: 1,
                  width: "100%",
                  height: 40,
                  marginBottom: 20,
                  flexDirection: "row",
                  alignItems: "center",
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
                  height: 40,
                  marginBottom: 20,
                  flexDirection: "row",
                  alignItems: "center",
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
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: 20,
              flexDirection: "row",
            },
          ]}
        >
          <Image
            source={require("../../assets/grop.png")}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}>
            Grubu Oluştur
          </Text>

          <Image
            source={require("../../assets/expand-right.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D5E7D4",
  },
  containerr: {
    flex: 1,
    backgroundColor: "#D5E7D4",
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

export default create_grop;
