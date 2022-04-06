import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Podcast.css'


export const Podcast=()=>{
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
            <div className="move podcast_container" >
     <div className="trending_headding">Gaana Podcast Originals</div>
      <div>
          <div>      
             <Slider {...settings} >
             <div>
          <img className="sliderimg"  src="https://a10.gaanacdn.com/gn_img/shows/koMWQ7BKqL/oMWQdaX3qL/size_m_1642090246.jpg"/>
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/a7LWBkzbzX/7LWBXaDKzX/size_m_1620279776.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/MmqK5pEbwR/mqK5XJobwR/size_m_1631719963.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/koMWQ7BKqL/oMWQ76PKqL/size_m_1574432674.jpg" />
        </div>

        <div>
          <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/2lV3d1WRgB/lV3dX213Rg/size_m_1630515094.JPG" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/10q3ZR1352/0q3ZRMX352/size_m_1641235142.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/2lV3d1WRgB/lV3dOaoKRg/size_m_1626878370.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/g4w3vr3jJB/4w3vwAAWjJ/size_m_1574432623.jpg" />
        </div>
              </Slider>
            </div>
      </div>
     </div>



     <div className="move">
     <div className="trending_headding">Famous Personalities</div>
      <div>
          <div>      
             <Slider {...settings} >
             <div>
          <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/7rVW1aRWk5/VW1m8eABWk/size_m_1616393007.jpg"/>
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/JD2KJAbOLw/2KJkJymn3O/size_m_1611761457.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/4Z9bqZoKyQ/9bqBJ9GeKy/size_m_1623223015.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/lJvKa16KDV/vKagYgQRWD/size_m_1611219570.jpg" />
        </div>

        <div>
          <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/lJvKa16KDV/vKagYgQRWD/size_m_1611219570.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/lJvKa63DV9/vKagYj02WD/size_m_1607960308.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/w4MKPgOboj/MKPrGVloWo/size_m_1611325809.jpeg" />
        </div>
              </Slider>
            </div>
      </div>
     </div>


     <div className="move">
     <div className="trending_headding">Best From Around The World</div>
      <div>
          <div>      
             <Slider {...settings} >
             <div>
          <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/zLp36PvbrG/Lp36Ll0brG/size_m_1619862572.jpg"/>
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/koMWQBbqLE/oMWQv51bqL/size_m_1619863488.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/mGjKr1b6zX/GjKrkRm36z/size_m_1619862409.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/9En3peWXDV/En3pN8kbXD/size_m_1619862747.jpg" />
        </div>

        <div>
          <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/d41WjznWPL/41Wj5A73PL/size_m_1636423224.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/oAJbDlbnL8/AJbDm10KnL/size_m_1619870785.jpg" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/Dk9KN2KBx1/k9KNe0dbBx/size_m_1619862841.jpg" />
        </div>



        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_img/shows/g4w3vwrWjJ/4w3vzmj3jJ/size_m_1620178255.jpg" />
        </div>
              </Slider>
            </div>
      </div>
     </div>
        </div>
    )
}