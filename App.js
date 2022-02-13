import React, { useState, useEffect } from 'react';
import Home from './views/Home';
import { StatusBar, StyleSheet, View } from 'react-native';
import AddPost from './views/AddPost';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = ()=> {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "AddPost" component = {AddPost}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
