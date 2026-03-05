import { CaseStudyModel } from "./models/CaseStudyModel";
import { SkillModel } from "./models/SkillModel";
import { StackModel } from "./models/StackModel";
import { TestimonialModel } from "./models/TestimonialModel";
import { WizardStepModel } from "./models/WizardModel";

export const colors = ["perpel", "light-blue", "orange", "green"];

export const caseStudies: CaseStudyModel[] = [
  {
    image: "/images/Mitjob.ai-mockup.svg",
    number: "01",
    title: "Mitjob.ai",
    description:
      "Redesign af MitJob.ai, en AI-drevet jobplatform. Fokus på bedre informationsarkitektur, et mere logisk flow og mere tydelig forklaring af AI-funktioner.",
    link: "https://www.figma.com/proto/p33gJGa5mrAK4BdJ7aV3wG/MitJob.ai?page-id=0%3A1&node-id=11-202&viewport=4023%2C420%2C0.23&t=NFTEWf9ZGN3rUyrQ-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A581",
    date: "2025",
  },
  {
    image: "/images/Havblink-mockup.svg",
    number: "02",
    title: "Havblink",
    description:
      "A research-driven brand website for an alcohol-free wine concept. The project combines user insights, structured information architecture, and a refined Nordic visual identity to create a clear, elegant, and fully responsive experience.",
    link: "https://www.figma.com/proto/39O3gmrw2C8QVqngyM97kO/Havblink?page-id=31%3A4&node-id=31-5&viewport=144%2C338%2C0.39&t=K0GMuC6RizZw8wkL-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=39%3A688",
    date: "2025",
  },
  {
    image: "/images/Aim4-mockup.svg",
    number: "03",
    title: "AIM4",
    description:
      "User-centered website redesign for a Pilates studio, focused on clearer information architecture, improved navigation flow, and a stronger visual identity. Designed to simplify content structure and enhance user experience across devices.",
    link: "https://www.figma.com/proto/zTvOF0ZWfbWo40ZCVMzIkI/AIM4?page-id=0%3A1&node-id=287-1435&viewport=411%2C205%2C0.16&t=Sx9N46QPnnnpLHjZ-1&scaling=min-zoom&content-scaling=fixed",
    date: "2024",
  },
];

export const skills: SkillModel[] = [
  {
    icon: "/images/hugeicons_investigation.svg",
    name: "UX Research",
    description:
      "User interviews, desk research, personas, user journeys, and usability testing. I focus on understanding real user needs before designing solutions.",
  },
  {
    icon: "/images/streamline_figma.svg",
    name: "UI Design",
    description:
      "Wireframing, prototyping, visual hierarchy, and scalable design systems in Figma. I design interfaces that are clear, structured, and intuitive.",
  },
  {
    icon: "/images/mingcute_code-line.svg",
    name: "Frontend Dev",
    description:
      "Building responsive React and Next.js applications with clean architecture. I prioritize performance, accessibility, and maintainable code.",
  },
  {
    icon: "/images/solar_database-linear.svg",
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
    title: "Multimedia Design",
    image: "/images/erhversakademi-arrhus.svg",
    period: "Jan 2025 - Present",
  },
  {
    title: "Full Stack Developer intern",
    image: "/images/dansk socialarbejde.svg",
    period: "Jan 2024 - Jun 2024",
  },
  {
    title: "Web development bootcamp",
    image: "/images/hack-your-future.svg",
    period: "Oct 2022 - Jul 2023",
  },
  {
    title: "Adgangskursus til Ingenioruddannelse",
    image: "/images/aarhus uni.svg",
    period: "Jan 2021 - Jan 2022",
  },
  {
    title: "Enkeltfag",
    image: "/images/vuc.svg",
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
    quote:
      "Malek combines strong technical execution with design awareness. He is reliable in delivery and communicates clearly throughout development.",
  },
];
