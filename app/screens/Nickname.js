import React from "react";
import { View, Text, Image, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import NicknameStyle from '../styles/NicknameStyle';

const Nickname = ( {navigation, route} ) => {
    const [name, onChangeName] = React.useState(null);

    return (
      <View style={NicknameStyle.container}>
        <Image style={NicknameStyle.avatar} source={require('../assets/img/avatar.png')} />

        <Text style={NicknameStyle.heading}>
          Hey! I’m
          <Text style={{color: '#004AAD'}}> Nola</Text>
        </Text>

        <Text style={NicknameStyle.content}>
          Our conversations are going to be private & anonymous, it just stays with me. 
          Tell me how do you like to be called and we are good to go
        </Text>

        <TextInput
          style={NicknameStyle.input}
          placeholder="Your nickname"
          onChangeText={onChangeName}
          value={name}
        />

        <Pressable style={NicknameStyle.arrowBtn} 
          onPress={() => {navigation.navigate("Explore")}}>
            <Image style={NicknameStyle.arrowImg} source={require('../assets/img/vector.png')} />
            {/* <Text style={NicknameStyle.arrow} >{'>'}</Text> */}
        </Pressable>

        <Text style={NicknameStyle.smallText}>
          By continuing, I confirm I am 13 or older and accept the Terms of Service and Privacy Policy
        </Text>

      </View>
    )
};

export default Nickname;