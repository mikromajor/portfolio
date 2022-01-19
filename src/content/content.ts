export const ABOUT_ME = {
  PROFILE: {
    ICON: ["profile"],
    CONTENT_ICONS: [],
    CONTENT: [
      "I am a University graduate in “electronics systems and computers technologies”. Last 6 years I have lived and worked in Poland. That’s why I speak Polish fluently. I am used to working in an international team, focused on results, and taking full responsibility for my work.",
    ],
  },
  SKILLS: {
    ICON: ["skills"],
    CONTENT_ICONS: [
      "js",
      "react",
      "redux",
      "ts",
      "html",
      "css",
      "sass",
      "bootstrap",
      "ant",
      "api",
      "git",
      "figma",
    ],
    CONTENT: [
      "JavaScript (ES5+, jQuery);",
      "React.js (Hooks);",
      "Redux (Toolkit);",
      "TypeScript;",
      "HTML5;",
      "CSS3 (Responsive, BEM);",
      "Sass/Scss;",
      "Bootstrap;",
      "Ant",
      "REST API (fetch);",
      "Git (GitHub);",
      "Figma.",
    ],
  },
  LANGUAGES: {
    ICON: ["languages"],
    CONTENT_ICONS: ["ua", "ru", "pl", "eng"],
    CONTENT: [
      "Ukrainian – native;",
      "Russian – native;",
      "Polish – upper-intermediate (B2);",
      "English - intermediate (B1).",
    ],
  },

  "EDUCATION, COURSES": {
    ICON: ["education"],
    CONTENT_ICONS: ["prometheus", "kottans", "sumdu"],
    CONTENT: [
      'Prometheus course " Basics of Web UI Development 2020 "',
      "Kottans course “Front-end 2020-2021”",
      "Sumy State University (Ukraine), Faculty of Electronics and Information Technology, Specialist, 2005-2010; (full-time education+ scholarship)",
    ],
  },
  "RELEVANT EXPERIENCE": {
    ICON: ["experience"],
    CONTENT_ICONS: [],
    CONTENT: [
      "Junior front-end developer at Headway-Consulting, Bydgoszcz, Poland, March 2021 – September 2021. I worked on a development team. My main tasks were to create a one-page app with advertising offers, modernize the existing site.",
    ],
  },
  CONTACTS: {
    ICON: ["contacts"],
    CONTENT_ICONS: ["mobile", "email", "t", "in", "git"],
    CONTENT: [
      "MOBILE: +38 063-78-00-753",
      "E-MAIL: alex.solianyk.ua@gmail.com",
      "Telegram: AlexSolianyk",
      "linkedin: linkedin.com/in/alex-solianyk-758639214",
      "GitHub: github.co/mikromajor",
    ],
  },
  GOALS: {
    ICON: ["goals"],
    CONTENT_ICONS: [],
    CONTENT: [
      "further studying and working with web technologies;",
      "learn English;",
      "develop interesting and useful projects;",
      "work in friendship team.",
    ],
  },
};

export const PET_PROJECTS = {
  "Git Hub searcher": {
    ICON: ["searcher"],
    CONTENT: [
      "The web application that is able to search through GitHub users and their corresponding projects",
      "Used: TypeScript, React, API fetch, localStorage, Bootstrap, SCSS.",
    ],
  },
  "Galleria films": {
    ICON: ["films"],
    CONTENT: [
      "A movie gallery with a navigation menu. Allows users to browse selected genres, sort movies, create and manage the favorite list.",
      "Used: React, hooks, TypeScrip, Bootstrap",
    ],
  },
  Covid: {
    ICON: ["covid"],
    CONTENT: [
      "Showing statistics information about covid in different countries of the world with the ability to enter a custom period.",
      "Used: React, hooks, API fetch",
    ],
  },

  "Covid-19": {
    ICON: ["covid-19"],
    CONTENT: [
      "Showing statistics information about covid in different countries of the world with the ability to enter a custom period.",
      "Used: JS, API fetch.",
    ],
  },
  "Users card list": {
    ICON: ["users_list"],
    CONTENT: [
      "Downloads user data from the server. Creates a user's card list. Using the control buttons can change the size of photos on the cards as well as expand the cards when clicking on them. Also, can sort cards by gender or change the background color.",
      "Used: Vanilla JS, API fetch.",
    ],
  },
  Stopwatch: {
    ICON: ["stopwatch"],
    CONTENT: [
      'The stopwatch displays on the scoreboard - [hh:mm:ss:ms] and control panel - 4 buttons Wait, Reset, Start/Stop, Check speed. Using the button "Check speed" can check the time double click. In the console can see which buttons and how many times have been re-rendered.',
      "Used React hooks: useRef, useState, useEffect, useCallback; memo.",
    ],
  },
};

export type AboutMeType = typeof ABOUT_ME;
export type PetProjectType = typeof PET_PROJECTS;

export type ContentType = PetProjectType | AboutMeType;
