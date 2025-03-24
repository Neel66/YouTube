import React, {useEffect, useState} from 'react';
import { Text, View, Image, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import {colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from '../utils/apiService';

const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  // const data = [
  //   { id: '5', uri: 'https://tse1.mm.bing.net/th?id=OIP.IFFa-NP-0U7ru0aQBgpgHQHaE8&pid=Api&P=0&h=220' },
  //   { id: '6', uri: 'https://tse1.mm.bing.net/th?id=OIP.IFFa-NP-0U7ru0aQBgpgHQHaE8&pid=Api&P=0&h=220' },
  //   { id: '7', uri: 'https://tse1.mm.bing.net/th?id=OIP.nPFsCwBt573NSWW0LpiDhAHaEK&pid=Api&P=0&h=220' },
  //   { id: '8', uri: 'https://tse1.mm.bing.net/th?id=OIP.VUi2lUb3Fhly5TaiOyqhvgHaE8&pid=Api&P=0&h=220' },
  //   { id: '9', uri: 'https://tse3.mm.bing.net/th?id=OIP.5zVtrvz3hHdmD4ld5TIoTgHaE7&pid=Api&P=0&h=220' },
  // ];

  // const renderItem = ({ item }) => (
  //   <View>
  //     <Text>Image {item.id}</Text>
  //     <Image 
  //       style={{ width: '100%', height: 200 }}
  //       source={{ uri: item.uri }}
  //     />
  //   </View>
  // );
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken'); // Remove token
    navigation.navigate('LOGIN'); // Navigate back to Login screen
  };

  useEffect(() => {
  fetchData();
  },[]);

  async function fetchData(){
    const dataTest = await getData('objects');
    console.log('data :>> ', dataTest);
  }
  return (
    <>
    <View style={styles.container}>
    <Text style={styles.content}>Welcome to the App</Text>
    
    <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </View>
   
    {/* <View style={styles.buttonContainer}>
     <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
      <Text style={styles.loginButtonText}>Login</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.signupButton}>
      <Text style={styles.signupButtonText}>SignUp</Text>
     </TouchableOpacity>
    </View> */}
    </View>
      {/* <ScrollView>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView> */}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
 container: {
    flex: 1,  // Ensures the view takes full height
    padding: 20,
  },
  content: {
    flex: 1,  // Pushes the button to the bottom
    fontSize: 18,
    textAlign: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end', // Pushes button to the bottom
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
