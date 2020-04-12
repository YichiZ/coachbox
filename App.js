import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import Authentication from './components/Authentication';

export default function App() {
  const [isCoachSelected, setIsCoachSelected] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return(    
    <View style={{ alignItems: 'center'}}>
      <Text style={{ fontSize: 16 }}>CoachBox</Text>
      <Text>Authentication</Text>
      <View>
        <Text>Coach</Text>
        <Text>Athlete</Text>
      </View>
      <View>
        <Button title="Coach" onPress={() => setIsCoachSelected(true)}/>
        <Button title="Athlete" onPress={() => setIsCoachSelected(false)}/>
      </View>
      
      <Text>Hello Coach!</Text>
      <Text>Please fill out the form below to get started</Text>
      <Text>Email</Text>
      <TextInput placeholder={'Enter email here...'} value={email} onChangeText={text => setEmail(text)}/>
      <Text>Password</Text>
      <TextInput placeholder={'Enter password here...'} value={password} onChangeText={text => setPassword(text)}/>
      <Button title="Sign up!"/>
      
      <Text>-----Debug-----</Text>
      <Text>IsCoachSelected = {isCoachSelected.toString()}</Text>
      <Text>Email = {email}</Text>
      <Text>Password = {password}</Text>    
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
      
  }
})