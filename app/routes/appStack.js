import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from './styles';

import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
      <Stack.Navigator screenOptions={styles.stackNavigator}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
      </Stack.Navigator>
  );
}

export default AppStack;
