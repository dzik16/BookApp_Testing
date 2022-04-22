/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  RegisterScreen,
  SuksesScreen,
  SplashScreen,
  HomeScreen,
  DetailScreen,
  MediaScreen
} from '../../screens/index';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuksesScreen"
        component={SuksesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MediaScreen'
        component={MediaScreen}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Router;
