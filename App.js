import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { config, closeConfig } from "./hooks/animation";

import Scan from './src/Tab/Supir/Scan';
import ScanResult from './src/Tab/Supir/ScanResult';

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
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScanResult"
          component={ScanResult}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
