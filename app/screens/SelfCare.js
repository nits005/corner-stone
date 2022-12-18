import React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import CommonStlye from '../styles/CommonStlye';

const SelfCare = ({navigation, route}) => {
    return (
      <View style={CommonStlye.container}>
        <Text style={CommonStlye.heading}>How do you like to work with us</Text>

        <Pressable style={CommonStlye.arrowBtn} 
          onPress={() => {navigation.navigate("Age")}}>
            <Image style={CommonStlye.arrowImg} source={require('../assets/img/vector.png')} />
            {/* <Text style={CommonStlye.arrow} >{'>'}</Text> */}
        </Pressable>
      </View>
    )
};

export default SelfCare;