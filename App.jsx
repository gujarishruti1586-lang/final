import { useState } from 'react';

const links = ['Home', 'About', 'Services', 'Contact'];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="page-shell">
      <nav className={`navbar ${isOpen ? 'open' : ''}`} aria-label="Main navigation">
        <a className="brand" href="#home">
          <span className="brand-icon">N</span>
          <span className="brand-text">Northstar</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a className="create-account" href="#account" onClick={() => setIsOpen(false)}>
            Create Account
          </a>
        </div>
      </nav>

      <main className="hero">
        <p className="eyebrow">Responsive navigation demo</p>
        <h1>Clean navigation for every screen size.</h1>
        <p className="hero-copy">
          This navbar shifts from a full desktop bar to a tablet strip and finally to a mobile overlay with centered items.
        </p>
      </main>
    </div>
  );
}

export default App;
