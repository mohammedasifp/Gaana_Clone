import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Header } from "../Header/Header"
import { Navbar } from "../Navbar/Navbar"

export const Oldsongs=()=>{
const token=useSelector(store=>store.login.user.token)
const navigate=useNavigate();
if(!token){
   navigate("/login") 
}   
var data=useSelector(store=>store.song.songs)  
 var arr=data.filter((elem)=>{return elem.type=="old"})
    
    return(
        <div>
        <Header/>
        <Navbar/>
                {/* <div className="img_container"><img src="https://cdn.bdc-tv.com/wp-content/uploads/2020/08/p3.jpg"  /></div> */}

           
            <div className="trending_headers">
                <div className="track">Track</div>
                <div>Artists</div>
                <div>Duration</div>
            </div>
           
            <div className="trending_Container">
            
            {arr.map((elem)=>{
                return(
                   <>
                   <div className="tending_single">
                         <div className="img_div">
                               <div>
                                   <Link to={`/old/${elem.id}`}>
                                   <img className="mainimg" src={elem.cover_image}/>
                                   </Link>
                               </div>
                                <div>
                                      <Link to={`/old/${elem.id}`}>
                                       <p className="mainhead">{elem.song}</p> 
                                      </Link>
                                  </div>
                         </div>
                         <div className="artist"><p>{elem.artists}</p></div>
                         <div className="duration">{elem.duration}</div>
                    </div>
                    
                   </>
                )
            })}
            </div>
        </div>
    )
        
    
}