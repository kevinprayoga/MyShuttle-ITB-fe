// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuRpwBLLfG8OxD6qNh7AhfmnPbNhsI2Nc",
  authDomain: "myshuttle-itb.firebaseapp.com",
  databaseURL: "https://myshuttle-itb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myshuttle-itb",
  storageBucket: "myshuttle-itb.appspot.com",
  messagingSenderId: "1018193155057",
  appId: "1:1018193155057:web:4fa848da17607eb7df2a50",
  measurementId: "G-B9ZHQ6HVKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };