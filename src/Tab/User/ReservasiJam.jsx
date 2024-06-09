import React from "react";
import { Text, Pressable, View } from "react-native";

{/* 
    STEP KE-1 DARI RESERVASI
    Figma Frame Name: Pilihan Jadwal Shuttle
*/}

export const TanggalContainer = ({ tanggal }) => {
    {/* Container tanggal yang ditaro di bagian atas. */}
    return (
        <View className="py-1.5 border-solid border-1 bg-white rounded-lg mb-5">
            <Text className="text-base text-center">{tanggal}</Text>
        </View>
    )
}

const ReservasiJamContainer = ({ from, dest, departureTime, arrivalTime, sisa }) => {
    {/* Container buat reservasi jam masing-masing. */}
    return (
        <Pressable>
            <View className="bg-white rounded-lg flex-row py-3 px-4 items-center mb-5">
                <View className="flex-4 mr-8">
                    <Text>from</Text>
                    <Text className="text-black text-lg font-bold leading-7">{from}</Text>
                    <Text className="text-black text-lg font-normal leading-7">{departureTime}</Text>
                </View>
                <View className="flex-4">
                    <Text>to</Text>
                    <Text className="text-blue-700 text-lg font-bold">{dest}</Text>
                    <Text className="text-lg">{arrivalTime}</Text>
                </View>
                <View className="ml-auto">
                    <View className="p-1 rounded w-[49px] bg-blue-200 items-center">
                        <Text className="text-blue-700 font-bold text-xl">{sisa}</Text>
                        <Text className="text-blue-700">sisa</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default function ReservasiJam() {
    return (
        <View className="mx-6 mt-4">
            <TanggalContainer tanggal="Senin, 3 Mei 2024"/>
            {/* Dari sini, pilih jam, habis itu kearahin ke page Reservasi.jsx sesuai ID (pilihan jam masing-masing) */}
            <ReservasiJamContainer
                // REPLACE DATA HERE AS NEEDED
                from="Ganesha"
                dest="Jatinangor"
                departureTime="08.00"
                arrivalTime="09.00"
                sisa="4"
            />
            <ReservasiJamContainer
                from="Ganesha"
                dest="Jatinangor"
                departureTime="09.00"
                arrivalTime="10.00"
                sisa="9"
            />
            <ReservasiJamContainer
                from="Ganesha"
                dest="Jatinangor"
                departureTime="10.00"
                arrivalTime="11.00"
                sisa="10"
            />
            <ReservasiJamContainer
                from="Ganesha"
                dest="Jatinangor"
                departureTime="11.00"
                arrivalTime="12.00"
                sisa="12"
            />
            <ReservasiJamContainer
                from="Ganesha"
                dest="Jatinangor"
                departureTime="13.00"
                arrivalTime="14.00"
                sisa="14"
            />
        </View>
    )
}