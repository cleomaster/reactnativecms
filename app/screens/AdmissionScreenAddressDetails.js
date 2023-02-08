import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AppRegistrationProgressBar from './../components/AppRegistrationProgressBar';
import AppButton from './../components/AppButton';
import AppTextInput from './../components/AppTextInput';



function AdmissionScreenAddressDetails({ navigation }) {
  return (
    <View style={styles.container}>
     <AppRegistrationProgressBar screenNo={2} previousScreens={[1]} />
      <View style={styles.section}>
        <Text style={styles.heading}>Address Details</Text>
        <View style={styles.textInputGroup}>
          <Text style={styles.subheading}>Permanent Address</Text>
          <AppTextInput placeholder="Address" />
          <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
            marginVertical: 3.5
          }}>
          <Picker>
            <Picker.Item label="City" value="java" />
          </Picker>
          </View>
          <AppTextInput placeholder="Phone" />
        </View>
        <View style={styles.textInputGroup}>
          <Text style={styles.subheading}>Father / Guardian Address</Text>
          <View style={{flexDirection: "row", alignItems: "center", marginVertical: 8}}>
          <View style={{backgroundColor: "grey", width: 15, height: 15, borderRadius: 5}}>
          </View>
          <Text style={{marginLeft: 10}}>Same as permanent address?</Text>
          </View>
          <AppTextInput placeholder="Address" />
          <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
            marginVertical: 3.5
          }}>
          <Picker>
            <Picker.Item label="City" value="java" />
          </Picker>
          </View>
          <AppTextInput placeholder="Phone" />
        </View>
      </View>
      <AppButton
      onPress={() => {
        navigation.navigate("AdmissionScreenEducationalDetails");
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
    color: "#313131"
  }
});

export default AdmissionScreenAddressDetails;
