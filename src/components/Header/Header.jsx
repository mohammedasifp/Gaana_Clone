import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { Signup } from '../Signup/Signup';
import axios from 'axios';


export const Header = () => {  
 
  const [sidebar , setSidebar] = useState(false) ;
  const showSidebar = () => setSidebar(!sidebar) ;
  const [showsearchdiv,setShowsearchdiv]=useState(false)
  const [sogsdata,setSongsdata]=useState([])
  const [play,setPlay]=useState({song:"Mohabbat Hai",image:"https://c.saavncdn.com/737/Mohabbat-Hai-Hindi-2021-20211212053548-500x500.jpg",media_url: "https://aac.saavncdn.com/737/3c8d5139fe1d5d533642ecdb085c483c_320.mp4"})
// console.log(sogsdata)
  const mainfun=(e)=>{
    setShowsearchdiv(true)
    fetch(`https://kudachi.herokuapp.com/song?q=${e.target.value}`,
).then(Response=>Response.json()).then(data=>setSongsdata(data))
  }
//  console.log(play)
  const handelchange=(elem)=>{
      setPlay(elem)
  }

 
  return(
      <div className='Main_Header'>
              {/* Main Header */}
        <div className="header flex-div">   
            <div className="nav-left flex-div">
                <img src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png" className="menuIcon menu-bars" onClick={showSidebar}/>
            
                   {/* Sidebar */}
</div>
    
             <img src="https://cdn-web.heartfulness.org/en/wp-content/uploads/2020/09/gana-ipd-logo.png" className="gaanaIcon"/>
             
                  <div className='flex-div' id='fdiv' >  
                  <input type="text" placeholder="Search Artists, Songs, Albums" id="video" onInput={mainfun} />
                </div> 
                       
        </div> 
        {showsearchdiv?<div className='searchdiv'>
          <button onClick={()=>{setShowsearchdiv(false)}}>remove</button>
             <div className='searchsongcontainer'>
             {sogsdata.map((elem)=>{
            return(<div>
              <img onClick={()=>{handelchange(elem)}} id='serchimage' src={elem.image} />
            </div>)
          })}
             </div>
        </div>:""}


        <div className='songplaystrip'>
           <img id='simage' src={play.image}/>
           <div>
              <audio id='audo' src={play.media_url} controls preload="metadata" >
                <source src={play.media_url}/>
              </audio>
            </div>
            <p>{play.song}</p>
        </div>
        {sidebar?<ul className='nav-menu-items'>
            <Link to="/home"><li className='nav-text'>All Songs</li></Link>
           <Link to="/trending"><li className='nav-text'>Trending Songs</li></Link>
           <Link to="/old"><li className='nav-text'>Old Songs</li></Link>
           <Link to="/new"><li className='nav-text'>New Songs</li></Link>   
           <Link to="/album"><li className='nav-text'>Albums</li></Link>
           <Link to="/radio"><li className='nav-text'>Radio</li></Link>
           <Link to="/podcast"><li className='nav-text'>Podcast</li></Link>    
         </ul>:""
        }          
    
       </div>
    )
}