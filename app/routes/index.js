import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AuthProvider } from '../authentication/authProvider';

import Routers from './routers';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
  
  );
}

export default Routes;
