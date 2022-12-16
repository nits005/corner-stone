import React from 'react';
import { Text, Pressable } from 'react-native';

const Button = ( {onPress, title, buttonStyle, textStyle} ) => {
    return (
        <Pressable style={buttonStyle} onPress={onPress}>
          <Text style={textStyle}>{title}</Text>
        </Pressable>
      );
};

export default Button;