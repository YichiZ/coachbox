import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import Authentication from './components/Authentication';

export default function App() {
  const [isCoachSelected, setIsCoachSelected] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return(    
    <View style={{alignItems: 'center', flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>CoachBox</Text>
        <Text style={styles.title}>Authentication</Text>
      </View>
      
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button title="Coach" onPress={() => setIsCoachSelected(true)}/>
        <Button title="Athlete" onPress={() => setIsCoachSelected(false)}/>
      </View>
      <View style={{ flex: 2 }}>
        <Text>Hello Coach!</Text>
        <Text>Please fill out the form below to get started</Text>
        <Text>Email</Text>
        <TextInput placeholder={'Enter email here...'} value={email} onChangeText={text => setEmail(text)}/>
        <Text>Password</Text>
        <TextInput placeholder={'Enter password here...'} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}/>
        <Button title="Sign up!"/>
      </View>
      
      <View style={{ flex: 1 }}>
        <Text>-----Debug-----</Text>
        <Text>IsCoachSelected = {isCoachSelected.toString()}</Text>
        <Text>Email = {email}</Text>
        <Text>Password = {password}</Text>
      </View>      
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1
  },
  header: {
      fontSize: 14,
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: '#6200EE'
  },
  title: {
  },
  authenticationContainer: {
    flex: 1
  },
  button: {
  },
  

})