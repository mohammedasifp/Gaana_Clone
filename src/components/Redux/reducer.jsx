
export const reducer=(store,{type,payload})=>{
      
      switch(type){
          case "songs":{
           
               return {...store,songs:payload};
               
          }

         default:
             return store;
                    }

}