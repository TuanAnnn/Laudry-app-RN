import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import Carousel from "../components/Carousel";
import Service from "../components/Service";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/ProduceReducer";
import { useNavigation } from "@react-navigation/native";
import {db} from '../../firebase'
import { collection, getDoc, getDocs } from "firebase/firestore";

const services = [
  {
    id: "0",
    image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
    name: "shirt",
    quantity: 0,
    price: 10,
  },
  {
    id: "11",
    image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
    name: "T-shirt",
    quantity: 0,
    price: 10,
  },
  {
    id: "12",
    image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
    name: "dresses",
    quantity: 0,
    price: 10,
  },
  {
    id: "13",
    image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
    name: "jeans",
    quantity: 0,
    price: 10,
  },
  {
    id: "14",
    image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
    name: "Sweater",
    quantity: 0,
    price: 10,
  },
  {
    id: "15",
    image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
    name: "shorts",
    quantity: 0,
    price: 10,
  },
  {
    id: "16",
    image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
    name: "Sleeveless",
    quantity: 0,
    price: 10,
  },
];

export default function HomeScreen() {
  const cart = useSelector((state) => state.cart.cart);
  //console.log(cart)
  const dispatch = useDispatch();
  const [item,setItem] = useState([])
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "We are loading you location"
  );
  const navigation = useNavigation()
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);
  const total = cart.map((item)=>item.quantity*item.price).reduce((curr,prev)=>curr+prev,0);
  useEffect(() => {
    checkIfLocationEnable();
    getCurrentLocation();
  }, []);
  const checkIfLocationEnable = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please Enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Location services not enabled",
        "Please Enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }
    const { coords } = await Location.getCurrentPositionAsync();
    //console.log("coords",coords)
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      //console.log("location",response)
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setdisplayCurrentAddress(address);
      }
    }
  };
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    if (product.length > 0) return;
    //fetch product
    const fetchProduct = async() => {
      const colRef = collection(db,"types");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        item.push(doc.data());
      });
      item?.map((service) => dispatch(getProducts(service)));
    };
    fetchProduct();
  }, []);
  console.log(product)
  return (
    <>
    <ScrollView style={{ backgroundColor: "#F0F0F0", marginTop: 50 }}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Image source={require("../../assets/location_red.png")}></Image>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>
        <Pressable onPress={()=>navigation.navigate('Profile')} style={{ marginLeft: "auto", marginRight: 10 }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{
              uri: "https://avatars.githubusercontent.com/u/91050541?v=4",
            }}
          ></Image>
        </Pressable>
      </View>
      {/* Search Bar */}
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 0.8,
          borderColor: "#C0C0C0",
          borderRadius: 8,
        }}
      >
        <TextInput placeholder="Search for items or More"></TextInput>
        <Image source={require("../../assets/search_sm.png")}></Image>
      </View>
      {/* Image Carousel */}
      <Carousel />
      {/* Service Component */}
      <Service />
      {/* Render all the products */}
      {product.map((service, index) => (
        <DressItem item={service} index={index} />
      ))}
    </ScrollView>
    {
      total == 0?(
        null
      ):(
        <Pressable
        style={{
         backgroundColor: "#088F8F",
         padding: 10,
         marginBottom: 40,
         margin: 15,
         borderRadius: 7,
         flexDirection: "row",
         alignItems: "center",
         justifyContent:"space-between",
       }}
       >
         <View>
           <Text style={{fontSize:17,fontWeight:"600",color:"white"}}>{cart.length <=1? cart.length+' item' : cart.length+' items'} | $ {total}</Text>
           <Text style={{fontSize:15,fontWeight:"400",color:"white",marginVertical:6}}>extra charges might apply</Text>
         </View>
   
         <Pressable onPress={()=>navigation.navigate('PickUp')}>
           <Text style={{fontSize:17,fontWeight:"600",color:"white"}}>View Bucket</Text>
         </Pressable>
       </Pressable>
      )
    }
    </>
  );
}
