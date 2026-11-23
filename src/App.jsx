
import { useState, useEffect } from 'react'
import './App.css'

import exp1 from './assets/images/experience/exp1.jpeg'
import exp2 from './assets/images/experience/exp2.jpeg'
import exp3 from './assets/images/experience/exp3.jpeg'
import exp4 from './assets/images/experience/exp4.jpeg'
import exp5 from './assets/images/experience/exp5.jpeg'

import image1 from './assets/images/hero/image1.jpeg'
import image2 from './assets/images/hero/image2.jpeg'
import image3 from './assets/images/hero/image3.jpg'
import image4 from './assets/images/hero/image4.jpeg'

const heroImages = [image1, image2, image3, image4]

const experienceSlides = [
  {
    image: exp1,
    quote: "WE DON'T FOLLOW THE BEAT. WE BECOME IT.",
    subtitle: "FEEL THE MUSIC. LIVE THE MOMENT.",
  },
  {
    image: exp2,
    quote: "LOST IN THE MUSIC. FOUND IN THE MOMENT.",
    subtitle: "WHERE EVERY BEAT TELLS A STORY.",
  },
  {
    image: exp3,
    quote: "STRANGERS BY DAY. FAMILY BY NIGHT.",
    subtitle: "A COMMUNITY UNITED BY SOUND.",
  },
  {
    image: exp4,
    quote: "ONE SOUND. A MILLION CONNECTIONS.",
    subtitle: "MORE THAN MUSIC. IT'S A MOVEMENT.",
  },
  {
    image: exp5,
    quote: "LIVE LOUD. FEEL DEEP. RAVE FOREVER.",
    subtitle: "THIS IS THE RAVECLUB247 EXPERIENCE.",
  },
]

function ExperienceSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((previous) =>
        (previous + 1) % experienceSlides.length
      )
    }, 5500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="experience" id="experience">

      <div className="experience-background">
        {experienceSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`experience-slide ${
              activeSlide === index ? 'active' : ''
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
        ))}
      </div>

      <div className="experience-overlay"></div>

      <div className="experience-content">
        <p className="eyebrow">
          THE RAVECLUB247 EXPERIENCE
        </p>

        <h2 key={activeSlide}>
          {experienceSlides[activeSlide].quote}
        </h2>

        <p className="experience-subtitle">
          {experienceSlides[activeSlide].subtitle}
        </p>

        <div className="experience-indicator">
          <span>
            {String(activeSlide + 1).padStart(2, '0')}
          </span>
          <span className="indicator-line"></span>
          <span>
            {String(experienceSlides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

    </section>
  )
}

function App() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) =>
        (previousImage + 1) % heroImages.length
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

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

        {/* Rotating Background */}
        <div className="hero-background">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`hero-slide ${
                currentImage === index ? 'active' : ''
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

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


      {/* Experience */}
      <ExperienceSection />      

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
