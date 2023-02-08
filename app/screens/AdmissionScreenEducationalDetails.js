import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AppRegistrationProgressBar from './../components/AppRegistrationProgressBar';
import AppButton from './../components/AppButton';
import AppTextInput from './../components/AppTextInput';




function AdmissionScreenEducationalDetails({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
     <AppRegistrationProgressBar screenNo={3} previousScreens={[1,2]} />
      <View style={styles.section}>
        <Text style={styles.heading}>Educational Details</Text>
        <View style={styles.textInputGroup}>
          <Text style={styles.subheading}>SSC / O - Levels Details</Text>
          <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
            marginVertical: 3.5
          }}>
          <Picker>
            <Picker.Item label="Select Medium" value="java" />
          </Picker>
          </View>
          <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
            marginVertical: 3.5
          }}>
          <Picker>
            <Picker.Item label="Select Subjects" value="java" />
          </Picker>
          </View>
          <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
          }}>
          <Picker>
            <Picker.Item label="Select Passing Out Year" value="java" />
          </Picker>
          </View>
          <View style={{flexDirection: "row", }}>
            <AppTextInput style={{paddingRight: 10}} placeholder="Total Marks"/>
            <AppTextInput style={{marginLeft: 10, paddingRight: 10}} placeholder="Obtained Marks"/>
          </View>
        </View>
        
        <View style={styles.textInputGroup}>
          <Text style={styles.subheading}>SSC / O - Levels Details</Text>
          <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
            marginVertical: 3.5
          }}>
          <Picker>
            <Picker.Item label="Select Medium" value="java" />
          </Picker>
          </View>
          <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
            marginVertical: 3.5
          }}>
          <Picker>
            <Picker.Item label="Select Subjects" value="java" />
          </Picker>
          </View>
          <View   style={{
            borderWidth: 0.5,
            borderRadius: 8,
          }}>
          <Picker>
            <Picker.Item label="Select Passing Out Year" value="java" />
          </Picker>
          </View>
          <View style={{flexDirection: "row"}}>
          <AppTextInput style={{paddingRight: 10}} placeholder="Total Marks"/>
            <AppTextInput style={{marginLeft: 10, paddingRight: 10}} placeholder="Obtained Marks"/>
          </View>
        </View>



      </View>
      <AppButton
      onPress={() => {
        navigation.navigate("AdmissionScreenDocumentsUpload");
      }} 
      title="Save & Continue" />
    </KeyboardAvoidingView>
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
    marginVertical: 10,
  },
  subheading: {
    fontWeight: "bold",
    color: "#313131"
  }
});

export default AdmissionScreenEducationalDetails;
