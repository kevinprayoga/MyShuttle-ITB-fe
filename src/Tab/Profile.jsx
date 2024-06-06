import React from "react";
import { Text, View, Pressable, Image } from "react-native";
import { images } from "../../constants"; // Pastikan semua ikon tersedia di sini

export default function Profile() {
  return (
    <View className="mx-6 mt-4">
      <Text className="text-2xl font-medium mb-4 text-center">Profile</Text>
      <View className="w-full bg-blue-500 rounded-lg flex-row p-3 items-center mb-5 mt-5">
        <Image source={images.profpic} className="w-12 h-12 rounded-full" />
        <Text className="ml-4 text-white text-lg font-bold">Nama User</Text>
      </View>
      <Pressable className="w-full bg-blue-50 rounded-lg flex-row items-center mb-2 p-5">
        <Image source={images.account} className="w-7 h-6 mr-3 resize-contain" />
        <Text className="text-black text-lg">Account</Text>
        <Image source={images.right_arrow} className="ml-auto w-4 h-4 resize-contain" />
      </Pressable>
      <Pressable className="w-full bg-blue-50 rounded-lg flex-row items-center mb-2 p-5">
        <Image source={images.password} className="w-6 h-8 mr-3 resize-contain" />
        <Text className="text-black text-lg">Password</Text>
        <Image source={images.right_arrow} className="ml-auto w-4 h-4 resize-contain" />
      </Pressable>
      <Pressable className="w-full bg-blue-50 rounded-lg flex-row items-center mb-2 p-5">
        <Image source={images.help} className="w-6 h-6 mr-3 resize-contain" />
        <Text className="text-black text-lg">Help</Text>
        <Image source={images.right_arrow} className="ml-auto w-4 h-4 resize-contain" />
      </Pressable>
      <Pressable className="w-full bg-blue-50 rounded-lg flex-row items-center mb-2 p-5">
        <Image source={images.about} className="w-6 h-6 mr-3 resize-contain" />
        <Text className="text-black text-lg">About</Text>
        <Image source={images.right_arrow} className="ml-auto w-4 h-4 resize-contain" />
      </Pressable>
    </View>
  );
}
