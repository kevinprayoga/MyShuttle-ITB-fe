import React from 'react';
import Scan from "../Tab/Supir/Scan";
import ScanResult from "../Tab/Supir/ScanResult";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { config, closeConfig } from "../../hooks/animation";

const Stack = createNativeStackNavigator();

export default function SupirStackNavigation() {
  return (
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
  );
};

