import React, {useState}from 'react';
import { StatusBar,CheckBox } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button,Text, Left, Right,Icon,View } from 'native-base';
import { Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {signup} from '../../assets/css';

// import CheckBox from '@react-native-community/checkbox';




const Signup =({navigation})=>{
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return(
        <Container>
       
        <Header style={signup.header}>
        <StatusBar backgroundColor="#00b894" />
        <View>
        <Text style={signup.textheader}>ثبت نام</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Icon type="Ionicons" name="arrow-back" style={signup.iconback} />
          </TouchableOpacity>
        </View>
        </Header>
        <Content>
        <Image source={require('../../assets/img/mobile/drawable-hdpi/logo.png')} style={signup.logo}/>
          <Text style={signup.wellcom}>به فلایجو خوش آمدید</Text>
          <Form style={signup.form}>
          <View style={signup.itemform} >
          <Icon type="MaterialIcons" name="mail-outline"  style={signup.iconmail}/>
              <Input placeholder="پست الکترونیکی" style={signup.inputemail} placeholderTextColor="#AFAFAF" />
            </View>
            <View style={signup.itemform}>
              <Image source={require("../../assets/img/signup/drawable-hdpi/smartphone.png")} style={signup.iconphone}/>
              <Input placeholder="تلفن همراه" style={signup.phone} placeholderTextColor="#AFAFAF" />
            </View>
            <View style={signup.itemform}>
            <Icon type="Ionicons"  name="md-lock"  name="ios-lock" style={signup.iconmail}/>
              <Input placeholder="رمز عبور" style={signup.inputpass} placeholderTextColor="#AFAFAF"/>
            </View>
            <View style={{flexDirection: "row-reverse",alignItems: "center"}}>
            <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
  />
            <Text style={signup.rols}>قوانین و مقررات وب سایت را مطالعه کردم و قبول میکنم</Text>
            </View>
            <Button style={signup.btnend}>
                <Text style={signup.textbtnend}>ثبت نام</Text>
            </Button>
          </Form>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={{justifyContent: "center",marginTop: 5,
        alignItems: 'center',}}>
            <Text style={{fontFamily:"IRANSansMobile",fontSize:17}}>ورود</Text>
          </TouchableOpacity>
          <Image source={require("../../assets/img/signup/drawable-hdpi/imagedown.png")}
          style={signup.imagedown}
          />
        </Content>
      </Container>
    )
}
export default Signup;