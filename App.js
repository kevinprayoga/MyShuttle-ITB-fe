import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { config, closeConfig } from "./hooks/animation";

{/* App.js for testing only. Use main's branch of App.js when merging. */}

// import Landing1 from './src/LandingPage/Landing1';
// import Landing2 from './src/LandingPage/Landing2';
// import Login from './src/LandingPage/Login';
// import Register from './src/LandingPage/Register';
import Reservasi from './src/Tab/User/Reservasi';
import ReservasiDetail from './src/Tab/User/ReservasiDetail';
import ReservasiJam from './src/Tab/User/ReservasiJam';

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
          name="Reservasi"
          component={Reservasi}
          options={{ headerShown: true }}
        /> */}
        {/* <Stack.Screen
          name="Pilih Jam Keberangkatan"
          component={ReservasiJam}
          options={{ headerShown: true }}
        /> */}
        <Stack.Screen
          name="Reservasi Detail"
          component={ReservasiDetail}
          options={{ headerShown: true }}
        />
        {/* <Stack.Screen
          name="Landing1"
          component={Landing1}
          options={{ headerShown: true }}
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
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
