
import React, { Component } from "react";
import Slider from "react-slick";
import './Movable.css'



export const Movable=()=>{
    const settings = {
        
        slidesToShow: 3,
        slidesToScrol: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      return(
          
      <div className="Movable_container">
      <Slider rif={slider => (this.slider = slider)} {...settings}>
        <div className="mavable_img_container">
          <img src="https://a10.gaanacdn.com/gn_img/showcase/DwPKOBbqVZ/DwPKORPbqV/size_l_1644259297.webp" />
        </div>

        <div className="mavable_img_container">
        <img src="https://a10.gaanacdn.com/gn_img/showcase/JD2KJAbOLw/D2KJyLwbOL/size_l_1641985332.webp" />
        </div>

        <div className="mavable_img_container">
        <img src="https://a10.gaanacdn.com/gn_pl_img/playlists/Rz4W8vKxD5/z4W8R8nOKx/size_l_1646207777.webp" />
        </div>

        <div className="mavable_img_container">
        <img src="https://a10.gaanacdn.com/gn_img/showcase/0wrb4qNKLg/0wrb45AKLg/size_l_1648801006.webp" />
        </div>

        <div className="mavable_img_container">
          <img src="https://a10.gaanacdn.com/gn_img/showcase/XYybzrb2gz/YybzoMZK2g/size_l_1646824309.webp" />
        </div>

        <div className="mavable_img_container">
        <img src="https://a10.gaanacdn.com/gn_img/showcase/Oxd3xzPbgV/Oxd3x7lKgV/size_l_1637682683.webp" />
        </div>
      </Slider>
 
    </div>
      )
}