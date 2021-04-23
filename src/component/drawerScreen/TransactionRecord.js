import React from 'react';
import {Text,View, Container,Header,Icon} from 'native-base';
import {StatusBar} from 'react-native'
import {transactionrecord} from './../../assets/css/index'




const TrasactionRecord=({navigation})=>{
    return(
        <Container style={transactionrecord.container}>
            <Header style={transactionrecord.header}>
            <StatusBar backgroundColor="#00CCD4"/>
            <View style={transactionrecord.textVicon}>
<View style={transactionrecord.viewicon}>
 
 </View>
<Text style={transactionrecord.textheader}>سوابق ترکنش</Text>

</View>
<View>
<Icon name="arrow-back" style={transactionrecord.iconheader} onPress={()=>navigation.navigate("Home") }/>
</View>
            </Header>
        </Container>
    )
}
export default TrasactionRecord;