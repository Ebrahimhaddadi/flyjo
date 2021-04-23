import React from 'react';
import { Container, Header, View,Icon,Text } from 'native-base';
import { StatusBar } from 'react-native';
import {rules} from './../../assets/css'

export default Rules=({navigation})=> {
  return (
    <Container style={rules.container}>
    <Header style={rules.header}>
    <StatusBar backgroundColor="#00CCD4"/>
<View style={rules.textVicon}>
 {/* <Image source={require("./../../assets/img/pofileicon/man.png")} style={rules.manicon}/> */}
 <Icon type="Ionicons" name="hammer" style={rules.cashicon}/>
<Text style={rules.textheader}>قوانین و مقررات</Text>

</View>
<View>
<Icon name="arrow-back" style={rules.iconheader} onPress={()=>navigation.navigate("Home") }/>
</View>
</Header>
<View style={rules.card}>
<Text>مطالعه قوانین مقررات از وب سایت</Text>
</View>
<View style={rules.card}>
  <Icon type="Ionicons" name="document" style={rules.documenticon}/>
  <Text>دریافت فایل پی دی اف قوانین مقررات</Text>
</View>
</Container>
  );
}
