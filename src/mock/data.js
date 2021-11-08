import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Erfan Momeni', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Erfan',
  subtitle: "I'm a developer!",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me2.png',
  paragraphOne: 'I love video games',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Syndra Engine',
    info: 'Syndra is an early-stage game engine',
    info2: '',
    url: 'https://www.youtube.com/watch?v=PlPZ7A7ZCdA',
    repo: 'https://github.com/ErfanMo77/Syndra', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Lucin',
    info: 'Lucin is a multi-threaded path tracer',
    info2: '',
    url: '',
    repo: 'https://github.com/ErfanMo77/Lucin', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// PROJECTS DATA
export const artProjectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'erfanmomeni74@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/erfanmomeni',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/erfanmo98/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ErfanMo77',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
