export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "frascavone | Portfolio",
  description: "",
  mainNav: [
    {
      title: "skills",
      href: "#skills",
    },
    {
      title: "progetti",
      href: "#projects",
    },
    {
      title: "contatti",
      href: "#contacts",
    },
    {
      title: "vedi CV",
      href: "/CVscavone.pdf",
    },
  ],
  links: {
    github: "https://github.com/frascavone",
    linkedin: "https://www.linkedin.com/in/frascavone/",
    instagram: "https://www.instagram.com/fra.scavone/",
  },
  skills: [
    {
      iconPath: "/icons/nextjs.svg",
      description: "Creazione di progetti fullstack con Nextjs",
    },
    {
      iconPath: "/icons/react.svg",
      description: "Creazione di interfacce grafiche con React",
    },
    {
      iconPath: "/icons/typescript.svg",
      description:
        "Programmazione funzionale e tipizzazione dati con Typescsript",
    },
    {
      iconPath: "/icons/tailwindcss.svg",
      description:
        "Personalizzazione stile di pagine web responsive con Tailwind",
    },
    {
      iconPath: "/icons/firebase.svg",
      description: "Gestione di database non relazionali Firebase",
    },
    {
      iconPath: "/icons/javascript.svg",
      description: "Programmazione funzionale e AJAX in Javascsript",
    },
    {
      iconPath: "/icons/vue.svg",
      description: "Creazione di interfacce grafiche con Vue",
    },
    {
      iconPath: "/icons/mysql.svg",
      description: "Gestione di database relazionali mySql",
    },
    {
      iconPath: "/icons/html.svg",
      description: "Crezione pagine web in codice HTML",
    },
    {
      iconPath: "/icons/css.svg",
      description: "Personalizzazione stile di pagine web responsive con CSS",
    },
  ],
  projects: [
    {
      title: "user onboarding",
      description:
        "React, CSS.  Ho usato react-router per la navigazione tra gli step del form, ogni campo è validato e testato, i dati vengono conservati temporaneamente nel localStorage.",
      imgUrl: "/imgs/user-onboarding.png",
      gitHubLink: "https://github.com/frascavone/user-onboarding",
      pageLink: "https://user-onboarding-frascavone.netlify.app/",
    },
    {
      title: "forkify",
      description:
        "JS AJAX, CSS, Spoonacular API. Web app che permette di cercare anche in base agli ingredienti tra migliaia di ricette di tutto il mondo con l'API Spoonacular. È possibile anche aggiungere ricette ai preferiti o crearne di proprie.",
      imgUrl: "/imgs/forkify.png",
      gitHubLink: "https://github.com/frascavone/forkify-frascavone",
      pageLink: "https://forkify-frascavone.netlify.app",
    },
    {
      title: "hangman",
      description:
        "JS AJAX, CSS, CANVAS, SWapi. Il gioco dell’impiccato. La parola è pescata casualmente da una API esterna.",
      imgUrl: "/imgs/hangman.png",
      gitHubLink: "https://github.com/frascavone/hangman-game",
      pageLink: "https://frascavone.github.io/hangman-game/",
    },
    {
      title: "indovina numero",
      description:
        "JS, CSS. Piccolo gioco in cui l'utente cerca di indovinare un numero generato randomicamente dall'app. Esercizio sulla manipolazione del DOM.",
      imgUrl: "/imgs/indovina-numero.png",
      gitHubLink: "https://github.com/frascavone/Indovina-il-numero",
      pageLink: "https://frascavone.github.io/Indovina-il-numero/",
    },
    {
      title: "mapty",
      description:
        "JS OOP, CSS. Una web app che permette di mappare i propri allenamenti tramite l'uso di una API di terze parti per la geolocalizzazione.",
      imgUrl: "/imgs/mapty.png",
      gitHubLink: "https://github.com/frascavone/mapty-frascavone",
      pageLink: "https://mapty-frascavone.netlify.app",
    },
    {
      title: "myTutor",
      description:
        "VUE, CSS. App per la ricerca di tutor per ripetizioni. Interfaccia sviluppata interamente con Vue.js, vue-router per il routing e Pinia per lo state management.",
      imgUrl: "/imgs/mytutor.png",
      gitHubLink: "https://github.com/frascavone/myTutor/",
    },
    {
      title: "to do list",
      description:
        "HTML, JS, CSS. Piccolo esercizio in cui l'utente aggiunge elementi ad una lista tramite input, conservando gli elementi della lista anche dopo aver ricaricato la pagina.",
      imgUrl: "/imgs/to-do-list.png",
      gitHubLink: "https://github.com/frascavone/to-do-list",
      pageLink: "https://frascavone.github.io/to-do-list/",
    },
    {
      title: "volare",
      description:
        "HTML, CSS, PHP, JS. Una web app dove l'utente prenota dei finti voli tra i principali aeroporti italiani, interrogando un database di tratte aeree di mia creazione, con l'implementazione di PayPal.",
      imgUrl: "/imgs/volare.png",
      gitHubLink: "https://github.com/frascavone/volare",
      pageLink: "https://www.frascavone.it/volare/",
    },
  ],
}
