import React from 'react';
import '../../App.css';
import Cards from '../Cards/Cards';
import HeaderComp from "../HeaderComp/HeaderComp.js";
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <HeaderComp />
      <Cards />
      <Footer/>
    </>
  );
}

export default Home;