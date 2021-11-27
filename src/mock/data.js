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
  name: 'Erfan Momeni',
  subtitle: "I'm a Computer Engineer!",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Me.jpg',
  paragraphOne: 'I am a creative, multi-disciplinary computer engineer.',
  paragraphTwo:
    'Video games are my main interest. I enjoy designing, developing, and playing them.\
     In particular, I am fascinated by real-time graphics and developing optimized tools and engines to build games.',
  paragraphThree:
    'In the future, I would like to contribute to building innovative and immersive video games by\
   finding efficient methods to solve the problems in making video games.',
  resume: '../images/cv2.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Syndra.png',
    title: 'Syndra Engine',
    info: 'Syndra is an early-stage 3D game engine.',
    info2:
      "Syndra is my bachelor's thesis project, where I wanted to study how to create 3D game engines.\
       I've been using C++ and OpenGL API to develop Syndra for the Windows platform.\
       I made Syndra mainly to learn new algorithms and techniques used primarily in real-time rendering.",
    url: 'https://www.youtube.com/watch?v=PlPZ7A7ZCdA',
    repo: 'https://github.com/ErfanMo77/Syndra',
  },
  {
    id: nanoid(),
    img: 'lucin.png',
    title: 'Lucin',
    info: 'Lucin is a multi-threaded CPU path tracer.',
    info2:
      'Lucin is made by following "RayTracing in one weekend" tutorials by Peter Shirley. In the future I would like to add new features\
     such as volumes and real-time ray tracing using Nvidia Optix.',
    url: '',
    repo: 'https://github.com/ErfanMo77/Lucin',
  },
  {
    id: nanoid(),
    img: 'pentago2.png',
    title: 'Pentago',
    info: 'Pentago is a board game usually played with two players. You can also play with AI.',
    info2:
      'I implemented this project in Java. I used mini-max tree and alpha-beta pruning to find the next best move. The UI is made with JavaFX.',
    url: '',
    repo: 'https://github.com/ErfanMo77/Pentago_mini-max',
  },
];

// PROJECTS DATA
export const artProjectsData = [
  {
    id: nanoid(),
    img: 'Nature.jpg',
    title: 'The Road',
    info: 'I created this scene as my entry in a weekly environment art competition.',
    info2:
      'It was created was created with Unreal Engine 4 and "Quixel" materials. I did the lighting and post-processing and also the setting of the scene.\
    A subsurface scattering shader was used to create realistic tree leaves.',
    url: require('../images/Nature.jpg'),
    repo: '',
  },
  {
    id: nanoid(),
    img: 'GrassCar2',
    title: 'Grass Car',
    info: "This scene was created in Blender following Derek Elliott's tutorials on Youtube.",
    info2:
      'The grass was created using particle system of blender. It was rendered with Cycles renderer.',
    url: require('../images/GrassCar2.png'),
    repo: '',
  },
  {
    id: nanoid(),
    img: 'shack.png',
    title: 'Shack',
    info: 'I created this scene in Blender.',
    info2:
      "This is one of the first scenes I built in Blender as I was learning 3D modeling.\
       I created it following Grant Abbitt's Blender tutorials on Youtube.",
    url: require('../images/shack.png'),
    repo: '',
  },
  {
    id: nanoid(),
    img: 'well2.png',
    title: 'Well',
    info: 'This scene was created in Blender.',
    info2:
      'It was also modeled by following Grant Abbitt\'s "Well" tutorial on Youtube.\
    Many modifiers like Lattice tool in Blender was used to create the well.',
    url: require('../images/well2.png'),
    repo: '',
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
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCpB_5eY1HTgva6TFE1WreQw',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
