export interface iThemeContext {
  currentTheme?: string;
  setCurrentTheme: Function;
  ThemeColors?: iThemeColors;
  UrlsPathnames?: Array<string>;
  setUrlPathnames: Function;
}

export interface iThemeColors {
  emerald: string;
  yellow: string;
  orange: string;
}
export interface iSkillsData {
  languages: iTechContainer;
  frontend: iTechContainer;
  backend: iTechContainer;
}

export interface iDataContainer {
  id?: string;
  data?: iData[];
}

export interface iTechContainer extends iDataContainer {
  mainTech?: iDataContainer;
  databases?: iDataContainer;
  OtherTools?: iDataContainer;
}
interface iData {
  title: string;
  icon: string;
}

export interface iProjectsData {
  id: number;
  name: string;
  url: string;
  urlText: string;
  logo: string;
  technologies: string[];
  description: string;
  contact?: string;
}

export interface iJourneyData {
  company: string;
  role: string;
  duration: iDuration;
  activities: string[];
  icon: string;
  url: string;
}

interface iDuration {
  start: string;
  end: string;
}
