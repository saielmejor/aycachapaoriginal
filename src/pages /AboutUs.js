import React from 'react'
import "../App.css";
import Footer from '../components/Footer'
import '../components/AboutUs.css'

function AboutUs() {
  return (
    <> 
   <div className='about-container'> 
   <div className='about-description'>
   <h1>About Us</h1>
   <br></br>
    <p>	Aycachapas! was first launched in 2021 at the Queens Night Market just outside of the parking lot of New York Hall of Science. It all started from the love of cooking traditional Venezuelan food and being able  share one of the most iconic traditional street food called cachapas. It is a dish that is seen in all food trucks in the country. Venezuelans love to eat this particular dish because of its sweet taste, soft texture, and filled with salty melted cheese. </p>
 
  <h1> Specialties</h1>
  <br></br>
    <p>Our specialty is the thin-pancake made of sweet corn and filled with cheese. The cornpancake is cooked in a hot griddle and the cheese is melted over it. Most people love the crispy texture of the cachapas and the melted cheese.  </p>
     </div>
    
  </div>

   
   
       <Footer/>
    </>
 
    
  )
}

export default AboutUs