import {View,Text,Header,Container,Content,Right,Left, Icon, Button} from 'native-base';
import React from "react";
import {StatusBar} from 'react-native'
import { fly } from '../../assets/css';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Efly from './flypage/Efly';
import Ifly from './flypage/Ifly';

const Tab = createMaterialTopTabNavigator();
const Fly =({navigation})=>{
  const TabBarfly=()=>{
    return(
      <Tab.Navigator      
       tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: 16,fontFamily:"IRANSansMobile", },
        style: { backgroundColor: '#03b2ce',height:45 },
      }}>
        <Tab.Screen name="Ifly" component={Ifly}
         options={{ tabBarLabel: 'پروازهای داخلی',
         style:{color:"#fff"}
        }}
        />
        <Tab.Screen name="Efly" component={Efly}
         options={{ tabBarLabel: 'پروازهای خارجی' ,
         style: { backgroundColor:"green" }
        }}
         
        />
      </Tab.Navigator>
    )
  }
    return(
    <Container>
    <Header style={fly.header}>
    <StatusBar backgroundColor="#03b2ce" />
      <Left>
      <Text style={fly.textheader}>پرواز</Text>
        </Left>
      <Right>
      <Button transparent onPress={()=>navigation.navigate("Home")}><Icon name="arrow-back" style={fly.iconback}/></Button>
      </Right>
    </Header>
    <TabBarfly/>
    </Container>
    )
}
export default Fly;