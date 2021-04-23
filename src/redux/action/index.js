import {
   SET_USER, SELECT_DATE,
   SELECT_DATEINTER, SELECT_DATEEXIST,
   SELECT_DATEINTERNALFLY, RETURNDATEINTERNALFLY,
   RETURNDATEETARNALFLY, GODATEEXTERNALFLY,
   FETCHCITY, CHANGE_COLOR, INCRIMENT_NPADULT,
   INCRIMENT_NPCHILD, INCRIMENT_NPBABY, DECRIMENT_NPADULT, DECRIMENT_NPCHILD, DECRIMENT_NPBABY
} from "./type"
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
import axios from 'axios';

moment.locale("fa", fa);
moment.loadPersian();

export const setUser = (user) => ({
   type: SET_USER,
   user: user
});

export const myDate = (date) => {

   return {
      type: SELECT_DATEINTER,
      date: date
   }
}


export const dateExist = (date) => {

   return {
      type: SELECT_DATEEXIST,
      date: date,
   }
}
export const dateInternalfly = (date) => {
   return {
      type: SELECT_DATEINTERNALFLY,
      date: date
   }
}
export const retundateifly = (date) => {
   return {
      type: RETURNDATEINTERNALFLY,
      date: date
   }
}
export const returndateefly = (date) => {
   return {
      type: RETURNDATEETARNALFLY,
      date: date,
   }
};
export const godateefly = (date) => {
   return {
      type: GODATEEXTERNALFLY,
      date: date,
   }
};
export const loadColor = () => {
   return (dispatch) => {
      axios.get("http://www.colr.org/json/color/ffba13")
         .then(response => dispatch(changeColor(response.data.new_color)))
   }
}
const URL = "https://jsonplaceholder.typicode.com/posts"
export const fetchcity =async () => {
   const req = await axios.get(`${URL}`)
      .then(response => response.data)

   return {
      type: FETCHCITY,
      payload: req
   }
}
export const changeColor = (color) => {
   console.log(color, "mycolor")
   return {
      type: CHANGE_COLOR,
      color: color,
   }
};
export const incrimentadult = () => {
   return {
      type: INCRIMENT_NPADULT
   }
};
export const incrimentchild = () => {
   return {
      type: INCRIMENT_NPCHILD
   }
};
export const incrimentbaby = () => {
   return {
      type: INCRIMENT_NPBABY
   }
};
export const decrimentadult = () => {
   return {
      type: DECRIMENT_NPADULT
   }
};
export const decrimentchild = () => {
   return {
      type: DECRIMENT_NPCHILD
   }
};
export const decrimentbaby = () => {
   return {
      type: DECRIMENT_NPBABY
   }
};
