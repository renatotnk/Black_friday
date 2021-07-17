import React from 'react';
import '../../App.css';
import {ButtonComp} from '../ButtonComp/ButtonComp.js';
import './HeaderComp.css';
import Typed from "react-typed"
import logo from "../../assets/friday_logo2.webp"

function HeroSection() {
  return (
    <div className='hero-container' id='home'>
      <img src={logo} alt=""/>
      <Typed 
        className="typed-text" 
        strings={["Promoções", "Liquidação", "O gerente ficou Maluco!"]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
      <div className='hero-btns'>
        <ButtonComp
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Cadastre-se 
        </ButtonComp>
      </div>
    </div>
  );
}

export default HeroSection;