import React from 'react';
import {Image} from 'react-native';
import { Container, Right, Left, Icon, Header, View,Text } from 'native-base';
import { familyWithoutchild } from '../../../assets/css';


const FamilyWithoutchild=({navigation})=> {
  return (
   <Container>
       <Header style={familyWithoutchild.header}>
           <Left>
               <Icon name="arrow-back" style={familyWithoutchild.iconheader} onPress={()=>navigation.navigate("GeneralTour") }/>
           </Left>
           <Right>
               <Text style={familyWithoutchild.textheader}>خانواده بدونه بچه</Text>
           </Right>
       </Header>
   </Container>
  );
}
export default FamilyWithoutchild;