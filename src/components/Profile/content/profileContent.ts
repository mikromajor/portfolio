export const ABOUT_ME = {
  PROFILE: {
    ICON: ["profile"],
    CONTENT_ICONS: [],
    CONTENT: [
      'Hello, I’m Alex. I am a University graduate in “electronics systems and computers technologies”. 1,5 years ago I decided to change my life and began to actively study the "front-end". During this time, I took various courses. Studied a lot of new: approaches, methodologies, algorithms, libraries… Created interesting PET projects. I have some commercial experience and I am currently looking for a job.',
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
      "bem",
      "sass",
      "bootstrap",
      "ant",
      "gsap",
      "api",
      "git",
      "figma",
    ],
    CONTENT: [
      "JavaScript (ES5+);",
      "React.js (Hooks);",
      "Redux (Saga, Toolkit);",
      "TypeScript;",
      "HTML5;",
      "CSS3 (Responsive adaptive);",
      "BEM methodology",
      "Sass/Scss;",
      "Bootstrap;",
      "Ant Design",
      "GSAP;",
      "REST API;",
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
      "Polish – upper-intermediate B2;",
      "English – pre-intermediate A2;",
    ],
  },

  "EDUCATION, COURSES": {
    ICON: ["education"],
    CONTENT_ICONS: [
      "sumdu",
      "prometheus",
      "kottans",
      "itvdn",
      "fcc",
      "codecademy",
      "udacity",
    ],
    CONTENT: [
      "Sumy State University (Ukraine), Faculty of Electronics and Information Technology, Specialist, 2005-2010; (full-time education+ scholarship)",
      'Prometheus course " Basics of Web UI Development 2020 "',
      "Kottans course “Front-end 2020-2021”",
      "ITVDN “ React Developer”, 2021;",
      "FreeCodeCamp, 2021;",
      "CodeCademy,  2021;",
      "Udacity, 2020-2021",
    ],
  },
  "RELEVANT EXPERIENCE": {
    ICON: ["experience"],
    CONTENT_ICONS: [],
    CONTENT: [
      "Junior front-end developer at Headway-Consulting, Kyiv, Ukraine, September 2021 – February 2022. I worked on a development team. My main tasks were to create a SPA with advertising offers",
    ],
  },
  CONTACTS: {
    ICON: ["contacts"],
    CONTENT_ICONS: ["mobile", "email", "t", "in", "git"],
    CONTENT: [
      "Mob: +48-794-715-082",
      "E-mail: alex.solianyk.ua@gmail.com",
      "Telegram: http://t.me/AlexSolianyk",
      "Linkedin: https://www.linkedin.com/in/alex-solianyk-758639214/",
      "GitHub: https://github.com/mikromajor",
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
    LINK: "searcher",
    // "https://mikromajor.github.io/searcher-git-hub/",
  },
  "Galleria films": {
    ICON: ["films"],
    CONTENT: [
      "A movie gallery with a navigation menu. Allows users to browse selected genres, sort movies, create and manage the favorite list.",
      "Used: React, hooks, TypeScrip, Bootstrap",
    ],
    LINK: "films",
    //"https://mikromajor.github.io/Galleria-films/"
  },
  "Drag and drop card": {
    ICON: ["dragAndDrop"],
    CONTENT: [
      "Downloads user data from the server. Creates a user's cards. Using drag and drop user cards and. Auto slideshow of cards in a deck.",
      "Used: React, Redux-Saga , TypeScrip, Bootstrap, API fetch",
    ],
    LINK: "dragCards",
  },
  Covid: {
    ICON: ["covid"],
    CONTENT: [
      "Showing statistics information about covid in different countries of the world with the ability to enter a custom period.",
      "Used: React, hooks, API fetch",
    ],
    LINK: "covid",
    //"https://mikromajor.github.io/covid/"
  },

  "Covid-19": {
    ICON: ["covid-19"],
    CONTENT: [
      "Showing statistics information about covid in different countries of the world with the ability to enter a custom period.",
      "Used: JS, API fetch.",
    ],
    LINK: "https://mikromajor.github.io/covid-19/",
  },
  "Users card list": {
    ICON: ["users_list"],
    CONTENT: [
      "Downloads user data from the server. Creates a user's card list. Using the control buttons can change the size of photos on the cards as well as expand the cards when clicking on them. Also, can sort cards by gender or change the background color.",
      "Used: Vanilla JS, API fetch.",
    ],
    LINK: "https://mikromajor.github.io/users_card_list/",
  },
  Stopwatch: {
    ICON: ["stopwatch"],
    CONTENT: [
      'The stopwatch displays on the scoreboard - [hh:mm:ss:ms] and control panel - 4 buttons Wait, Reset, Start/Stop, Check speed. Using the button "Check speed" can check the time double click. In the console can see which buttons and how many times have been re-rendered.',
      "Used React hooks: useRef, useState, useEffect, useCallback; memo.",
    ],
    LINK: "stopWatch",
    //"https://mikromajor.github.io/stopwatch/",
  },
};
