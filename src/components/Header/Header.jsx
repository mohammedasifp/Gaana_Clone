import { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import { Signup } from '../Signup/Signup';
import { useSelector } from 'react-redux';
import { logout } from '../Redux/Login/Loginaction';
import { useDispatch } from 'react-redux';


export const Header = () => {  
 
  const [sidebar , setSidebar] = useState(false) ;
  const showSidebar = () => setSidebar(!sidebar) ;
  const [showsearchdiv,setShowsearchdiv]=useState(false)
  const [sogsdata,setSongsdata]=useState([])
  
  const [play,setPlay]=useState({song:"Mohabbat Hai",image:"https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1749498711.jpg",media_url:"https://pagalsong.in/uploads/systemuploads/mp3/Mohabbat Hai - Stebin Ben/Mohabbat Hai - Stebin Ben 128 Kbps.mp3"})
// console.log(sogsdata)
   const status=useSelector(store=>store.login.isAuthenticated)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  console.log(sogsdata)

  const mainfun=(e)=>{
    setShowsearchdiv(true)
    // https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=
    fetch(`https://kudachi.herokuapp.com/song?q=${e.target.value}`).then(Response=>Response.json()).then(data=>setSongsdata(data.songs.data))
    
  }
//  console.log(play)
  const handelchange=(elem)=>{
   setPlay({...play,song:elem.title,image:elem.image,media_url:elem.more_info.vlink})
}

  const logoutfun=()=>{
    
    dispatch(logout())
  }

  return(
      <div className='Main_Header'> 
        {/*header*/}
        <div className="header flex-div">
         <div className="nav-left flex-div">
           <img src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png" className="menuIcon" onClick={showSidebar}/>                
         </div>
         <img onClick={()=>{navigate("/")}} src="https://cdn-web.heartfulness.org/en/wp-content/uploads/2020/09/gana-ipd-logo.png" className="gaanaIcon"/>
         <div className='flex-div' id='fdiv' >
           <input type="text" placeholder="Search Artists, Songs, Albums" id="video" onInput={mainfun} />
         </div>
         <Link to="/singup" id='sign-btn'> <button id='hfavbtn'>Signup/Login</button>  </Link> 
        </div>

        {/*strip */}
        <div className='songplaystrip'>
         <img id='simage' src={play.image}/>
         <div>
            <audio id='audo' src={play.media_url} controls preload="metadata" >
              <source src={play.media_url}/>
            </audio>
         </div>
         <p>{play.song}</p>
        </div>
         
         {/*search div */}
        {showsearchdiv?
         <div className='searchdiv'>
           <button className='back-btn' onClick={()=>{setShowsearchdiv(false)}}>Back</button>
           <div className='searchsongcontainer'>
             {sogsdata.map((elem)=>{
               return(
                 <div>
                   <img onClick={()=>{handelchange(elem)}} id='serchimage' src={elem.image} />
                 </div>
               )
             })}
           </div>
         </div>:""
        }

       {/*side bar*/}
       {sidebar?
        <ul className='nav-menu-items'>
          <Link to="/"><li className='nav-text'>All Songs</li></Link>
          <li onClick={()=>{if(status)navigate("/fav");else alert("Please login to your account")}} className='nav-text'>MyFavorite</li>
          <Link to="/trending"><li className='nav-text'>Trending Songs</li></Link>
          <Link to="/old"><li className='nav-text'>Old Songs</li></Link>
          <Link to="/new"><li className='nav-text'>New Songs</li></Link>   
          <Link to="/album"><li className='nav-text'>Albums</li></Link>
          <Link to="/radio"><li className='nav-text'>Radio</li></Link>
          <Link to="/podcast"><li className='nav-text'>Podcast</li></Link> 
          {status?<li onClick={()=>{let y=prompt("Do you want to logout","yes");console.log(y); if(y=='yes'){dispatch(logout())}}} className='nav-text'>Log Out</li>:""}
        </ul>:""}
      </div>
   )
}

            //   {/* Main Header */}
            //   <div className="header flex-div">   
            //   <div className="nav-left flex-div">
            //      <img src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png" className="menuIcon menu-bars" onClick={showSidebar}/>                
            //    </div>
            //       <img onClick={()=>{navigate("/")}} src="https://cdn-web.heartfulness.org/en/wp-content/uploads/2020/09/gana-ipd-logo.png" className="gaanaIcon"/>
            //    <div className='flex-div' id='fdiv' >  
            //       <input type="text" placeholder="Search Artists, Songs, Albums" id="video" onInput={mainfun} />
            //    </div>    
            //    <Link to="/singup" id='sign-btn'> <button id='hfavbtn'>Signup</button>  </Link>      
            // </div> 
{/* <div className='songplaystrip'>
<img id='simage' src={play.image}/>
<div>
   <audio id='audo' src={play.media_url} controls preload="metadata" >
     <source src={play.media_url}/>
   </audio>
 </div>
 <p>{play.song}</p>
</div> */}

{/* // {showsearchdiv?<div className='searchdiv'>
// <button onClick={()=>{setShowsearchdiv(false)}}>Back</button>
//    <div className='searchsongcontainer'>
//    {sogsdata.map((elem)=>{ */}
//   return(<div>
//     <img onClick={()=>{handelchange(elem)}} id='serchimage' src={elem.image} />
//   </div>)
//   })}
//    </div>
//    </div>:""}




//  {/* Sidebar */}
//  {sidebar?<ul className='nav-menu-items'>
//  <Link to="/"><li className='nav-text'>All Songs</li></Link>
// <li onClick={()=>{if(status)navigate("/fav");else alert("Please login to your account")}} className='nav-text'>MyFavorite</li>
// <Link to="/trending"><li className='nav-text'>Trending Songs</li></Link>
// <Link to="/old"><li className='nav-text'>Old Songs</li></Link>
// <Link to="/new"><li className='nav-text'>New Songs</li></Link>   
// <Link to="/album"><li className='nav-text'>Albums</li></Link>
// <Link to="/radio"><li className='nav-text'>Radio</li></Link>
// <Link to="/podcast"><li className='nav-text'>Podcast</li></Link> 
// <li onClick={logoutfun} className='nav-text'>Log Out</li>    
// </ul>:""
// }          
