import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdmissionScreenPersonalDetails from './../screens/AdmissionScreenPersonalDetails';
import AdmissionScreenAddressDetails from './../screens/AdmissionScreenAddressDetails';
import AdmissionScreenEducationalDetails from './../screens/AdmissionScreenEducationalDetails';
import AdmissionScreenDocumentsUpload from './../screens/AdmissionScreenDocumentsUpload';
import AdmissionScreenProgramChoices from './../screens/AdmissionScreenProgramChoices';
import AdmissionScreenSubmit from '../screens/AdmissionScreenSubmit';


const Stack = createNativeStackNavigator();

function AppNavigator() {
 // AdmissionScreenDocumentsUpload
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AdmissionScreenPersonalDetails" component={AdmissionScreenPersonalDetails} />
      <Stack.Screen name="AdmissionScreenSubmit" component={AdmissionScreenSubmit} />
      <Stack.Screen name="AdmissionScreenProgramChoices" component={AdmissionScreenProgramChoices} />
      <Stack.Screen name="AdmissionScreenDocumentsUpload" component={AdmissionScreenDocumentsUpload} />
      <Stack.Screen name="AdmissionScreenEducationalDetails" component={AdmissionScreenEducationalDetails} />
      <Stack.Screen name="AdmissionScreenAddressDetails" component={AdmissionScreenAddressDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;