import { createStore,applyMiddleware,compose } from "redux";
import rootReducer from "../reducer";
import thunk from 'redux-thunk'
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware=[thunk];

middleware.push(createLogger())
const store=createStore(rootReducer
    
    ,
   compose(applyMiddleware(...middleware)))
export default store;