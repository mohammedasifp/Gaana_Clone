import { reducer } from "./reducer";
import { createStore } from "redux";

const initState={songs:[]}
export const store=createStore(reducer,initState) 


