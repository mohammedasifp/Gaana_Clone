import { getByDisplayValue } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const Trendingaudio=()=>{
const mongoid=useSelector(store=>store.login.user.user._id);
const token=useSelector(store=>store.login.user.token);
const navigate=useNavigate();
if(!token){
   navigate("/login") 
} 
    const [songdata,setSongdata]=useState({user_id:mongoid});
    const {id}=useParams();
    const data=useSelector(store=>store.song.songs)

    const playarr=data.filter((elem)=>{
        return elem.id==id
    })
    useEffect(()=>{
       display(id)
    },[])
  
    function display(x){
           const playarr=data.filter((elem)=>{
            return elem.id==x;
        })
        let obj=playarr[0]
        delete obj._id
       setSongdata(obj)  
    }
    const senddata=()=>{
        //  setSongdata({...songdata,user_id:user})
        //  console.log(songdata)
        fetch("https://kudachi.herokuapp.com/fav",{
            method:"POST",
            body:JSON.stringify({...songdata,user_id:mongoid}),
            headers:{"content-type":"application/json"}
        })
        
    }
    return(
        <div>
        <Header/>
        <Navbar/>
        <div className="audio_container">
           <div className="audio_container1">
            <div>
              <button onClick={()=>{senddata()}} id="addtofav">Add to Favourite</button>
            </div>
              <div className="audio_container11">
                  <img className="main_image" src={songdata.cover_image} />
              </div>
               <div className="audio_container12">
                    <p className="songdetails"><label className="spa">Song Name:   </label>{songdata.song}</p>
                    <p className="songdetails"><label className="spa">Artists:  </label>{songdata.artists}</p>
                    <p className="songdetails"><label className="spa">Duration:  </label>{songdata.duration}</p>
                  <div className="play">
                     <audio src={songdata.url} controls autoPlay preload="metadata" >
                        <source src={songdata.url}/>
                     </audio>
            </div>
               </div>
           </div>
              
                {/* <div className="audio_container2">
               {data.map((elem)=>{
               return(
                   <div className="audio_container21">
                         <div className="audio_container211"><img onClick={()=>{display(elem.id)}} className="audio_container2_img" src={elem.cover_image}/></div> 
                          <div className="audio_container212"><label onClick={()=>{display(elem.id)}} className="songname">{elem.song}</label></div>
                   </div>
               )
              })} 
           </div> */}
          
        </div>

            
        </div>
    )
}