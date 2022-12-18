import React from "react";
import { View, Text, Image, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import NicknameStyle from '../styles/NicknameStyle';
import CommonStlye from "../styles/CommonStlye";

const Nickname = ( {navigation, route} ) => {
    const [name, onChangeName] = React.useState(null);

    return (
      <View style={CommonStlye.container}>
        <Image style={NicknameStyle.avatar} source={require('../assets/img/nola.png')} />

        <Text style={CommonStlye.heading}>
          Hey! I’m
          <Text style={{color: '#004AAD'}}> Nola</Text>
        </Text>

        <Text style={CommonStlye.content}>
          Our conversations are going to be private & anonymous, it just stays with me. 
          Tell me how do you like to be called and we are good to go
        </Text>

        <TextInput
          style={NicknameStyle.input}
          placeholder="Your nickname"
          onChangeText={onChangeName}
          value={name}
        />

        <Pressable style={CommonStlye.arrowBtn} 
          onPress={() => {navigation.navigate("SelfCare")}}>
            <Image style={CommonStlye.arrowImg} source={require('../assets/img/vector.png')} />
            {/* <Text style={CommonStlye.arrow} >{'>'}</Text> */}
        </Pressable>

        <Text style={NicknameStyle.smallText}>
          By continuing, I confirm I am 13 or older and accept the Terms of Service and Privacy Policy
        </Text>

      </View>
    )
};

export default Nickname;