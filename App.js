import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Authentication from './components/Authentication';
import Coach from './assets/Authentication/coach.svg';
import Athlete from './assets/Authentication/athlete.svg';

export default function App() {
  const [isCoachSelected, setIsCoachSelected] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{alignItems: 'center', flex: 2}}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>CoachBox</Text>
        </View>
        <Text style={styles.title}>Authentication</Text>
      </View>
      
      <View>
        <Text>Choose account type:</Text>
      </View>
      
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsCoachSelected(true)}>
          <Coach width={120} height={40} />
          <Text>Coach</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsCoachSelected(false)}>
          <Athlete width={120} height={40} />
          <Text>Athlete</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 2}}>
        <Text>Hello {isCoachSelected ? 'coach' : 'athlete'}!</Text>
        <Text style={{color: 'grey'}}>
          Please fill out the form below to get started:
        </Text>
        <Text style={{marginTop: 5}}>Email</Text>
        <TextInput
          placeholder={'Enter email here...'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text>Password</Text>
        <TextInput
          placeholder={'Enter password here...'}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <Button title="Sign up!" />
      </View>
      
      <View style={{flex: 1}}>
        <Text>Debug</Text>
        <Text>IsCoachSelected = {isCoachSelected.toString()}</Text>
        <Text>Email = {email}</Text>
        <Text>Password = {password}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    borderRadius: 2,
    backgroundColor: '#ca2008',
    width: 100,
  },
  header: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  title: {},
  authenticationContainer: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00dafa',
    padding: 5,
    margin: 2,
    borderRadius: 2,
  },
});
