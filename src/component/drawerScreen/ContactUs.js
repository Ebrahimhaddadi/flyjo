import React from 'react';
import {Image,StatusBar} from 'react-native';
import { Container, Header, Right, Left, Icon,Text, View } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {contactus} from './../../assets/css'

export default ContactUs=({navigation})=> {
  return (
    <Container>
        <Header style={contactus.header}>
        <StatusBar backgroundColor="#95a5a6" />    
            <View style={contactus.textVicon}>
              <Image source={require("./../../assets/img/pofileicon/man.png")} style={contactus.manicon}/>
            <Text style={contactus.textheader}>تماس باما</Text>
            </View>
            <View>
            <Icon name="arrow-back" style={contactus.iconheader} onPress={()=>navigation.navigate("Home") }/>
            </View>
        </Header>
        <View style={contactus.container}>
        <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={contactus.map}
       initialRegion={{
        latitude: 35.770350,
        longitude: 51.365847,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
     >
     </MapView>
     <View style={contactus.mainInfo}>

</View>
        </View>

    </Container>
  );
}
