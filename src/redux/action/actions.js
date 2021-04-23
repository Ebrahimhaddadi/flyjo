import { SET_USER,SELECT_DATE, SELECT_DATEINTER,SELECT_DATEEXIST } from "./type"


export const setUser=(user)=>({
    type:SET_USER,
    user:user
});

   export const myDate=(date)=>{
     return{
     type:SELECT_DATEINTER,
     date:date,
    }
 }


 export  const dateExist=(date)=>{
    return{
    type:SELECT_DATEEXIST,
    date:date,
   }
}