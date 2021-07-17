import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import gabinete from '../../assets/gabinete.jpg';
import mobo from '../../assets/mobo.jpg';
import cadeira from '../../assets/cadeira.jpg';
import microfone from '../../assets/microfone.jpg';
import headset from '../../assets/headset.jpg';

function Cards() {
  return (
    <div className='cards' id="promocoes">
      <h1>Confira nossas ofertas!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={gabinete}
              text='Todo Monstro precisa de uma apresentação à altura...'
              label='Gabinetes'
              path='/construction'
            />
            <CardItem
              src={mobo}
              text='Aquela MOBO potente para turbinar sua máquina!'
              label='Hardware'
              path='/construction'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={cadeira}
              text='Para nunca mais ficar com a coluna doendo!'
              label='Acessórios'
              path='/construction'
            />
            <CardItem
              src={microfone}
              text='Microfones dos mais variados preços!'
              label='Periféricos'
              path='/construction'
            />
            <CardItem
              src={headset}
              text='Um Milhão de fones para você escolher!'
              label='Acessórios'
              path='/construction'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
