import { Songs } from "./DataAction";
const initState={songs:[]};
export const datareducer=(store=initState,{type,payload})=>{
      
    switch(type){
        case Songs:{

             return {...store,songs:payload};
        }

       default:
           return store;
                  }

}