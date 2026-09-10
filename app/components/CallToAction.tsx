export default function CallToAction() {
  return (
    <section className="call-to-action" aria-labelledby="cta-title">
      <p className="section-eyebrow">Begin Your Journey</p>
      <h2 id="cta-title">Let&apos;s create something made for you.</h2>
      <p>
        Have a vision, an occasion, or a piece in mind? Tell us what you are
        looking for and let&apos;s bring it to life with intention.
      </p>
      <a className="cta-button" href="/contact">
        Get in Touch <span aria-hidden="true" className="luxury-mark" />
      </a>
    </section>
  );
}
