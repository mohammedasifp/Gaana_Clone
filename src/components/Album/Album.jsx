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
var data=useSelector(store=>store.song.songs)  
var arr=data.filter((elem)=>{return elem.type=="album"})

return(
  <div>
    <h3 className="pageheading">Albums</h3>
    <div className="new_Container">
        {arr.map((elem)=>{
          return(
            <div key={elem.id}>
               <div className="New_single">
                 <div>
                    <Link to={`/trending/${elem.id}`}>
                     <img className="newimg" src={elem.cover_image}/>
                    </Link>
                 </div>
                 <div>
                   <Link to={`/trending/${elem.id}`}>
                     <p className="newhead">{elem.song}</p>
                   </Link>
                 </div>
               </div>
            </div>
          )
        })}
    </div>
  </div>
)
}