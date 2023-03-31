import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const information = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 35, left: 10 }}>
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
              marginBottom: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../assets/219969-2.png")}
        style={{
          width: 100,
          height: 100,
          marginBottom: 20,
          marginTop: 20,
        }}
      />
      <View
        style={{
          width: "95%",
          height: "80%",
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={{ width: "48%" }}>
            <Image
              source={require("../../assets/vector1.png")}
              style={{
                width: 15,
                height: 20,
                marginBottom: 20,
                marginLeft: 15,
                position: "absolute",
                marginTop: 11,
              }}
            />
            <TextInput style={styles.input} placeholder="İsim"></TextInput>
          </View>
          <View style={{ width: "48%" }}>
            <Image
              source={require("../../assets/vector1.png")}
              style={{
                width: 15,
                height: 20,
                marginBottom: 20,
                marginLeft: 15,
                position: "absolute",
                marginTop: 11,
              }}
            />
            <TextInput style={styles.input} placeholder="Soyisim"></TextInput>
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/vector1.png")}
            style={{
              width: 15,
              height: 20,
              marginBottom: 20,
              marginLeft: 15,
              position: "absolute",
              marginTop: 11,
            }}
          />
          <TextInput style={styles.input} placeholder="Kullanıcı Adı"></TextInput>
        </View>
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/compass.png")}
            style={{
              width: 20,
              height: 20,
              marginBottom: 20,
              marginLeft: 15,
              position: "absolute",
              marginTop: 11,
            }}
          />
          <TextInput style={styles.input} placeholder="Adres"></TextInput>
        </View>
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/phone.png")}
            style={{
              width: 15,
              height: 22,
              marginBottom: 20,
              marginLeft: 15,
              position: "absolute",
              marginTop: 11,
            }}
          />
          <TextInput style={styles.input} placeholder="Telefon"></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={{ width: "48%" }}>
            <Image
            source={require("../../assets/icons8_street_view_32.png")}
            style={{
              width: 19,
              height: 25,
                marginBottom: 20,
                marginLeft: 15,
                position: "absolute",
                marginTop: 11,
              }}
            />
            <TextInput style={styles.input} placeholder="Şehir"></TextInput>
          </View>
          <View style={{ width: "48%" }}>
            <Image
              source={require("../../assets/cinsiyet.png")}
              style={{
                width: 17,
                height: 22,
                marginBottom: 20,
                marginLeft: 15,
                position: "absolute",
                marginTop: 11,
              }}
            />
            <TextInput style={styles.input} placeholder="Cinsiyet"></TextInput>
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/frame1.png")}
            style={{
              width: 17,
              height: 20,
              marginBottom: 20,
              marginLeft: 15,
              position: "absolute",
              marginTop: 11,
            }}
          />
          <TextInput style={styles.input} placeholder="E-mail"></TextInput>
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
          <TextInput style={styles.input} placeholder="Şifre"></TextInput>
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
          <TextInput style={styles.input} placeholder="Şifre Tekrar"></TextInput>
        </View>

        <View
          style={{
            width: "100%",

          }}
        >
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.submitText}>Kaydet</Text>
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
    width: "100%",
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
  submit: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFCA42",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#FFCA42",
    height: 45,
    width: "100%",
  },
  submitText: {
    color: "#10405A",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
});
export default information;
