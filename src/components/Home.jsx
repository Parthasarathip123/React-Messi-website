import React from 'react'
import vg from "../assets/messi1.png"

import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillAmazonCircle
} from "react-icons/ai"

const Home = () => {
  return (
   <>
    <div className='home' id="home">
    <main>
        <h1>MESSI WEBSITE</h1>
        <p>The greatest of all time</p>
    </main>
  </div>
   
   <div className="home2">
   <img src={vg} alt="Graphics"/>

<div>
  <p>Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who most recently played as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.</p>
</div>
   </div>

   <div className="home3" id="about">
    <div>
        <h1>I am messi</h1>
        <p>Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (listen); born 24 June 1987), also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. Widely regarded as one of the greatest players of all time, Messi has won a record seven Ballon d'Or awards[note 2] and a record six European Golden Shoes, and in 2020 he was named to the Ballon d'Or Dream Team. Until leaving the club in 2021, he had spent his entire professional career with Barcelona, where he won a club-record 34 trophies, including ten La Liga titles, seven Copa del Rey titles and the UEFA Champions League four times.[note 3] With his country, he won the 2021 Copa América and the 2022 FIFA World Cup. A prolific goalscorer and creative playmaker, Messi holds the records for most goals in La Liga (474).
        </p>
    </div>
   </div>
   <div className="home4" id="brands">
    <div>
      <h1>Brands</h1>
      <article>
        <div style={{
            animationDelay:"0.3s"
        }}>
         <AiFillGoogleCircle />
         <p>Google</p>   
        </div> 
        <div style={{
            animationDelay:"0.5s"
        }}>
         <AiFillAmazonCircle />
         <p>Amazon</p>   
        </div>
        <div style={{
            animationDelay:"0.7s"
        }}>
         <AiFillYoutube />
         <p>Youtube</p>   
        </div>
        <div style={{
            animationDelay:"0.9s"
        }}>
         <AiFillInstagram />
         <p>Instagram</p>   
        </div>   
      </article>
    </div>
   </div>
   </>
  )
}

export default Home
