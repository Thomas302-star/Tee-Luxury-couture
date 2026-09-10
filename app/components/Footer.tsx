const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            Tee Luxury Couture
          </a>
          <p>
            Thoughtfully designed couture for clients who value elegance,
            individuality, and exceptional detail.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tee Luxury Couture</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
