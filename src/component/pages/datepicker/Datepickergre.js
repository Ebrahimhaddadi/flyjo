import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { View,Text} from 'native-base'
import {TouchableHighlight} from 'react-native'

export default class Datepickergre extends Component {
  constructor(props){
    super(props)
    const mydate= new Date();
    this.state = {date:mydate}
  }

  render(){
    const { navigate } = this.props.navigation;
    
    return (
        <View  >
            <View style={{width:90,height:40,padding:5 ,backgroundColor: "whitesmoke",flexDirection: "row",
            marginTop:20,
            justifyContent: "center",alignItems: "center",margin:4,borderRadius:20}}>
            <TouchableHighlight style={{margin:3
        }}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => this.props.navigation.navigate("Mydatepicker")}
        >
              <Text style={{fontFamily:"IRANSansMobile",textAlign:"center"}}>شمسی</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{margin:3}}
            style={{
                backgroundColor: "red",
                borderRadius:20,
               margin: 3,
               width:45,
               height:38,
               alignItems: 'center',
               justifyContent: 'center',
             }}
            >
              <Text style={{fontFamily:"IRANSansMobile",textAlign:"center"}}>میلادی</Text>
            </TouchableHighlight>
          </View>
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
         placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
    )
  }
}