import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../../authentication/authProvider';

import styles from './styles';

import FormButton from '../../components/formButton';

function HomeScreen() {
  const {user, logout} = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>User ID : {user.uid}</Text>
      <FormButton buttonTitle="Log Out" onPress={() => logout()}/>
    </View>
  );
}
export default HomeScreen;
