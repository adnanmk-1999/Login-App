import React, {useEffect} from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import styles from './styles';

import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signUp';

const Stack = createNativeStackNavigator();

function AuthStack() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '818559440758-4s6m7m28sb7glsjlke10q3rikk3eosqn.apps.googleusercontent.com',
    });
  });

  return (
    <Stack.Navigator screenOptions={styles.stackNavigator}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: 'Sign Up',
          headerLeft: () => (
            <View>
              <FontAwesome
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
