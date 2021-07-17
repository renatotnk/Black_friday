import React from 'react';
import './Footer.css';
import { Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faGift} from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';

function Footer() {
let id= 0;
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) =>{
      localStorage.setItem(id ,JSON.stringify(data.name))
      id++;
  }

  return (
    <div className='footer-container' id="contato">
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Cadastre-se para receber todas as ofertas!
        </p>
        <div className='input-areas'>
          <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <input className='footer-input' type='email'
              placeholder='email@email.com'
              {...register("name" )}
            />
            <button id='subscribe' type="submit">Vamos!</button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Redes Sociais</h2>
            <a href='https://github.com/renatotnk'>Github</a>
            <a href='https://linkedin.com/in/renato-tnk'>LinkedIn</a>
          </div>
        </div>
      </div>
        <div class='social-media-wrap'>
            <div class='footer-logo'>
            <HashLink to='#home' className='social-logo'>
              Promo Friday
              <FontAwesomeIcon className="awesomeLogo" icon={faGift}/>
            </HashLink>
          </div>
          <small class='website-rights'>Renato Tanaka © 2021</small>   
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='https://github.com/renatotnk'
              target='_blank'
              aria-label='Github'
            >
             <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://linkedin.com/in/renato-tnk'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Footer;
