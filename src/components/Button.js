import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from '../styles/landingPage.style.js';

const Button = ( {onPress, title, buttonStyle, textStyle} ) => {
    return (
        <Pressable style={buttonStyle} onPress={onPress}>
          <Text style={textStyle}>{title}</Text>
        </Pressable>
      );
};

export default Button;