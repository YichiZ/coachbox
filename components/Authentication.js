import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Coach from '../assets/Authentication/coach.svg';
import Athlete from '../assets/Authentication/athlete.svg';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Authentication() {
  const [isCoachSelected, setIsCoachSelected] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{alignItems: 'center', flex: 2}}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>CoachBox</Text>
        </View>
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
          <Coach width={120} height={60} />
          <Text>Coach</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsCoachSelected(false)}>
          <Athlete width={120} height={60} />
          <Text>Athlete</Text>
        </TouchableOpacity>
      </View>

      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Button with icon component"
        type="clear"
      />

      <Input
        placeholder='Please enter your email address'
        leftIcon={
          <Icon
            name='enveloppe'
            size={16}
            color='black'
          />
          }
        />

      <Input
        placeholder='Please enter a password'
        leftIcon={
          <Icon
            name='lock'
            size={16}
            color='black'
          />
          }
        />

      <View style={{flex: 2}}>
        <Text>Hello {isCoachSelected ? 'coach' : 'athlete'}!</Text>
        <Text style={{color: 'grey'}}>
          Please fill out the form below to get started:
        </Text>

        <Input
        placeholder='emailAddress@email.com'
        leftIcon={
          <Icon
            name='enveloppe'
            size={16}
            color='black'
          />
          }
        />

        <Input
        placeholder='Please enter a password'
        leftIcon={
          <Icon
            name='lock'
            size={16}
            color='black'
          />
          }
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    borderRadius: 2,
    backgroundColor: '#00dafa',
    width: 500,
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    color: 'black',
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

