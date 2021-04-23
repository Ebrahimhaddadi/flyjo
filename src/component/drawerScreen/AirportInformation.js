import React,{useState,useEffect} from 'react';
import { Container, Header, View,Icon,Text, Form, Item, Input } from 'native-base';
import { StatusBar,FlatList,Image,TouchableOpacity,TextInput } from 'react-native';
import {airportinformation} from './../../assets/css'


 const AirportInformation=({navigation})=> {
  const [text,setText]=useState("");
   const [mycity,setmycity]=useState([{city:"Tehran"},
   {city:"Shiraz"},{city:"اصفهان"},
   {city:"مشهد"},{city:"اهواز"},{city:"کیش"},
   {city:"قشم"},{city:"کرمان"},{city:"تبریز"},{city:"تهران"},
   {city:"تهران"},{city:"تهران"},{city:"تهران"},{city:"ساری"},
   {city:"ارومیه"},{city:"زنجان"}]);
   const arrayholder=[{city:"Tehran"},
   {city:"Shiraz"},{city:"اصفهان"},
   {city:"مشهد"},{city:"اهواز"},{city:"کیش"},
   {city:"قشم"},{city:"کرمان"},{city:"تبریز"},{city:"تهران"},
   {city:"تهران"},{city:"تهران"},{city:"تهران"},{city:"ساری"},
   {city:"ارومیه"},{city:"زنجان"}]
   
   useEffect(()=>{
     
 
   })
  
   
   const renderItem=({item})=>{
     const location=require("./../../assets/img/flyicons/drawable-hdpi/location.png")
     return(
     <TouchableOpacity style={airportinformation.mainviewitem}>
    <Image source={location} style={airportinformation.iconlocation}/>
   <Text style={airportinformation.textitem}>{item.city}</Text>
     </TouchableOpacity>
     )
   }
  
   const searchcity=(text)=>{
     const newData=arrayholder.filter((item)=>{
        const itemData = item.city ? item.city.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData)  !==-1;
       }
     );
     setmycity(newData);
     setText(text)
     console.log(mycity)
   }

 
  return (
    <Container style={airportinformation.container}>
    <Header style={airportinformation.header}>
    <StatusBar backgroundColor="#00CCD4"/>
<View style={airportinformation.textVicon}>
<View style={airportinformation.viewicon}>
 <Icon type="Ionicons" name="airplane" style={airportinformation.airplaneicon}/>
 </View>
<Text style={airportinformation.textheader}>اطلاعات فرودگاه ها</Text>

</View>
<View>
<Icon name="arrow-back" style={airportinformation.iconheader} onPress={()=>navigation.navigate("Home") }/>
</View>
</Header>
<Form style={airportinformation.form}>
  <Item  style={airportinformation.item}>
    <Input placeholder="برای جستجوی نام شهر را وارد کنید"
    onChangeText={(text)=>searchcity(text) }
    value={text}
    style={airportinformation.inputtext}/>
  </Item>
</Form>
{/* <TextInput
             style={airportinformation.form}
              underlineColorAndroid="transparent"
              placeholder="Search Here"
              onChangeText={(text)=>searchcity(text)}
              value={text}
              /> */}

<Text style={airportinformation.textairport}>نام شهر-فرودگاه</Text>
<FlatList
  data={mycity}
renderItem={renderItem}
enableEmptySections={true}
keyExtractor={(item, index) => index.toString()}
showsVerticalScrollIndicator={false}
ListEmptyComponent={()=><Text>هیچ شهری پیدا نشد</Text>}
/>

</Container>
  );
}
export default AirportInformation;
