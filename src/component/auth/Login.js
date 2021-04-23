import React from 'react';
import { StatusBar, View } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button,Text,Left,Right,Icon } from 'native-base';
import { Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { login } from '../../assets/css';



const Login =({navigation})=>{
    return(
        <Container>
       <Header style={login.header}>
        <StatusBar backgroundColor="#00b894" />
        <View>
        <Text style={login.textheader}>صفحه ورود</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
          <Icon type="Ionicons" name="arrow-back" style={login.iconback}/>
          </TouchableOpacity>
        </View>
        
        </Header>
        <Content>
          <Image source={require('../../assets/img/mobile/drawable-hdpi/logo.png')} style={login.logo}/>
          <Text style={login.wellcom}>به فلایجو خوش آمدید</Text>
          <Form style={login.form}>
            <View style={login.itemform} >
            {/* <Image source={require("../../assets/img/signup/drawable-hdpi/email.png")} style={login.imageiconemail}/> */}
            <Icon type="MaterialIcons" name="mail-outline"  style={login.iconmail}/>
              <Input placeholder="پست الکترونیکی" style={login.inputemail} placeholderTextColor="#AFAFAF" underlineColorAndroid={"transparent"}/>
            </View>
            <View  style={login.itemform}>
            {/* <Image source={require("../../assets/img/signup/drawable-hdpi/password.png")} style={login.imageiconpass}/> */}
            <Icon type="Ionicons"  name="md-lock"  name="ios-lock" style={login.iconmail}/>
              <Input placeholder="رمز عبور" placeholderTextColor="#AFAFAF" style={login.inputpass}/>
              {/* <Image source={require("../../assets/img/signup/drawable-hdpi/eye.png")} style={login.imageiconeye}/> */}
              <Icon type="Ionicons"  name="ios-eye-outline"  name="md-eye" style={login.iconeye}/>
            </View>
            <TouchableOpacity>
              <Text style={login.forgetpass}>فراموشی رمز عبور</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Signup")} style={{marginTop:2}}>
            <Text  style={login.btnlogin}>اگر حساب کاربری نداید ثبت نام کنید</Text>
            </TouchableOpacity>
            <TouchableOpacity style={login.btnend}>
                <Text style={login.textbtnend}>ورود</Text>
            </TouchableOpacity>
          </Form>
          <Image source={require("../../assets/img/signup/drawable-hdpi/imagedown.png")}
          style={login.imagedown}
          />
        </Content>
      </Container>
    )
}
export default Login;