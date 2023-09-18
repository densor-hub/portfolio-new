//journey
import PersolIcon from "../images/persol-icon.jpg";
import AngloGoldIcon2 from "../images/anglogold-icon.png";
import AbibeckIcon from "../images/abibeck logo.jpg";
import AsabeaIcon from "../images/ASABEA-USE.png";

//Projects
import MuzicLogo from "../images/muzica.jpg";
import AbiBeckLogo from "../images/abibeck logo.jpg";
import CynoSureLogo from "../images/cynosure.png";

//personal Data
import DavidEnsor from "../images/david-ensor.jpg";

//skills
import JSicon from "../images/jsicon.png";
import typeScriptIcon from "../images/typescripticon.png";
import JavaIcon from "../images/java.png";
import PythonIcon from "../images/python.jpg";
import CsharpIcon from "../images/c#.png";
import CplusplusIcon from "../images/c++.png";
import SQLIcon from "../images/sql.jpg";
import reactIcon from "../images/reacticon.png";
import NextJsIcon from "../images/nextjs.png";
import ReactNativeIcon from "../images/reactnative.png";
import vueIcon from "../images/vueicon.png";
import ReduxIcon from "../images/redux.png";
import tailwindCSSIcon from "../images/tailwindicon.jpg";
import boostrapIcon from "../images/boostrap.jpg";
import nodejsIcon from "../images/nodeicon.png";
import dotNetIcon from "../images/netcore.png";
import MSSMSicon from "../images/mssms.png";
import postgresQL from "../images/postgresql.png";
import mongoDbIcon from "../images/mongoDb.png";
import gitIcon from "../images/git.png";
import postmanIcon from "../images/postman.jpeg";
import graphQL from "../images/graphql.jpg";

//PersoalInfoData and Skills are single objects
//ProjectsData and JourneyData are arrays

export const PersolInfoData = {
  img: DavidEnsor,
  name: "David Ensor",
  professions: ["Software Developer", "Musician"],
  overview:
    "I am results-focused Software Developer with strength in both Web and Mobile developments. I leverage my expertise, resourcefulness and diligence to make positive impact. I pride myself as a very innovative developer who shows much appreciation for collective efforts.",
};

export const SkillsData = {
  languages: {
    data: [
      { title: "JavaScript", icon: JSicon },
      { title: "TypeScript", icon: typeScriptIcon },
      { title: "Java", icon: JavaIcon },
      { title: "Python", icon: PythonIcon },
      { title: "C#", icon: CsharpIcon },
      { title: "C++", icon: CplusplusIcon },
      { title: "SQL", icon: SQLIcon },
    ],
    id: "languages",
  },
  frontend: {
    data: [
      { title: "React JS", icon: reactIcon },
      { title: "Next JS", icon: NextJsIcon },
      { title: "React Native", icon: ReactNativeIcon },
      { title: "Vue JS", icon: vueIcon },
      { title: "Redux", icon: ReduxIcon },
      { title: "Tailwind CSS", icon: tailwindCSSIcon },
      { title: "Boostrap CSS", icon: boostrapIcon },
    ],
    id: "frontend",
  },
  backend: {
    mainTech: {
      data: [
        { title: "Node Js", icon: nodejsIcon },
        { title: ".Net-core", icon: dotNetIcon },
      ],
    },
    id: "backend",
    databases: {
      data: [
        { title: "MSSMS", icon: MSSMSicon },
        { title: "PostgresQL", icon: postgresQL },
        { title: "MongoDB", icon: mongoDbIcon },
      ],
      id: "databases",
    },
    OtherTools: {
      data: [
        { title: "Git", icon: gitIcon },
        { title: "GraphQL", icon: graphQL },
        { title: "Postman", icon: postmanIcon },
      ],
      id: "other tools",
    },
  },
};

export const projectsData = [
  {
    id: 4,
    name: "MUZIC",
    url: "http://muzic.goldcoastuni.com",
    urlText: "my website created with MUZIC",
    logo: MuzicLogo,
    technologies: ["React JS", "Tailwind CSS", "MSSMS", "SQL", "GraphQL"],
    description:
      "Muzic is a web-based website creator application tailored for musicains",
  },
  {
    id: 2,
    name: "AbiBeck",
    url: "https://abibeck.xyz",
    logo: AbiBeckLogo,
    technologies: ["React JS", "Tailwind CSS"],
    description:
      "Designed modern day landing page for AbiBeck Software Solutions.",
  },
  {
    id: 3,
    name: "Cynosure",
    url: "",
    contact: "contact",
    logo: CynoSureLogo,
    technologies: ["React JS", "Tailwind CSS", "MSSMS", "SQL", "GraphQL"],
    description: "An enterprise relations and data management sytem.",
  },
];

export const journeyData = [
  {
    company: "Persol Systems Limited",
    role: "Full Stack Developer",
    duration: {
      start: "Aug 2023 ",
      end: "Present",
    },
    activities: [
      "Work as the front end  developer on BOST ONE system for National Petroleum Authority (NPA) of Ghana",
      "Work as a front end develper on the team for Enterprise Relations and Data Management System for National Petroleum Authority",
    ],
    icon: PersolIcon,
    url: "https://persol.net",
  },
  {
    company: "AbiBeck Software Solutions",
    role: "Full Stack Developer",
    duration: {
      start: "Sept 2021 ",
      end: "June 2023",
    },
    activities: [
      "Built the landing page  of Abibeck Software Solutions.",
      "Spearheaded the development of Cynosure,  an enterprize  relations , data management and point of sale application.",
      "Worked as a fullstack developer on Muzic project, a website creator for musicians, tailored for a client.",
      "Worked as a mobile developer on Muzic project to create a cross platform mobile app version of Muzic.",
    ],
    icon: AbibeckIcon,
    url: "https://abibeck.xyz",
  },
  {
    company: "AngloGold Ashanti Iduapriem Mine",
    role: "Applications Support",
    duration: {
      start: "Sept 2020 ",
      end: "July 2021",
    },
    activities: ["A fullstatck developer on the team for AAIL Canteen App."],
    icon: AngloGoldIcon2,
    url: "https://www.anglogoldashanti.com/portfolio/africa/iduapriem/",
  },
  {
    company: "Asabea Engineering Limited",
    role: "Interim Software Developer",
    duration: {
      start: "May 2019 ",
      end: "August 2019",
    },
    activities: [
      "Designed and built a website for the company",
      "Built an enterpise relations and data management application for the company",
    ],
    icon: AsabeaIcon,
    url: "https://asabea-el.com",
  },
];
