import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,TouchableOpacity, Dimensions
} from 'react-native';
import PersianCalendarPicker from 'react-native-persian-calendar-picker';
// import PersianCalendarPicker from 'React-native-jalali-datepicker'
import { useDispatch, useSelector } from 'react-redux'
import {myDate} from '../../../redux/action/index';

import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
moment.locale("fa", fa);
moment.loadPersian();


Dimensions.get('window').height;
Dimensions.get('window').width;

const Mydatepicker = (props) => {
  const { navigation,navigate } = props;
  console.log(props)
  const dispatch=useDispatch();
   
  const btnselect = () => {
    navigation.goBack()
  }

 const  onDateChange=(date)=>{
   dispatch(myDate(date));
  }
  
  return (
    <View style={styles.container}>
      <View style={{
        width: 90, height: 40,
        padding: 5, backgroundColor: "whitesmoke",
        flexDirection: "row", justifyContent: "center",
        alignItems: "center", margin: 4,
        borderRadius: 20
      }}>
        <TouchableHighlight style={{
          backgroundColor: "red",
          borderRadius: 20,
          margin: 3,
          width: 45,
          height: 38,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{ fontFamily: "IRANSansMobile", textAlign: "center" }}>شمسی</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ margin: 3 }}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => props.navigation.navigate("Datepickergre")}
        >
          <Text>میلادی</Text>
        </TouchableHighlight>
      </View>
      <PersianCalendarPicker
        onDateChange={(date)=>{onDateChange(date);
          console.log(date)}}
        textStyle={{ fontFamily: "Vazir-Bold-FD-WOL", color: "black", textAlign: "center", }}
        isRTL={false}
        height={800}
        dayShape={"square"}
        maximumDate={new Date(Date.now() - 86400000)}
      />

      <View>
      
      </View>
      <TouchableOpacity
        onPress={btnselect}
        style={{
          justifyContent: "center", alignItems: 'center',
          backgroundColor: "skyblue", width: "75%", alignSelf: "center",
          marginTop: 20, height: 50,
          borderRadius: 15
        }}
      >
        <Text>انتخاب</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
   justifyContent:"center"
  },
});

export default Mydatepicker;
