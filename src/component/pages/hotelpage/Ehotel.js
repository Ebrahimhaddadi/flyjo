import {View,Text,Header,Container,Content,Right,Left,Icon, Button} from 'native-base';
import React from "react";
import {Image,TouchableOpacity} from 'react-native';
import moment from "moment-jalaali";
import { ehotel } from '../../../assets/css';

//Ehotel=Externalhotel
const Elhotel=({navigation})=>{
    return(
        <Container>
        <View style={{height:80}}>
            <Button transparent style={ehotel.header}>
                <View style={ehotel.mainviewtext}>
                <Text style={ehotel.textheader}>مقصد (هتل یا شهر)</Text>
                </View>
                </Button>
        </View>
        <View style={{backgroundColor:"#F6F9FF",justifyContent:"center",alignItems: "center",flex:1}}>
           <View style={ehotel.selectcalnder}>
           <View style={ehotel.dateinterview}>
                   <Image source={require("./../../../assets/img/hotel/drawable-hdpi/date.png")}
                   style={ehotel.imagedate}
                   />
                   <TouchableOpacity onPress={()=>navigation.navigate("Mydatepicker") }>
                   <Text style={ehotel.textdate}>تاریخ ورود</Text>
                   <Text style={ehotel.textday}>{moment().format('jYYYY/jM/jD')}</Text>
                   </TouchableOpacity>
               </View>
               <View style={ehotel.dateinterview}>
                   <Image source={require("./../../../assets/img/hotel/drawable-hdpi/date.png")}
                   style={ehotel.imagedate}
                   />
                   <TouchableOpacity onPress={()=>navigation.navigate("Mydatepicker") }>
                   <Text style={ehotel.textdate}>تاریخ خروج</Text>
                   <Text style={ehotel.textday}>{moment().format('jYYYY/jM/jD')}</Text>
                   </TouchableOpacity>
               </View>
           </View>
           <View style={ehotel.selectcalnder}>
               
          </View>

        </View>
        <Button transparent style={ehotel.btnbjoo}><Text style={ehotel.textbjoo}>بجو</Text></Button>
        </Container>
    )
}
export default Elhotel;