import EncryptedStorage from 'react-native-encrypted-storage';

const TOKEN_KEY = 'userToken';

export async function saveToken(token) {
  try {
    await EncryptedStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
  }
}

export async function getToken() {
  try {
    const token = await EncryptedStorage.getItem(TOKEN_KEY);
    return token || null; // Return null if no token is found
  } catch (error) {
    return null;
  }
}

export async function removeToken() {
  await EncryptedStorage.deleteItemAsync(TOKEN_KEY);
}
