import { getByDisplayValue } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"


export const Oldaudio=()=>{
    const [songdata,setSongdata]=useState([]);
    const {id}=useParams();
    const data=useSelector(store=>store.songs)
    var arr=data.filter((elem)=>{return elem.type=="old"})

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
        setSongdata(playarr[0])   
    }
   console.log(songdata.url)
    return(
        <div>
        <div className="audio_container">
           <div className="audio_container1">

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
              
                <div className="audio_container2">
               {arr.map((elem)=>{
               return(
                   <div className="audio_container21">
                         <div className="audio_container211"><img onClick={()=>{display(elem.id)}} className="audio_container2_img" src={elem.cover_image}/></div> 
                          <div className="audio_container212"><label onClick={()=>{display(elem.id)}} className="songname">{elem.song}</label></div>
                   </div>
               )
              })} 
           </div>
          
        </div>

            
        </div>
    )
}