import React from "react";
import {View,Text} from 'native-base';
import {connect} from 'react-redux'


const Main=()=>{
  return(<View>
    <Text> Main</Text>
  </View>)
}
const mapStateToProps=(state)=>{
    return{
        id:state.id
    }
}
export default connect (mapStateToProps)(Main) ;
