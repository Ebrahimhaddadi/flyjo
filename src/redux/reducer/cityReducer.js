import   { CHANGE_COLOR,FETCHCITY} from './../action/type'
const initialState={
    id:null,
    title:null,
    arr:[],
    posts:[],
    color:"red"
}


const cityReducer=(state=initialState,action)=>{
    console.log(action,"ps state")
    switch (action.type) {
        case FETCHCITY:
            return{
                ...state, posts:action.payload}
        default:
            return state
    }
}
export default cityReducer;