import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';
import Shooting from './Shooting';
import Playmaking from './Playmaking';
import Rebounding from './Rebounding';
import DefensiveStats from './DefensiveStats';
import SizeSeed from './SizeSeed';


export default function App() {
  return (
      <div class='bg-dark'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/shooting' component={Shooting} />
        <Route exact path='/playmaking' component={Playmaking} />
        <Route exact path='/rebounding' component={Rebounding} />
        <Route exact path='/defense' component={DefensiveStats} />
        <Route exact path='/sizeseed' component={SizeSeed} />
        <Footer />
      </div>
  );
}



function Tabs () {
  return (
    <div>
        <ul class="nav nav-pills nav-justified">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" 
            data-toggle="dropdown" 
            href="#" role="button" 
            aria-haspopup="true" 
            aria-expanded="false">Offense</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" 
              data-toggle="dropdown" 
              href="#" role="button" 
              aria-haspopup="true" 
              aria-expanded="false">Defense/Rebounding</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" 
              data-toggle="dropdown" 
              href="#" role="button" 
              aria-haspopup="true" 
              aria-expanded="false">Size/Seed</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Player Stat Comparison</a>
          </li>
        </ul>
      </div>
  ); 
}


function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
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