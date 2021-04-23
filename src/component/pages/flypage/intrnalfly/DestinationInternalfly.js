import React from "react";
import { Container,View,Text, Icon, Right,Left,Header,Content,Item,Input,Form} from "native-base";
import { StatusBar,Image,FlatList} from "react-native";
import {destination} from '../../../../../assets/csscsscsscss'


const DestinationInternalfly =({navigation})=>{
    const favoriteCity=[{city:"تهران"},{city:"مشهد"},{city:"اهواز"},{city:"رشت"},{city:"چابهار"},{city:"تبریز"},{city:"کرمان"},{city:"سنندج"},{city:"آبادان"},{city:"ارومیه"},]
 const renderItem=({item})=>{
    return(
        <View style={destination.mainviewitem}>
    <View style={destination.viewtextitem}>
        <Text style={destination.textItem}>{item.city}</Text>
    </View>
    <Image source={require("./../../../../assets/img/flyicons/drawable-hdpi/location.png")} style={destination.location} />
    </View>
    )
   }
   
    return(
        <Container>
            <Header style={destination.header}>
                <StatusBar backgroundColor="#00b894"/>
                <Left>
                    <Icon name="arrow-back" onPress={()=>navigation.navigate("Ifly")} style={destination.iconheader}/>
                </Left>
                <Right>
                    <Text style={destination.textheader}>
                      مقصد
                    </Text>
                    <Image source={require("./../../../../assets/img/flyicons/drawable-hdpi/landing.png")} style={destination.takeoffimage}/>
                </Right>
            </Header>
            <View style={destination.selectordestination}>
            <Content>
          <Form style={destination.form}>
            <Item style={destination.item}>
              <Input
              placeholderTextColor={"#7F7F7F"}
              textAlign={"center"}
              fontFamily={"IRANSansMobile"}
              rundred
              placeholder="جستجوی شهر" style={destination.inputText}/>
               <Icon name="search" style={destination.searchicon}/>
            </Item>
          </Form>
        </Content>
        <View>
                <Text style={destination.textsearchrecently}>جستجوی اخیر</Text>
                <View style={destination.viewrecently}>
                <Text style={destination.textrecently}>اصفهان</Text>
                <Icon name="time" style={destination.iconrecently}/>
                </View>
                <View style={destination.viewrecently}>
                <Text style={destination.textrecently}>شیراز</Text>
                <Icon name="time" style={destination.iconrecently}/>
                </View>
                
             
            </View>
            </View>
            <Text style={destination.citytextf}>شهرهای محبوب</Text>
            <FlatList
            data={favoriteCity}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            />
            
        </Container>
    )
}
export default DestinationInternalfly;