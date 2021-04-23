import React from 'react';
import { Container, View,Text } from 'native-base';
const PaymentFlightInternal =({ route, navigation })=>{
   
    const itemId=route.params
    console.log(itemId)
    return (
        <Container>
            <View>
                <Text>صفحه پرداخت پرواز داخلی</Text>
            </View>
        </Container>
    )
}
export default PaymentFlightInternal