import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

function AppButton({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{ title }</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#009633",
        paddingVertical: 10,
        borderRadius: 10,
      },
      buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
      },
})

export default AppButton;