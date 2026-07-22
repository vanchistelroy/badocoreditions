import './App.css'

import badocorLogo from './assets/logo/badocor-logo.webp'
import bookCover from './assets/books/feast-of-the-gods-en.webp'
import heroImage from './assets/hero/hero.webp'

const purchaseOptions = [
  {
    name: 'Amazon',
    format: 'Kindle Edition',
    description: 'Read the ebook on Kindle.',
    url: 'https://www.amazon.com/stores/author/B0H89JRFSD',
    className: 'store-card store-card--amazon',
  },
  {
    name: 'Etsy',
    format: 'Premium PDF',
    description: 'Download the premium PDF edition.',
    url: 'https://badocoreditions.etsy.com',
    className: 'store-card store-card--etsy',
  },
  {
    name: 'Hotmart',
    format: 'Instant Download',
    description: 'Get immediate access to the digital edition.',
    url: 'https://hotmart.com/en/marketplace/products/peru-the-feast-of-the-gods/P106473931X',
    className: 'store-card store-card--hotmart',
  },
]

const editions = [
  {
    flag: '🇺🇸',
    language: 'English',
    title: 'PERÚ: THE FEAST OF THE GODS',
  },
  {
    flag: '🇪🇸',
    language: 'Español',
    title: 'PERÚ: EL FESTÍN DE LOS DIOSES',
  },
  {
    flag: '🇧🇷',
    language: 'Português',
    title: 'PERÚ: A FESTA DOS DEUSES',
  },  
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="BADOCOR EDITIONS home">
          <img
            className="brand-logo"
            src={badocorLogo}
            alt="BADOCOR EDITIONS"
          />
        </a>

        <a className="header-button" href="#buy">
          Buy now
        </a>
      </header>

      <section
        className="hero"
        id="top"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <p className="eyebrow">A premium culinary journey through Peru</p>

          <h1>
            Discover the authentic
            <span> flavors of Peru</span>
          </h1>

          <p className="hero-description">
            Explore 100 authentic Peruvian recipes, traditional ingredients,
            cultural stories and the culinary heritage behind one of the
            world&apos;s most celebrated cuisines.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#buy">
              Choose your edition
            </a>

            <a className="button button--secondary" href="#editions">
              Available in 3 languages
            </a>
          </div>

          <ul className="hero-highlights" aria-label="Book highlights">
            <li>100 authentic recipes</li>
            <li>Three languages</li>
            <li>Kindle and premium PDF</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="book-cover-wrapper">
            <img
              className="book-cover"
              src={bookCover}
              alt="PERÚ: THE FEAST OF THE GODS book cover"
            />
          </div>
        </div>
      </section>

      <section className="why-section section">
        <div className="section-heading">
          <p className="eyebrow">More than a cookbook</p>

          <h2>Discover the stories, traditions and flavors behind every recipe</h2>

          <p>
            PERÚ: THE FEAST OF THE GODS brings together authentic recipes,
            traditional ingredients and the cultural heritage that has made
            Peruvian cuisine one of the most admired in the world.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-number">01</span>
            <h3>100 Authentic Recipes</h3>
            <p>
              Prepare iconic dishes, traditional favorites, desserts and drinks
              inspired by the diverse regions of Peru.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-number">02</span>
            <h3>Cultural Heritage</h3>
            <p>
              Learn about the ingredients, customs and culinary influences behind
              Peru&apos;s internationally celebrated cuisine.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-number">03</span>
            <h3>Clear and Practical</h3>
            <p>
              Follow accessible instructions created for home cooks who want to
              experience authentic Peruvian flavors.
            </p>
          </article>
        </div>
      </section>

      <section className="inside-section section">

        <div className="section-heading">

          <p className="eyebrow">
            Inside the Book
          </p>

          <h2>
            Everything you need to experience authentic Peruvian cuisine
          </h2>

        </div>

        <div className="feature-grid">

          <article className="feature-card">
            <span className="feature-number">🍽</span>

            <h3>Traditional Recipes</h3>

            <p>
              From Ceviche and Lomo Saltado to traditional desserts and drinks.
            </p>

          </article>

          <article className="feature-card">
            <span className="feature-number">🌎</span>

            <h3>Regional Cuisine</h3>

            <p>
              Coast, Highlands and Amazon flavors in one beautifully designed book.
            </p>

          </article>

          <article className="feature-card">
            <span className="feature-number">📖</span>

            <h3>Cultural Stories</h3>

            <p>
              Learn the traditions and history behind Peru's world-famous gastronomy.
            </p>

          </article>

        </div>

      </section>

      <section className="editions section" id="editions">
        <div className="section-heading">
          <p className="eyebrow">Available in 3 languages</p>

          <h2>Choose the edition you prefer</h2>

          <p>
            The complete culinary experience is available in English, Spanish and
            Portuguese.
          </p>
        </div>

        <div className="edition-grid">
          {editions.map((edition) => (
            <article className="edition-card" key={edition.language}>
              <span className="edition-flag" aria-hidden="true">
                {edition.flag}
              </span>

              <p>{edition.language}</p>
              <h3>{edition.title}</h3>

              <a className="edition-link" href="#buy">
                View purchase options →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="buy-section section" id="buy">
        <div className="section-heading">
          <p className="eyebrow">Get your copy today</p>

          <h2>Choose your preferred marketplace</h2>

          <p>
            Read on Kindle or download the premium PDF edition instantly through
            Etsy or Hotmart.
          </p>
        </div>

        <div className="store-grid">
          {purchaseOptions.map((option) => (
            <a
              className={option.className}
              href={option.url}
              key={option.name}
              target="_blank"
              rel="noreferrer"
            >
              <span className="store-format">{option.format}</span>

              <h3>{option.name}</h3>

              <p>{option.description}</p>

              <strong>Buy now →</strong>
            </a>
          ))}
        </div>

        <div className="purchase-note">
          <span>✓ Secure purchase</span>
          <span>✓ Instant digital access</span>
          <span>✓ Available worldwide</span>
        </div>
      </section>

      <section className="about-section section">
        <div className="about-card">
          <div>
            <p className="eyebrow">About BADOCOR EDITIONS</p>

            <h2>Digital publications created to inform, inspire and be useful</h2>

            <p>
              BADOCOR EDITIONS creates practical, accessible and carefully designed
              digital publications for readers around the world.
            </p>
          </div>

          <a className="button button--primary" href="#buy">
            Get the Book
          </a>
        </div>
      </section>

        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <img
                className="footer-logo"
                src={badocorLogo}
                alt="BADOCOR EDITIONS"
              />

              <p>
                Practical and inspiring digital publications for readers around the
                world.
              </p>
            </div>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#top">Home</a>
              <a href="#editions">Languages</a>
              <a href="#buy">Buy the Book</a>
            </nav>

            <div className="footer-contact">
              <p>Contact</p>

              <a href="mailto:badocoreditions@gmail.com">
                badocoreditions@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} BADOCOR EDITIONS. All rights reserved.
            </p>
          </div>
        </footer>
    </main>
  )
}

export default App