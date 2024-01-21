export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "frascavone | Portfolio",
    description: "",
    locales: ["it", "en"],
    defaultLocale: "it",
    mainNav: [
        {
            title: "skills",
            href: "#skills",
        },
        {
            title: "projects",
            href: "#projects",
        },
        {
            title: "contacts",
            href: "#contacts",
        },
        {
            title: "cv",
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
            iconPath: "skill-icons:nextjs-light",
            description: "Nextjs",
        },
        {
            iconPath: "logos:react",
            description: "React",
        },
        {
            iconPath: "devicon:typescript",
            description: "Typescsript",
        },
        {
            iconPath: "devicon:git",
            description: "Git",
        },
        {
            iconPath: "devicon:tailwindcss",
            description: "Tailwind",
        },
        {
            iconPath: "logos:firebase",
            description: "Firebase",
        },
        {
            iconPath: "logos:javascript",
            description: "Javascsript",
        },
        {
            iconPath: "logos:firebase",
            description: "Vue",
        },
        {
            iconPath: "shadcn",
            description: "shadcn",
        },
        {
            iconPath: "vscode-icons:file-type-html",
            description: "HTML",
        },
        {
            iconPath: "vscode-icons:file-type-css",
            description: "CSS",
        },
    ],
    projects: [
        {
            title: "user onboarding",
            description: "user-unboarding",
            imgUrl: "/imgs/user-onboarding.png",
            gitHubLink: "https://github.com/frascavone/user-onboarding",
            pageLink: "https://user-onboarding-frascavone.netlify.app/",
        },
        {
            title: "forkify",
            description: "forkify",
            imgUrl: "/imgs/forkify.png",
            gitHubLink: "https://github.com/frascavone/forkify-frascavone",
            pageLink: "https://forkify-frascavone.netlify.app",
        },
        {
            title: "hangman",
            description: "hangman",
            imgUrl: "/imgs/hangman.png",
            gitHubLink: "https://github.com/frascavone/hangman-game",
            pageLink: "https://frascavone.github.io/hangman-game/",
        },
        {
            title: "indovina numero",
            description: "guess-number",
            imgUrl: "/imgs/indovina-numero.png",
            gitHubLink: "https://github.com/frascavone/Indovina-il-numero",
            pageLink: "https://frascavone.github.io/Indovina-il-numero/",
        },
        {
            title: "mapty",
            description: "mapty",
            imgUrl: "/imgs/mapty.png",
            gitHubLink: "https://github.com/frascavone/mapty-frascavone",
            pageLink: "https://mapty-frascavone.netlify.app",
        },
        {
            title: "myTutor",
            description: "my-tutor",
            imgUrl: "/imgs/mytutor.png",
            gitHubLink: "https://github.com/frascavone/myTutor/",
        },
        {
            title: "to do list",
            description: "to-do",
            imgUrl: "/imgs/to-do-list.png",
            gitHubLink: "https://github.com/frascavone/to-do-list",
            pageLink: "https://frascavone.github.io/to-do-list/",
        },
        {
            title: "volare",
            description: "volare",
            imgUrl: "/imgs/volare.png",
            gitHubLink: "https://github.com/frascavone/volare",
            pageLink: "https://www.frascavone.it/volare/",
        },
    ],
};
