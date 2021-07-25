import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Han', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is my Web Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rayhan',
  subtitle: 'Web Developer | Software Engineering',
  cta: 'More',
};

// ABOUT DATA
export const aboutData = {
  img: 'myFoto',
  paragraphOne: 'Hi Poppins',
  paragraphTwo: 'My Name Is Rayhan',
  paragraphThree: "And i'm a student",
  resume: 'https://github.com/Ryhann/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Portfolio BS',
    info: 'Website ini dibuat dengan CSS Framework yaitu Bootstrap',
    info2: 'Kasih star nya ya :)',
    url: 'https://rayhan-portfolio.netlify.app/',
    repo: 'https://github.com/Ryhann/Portfolio-new', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Simple Quiz',
    info: 'Simple Quiz ini dibuat iseng2 saat lagi belajar Javascript HEHE',
    info2: '',
    url: 'https://ryhann.github.io/Quiz-app/',
    repo: 'https://github.com/Ryhann/Quiz-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Countdown New Year',
    info: 'Website ini untuk menghitung mundur tahun baru',
    info2: '',
    url: 'https://ryhann.github.io/Countdown-timer/',
    repo: 'https://github.com/Ryhann/Countdown-timer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Template Wrapper',
    info: 'Ini Hanya untuk template Wrapper Header saja',
    info2: '',
    url: 'https://wrapper-01.netlify.app/',
    repo: 'https://github.com/Ryhann/template-wrapper ', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's Work Together",
  email: 'https://github.com/Ryhann',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Rayhan26901596',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/spcyl_/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ryhann',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
