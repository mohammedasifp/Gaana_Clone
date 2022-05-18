import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'

export const Navbar=()=>{
const status=useSelector(store=>store.login.isAuthenticated) 
const navigate=useNavigate()   
   
    return(
        <div className="nav_links">
            <Link to="/">All</Link>
            <Link to="/Trending">Trending Songs</Link>
            <Link to="/New">New Songs</Link>
            <Link to="/old">Old Songs</Link>
            <Link to="/album">Album</Link>
            <p className="nav-fav" onClick={()=>{if(status)navigate("/fav");else alert("Please login to your account")}}>Favourite</p>
            <Link to="/radio">Radio</Link>
            <Link to="/podcast">Podcast</Link>
        </div>
    )

}