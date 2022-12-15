import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../components/Button.js';
import styles from '../styles/landingPage.style.js';

const ExploreScreen = ( {navigation, route} ) => {
    return (
      <View style={styles.mainView}>
        <Text style={styles.appName}>
          Corner
          <Text style={{color: '#00B5F8'}}>
            stone
          </Text>
        </Text>
        <Image style={styles.logo} source={require('../artifacts/logo.png')} />
        <Text style={styles.text}>
          Every person is unique and require mental health support as needed.
        </Text>
        <Button
            buttonStyle={styles.startExploringButton}
            textStyle={styles.buttonText}
            title="Start Exploring"
            onPress={() => {navigation.navigate("Details")}}/>
        <Text style={styles.smallText}>
          Create an account?  SignUp
        </Text>
      </View>
    )
};

export default ExploreScreen;