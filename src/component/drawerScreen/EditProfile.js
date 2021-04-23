import React,{useState} from "react";
import { View,Text, Container, Header, Left, Icon, Right, Button,Picker } from "native-base";
import {StatusBar} from 'react-native'
import { editprofile } from "../../assets/css";
import { TextInput,ScrollView } from "react-native";



const EditProfile=({navigation})=>{
    const [select,setSelect]=useState("key1")
    const   onValueChange=(value)=>{
        setSelect(value)
    }
    return(
        <Container>
            <ScrollView style={{backgroundColor: "#F6F9FF"}}>
            <Header style={editprofile.header}>
            <StatusBar backgroundColor="#A4D4EC" />
            <View style={editprofile.viewtextprofile}>
                   <Text style={editprofile.textheader} > ویرایش پروفایل</Text>
                   <Icon name="person" style={editprofile.iconuser} />
                </View>
                <View>
                    <Icon name="arrow-back" style={editprofile.iconheader} onPress={()=>navigation.navigate("Profile")}/>
                </View>
            </Header>
            <View style={editprofile.mainview}>
              <View style={editprofile.centerview}>
                <Text style={editprofile.titleinfo}>اطلاعات فردی</Text>
                <Text style={editprofile.textname}>نام</Text>
                <TextInput placeholder="محمد"  style={editprofile.inputname} />
                <Text style={editprofile.textfamily}>نام خانوادگی</Text>
                <TextInput placeholder="احمدی" style={editprofile.inputname}/>
                <Text style={editprofile.textfamily}>شماره موبایل</Text>
                <TextInput placeholder="09127777777" style={editprofile.inputname}/>
                <Text style={editprofile.textfamily}> کد ملی</Text>
                <TextInput placeholder="12345678911" style={editprofile.inputname}/>
                <View style={{flexDirection: "row-reverse",justifyContent:"space-around"}}>
                    
                    <View>
                        <Text>تاریخ تولد</Text>
                        <TextInput placeholder="1366/05/18"/>
                    </View>
                    <View>
                    <Text>جنسیت</Text>
                    <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={select}
              onValueChange={onValueChange}
            >
              <Picker.Item label="مرد" value="key0" />
              <Picker.Item label="زن" value="key1" />
             
            </Picker>
                    </View>
                </View>
              </View>
             
            </View>
            </ScrollView>
            <Button transparent style={editprofile.btnrecord}>
                <Text style={editprofile.textrecord}>ثبت</Text>
              </Button>
              
        </Container>
    )
}
export default EditProfile;