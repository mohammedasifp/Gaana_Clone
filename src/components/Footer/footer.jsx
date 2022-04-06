import React from 'react'
import './footer.css' 

export const Footer = () => {
  return (
    <div className='mainBox'>
      <div className='fistDiv'>
        <p className='heading'>Bas Bajna Chahiye Gaana</p>
        <p className='small' style={{color: '#8e8e95'}}>Gaana is the one-stop solution for all your needs. Gaana offers you free,unlimited access to over 30 <br></br>million Hindi Songs, Bollywood Music, English MP3 songs, Regional Music & Mirchi Play.</p>
      </div>
      <hr/>
      <div style={{alignItems:'center'}}>
        <img  className='icon' style={{marginLeft: '50%'}} src='https://cdn-icons-png.flaticon.com/512/145/145802.png'/>
        <img  className='icon1' style={{marginLeft: '1%'}} src='https://img.icons8.com/color/344/twitter-circled--v1.png'/>
      </div>
      <hr/>
      <div className='midDiv'>
        <p className='advertise'>Advertise on Gaana.com</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Feedback</p>
        <p>Report an Issue</p>
        <p>Partners</p>
        <p>Sitemap</p>
        <p>FAQ</p>
      </div>
      <hr/>
      <div>
        <p className='heading'>Quicklinks</p>
        <div className='thirdDiv' >
        <ul>
          <li>Albums</li>
          <li style={{color: '#8e8e95'}}>English</li>
          <li style={{color: '#8e8e95'}}>Hindi</li>
          <li style={{color: '#8e8e95'}}>Telugu</li>
          <li style={{color: '#8e8e95'}}>Punjabi</li>
          <li style={{color: '#8e8e95'}}>Tamil</li>
          <li style={{color : 'red'}} >View all</li>
        </ul>
        <ul>
          <li>Genres</li>
          <li style={{color: '#8e8e95'}}>Bollywood Songs</li>
          <li style={{color: '#8e8e95'}}>Devotional Songs</li>
          <li style={{color: '#8e8e95'}}>Ghazals</li>
          <li style={{color: '#8e8e95'}}>Bhajan</li>
          <li style={{color: '#8e8e95'}}>Patriotic Songs</li>
          <li style={{color: '#8e8e95'}}>Kids Songs</li>
          <li style={{color : 'red'}} >View all</li>
        </ul>
        <ul>
          <li>Albums</li>
          <li style={{color: '#8e8e95'}}>English</li>
          <li style={{color: '#8e8e95'}}>Hindi</li>
          <li style={{color: '#8e8e95'}}>Telugu</li>
          <li style={{color: '#8e8e95'}}>Punjabi</li>
          <li style={{color: '#8e8e95'}}>Tamil</li>
          <li style={{color : 'red'}} >View all</li>
        </ul>
        <ul>
          <li>Artists</li>
          <li style={{color: '#8e8e95'}}>Arjit Singh</li>
          <li style={{color: '#8e8e95'}}>Neha Kakkar</li>
          <li style={{color: '#8e8e95'}}>Honey Singh</li>
          <li style={{color: '#8e8e95'}}>Atif Aslam</li>
          <li style={{color: '#8e8e95'}}>A R Rahman</li>
          <li style={{color : 'red'}} >View all</li>
        </ul>
        <ul>
          <li>New Release</li>
          <li style={{color: '#8e8e95'}}>English Songs</li>
          <li style={{color: '#8e8e95'}}>Hindi Songs</li>
          <li style={{color: '#8e8e95'}}>Telugu Songs</li>
          <li style={{color: '#8e8e95'}}>Punjabi Songs</li>
          <li style={{color: '#8e8e95'}}>Tamil Songs</li>
          <li style={{color : 'red'}} >View all</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

