import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 3 }}>Mia Khalifa</Text>
      <Image style={{width: 350, height : 530, display : 'flex', justifyContent : 'center'}} source={{uri : 'https://imgs.search.brave.com/ncvCZy5PuK0AO6dFCydrLTLgkjtK-Jij9WrM3CQgjpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/NDk4ODY5OS9waG90/by9idXNpbmVzc21h/bi1jb250ZW1wbGF0/aW5nLWluLXRoZS1v/ZmZpY2UtbG9va2lu/Zy10aHJvdWdoLXRo/ZS13aW5kb3cuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVVM/V2xGTlVreUY4V0NV/eEl2Mm9LQ2FsVDhO/NFdCeXRMNUFMUXI3/N2pYUkE9'}}></Image>
      <TouchableOpacity style={{backgroundColor : 'red', padding: 5, marginTop :2}} onPressIn={() => {Alert.alert('You want delete this?')}}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})