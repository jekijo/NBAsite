import './App.css';


export default function App() {
  return (
      <div class='bg-dark'>
        <h1 class="text-light text-center border border-dark rounded-bottom bg-secondary">Stat Coyote</h1>
        <Tabs />
        <Welcome />
        <Footer />
      </div>
  );
}



function Tabs () {
  return (
    <div>
        <ul class="nav nav-pills nav-justified">
          <li class="nav-item">
            <a class="nav-link active bg-secondary border border-dark" href="#">Offense</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active bg-secondary border border-dark" href="#">Defense & Rebounding</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active bg-secondary border border-dark" href="#">Size & Seed</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active bg-secondary border border-dark" href="#">Player Stat Comparison</a>
          </li>
        </ul>
      </div>
  ); 
}



function Footer () {
  return (
    <div>
      <footer>
        <p class='text-white'>foot</p>
      </footer>
    </div>
  );
}



function Welcome () {
  return (
    <div>
      <hr/>
      <h4 className='text-white'>Welcome to this site</h4>
    </div>
  );
}