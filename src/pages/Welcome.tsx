import Header from "../components/Header";
import CaseStudyCard from "../components/CaseStudyCard";
import Skill from "../components/Skill";
import StackCard from "../components/StackCard";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import { CaseStudyModel } from "../models/CaseStudyModel";

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
          <Button name="View My Work" />
          <Button name="Get In Touch" />
        </div>
      </section>
      {/* Projects Section */}
      <section>
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
      <Footer />
    </div>
  );
}
