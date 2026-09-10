import Image from "next/image";
import Header from "./components/Header";
import FeaturedDesigns from "./components/FeaturedDesigns";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-eyebrow">Tee Luxury Couture · Fashion Studio</p>
            <h1 id="hero-title">Timeless fashion, crafted with intention.</h1>
            <p className="hero-description">
              Thoughtfully designed couture pieces for clients who value
              elegance, individuality, and exceptional detail.
            </p>
            <div className="hero-actions">
              <a className="hero-primary" href="/contact">
                Get in Touch
              </a>
              <a className="hero-secondary" href="/portfolio">
                View Portfolio <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame">
              <Image
                src="/images/hero-couture.svg"
                alt="Couture fashion silhouette for Tee Luxury Couture"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
            <p className="hero-caption">01 / Signature Collection</p>
          </div>
        </section>

        <FeaturedDesigns />
        <Services />

        <section className="page-content" aria-label="Introduction">
          <h2>Luxury fashion, thoughtfully designed.</h2>
          <p>Explore the world of Tee Luxury Couture.</p>
        </section>
      </main>
    </>
  );
}
