import React from "react";
import { Text, Pressable, View, Image } from "react-native";
import { TanggalContainer, ReservasiInfoContainer } from './Reservasi';
import dummy_qr from '../../../assets/images/dummy_qr.png';

{/*
    STEP KE-3 DARI RESERVASI
    Figma Frame Name: Detail Reservasi
 */}

export default function ReservasiDetail() {
    return (
        <View className="mx-6 mt-4">
            <TanggalContainer tanggal="Senin, 3 Mei 2024"/>
            {/* Reservasi Info sama kayak yang dari page Reservasi.jsx */}
            <ReservasiInfoContainer
                from="Ganesha"
                dest="Jatinangor"
                departureTime="07.00"
                arrivalTime="08.00"
                nomorShuttle="9"
                platMobil="D 8234 X"
            />
            {/* Ini QR Code-nya digenerate per kursi */}
            <Image
                source={dummy_qr}
                className="w-[200px] h-[200px] text-center align-center mb-4"
            />
            <Pressable className="bg-blue-600 px-8 py-3 rounded-lg mb-4">
                <Text className="text-white text-lg text-center font-medium">Kembali ke Beranda</Text>
            </Pressable>
        </View>
    );
};