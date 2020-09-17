import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vayango Koné | Développeur web', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Site portfolio de Vayango Koné, développeur web', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, Je suis',
  name: 'Vayango Koné',
  subtitle: 'Développeur web',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    "Passionné de sciences et de nouvelles technologies, j'étudie l'informatique, notamment le développement web et mobile ",
  paragraphTwo:
    "J'ai le long de ma formation touché à beaucoup de technologies du web : php et symfony, javascript, react et angular, dart et flutter. Aujourd'hui je me suis spécialisé principalement dans l'écosystème React, dont vous pouvez voir quelques projets ci-dessous",
  paragraphThree: 'Vous trouverez via ce lien un exemplaire de mon cv',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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

// CONTACT DATA
export const contactData = {
  cta: "Souhaitez-vous plus de renseignement ? n'hésitez pas !",
  btn: 'Contactez-moi',
  email: 'vayango@hotmail.fr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vayango-kon%C3%A9/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jsswa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
