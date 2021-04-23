import React,{useState} from "react";
import { Container,View,Text, Icon, Right,Left,Header,Content,Item,Input,Form} from "native-base";
import { StatusBar,Image,FlatList} from "react-native";
import {destination} from '../../../../../assets/css/index'



const DestinationInternalfly =({navigation})=>{
    const imglanding=require("./../../../../../assets/img/flyicons/drawable-hdpi/landing.png");
    const imglocation=require("./../../../../../assets/img/flyicons/drawable-hdpi/location.png");
    const [favoriteCity,setFavoriteCity]=useState([{city:"تهران"},{city:"مشهد"},{city:"اهواز"},{city:"رشت"},{city:"چابهار"},{city:"تبریز"},{city:"کرمان"},{city:"سنندج"},{city:"آبادان"},{city:"ارومیه"},]);
    const [text,setText]=useState("")
    const arrayholder=[{city:"تهران"},{city:"مشهد"},{city:"اهواز"},{city:"رشت"},{city:"چابهار"},{city:"تبریز"},{city:"کرمان"},{city:"سنندج"},{city:"آبادان"},{city:"ارومیه"},]
    const renderItem=({item})=>{
    return(
        <View style={destination.mainviewitem}>
            <Image source={imglocation} style={destination.location} />
    <View style={destination.viewtextitem}>
        <Text style={destination.textItem}>{item.city}</Text>
    </View>
    
    </View>
    )
   }
   const onChange=(text)=>{
       const newData=arrayholder.filter((item)=>{
           const itemData=item.city ? item.city.toUpperCase() : "".toUpperCase();
           const textData=text.toUpperCase();
           return itemData.indexOf(textData) !== -1
       })
       setText(text);
       setFavoriteCity(newData)
   }
   
    return(
        <Container>
            <Header style={destination.header}>
                <StatusBar backgroundColor="#03b2ce"/>
                <View style={destination.textVicon}>
                <Image source={imglanding} style={destination.takeoffimage}/>
                    <Text style={destination.textheader}>
                      مقصد
                    </Text>
                </View>
                <View>
                    <Icon name="arrow-back" onPress={()=>navigation.navigate("Ifly")} style={destination.iconheader}/>
                </View>
               
            </Header>
            <View style={destination.selectordestination}>
            <Content>
          <Form style={destination.form}>
            <Item style={destination.item}>
            <Icon name="search" style={destination.searchicon}/>
              <Input
              placeholderTextColor={"#7F7F7F"}
              textAlign={"center"}
              fontFamily={"IRANSansMobile"}
              rundred
              placeholder="جستجوی شهر" style={destination.inputText}
              onChangeText={(text)=>onChange(text)}
              />
              
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