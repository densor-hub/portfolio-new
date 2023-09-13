import PersolIcon from "../images/persol-icon.jpg";
import AngloGoldIcon2 from "../images/anglogold-icon.png";
import AbibeckIcon from "../images/abibeck logo.jpg";
import AsabeaIcon from "../images/cynosure.png";
import MuzicLogo from "../images/muzica.jpg";
import AbiBeckLogo from "../images/abibeck logo.jpg";
import CynoSureLogo from "../images/cynosure.png";

export const projectsData = [
  {
    name: "Muzic",
    url: "http://muzic.goldcoastuni.com",
    logo: MuzicLogo,
    technologies: ["React JS", "Node JS", "MongoDB", "CSS", "GraphQL"],
    description:
      "Muzic is a web based wesite creator application for musicians ",
  },
  {
    name: "AbiBeck",
    url: "https://abibeck.xyz",
    logo: AbiBeckLogo,
    technologies: ["React JS", "Tailwind CSS"],
    description:
      "Very attractive modern day website for AbiBeck Software Solutions.",
  },
  {
    name: "Cynosure",
    url: "http://apps.abibeck.xyz/cynosure",
    logo: CynoSureLogo,
    technologies: ["React JS", "Tailwind CSS", "MSSMS", "SQL", "GraphQL"],
    description: "An enterprise relations and data management sytem.",
  },
  {
    name: "Aabea Eng. Ltd.",
    url: "http://apps.abibeck.xyz/cynosure",
    logo: CynoSureLogo,
    technologies: ["React JS", "Tailwind CSS", "MSSMS", "SQL", "GraphQL"],
    description:
      "A modern day website and organizational management application for Asabea Engineering Limited.",
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
    activities: [
      "Participated in the development of the AAIL Canteen App as a fullstack developer",
    ],
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
