import React from "react";
import { Image, Text, TouchableOpacity, View, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { images } from "../../constants"

export default function Landing() {
  const nav = useNavigation();

  const registerPageHandler = () => {
    nav.push("Register")
  };

  const loginPageHandler = () => {
    nav.push("Login")
  };

  return (
    <View className="bg-white h-screen">
      <View className="flex items-center justify-center h-screen">
        <View>
          <View className="flex justify-center items-center">
            <Text className="text-black text-3xl font-bold self-start">Hello...</Text>
            <Image
              source={images.landing}
              className="w-80 h-80"
            />
            <Text className="text-black text-2xl font-bold">Welcome to ITB Shuttle</Text>
            <Text className="text-black text-2xl font-bold pt-2">Tracking and Booking System</Text>
            <Text className="text-black text-lg font-light pt-4">We're here to make you</Text>
            <Text className="text-black text-lg font-light pt-0.25">fee comfortable!</Text>
          </View>
          <View className="flex mt-16">
            <TouchableOpacity onPress={registerPageHandler} className="bg-primary px-10 py-3 rounded-lg shadow shadow-[#3A8DEC]">
              <Text className="font-s text-xl text-white font-semibold text-center">Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={loginPageHandler} className="px-10 py-3 mt-5 rounded-lg border border-primary outline-2 shadow shadow-[#3A8DEC]">
              <Text className="font-s text-xl text-primary font-semibold text-center">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
