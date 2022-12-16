import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Details from './screens/Details';
import Image from './screens/Image';
import Explore from './screens/Explore';

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
            name="Details"
            component={Details}
          />
          <Stack.Screen
            name="BigImageView"
            component={Image}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
};

export default Routes;