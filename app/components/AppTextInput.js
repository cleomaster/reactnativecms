import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';


function AppTextInput({ placeholder, style }) {
    return (

        <TextInput style={[styles.textInput, style]} placeholder={placeholder} />
        
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: "black",
        borderWidth: 0.5,
        borderRadius: 8,
        paddingVertical: 8,
        paddingLeft: 20,
        marginVertical: 10,
      },
})

export default AppTextInput;