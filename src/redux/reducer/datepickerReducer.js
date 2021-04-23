import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
moment.locale("fa", fa);
moment.loadPersian({usePersianDigits: true});
moment().format();

const initialState={
    dateInter:moment().format('jYYYY/jM/jD'),
    dateExist:moment().format('jYYYY/jM/jD')
}

import {SELECT_DATEINTER,
    SELECT_DATEEXIST, 
    SELECT_DATEINTERNALFLY
    ,RETURNDATEINTERNALFLY,
    RETURNDATEETARNALFLY,
    GODATEEXTERNALFLY

} from './../action/type';

const datepickerReducer=(state=initialState,action)=>{
    console.log(state.dateInternalflyorigin)
    switch (action.type) {
        case SELECT_DATEINTER:
            
            return{
                ...state,
                dateInter:action.date,
            }
              break;
              case SELECT_DATEEXIST:
                  return{
                      ...state,
                    dateExist:action.date,
                  }
                  break;
                  case SELECT_DATEINTERNALFLY:
                      return{
                          ...state,
                          dateInternalflyorigin:action.date,
                      }
                      break
                      case RETURNDATEINTERNALFLY:
                      return{
                          ...state,
                          returndateifly:action.date
                      };
                      break;
                      case RETURNDATEETARNALFLY:
                          return{
                              ...state,
                              returndateefly:action.date
                          };
                          break;
                          case GODATEEXTERNALFLY:
                              return{
                                  ...state,
                                  godateefly:action.date,
                              };
                              break


        default:
            return state;
    }
   
}
export default datepickerReducer;