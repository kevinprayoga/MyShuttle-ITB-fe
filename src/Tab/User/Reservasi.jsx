import React from "react";
import { Text, Pressable, View } from "react-native";

{/* 
    STEP KE-2 DARI RESERVASI
    Figma Frame Name: Reservasi
*/}

export const TanggalContainer = ({ tanggal }) => {
    {/* Container tanggal yang ditaro di bagian atas. */}
    return (
        <View className="py-1.5 border-solid border-1 bg-white rounded-lg mb-5">
            <Text className="text-base text-center">{tanggal}</Text>
        </View>
    )
}

export const ReservasiInfoContainer = ({ from, dest, departureTime, arrivalTime, nomorShuttle, platMobil }) => {
    {/* Container buat informasi reservasi. */}
    return (
        <View className="py-4 px-4 rounded-lg bg-white mb-5">
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

export default function Reservasi() {
    return (
        <View className="mx-6 mt-4">
            <TanggalContainer tanggal="Senin, 3 Mei 2024"/>
            <ReservasiInfoContainer
                from="Ganesha"
                dest="Jatinangor"
                departureTime="07.00"
                arrivalTime="08.00"
                nomorShuttle="9"
                platMobil="D 8234 X"
            />
            <View className="border-dashed border-2 border-gray-300 p-4 mb-4">
                <Text>
                    1. Waktu sampai adalah perkiraan. Shuttle dapat terlambat karena kemacetan atau hal lain.
                </Text>
                <Text>
                    2. Setelah tiket dipesan, tiket tidak dapat dipindahtangankan.
                </Text>
                <Text>
                    3. Tiket harus ditunjukkan agar dapat naik shuttle.
                </Text>
            </View>
            <Pressable className="bg-blue-600 px-8 py-3 rounded-lg mb-4">
                <Text className="text-white text-lg text-center font-medium">Booking Tempat</Text>
            </Pressable>
            <Pressable className="border-solid border-2 border-blue-600 px-8 py-3 rounded-lg mb-4">
                <Text className="text-blue-600 text-lg text-center font-medium">Ganti Jadwal</Text>
            </Pressable>
        </View>
    );
};