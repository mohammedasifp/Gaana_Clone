import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { Header } from "../Header/Header"
import { Navbar } from "../Navbar/Navbar"

export const Favouriteaudio=()=>{
const {id}=useParams();
const allsongs=useSelector(store=>store.song.songs)
const playsong=allsongs.filter((elem)=>{
    return elem.id==id;
})



    return(
    <div>
        <Header/>
        <Navbar/>
        <div className="audio_container">
           <div className="audio_container1">
              <div className="audio_container11">
                  <img className="main_image" src={playsong[0].cover_image} />
              </div>
                <div className="audio_container12">
                    <p className="songdetails"><label className="spa">Song Name:   </label>{playsong[0].song}</p>
                    <p className="songdetails"><label className="spa">Artists:  </label>{playsong[0].artists}</p>
                    <p className="songdetails"><label className="spa">Duration:  </label>{playsong[0].duration}</p>
                  <div className="play">
                     <audio src={playsong[0].url} controls autoPlay preload="metadata" >
                        <source src={playsong[0].url}/>
                  </audio>
                </div>
               </div>
            </div>
        </div>
    </div>
    )
}