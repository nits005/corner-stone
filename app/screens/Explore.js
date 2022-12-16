import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../components/Button';
import exploreStyle from '../styles/explore.style';

const Explore = ( {navigation} ) => {
    return (
      <View style={exploreStyle.mainView}>
        <Text style={exploreStyle.appName}>
          Corner
          <Text style={{color: '#00B5F8'}}>
            stone
          </Text>
        </Text>
        <Image style={exploreStyle.logo} source={require('../assets/img/logo.png')} />
        <Text style={exploreStyle.text}>
          Every person is unique and require mental health support as needed.
        </Text>
        <Button
            buttonStyle={exploreStyle.startExploringButton}
            textStyle={exploreStyle.buttonText}
            title="Start Exploring"
            onPress={() => {navigation.navigate("Details")}}/>
        <Text style={exploreStyle.smallText}>
          Create an account?  SignUp
        </Text>
      </View>
    )
};

export default Explore;