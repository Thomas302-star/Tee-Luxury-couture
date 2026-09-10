export default function AboutPreview() {
  return (
    <section className="about-preview" aria-labelledby="about-preview-title">
      <div className="about-preview-visual" aria-hidden="true">
        <span className="about-preview-monogram">T</span>
        <span className="about-preview-label">Tee Luxury Couture</span>
      </div>

      <div className="about-preview-copy">
        <p className="section-eyebrow">The House</p>
        <h2 id="about-preview-title">A quiet confidence in every detail.</h2>
        <p>
          Tee Luxury Couture is a fashion studio focused on refined design,
          thoughtful craftsmanship, and pieces that feel distinctly personal.
          Every creation begins with an idea and is shaped with intention.
        </p>
        <a className="about-preview-link" href="/about">
          Discover Our Story <span aria-hidden="true" className="luxury-mark" />
        </a>
      </div>
    </section>
  );
}
