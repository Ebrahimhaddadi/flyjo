import {View,Text,Header,Container,Content,Right,Left,Icon, Button} from 'native-base';
import React from "react";
import {StatusBar} from 'react-native'
import { generaltour } from '../../../assets/css';
import { WebView } from 'react-native-webview';
// import {  } from 'react-native';



const GeneralTour=({navigation})=>{
    return(
        <Container>
           <View style={generaltour.header}>
              <Button transparent style={[generaltour.btnselector,{backgroundColor:"#EB1D5C"}]} onPress={()=>navigation.navigate("FamilyWithoutchild")}>
                  <Text style={generaltour.btntext}>خانواده بدونه بچه</Text>
                  </Button>
              <Button transparent style={[generaltour.btnselector,{backgroundColor:"#00A7AE"}]} onPress={()=>navigation.navigate("FamilyVchild")}>
                  <Text style={generaltour.btntext}>خانواده بابچه</Text>
                  </Button>
           </View> 
           <WebView
        source={{
          uri: 'https://www.flyjoo.com/'
        }}
        style={{ marginTop: 20 }}
      />
        </Container>
    )
}
export default GeneralTour;