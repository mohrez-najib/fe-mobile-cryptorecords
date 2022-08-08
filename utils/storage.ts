import AsyncStorage from '@react-native-async-storage/async-storage';

const get = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {}
};

const set = async (key: string, value: unknown) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {}
};

const clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {}
};

export const storage = {
  get,
  set,
  clear,
};
