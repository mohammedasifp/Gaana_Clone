import "./PlaySong.css" ;
import { GrFavorite } from 'react-icons/gr';
import { Trending } from "../Trending/Trending-songs";

export const PlaySong = () => {
    const data = JSON.parse(localStorage.getItem('data')) ;
    const time = Math.floor(data.time/60) ;
    return(
        <div className="mainDiv">

          <div>
           <img src={data.img} className="mainImg"></img>
          </div>

          <div>
           <div  className="firstLine"><p>{data.name}</p><p>|</p><p>{data.hindiName}</p></div>
           <div  className="secLine"><p>{data.name}</p><button>{time} min</button></div>
           <p className="singer">{data.singer}</p>
           <div  className="thirdLine"><a href={data.play}><button className="playButton">Play Song</button></a></div>
          </div>
           <div><Trending/></div>
        </div>

    )
}