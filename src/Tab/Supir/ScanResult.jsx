import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function ScanResult({ route, navigation }) {
  const { success } = true;//route.params;

  return (
    <View className="flex-1 bg-white items-center p-4">
      <TouchableOpacity className="absolute top-10 left-5 z-10" onPress={() => navigation.goBack()}>
        <Text className="text-2xl">←</Text>
      </TouchableOpacity>
      <Text className="text-2xl font-medium mt-12">Scan QR Code</Text>
      {success ? (
        <View className="bg-green-100 rounded-lg p-4 mt-4 w-full items-center">
          <Text className="text-green-700 text-lg font-bold">Berhasil scan!</Text>
          <Text className="text-black text-base">Nama User</Text>
          <View className="bg-gray-100 rounded-lg p-4 mt-4 w-full items-center">
            <View className="flex-row justify-between w-full mb-2">
              <Text className="text-base">Ganesha</Text>
              <Text className="text-base">Jatinangor</Text>
            </View>
            <View className="flex-row justify-between w-full mb-2">
              <Text className="text-2xl font-bold">10.00</Text>
              <Text className="text-2xl font-bold">11.00</Text>
            </View>
            <Text className="text-base w-full">Nomor Shuttle:</Text>
            <View className="flex-row justify-between w-full mt-2">
              <Text className="text-2xl font-bold">9</Text>
              <Text className="text-blue-700 bg-blue-100 p-2 rounded-lg">D 123 SBS</Text>
            </View>
          </View>
        </View>
      ) : (
        <View className="bg-red-100 rounded-lg p-4 mt-4 w-full items-center">
          <Text className="text-red-700 text-lg font-bold">QR Code tidak berhasil di-scan</Text>
          <Text className="text-black text-base">QR Code mungkin telah di-scan atau invalid. Mohon coba lagi.</Text>
        </View>
      )}
      <View className="flex-1 justify-end w-full">
        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-4 mb-2 items-center"
          onPress={() => navigation.navigate('BarcodeScanner')}
        >
          <Text className="text-white text-lg">Scan Lagi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="border-2 border-blue-500 rounded-lg p-4 mb-4 items-center"
          onPress={() => navigation.navigate('Home')}
        >
          <Text className="text-blue-500 text-lg">Kembali ke Beranda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
