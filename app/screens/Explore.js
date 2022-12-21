import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import ExploreStyle from '../styles/ExploreStyle';
import CommonStlye from '../styles/CommonStlye';

const Explore = ( {navigation} ) => {
    return (
      <View style={CommonStlye.container}>
        <Text style={ExploreStyle.appName}>
          Corner
          <Text style={{color: '#00B5F8'}}>stone</Text>
        </Text>

        <View style={ExploreStyle.logoCircle}>
          <Image style={ExploreStyle.logo} source={require('../assets/img/logo.png')} />
        </View>

        <Text style={ExploreStyle.text}>
          Every person is unique and require mental health support as needed.
        </Text>

        <Pressable style={CommonStlye.button} 
          onPress={() => {navigation.navigate("Nickname")}}>
          <Text style={CommonStlye.buttonText}>
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