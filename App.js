import {View,Text,Right,Left,Header} from 'native-base';
import React from 'react';
import Home from './pages/Home';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Fly from './pages/Fly';
import Hotel from './pages/Hotel';
import Tour from './pages/Tour';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Mydatepicker from './pages/datepicker/Mydatepicker';
import Datepickergre from './pages/datepicker/Datepickergre';
import DestinationInternalfly from './pages/flypage/intrnalfly/destinationifly/DestinationInternalfly';
import DestinationExternalfly from './pages/flypage/externalfly/destinationextrenalfly/DestinationExternalfly';
import OriginInternalfly from './pages/flypage/intrnalfly/originifly/OriginInternalfly';
import OriginExternalfly from './pages/flypage/externalfly/originexternalfly/OriginExternalfly'
EStyleSheet.build({
    $tc: '#fff',
    $bc:'#01CCD3',
    $IS:"IRANSansMobile"
  });
  
const Stack = createStackNavigator();

const App=()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator  initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Fly" component={Fly} />
          <Stack.Screen name="Hotel" component={Hotel}/>
          <Stack.Screen name="Tour" component={Tour}/>
          <Stack.Screen name="Signup" component={Signup}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Mydatepicker" component={Mydatepicker}/>
          <Stack.Screen name="Datepickergre" component={Datepickergre}/>
          <Stack.Screen name="DestinationInternalfly" component={DestinationInternalfly}/>
          <Stack.Screen name="DestinationExternalfly" component={DestinationExternalfly}/>
          <Stack.Screen name="OriginInternalfly" component={OriginInternalfly}/>
          <Stack.Screen name="OriginExternalfly" component={OriginExternalfly}/>
          </Stack.Navigator>
      </NavigationContainer>
      // <Signup/>
    )
}
export default App;


// import React,{useState, useEffect} from 'react';
// import {Text,View, Container,Header,Icon, Image} from 'native-base';
// import {StatusBar,StyleSheet,TextInput,FlatList, ActivityIndicator} from 'react-native'
// import {ticketrefund} from './../../assets/css/index'
// import { onChange } from 'react-native-reanimated';





// const TicketRefund=({navigation})=>{
//     const [isloading,setIsloading]=useState(true);
//     const [text,setText]=useState("");
//     const [data, setData] = useState([]);
//     const arrayholder=[];
//     console.log(arrayholder,"djfajfijfijfdiajfIJFIQJFIEJEFIQEJF")
//     // useEffect(()=>{
        
//     //     fetch('https://jsonplaceholder.typicode.com/posts')
//     //     .then((response) => response.json())
//     //     .then((json) => setData(json.typicode))
//     //     .catch((error) => console.error(error))
//     //     .finally(() => setIsloading(false));
//     //     console.log(data)
//     // }, []);
//     useEffect(() => {
//          const fetchData= async ()=> {
//           const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//           res.json()
//             .then(res => setData(res))
//             .catch(err => setErrors(err));
//             setIsloading(false)
// ()=>arrayholder=res;
//             // console.log(res)
//         }
    
//         fetchData();
        
//       });
//       console.log(data,"is a data")
// //     return(
        
// //         <Container style={ticketrefund.container}>
// //             <Header style={ticketrefund.header}>
// //             <StatusBar backgroundColor="#00CCD4"/>
// //             <View style={ticketrefund.textVicon}>
// // <View style={ticketrefund.viewicon}>
 
// //  </View>
// // <Text style={ticketrefund.textheader}>استرداد وجه </Text>

// // </View>
// // <View>
// // <Icon name="arrow-back" style={ticketrefund.iconheader} onPress={()=>navigation.navigate("Home") }/>
// // </View>
// //             </Header>
// //             <View style={styles.viewStyle}>
               
// //               <TextInput
// //              style={styles.textInputStyle}
// //               underlineColorAndroid="transparent"
// //               placeholder="Search Here"
// //               />
// //                <FlatList
// //           data={data}
          
// //           renderItem={({ item }) => (
// //             <Text style={styles.textStyle}></Text>
// //           )}
// //           enableEmptySections={true}
// //           style={{ marginTop: 10 }}
// //           keyExtractor={(item, index) => index.toString()}
// //         />
     
// //             </View>
          
// //         </Container>
// //     )


//   const onChange=(text)=> {
//     //passing the inserted text in textinput
//     const newData = arrayholder.filter((item)=> {
//       //applying filter for the inserted text in search bar
//       const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });
//     setData(newData);
//     setText(text)
    
//   }

//  const ListViewItemSeparator =()=> {
//     //Item sparator view
//     return (
//       <View
//         style={{
//           height: 0.3,
//           width: '90%',
//           backgroundColor: '#080808',
//         }}
//       />
//     );
//   };
// const _renderItem = ({ item }) => {
//     return(
//     <View style={{flex:1}}>
//   <Text style={styles.textStyle}>{item.title}</Text>
//   {/* <Image source={{uri: item.url}} style={{width:150,height:150}}/> */}
//   </View>)
// }
// if (isloading) {
//     //Loading View while data is loading
//     return (
//       <View style={{ flex: 1, paddingTop: 20 }}>
//         <ActivityIndicator />
//       </View>
//     );
//   }
// return (
//     <View style={{ flex: 1, padding: 24 }}>
//         <TextInput
//              style={styles.textInputStyle}
//               underlineColorAndroid="transparent"
//               placeholder="Search Here"
//               onChangeText={(text)=>onChange(text)}
//               value={text}
//               />
//         <FlatList
//           data={data}
//           ItemSeparatorComponent={ListViewItemSeparator}
//           renderItem={_renderItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
     
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//     viewStyle: {
//       justifyContent: 'center',
//       flex: 1,
//       marginTop: 40,
//       padding: 16,
//     },
//     textStyle: {
//       padding: 10,
//     },
//     textInputStyle: {
//       height: 40,
//       borderWidth: 1,
//       paddingLeft: 10,
//       borderColor: '#009688',
//       backgroundColor: '#FFFFFF',
//     },
//   })
// export default TicketRefund;