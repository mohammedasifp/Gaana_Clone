import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Header } from "../Header/Header"
import { Navbar } from "../Navbar/Navbar"
import { useNavigate } from "react-router-dom"

export const Oldsongs=()=>{
    
const token=useSelector(store=>store.login.user.token)
const navigate=useNavigate();
const [trendingdata,setTrendingdata]=useState([])    
var data=useSelector(store=>store.song.songs)
        
var arr=data.filter((elem)=>{return elem.type=="old"})
    return(
        <div>
            <div className="trending_headers">
                <div className="track">Track</div>
                <div>Artists</div>
                <div>Duration</div>
            </div>
           
           <div className="trending_Container">
               {arr.map((elem)=>{
                  return(
                   <div key={elem.id}>
                       <div className="tending_single">
                           <div className="img_div">
                               <div>
                                   <Link to={`/trending/${elem.id}`}>
                                     <img className="mainimg" src={elem.cover_image}/>
                                   </Link>
                               </div>
                                <div>
                                   <Link to={`/trending/${elem.id}`}>
                                     <p className="mainhead">{elem.song}</p> 
                                   </Link>
                                </div>
                           </div>
                           <div className="artist"><p>{elem.artists}</p></div>
                           <div className="duration">{elem.duration}</div>
                        </div>
                   </div>
                )})}
           </div>
        </div>
    )   
}