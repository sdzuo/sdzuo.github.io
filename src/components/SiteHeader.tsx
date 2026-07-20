import { useState } from "react";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#top" aria-label="Shamil Auwal, back to top">
          SA<span aria-hidden="true">.</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">
            {isOpen ? "Close" : "Open"} navigation
          </span>
          <span aria-hidden="true">Menu</span>
        </button>
        <nav
          id="primary-navigation"
          className={`primary-nav ${isOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
