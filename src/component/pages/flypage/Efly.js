import { View, Text, Header, Container, Content, Right, Left, Icon, Button } from 'native-base';
import React,{useEffect,useState} from "react";
import { Image, TouchableOpacity } from 'react-native';
import {useSelector} from 'react-redux';

import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
moment.locale("fa", fa);
moment.loadPersian({usePersianDigits: true});
moment().format();


import { efly } from '../../../assets/css';
//Ihotel==Internalhotel
const Efly = (props) => {
    const { navigation,navigate } = props;
//     const [bgc1,setbgc1]=useState('#fff')
//     const [bgc2,setbgc2]=useState("#F8C436")
//     const [colors,setColors]=useState(["#F8C436","#fff"]);
//     const [Hview,setHview]=useState(160);
//     const[marTop,setMarTop]=useState(90);
//     const [himg,setHimg]=useState(60);
//     const [wicon,setWicon]=useState(0);
//     useEffect(()=>{
//         displayrd()
//       });
//  changebgc1=()=>{
//       setbgc1("#F8C436");
//       setbgc2("#fff");
//       setHview(80);
//       setMarTop(50);
//       }
//   changebgc2=()=>{
//      setbgc2("#F8C436");
//      setbgc1("#fff")
//      setHview(160);
//      setWicon(30);
//      setMarTop(50);
//     }
//     const displayrd=()=>{
//         if(Hview==0){
//           setHview(0);
//           setHimg(80);
//           setWicon(0)
//         }else{
//             setHview(100)
//             setHimg(160)
//         }
//     }const [bgc1,setbgc1]=useState('#F8C436')
    const [bgc1,setbgc1]=useState('#F8C436')
    const [bgc2,setbgc2]=useState("#ffffff")
    const [colors,setColors]=useState(["#F8C436","#fff"])
    const [Fl,setFl]=useState(0);
    const[dis,setDis]=useState(90);
    const [himg,setHimg]=useState(60);
    const [wicon,setWicon]=useState(0);
    const [height,setHeight]=useState(0)
    useEffect(()=>{
      displayrd()
    });
 changebgc1=()=>{
      setbgc1("#F8C436");
      setbgc2("#fff");
      setFl(0);
      setDis(90)
      }
  changebgc2=()=>{
     setbgc2("#F8C436");
     setbgc1("#fff");
     setFl(100);
     setWicon(30);
     setDis(50);
    }
    const displayrd=()=>{
        if(Fl==0){
          setFl(0);
          setHimg(80);
          setWicon(0)
        }else{
            setFl(100)
            setHimg(160)
        }
    }
    const displaychild=()=>{
        if(numberchildE>=1){
            return <Text  style={efly.textnumber}>کودک{numberchild}</Text>
        }else{
        return null
        }
    };
    const displaybaby=()=>{
        if(numberbabyE>=1){
            return <Text  style={efly.textnumber}>نوزاد{numberbaby}</Text>
        }else{
        return null
        }
    }

    const imgtakeoff = require("./../../../assets/img/flyicons/drawable-hdpi/takeoff.png");
    const imglanding = require("./../../../assets/img/flyicons/drawable-hdpi/landing.png");
    const imgdate = require("./../../../assets/img/hotel/drawable-hdpi/date.png");
    const godate=useSelector(state=>state.datepickerReducer.godateefly);
    const returndate=useSelector(state=>state.datepickerReducer.returndateefly)
    const numberAdultE=useSelector(state=>state.numpassengereflyReducer.adultE)
    const numberchildE=useSelector(state=>state.numpassengereflyReducer.childE)
    const numberbabyE=useSelector(state=>state.numpassengereflyReducer.babyE)
    return (
        <Container>
            <View style={efly.firstview}>
                <View style={efly.secondview}>
                <View style={efly.lineviewmain}>
                        <View style={efly.pointone} />
                        <View style={efly.lineverticaltop} />
                        <View style={efly.iconview}>
                            <Icon type="Ionicons" name="sync" style={{ color: "#09D1DA" }} />
                        </View>
                        <View style={efly.lineverticalbottom} />
                        <View style={efly.pointtow} />
                    </View>
                    <View>
                        <TouchableOpacity style={efly.originview} onPress={() => navigation.navigate("OriginExternalfly")}>
                            <Image source={imgtakeoff} style={efly.airporticon} />
                            <Text style={efly.textorigin}>مبدا</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={efly.destionview} onPress={() => navigation.navigate("DestinationExternalfly")}>
                            <Image source={imglanding} style={efly.airporticon} />
                            <Text style={efly.textorigin}>مقصد</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
            <View style={efly.mainviewtow}>
                <View style={efly.selectorview}>
                   <TouchableOpacity style={[efly.btnselector,{backgroundColor:bgc2}]}
                   onPress={changebgc2}
                   >
                  <Text style={efly.textselector}>
                  دو طرفه
                  </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[efly.btnselector,{backgroundColor:bgc1}]}
                 onPress={changebgc1}
                  >
                  <Text style={efly.textselector}>
                  یک طرفه 
                  </Text>
                  </TouchableOpacity>
                </View>
                <View style={[efly.selectcalnder,{ height:himg,marginTop:dis}]}>
                    <View style={efly.dateinterview}>
                        <Image source={imgdate}
                            style={efly.imagedate}
                        />
                        <TouchableOpacity
                       
                        onPress={() => navigation.navigate("DatePickerExternalFly")}>
                            <Text style={efly.textdate}>تاریخ رفت</Text>
    <Text style={efly.textday}>{moment(godate).format("jYYYY/jM/jD")}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{width:Fl,height:Fl},efly.dateinterview]}>
                        <Image source={imgdate}
                            style={[efly.imagedate,{width:wicon}]}
                        />
                        <TouchableOpacity
                        style={efly.selectordate}
                        onPress={() => navigation.navigate("DatePickerReturnExtrnalFly")}>
                            <Text style={efly.textdate}>تاریخ برگشت</Text>
    <Text style={efly.textday}>{moment(returndate).format("jYYYY/jM/jD")}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={efly.selectpassenger}>
            <Button transparent  onPress={()=>navigation.navigate("NumberPassengerefly")}>
                    <Text style={efly.textbtncancel}>نوع و تعداد مسافر</Text>
                    </Button>
                    <Text style={efly.textnumber}>بزرگسال{numberAdult}</Text>{displaychild()}{displaybaby()}
                    </View>
            <Button
            onPress={()=>navigation.navigate("FlightslistExternal")}
            style={efly.btnbjoo}>
                <Text style={efly.textbjoo}>
                    بجو
                </Text>
            </Button>
        </Container>
    )
}
export default Efly;