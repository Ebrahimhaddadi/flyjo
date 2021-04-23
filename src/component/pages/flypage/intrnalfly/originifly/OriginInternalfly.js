import React,{useState,useEffect} from "react";
import { Container,View,Text, Icon, Right,Left,Header,Content,Item,Input,Form} from "native-base";
import { StatusBar,Image,FlatList} from "react-native";
import {origin} from './../../../../../assets/css';
import {useSelector} from 'react-redux' 
import axios from 'axios'


const OriginInternalfly =({navigation})=>{
    
    const arrayholder=[{city:"تهران"},{city:"مشهد"},{city:"اهواز"},{city:"رشت"},{city:"چابهار"},{city:"تبریز"},{city:"کرمان"},{city:"سنندج"},{city:"آبادان"},{city:"ارومیه"},];
    const [favoriteCity,setFavoriteCity]=useState([{city:"تهران"},{city:"مشهد"},{city:"اهواز"},{city:"رشت"},{city:"چابهار"},{city:"تبریز"},{city:"کرمان"},{city:"سنندج"},{city:"آبادان"},{city:"ارومیه"},]);
    // const favoriteCity=DATA
    const [posts,setPosts]=useState([]);
    const[loading,setLoading]=useState(true)
    const [text,setText]=useState("")
    const DATA=useSelector(state=>state.cityReducer.posts);
    console.log(DATA,"originfly");
  
    useEffect(()=>{
       
        axios.get("https://jsonplaceholder.typicode.com/posts")
         .then(res=>{
             setPosts(res.data.slice(0,20))
             setLoading(false)
         })
         .catch(err=>console.log(err))
      },[]);
 const renderItem=({item,index})=>{
     console.log(item)
    return(
        <View style={origin.mainviewitem}>
            <Image source={imglocation} style={origin.location} />
    <View style={origin.viewtextitem}>
        <Text style={origin.textItem}>{item.city}</Text>
    </View>
    
    </View>
    )
   }
   const imgtakeoff=require("./../../../../../assets/img/flyicons/drawable-hdpi/takeoff.png");
   const imglocation=require("./../../../../../assets/img/flyicons/drawable-hdpi/location.png");
   const onChange=(text)=>{
       const newData=arrayholder.filter((item)=>{
           const itemData=item.city ? item.city.toUpperCase() : ''.toUpperCase();
           const textData=text.toUpperCase();
           return itemData.indexOf(textData) !== -1
       });
       setText(text);
       setFavoriteCity(newData);
   }
    return(
        <Container>
            <Header style={origin.header}>
                <StatusBar backgroundColor="#03b2ce"/>
                <View style={origin.textVicon}>
                <Image source={imgtakeoff} style={origin.takeoffimage}/>
                    <Text style={origin.textheader}>
                        مبدا
                    </Text>
                </View>
                <View>
                    <Icon name="arrow-back" onPress={()=>navigation.navigate("Ifly")} style={origin.iconheader}/>
                </View>
            </Header>
            <View style={origin.selectororigin}>
            <Content>
          <Form style={origin.form}>
            <Item style={origin.item}>
            <Icon name="search" style={origin.searchicon}/>
              <Input
              placeholderTextColor={"#7F7F7F"}
              textAlign={"center"}
              fontFamily={"IRANSansMobile"}
              rundred
              placeholder="جستجوی شهر" style={origin.inputText}
              onChangeText={(text)=>onChange(text)}
              />
            </Item>
          </Form>
        </Content>
        <View>
                <Text style={origin.textsearchrecently}>جستجوی اخیر</Text>
                <View style={origin.viewrecently}>
                <Text style={origin.textrecently}>اصفهان</Text>
                <Icon name="time" style={origin.iconrecently}/>
                </View>
                <View style={origin.viewrecently}>
                <Text style={origin.textrecently}>شیراز</Text>
                <Icon name="time" style={origin.iconrecently}/>
                </View>
                
             
            </View>
            </View>
            <Text style={origin.citytextf}>شهرهای محبوب</Text>
            <FlatList
            data={favoriteCity}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            />
            
        </Container>
    )
}
export default OriginInternalfly;