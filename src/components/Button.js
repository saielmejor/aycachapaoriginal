import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom';
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

//this will export Button with these properties 
export const Button=({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
})=>{ 
    //check button style
    const checkButtonStyle=STYLES.includes(buttonStyle)? buttonStyle :STYLES[0]; 

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
     
        <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} onClick={onClick} type={type}>
            {children}
        </button>
       

    )
    
}