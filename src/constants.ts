import { CaseStudyModel } from "./models/CaseStudyModel";
import { SkillModel } from "./models/SkillModel";
import { StackModel } from "./models/StackModel";
import { TestimonialModel } from "./models/TestimonialModel";
import {  WizardStepModel } from "./models/WizardModel";

export const colors = ["perpel", "light-blue", "orange", "green"];

export const caseStudies: CaseStudyModel[] = [
  {
    image: "#",
    number: "01",
    title: "Mitjob.ai",
    description:
      "Redesign af MitJob.ai, en AI-drevet jobplatform. Fokus på bedre informationsarkitektur, et mere logisk flow og mere tydelig forklaring af AI-funktioner.",
    link: "#",
    date: "2025",
  },
  {
    image: "#",
    number: "02",
    title: "Havblink",
    description:
      "A research-driven brand website for an alcohol-free wine concept. The project combines user insights, structured information architecture, and a refined Nordic visual identity to create a clear, elegant, and fully responsive experience.",
    link: "#",
    date: "2025",
  },
  {
    image: "#",
    number: "03",
    title: "AIM4",
    description:
      "User-centered website redesign for a Pilates studio, focused on clearer information architecture, improved navigation flow, and a stronger visual identity. Designed to simplify content structure and enhance user experience across devices.",
    link: "#",
    date: "2024",
  },
];

export const skills: SkillModel[] = [
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

export const texhStacks: StackModel[] = [
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

export const steps: WizardStepModel[] = [
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

export const testimonials: TestimonialModel[] = [
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
