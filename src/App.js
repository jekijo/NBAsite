import './App.css';


export default function App() {
  return (
      <div class='bg-dark'>
        <h1 class="text-white text-center">Stat<br/>Coyote</h1>
        <hr className='color3'/><hr className='color1'/><hr className='color2'/>
        <hr class='bg-white'/>
        <Tabs />
        <Welcome />
        <Foot />
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
              aria-expanded="false">Defense & Rebounding</a>
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
              aria-expanded="false">Size & Seed</a>
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



function Welcome () {
  return (
    <div class='text-white'>
      <hr class='bg-white'/>
      <h4>Welcome to this site</h4>
      <p>This is where I will add text about the site. blah blah blah.</p>
    </div>
  );
}




function Foot() {
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
