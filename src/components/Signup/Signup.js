import React from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css"
// import GitHubIcon from '@mui/icons-material/GitHub';
 
export const Signup = () => {
  const google = () => {
    window.open("https://marriott-bonvoy.herokuapp.com/auth/google", "_self");
  };
    const  cont =() =>{
      window.open()
    }
  
  return (
    <div className='container'>
     <div className='left'>
       <div className='imgganna'>
         <img  width="130px" src=" data:image/png;base64,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"/>
       </div>
     
     <h2>Login/Signup</h2>  
     <p1>Get a personalized experience, and access all <br/><p>your music</p></p1>
    
     <form id="field">

     <input id="email" type="text" placeholder="Enter Email or Mobile number"/>
     <Link to="/Signin"><button>Continue</button></Link>
    

    <p className="or">Or continue with</p>
    {/* <input type="submit"/> */}
    </form>
    
    <div className='btnbox'> 
    <div className='btnbox1'> 
  
   
    <button>   Git Hub</button>
    </div>
    <div className='btnbox2'> 
    <button className="loginButton google" onClick={google}> Google</button>
    </div>
    </div>
     </div>
      <div className='right'>
        <div className='head'>
        <div className='cross'>
        <span className="cut">X</span> 
          </div>
        <div className='text'>
        <span className="text-1">Over 30 million songs to suit<br/> every mood & occasion</span> 
        </div>
        <img height="500px" width="400px" src="https://a10.gaanacdn.com/gn_img/images/login_bg_v1_1621430866.jpg" alt=''/>
     
        </div>
      
      </div>
       

      
    </div>
  )
}

export default Signup
