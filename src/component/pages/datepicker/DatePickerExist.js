import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
// import PersianCalendarPicker from 'react-native-persian-calendar-picker';
import PersianCalendarPicker from 'react-native-persian-calendar-picker';
import { useDispatch, useSelector } from 'react-redux'
import {dateExist} from '../../../redux/action/index'




const DatePickerExist = (props) => {
  const { navigation,navigate } = props;
  console.log(props)
  const dispatch=useDispatch();
   
  const btnselect = () => {
    navigation.navigate("Ihotel")
  }
 const  onDateChange=(date)=>{
   dispatch(dateExist(date))
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
        onDateChange={onDateChange}
        textStyle={{ fontFamily: "IRANSansMobile", color: "black", textAlign: "center" }}
        isRTL={false}
        height={600}
        dayShape={"circle"}
      />

      <View>
      <Text>تنظیم تاریخ خروج</Text>
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
    marginTop: 100,
  },
});

export default DatePickerExist;
