import { TbBrandHtml5, TbBrandCss3, TbBrandSass, TbBrandJavascript, TbBrandTypescript, TbBrandNodejs, TbBrandMongodb } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

// ToDo
//  Correct the icons type

export interface ProjectInterface {
  title: string;
  description: string;
  langs: { lang: string; icon: any }[];
  image?: string;
  type: "Work" | "Side Hustle" | "University Course Works";
  link: string;
}

const projects: ProjectInterface[] = [
  {
    title: "Profi24.uz - UI Layout",
    description: "A UI layout for Profi24.uz",
    langs: [
      { lang: "HTML5", icon: TbBrandHtml5 },
      { lang: "SASS", icon: TbBrandSass },
      { lang: "JavaScript", icon: TbBrandJavascript },
    ],
    image: "/images/profi24-uz.jpg",
    type: "Work",
    link: "",
  },
  {
    title: "Pomodoro App",
    description: "A simple Pomodoro App. I learned how to use basics of JavaScript.",
    langs: [
      { lang: "HTML5", icon: TbBrandHtml5 },
      { lang: "CSS", icon: TbBrandCss3 },
      { lang: "JavaScript", icon: TbBrandJavascript },
    ],
    type: "Side Hustle",
    link: "",
  },
  {
    title: "Task Management - Backend",
    description: "A simple backend using ExpressJS for my Kanban frontend task management app.",
    langs: [
      { lang: "TypeScript", icon: TbBrandTypescript },
      { lang: "NodeJS", icon: TbBrandNodejs },
      { lang: "ExpressJS", icon: SiExpress },
      { lang: "MongoDB", icon: TbBrandMongodb },
    ],
    type: "Side Hustle",
    link: "/kanban-back",
  },
  {
    title: "Web Technology - Course Work 2",
    description: "This is coursework from Web Technology module for semester 2. I learned how to create simple CRUD backend using NodeJS and ExpressJS.",
    langs: [
      { lang: "JavaScript", icon: TbBrandJavascript },
      { lang: "NodeJS", icon: TbBrandNodejs },
      { lang: "ExpressJS", icon: SiExpress },
    ],
    type: "University Course Works",
    link: "/WT_CW2_00015589",
  }, 
  {
    title: "Web Technology - Course Work 1",
    description: "This is coursework from Web Technology module for semester 1. I learned how to create simple frontend using HTML5, CSS3 and JavaScript.",
    langs: [
      { lang: "HTML5", icon: TbBrandHtml5 },
      { lang: "CSS", icon: TbBrandCss3 },
      { lang: "JavaScript", icon: TbBrandJavascript },
    ],
    type: "University Course Works",
    link: "/WT-CW1-00015589.github.io",
  },
];

export default projects;
