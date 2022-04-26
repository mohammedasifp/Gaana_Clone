import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './Album.css'
import React, { Component } from "react";
import Slider from "react-slick";
import { Header } from "../Header/Header"
import { Navbar } from "../Navbar/Navbar"
import { useNavigate } from "react-router-dom"

export const Albumsongs=()=>{
  const token=useSelector(store=>store.login.user.token)
const navigate=useNavigate();
if(!token){
   navigate("/login") 
} 
   
        const settings = {
            
            slidesToShow: 1,
            slidesToScrol: 1,
            autoplay: true,
            autoplaySpeed: 2000
          };

   
var data=useSelector(store=>store.song.songs)  
 var arr=data.filter((elem)=>{return elem.type=="album"})
    return(
        <div>
        <Header/>
        <Navbar/>
        <div className="maindivimg">
            
       {/* <Slider rif={slider => (this.slider = slider)} {...settings}>
        <div className="im_container">
          <img src="https://i.pinimg.com/736x/ee/12/41/ee1241842ab36f3ba440a33d202acfb1.jpg" />
        </div>
        <div className="im_container"><img src="https://truepricedeals.in/wp-content/uploads/2019/06/banner-on-all.jpg"/></div>
        </Slider> */}
        </div>


          <h3 className="pageheading">Albums</h3>
            <div className="new_Container">
                   {arr.map((elem)=>{
                   return(
                             <>
                         <div className="New_single">
                         
                               <div>
                                   <Link to={`/album/${elem.id}`}>
                                   <img className="newimg" src={elem.cover_image}/>
                                   </Link>
                               </div>

                                <div>
                                      <Link to={`/album/${elem.id}`}>
                                       <p className="newhead">{elem.song}</p> 
                                      </Link>
                                </div>
                         </div>
                
                   </>
                )
            })}
            </div>
        </div>
    )
        
    
}