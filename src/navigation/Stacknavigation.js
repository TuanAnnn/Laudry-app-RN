import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PickupScreen from '../screens/PickupScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();
const Stacknavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="PickUp" component={PickupScreen} />
        <Stack.Screen options={{headerShown:false}} name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stacknavigation

const styles = StyleSheet.create({})