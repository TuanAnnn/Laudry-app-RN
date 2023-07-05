import {
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    Pressable,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  
  const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigation = useNavigation()
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          padding: 10,
        }}
      >
        <KeyboardAvoidingView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>
              Register
            </Text>
            <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
              Create a new Account
            </Text>
          </View>
  
          <View style={{ marginTop: 50 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../../assets/email.png")}
              ></Image>
              <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                placeholder="Email"
                placeholderTextColor="black"
                style={{
                  borderBottomWidth: 1,
                  borderRadius: 12,
                  marginLeft: 13,
                  borderBottomColor: "gray",
                  width: 300,
                  marginVertical: 10,
                  fontSize: email ? 18 : 18,
                }}
              />
            </View>
            {/* password */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../../assets/key.png")}
              ></Image>
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="black"
                style={{
                  borderBottomWidth: 1,
                  borderRadius: 12,
                  marginLeft: 13,
                  borderBottomColor: "gray",
                  width: 300,
                  marginVertical: 20,
                  fontSize: password ? 18 : 18,
                }}
              />
            </View>
            {/* repassword */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../../assets/telephone.png")}
              ></Image>
              <TextInput
                value={phone}
                onChangeText={(value) => setPhone(value)}
                placeholder="Phone No"
                placeholderTextColor="black"
                style={{
                  borderBottomWidth: 1,
                  borderRadius: 12,
                  marginLeft: 13,
                  borderBottomColor: "gray",
                  width: 300,
                  marginVertical: 10,
                  fontSize: password ? 18 : 18,
                }}
              />
            </View>
            {/*button login */}
  
            <Pressable
              style={{
                width: 200,
                backgroundColor: "#318CE7",
                padding: 15,
                borderRadius: 7,
                marginTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
                Register
              </Text>
            </Pressable>
  
            {/*button register */}
            <Pressable style={{ marginTop: 20 }} onPress={()=>navigation.navigate('Login')}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 17,
                  color: "gray",
                  fontWeight: "500",
                }}
              >
                Already have a account ? Sign In
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default RegisterScreen;
  
  const styles = StyleSheet.create({});
  