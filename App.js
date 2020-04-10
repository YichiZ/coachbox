import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import Authentication from './components/Authentication';

export default function App() {  
  return(    
    <View style={{ alignItems: 'center'}}>
      <Text style={{ fontSize: 16 }}>CoachBox</Text>
      <Text>Authentication</Text>
      <View>
        <Text>Coach</Text>
        <Text>Athlete</Text>
      </View>
      <View>
        <Button title="Coach"/>
        <Button title="Athlete"/>
      </View>
      <Text>Hello Coach!</Text>
      <Text>Please fill out the form below to get started</Text>
      <TextInput value="Enter email here..."/>
      <TextInput value="Enter password here..."/>
      <Button title="Sign up!"/>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
      
  }
})