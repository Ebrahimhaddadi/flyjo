import React,{useEffect} from 'react';
import { StatusBar,TouchableOpacity } from 'react-native';
import { View,Text,Icon,Button, Container, Header, H1 } from 'native-base';
import {useDispatch,useSelector} from 'react-redux'
import {numpassifly} from './../../../../assets/css/index'
import { incrimentadult, decrimentadult, decrimentchild, decrimentbaby, incrimentchild, incrimentbaby } from '../../../../redux/action';

const NumberPassengerifly= ({navigation})=> {
  const dispatch=useDispatch()
  const numberAdult=useSelector(state=>state.numpassengeriflyReducer.adult)
  const numberchild=useSelector(state=>state.numpassengeriflyReducer.child)
  const numberbaby=useSelector(state=>state.numpassengeriflyReducer.baby)
  const sum=useSelector(state=>state.numpassengeriflyReducer.sum)

 
  useEffect(() => {
  }, [])
  const incrimentAdult=()=>{
    
    if(numberAdult<=8 &&numberbaby+numberchild+numberAdult<=8){
      return dispatch(incrimentadult());
    }else{
      return false
    }
  }
  const incrimentChild=()=>{
    if(numberchild<=7&&numberbaby+numberchild+numberAdult<=8){
      return  dispatch(incrimentchild())
    }else{
      return false
    }
   
  }
  const incrimentBaby=()=>{
    if(numberbaby<=7&&numberbaby+numberchild+numberAdult<=8){
      return dispatch(incrimentbaby())
    }else{
      return false
    }
    
  }
  const decrimentAdult=()=>{
    if(numberAdult>=2){
      dispatch(decrimentadult())
    }else{
      return false
    }
   
  }
  const decrimentChild=()=>{
    if(numberchild>=1){
      return dispatch(decrimentchild())
    }else{
      return false
    }
    
  }
  const decrimentBaby=()=>{
    if(numberbaby>=1){
      return dispatch(decrimentbaby())
    }
    
  }
  return (
    <Container>
         <Header style={numpassifly.header}><Text style={numpassifly.textfirstm}>نوع و تعداد مسافران</Text>
         <StatusBar backgroundColor="#03b2ce" />
         <Icon type="Ionicons" name="arrow-back" onPress={()=>navigation.goBack()}
         style={numpassifly.iconheader}
         />
         </Header>
          <View style={numpassifly.viewmodal}>
            <View>
            <View style={numpassifly.viewselectcount}>
            <View style={{flexDirection: "row",marginLeft: 15}}>
            <Text style={numpassifly.textsecond}>بزرگسال</Text>
            <Text style={numpassifly.textAveAge}></Text>
            </View>
            <View style={{flexDirection: "row",marginRight: 15,padding: 6,}}>
              <TouchableOpacity style={numpassifly.textplus}
              onPress={incrimentAdult}
              >
            <Icon type="Ionicons" name="add"
            style={{color: "#03b2ce",fontSize: 22}}
            />
            </TouchableOpacity>
  <Text type="number" style={numpassifly.textnumber}>{numberAdult}</Text>
            <TouchableOpacity style={numpassifly.mainezbtn}
            onPress={decrimentAdult}
            ><Icon type="Ionicons" name="remove"
            style={{color: "#fff",fontSize: 22}}
            /></TouchableOpacity>
            </View>
            </View>
            <View style={numpassifly.viewselectcount}>
              <View style={{flexDirection: "row",marginLeft: 15}}>
            <Text style={numpassifly.textsecond}>کودک</Text>
            <Text style={numpassifly.textAveAge}>2تا12سال</Text>
            </View>
            <View style={{flexDirection: "row",marginRight: 15,padding: 6}}>
            <TouchableOpacity style={numpassifly.textplus}
            onPress={incrimentChild}
            >
           <Icon type="Ionicons" name="add"
           style={{color: "#03b2ce",fontSize: 22}}
           />
           </TouchableOpacity>
  <Text style={numpassifly.textnumber}>{numberchild}</Text>
            <TouchableOpacity style={numpassifly.mainezbtn}
            onPress={decrimentChild}
            ><Icon type="Ionicons"  name="remove"
            style={{color: "#fff",fontSize: 22}}
            /></TouchableOpacity>
           </View>
            </View>
            <View style={numpassifly.viewselectcount}>
            <View style={{flexDirection: "row",marginLeft: 15}}>
            <Text style={numpassifly.textsecond}>نوزاد</Text>
            <Text style={numpassifly.textAveAge}>تا 2سال</Text>
            </View>
            <View style={{flexDirection: "row",marginRight: 15,padding: 6}}>
            <TouchableOpacity style={numpassifly.textplus}
            onPress={incrimentBaby}
            >
            <Icon type="Ionicons" name="add"
            style={{color: "#03b2ce",fontSize: 22}}
            />
            </TouchableOpacity>
  <Text style={numpassifly.textnumber}>{numberbaby}</Text>
            <TouchableOpacity style={numpassifly.mainezbtn}
            onPress={decrimentBaby}
            ><Icon type="Ionicons" name="remove"
            style={{color: "#fff",fontSize: 22}}
            /></TouchableOpacity>
            </View>
            </View>
           </View>
           
          </View>
  <H1>{sum}</H1>
          <Button transparent style={{alignSelf: "center",marginBottom:20}} 
          onPress={()=>navigation.goBack()}
          >
                <Text style={numpassifly.textbtnm}>تایید</Text>
            </Button>
     </Container>
  );
}
export default NumberPassengerifly;
