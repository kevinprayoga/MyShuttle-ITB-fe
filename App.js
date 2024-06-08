import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { config, closeConfig } from "./hooks/animation";

{/* App.js only for testing. When merging into branch, use main's App.js. */}

import Landing1 from './src/landingPage/Landing1';
import Landing2 from './src/landingPage/Landing2';
import Login from './src/landingPage/login';
import Register from './src/landingPage/register';
import Pelanggaran from './src/Tab/Admin/Pelanggaran'

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
          name="Landing1"
          component={Landing1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Landing2"
          component={Landing2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
