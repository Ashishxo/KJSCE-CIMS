import React, {useState} from "react";

import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppStack from './stacks/AppStack';
import AuthStack from "./stacks/AuthStack";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import Reset from "./screens/Reset";
import { NavigationContainer } from "@react-navigation/native";

 function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)


   return(
    <>
    <NavigationContainer>
      {isLoggedIn ? <AppStack setIsLoggedIn={setIsLoggedIn}/> : <AuthStack setIsLoggedIn={setIsLoggedIn} />}
    </NavigationContainer>
    </>
   )
 }

const styles = StyleSheet.create({
  demo: {

    fontWeight: '900',
    color: 'green',
    fontFamily:'Roboto-Regular',
  },
})


 export default App;