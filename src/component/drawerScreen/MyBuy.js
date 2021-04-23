import React from 'react';
import {View,Text, Container,Header,Icon} from 'native-base';
import {Image,StatusBar} from 'react-native'
import {mybuy} from './../../assets/css';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Nationalfly from '../shoppingrecord/Nationalfly';
import Internationalfly from '../shoppingrecord/Internationalfly';
import Nationalhotel from '../shoppingrecord/Nationalhotel';
import Internationalhotel from '../shoppingrecord/Internationalhotel';

const Tab = createMaterialTopTabNavigator();
const  MyTabs=()=> {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#fff',
      labelStyle: { fontSize: 16,fontFamily:"IRANSansMobile", },
      style: { backgroundColor: '#00CCD4',height:50,
     },
    }}
    >
      <Tab.Screen name="Nationalfly" component={Nationalfly}
      options={{
        tabBarLabel:"پروازهای داخلی",
        style:{fontSize:18,fontFamily:"IRANSansMobile"}
      }}
      />
      <Tab.Screen name="Internationalfly" component={Internationalfly}
        options={{
          tabBarLabel:"پروازهای خارجی",
          style:{fontSize:18,fontFamily:"IRANSansMobile"}
        }}
      />
      <Tab.Screen name="Nationalhotel" component={Nationalhotel}
        options={{
          tabBarLabel:"هتل های داخلی",
          style:{fontSize:18,fontFamily:"IRANSansMobile"}
        }}
      />
      <Tab.Screen name="Internatiolhotel" component={Internationalhotel}
        options={{
          tabBarLabel:"هتل های خارجی",
          style:{fontSize:18,fontFamily:"IRANSansMobile"}
        }}
      />
    </Tab.Navigator>
  );
}


const MyBuy =()=>{
    return(
        <Container style={mybuy.container}>
               <Header style={mybuy.header}>
               <StatusBar backgroundColor="#00CCD4"/>
          <View style={mybuy.textVicon}>
            {/* <Image source={require("./../../assets/img/pofileicon/man.png")} style={mybuy.manicon}/> */}
            <Icon type="Ionicons" name="card" style={mybuy.cashicon}/>
          <Text style={mybuy.textheader}>خریدهای من</Text>
          
          </View>
          <View>
          <Icon name="arrow-back" style={mybuy.iconheader} onPress={()=>navigation.navigate("Home") }/>
          </View>
      </Header>
      <MyTabs/>
        </Container>
    )
}
export default MyBuy;