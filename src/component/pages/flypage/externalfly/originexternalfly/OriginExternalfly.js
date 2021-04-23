import React, { useState } from "react";
import { Container,View,Text, Icon, Right,Left,Header,Content,Item,Input,Form} from "native-base";
import { StatusBar,Image,FlatList} from "react-native";
import {originExternalfly} from '../../../../../assets/css'


const OriginExternalfly =({navigation})=>{
    const imglocation=require("./../../../../../assets/img/flyicons/drawable-hdpi/location.png");
    const imgtakeoff=require("./../../../../../assets/img/flyicons/drawable-hdpi/takeoff.png");
    const [favoriteCity,setFavoriteCity]=useState([{city:"تهران"},{city:"لندن"},{city:"پکن"},{city:"پاریس"},{city:"آمستردام"},{city:"وین"},{city:"اسلو"},{city:"رم"},{city:"استانبول"},{city:"انکارا"},]);
    const [text,setText]=useState("");
    const arrayholder=[{city:"تهران"},{city:"لندن"},{city:"پکن"},{city:"پاریس"},{city:"آمستردام"},{city:"وین"},{city:"اسلو"},{city:"رم"},{city:"استانبول"},{city:"انکارا"},];
 const renderItem=({item})=>{
    return(
        <View style={originExternalfly.mainviewitem}>
            <Image source={imglocation} style={originExternalfly.location} />
    <View style={originExternalfly.viewtextitem}>
        <Text style={originExternalfly.textItem}>{item.city}</Text>
    </View>
    
    </View>
    )
   }
   const onChange=(text)=>{
       const newData=arrayholder.filter((item)=>{
           const itemData=item.city ? item.city.toUpperCase() : ''.toUpperCase();
           const textData=text.toUpperCase();
           return itemData.indexOf(textData) !== -1
       })
       setText(text);
       setFavoriteCity(newData)
   }
   
    return(
        <Container>
            <Header style={originExternalfly.header}>
                <StatusBar backgroundColor="#00b894"/>
                <View style={originExternalfly.textVicon}>
                <Image source={imgtakeoff} style={originExternalfly.takeoffimage}/>  
                <Text style={originExternalfly.textheader}>
                   مبدا
                    </Text>
                </View>
                <View>
                <Icon name="arrow-back" onPress={()=>navigation.navigate("Efly")} style={originExternalfly.iconheader}/>
                    
                </View>
            </Header>
            <View style={originExternalfly.selectororiginExternalfly}>
            <Content>
          <Form style={originExternalfly.form}>
            <Item style={originExternalfly.item}>
            <Icon name="search" style={originExternalfly.searchicon}/>
              <Input
              placeholderTextColor={"#7F7F7F"}
              textAlign={"center"}
              fontFamily={"IRANSansMobile"}
              rundred
              fontSize={10}
              placeholder="کشور یا شهر یا فرودگاه را وارد کنید" style={originExternalfly.inputText}
              onChangeText={(text)=>onChange(text)}
              />
            </Item>
          </Form>
        </Content>
        <View>
                <Text style={originExternalfly.textsearchrecently}>جستجوی اخیر</Text>
                <View style={originExternalfly.viewrecently}>
                <Icon name="time" style={originExternalfly.iconrecently}/>
                <Text style={originExternalfly.textrecently}>دربی</Text>
              
                </View>
                <View style={originExternalfly.viewrecently}>
                <Icon name="time" style={originExternalfly.iconrecently}/>
                <Text style={originExternalfly.textrecently}>لندن</Text>
                
                </View>
                
             
            </View>
            </View>
            <Text style={originExternalfly.citytextf}>شهرهای محبوب</Text>
            <FlatList
            data={favoriteCity}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            />
            
        </Container>
    )
}
export default OriginExternalfly;