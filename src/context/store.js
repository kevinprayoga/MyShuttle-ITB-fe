// store.js
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      userId: null,
      setUserId: (id) => set({ userId: id }),
      clearUserId: () => set({ userId: null }),
    }),
    {
      name: 'user-store',
      storage: {
        getItem: async (name) => {
          try {
            const item = await AsyncStorage.getItem(name);
            return item ? JSON.parse(item) : null;
          } catch (error) {
            console.error('Error getting item from AsyncStorage:', error);
            return null;
          }
        },
        setItem: async (name, value) => {
          try {
            await AsyncStorage.setItem(name, JSON.stringify(value));
          } catch (error) {
            console.error('Error setting item in AsyncStorage:', error);
          }
        },
        removeItem: async (name) => {
          try {
            await AsyncStorage.removeItem(name);
          } catch (error) {
            console.error('Error removing item from AsyncStorage:', error);
          }
        },
      },
    }
  )
);

export default useStore;
