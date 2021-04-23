import {View,Text,Header,Container,Content,Right,Left,Icon, Button} from 'native-base';
import React from "react";
import {StatusBar,Image} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


import {hotel} from './../../assets/css'
import Ihotel from './hotelpage/Ihotel';
import Ehotel from './hotelpage/Ehotel';
const Hotel =({navigation})=>{
  const TabBarhotel=()=> {
    return (
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: 16,fontFamily:"IRANSansMobile" },
        style: { backgroundColor: '#FD9801' },}}
      >
        <Tab.Screen name="Ihotel" component={Ihotel}
         options={{ tabBarLabel: 'هتل های داخلی' }}
        color={"yellow"}
        />
        <Tab.Screen name="Ehotel" component={Ehotel}
         options={{ tabBarLabel: 'هتل های خارجی' }}
        />
      </Tab.Navigator>
    );
  }
    return(
    <Container>
    <Header style={hotel.header}>
      <StatusBar backgroundColor="#FD9801" />
      <View style={hotel.textVicon}>
        <Image source={require("../../assets/img/hotel/drawable-hdpi/bed.png")} style={{width:30,height:20,margin:5}}/>
        <Text style={hotel.textheader}>هتل</Text>
        </View>
      <View>
      <Button transparent onPress={()=>navigation.navigate("Home")}>
        <Icon name="arrow-back" style={hotel.iconback} />
        </Button>
        
        </View>
    </Header>
    <TabBarhotel/>
    </Container>
    )
}
export default Hotel;