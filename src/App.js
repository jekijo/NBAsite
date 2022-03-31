import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Offense from './Offense';
import Defense from './Defense';
import SizeSeed from './SizeSeed';
import StatComp from './StatComp';

export default function App() {
  return (
      <div className='bg-dark text-white'>
        <Header />
          <Routes>
            <Route exact path='' element={<Home />} />
            <Route exact path='/offense' element={<Offense />} />
            <Route exact path='/defense' element={<Defense />} />
            <Route exact path='/sizeseed' element={<SizeSeed />} />
            <Route exact path='/statcomp' element={<StatComp />} />
          </Routes>
        <Footer />
      </div>
  );
}



function Tabs () {
  return (
    <div>
        <ul class="nav nav-tabs nav-justified">
        <li class="nav-item">
            <Link class="nav-link text-white" to="/offense">Offense</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white" to="/defense">Defense</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white" to="/sizeseed">Size and Seed</Link>
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
      <ul class='nav nav-pill nav-justified'>
        <li class='nav-item'>
          <Link class="text-white text-center nav-link" to='/'><h1>Stat<br/>Coyote</h1></Link>
        </li>
      </ul>
        <hr className='color3'/><hr className='color1'/><hr className='color2'/>
        <hr class='bg-white'/>
        <Tabs />
    </div>
  )
}