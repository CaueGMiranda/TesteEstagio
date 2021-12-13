import React from 'react';
import { StyleSheet, } from 'react-native';
import AppLoading from 'expo-app-loading';
import Details from './pages/Details';
import LoginScreen from './pages/LoginScreen';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />; 
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'LoginScreen' >
          <Stack.Screen name='LoginScreen' component={LoginScreen} options = {{headerShown:false}}/>
          <Stack.Screen name='Home' component={Home} options = {{headerShown:false}}/>
          <Stack.Screen name='Details' component={Details} options = {{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
	  );
  }
}

const styles = StyleSheet.create({

});



