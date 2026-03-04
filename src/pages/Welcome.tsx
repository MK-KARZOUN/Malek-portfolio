import Header from "../components/Header";
import CaseStudyCard from "../components/CaseStudyCard";
import Skill from "../components/Skill";
import StackCard from "../components/StackCard";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";

import { CaseStudyModel } from "../models/CaseStudyModel";
import { SkillModel } from "../models/SkillModel";
import { StackModel } from "../models/StackModel";
import { WizardStep } from "../models/WizardModel";
import { TestimonialModel } from "../models/TestimonialModel";
import Wizard from "../components/ui/Wizard";

const caseStudies: CaseStudyModel[] = [
  {
    image: "#",
    number: "01",
    title: "Mitjob.ai",
    description:
      "Redesign af MitJob.ai, en AI-drevet jobplatform. Fokus på bedre informationsarkitektur, et mere logisk flow og mere tydelig forklaring af AI-funktioner.",
    link: "#",
  },
  {
    image: "#",
    number: "02",
    title: "Havblink",
    description:
      "A research-driven brand website for an alcohol-free wine concept. The project combines user insights, structured information architecture, and a refined Nordic visual identity to create a clear, elegant, and fully responsive experience.",
    link: "#",
  },
  {
    image: "#",
    number: "03",
    title: "AIM4",
    description:
      "User-centered website redesign for a Pilates studio, focused on clearer information architecture, improved navigation flow, and a stronger visual identity. Designed to simplify content structure and enhance user experience across devices.",
    link: "#",
  },
];

const skills: SkillModel[] = [
  {
    icon: "#",
    name: "UX Research",
    description:
      "User interviews, desk research, personas, user journeys, and usability testing. I focus on understanding real user needs before designing solutions.",
  },
  {
    icon: "#",
    name: "UI Design",
    description:
      "Wireframing, prototyping, visual hierarchy, and scalable design systems in Figma. I design interfaces that are clear, structured, and intuitive.",
  },
  {
    icon: "#",
    name: "Frontend Dev",
    description:
      "Building responsive React and Next.js applications with clean architecture. I prioritize performance, accessibility, and maintainable code.",
  },
  {
    icon: "#",
    name: "Backend Dev",
    description:
      "Building APIs, managing data flow, and structuring databases to ensure performance, scalability, and reliable user experiences.",
  },
];

const texhStacks: StackModel[] = [
  {
    name: "DESIGN",
    items: ["Figma", "After Effects", "Photoshop", "Canva"],
  },
  {
    name: "FRONTEND",
    items: ["HTML & CSS", "React", "Next.js", "JS / TS"],
  },
  {
    name: "BACKEND",
    items: ["Node.js", "MySQL", "MongoDB", "Prisma"],
  },
  {
    name: "TOOLS",
    items: ["Figma", "Github", "VsCode", "Postman"],
  },
];

const steps: WizardStep[] = [
  {
    title: "Multimedia Design ",
    image: "#",
    period: "Jan 2025 - Present",
  },
  {
    title: "Full Stack Developer intern",
    image: "#",
    period: "Jan 2024 - Jun 2024",
  },
  {
    title: "Web development bootcamp",
    image: "#",
    period: "Oct 2022 - Jul 2023",
  },
  {
    title: "Adgangskursus til Ingeniøruddannelse",
    image: "#",
    period: "Jan 2021 - Jan 2022",
  },
  {
    title: "Enkeltfag",
    image: "#",
    period: "2018 - 2021",
  },
];

const testimonials: TestimonialModel[] = [
  {
    author: "Kristian Buch Larsen",
    position: "CEO Lamotech Solutions | Freelance Senior developer",
    quote:
      "Malek contributed to the development of a job portal platform using React, Next.js, MySQL, and OpenAI. He adapts quickly, works independently, and consistently adds value through strong initiative and technical capability.",
  },
  {
    author: "Maher K",
    position: "Software Engineer / Fullstack Developer",
    quote: "",
  },
];

export default function Welcome() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section>
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
        <div>
          <Button name="View My Work" rightIcon="#" />
          <Button name="Get In Touch" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="CaseStudies">
        <div>
          <span>SELECTED WORK</span>
          <h3>Case Studies</h3>
        </div>
        <div>
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.number} {...caseStudy} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="About">
        <div>
          <span>ABOUT ME</span>
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
        <div>
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
