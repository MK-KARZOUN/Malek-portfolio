import { caseStudies, skills, steps, testimonials, texhStacks } from "../constants";

const projectImages: Record<string, string> = {
  "Mitjob.ai": "/images/Mitjob.ai-mockup.svg",
  Havblink: "/images/Havblink-mockup.svg",
  AIM4: "/images/Aim4-mockup.svg",
};

const skillIcons: Record<string, string> = {
  "UX Research": "/images/hugeicons_investigation.svg",
  "UI Design": "/images/streamline_figma.svg",
  "Frontend Dev": "/images/mingcute_code-line.svg",
  "Backend Dev": "/images/solar_database-linear.svg",
};

export default function Welcome() {
  return (
    <div className="portfolio-page">
      <header className="welcome-header">
        <a href="#hero" className="logo-wrap" aria-label="Go to top">
          <img src="/images/Logo.svg" alt="Malek logo" />
        </a>

        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <span className="hero-badge">Available For Work</span>

          <div className="hero-avatar">
            <span className="avatar-core">MK</span>
            <span className="avatar-status" aria-hidden="true" />
          </div>

          <p className="hero-location">
            Based in Aarhus <img src="/images/dansuh-flag.svg" alt="Denmark flag" />
          </p>

          <h1>
            Frontend Developer
            <span>&amp; UX Designer</span>
          </h1>

          <p className="hero-subtitle">
            Specialized in React, UX strategy, and scalable frontend architecture.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-light">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-header section-header-split">
            <div>
              <p className="section-kicker">SELECTED WORK</p>
              <h2>Case Studies</h2>
            </div>
            <p className="section-desc">
              Selected projects showcasing my approach to design and development.
            </p>
          </div>

          <div className="projects-list">
            {caseStudies.map((caseStudy, index) => (
              <article
                key={caseStudy.title}
                className={`project-card ${index % 2 === 1 ? "reverse" : ""}`}
              >
                <div className="project-visual">
                  <span className="project-year">{caseStudy.date}</span>
                  <img
                    src={projectImages[caseStudy.title] || "/images/Logo.svg"}
                    alt={`${caseStudy.title} project preview`}
                  />
                </div>

                <div className="project-copy">
                  <p className="project-number">{caseStudy.number}</p>
                  <h3>{caseStudy.title}</h3>
                  <p>{caseStudy.description}</p>
                  <a href={caseStudy.link} className="project-link">
                    View project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-intro">
            <p className="section-kicker">ABOUT</p>
            <h2>Who Am I</h2>
            <p>
              I am a Multimedia Design student and expect to complete my degree in June 2026.
              Currently, I focus on UX, digital design, and frontend development.
            </p>
            <p>
              Before my studies, I completed a 10-month web development bootcamp at Hack Your
              Future, where I built strong skills in React, Next.js, and full-stack development.
            </p>
            <a className="btn btn-light" href="#">
              Download CV
            </a>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article key={skill.name} className="skill-card">
                <img src={skillIcons[skill.name] || "/images/check.svg"} alt="" />
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-header">
            <p className="section-kicker">CURRENT TECHNOLOGIES</p>
            <h2>My Stack</h2>
          </div>

          <div className="stack-grid">
            {texhStacks.map((stack) => (
              <article key={stack.name} className="stack-card">
                <h3>{stack.name}</h3>
                <ul>
                  {stack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="journy" className="section journey-section">
          <div className="section-header">
            <p className="section-kicker">JOURNEY</p>
            <h2>Career &amp; Education</h2>
          </div>

          <div className="journey-track">
            {steps.map((step) => (
              <article key={step.title} className="journey-step">
                <div className="step-dot">✓</div>
                <p className="step-period">{step.period}</p>
                <p className="step-title">{step.title}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section testimonials-section">
          <div className="section-header">
            <p className="section-kicker">TESTIMONIALS</p>
            <h2>What People Say</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author} className="testimonial-card">
                <h3>{testimonial.author}</h3>
                <p className="testimonial-position">{testimonial.position}</p>
                <p>{testimonial.quote || "Reference available on request."}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-content">
            <p className="section-kicker">CONTACT</p>
            <h2>Let&apos;s Build Something Exceptional</h2>

            <ul>
              <li>
                <span>Email</span>
                <a href="mailto:Karzounmalek99@gmail.com">Karzounmalek99@gmail.com</a>
              </li>
              <li>
                <span>Phone</span>
                <a href="tel:+4581236716">+45 8123 6716</a>
              </li>
              <li>
                <span>Location</span>
                <p>Aarhus, Denmark</p>
              </li>
            </ul>
          </div>

          <form className="contact-form">
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" />

            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={4} />

            <button type="submit" className="btn btn-outline">
              Send
            </button>
          </form>
        </section>
      </main>

      <footer className="page-footer">© 2026 Malek&apos;s Portfolio. All rights reserved.</footer>
    </div>
  );
}
