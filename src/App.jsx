import { Footer } from './components/Footer/footer';

import { Route, Routes } from 'react-router-dom';
import { PlaySong } from './components/PlaySong/PlaySong';

import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Trending } from './components/Trending/Trending-songs';
import {Trendingaudio} from './components/Trending/Trendingaudio'
import { Oldsongs } from './components/Oldsongs/Oldsongs';
import { Oldaudio } from './components/Oldsongs/Old_audio';
import { Newsongs } from './components/Newsongs/Newsongs';
import { Newsongsaudio } from './components/Newsongs/Newsongsaudio';
import { Albumsongs } from './components/Album/Album';
import { Albumsongsaudio } from './components/Album/Albumaudio';
import { Radio } from './components/Radio/Radio';
import { Podcast } from './components/Podcast/Podcast';
import { Header } from './components/Header/Header';
import { Signup } from './components/Signup/Signup';
import { Login } from './components/Longin/Longin';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/home' element={<Home/>}/> 
      <Route path='/Trending' element={ <Trending/>} />
      <Route path='/trending/:id' element={<Trendingaudio/>}/>
      <Route path='/old' element={ <Oldsongs/>} />
      <Route path='/old/:id' element={<Oldaudio/>}/>
      <Route path='/new' element={<Newsongs/>}/>
      <Route path='/new/:id' element={<Newsongsaudio/>}/>
      <Route path='/album' element={<Albumsongs/>}/>
      <Route path='/album/:id' element={<Albumsongsaudio/>}/>
      <Route path="/radio" element={<Radio/>}/>
      <Route path='/podcast' element={<Podcast/>}/>
      <Route path="/" element={<Signup/>} />
      <Route path='/login' element={<Login/>}/>
    </Routes>      
    </div>
  );
}

export default App;
