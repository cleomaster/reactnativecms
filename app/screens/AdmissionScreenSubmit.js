import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  Alert
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AppRegistrationProgressBar from "./../components/AppRegistrationProgressBar";
import AppButton from "./../components/AppButton";
import AppTextInput from "./../components/AppTextInput";

function AdmissionScreenSubmit({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View>
            <Text style={styles.modalHeading}>Congratulations!</Text>
          </View>
            <View style={styles.modalInner}>
            <Text style={{textAlign: "center"}}>Your application has been successfully submitted for review. You will be informed in case of missing documents and / or requirements</Text>
            </View>
            <View>
            <Button title="Done"  onPress={() => setModalVisible(!modalVisible)} color="#009633" style={{borderRadius: 10}} />
            </View>
          </View>
        </View>
      </Modal>
      <AppRegistrationProgressBar  screenNo={6} previousScreens={[1,2,3,4,5]} />
      <View style={styles.section}>
        <Text style={styles.heading}>Confirm Registration Fees</Text>
        <View style={styles.textInputGroup}>
          <View style={styles.uploadSection}>
            <Text style={styles.subheading}>Download Challan</Text>
            <AppButton title="Download" />
          </View>

          <View style={styles.uploadSection}>
            <Text style={styles.subheading}>Upload Challan</Text>
            <AppButton title="Upload" />
          </View>
        </View>
      </View>
      <AppButton 
      onPress={() => {
        setModalVisible(true)
      }}
      title="Submit" />
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
  modalView: {
    height: 250,
    width: 250,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalHeading: {
    fontWeight: "bold",
    fontSize: 20
  },
  modalInner: {
    marginHorizontal: 10, 
  }
});

export default AdmissionScreenSubmit;
