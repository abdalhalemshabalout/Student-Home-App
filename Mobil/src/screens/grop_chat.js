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

const grop_chat = ({ navigation }) => {
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
                navigation.navigate("Home");
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
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("grop_info");
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "700", paddingTop: 7 }}>
                Grup1
              </Text>
            </TouchableOpacity>
          </Text>

          <View style={{ position: "absolute", top: -1, right: 25 }}>
            <Image
              source={require("../../assets/grop1.png")}
              style={{
                width: 60,
                height: 55,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: "70%",
            width: "82%",
            marginTop: "8%",
            justifyContent: "center",
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                width: 100,
                height: 20,
                backgroundColor: "#879EA4",
                alignSelf: "center",
                borderRadius: 12,
                marginBottom: 10,
              }}
            >
              <Text style={{ textAlign: "center" }}>Today</Text>
            </View>

            <View
              style={{
                width: "100%",
                height: 160,
                backgroundColor: "#D5E7D4",
                alignSelf: "center",
                borderRadius: 12,
                position: "relative",
                marginBottom: 10,
              }}
            >
              <Image
                source={require("../../assets/grop.png")}
                style={{
                  width: 40,
                  height: 40,
                  position: "absolute",
                  top: 125,
                  left: 5,
                  zIndex: 50,
                }}
              />
              <View
                style={{
                  width: "90%",
                  height: "35%",
                  backgroundColor: "#FFCA42",
                  alignSelf: "center",
                  borderRadius: 12,
                  margin: 10,
                  paddingLeft: 15,
                  paddingTop: 10,
                }}
              >
                <Text>Ürün Adı:</Text>
                <Text> un</Text>
              </View>
              <View
                style={{
                  width: "90%",
                  height: "35%",
                  backgroundColor: "#D5E7D4",
                  alignSelf: "center",
                  borderRadius: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "49%",
                    height: "100%",
                    backgroundColor: "#FFCA42",
                    alignSelf: "center",
                    borderRadius: 12,
                    paddingLeft: 15,
                    paddingTop: 10,
                  }}
                >
                  <Text>Adedi:</Text>
                  <Text> 2 kg</Text>
                </View>
                <View
                  style={{
                    width: "49%",
                    height: "100%",
                    backgroundColor: "#FFCA42",
                    alignSelf: "center",
                    borderRadius: 12,
                    paddingLeft: 15,
                    paddingTop: 10,
                  }}
                >
                  <Text>Fiyatı:</Text>
                  <Text> 15₺</Text>
                </View>
              </View>
              <Text style={{ textAlign: "right", marginRight: 5 }}>
                01.01.2001
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: 210,
                backgroundColor: "#D5E7D4",
                alignSelf: "center",
                borderRadius: 12,
                position: "relative",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  width: "90%",
                  height: "30%",
                  backgroundColor: "#FFCA42",
                  alignSelf: "center",
                  borderRadius: 12,
                  margin: 10,
                  paddingLeft: 15,
                  paddingTop: 10,
                }}
              >
                <Text>Ürün Adı:</Text>
                <Text> un</Text>
              </View>
              <View
                style={{
                  width: "90%",
                  height: "27%",
                  backgroundColor: "#D5E7D4",
                  alignSelf: "center",
                  borderRadius: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "49%",
                    height: "100%",
                    backgroundColor: "#FFCA42",
                    alignSelf: "center",
                    borderRadius: 12,
                    paddingLeft: 15,
                    paddingTop: 10,
                  }}
                >
                  <Text>Adedi:</Text>
                  <Text> 2 kg</Text>
                </View>
                <View
                  style={{
                    width: "49%",
                    height: "100%",
                    backgroundColor: "#FFCA42",
                    alignSelf: "center",
                    borderRadius: 12,
                    paddingLeft: 15,
                    paddingTop: 10,
                  }}
                >
                  <Text>Fiyatı:</Text>
                  <Text> 15₺</Text>
                </View>
              </View>

              <TouchableOpacity
                style={[
                  {
                    backgroundColor: "#FFCA42",
                    borderColor: "#FFCA42",
                    borderRadius: 17,
                    borderColor: "#FFCA42",
                    width: "90%",
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    marginTop: 10,
                  },
                ]}
              >
                <Text
                  style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
                >
                  Gönder
                </Text>
              </TouchableOpacity>
              <Text style={{ textAlign: "right", marginRight: 5 }}>
                01.01.2001
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: 160,
                backgroundColor: "#D5E7D4",
                alignSelf: "center",
                borderRadius: 12,
                position: "relative",
                marginBottom: 10,
              }}
            >
              <Image
                source={require("../../assets/grop.png")}
                style={{
                  width: 40,
                  height: 40,
                  position: "absolute",
                  top: 125,
                  left: 5,
                  zIndex: 50,
                }}
              />

              <Image
                source={require("../../assets/icons8_menu_vertical_32.png")}
                style={{
                  width: 30,
                  height: 30,
                  position: "absolute",
                  top: 3,
                  right: -4,
                  zIndex: 50,
                }}
              />
              <View
                style={{
                  width: "90%",
                  height: "35%",
                  backgroundColor: "#FFCA42",
                  alignSelf: "center",
                  borderRadius: 12,
                  margin: 10,
                  paddingLeft: 15,
                  paddingTop: 10,
                }}
              >
                <Text>Ürün Adı:</Text>
                <Text> un</Text>
              </View>
              <View
                style={{
                  width: "90%",
                  height: "35%",
                  backgroundColor: "#D5E7D4",
                  alignSelf: "center",
                  borderRadius: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "49%",
                    height: "100%",
                    backgroundColor: "#FFCA42",
                    alignSelf: "center",
                    borderRadius: 12,
                    paddingLeft: 15,
                    paddingTop: 10,
                  }}
                >
                  <Text>Adedi:</Text>
                  <Text> 2 kg</Text>
                </View>
                <View
                  style={{
                    width: "49%",
                    height: "100%",
                    backgroundColor: "#FFCA42",
                    alignSelf: "center",
                    borderRadius: 12,
                    paddingLeft: 15,
                    paddingTop: 10,
                  }}
                >
                  <Text>Fiyatı:</Text>
                  <Text> 15₺</Text>
                </View>
              </View>
              <Text style={{ textAlign: "right", marginRight: 5 }}>
                01.01.2001
              </Text>
            </View>
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
            source={require("../../assets/add-square.png")}
            style={{
              width: 25,
              height: 25,
              marginRight: 55,
              marginLeft: 40,
            }}
          />
          <Text style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}>
            Yeni Ürün Ekle
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

export default grop_chat;
