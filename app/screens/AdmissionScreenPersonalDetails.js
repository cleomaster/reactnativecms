import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AppRegistrationProgressBar from './../components/AppRegistrationProgressBar';
import AppButton from './../components/AppButton';
import AppTextInput from './../components/AppTextInput';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

function AdmissionScreenPersonalDetails({ navigation }) {
  const [current, setCurrent] = useState("Male");
  return (
    <View style={styles.container}>
     <AppRegistrationProgressBar screenNo={1} previousScreens={[]} />
      <View style={styles.section}>
        <Text style={styles.heading}>Personal Details</Text>
        <View style={styles.textInputGroup}>
          <AppTextInput placeholder="Name" />
          <AppTextInput placeholder="CNIC" />
          <AppTextInput placeholder="DOB" />
          <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Gender</Text>
        <RadioButtonGroup
        containerStyle={{flexDirection: "row"}}
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground={"black"}
      >
        <RadioButtonItem value="Male" label={<Text style={{marginRight: 30, marginLeft: 10, color: "black"}}>Male</Text>} />
        <RadioButtonItem
          value="Female"
          label={
            <Text style={{marginLeft: 10, color: "black"}}>Female</Text>
          }
        />
      </RadioButtonGroup>
          </View>
          <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
            marginVertical: 5
          }}>
          <Picker>
            <Picker.Item label="Select Domicile" value="java" />
          </Picker>
          </View>
          <AppTextInput placeholder="Father Name" />
          <AppTextInput placeholder="Father CNIC" />
          <AppTextInput placeholder="Mobile No." />
        </View>
      </View>
     <AppButton
      onPress={() => {
        navigation.navigate("AdmissionScreenAddressDetails");
      }} 
      title="Save & Continue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 35,
    flex: 1,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
  },
  textInputGroup: {
    marginVertical: 25,
  },
  radioContainer: {
    marginVertical: 10
  },
  radioLabel: {
    fontSize: 16,
    color: "grey",
    marginBottom: 10
  }
});

export default AdmissionScreenPersonalDetails;
