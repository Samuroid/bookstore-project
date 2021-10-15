import logo from './logo.png';
import twitterLogo from './twitter-logo-68x60.png';
import fbLogo from './fb-logo-60x60.png';
import igLogo from './ig-logo-60x60.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="branding">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>The Book store</h1>
      </div>
      <div class="social-icons">
        <img src={twitterLogo} className="social-icon" alt="Twitter logo" />
        <img src={fbLogo} className="social-icon" alt="Facebook logo" />
        <img src={igLogo} className="social-icon" alt="Instagram logo" />
      </div>
      </header>

      <nav>
        <label for="hamicon">&#9776;</label>
        <input type="checkbox" id="hamicon" />

        <div id="navitems">
          <a href="/home" alt="home link">Home</a>
          <a href="/books" alt="home link">Books</a>
          <a href="/magazines" alt="home link">Magazines</a>
          <a href="/ebooks" alt="home link">E-Books</a>
          <a href="/account" alt="home link">Account</a>
        </div>
      </nav>

      <main>

      </main>
    </div>
  );
}

export default App;
