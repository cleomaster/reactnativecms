import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AppRegistrationProgressBar from "./../components/AppRegistrationProgressBar";
import AppButton from "./../components/AppButton";
import AppTextInput from "./../components/AppTextInput";

function AdmissionScreenProgramChoices({ navigation }) {
  return (
    <View style={styles.container}>
      <AppRegistrationProgressBar screenNo={5} previousScreens={[1,2,3,4]} />
      <View style={styles.section}>
        <Text style={styles.heading}>Program Choices</Text>
        <View style={styles.textInputGroup}>
        <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
            marginVertical: 5
          }}>
          <Picker>
            <Picker.Item label="First Choice" value="java" />
          </Picker>
          </View>
          <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
            marginVertical: 5
          }}>
          <Picker>
            <Picker.Item label="Second Choice" value="java" />
          </Picker>
          </View>
          <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
            marginVertical: 5
          }}>
          <Picker>
            <Picker.Item label="Third Choice" value="java" />
          </Picker>
          </View>
        </View>
      </View>
      <AppButton
      onPress={() => {
        navigation.navigate("AdmissionScreenSubmit");
      }} 
      title="Save & Continue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 35,
    marginTop: 50,
    flex: 1,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
  },
  textInputGroup: {
    marginVertical: 25,
  },
  subheading: {
    fontWeight: "bold",
    color: "#313131",
    marginVertical: 5
  },
  uploadSection: {
    marginVertical: 10
  },
});

export default AdmissionScreenProgramChoices;
