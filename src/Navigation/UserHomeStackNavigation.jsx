import React from 'react';
import UserHome from "../Tab/User/UserHome";
import ReservasiJam from '../Tab/User/ReservasiJam';
import Reservasi from '../Tab/User/Reservasi';
import ReservasiDetail from '../Tab/User/ReservasiDetail';
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
        name="UserHome"
        component={UserHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReservasiJam"
        component={ReservasiJam}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reservasi"
        component={Reservasi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReservasiDetail"
        component={ReservasiDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

