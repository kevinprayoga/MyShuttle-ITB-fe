import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export const ReservasiInfoContainer = ({ from, dest, departureTime, arrivalTime, nomorShuttle, platMobil }) => {
    return (
        <View className="py-4 px-4 rounded-lg bg-blue-50 mb-5 mt-5">
            <View className="flex-row mb-4">
                <View className="mr-6">
                    <Text className="text-lg font-bold mb-2">{from}</Text>
                    <Text className="font-bold text-4xl">{departureTime}</Text>
                </View>
                <View>
                    <Text className="text-lg font-bold mb-2">{dest}</Text>
                    <Text className="font-bold text-4xl">{arrivalTime}</Text>
                </View>
            </View>
            <Text className="font-bold text-lg mb-2">Nomor Shuttle:</Text>
            <View className="flex-row mb-4">
                <View className="mr-4 bg-gray-100 py-2 px-4 rounded-lg align-center text-center">
                    <Text className="text-4xl font-medium">{nomorShuttle}</Text>
                </View>
                <View className="bg-sky-200 py-2 px-4 rounded-lg align-center text-center">
                    <Text className="text-4xl font-medium">{platMobil}</Text>
                </View>
            </View>
            <Text className="text-lg font-bold">Keterangan</Text>
            <Text className="text-lg">Kumpul di depan Tugu Soekarno.</Text>
        </View>
    );
}

export default function ScanResult({ route, navigation }) {
  const { success, data } = route.params;

  return (
    <View className="flex-1 bg-white items-center p-4">
      <TouchableOpacity className="absolute top-10 left-5 z-10" onPress={() => navigation.goBack()}>
        <Text className="text-2xl">←</Text>
      </TouchableOpacity>
      <Text className="text-2xl font-medium mt-12">Scan QR Code</Text>
      {success ? (
        <>
        <View className="bg-green-100 rounded-lg p-4 mt-4 w-full items-center">
          <Text className="text-green-700 text-lg font-bold">Berhasil scan!</Text>
        </View>
        <ReservasiInfoContainer
          from={data["From"]}
          dest={data["Destination"]}
          departureTime={data["Departure Time"]}
          arrivalTime={data["Arrival Time"]}
          nomorShuttle={data["Shuttle Number"]}
          platMobil={data["Vehicle Plate"]}
        />
      </>
      ) : (
        <View className="bg-red-100 rounded-lg p-4 mt-4 w-full items-center">
          <Text className="text-red-700 text-lg font-bold">QR Code tidak berhasil di-scan</Text>
          <Text className="text-black text-base">QR Code mungkin telah di-scan atau invalid. Mohon coba lagi.</Text>
        </View>
      )}
      <View className="flex-1 justify-end w-full">
        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-4 mb-2 items-center"
          onPress={() => navigation.navigate('Scan')}
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
