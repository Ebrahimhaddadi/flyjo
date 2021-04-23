import {View,Text,Header,Container,Content,Right,Left,Icon, Button,Spinner} from 'native-base';
import React,{useState,useEffect} from "react";
import { ifly } from '../../../assets/css';
import {Image,TouchableOpacity,Animated,Easing} from 'react-native';
import {useDispatch,useSelector, connect} from 'react-redux';
import axios from 'axios'
import moment from "moment-jalaali";
import Modal from 'react-native-modal';
import fa from "moment/src/locale/fa";
import { fetchcity } from '../../../redux/action';
moment.locale("fa", fa);
moment.loadPersian({usePersianDigits: true});
moment().format();


//ifly==Internalhotel
const Ifly=(props)=>{
    const { navigation,navigate } = props;
    const [bgc1,setbgc1]=useState('#e77364')
    const [bgc2,setbgc2]=useState("#ffffff")
    const [colors,setColors]=useState([" #e77364","#fff"])
    const [Fl,setFl]=useState(0);
    const[dis,setDis]=useState(90);
    const [himg,setHimg]=useState(60);
    const [wicon,setWicon]=useState(0);
    const [height,setHeight]=useState(0)
    const [posts,setPosts]=useState([]);
    const[loading,setLoading]=useState(false)
    const [heighthidden,setHeighthidden]=useState(0)
    const [isModalVisible, setModalVisible] = useState(false);
   
 
 
    useEffect(()=>{
      displayrd();
      axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(res=>{
           setPosts(res.data.slice(0,20))
           setLoading(false)
       })
       .catch(err=>console.log(err))
    },[]);
console.log(posts)
 changebgc1=()=>{
      setbgc1("#e77364");
      setbgc2("#fff");
      setFl(80);
      setDis(90);
      setFl(0)
      
      }
  changebgc2=()=>{
     setbgc2("#e77364");
     setbgc1("#fff");
     setFl(130);
     setWicon(30);
     setDis(20);
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

    const dateselected=useSelector(state=>state.datepickerReducer.dateInternalflyorigin);
    const retundateifly=useSelector(state=>state.datepickerReducer.returndateifly);
    const id=useSelector(state=>state.cityReducer.id)
    const numberAdult=useSelector(state=>state.numpassengeriflyReducer.adult)
  const numberchild=useSelector(state=>state.numpassengeriflyReducer.child)
  const numberbaby=useSelector(state=>state.numpassengeriflyReducer.baby)
    const DI=dateselected;
    const RDI=retundateifly;
    console.log(RDI)
    const dispatch=useDispatch();
    const displaychild=()=>{
        if(numberchild>=1){
            return <Text  style={ifly.textnumber}>کودک{numberchild}</Text>
        }else{
        return null
        }
    };
    const displaybaby=()=>{
        if(numberbaby>=1){
            return <Text  style={ifly.textnumber}>نوزاد{numberbaby}</Text>
        }else{
        return null
        }
    }
    const btnorign=()=>{
        navigation.navigate("OriginInternalfly");
        dispatch(fetchcity(posts))
    }
    if(loading){
        return(<Spinner/>)
    }else{
    return(

        <Container>
          <View style={ifly.firstview}>
               <View style={ifly.secondview}>
               <View style={ifly.lineviewmain}>
              <View style={ifly.pointone}/>
              <View style={ifly.lineverticaltop}/>
              <View style={ifly.iconview}>
              <Icon type="Ionicons" name="sync" style={{color: "#09D1DA"}}/>
              </View>
              <View style={ifly.lineverticalbottom}/>
              <View style={ifly.pointtow}/>
            </View>
            <View>
                <TouchableOpacity style={ifly.originview} onPress={btnorign}>
                <Image source={require("./../../../assets/img/flyicons/drawable-hdpi/takeoff.png")} style={ifly.airporticon}/>
    <Text style={ifly.textorigin}>مبدا{id}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ifly.destionview} onPress={()=>navigation.navigate("DestinationInternalfly")} >
                <Image source={require("./../../../assets/img/flyicons/drawable-hdpi/landing.png")} style={ifly.airporticon}/>
                 <Text style={ifly.textorigin}>مقصد</Text>
                </TouchableOpacity>
            </View>
           
            </View>
            </View>
            <View style={ifly.mainviewtow}>
                <View style={ifly.selectorview}>
                  <TouchableOpacity style={[ifly.btnselector,{backgroundColor:bgc1}]}
                 onPress={changebgc1}
                  >
                  <Text style={ifly.textselector}>
                  یک طرفه 
                  </Text>
                  </TouchableOpacity>
                   <TouchableOpacity style={[ifly.btnselector,{backgroundColor:bgc2}]}
                   onPress={changebgc2}
                   >
                  <Text style={ifly.textselector}>
                  دو طرفه
                  </Text>
                  </TouchableOpacity>
            </View>
            <View style={[ifly.selectcalnder,{ height:Fl,marginTop:dis}]}>
               <View style={ifly.dateinterview}>
                   <Image source={require("./../../../assets/img/hotel/drawable-hdpi/date.png")}
                   style={ifly.imagedate}
                   />
                   <TouchableOpacity onPress={()=>navigation.navigate("DatepickerInternalFly") }>
                   <Text style={ifly.textdate}>تاریخ رفت</Text>
    <Text style={ifly.textday}>{ moment(DI).format('jYYYY/jM/jD')}</Text>
                   </TouchableOpacity>
               </View>
               <View style={[ifly.dateinterview,{width:Fl,height:heighthidden}]}>
                   <Image source={require("./../../../assets/img/hotel/drawable-hdpi/date.png")}
                   style={[ifly.imagedate,{width:wicon}]}
                   />
                   <TouchableOpacity onPress={()=>navigation.navigate("DatepickerRetunifly") }>
                   <Text style={ifly.textdate}>تاریخ برگشت</Text>
    <Text style={ifly.textdayback}>{ moment(RDI).format('jYYYY/jM/jD')}</Text>
                   </TouchableOpacity>
               </View>
           </View>
            </View>
            <View style={ifly.selectpassenger}>
            <Button transparent  onPress={()=>navigation.navigate("NumberPassengerifly")}>
                    <Text style={ifly.textbtncancel}>نوع و تعداد مسافر</Text>
                    </Button>
                    <Text style={ifly.textnumber}>بزرگسال{numberAdult}</Text>{displaychild()}{displaybaby()}
                    </View>
            <Button transparent
            onPress={()=>navigation.navigate("FlightslistInternal")}
            style={ifly.btnbjoo}>
                <Text style={ifly.textbjoo} >
                    بجو
                </Text>
            </Button>
        </Container>
    )}
}
export default Ifly;


