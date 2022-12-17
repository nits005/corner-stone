import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import ExploreStyle from '../styles/ExploreStyle';

const Explore = ( {navigation} ) => {
    return (
      <View style={ExploreStyle.container}>
        <Text style={ExploreStyle.appName}>
          Corner
          <Text style={{color: '#00B5F8'}}>stone</Text>
        </Text>

        <Image style={ExploreStyle.logo} source={require('../assets/img/logo.png')} />

        <Text style={ExploreStyle.text}>
          Every person is unique and require mental health support as needed.
        </Text>

        <Pressable style={ExploreStyle.button} 
          onPress={() => {navigation.navigate("Details")}}>
          <Text style={ExploreStyle.buttonText}>
            Start Exploring
          </Text>
        </Pressable>

        <Text style={ExploreStyle.smallText}>
          Create an account?  SignUp
        </Text>
      </View>
    )
};

export default Explore;