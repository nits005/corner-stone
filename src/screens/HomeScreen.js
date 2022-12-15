import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import SpecialText from '../components/SpecialText';
import styles from '../styles/landingPage.style.js';

const HomeScreen = ( {navigation, route} ) => {
    console.log(route);
    return (
      <View style={styles.mainView}>
        < SpecialText style={styles.logo} fText="Corner" sText="stone" fTextColor={{color: '#004AAD'}} sTextColor={{color: '#00B5F8'}}/>
          <Button
            title="Go to Details"
            onPress={() => {navigation.navigate("Details")}}/>
      </View>
    )
};

export default HomeScreen;