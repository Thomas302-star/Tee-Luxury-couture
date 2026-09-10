import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactDetails = [
  { number: "01", title: "Start a Conversation", text: "Tell us about the piece you have in mind, your occasion, and the kind of direction you are looking for." },
  { number: "02", title: "Share Your Details", text: "Include the details that will help us understand your project and how we can best work with you." },
  { number: "03", title: "Plan the Next Step", text: "We can discuss the design direction, fittings, timing, and the next stage for your project." },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="contact-page-hero">
          <p className="section-eyebrow">Get in Touch</p>
          <h1>Let&apos;s create something made for you.</h1>
          <p>Have a design in mind or want to explore a custom piece? Start with a conversation and tell us what you would like to create.</p>
        </section>

        <section className="contact-page-content" aria-labelledby="contact-details-title">
          <div className="contact-page-intro">
            <p className="section-eyebrow">Your Project</p>
            <h2 id="contact-details-title">Begin with your vision.</h2>
            <p>Every project begins by understanding what you want, what the piece is for, and the details that will make it feel personal.</p>
          </div>
          <div className="contact-page-details">
            {contactDetails.map((detail) => (
              <article className="contact-page-detail" key={detail.number}>
                <span>{detail.number}</span>
                <div><h3>{detail.title}</h3><p>{detail.text}</p></div>
                <span className="contact-page-mark" aria-hidden="true"><span className="luxury-mark" /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-page-action" id="enquiry-form">
          <p className="section-eyebrow">Start Your Enquiry</p>
          <h2>Tell us what you have in mind.</h2>
          <p>Share a few details about your project and we can take the conversation from there.</p>
          <form className="contact-form" action="#" method="post">
            <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>What are you looking for?<textarea name="message" rows={6} placeholder="Tell us about your piece, occasion, or design idea." required /></label>
            <button className="cta-button contact-submit" type="submit">Send Enquiry <span className="luxury-mark" aria-hidden="true" /></button>
          </form>
        </section>

        <section className="contact-page-note">
          <p className="section-eyebrow">A Personal Approach</p>
          <p>Whether you are developing a new design or refining an existing piece, the goal is simple: thoughtful fashion with a finish that feels distinctly yours.</p>
          <Link className="contact-page-back" href="/services">Explore Our Services <span className="luxury-mark" aria-hidden="true" /></Link>
        </section>
      </main>
      <Footer />
      <style>{`
        .contact-page-hero,.contact-page-content,.contact-page-note{width:min(1200px,calc(100% - 40px));margin:0 auto}
        .contact-page-hero{padding:110px 0 120px;border-bottom:1px solid var(--border)}
        .contact-page-hero h1{max-width:850px;margin:0;color:var(--forest);font-family:Georgia,"Times New Roman",serif;font-size:clamp(48px,7vw,82px);font-weight:400;letter-spacing:-.04em;line-height:.98}
        .contact-page-hero>p:last-child{max-width:570px;margin:30px 0 0;color:var(--muted);font-size:16px;line-height:1.8}
        .contact-page-content{padding:110px 0 120px;display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(56px,8vw,120px)}
        .contact-page-intro h2,.contact-page-action h2{margin:0;color:var(--forest);font-family:Georgia,"Times New Roman",serif;font-size:clamp(42px,5vw,64px);font-weight:400;letter-spacing:-.03em;line-height:1}
        .contact-page-intro>p:last-child{max-width:480px;margin:28px 0 0;color:var(--muted);font-size:15px;line-height:1.85}
        .contact-page-details{border-top:1px solid var(--border)}
        .contact-page-detail{display:grid;grid-template-columns:56px minmax(0,1fr) 24px;align-items:start;gap:24px;padding:30px 0;border-bottom:1px solid var(--border)}
        .contact-page-detail>span:first-child{padding-top:5px;color:var(--ochre);font-size:11px;font-weight:700;letter-spacing:.12em}
        .contact-page-detail h3{margin:0;color:var(--forest);font-family:Georgia,"Times New Roman",serif;font-size:30px;font-weight:400}
        .contact-page-detail p{max-width:560px;margin:9px 0 0;color:var(--muted);font-size:14px;line-height:1.75}
        .contact-page-mark{justify-self:end;color:var(--terracotta)}
        .contact-page-action{width:min(1200px,calc(100% - 40px));margin:0 auto;padding:110px 40px 120px;border-top:1px solid var(--border);text-align:center}
        .contact-page-action>p:not(.section-eyebrow){max-width:540px;margin:24px auto 0;color:var(--muted);font-size:15px;line-height:1.8}
        .contact-form{max-width:650px;margin:46px auto 0;display:grid;gap:18px;text-align:left}
        .contact-form label{display:grid;gap:8px;color:var(--forest);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
        .contact-form input,.contact-form textarea{width:100%;border:1px solid var(--border);border-radius:0;background:var(--cream);color:var(--foreground);padding:14px 15px;font:inherit;font-size:14px;letter-spacing:0;text-transform:none;outline:none}
        .contact-form input:focus,.contact-form textarea:focus{border-color:var(--forest)}
        .contact-form textarea{resize:vertical;min-height:150px;line-height:1.6}
        .contact-submit{border:0;justify-self:start;cursor:pointer}
        .contact-page-note{padding:90px 0 120px;border-top:1px solid var(--border);text-align:center}
        .contact-page-note>p:not(.section-eyebrow){max-width:620px;margin:0 auto;color:var(--muted);font-size:15px;line-height:1.85}
        .contact-page-back{display:inline-flex;align-items:center;gap:14px;margin-top:30px;padding-bottom:7px;color:var(--forest);border-bottom:1px solid var(--ochre);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
        @media(max-width:800px){.contact-page-hero{padding:80px 0 90px}.contact-page-content{padding:80px 0 90px;grid-template-columns:1fr;gap:52px}.contact-page-action{padding:80px 0 90px}.contact-page-note{padding:70px 0 90px}}
        @media(max-width:600px){.contact-page-detail{grid-template-columns:42px minmax(0,1fr);gap:16px}.contact-page-mark{display:none}.contact-page-detail h3{font-size:25px}.contact-page-action{width:min(calc(100% - 40px),1200px)}.contact-submit{width:100%;justify-content:center}}
      `}</style>
    </>
  );
}
