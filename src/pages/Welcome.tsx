import { useState } from "react";
import Header from "../components/Header";
import CaseStudyCard from "../components/CaseStudyCard";
import Skill from "../components/Skill";
import StackCard from "../components/StackCard";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WizardStep from "../components/ui/WizardStep";

import {
  caseStudies,
  skills,
  steps,
  testimonials,
  texhStacks,
} from "../constants";

export default function Welcome() {
  const [showDevPopup, setShowDevPopup] = useState(true);

  return (
    <div className="portfolio-page">
      {showDevPopup && (
        <div className="dev-popup-overlay" role="dialog" aria-modal="true">
          <div className="dev-popup">
            <span className="dev-popup-kicker">Notice</span>
            <h3>Site under development</h3>
            <p>
              This portfolio is still in progress. Case study detail pages will
              be added soon.
            </p>
            <button type="button" onClick={() => setShowDevPopup(false)}>
              Got it
            </button>
          </div>
        </div>
      )}

      <Header />

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            <span>Available for work</span>
          </div>

          <div className="hero-avatar">
            <img src="/images/malek-img.svg" alt="Malek portrait" />
          </div>

          <p className="hero-location">
            Based in
            <img src="/images/danish-flag.svg" alt="Denmark flag" />
          </p>

          <h1>
            Frontend Developer
            <span>&amp; UX Designer</span>
          </h1>

          <p className="hero-subtitle">
            Specialized in React, UX strategy, and scalable frontend
            architecture.
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
              Selected projects showcasing my approach to design and
              development.
            </p>
          </div>

          <div className="case-study-list">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.number}
                className={`case-study-row ${index % 2 === 1 ? "reverse" : ""}`}
              >
                <CaseStudyCard {...caseStudy} />
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-intro">
            <div className="section-header">
              <p className="section-kicker">ABOUT</p>
              <h2>Who Am I</h2>
            </div>

            <p>
              I am a Multimedia Design student and expect to complete my degree
              in June 2026. Currently, I focus on UX, digital design, and
              frontend development.
            </p>
            <p>
              Before starting my studies, I completed a 10-month web development
              bootcamp at Hack Your Future, where I built a solid technical
              foundation in React, Next.js, and full-stack development. I have
              also worked as a Full Stack Developer Intern at Dansk
              Socialarbejde, where I contributed to the development of an
              AI-driven job platform.
            </p>
            <p>
              My strength lies in combining structure, user understanding, and
              code to build solutions that are both technically effective and
              provide a strong user experience.
            </p>
            <a className="btn btn-light" href="#">
              Download CV
            </a>
          </div>

          <div className="skills-list">
            {skills.map((skill) => (
              <Skill key={skill.name} {...skill} />
            ))}
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-header">
            <p className="section-kicker">CURRENT TECHNOLOGIES</p>
            <h2>My Stack</h2>
          </div>

          <div className="stacks-list">
            {texhStacks.map((stack) => (
              <StackCard key={stack.name} {...stack} />
            ))}
          </div>
        </section>

        <section id="journy" className="section journey-section">
          <div className="section-header">
            <p className="section-kicker">JOURNEY</p>
            <h2>Career &amp; Education</h2>
          </div>

          <div className="wizard">
            {steps.map((step) => (
              <WizardStep key={step.title} {...step} />
            ))}
          </div>
        </section>

        <section id="testimonials" className="section testimonials-section">
          <div className="section-header">
            <p className="section-kicker">TESTIMONIALS</p>
            <h2>What People Say</h2>
          </div>

          <div className="testimonials-list">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
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
                <a href="mailto:Karzounmalek99@gmail.com">
                  Karzounmalek99@gmail.com
                </a>
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

          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
