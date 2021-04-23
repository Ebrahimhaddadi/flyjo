import React from 'react';
import {TouchableOpacity, StatusBar,TextInput,ScrollView,KeyboardAvoidingView,Keyboard} from 'react-native';
import { Container, Header,View,Text, Left, Icon, Right, Button } from 'native-base';
import { incrimentcredit } from '../../assets/css';



const IncremantCredit =({navigation})=>{
    const gohome=()=>{
        navigation.navigate("Home")
        Keyboard.dismiss()
    }
    return(
       <Container style={{ backgroundColor: "#F6F9FF",}}>
           <Header style={incrimentcredit.header}>
               <StatusBar backgroundColor="#00CCD4"/>
               <View style={incrimentcredit.textVicon}>
               <Icon name="person" style={incrimentcredit.textheader} />
                   <Text style={incrimentcredit.textheader}>
                       افزایش اعتبار
                   </Text>
               </View>
               <View>
                   <TouchableOpacity onPress={gohome}>
                       <Icon name="arrow-back" style={incrimentcredit.iconheader}/>
                   </TouchableOpacity>
               </View>
               
           </Header>
           <ScrollView>
           <View style={incrimentcredit.container}>
           <View style={incrimentcredit.firstview}>
           <Text style={incrimentcredit.inventorycash}>تومان2500000</Text>
               <Text style={incrimentcredit.inventory}>موجودی فعلی</Text>
           </View>
           <View style={incrimentcredit.amounts}>
               <TouchableOpacity style={incrimentcredit.amount}>
                   <Text style={incrimentcredit.offredprice}>2000000</Text>
                   <Text>تومان</Text>
               </TouchableOpacity>
               <TouchableOpacity style={incrimentcredit.amount}>
               <Text style={incrimentcredit.offredprice}>2500000</Text>
               <Text>تومان</Text>
               </TouchableOpacity>
               <TouchableOpacity style={incrimentcredit.amount}>
               <Text style={incrimentcredit.offredprice}>15000000</Text>
               <Text>تومان</Text>
               </TouchableOpacity>
           </View>
           <KeyboardAvoidingView behavior="position">
           <View style={incrimentcredit.viewnegotiable}>
             <Text>
                 مبلغ مورد نظر را وارد کنید
             </Text>
         
  <View >
  <TextInput
             placeholder="مبلغ مورد نظر را وارد کنید"
             placeholderTextColor="#00CCD4"
             keyboardType="numeric"
            />
  </View>

            
           </View>
           </KeyboardAvoidingView>
           </View>
           </ScrollView>
           <Button transparent style={incrimentcredit.btnpay}>
               <Text style={incrimentcredit.textbtn}>
                   پرداخت با درگاه بانکی
               </Text>
           </Button>
       </Container>
    )
}
export default IncremantCredit;