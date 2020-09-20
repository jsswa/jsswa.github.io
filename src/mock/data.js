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
    img: 'luxuryCar.png',
    title: 'luxuryCar',
    info:
      'Un site web responsive présentant différentes voitures de luxe. Il a été fait grâce au framework React js et create-react-app.',
    info2: '',
    url: 'https://vayango-kone.fr/luxuryCar/',
    repo: 'https://github.com/jsswa/luxuryCar', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'webGallery.png',
    title: 'webGallery',
    info:
      "Une application web responsive permettant d'afficher et de chercher différentes images via l'API web Flickr",
    info2: '',
    url: 'https://vayango-kone.fr/WebGallery/',
    repo: 'https://github.com/jsswa/WebGallery', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'planningApp',
    title: 'planningApp',
    info:
      "Une application faite avec le framework Angular démontrant l'utilisation du Drag and Drop (Glisser-Déposer) sur un planning",
    info2: '',
    url: 'https://vayango-kone.fr/planningApp/',
    repo: 'https://github.com/jsswa/planningApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'expensesApp.png',
    title: 'expensesApp',
    info: 'Application React permettant de calculer ses dépenses quotidiennes',
    info2: '',
    url: 'https://vayango-kone.fr/expensesApp/',
    repo: 'https://github.com/jsswa/expensesApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'marsGallery.png',
    title: 'marsGallery',
    info:
      "Un site réalisé avec le framework Angular permettant d'afficher les images des missions d'explorations martiennes ",
    info2: '',
    url: 'https://vayango-kone.fr/marsGallery/',
    repo: 'https://github.com/jsswa/marsGallery', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'registrationForm.png',
    title: 'registrationForm',
    info: "Un formulaire d'inscription javaScript",
    info2: '',
    url: 'https://vayango-kone.fr/RegistrationFormJS/',
    repo: 'https://github.com/jsswa/RegistrationFormJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'netflixCloneApp.png',
    title: 'netflixClone',
    info:
      "Une copie de l'interface du site web de streaming Netflix effectué en langage React et faisant ses requètes via l'api TMDb  ",
    info2: '',
    url: 'https://vayango-kone.fr/netflixCloneApp/',
    repo: 'https://github.com/jsswa/netflixCloneApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covidTrackerApp.png',
    title: 'CovidTracker',
    info: "Une application démontrant des statistiques sur l'évolution du COVID 19",
    info2: '',
    url: 'https://vayango-kone.fr/covidTrackerApp/',
    repo: 'https://github.com/jsswa/covidTrackerApp', // if no repo, the button will not show up
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
