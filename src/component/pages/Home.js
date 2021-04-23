import React from 'react';
import { StatusBar} from 'react-native'
import { View, Text, Right, Left, Header, Icon, Container, Content, Button } from 'native-base';
import { Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { home } from '../../assets/css';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';

const Home = ({ navigation }) => {
   
    const btnfly=()=>{
        navigation.navigate("Fly");
    }
    return (
        
    <Container style={home.container}>
            <Header style={[home.header,backgroundColor="#03b2ce"]}>
                <StatusBar backgroundColor="#03b2ce"/>
                <Left>
                <Button transparent onPress={()=>navigation.openDrawer()}>
                    <Icon type="Ionicons" name="md-menu" style={home.menuicon}  />
                    </Button>
                </Left>
                <Right>
                <Image source={require('./../../assets/img/logo/logo.jpeg')} style={home.logo} />
                    
                </Right>
            
            </Header>
            <ScrollView>
            <View style={home.viewbtn}>
                <View style={home.viewbtntext}>
                    <Button style={home.btn1} onPress={btnfly}>
                        <Image source={require('../../assets/img/mobile/drawable-hdpi/airplane.png')} style={home.imgairplane} />
                    </Button>
                    <Text style={home.textbtn}>پرواز</Text>
                </View>
                <View style={home.viewbtntext}>
                    <Button style={home.btn1} onPress={() => navigation.navigate("Tour")}>
                        <Image source={require('../../assets/img/city/drawable-hdpi/tour.png')} style={home.imgtour} />
                    </Button>
                    <Text style={home.textbtn}>تور</Text>
                </View>
                <View style={home.viewbtntext}>
                    <Button style={home.btn1} onPress={() => navigation.navigate("Hotel")}>
                        <Image source={require('../../assets/img/city/drawable-hdpi/bed.png')} style={home.imghotel} />

                    </Button>
                    <Text style={home.textbtn}>هتل</Text>
                </View>
            </View>
            
                <View style={home.mainviewlinear}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#8E2BD6', '#B247FA', '#192f6a']} style={home.linearGradientR}>
                        <TouchableOpacity onPress={()=>navigation.navigate("Signup")} style={{backgroundColor: "transparent"}}>
                        <Text style={home.buttonText}>
                            سفرهای اقساطی
                </Text>
              </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#DB2162', '#AE0000', '#192f6a']} style={home.linearGradientL}>
                        <Text style={home.buttonText}>
                            سفر اعتباری
                </Text>
                    </LinearGradient>
                </View>
                <TouchableOpacity style={home.travelyourb}>
                    <Text style={home.travelyourbtext}>برنامه ریزی با بودجه من</Text>
                    <Image source={require("../../assets/img/tripmoney.png")} style={home.travelyourbimg} />
                </TouchableOpacity>
                <View style={home.programnext}>
                    <Text style={home.programnexttext}>برنامه سفر بعدی رو بریز</Text>

                </View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 17 }}
                />
                <TouchableOpacity style={home.flycharterbtn}>
                <View style={{ width: "50%", marginRight: 20 }}>
                        <Text style={home.textcharter1}>پروازهای چارتر</Text>
                        <Text style={home.textcharter2}>باهر هزینه ای</Text>
                    </View>
                    <View style={home.mainimgcharter}>
                        <Image source={require('./../../assets/img/city/drawable-hdpi/charter.png')}
                            style={home.imgairplanecgarter} />
                        <View style={{ justifyContent: "center", alignItems: "stretch" }}>
                            <View style={home.linecharterup} />
                            <View style={home.linecharterdown} />
                        </View>
                    </View>
                   
                </TouchableOpacity>
                <Text style={home.offertext}>هتل های با تخفیف</Text>
                <FlatList
                    data={DATAHOTEL}
                    renderItem={renderItemhotel}
                />
            </ScrollView>
        </Container>
    )
}
const renderItem = ({ item }) => {
    return (
        <View style={home.item}>
            <Image source={item.img} style={home.imageitem} />
            <Text style={home.title}>{item.city}</Text>
            <Text style={home.detailstext}>{item.details}</Text>
        </View>
    );
}
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        img: require("../../assets/img/city/drawable-hdpi/shiraz.png"),
        city: 'شیراز',
        details: 'هتل حافظ'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        img: require("../../assets/img/city/drawable-hdpi/rasht.png"),
        city: 'رشت',
        details: "فقط 2شب و 3روز"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        img: require("../../assets/img/city/drawable-hdpi/sfahan.png"),
        city: 'اصفهان',
        details: "فقط 2شب 3 روز"
    },
];
const renderItemhotel = ({ item }) => {
    return (
        <View>
            <Image source={item.img} style={home.imagehotel} />
            <View style={home. mainTextflatlist2}>
            <View style={{marginBottom:10,marginRight:10}}> 
                <Text>{item.hotelname}</Text>
                <View style={{
                    width: 180, height: 30,
                    alignSelf: 'flex-end',
                }}>
                    <StarRating
                        disabled={true}
                        fullStarColor={'#FFDD00'}
                        maxStars={5}
                        rating={4.5}
                    // selectedStar={(rating) => this.onStarRatingPress(rating)
                    />
                </View>
            </View>
            <Text style={home.detailsfl2}>{item.details}</Text>
</View>
        </View>
    )
}
const DATAHOTEL = [
    {
        id: 1,
        img: require("./../../assets/img/city/drawable-hdpi/hotelmasal.png"),
        rate: [],
        hotelname: "هتل ماسال",
        details: "از شبی 520.000تومان"
    },
    {
        id: 1,
        img: require("./../../assets/img/city/drawable-hdpi/hotelpasargad.png"),
        rate: [],
        hotelname: "هتل پاسارگارد",
        details: "از شبی 520.000تومان"
    },
    {
        id: 1,
        img: require("./../../assets/img/city/drawable-hdpi/hotelasman.png"),
        rate: [],
        hotelname: "هتل آسمان",
        details: "از شبی 520.000تومان"
    },
]
export default Home;