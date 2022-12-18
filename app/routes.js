import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Explore from './screens/Explore';
import Nickname from './screens/Nickname';
import SelfCare from './screens/SelfCare';
import Age from './screens/Age';

const Stack = createStackNavigator();

const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Explore">
          <Stack.Screen
            name="Explore"
            component={Explore}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Nickname"
            component={Nickname}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelfCare"
            component={SelfCare}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Age"
            component={Age}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
};

export default Routes;