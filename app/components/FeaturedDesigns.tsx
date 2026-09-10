import Image from "next/image";

const designs = [
  {
    number: "01",
    name: "The Signature Gown",
    category: "Evening Couture",
    image: "/images/featured-signature-gown.svg",
  },
  {
    number: "02",
    name: "The Modern Muse",
    category: "Contemporary Couture",
    image: "/images/featured-modern-muse.svg",
  },
  {
    number: "03",
    name: "The Statement Suit",
    category: "Tailored Collection",
    image: "/images/featured-statement-suit.svg",
  },
];

export default function FeaturedDesigns() {
  return (
    <section className="featured-designs" aria-labelledby="featured-designs-title">
      <div className="featured-heading">
        <div>
          <p className="section-eyebrow">Selected Work</p>
          <h2 id="featured-designs-title">Featured Designs</h2>
        </div>
        <p className="featured-intro">
          A selection of refined pieces created with distinctive silhouettes,
          considered details, and timeless elegance.
        </p>
      </div>

      <div className="design-grid">
        {designs.map((design) => (
          <article className="design-card" key={design.number}>
            <div className="design-image">
              <Image
                src={design.image}
                alt={`${design.name} by Tee Luxury Couture`}
                fill
                sizes="(max-width: 800px) 100vw, 33vw"
              />
              <span className="design-number">{design.number}</span>
            </div>
            <div className="design-details">
              <div>
                <h3>{design.name}</h3>
                <p>{design.category}</p>
              </div>
              <span aria-hidden="true" className="design-arrow luxury-mark" />
            </div>
          </article>
        ))}
      </div>

      <a className="featured-link" href="/portfolio">
        Explore the Portfolio <span aria-hidden="true" className="luxury-mark" />
      </a>
    </section>
  );
}
