import React from "react";
import { View, Text, Image, Pressable } from 'react-native';
import CommonStlye from "../styles/CommonStlye";
import SelectionStyle from '../styles/SelectionStyle';


const Selection = ( {navigation, route} ) => {

    return (
      <View style={CommonStlye.container}>
        <Image style={SelectionStyle.avatar} source={require('../assets/img/nola.png')} />

        <Text style={CommonStlye.heading}>
          Hey!
          <Text style={{color: '#004AAD'}}> Ram</Text>
        </Text>
        
        <Image
          source={require('../assets/img/user.png')} 
          style={SelectionStyle.user}
        />

        <Text style={SelectionStyle.content}>
          Your program is ready.
        </Text>

        <Pressable style={CommonStlye.button} 
          onPress={() => {navigation.navigate("Age")}}>
          <Text style={CommonStlye.buttonText}>
            Okay
          </Text>
        </Pressable> 

      </View>
    )
};

export default Selection;