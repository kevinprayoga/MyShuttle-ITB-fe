import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { config, closeConfig } from "./hooks/animation";

import Landing1 from './src/landingPage/Landing1';
import Landing2 from './src/landingPage/Landing2';
import Login from './src/landingPage/login';
import Register from './src/landingPage/register';
import Pelanggaran from './src/Tab/Admin/Pelanggaran'

import UserHome from './src/Tab/User/UserHome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
        }}
        headerMode="float"
        animation="fade"
      >
        {/* <Stack.Screen
          name="Pelanggaran"
          component={Pelanggaran}
          options={{ headerShown: true }}
        /> */}
        <Stack.Screen
          name="UserHome"
          component={UserHome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
