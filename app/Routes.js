import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Explore from './screens/Explore';
import Nickname from './screens/Nickname';
import SelfCare from './screens/SelfCare';
import Age from './screens/Age';
import Reason from './screens/Reason';
import Loading from './screens/Loading';
import Selection from './screens/Selection';

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
          <Stack.Screen
            name="Reason"
            component={Reason}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Selection"
            component={Selection}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
};

export default Routes;
