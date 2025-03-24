import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import {colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { saveToken } from '../utils/authStorage';
import { login } from '../store/slices/authSlice';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const dispatch = useDispatch(); // Initialize dispatch

  // Custom validation function
  const validateForm = () => {
    let errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }

    // Password validation
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length !== 6) {
      errors.password = 'Password must be 6 characters';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = async() => {
    if (validateForm()) {
      const token = "1dfef389e7g98wet6e4t65ewt6w8"
      saveToken(token);
      dispatch(login(token)); // Update Redux state & save token in EncryptedStorage
      alert('Login successfully!');
      if(email === 'neel@gmail.com' && password === '123456'){
      navigation.navigate('Home');
      }
      // Perform further actions (e.g., API call)
    }
  };

  return (
      <View style={styles.container}>
        {/* <TouchableOpacity style={{marginTop : 10}} onPress={() => navigation.navigate("HOME")}>
          <Ionicons name={'arrow-back-outline'} color={colors.primary} style={styles.backIcons} />
        </TouchableOpacity> */}
        <View style={{display : 'flex', alignContent : 'center', alignItems : 'center'}}>
        <Image source={require('../assets/Logo.png')} style={styles.logo}/>
        </View>
        <View style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
      </View>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : colors.white,
  },
  logo : {
  height: 200,
  width: 200,
  marginTop:'15%',
  },
  form: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop : 20
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    color : 'black',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backIcons:{
    fontSize : 35,
    marginLeft : '2%'
  },
  forgotPassword : {
    textAlign : 'right',
    marginBottom : '2%',
    color : colors.primary,
  },
  errorText: {
    color: colors.errorText,
    marginBottom: 10,
    marginTop : -10
  },
});

export default LoginPage;
