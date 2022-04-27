import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Header } from "../Header/Header"
import { Navbar } from "../Navbar/Navbar"
import './Newsongs.css'

export const Newsongs=()=>{
 var data=useSelector(store=>store.song.songs) 
 var token=useSelector(store=>store.login.user.token) 
 var navigate=useNavigate();
 if(!token){
    navigate("/login")
 }
 var arr=data.filter((elem)=>{return elem.type=="new"})
    
    return(
        <div>
        <Header/>
        <Navbar/>
        {/* <div className="img_container"><img src="https://scontent.fblr1-5.fna.fbcdn.net/v/t1.6435-9/146974991_2210003429131456_2621287391012414407_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=1Fr03voKK0wAX9x0_a_&_nc_ht=scontent.fblr1-5.fna&oh=00_AT_NZAlPuhxBRRhyapDinaA7iXKP0wo7yZs3p3rX3TmZxw&oe=626C355F"/></div> */}
   
             <h3 className="pageheading">New Songs</h3>
            <div className="new_Container">
           
                   {arr.map((elem)=>{
                   return(
                             <div key={elem.id}>
                              <div  className="New_single">
                               <div>
                                   <Link to={`/new/${elem.id}`}>
                                   <img className="newimg" src={elem.cover_image}/>
                                   </Link>
                               </div>

                                <div>
                                      <Link to={`/new/${elem.id}`}>
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