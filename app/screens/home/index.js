import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../authentication/authProvider';

import styles from './styles';

import FormButton from '../../components/formButton';

function HomeScreen({navigation}) {
  const {user, logout} = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>User ID : {user.uid}</Text>
      <Text>
        You can see the list of star wars planets by clicking the following
        button.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StarWars')}>
        <Text style={styles.buttonText}>StarWars Planets</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('WebView')}>
        <Text style={styles.buttonText}>WebView</Text>
      </TouchableOpacity>
      <FormButton buttonTitle="Log Out" onPress={() => logout()} />
    </View>
  );
}
export default HomeScreen;
