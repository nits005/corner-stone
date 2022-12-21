import React, {useState} from 'react';
import { Pressable, View, Text, Image, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CommonStlye from '../styles/CommonStlye';
import AgeStyle from '../styles/AgeStyle';

const Age = ({navigation, route}) => {
    const [age, setAge] = useState("Age");
    const [isDisplayDate, setShow] = useState(false);

    const changeSelectedDate = (event, selectedDate) => {
        setShow(false);
        const currentDate = selectedDate;
        setAge(`${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`);
    };

    const displayDatepicker = () => {
      setShow(true);
    };

    return (
      <View style={CommonStlye.container}>
        <Text style={CommonStlye.heading}>How old are you?</Text>
        
        <Text style={CommonStlye.content}>
          Your age helps us to create a tailored guidance according to your age group.
        </Text>

        <Pressable style={AgeStyle.inputContainer} onPress={displayDatepicker}>
          <Image source={require('../assets/img/calender-Icon.png')} />
          <TextInput style={AgeStyle.inputs} editable={false} value={age}/>
        </Pressable>

        {isDisplayDate && (
            <DateTimePicker
                value={new Date()}
                mode='date'
                display="default"
                dateFormat='DD-MM-YYYY'
                onChange={changeSelectedDate}
            />
        )}

        <Pressable style={CommonStlye.arrowBtn} 
          onPress={() => {navigation.navigate("Reason")}}>
            <Image style={CommonStlye.arrowImg} source={require('../assets/img/vector.png')} />
            {/* <Text style={CommonStlye.arrow} >{'>'}</Text> */}
        </Pressable>
      </View>
    )
};

export default Age;