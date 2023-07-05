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
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)
  const navigation = useNavigation()
  const login =()=>{
    signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
      console.log('userCredential',userCredential)

      const user = userCredential.user
      console.log(user)
    })
  }
  useEffect(()=>{
    setLoading(true)
    const unsubcribe = auth.onAuthStateChanged((authUser)=>{
      if(!authUser){
        setLoading(false)
      }
      if(authUser){
        navigation.navigate('Home')
      }
    });
    return unsubcribe
  },[])
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
      }}
    >
      {loading? (
        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',flex:1}}>
          <Text style={{marginRight:10}}>Loading</Text>
          <ActivityIndicator size='large' color='red'></ActivityIndicator>
        </View>
      ):(
        <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>
            Sign In
          </Text>
          <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
            Sign In Your Account
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
              autoCapitalize="none"
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
          {/*button login */}

          <Pressable
          onPress={login}
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
              Login
            </Text>
          </Pressable>

          {/*button register */}
          <Pressable style={{ marginTop: 20 }} onPress={()=>navigation.navigate('Register')}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                color: "gray",
                fontWeight: "500",
              }}
            >
              Don't have a account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      )}  
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
