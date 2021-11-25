import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import Home1 from './Home1';
import Park from './Park';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home1'}>
        <Stack.Screen name="Home" component={Home1} />
        <Stack.Screen name="Park" component={Park} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
