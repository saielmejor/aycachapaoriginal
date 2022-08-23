import React from 'react'; 
import '../App.css'; 
import './HeroSection.css'

import { Link } from 'react-router-dom';

import { Button } from './Button';


function HeroSection() {
  return (
    <> 
     <div className='hero-container'>
     <br></br>
     <h1>The Best Cachapas in NYC</h1>
     <p> A Tasty Venezuelan Corn Pancake </p>
     
     <div className='hero-btns'>
     <Link to='/locations'><Button 
       className='btns'
       buttonStyle='btn--primary'
       buttonSize='btn--large'
       color='yellow'>
        Come visit us
       </Button></Link>
       
      <Link to='/about-us'><Button 
       className='btns'
       buttonStyle='btn--primary'
       color='blue'
       buttonSize='btn--large'>
         Find out more about us
       </Button></Link>
       
       <Link to='/gallery'> 
       <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          color='red'
        >See Gallery <i className="far fa-play-circle"></i>
        </Button>
       </Link>
       
     </div>
 </div>

 <div className='hero-container-story'>  
 <div className='hero-container-story-description'> 
 <img className='hero-story-image' src='/image/img1.jpeg' alt='image'></img>
 <div className='hero-brand-story'>
 <h1>Brand Story</h1>

 <br />
     <p className='hero-brand-story-para' >Cachapas (also known as Corn Pancake) originated from Venezuela and Colombia. Two neighboring countries who share similar culture and dishes. Aycachapas!  opened its door  at  the international food market Queens Night Market near the New York Hall Museum in the summer of 2021. Cachapas has become a popular dish in New York since the inception of Aycachapas. Many crave this traditional Venezuelan corn pancake due to its crunchy and soft texture, with the choice of savory fillings and melted cheese. Welcome to Aycachapas, we provide the most original flavors of Venezuela </p>
 </div>
 
   </div>


     
     

 </div>
    </>


  )
  
}

export default HeroSection