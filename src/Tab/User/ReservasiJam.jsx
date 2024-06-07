import React from "react";
import { Text, Pressable, View } from "react-native";

export const TanggalContainer = ({ tanggal }) => {
    return (
        <View className="py-1.5 border-solid border-1 bg-white rounded-lg mb-5">
            <Text className="text-base text-center">{tanggal}</Text>
        </View>
    )
}

const ReservasiJamContainer = ({ from, dest, departureTime, arrivalTime, sisa }) => {
    return (
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
    );
};

export default function ReservasiJam() {
    return (
        <View className="mx-6 mt-4">
            <TanggalContainer tanggal="Senin, 3 Mei 2024"/>
            <ReservasiJamContainer
                from="Ganesha"
                dest="Jatinangor"
                departureTime="08.00"
                arrivalTime="09.00"
                sisa="4"
            />
            <ReservasiJamContainer
                from="Ganesha"
                dest="Jatinangor"
                departureTime="08.00"
                arrivalTime="09.00"
                sisa="4"
            />
            <ReservasiJamContainer
                from="Ganesha"
                dest="Jatinangor"
                departureTime="08.00"
                arrivalTime="09.00"
                sisa="4"
            />
            <ReservasiJamContainer
                from="Ganesha"
                dest="Jatinangor"
                departureTime="08.00"
                arrivalTime="09.00"
                sisa="4"
            />
            <ReservasiJamContainer
                from="Ganesha"
                dest="Jatinangor"
                departureTime="08.00"
                arrivalTime="09.00"
                sisa="4"
            />
        </View>
    )
}