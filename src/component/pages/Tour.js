import {View,Text,Header,Container,Content,Right,Left,Icon, Button} from 'native-base';
import {StatusBar,ImageBackground} from 'react-native'
import React from "react";
import {tour} from './../../assets/css'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PersonalTour from './tourpage/Private';
import GeneralTour from './tourpage/GeneralTour';
import ChildVmother from './tourpage/Child';
const Tab = createMaterialTopTabNavigator();

const image = { uri: "https://reactjs.org/logo-og.png" };
const Tour =({navigation})=>{
  const TabBarTour=()=>{
    return(
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'wihtesmoke',
        labelStyle: { fontSize: 12,fontFamily:"IRANSansMobile", },
        style: { backgroundColor: '#FD01A1',borderTopColor:"#fff",marginTop:1 },
      }}
      >
        <Tab.Screen name="ChildVmother" component={ChildVmother}
        options={{ tabBarLabel: 'کودک و مادر'}}
        />
        <Tab.Screen name="GeneralTour" component={GeneralTour}
        options={{ tabBarLabel: 'تورهای عمومی' }}
        />
        <Tab.Screen name="PersonalTour" component={PersonalTour}
                options={{ tabBarLabel: 'تورهای خصوصی' }}
        
        />
      </Tab.Navigator>
    )
  }
    return(
    <Container>
      
      <Header style={tour.header}>
      <StatusBar backgroundColor="#e77364"/>
      <Left>
      <Text style={tour.textheader}>تور</Text>
      </Left>
      <Right> 
      <Button transparent onPress={()=>navigation.navigate("Home")}><Icon name="arrow-back"/></Button>
        </Right>
      </Header>
      <ImageBackground source={require("./../../assets/img/backgroundimage/bgm.jpg")} style={tour.image}>
     <Button style={tour.btn} transparent 
     onPress={()=>navigation.navigate("Child")}
     ><Text style={tour.btntext}>تور کودک</Text></Button>
     <Button style={tour.btn} transparent 
     onPress={()=>navigation.navigate("GeneralTour")}
     ><Text style={tour.btntext}>تور خانوادگی</Text></Button>
     <Button style={tour.btn} transparent 
     onPress={()=>navigation.navigate("Private")}
     ><Text style={tour.btntext}>تور خصوصی</Text></Button>
    </ImageBackground>
    </Container>
    )
}
export default Tour;