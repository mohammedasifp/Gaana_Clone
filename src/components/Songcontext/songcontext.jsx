import { createContext, useState } from 'react'
export const songcontext=createContext();


export const songContextProvider=({children})=>{
const [play,setPlay]=useState({song:"Mohabbat Hai",image:"https://c.saavncdn.com/737/Mohabbat-Hai-Hindi-2021-20211212053548-500x500.jpg",media_url: "https://aac.saavncdn.com/737/3c8d5139fe1d5d533642ecdb085c483c_320.mp4"})

  
var handlechange=(elem)=>{
   setPlay({elem})
}    
    
  return(
    <songcontext.Provider value={{handlechange,play}}>{children}</songcontext.Provider>
  )
 


}