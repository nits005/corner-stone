import React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import CommonStlye from '../styles/CommonStlye';

const Age = ({navigation, route}) => {
    return (
      <View style={CommonStlye.container}>
        <Text style={CommonStlye.heading}>How old are you?</Text>
        <Text style={CommonStlye.content}>
          Your age helps us to create a tailored guidance according to your age group.
        </Text>

        <Pressable style={CommonStlye.arrowBtn} 
          onPress={() => {navigation.navigate("Explore")}}>
            <Image style={CommonStlye.arrowImg} source={require('../assets/img/vector.png')} />
            {/* <Text style={CommonStlye.arrow} >{'>'}</Text> */}
        </Pressable>
      </View>
    )
};

export default Age;