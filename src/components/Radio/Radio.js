import { Movable } from "../Movable/Movable"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Radioo.css'
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const Radio=()=>{
  const token=useSelector(store=>store.login.user.token)
const navigate=useNavigate();
if(!token){
   navigate("/login") 
} 
    function SampleNextArrow(props) {

        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray",margin:"0px 38px" }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray",margin:"0px 0px 0px 4px"}}
            onClick={onClick}
          />
        );
      }
     const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          };


return(
    <div>
    <Header/>
    <Navbar/>
    <div><Movable/></div>

    <div className="radio_container">
    <div className="move">
     <div className="trending_headding">Mirchi Play</div>
      <div>
          <div>      
             <Slider {...settings} >
             <div>
          <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/w4MKPObojg/w4MKPObojg/size_m_1643614623.webp"/>
          <div className="radio_heading">
          <p className="heading1">Club mirchi</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg"   src="https://a10.gaanacdn.com/gn_img/m_radio_circle/Dk9KN2KBx1/Dk9KN2KBx1/size_m_1643615163.webp" />
        <div className="radio_heading">
          <p className="heading1">Mirchi Sihi Kannada</p>
          <p className="heading2">Kannada</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/qaLKY23pO4/qaLKY23pO4/size_m_1643615336.webp" />
        <div className="radio_heading">
          <p className="heading1">Mirchi Delhi</p>
          <p className="heading2">Panjabi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/DwPKOBbqVZ/DwPKOBbqVZ/size_m_1643614853.webp" />
        <div className="radio_heading">
          <p className="heading1">Mirch 90s</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
          <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/9En3peWXDV/9En3peWXDV/size_m_1643615075.webp" />
          <p className="heading1">Mirchi Campus</p>
          <p className="heading2">Hindi</p>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/BZgWoOW2d9/BZgWoOW2d9/size_m_1643614905.webp" />
        <div className="radio_heading">
          <p className="heading1">Mirchi Top 20</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/zLp36v3rGe/zLp36v3rGe/size_m_1643615219.webp" />
        <div className="radio_heading">
          <p className="heading1">Mirchi Telugu</p>
          <p className="heading2">Telugu</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/9MAWe7KyJe/9MAWe7KyJe/size_m_1643615007.webp" />
        <div className="radio_heading">
          <p className="heading1">Club mirchi</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>
              </Slider>
            </div>
      </div>
     </div> 
     </div>   



        <div className="radio_container">
    <div className="move">
     <div className="trending_headding">Popular Gaana Radios</div>
      <div>
          <div>      
             <Slider {...settings} >
             <div>
          <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/kGxbnw0Ky4/kGxbnxJ3y4/size_m_1643619321.webp"/>
          <div className="radio_heading">
          <p className="heading1">Love Hits</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg"   src="https://a10.gaanacdn.com/gn_img/radiotheme/qa4WEqWP1p/qa4WEm8WP1/size_m_1643616025.webp" />
        <div className="radio_heading">
          <p className="heading1">Love Songs</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/10q3ZR1352/10q3Zm2K52/size_m_1643619350.webp" />
        <div className="radio_heading">
          <p className="heading1">Morning Mix</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/2lV3dl13Rg/2lV3dGZKRg/size_m_1643700040.webp" />
        <div className="radio_heading">
          <p className="heading1">Party Hits</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
          <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/4Z9bqo3yQn/4Z9bqmJbyQ/size_m_1643616085.webp" />
          <div className="radio_heading">
          <p className="heading1">Club mirchi</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/ogNWkLDbmX/ogNWk7pWmX/size_m_1643700164.webp" />
        <div className="radio_heading">
          <p className="heading1">Club mirchi</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/Rz4W87v3xD/Rz4W8R6KxD/size_m_1643786917.webp" />
        <div className="radio_heading">
          <p className="heading1">Club mirchi</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/qa4WEqqWP1/qa4WEm5WP1/size_m_1643620021.webp" />
        <div className="radio_heading">
          <p className="heading1">Club mirchi</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>
              </Slider>
            </div>
      </div>
     </div> 
     </div>    


           <div className="radio_container">
    <div className="move">
     <div className="trending_headding">Artist Radios</div>
      <div>
          <div>      
             <Slider {...settings} >
             <div>
          <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/21GWwR3pkg/21GWwJe3pk/size_m_1643792398.webp"/>
          <div className="radio_heading">
          <p className="heading1">Rahman Hits</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg"   src="https://a10.gaanacdn.com/gn_img/radiotheme/2lV3dl13Rg/2lV3d5OWRg/size_m_1514444881.webp" />
        <div className="radio_heading">
          <p className="heading1">Sonu Nigam</p>
          <p className="heading2">Kannada</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/jBr3gLyWR1/jBr3gmZbR1/size_m_1514444883.webp" />
        <div className="radio_heading">
          <p className="heading1">Club mirchi</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/zLp36PvbrG/zLp36VD3rG/size_m_1514444860.webp" />
        <div className="radio_heading">
          <p className="heading1">S P Balasubramanyam</p>
          <p className="heading2">Kannada</p>
          </div>
        </div>

        <div>
          <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/4Z9bqgo3yQ/4Z9bq4JWyQ/size_m_1514444817.webp" />
          <div className="radio_heading">
          <p className="heading1">Rahman Radio</p>
          <p className="heading2">Tamil</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/qa4WEkqKP1/qa4WEo8KP1/size_m_1514444815.webp" />
        <div className="radio_heading">
          <p className="heading1">Isai Raja</p>
          <p className="heading2">Tamil</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/a7LWBkzbzX/a7LWBjDWzX/size_m_1514444830.webp" />
        <div className="radio_heading">
          <p className="heading1">The Superstarts</p>
          <p className="heading2">Malyalam</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/ZaP37OR3Dy/ZaP37zxKDy/size_m_1514444834.webp" />
        <div className="radio_heading">
          <p className="heading1">Forever Yasudas</p>
          <p className="heading2">Malyalam</p>
          </div>
        </div>
              </Slider>
            </div>
      </div>
     </div> 
     </div>   

     <div className="radio_container">
    <div className="move">
     <div className="trending_headding">Latest Radios</div>
      <div>
          <div>      
             <Slider {...settings} >
             <div>
          <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/P7m3GvNKqx/P7m3Gw63qx/size_m_1584715865.webp"/>
          <div className="radio_heading">
          <p className="heading1">Sookun Ke Pal</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg"   src="https://a10.gaanacdn.com/gn_img/radiotheme/qa4WEqWP1p/qa4WEm8WP1/size_m_1643616025.webp" />
        <div className="radio_heading">
          <p className="heading1">Love Hits</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/10q3ZR1352/10q3Zm2K52/size_m_1643619350.webp" />
        <div className="radio_heading">
          <p className="heading1">Morning Mix</p>
          <p className="heading2">Kannada</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/2lV3dl13Rg/2lV3dGZKRg/size_m_1643700040.webp" />
        <div className="radio_heading">
          <p className="heading1">90s & 20000</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
          <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/4Z9bqo3yQn/4Z9bqmJbyQ/size_m_1643616085.webp" />
          <div className="radio_heading">
          <p className="heading1">Party</p>
          <p className="heading2">Panjabi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/ogNWkLDbmX/ogNWk7pWmX/size_m_1643700164.webp" />
        <div className="radio_heading">
          <p className="heading1">Classic Retro</p>
          <p className="heading2"> Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/Rz4W87v3xD/Rz4W8R6KxD/size_m_1643786917.webp" />
        <div className="radio_heading">
          <p className="heading1">International Rock</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/radiotheme/qa4WEqqWP1/qa4WEm5WP1/size_m_1643620021.webp" />
        <div className="radio_heading">
          <p className="heading1">International Retro</p>
          <p className="heading2">Hindi</p>
          </div>
        </div>
              </Slider>
            </div>
      </div>
     </div> 
     </div> 
        
    </div>
)    
}