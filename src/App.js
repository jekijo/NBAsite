import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Shooting from './Shooting';
import Playmaking from './Playmaking';
import Rebounding from './Rebounding';
import DefensiveStats from './DefensiveStats';
import SizeSeed from './SizeSeed';
import StatComp from './StatComp';

export default function App() {
  return (
      <div className='bg-dark text-white'>
        <Header />
          <Routes>
            <Route exact path='' element={<Home />} />
            <Route exact path='/shooting' element={<Shooting />} />
            <Route exact path='/playmaking' element={<Playmaking />} />
            <Route exact path='/rebounding' element={<Rebounding />} />
            <Route exact path='/defense' element={<DefensiveStats />} />
            <Route exact path='/sizeseed' element={<SizeSeed />} />
            <Route exact path='/statcomp' element={<StatComp />} />
          </Routes>
        <Footer />
      </div>
  );
}



function Tabs () {
  return (
    <div class='dropdown'>
        <ul class="nav nav-pills nav-justified">
          <li class="nav-item dropdown">
            <a class="text-white nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white" to="/statcomp">Player Stat Comparison</Link>
          </li>
        </ul>
    </div>
  ); 
} 


function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-secondary">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2020
          </p>
        </div>
      </footer>
    </div>
  );
}


function Header() {
  return (
    <div class='bg-dark'>
      <h1 class="text-white text-center">Stat<br/>Coyote</h1>
        <hr className='color3'/><hr className='color1'/><hr className='color2'/>
        <hr class='bg-white'/>
        <Tabs />
    </div>
  )
}