import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Practice from './screens/Practice';
import Mocks from './screens/Mocks';

const Drawer = createDrawerNavigator();
function practiceScreen() {
  return (
    <Drawer.Navigator initialRouteName="Practice" >
      <Drawer.Screen name="Practice" component={Practice} />
      <Drawer.Screen name="Mocks" component={Mocks} />

    </Drawer.Navigator>
  );
}

const appstack = createBottomTabNavigator();
function AppStack() {
  return (
    <appstack.Navigator initialRouteName="Home" >
      <appstack.Screen name="Home" component={HomeScreen} />
      <appstack.Screen name="PracticeScreen" component={practiceScreen} />

    </appstack.Navigator>
  );
}

const authstack = createStackNavigator();
function AuthStack() {
  return (
    <authstack.Navigator initialRouteName="Login">

      <authstack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <authstack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    </authstack.Navigator>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <authstack.Screen name='Loading' component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="App" component={AppStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

