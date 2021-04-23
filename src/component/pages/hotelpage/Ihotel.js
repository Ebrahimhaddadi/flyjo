import {View,Text,Header,Container,Content,Right,Left,Icon, Button} from 'native-base';
import React,{useState} from "react";
import {ihotel} from "./../../../assets/css";
import {Image,TouchableOpacity } from 'react-native';
import {useDispatch,useSelector, connect} from 'react-redux';

import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
moment.locale("fa", fa);
moment.loadPersian({usePersianDigits: true});
moment().format();

//Ihotel==Internalhotel
const Ihotel=(props)=>{
    const { navigation,navigate } = props;
    const dispatch=useDispatch();
    const dateInter=useSelector(state=>state.datepickerReducer.dateInter);
    const dateExist=useSelector(state=>state.datepickerReducer.dateExist)
    const DI=dateInter;
    const DE=dateExist;
   
    let today = new Date().toLocaleDateString('fa-IR');
console.log(today);
    return(
        <Container>
           <View style={{height:80}}>
            <Button transparent style={ihotel.header}>
                <View style={ihotel.mainviewtext}>
                <Text style={ihotel.textheader}>مقصد (هتل یا شهر)</Text>
                </View>
                </Button>
        </View>
        <View style={{backgroundColor:"#F6F9FF",justifyContent:"center",alignItems: "center",flex:1}}>
           <View style={ihotel.selectcalnder}>
               <View style={ihotel.dateinterview}>
                   <Image source={require("./../../../assets/img/hotel/drawable-hdpi/date.png")}
                   style={ihotel.imagedate}
                   />
                   <TouchableOpacity onPress={()=>navigation.navigate("Mydatepicker") }>
                   <Text style={ihotel.textdate}>تاریخ ورود</Text>
    <Text style={ihotel.textday}>{ moment(DI).format('jYYYY/jM/jD')}</Text>
                   </TouchableOpacity>
               </View>
               <View style={ihotel.dateinterview}>
                   <Image source={require("./../../../assets/img/hotel/drawable-hdpi/date.png")}
                   style={ihotel.imagedate}
                   />
                   <TouchableOpacity onPress={()=>navigation.navigate("DatePickerExist") }>
                   <Text style={ihotel.textdate}>تاریخ خروج</Text>
                   <Text style={ihotel.textday}>{ moment(DE).format('jYYYY/jM/jD')}</Text>
                   </TouchableOpacity>
               </View>
           </View>
           <View style={ihotel.selectcalnder}>
   
    <Text>از تاریخ{today}</Text>
          </View>

        </View>
        <Button transparent style={ihotel.btnbjoo}><Text style={ihotel.textbjoo}>بجو</Text></Button>
        </Container>
    )
}
// const mapStateToProps=(state)=>{
//     return{
//         selectedDate:state.datepickerReducer.date,
//         data:state.datepickerReducer.data
//     }
// }
// export default connect(mapStateToProps)(Ihotel);
export default Ihotel;