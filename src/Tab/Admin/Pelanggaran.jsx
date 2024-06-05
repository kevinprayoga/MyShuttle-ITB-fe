import React from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";

const PelanggaranContainer = ({ platMobil, kecepatan, tanggalHari, jam }) => {
    return (
        <View className="w-[327px] h-[85px] bg-blue-50 rounded-lg flex-row p-3 items-center mb-5">
            <View>
                <Text className="text-black text-lg font-bold leading-7">{platMobil}</Text>
                <Text className="text-black text-lg font-normal leading-7">{kecepatan}</Text>
            </View>
            <View className="px-10">
                <Text>{tanggalHari}</Text>
                <Text>{jam}</Text>
            </View>
        </View>
    );
};

const SearchForm = () => {
    return (
        <View className="mb-4">
            <Text className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</Text>
            <View className="relative">
                <TextInput 
                    type="search" 
                    id="default-search" 
                    className="p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search Pelanggaran" 
                    required 
                />
                <Pressable 
                    onPress={() => { /* Handle the search action here */ }} 
                    className="absolute right-2.5 top-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <Text className="text-white">Search</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default function PelanggaranAdmin() {
  return (
    <View className="mx-6 mt-4">
        <Text className="text-2xl font-medium mb-4">List Pelanggaran</Text>
        <SearchForm/>
        <PelanggaranContainer 
            platMobil="B 1234 XYZ" 
            kecepatan="80 km/h" 
            tanggalHari="01 Jan 2024, Monday" 
            jam="14:30"
        />
        <PelanggaranContainer 
            platMobil="B 1234 XYZ" 
            kecepatan="80 km/h" 
            tanggalHari="01 Jan 2024, Monday" 
            jam="14:30"
        />
        <PelanggaranContainer 
            platMobil="B 1234 XYZ" 
            kecepatan="80 km/h" 
            tanggalHari="01 Jan 2024, Monday" 
            jam="14:30"
        />
        <PelanggaranContainer 
            platMobil="B 1234 XYZ" 
            kecepatan="80 km/h" 
            tanggalHari="01 Jan 2024, Monday" 
            jam="14:30"
        />
        <PelanggaranContainer 
            platMobil="B 1234 XYZ" 
            kecepatan="80 km/h" 
            tanggalHari="01 Jan 2024, Monday" 
            jam="14:30"
        />
    </View>
  );
};