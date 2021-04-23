import React,{useState,useEffect} from 'react';
import { StatusBar, FlatList } from 'react-native';
import { Container, Header, Icon, View, Text, Button, Spinner } from 'native-base';
import Modal from 'react-native-modal';
import { flightlistexrenal } from '../../../assets/css';

const FlightslistExternal = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isloading,setLoading]=useState(true)
    console.log()
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(()=>{
setTimeout(()=>{
setLoading(false)
},3000)
  },[])

    const DATA = [{ airline: "امارات", dcity: "استانبول", scity: "تهران", timego: "22:00", timegoback: "23:00" },
    { airline: "skyfly", dcity: "londan", scity: "tehran", timego: "22:00", timegoback: "23:00" },
     { airline:"تابان", dcity: "اهواز", scity: "تبریز", timego: "22:00", timegoback: "23:00" },
    { airline: "آتا", dcity: "ساری", scity: "سبزوار", timego: "22:00", timegoback: "23:00" },
    { airline: "کاسپین", dcity: "مشهد", scity: "همدان", timego: "22:00", timegoback: "23:00" }];
    const renderItem = ({ item }) => {
        return (
            <View style={flightlistexrenal.mainviewitem}>
                <View style={{flexDirection: "row"}}>
                <Text style={flightlistexrenal.textitem}>{item.airline}</Text>
                <View>
                <Text style={flightlistexrenal.textitem}>{item.timego}</Text>
                <Text style={flightlistexrenal.textitem}>{item.scity}</Text>
                </View>
                <View style={flightlistexrenal.viewarrow}>
                   <Text style={flightlistexrenal.arrowicon}>&larr;</Text>
                    </View>
                <View>
                <Text style={flightlistexrenal.textitem}>{item.timegoback}</Text>
                <Text style={flightlistexrenal.textitem}>{item.dcity}</Text>
                </View>
                <View style={{marginLeft: 15}}>
                    <Text style={flightlistexrenal.textfee}>350000تومان</Text>
                    <Button transparent
                    onPress={()=>navigation.navigate("PaymentFlightInternal",{itemId:item.id})}
                    style={flightlistexrenal.btnselect}>
                    <Text style={flightlistexrenal.textbtnselect}>انتخاب</Text>
                    </Button>
                    <Button transparent style={flightlistexrenal.btncancel} onPress={toggleModal}>
                    <Text style={flightlistexrenal.textbtncancel}>شرایط کنسلی</Text>
                    </Button>
                </View>
                </View>
                <View><Text style={flightlistexrenal.textbottom}>کاسپین/سیستمی/Economy SL/ظرفیت:1نفر</Text></View>
            </View>
        )
    }
    const { navigation, navigate } = props;
    if(isloading){
        return(<Spinner size={"large"} />)
    }else{
    return (
        <Container>
            <Header style={flightlistexrenal.header}>
                <StatusBar backgroundColor="#03b2ce" />
                <View><Text style={flightlistexrenal.textheader}> لیست پروازهای خارجی</Text></View>
                <Icon name="arrow-back"
                    style={flightlistexrenal.iconheader}
                    onPress={() => navigation.goBack()} />
            </Header>
            <View style={flightlistexrenal.mainview}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </View>
            <Modal isVisible={isModalVisible}>
          <View style={flightlistexrenal.viewmodal}>
            <Text style={flightlistexrenal.textfirstm}>شرایط کنسلی</Text>
             <Text style={flightlistexrenal.textsecond}>غیر قابل استرداد</Text>
             <Text></Text>
             <Text></Text>
            <Button transparent onPress={toggleModal} >
                <Text style={flightlistexrenal.textbtnm}>متوجه شدم</Text>
            </Button>
          </View>
        </Modal>
        </Container>
    )}
}
export default FlightslistExternal;