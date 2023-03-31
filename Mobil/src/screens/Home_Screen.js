import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Home_Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerr}>
        <View style={{ position: "absolute", top: 35, left: 10 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
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
        <View style={{ position: "absolute", top: 42, right: 10 }}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons8_menu_vertical_32.png")}
              style={{
                width: 30,
                height: 30,
                marginBottom: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../assets/219969-2.png")}
          style={{
            width: 120,
            height: 120,
            marginBottom: 20,
          }}
        />
        <View
          style={{
            width: "100%",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            style={[
              styles.submit,
              { backgroundColor: "#879EA4", borderColor: "#879EA4" },
            ]}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.submitText}>Gruplar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.submit,
              { backgroundColor: "#D5E7D4", borderColor: "#D5E7D4" },
            ]}
            onPress={() => {
              navigation.navigate("Raporlar");
            }}
          >
            <Text style={styles.submitText}>Raporlar</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: "60%",
            width: "80%",
            marginTop: "8%",
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("chat");
              }}
              style={[
                {
                  flexDirection: "row",
                  backgroundColor: "#FFCA42",
                  borderColor: "#FFCA42",
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: "#FFCA42",
                  width: "100%",
                  height: 40,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: 20,
                },
              ]}
            >
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Grup1
              </Text>
              <Text style={styles.submitText}>Katılımcı Sayısı: 5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                {
                  flexDirection: "row",
                  backgroundColor: "#FFCA42",
                  borderColor: "#FFCA42",
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: "#FFCA42",
                  width: "100%",
                  height: 40,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: 20,
                },
              ]}
            >
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Grup1
              </Text>
              <Text style={styles.submitText}>Katılımcı Sayısı: 5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                {
                  flexDirection: "row",
                  backgroundColor: "#FFCA42",
                  borderColor: "#FFCA42",
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: "#FFCA42",
                  width: "100%",
                  height: 40,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: 20,
                },
              ]}
            >
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Grup1
              </Text>
              <Text style={styles.submitText}>Katılımcı Sayısı: 5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                {
                  flexDirection: "row",
                  backgroundColor: "#FFCA42",
                  borderColor: "#FFCA42",
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: "#FFCA42",
                  width: "100%",
                  height: 40,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: 20,
                },
              ]}
            >
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Grup1
              </Text>
              <Text style={styles.submitText}>Katılımcı Sayısı: 5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                {
                  flexDirection: "row",
                  backgroundColor: "#FFCA42",
                  borderColor: "#FFCA42",
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: "#FFCA42",
                  width: "100%",
                  height: 40,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: 20,
                },
              ]}
              onPress={() => {
                navigation.navigate("chat");
              }}
            >
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Grup1
              </Text>
              <Text style={styles.submitText}>Katılımcı Sayısı: 5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                {
                  flexDirection: "row",
                  backgroundColor: "#FFCA42",
                  borderColor: "#FFCA42",
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: "#FFCA42",
                  width: "100%",
                  height: 40,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: 20,
                },
              ]}
            >
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Grup1
              </Text>
              <Text style={styles.submitText}>Katılımcı Sayısı: 5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                {
                  flexDirection: "row",
                  backgroundColor: "#FFCA42",
                  borderColor: "#FFCA42",
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: "#FFCA42",
                  width: "100%",
                  height: 40,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: 20,
                },
              ]}
            >
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Grup1
              </Text>
              <Text style={styles.submitText}>Katılımcı Sayısı: 5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                {
                  flexDirection: "row",
                  backgroundColor: "#FFCA42",
                  borderColor: "#FFCA42",
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: "#FFCA42",
                  width: "100%",
                  height: 40,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: 20,
                },
              ]}
            >
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Grup1
              </Text>
              <Text style={styles.submitText}>Katılımcı Sayısı: 5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                {
                  flexDirection: "row",
                  backgroundColor: "#FFCA42",
                  borderColor: "#FFCA42",
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: "#FFCA42",
                  width: "100%",
                  height: 40,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: 20,
                },
              ]}
            >
              <Text
                style={{ fontSize: 20, color: "#10405A", fontWeight: "bold" }}
              >
                Grup1
              </Text>
              <Text style={styles.submitText}>Katılımcı Sayısı: 5</Text>
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
    backgroundColor: "#fff",
  },
  containerr: {
    flex: 1,
    backgroundColor: "#FBFAFC",
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
export default Home_Screen;
