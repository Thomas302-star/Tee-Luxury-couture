import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const collections = [
  {
    number: "01",
    title: "The Signature Gown",
    category: "Evening Couture",
    description:
      "A refined silhouette designed around graceful movement, considered proportion, and understated presence.",
    image: "/images/featured-signature-gown.svg",
  },
  {
    number: "02",
    title: "The Modern Muse",
    category: "Contemporary Couture",
    description:
      "A modern expression of couture with clean lines, confident structure, and a distinctive point of view.",
    image: "/images/featured-modern-muse.svg",
  },
  {
    number: "03",
    title: "The Statement Suit",
    category: "Tailored Collection",
    description:
      "Sharp tailoring with a softer luxury sensibility, created for a look that feels polished and personal.",
    image: "/images/featured-statement-suit.svg",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="portfolio-page-hero" aria-labelledby="portfolio-page-title">
          <p className="section-eyebrow">Selected Work</p>
          <h1 id="portfolio-page-title">A collection of pieces made to be remembered.</h1>
          <p>
            Explore selected couture designs from Tee Luxury Couture, where
            thoughtful design meets careful craftsmanship.
          </p>
        </section>

        <section className="portfolio-collections" aria-labelledby="collections-title">
          <div className="portfolio-heading">
            <div>
              <p className="section-eyebrow">The Collections</p>
              <h2 id="collections-title">Signature pieces.</h2>
            </div>
            <p>
              Each piece reflects a balance of elegance, individuality, and
              intentional detail.
            </p>
          </div>

          <div className="portfolio-grid">
            {collections.map((collection) => (
              <article className="portfolio-card" key={collection.number}>
                <div className="portfolio-image">
                  <Image
                    src={collection.image}
                    alt={`${collection.title} from Tee Luxury Couture`}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <span className="portfolio-number">{collection.number}</span>
                </div>
                <div className="portfolio-details">
                  <p className="portfolio-category">{collection.category}</p>
                  <h3>{collection.title}</h3>
                  <p className="portfolio-description">{collection.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-page-cta" aria-labelledby="portfolio-cta-title">
          <p className="section-eyebrow">Create Your Own</p>
          <h2 id="portfolio-cta-title">Have something personal in mind?</h2>
          <p>
            Tell us about the piece you want to create and let&apos;s bring the
            idea into form.
          </p>
          <a className="portfolio-cta-button" href="/contact">
            Get in Touch <span aria-hidden="true" className="luxury-mark" />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
