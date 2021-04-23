import React,{useState, useEffect} from 'react';
import {Text,View, Container,Header,Icon, Image} from 'native-base';
import {StatusBar,StyleSheet,TextInput,FlatList, ActivityIndicator} from 'react-native'
import {ticketrefund} from './../../assets/css/index'
import { onChange } from 'react-native-reanimated';





const TicketRefund=({navigation})=>{
  
   
    return(
        
        <Container style={ticketrefund.container}>
            <Header style={ticketrefund.header}>
            <StatusBar backgroundColor="#00CCD4"/>
            <View style={ticketrefund.textVicon}>
<View style={ticketrefund.viewicon}>
 
 </View>
<Text style={ticketrefund.textheader}>استرداد وجه </Text>

</View>
<View>
<Icon name="arrow-back" style={ticketrefund.iconheader} onPress={()=>navigation.navigate("Home") }/>
</View>
            </Header>
        </Container>
    )
    }


 
export default TicketRefund;