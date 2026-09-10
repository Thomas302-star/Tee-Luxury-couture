import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactDetails = [
  {
    number: "01",
    title: "Start a Conversation",
    text: "Tell us about the piece you have in mind, your occasion, and the kind of direction you are looking for.",
  },
  {
    number: "02",
    title: "Share Your Details",
    text: "Include the details that will help us understand your project and how we can best work with you.",
  },
  {
    number: "03",
    title: "Plan the Next Step",
    text: "We can discuss the design direction, fittings, timing, and the next stage for your project.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="contact-page-hero">
          <p className="section-eyebrow">Get in Touch</p>
          <h1>Let&apos;s create something made for you.</h1>
          <p>
            Have a design in mind or want to explore a custom piece? Start with a
            conversation and tell us what you would like to create.
          </p>
        </section>

        <section className="contact-page-content" aria-labelledby="contact-details-title">
          <div className="contact-page-intro">
            <p className="section-eyebrow">Your Project</p>
            <h2 id="contact-details-title">Begin with your vision.</h2>
            <p>
              Every project begins by understanding what you want, what the piece is
              for, and the details that will make it feel personal.
            </p>
          </div>

          <div className="contact-page-details">
            {contactDetails.map((detail) => (
              <article className="contact-page-detail" key={detail.number}>
                <span>{detail.number}</span>
                <div>
                  <h3>{detail.title}</h3>
                  <p>{detail.text}</p>
                </div>
                <span className="contact-page-mark" aria-hidden="true">
                  <span className="luxury-mark" />
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-page-action">
          <p className="section-eyebrow">Ready When You Are</p>
          <h2>Tell us what you have in mind.</h2>
          <p>
            For enquiries and project conversations, reach out directly and we&apos;ll
            take it from there.
          </p>
          <a className="cta-button" href="mailto:hello@teeluxurycouture.com">
            Email Us <span className="luxury-mark" aria-hidden="true" />
          </a>
          <p className="contact-email">hello@teeluxurycouture.com</p>
        </section>

        <section className="contact-page-note">
          <p className="section-eyebrow">A Personal Approach</p>
          <p>
            Whether you are developing a new design or refining an existing piece,
            the goal is simple: thoughtful fashion with a finish that feels distinctly yours.
          </p>
          <Link className="contact-page-back" href="/services">
            Explore Our Services <span className="luxury-mark" aria-hidden="true" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
