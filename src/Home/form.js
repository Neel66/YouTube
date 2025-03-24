import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const Form = () => {
    const [text, setText] = useState('');
      // Function to handle button press
  const handlePress = () => {
    alert(`User Input: ${text}`);
  };

return(
    <View style={styles.container}>
      <Text style={styles.header}>Enter Something:</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Type here"
        value={text}  // Bind TextInput value to state
        onChangeText={setText}  // Update state as the user types
      />
      
      <Button 
        title="Submit" 
        onPress={handlePress}  // When button is pressed, show the input value
      />
    </View>
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    header: {
      fontSize: 20,
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '100%',
      marginBottom: 20,
      paddingLeft: 10,
    },
  });
export default Form;