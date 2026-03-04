import Header from "../components/Header";
import CaseStudyCard from "../components/CaseStudyCard";
import Skill from "../components/Skill";
import StackCard from "../components/StackCard";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import Wizard from "../components/ui/Wizard";
import {
  caseStudies,
  skills,
  steps,
  testimonials,
  texhStacks,
} from "../constants";

export default function Welcome() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section id="hero">
        {/* Badge */}
        <div>
          <span>*</span>
          <span>Available for work </span>
        </div>
        {/* Avatar */}
        <div>
          <div>
            <img src="" alt="" />
            <span>*</span>
          </div>
          <div>
            <span>Based in </span>
            <span>"flag"</span>
          </div>
        </div>
        {/* Headline */}
        <div>
          <span>Frontend Developer</span>
          <span>& UX Designer</span>
        </div>
        {/* Subheadline */}
        <p>
          Specialized in React, UX strategy, and scalable frontend architecture.
        </p>
        <div className="d-flex">
          <Button name="View My Work" rightIcon="#" />
          <Button name="Get In Touch" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="CaseStudies">
        <div>
          <div>
            <span className="section-title">SELECTED WORK</span>
            <h3>Case Studies</h3>
          </div>
          <div>
            <p className="prief">
              Selected projects showcasing my approach to design and
              development.
            </p>
          </div>
        </div>

        <div className="case-study-list">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.number} {...caseStudy} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="About">
        <div>
          <span className="section-title">ABOUT ME</span>
          <h3>Who Am I </h3>
          <p>
            I am a Multimedia Design student and expect to complete my degree in
            June 2026. Currently, I focus on UX, digital design, and frontend
            development. <br />
            Before starting my studies, I completed a 10-month web development
            bootcamp at Hack Your Future, where I built a solid technical
            foundation in React, Next.js, and full-stack development. I have
            also worked as a Full Stack Developer Intern at Dansk Socialarbejde,
            contributing to the development of an AI-driven job platform. <br />
            My strength lies in combining structure, user understanding, and
            code to build solutions that are both technically effective and
            provide a strong user experience.
          </p>
          <Button name="Download CV" rightIcon="#" />
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="TechStack">
        <span>CURRENT TECHNOLOGIES</span>
        <h3>My Stack</h3>
        <div>
          {texhStacks.map((stack) => (
            <StackCard key={stack.name} {...stack} />
          ))}
        </div>
      </section>

      {/* Carrer & Education */}
      <section id="Journy">
        <span>JOURNY</span>
        <h3>Career & Education</h3>
        <div>
          {steps.map((step) => (
            <Wizard key={step.title} {...step} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="Testimonials">
        <span>Testimonials</span>
        <h3>What People Say</h3>
        <div>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact">
        <span>CONTACT</span>
        <div>
          <span>Let's Build Something Exceptional</span>
          <ul>
            <li>
              <span>E-mail:</span>
              <a href="">Karzounmalek99@gmail.com</a>
            </li>
            <li>
              <span>Phone:</span>
              <a href="">+4581236716</a>
            </li>
            <li>
              <span>Location:</span>
              <span>Aarhus, Denmark</span>
            </li>
          </ul>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
