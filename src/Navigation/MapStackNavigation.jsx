import React from 'react';
import Maps from "../Tab/Maps";
import MapsDetail from "../Tab/MapsDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { config, closeConfig } from "../../hooks/animation";

const Stack = createNativeStackNavigator();

export default function StockNavigation() {
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
        name="Maps"
        component={Maps}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MapsDetail"
        component={MapsDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

