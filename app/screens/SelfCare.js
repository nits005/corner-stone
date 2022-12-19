import React from 'react';
import { Pressable, View, Text, Image, TouchableOpacity } from 'react-native';
import CommonStlye from '../styles/CommonStlye';
import SelfCareStyle from '../styles/SelfCareStyle';

const SelfCare = ({navigation, route}) => {
    const [workType, setWorkType] = React.useState(null);
    const workTypes = ["self-care", "guided-support"];

    return (
      <View style={CommonStlye.container}>
        <Text style={CommonStlye.heading}>How do you like to work with us</Text>

        <View style={{ padding: "10%", flex: 1, top: "38%" }}>
          <View style={{
            flexDirection: "row", flexWrap: "wrap"
          }}>
            { workTypes.map((value) => (
              <TouchableOpacity
              key={value}
              onPress={() => setWorkType(value)}
              style={[SelfCareStyle.button(value), workType === value && SelfCareStyle.selected]}
              >
                <Image style={SelfCareStyle.avatar} source= {
                  value === 'self-care' ? require('../assets/img/self-care.png') : require('../assets/img/guided-support.png') } 
                />

                <Text style={SelfCareStyle.cardTitle}>{ value === 'self-care' ? "Self-Care" : "Guided Support" }</Text>
              </TouchableOpacity>
            ))}

          </View>
        </View>

        <Pressable style={[CommonStlye.arrowBtn, workType === null && CommonStlye.disableBtn]} 
          onPress={() => {navigation.navigate("Age")}}
          disabled={workType === null}>
            <Image style={CommonStlye.arrowImg} source={require('../assets/img/vector.png')} />
            {/* <Text style={CommonStlye.arrow} >{'>'}</Text> */}
        </Pressable>
      </View>
    )
};

export default SelfCare;