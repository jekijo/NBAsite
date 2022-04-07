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
            <Link class="nav-link text-white" to="/defense">Defense and Rebounds</Link>
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
      <hr className='color4'/><hr className='color5'/><hr className='color6'/>
      <footer class="py-5 bg-secondary">
        <div class="container text-center">
          <h5>Socials:</h5>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <a href="https://www.linkedin.com/in/jeffery-jones-a7404b214/" class="fa fa-linkedin"> </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://github.com/jekijo" class="fa fa-github text-center"> </a>
          <p><br/>123jkjones@gmail.com</p>
          <hr/>
          <p class="m-0 text-center text-white">
            Copyright &copy; I don't have a copyright
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
          <Link class="text-white text-center nav-link" to='/'><h1 class='fw-bold'>Stat<br/>Coyote</h1></Link>
        </li>
      </ul>
        <hr className='color3'/><hr className='color1'/><hr className='color2'/>
        <Tabs />
    </div>
  )
}