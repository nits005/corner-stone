import React from 'react';
import { View, Text, Image, Pressable, SafeAreaView } from 'react-native';
import CommonStlye from '../styles/CommonStlye';

const Explore = ( {navigation} ) => {
    return (
      <SafeAreaView className="bg-white items-center justify-center flex-1">
        {/* app name */}
        <View className="flex-row">
          <Text className="text-blue-800 text-5xl">Corner</Text>
          <Text className="text-sky-400 text-5xl">stone</Text>
        </View>

        {/* app logo */}
        <View className="p-14">
          <View className="border border-gray-600 rounded-full p-5">
            <Image source={require('../assets/img/logo.png')}
              className="h-40 w-40 rounded-full"
            />
          </View>
        </View>


        {/* slogan */}
        <Text className="text-3xl text-gray-500 text-center px-4">
          Every person is unique and require mental health support as needed.
        </Text>

        {/* start explore button */}
        <View className="p-14">
          <Pressable className="bg-sky-500 p-3 w-80"
              onPress={() => {navigation.navigate("Nickname")}}>
              <Text style={CommonStlye.buttonText}>
                Start Exploring
              </Text>
          </Pressable>
        </View>

        {/* sign up option */}
        <Text className="text-base">
          Create an account?  SignUp
        </Text>
      </SafeAreaView>
    )
};

export default Explore;