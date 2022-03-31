import React, {useContext} from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import {AuthContext} from '../authentication/authProvider';

import HomeScreen from '../screens/home';
import Planets from '../screens/starWars/index';
import WebView from '../screens/webView/index';

const Stack = createNativeStackNavigator();

function AppStack() {
  const {URL} = useContext(AuthContext);

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
        options={({navigation}) => ({
          title: 'StarWars Planets',
          headerLeft: () => (
            <View>
              <FontAwesome
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          ),
          headerRight: () => (
            <View>
              <FontAwesome
                name="navicon"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => alert('Menu')}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="WebView"
        component={WebView}
        options={({navigation}) => ({
          title: 'Web View',
          headerLeft: () => (
            <View>
              {URL === 'https://www.ust.com/en/careers' && (
                <FontAwesome
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Home')}
                />
              )}
            </View>
          ),
          headerRight: () => (
            <View>
              <FontAwesome
                name="navicon"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => alert('Menu')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
