import { Link } from "react-router-dom"
import './Navbar.css'

export const Navbar=()=>{
   
    return(
        <div className="nav_links">
            <Link to="/">All</Link>
            <Link to="/Trending">Trending Songs</Link>
            <Link to="/New">New Songs</Link>
            <Link to="/old">Old Songs</Link>
            <Link to="/Trending">Moodes & Genres</Link>
            <Link to="/album">Album</Link>
            <Link to="/radio">Radio</Link>
            <Link to="/podcast">Podcast</Link>
            <Link to="My">My Music</Link>
        </div>
    )

}