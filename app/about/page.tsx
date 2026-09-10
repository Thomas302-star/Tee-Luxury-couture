import Header from "../components/Header";
import Footer from "../components/Footer";

const values = [
  {
    number: "01",
    title: "Craftsmanship",
    description:
      "Careful construction and considered finishing are at the heart of every piece.",
  },
  {
    number: "02",
    title: "Individuality",
    description:
      "Each design is shaped to feel personal, distinctive, and true to the client.",
  },
  {
    number: "03",
    title: "Timeless Design",
    description:
      "We create refined pieces designed to feel relevant beyond a single moment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="about-page-hero" aria-labelledby="about-page-title">
          <p className="section-eyebrow">The House</p>
          <h1 id="about-page-title">Designed with intention. Made to feel personal.</h1>
          <p>
            Tee Luxury Couture is a fashion studio creating refined pieces with
            a focus on individuality, craftsmanship, and timeless elegance.
          </p>
        </section>

        <section className="about-story" aria-labelledby="about-story-title">
          <div className="about-story-mark" aria-hidden="true">
            <span>T</span>
            <small>Est. in design</small>
          </div>
          <div className="about-story-copy">
            <p className="section-eyebrow">Our Story</p>
            <h2 id="about-story-title">Fashion that starts with an idea.</h2>
            <p>
              At Tee Luxury Couture, we believe clothing should do more than
              complete a look. It should reflect the person wearing it and the
              moment it was made for.
            </p>
            <p>
              From the first idea through design, construction, and fitting, we
              approach each piece with care. The result is couture that feels
              considered, confident, and distinctly personal.
            </p>
          </div>
        </section>

        <section className="about-values" aria-labelledby="about-values-title">
          <div className="about-values-heading">
            <div>
              <p className="section-eyebrow">Our Philosophy</p>
              <h2 id="about-values-title">What guides the work.</h2>
            </div>
            <p>
              A clear point of view, careful details, and a commitment to making
              every creation feel personal.
            </p>
          </div>

          <div className="about-values-list">
            {values.map((value) => (
              <article className="about-value" key={value.number}>
                <span>{value.number}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-page-cta" aria-labelledby="about-cta-title">
          <p className="section-eyebrow">Begin Your Journey</p>
          <h2 id="about-cta-title">Have a piece in mind?</h2>
          <p>Tell us what you are looking for and let&apos;s create something made for you.</p>
          <a href="/contact">
            Get in Touch <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
