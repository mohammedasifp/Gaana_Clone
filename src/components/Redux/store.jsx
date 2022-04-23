// import { reducer } from "./reducer";
import { createStore } from "redux";
import { datareducer } from "./data/Datareducer";
import { loginreducer } from "./Login/Loginreducer";
import { combineReducers } from "redux";

const rootreducer=combineReducers({song:datareducer,login:loginreducer})

export const store=createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


