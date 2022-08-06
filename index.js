import * as SecureStore from 'expo-secure-store';
export default {
  hello : () => {
    console.info('ios/android hello storage!');
  },
  set : async (key,value) => {
    await SecureStore.setItemAsync(key,value);
  },
  get : async (key) => {
    return await SecureStore.getItemAsync(key);
  },
  delete : async (key) => {
    await SecureStore.deleteItemAsync(key);
  }
};