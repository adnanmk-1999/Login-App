import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from './styles';

import HomeScreen from '../screens/home';
import Planets from "../screens/starWars/index";
import WebView from '../screens/webView/index';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={styles.stackNavigator}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Overview'}}
      />
      <Stack.Screen
        name="StarWars"
        component={Planets}
        options={{title: 'StarWars Planets'}}
      />
      <Stack.Screen
        name="WebView"
        component={WebView}
        options={{title: 'Web View'}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
