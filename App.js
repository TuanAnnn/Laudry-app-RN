import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Stacknavigation from './src/navigation/Stacknavigation';
import HomeScreen from './src/screens/HomeScreen';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Stacknavigation/>
      <StatusBar style="auto" />
    </Provider>
  );
}
const styles = StyleSheet.create({
  
});
