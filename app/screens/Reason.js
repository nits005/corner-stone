import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, Pressable} from 'react-native';
//import { Pressable, View, Text, Image, TouchableOpacity } from 'react-native';
import CommonStlye from '../styles/CommonStlye';
import ReasonStyle from '../styles/ReasonStyle';


const REASONS = [
  {
    name: 'Build Self Esteem',
    image: require('../assets/img/guided-support.png'),
  },
  {
    name: 'Better Sleep',
    image: require('../assets/img/guided-support.png'),
  },
  {
    name: 'Reduce Anxiety',
    image: require('../assets/img/guided-support.png'),
  },
  {
    name: 'Improve Performance',
    image: require('../assets/img/guided-support.png'),
  },
  {
    name: 'Reduce Stress',
    image: require('../assets/img/guided-support.png'),
  },
  {
    name: 'Increase Happiness',
    image: require('../assets/img/guided-support.png'),
  },
  {
    name: 'Relieve Exam Fear',
    image: require('../assets/img/guided-support.png'),
  },
  {
    name: 'Reduce Depression',
    image: require('../assets/img/guided-support.png'),
  },
];

const Reason = ({navigation, route}) =>  {
  const [reasons, setReasons] = React.useState(REASONS);
  const [selectedReasons, setSelectedReasons] = React.useState([]);

  const checkIsSelected = (name) => {
    return selectedReasons.filter((i) => i === name).length > 0;
  };

  return (
    <View style={CommonStlye.container}>
        <Text style={ReasonStyle.heading}>What brings you to CornerStone?</Text>
        
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={styles.grid}>
                { reasons.map((item) => (
                    <TouchableOpacity
                        key={item.name}
                        onPress={() => {
                            if (checkIsSelected(item.name)) {
                            setSelectedReasons((prev) => prev.filter((i) => i !== item.name));
                            } else {
                            setSelectedReasons(prev => [...prev, item.name]);
                            }
                        }}
                        style={[styles.gridItem, ReasonStyle.button, checkIsSelected(item.name) && ReasonStyle.selected]}
                    >

                        <Text style={ReasonStyle.cardTitle}>{ item.name }</Text>
                        
                        <Image style={ReasonStyle.avatar} source= {item.image} />   
                    </TouchableOpacity>
                ))}
                </View>
            {/* </ScrollView> */}

        <Pressable style={[CommonStlye.arrowBtn, selectedReasons.length == 0 && CommonStlye.disableBtn]} 
            onPress={() => {navigation.navigate("Loading")}}
            disabled={selectedReasons.length == 0}>
            <Image style={CommonStlye.arrowImg} source={require('../assets/img/vector.png')} />
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    grid: {
        top: "40%",
        paddingLeft:"1%",
        paddingRight:"1%",
       // justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    gridItem: {
        margin:5,
        width: "20%",
        height: "22%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItemImage: {
        width: 100,
        height: 100,
        borderWidth: 1.5, 
        borderColor: 'white',
        borderRadius: 50,
    },
    gridItemText: {
        marginTop: 5,
        textAlign:'center',
    },
});

export default Reason;