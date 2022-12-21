import React from "react";
import { View, Text, Image, Pressable } from 'react-native';
import CommonStlye from "../styles/CommonStlye";
import SelectionStyle from '../styles/SelectionStyle';


const Loading = ( {navigation, route} ) => {

    return (
      <View style={CommonStlye.container}>
        <Image style={{ height: "30%", width: "60%"}} source={require('../assets/img/loading.png')} />

        <Text style={SelectionStyle.content}>
          Creating program based on your selection.......
        </Text>

        <Pressable style={CommonStlye.arrowBtn} 
            onPress={() => {navigation.navigate("Selection")}}>
            <Image style={CommonStlye.arrowImg} source={require('../assets/img/vector.png')} />
        </Pressable>

      </View>
    )
};

export default Loading;