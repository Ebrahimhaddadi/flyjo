import React, { useState } from "react";
import { Container,View,Text, Icon, Right,Left,Header,Content,Item,Input,Form} from "native-base";
import { StatusBar,Image,FlatList} from "react-native";
import {destinationExternalfly} from '../../../../../assets/css'
import { onChange } from "react-native-reanimated";



const DestinationExternalflyEternalfly =({navigation})=>{
    const [favoriteCity,setFavoriteCity]=useState([{city:"تهران"},{city:"لندن"},{city:"پکن"},{city:"پاریس"},{city:"آمستردام"},{city:"وین"},{city:"اسلو"},{city:"رم"},{city:"استانبول"},{city:"انکارا"},]);
    const [text,setText]=useState("");
    const arrayholder=[{city:"تهران"},{city:"لندن"},{city:"پکن"},{city:"پاریس"},{city:"آمستردام"},{city:"وین"},{city:"اسلو"},{city:"رم"},{city:"استانبول"},{city:"انکارا"},]
 const renderItem=({item})=>{
    return(
        <View style={destinationExternalfly.mainviewitem}>
              <Image source={require("./../../../../../assets/img/flyicons/drawable-hdpi/location.png")} style={destinationExternalfly.location} />
    <View style={destinationExternalfly.viewtextitem}>
        <Text style={destinationExternalfly.textItem}>{item.city}</Text>
    </View>
  
    </View>
    )
   }
   const onChange=(text)=>{
     const newData=arrayholder.filter((item)=>{
       const itemData=item.city ? item.city.toUpperCase() : '' .toUpperCase();
       const textData=text.toUpperCase();
       return itemData.indexOf(textData) !== -1
     });
     setText(text);
     setFavoriteCity(newData)

   }
    return(
        <Container>
            <Header style={destinationExternalfly.header}>
                <StatusBar backgroundColor="#00b894"/>
                <View style={destinationExternalfly.textVicon}>
                <Image source={require("./../../../../../assets/img/flyicons/drawable-hdpi/landing.png")} style={destinationExternalfly.takeoffimage}/>
                <Text style={destinationExternalfly.textheader}>
                      مقصد
                    </Text>
                    
                </View>
                <View>
                <Icon name="arrow-back" onPress={()=>navigation.navigate("Ifly")} style={destinationExternalfly.iconheader}/>
                </View>
            </Header>
            <View style={destinationExternalfly.selectordestinationExternalfly}>
            <Content>
          <Form style={destinationExternalfly.form}>
            <Item style={destinationExternalfly.item}>
            <Icon name="search" style={destinationExternalfly.searchicon}/>
              <Input
              placeholderTextColor={"#7F7F7F"}
              textAlign={"center"}
              fontFamily={"IRANSansMobile"}
              rundred
              placeholder="کشور یا شهر یا فرودگاه را وارد کنید" style={destinationExternalfly.inputText}
              onChangeText={(text)=>onChange(text)}
              />
              
            </Item>
          </Form>
        </Content>
        <View>
                <Text style={destinationExternalfly.textsearchrecently}>جستجوی اخیر</Text>
                <View style={destinationExternalfly.viewrecently}>
                <Icon name="time" style={destinationExternalfly.iconrecently}/>
                <Text style={destinationExternalfly.textrecently}>رم</Text>
                </View>
                <View style={destinationExternalfly.viewrecently}>
                <Icon name="time" style={destinationExternalfly.iconrecently}/>
                <Text style={destinationExternalfly.textrecently}>بلگراد</Text>
                
                </View>
                
             
            </View>
            </View>
            <Text style={destinationExternalfly.citytextf}>شهرهای محبوب</Text>
            <FlatList
            data={favoriteCity}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            />
            
        </Container>
    )
}
export default DestinationExternalflyEternalfly;