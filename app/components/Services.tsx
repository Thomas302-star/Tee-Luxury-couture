const services = [
  {
    number: "01",
    title: "Custom Couture",
    description:
      "Bespoke garments designed around your vision, occasion, and personal style.",
  },
  {
    number: "02",
    title: "Fashion Design",
    description:
      "Thoughtful design development for distinctive pieces with a refined finish.",
  },
  {
    number: "03",
    title: "Alterations & Fittings",
    description:
      "Careful fitting and finishing to help every piece feel considered and comfortable.",
  },
];

export default function Services() {
  return (
    <section className="services" aria-labelledby="services-title">
      <div className="services-heading">
        <div>
          <p className="section-eyebrow">What We Do</p>
          <h2 id="services-title">Our Services</h2>
        </div>
        <p className="services-intro">
          From first concept to final fitting, every detail is approached with
          care, creativity, and a commitment to timeless design.
        </p>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <article className="service-item" key={service.number}>
            <span className="service-number">{service.number}</span>
            <div className="service-copy">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <span className="service-arrow" aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </div>

      <a className="services-link" href="/services">
        View All Services <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
