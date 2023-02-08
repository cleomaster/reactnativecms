import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AppRegistrationProgressBar({ screenNo, previousScreens }) {

  function isScreenSelected(currentScreen) {
    if (screenNo === currentScreen) {
      return styles.boxHighlighted
    }

    if(previousScreens.includes(currentScreen))
      return styles.boxHighlighted;

  }

    return (
        <View style={[styles.boxes]}>
        <View style={[styles.box, isScreenSelected(1)]}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text>------</Text>
        </View>
        <View style={[styles.box, isScreenSelected(2)]}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text>------</Text>
        </View>
        <View style={[styles.box, isScreenSelected(3)]}>
          <Text style={styles.boxText}>3</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text>------</Text>
        </View>
        <View style={[styles.box, isScreenSelected(4)]}>
          <Text style={styles.boxText}>4</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text>------</Text>
        </View>
        <View style={[styles.box, isScreenSelected(5)]}>
          <Text style={styles.boxText}>5</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text>------</Text>
        </View>
        <View style={[styles.box, isScreenSelected(6)]}>
          <Text style={styles.boxText}>6</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    boxes: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 30,
      },
      box: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        width: 40,
        height: 40,
        borderRadius: 10,
      },
      boxHighlighted: {
        backgroundColor: "#009633",
      },
      boxText: {
        fontWeight: "bold",
        color: "#333333",
        fontSize: 18
      },
})


export default AppRegistrationProgressBar;