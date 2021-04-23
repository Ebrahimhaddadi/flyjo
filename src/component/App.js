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