
import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          RAVECLUB<span>247</span>
        </div>

        <div className="nav-links">
          <a href="#discover">DISCOVER</a>
          <a href="#community">COMMUNITY</a>
          <a href="#releases">RELEASES</a>
        </div>

        <button className="join-button">
          JOIN THE CLUB ↗
        </button>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">

          <p className="eyebrow">
            <span className="live-dot"></span>
            THE UNDERGROUND NEVER SLEEPS
          </p>

          <h1>
            WE LIVE
            <br />
            FOR THE
            <br />
            <span>RHYTHM.</span>
          </h1>

          <p className="hero-description">
            A community built around electronic music,
            underground culture and the people who
            live for the sound.
          </p>

          <div className="hero-actions">
            <a href="#discover" className="primary-button">
              EXPLORE THE SOUND ↗
            </a>

            <a href="#community" className="secondary-button">
              OUR COMMUNITY
            </a>
          </div>

        </div>

        <div className="hero-footer">
          <span>EST. 2026 — ELECTRONIC MUSIC CULTURE</span>
          <span>24 HOURS. 7 DAYS. ONE FREQUENCY.</span>
        </div>
      </main>

      {/* Genres */}
      <section className="genres" id="discover">
        <p>EXPLORE YOUR FREQUENCY</p>

        <div className="genre-list">
          <span>TECHNO</span>
          <span>HOUSE</span>
          <span>PROGRESSIVE</span>
          <span>DRUM & BASS</span>
          <span>MELODIC TECHNO</span>
          <span>PSYTRANCE</span>
          <span>HARDSTYLE</span>
        </div>
      </section>

      {/* Community */}
      <section className="community" id="community">
        <p className="eyebrow">MORE THAN JUST MUSIC</p>
        <h2>
          THIS IS OUR
          <br />
          <span>CULTURE.</span>
        </h2>
        <p>
          Discover new sounds. Share your favourites.
          Connect with people who understand the music.
        </p>
      </section>

      <footer>
        <div className="logo">
          RAVECLUB<span>247</span>
        </div>
        <p>NO RULES. JUST RHYTHM.</p>
        <p>© 2026 RAVECLUB247</p>
      </footer>

    </div>
  )
}

export default App
