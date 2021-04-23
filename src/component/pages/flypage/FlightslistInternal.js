import React,{useState,useEffect} from 'react';
import { StatusBar, FlatList } from 'react-native';
import { Container, Header, Icon, View, Text, Button, Spinner } from 'native-base';
import Modal from 'react-native-modal';
import { flightlistinternal } from '../../../assets/css';

const FlightslistInternal = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isloading,setIsloading]=useState(true)
    console.log()
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
useEffect(()=>{
    setTimeout(()=>{
        setIsloading(false)
    },3000)
},[])
    const DATA = [{ airline: "کاسپین", dcity: "مشهد", scity: "تهران", timego: "22:00", timegoback: "23:00" },
    { airline: "ماهان", dcity: "کیش", scity: "شیراز", timego: "22:00", timegoback: "23:00" },
     { airline:"تابان", dcity: "اهواز", scity: "تبریز", timego: "22:00", timegoback: "23:00" },
    { airline: "آتا", dcity: "ساری", scity: "سبزوار", timego: "22:00", timegoback: "23:00" },
    { airline: "کاسپین", dcity: "مشهد", scity: "همدان", timego: "22:00", timegoback: "23:00" }];
    const renderItem = ({ item }) => {
        return (
            <View style={flightlistinternal.mainviewitem}>
                <View style={{flexDirection: "row"}}>
                <Text style={flightlistinternal.textitem}>{item.airline}</Text>
                <View>
                <Text style={flightlistinternal.textitem}>{item.timego}</Text>
                <Text style={flightlistinternal.textitem}>{item.scity}</Text>
                </View>
                <View style={flightlistinternal.viewarrow}>
                   <Text style={flightlistinternal.arrowicon}>&larr;</Text>
                    </View>
                <View>
                <Text style={flightlistinternal.textitem}>{item.timegoback}</Text>
                <Text style={flightlistinternal.textitem}>{item.dcity}</Text>
                </View>
                <View style={{marginLeft: 15}}>
                    <Text style={flightlistinternal.textfee}>350000تومان</Text>
                    <Button transparent
                    onPress={()=>navigation.navigate("PaymentFlightInternal",{itemId:item.id})}
                    style={flightlistinternal.btnselect}>
                    <Text style={flightlistinternal.textbtnselect}>انتخاب</Text>
                    </Button>
                    <Button transparent style={flightlistinternal.btncancel} onPress={toggleModal}>
                    <Text style={flightlistinternal.textbtncancel}>شرایط کنسلی</Text>
                    </Button>
                </View>
                </View>
                <View><Text style={flightlistinternal.textbottom}>کاسپین/سیستمی/Economy SL/ظرفیت:1نفر</Text></View>
            </View>
        )
    }
    const { navigation, navigate } = props;
    if(isloading){
        return(<Spinner/>)
    }else{
    return (
        <Container>
            <Header style={flightlistinternal.header}>
                <StatusBar backgroundColor="#03b2ce" />
                <View><Text style={flightlistinternal.textheader}> لیست پروازهای داخلی</Text></View>
                <Icon name="arrow-back"
                    style={flightlistinternal.iconheader}
                    onPress={() => navigation.goBack()} />
            </Header>
            <View style={flightlistinternal.mainview}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </View>
            <Modal isVisible={isModalVisible}>
          <View style={flightlistinternal.viewmodal}>
            <Text style={flightlistinternal.textfirstm}>شرایط کنسلی</Text>
             <Text style={flightlistinternal.textsecond}>غیر قابل استرداد</Text>
             <Text></Text>
             <Text></Text>
            <Button transparent onPress={toggleModal} >
                <Text style={flightlistinternal.textbtnm}>متوجه شدم</Text>
            </Button>
          </View>
        </Modal>
        </Container>
    )
    }
}
export default FlightslistInternal;