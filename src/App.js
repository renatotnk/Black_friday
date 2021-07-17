import React from 'react';
import NavbarComp from './components/Navbar/NavbarComp.js';
import './App.css';
import Home from './components/pages/Home';
import Construction from './components/pages/Construction.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div id="home">
      <Router>
        <NavbarComp />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/construction' component={Construction}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;