import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, Pressable, SafeAreaView, StatusBar } from 'react-native';
import CommonStlye from '../styles/CommonStlye';
import ReasonStyle from '../styles/ReasonStyle';

const reasons = [
  {
    name: 'Build Self Esteem',
    image: require('../assets/img/build-self-esteem.png'),
  },
  {
    name: 'Better Sleep',
    image: require('../assets/img/better-sleep.png'),
  },
  {
    name: 'Reduce Anxiety',
    image: require('../assets/img/reduce-anxiety.png'),
  },
  {
    name: 'Improve Performance',
    image: require('../assets/img/improve-performance.png'),
  },
  {
    name: 'Reduce Stress',
    image: require('../assets/img/reduce-stress.png'),
  },
  {
    name: 'Increase Happiness',
    image: require('../assets/img/increase-happiness.png'),
  },
  {
    name: 'Relieve Exam Fear',
    image: require('../assets/img/relieve-exam-fear.png'),
  },
  {
    name: 'Reduce Depression',
    image: require('../assets/img/reduce-depression.png'),
  },
];

const Reason = ({navigation}) =>  {
  const [selectedReasons, setSelectedReasons] = React.useState([]);

  const checkIsSelected = (name) => {
    return selectedReasons.filter((i) => i === name).length > 0;
  };

  return (
    <View style={CommonStlye.container}>
      <Text style={[CommonStlye.heading, {top: "8%"}]}>
        What brings you to CornerStone?
      </Text>

      <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
        <ScrollView style={{marginHorizontal: 20}}>
          <View style={{ padding: "5%", paddingTop: "10%", flex: 1, top: "15%" }}>
            <View style={{
              flexDirection: "row", flexWrap: "wrap"
            }}>
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
                  style={[ReasonStyle.button, checkIsSelected(item.name) && ReasonStyle.selected]}
                >
                  <Text style={ReasonStyle.cardTitle}>{ item.name }</Text>
                  <Image style={ReasonStyle.avatar} source= {item.image} />   
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <Pressable style={[CommonStlye.arrowBtn, selectedReasons.length == 0 && CommonStlye.disableBtn, {top: "90%"}]} 
        onPress={() => {navigation.navigate("Loading")}}
        disabled={selectedReasons.length == 0}
      >
        <Image style={CommonStlye.arrowImg} source={require('../assets/img/vector.png')} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    grid: {
        top: "40%",
        paddingLeft:"5%",
        paddingRight:"5%",
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