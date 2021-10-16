import logo from './logo.png';
import twitterLogo from './twitter-logo-68x60.png';
import fbLogo from './fb-logo-60x60.png';
import igLogo from './ig-logo-60x60.png';
import './App.css';
import Storefront from './components/Storefront.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="App">
      <header className="App-header">
      <div className="branding">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>The Book store</h1>
      </div>
      <div className="social-icons">
        <img src={twitterLogo} className="social-icon" alt="Twitter logo" />
        <img src={fbLogo} className="social-icon" alt="Facebook logo" />
        <img src={igLogo} className="social-icon" alt="Instagram logo" />
      </div>
      </header>

      <nav>
        <label htmlFor="hamicon">&#9776;</label>
        <input type="checkbox" id="hamicon" />

        <div id="navitems">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <a href="/" alt="Homepage link">Magazines</a>
          <a href="/books" alt="Homepage link">E-Books</a>
          <a href="/" alt="Homepage link">Account</a>
        </div>
      </nav>
    </div>
  )
};

const Homepage = () => {
  return(
    <div>
    <Header />
      <main>
        <section>
        <p>
          Welcome to your local book store online.
        </p>
        </section>
      </main>
    </div>
  )
};

const Bookstore = () => {
  return(
    <div>
    <Header />
      <Storefront />
    </div>
  )
};

export { Header, Homepage, Bookstore };
