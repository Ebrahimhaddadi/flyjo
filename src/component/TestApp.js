import {I18nManager} from 'react-native';
import React,{useEffect} from 'react';
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
import OriginExternalfly from './pages/flypage/externalfly/originexternalfly/OriginExternalfly';
import Profile from './drawerScreen/Profile'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FamilyVchild from './pages/tourpage/FamilyVchild';
import FamilyWithoutchild from './pages/tourpage/FamilyWithoutchild';
import MyBuy from './drawerScreen/MyBuy';
import TrasactionRecord from './drawerScreen/TransactionRecord';
import IncremantCredit from './drawerScreen/IncremantCredit';
import TicketRefund from './drawerScreen/TicketRefund';
import Rules from './drawerScreen/Rules';
import AirportInformation from './drawerScreen/AirportInformation';
import ContactUs from './drawerScreen/ContactUs';
import EditProfile from './drawerScreen/EditProfile';
import DatePickerExist from './pages/datepicker/DatePickerExist';
import DatepickerInternalFly from './pages/datepicker/DatepickerInternalFly';
import DatepickerRetunifly from './pages/datepicker/DatepickerRetunifly';
import DatePickerReturnExtrnalFly from './pages/datepicker/DatePickerReturnExtrnalFly';
import DatePickerExternalFly from './pages/datepicker/DatePickerExternalFly';
import FlightslistExternal from './pages/flypage/FlightslistExternal';
import FlightslistInternal from './pages/flypage/FlightslistInternal';
import PaymentFlightInternal from './pages/flypage/paymentflightinternal/PaymentFlightInternal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GeneralTour from './pages/tourpage/GeneralTour';
import Private from './pages/tourpage/Private';
import Child from './pages/tourpage/Child';
import NumberPassengerifly from './pages/flypage/numberofpassengers/NumberPassengerifly';
import NumberPassengerefly from './pages/flypage/numberofpassengers/NumberPassengerefly';
EStyleSheet.build({
    $v:"Vazir-Bold-FD-WOL",
    $tc: '#fff',
    $bc:'#03b2ce',
    $IS:"Vazir-Bold-FD-WOL",
  });
  // کد رنگ سازمانی فلای جو
  // نارنجی: #e77364
  // #03b2ce blue 
  // gray #666f78
const TestApp=()=>{
  I18nManager.forceRTL(true);
  // const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
  //   ar: () => require("./../translations/ar.json"),
  //   en: () => require("./../translations/en.json"),
  // };
  
  // const translate = memoize(
  //   (key, config) => i18n.t(key, config),
  //   (key, config) => (config ? key + JSON.stringify(config) : key)
  // );
  
  // const setI18nConfig = () => {
  //   // fallback if no available language fits
  //   const fallback = { languageTag: "en", isRTL: true };
  
  //   const { languageTag, isRTL } =
  //     RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
  //     fallback;
  
  //   // clear translation cache
  //   translate.cache.clear();
  //   // update layout direction
  //   I18nManager.forceRTL(isRTL);
  //   // set i18n-js config
  //   i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  //   i18n.locale = languageTag;
  // };
  // setI18nConfig(); // set initial config
  // I18nManager.forceRTL(true);
  // handleLocalizationChange = () => {
  //   setI18nConfig();
  //   forceUpdate();
  // };
  // useEffect(()=>{
  //   // RNLocalize.removeEventListener("change",handleLocalizationChange);
  // })
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

  const  MyTabs=()=> {
    return (
      <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} /> 
        <Tab.Screen name="Fly" component={Fly} />  
        <Tab.Screen name="Hotel" component={Hotel} />
        <Tab.Screen name="Tour" component={Tour}/>
      </Tab.Navigator>
    );
  }
 const Root=()=>{
  return(
    <Stack.Navigator
    navigationOptions={{
      header:false
     } }
     screenOptions={{
      headerShown: false
    }}
    >
       <Stack.Screen name="Home" component={Home}
       navigationOptions={{
        header:{visable:false}
       } }
       />
          <Stack.Screen name="Fly" component={Fly} />
          <Stack.Screen name="Hotel" component={Hotel}/>
          <Stack.Screen name="Tour" component={Tour}/>
          <Stack.Screen name="Signup" component={Signup}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Mydatepicker" component={Mydatepicker}/>
          <Stack.Screen name="DatepickerInternalFly" component={DatepickerInternalFly}/>
          <Stack.Screen name="DatepickerRetunifly" component={DatepickerRetunifly}/>
          <Stack.Screen name="DatePickerExist" component={DatePickerExist}/>
          <Stack.Screen name="DatePickerReturnExtrnalFly" component={DatePickerReturnExtrnalFly}/>
          <Stack.Screen name="DatePickerExternalFly" component={DatePickerExternalFly}/>
          <Stack.Screen name="Datepickergre" component={Datepickergre}/>
          <Stack.Screen name="DestinationInternalfly" component={DestinationInternalfly}/>
          <Stack.Screen name="DestinationExternalfly" component={DestinationExternalfly}/>
          <Stack.Screen name="OriginInternalfly" component={OriginInternalfly}/>
          <Stack.Screen name="OriginExternalfly" component={OriginExternalfly}/>
          <Stack.Screen name="FlightslistExternal" component={FlightslistExternal}/>
          <Stack.Screen name="FlightslistInternal" component={FlightslistInternal}/>
          <Stack.Screen name="PaymentFlightInternal" component={PaymentFlightInternal}/>
          <Stack.Screen name="FamilyVchild" component={FamilyVchild} />
        <Stack.Screen name="FamilyWithoutchild" component={FamilyWithoutchild}/>
        <Stack.Screen name="EditProfile" component={EditProfile}/>
        <Stack.Screen name="GeneralTour" component={GeneralTour}/>
        <Stack.Screen name="Private" component={Private}/>
        <Stack.Screen name="Child" component={Child}/>
        <Stack.Screen name="NumberPassengerifly" component={NumberPassengerifly}/>
        <Stack.Screen name="NumberPassengerefly" component={NumberPassengerefly}/>
          </Stack.Navigator>

  )
 }
    return(
      
        <NavigationContainer
        navigationOptions={{
          header:false
         } }
         
        >
        <Drawer.Navigator
        navigationOptions={{
          header:false
         } }
         drawerStyle={{
          backgroundColor: '#fff',
          width: 210,
          justifyContent:'center'
        }}
        drawerContentOptions={{
          activeTintColor: '#48dbfb',
          itemStyle: { alignItems:'flex-start' },
        }}
         drawerPosition="right"
        >
        <Drawer.Screen name="Home" component={Root}
        options={{title:"خانه",header:null}}
      
        />
        <Drawer.Screen name="Profile" component={Profile}
         options={{title:"پروفایل"}}
        />
        <Drawer.Screen name="MyBuy" component={MyBuy}
         options={{title:"خریدهای من"}}
        />
       <Drawer.Screen name="IncremantCredit" component={IncremantCredit}
       options={{title:"افزایش اعتبار"}}
       />
       <Drawer.Screen name="TransactionRecord" component={TrasactionRecord}
          options={{title:"سوابق تراکنش"}}
       />
       <Drawer.Screen name="TicketRefund" component={TicketRefund}
       options={{title:"استرداد بلیت"}}/>
       <Drawer.Screen name="Rules" component={Rules}
       options={{title:"قوانین و مقررات"}}/>
       <Drawer.Screen name="AirportInformation" component={AirportInformation}
       options={{title:"اطلاعات فرودگاه ها"}}/>
       <Drawer.Screen name="ContactUs" component={ContactUs}
       options={{title:"تماس باما"}}/>
        
      </Drawer.Navigator>
    
      </NavigationContainer>
     
    
    )
}
export default TestApp;