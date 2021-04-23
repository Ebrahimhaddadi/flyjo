import React from 'react';
import { Container, Right, Left, Icon, Header, View,Text } from 'native-base';
import { familyVchild } from '../../../assets/css';


const FamilyVchild=({navigation})=> {
  return (
    <Container>
    <Header style={familyVchild.header}>
        <Left>
            <Icon name="arrow-back" style={familyVchild.iconheader} onPress={()=>navigation.navigate("GeneralTour") }/>
        </Left>
        <Right>
            <Text style={familyVchild.textheader}>خانواده با بچه</Text>
        </Right>
    </Header>
</Container>
  );
}
export default FamilyVchild;