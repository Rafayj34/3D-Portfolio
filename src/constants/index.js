import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "SQL Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Research Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: mobile,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Self-employed",
    company_name: "Self",
    icon: tesla,
    iconBg: "#383E56",
    date: "Mar 2019 - Feb 2020",
    points: [
      "Working on different freelancing projects",
      "Learnt web development",
      "SQL database creation and querying projects",
    ],
  },
  {
    title: "Research Analyst",
    company_name: "Scripters Hub",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2020 - Dec 2022",
    points: [
      "My primary skill is to analyse businesses and provide business management, marketing, and planning reports which helps to help the businesses",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "I have skills for online research and can provide recommendations for strategies and management with reference to several research conducted and published online on library databases like Google scholar and Springer journal articles",
      "Participating in literature reviews and providing constructive feedback to other researchers.",
    ],
  },
  {
    title: "Junior Full-stack Developer",
    company_name: "Scripters Hub",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Certified web SQA from Systems Ltd.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "RafayJ. is a certified Web SQA",
    name: "Faizan Farooq",
    designation: "Senior Web Tester",
    company: "Systems Ltd.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The best employee I ever had!",
    name: "Akif Shahid",
    designation: "CEO",
    company: "Scripters Hub",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Promptopia",
    description:
      "A full-stack project which has a directory of AI prompts. Usage of Next auth, Google Auth, MongoDB, and much more.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Rafayj34/AI-Prompting-Nextjs13.4",
  },
  {
    name: "Pay-Per-View Streaming",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "red-text-gradient",
      },
      {
        name: "Amazon",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ArhamBaig/Pay-per-view-streaming-platform",
  },
];

export { services, technologies, experiences, testimonials, projects};