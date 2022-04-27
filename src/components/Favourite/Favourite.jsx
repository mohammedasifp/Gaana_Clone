import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import './Favourite.css'
import { useNavigate } from "react-router-dom";

export const Favourite=()=>{
const token=useSelector(store=>store.login.user.token)
const navigate=useNavigate();
    if(!token){
       navigate("/login") 
    } 
const userid=useSelector(store=>store.login.user.user._id)
console.log(userid)
const [favdata,setFavdata]=useState([]);
useEffect(()=>{
   fetchdata();
},[])

const fetchdata=()=>{
    fetch(`https://kudachi.herokuapp.com/fav?id=${userid}`).then(Response=>Response.json()).then(data=>setFavdata(data))
}
const deletefun=(id)=>{
  fetch(`https://kudachi.herokuapp.com/fav/${id}`,{
      method:"DELETE"
  }).then(fetchdata)
}

    return(
        <div>
            <Header/>
            <Navbar/>
            <div className="favcontainer">
                {favdata.map((elem)=>{
                    return(
                        <div>
                          <Link to={`/fav/${elem.id}`}> <img id="favimage" src={elem.cover_image}/></Link>
                           <p>{elem.song} <button onClick={()=>{deletefun(elem._id)}} id="rembtn">Remove</button></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}