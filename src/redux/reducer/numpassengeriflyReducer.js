import { INCRIMENT_NPBABY, INCRIMENT_NPADULT, INCRIMENT_NPCHILD, DECRIMENT_NPADULT, DECRIMENT_NPCHILD, DECRIMENT_NPBABY } from "../action/type";

const initialState={
    adult:1,
    child:0,
    baby:0,
    sum:1,
}
const numpassengeriflyReducer=(state=initialState,action)=>{
    console.log(action)
    switch (action.type) {
        case INCRIMENT_NPADULT:
            return{
                ...state,
                adult:state.adult+1,
                sum:state.adult+state.child+state.baby+1
            }
        case INCRIMENT_NPCHILD:
            return{
                ...state,
                child:state.child+1,
                sum:state.adult+state.child+state.baby+1
            }
            case INCRIMENT_NPBABY:
                return{
                    ...state,
                    baby:state.baby+1,
                    sum:state.adult+state.child+state.baby+1
                }
                case DECRIMENT_NPADULT:
                    return{
                        ...state,
                        adult:state.adult-1,
                        sum:state.adult-state.child-state.baby
                    };
                    case DECRIMENT_NPCHILD:
                        return{
                            ...state,
                        child:state.child-1,
                        sum:state.adult-state.child-state.baby
                        };
                        case DECRIMENT_NPBABY:
                            return{
                                ...state,
                                baby:state.baby-1,
                                sum:state.adult-state.child-state.baby
                            }
        default:
            return state
    }
}
export default numpassengeriflyReducer;