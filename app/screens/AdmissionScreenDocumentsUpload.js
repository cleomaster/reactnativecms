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

function AdmissionScreenDocumentsUpload({ navigation }) {
  return (
    <View style={styles.container}>
      <AppRegistrationProgressBar screenNo={4} previousScreens={[1,2,3]} />
      <View style={styles.section}>
        <Text style={styles.heading}>Documents Upload</Text>
        <View style={styles.textInputGroup}>
          <View style={styles.uploadSection}>
            <Text style={styles.subheading}>Upload Photo</Text>
            <AppButton title="Upload" />
          </View>

          <View style={styles.uploadSection}>
            <Text style={styles.subheading}>SSC / O-Levels Certificate</Text>
            <AppButton title="Upload" />
          </View>
          <View style={styles.uploadSection}>
            <Text style={styles.subheading}>HSSC / A-Levels Certificate</Text>
            <AppButton title="Upload" />
          </View>
        </View>
      </View>
      <AppButton
      onPress={() => {
        navigation.navigate("AdmissionScreenProgramChoices");
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
  section: {
    marginBottom: 50
  },
  uploadSection: {
    marginVertical: 10
  },
});

export default AdmissionScreenDocumentsUpload;
