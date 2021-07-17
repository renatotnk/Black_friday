import React, { useState, useEffect } from 'react';
import {ButtonComp} from '../ButtonComp/ButtonComp.js';
import {HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons";

function NavbarComp() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    } else { 
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);


  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <Link smooth to='#home' className='navbar-logo' onClick={closeMobileMenu}>
            Promo Friday
            <FontAwesomeIcon className="awesomeLogo" icon={faGift}/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link smooth
                to='#promocoes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Promoções
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth
                to='#contato'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contato
              </Link>
            </li>

            <li>
              <Link smooth
                to='#contato'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Newsletter
              </Link>
            </li>
          </ul>
          {button && <ButtonComp buttonStyle='btn--outline'>Cadastre-se</ButtonComp>}
        </div>
      </nav>
    </>
  );
}

export default NavbarComp;
