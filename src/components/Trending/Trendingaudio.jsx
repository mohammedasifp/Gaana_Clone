import { getByDisplayValue } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const Trendingaudio=()=>{
var user=useSelector(store=>store.login.user);
const status=useSelector(store=>store.login.isAuthenticated);
const navigate=useNavigate();
const {id}=useParams();
const data=useSelector(store=>store.song.songs)

const playarr=data.filter((elem)=>{return elem.id==id })

const senddata=(obj)=>{
    fetch("https://kudachi.herokuapp.com/fav",{
        method:"POST",
        body:JSON.stringify({...obj,user_id:user.user._id}),
        headers:{"content-type":"application/json"}})  
    }

return(
       <div>
           <div className="audio_container">
               <div className="audio_container1">
                  <div>
                       <button onClick={()=>{
                         if(status){
                          let obj=playarr[0];
                          delete obj._id;
                          senddata(obj)}
                          else{alert("please login to your account")}}} id="addtofav">Add to Favourite
                       </button>
                  </div>
                   <div className="audio_container11">
                     <img className="main_image" src={playarr[0].cover_image} />
                   </div>
                   <div className="audio_container12">
                      <p className="songdetails"><label className="spa">Song Name:   </label>{playarr[0].song}</p>
                      <p className="songdetails"><label className="spa">Artists:  </label>{playarr[0].artists}</p>
                      <p className="songdetails"><label className="spa">Duration:  </label>{playarr[0].duration}</p>
                      <div className="play">
                           <audio src={playarr[0].url} controls autoPlay preload="metadata" >
                              <source src={playarr[0].url}/>
                           </audio>
                      </div>
                   </div>
               </div> 
            </div>
       </div>
    )
}