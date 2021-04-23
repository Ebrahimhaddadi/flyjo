import React from 'react';
import { Container, Header, Left, Right, Icon, Text, View, Content, Button, Row, } from 'native-base';
import { Image, StatusBar,TouchableOpacity } from 'react-native'
import { profile } from '../../assets/css';

const Profile = ({navigation}) => {
    return (
        <Container>
            <Header style={profile.header}>
                <StatusBar backgroundColor="#A4D4EC" />
                <View style={{flexDirection: "row-reverse",justifyContent:"center",alignItems:'center'}}>
                    <Text style={profile.textheader}>پروفایل کاربری</Text>
                    <Icon name="person" style={profile.iconuser}/>
                </View>
                <View>
                    <View style={profile.mainviewlefth} >
                    <Icon name="arrow-back" style={profile.iconheader} onPress={()=>navigation.navigate("Home")} />
                        <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")}>
                        <Image source={require("./../../assets/img/pofileicon/drawable-hdpi/pencil.png")} style={profile.pencil}/>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </Header>
            <View style={profile.firstview}>
                <Image source={require("./../../assets/img/pofileicon/drawable-hdpi/passenger.png")} style={profile.passenger} />
                <Image source={require("./../../assets/img/pofileicon/drawable-hdpi/group.png")} style={profile.firstimage} />
            </View>

            <View style={profile.viewinfo}>
                <View style={profile.prsonalview}>
                    <Image source={require("./../../assets/img/pofileicon/profile.png")}
                    style={profile.imageprofile}
                    />
                </View>
                <View style={profile.viewcenter}>
                   <Text style={profile.familytext}>مهدی گلپایگانی</Text>
                   <Text style={profile.familytext}>امتیاز10000</Text>
                   <Button transparent style={profile.btnincriment}>
                       <Text>+</Text>
                       <Text>افزایش اعتبار</Text>
                   </Button>
                   <Text>فلایجو تجربه تازه بجو</Text>
                </View>
                <View style={profile.infoprofile}>

                </View>
            </View>
        </Container>
    )
}
export default Profile;