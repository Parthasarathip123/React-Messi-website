import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/messi3.jpg"
import img2 from "../assets/messi2.jpg"

const Services = () => {
  return <div>
  <Carousel
  infiniteLoop 
  autoplay
  showStatus={false}
  showArrows={false}
  showThumbs={false}
  interval={1000}  
    >
   <div>
    <img src={img1} alt="item1"/>
    <p className='legend'>barcelona</p>
   </div>
   <div>
    <img src={img2} alt="item2"/>
    <p className='legend'>barcelona</p>
   </div>
  </Carousel>
  </div>
}
export default Services
