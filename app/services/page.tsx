import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    number: "01",
    title: "Custom Couture",
    description:
      "Bespoke pieces created around your vision, occasion, measurements, and personal style. From the first idea to the final fitting, the focus stays on making the piece feel distinctly yours.",
    details: ["Concept & consultation", "Bespoke design development", "Fittings & final finishing"],
  },
  {
    number: "02",
    title: "Fashion Design",
    description:
      "Thoughtful design development for distinctive garments, balancing strong silhouettes, refined details, and a clear creative direction.",
    details: ["Design direction", "Garment development", "Detail & finish refinement"],
  },
  {
    number: "03",
    title: "Alterations & Fittings",
    description:
      "Careful adjustments that refine the fit and finish of an existing piece, with attention to proportion, comfort, and the way the garment moves.",
    details: ["Fit assessment", "Precision alterations", "Final fitting"],
  },
];

const process = [
  ["01", "Consultation", "We begin with your idea, occasion, preferences, and the details that matter to you."],
  ["02", "Design", "Your direction is shaped into a considered garment concept with a clear visual identity."],
  ["03", "Fitting", "The piece is refined through fitting and adjustments so the final result feels personal."],
  ["04", "Final Finish", "Every detail is reviewed before the garment is ready for you."],
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="services-page-hero">
          <p className="section-eyebrow">What We Do</p>
          <h1>Crafted around your vision, from first idea to final finish.</h1>
          <p>
            Couture and fashion services for clients who value considered design,
            thoughtful craftsmanship, and a personal approach to every piece.
          </p>
        </section>

        <section className="services-page-list" aria-labelledby="services-page-title">
          <div className="services-page-heading">
            <div>
              <p className="section-eyebrow">Our Services</p>
              <h2 id="services-page-title">Made with intention.</h2>
            </div>
          </div>

          <div className="services-page-items">
            {services.map((service) => (
              <article className="services-page-item" key={service.number}>
                <span className="services-page-number">{service.number}</span>
                <div className="services-page-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <span className="services-page-mark" aria-hidden="true">
                  <span className="luxury-mark" />
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="services-process" aria-labelledby="process-title">
          <div className="services-process-heading">
            <p className="section-eyebrow">The Experience</p>
            <h2 id="process-title">A considered process.</h2>
            <p>
              Each project is approached with clarity and care, keeping the
              experience personal from consultation through completion.
            </p>
          </div>
          <div className="services-process-list">
            {process.map(([number, title, description]) => (
              <article className="services-process-item" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-page-cta">
          <p className="section-eyebrow">Start Your Project</p>
          <h2>Have a piece in mind?</h2>
          <p>
            Tell us what you are looking to create and let&apos;s begin with a conversation.
          </p>
          <Link className="cta-button" href="/contact">
            Get in Touch <span className="luxury-mark" aria-hidden="true" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
