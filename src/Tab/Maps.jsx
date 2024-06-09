import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function Maps({ navigation }) {
  const data = require("../../data.json");

  return (
    <View className="flex-1 bg-white items-center p-4">
      <Text className="mt-[72px] text-neutral-800 text-[16.90px] font-bold text-center">Lacak lokasi shuttle ITB {"\n"} secara real-time!</Text>
      <Text className="mt-[30px] text-black text-base font-medium text-center">Active Buses</Text>
      <ScrollView className="mt-[18px]">
        {data.map((item) => (
          <View key={item.ID} className="bg-neutral-100 rounded-lg flex-col px-[18px] py-[16px] mb-[10px]">
            <View className="flex-row items-center">
              <View className="w-[15px] h-[15px] rounded-full border border-black"/>
              <Text className="text-black text-xs font-medium ml-3">{item.Lokasi}</Text>
              <View className="w-[62px] h-[0px] origin-top-left rotate-180 bg-blue-700 border border-blue-700 ml-4"/>
              <View className="w-[15px] h-[15px] bg-blue-700 rounded-full border border-blue-700" />
              <Text className="text-[#0B58CC] text-xs font-medium ml-3">{item.Tujuan}</Text>
            </View>
            <View className="mt-2 flex-row">
              <Text className="text-black text-[32px] font-medium">{item.JamBerangkat}</Text>
              <Text className="text-black text-[32px] font-medium ml-[77px]">{item.JamTiba}</Text>
            </View>
            <Text className="text-black text-sm font-medium mt-[10px]">Nomor Shuttle:</Text>
            <View className="flex-row mt-5 items-center">
              <Text className=" ml-[14px] text-black text-[32px] font-medium">{item.NomorBus}</Text>
              <Text className="py-[5px] px-[14px] ml-[34px] bg-blue-100 rounded text-center text-blue-700 text-[32px] font-medium">{item.PlatNomor}</Text>
            </View>
            <TouchableOpacity 
              className="w-[289px] h-[50.28px] mt-5 bg-blue-600 rounded-[7px] flex-col justify-center items-center inline-flex"
              onPress={() => navigation.navigate('MapsDetail', { coordinates: item.Coordinates })}
            >
              <Text className="text-center text-white text-sm">Lacak Lokasi Shuttle</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
