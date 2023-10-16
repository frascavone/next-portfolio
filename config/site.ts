export type SiteConfig = typeof siteConfig

// <nav className="nav-bar">
//         <a href="#about" className="nav-bar__item">
//           {" "}
//           chi sono{" "}
//         </a>
//         <a href="#skills" className="nav-bar__item">
//           {" "}
//           skills{" "}
//         </a>
//         <a href="#projects" className="nav-bar__item">
//           {" "}
//           progetti{" "}
//         </a>
//         <a href="#contacts" className="nav-bar__item">
//           {" "}
//           contatti{" "}
//         </a>
//         <a
//           rel="noreferrer"
//           target="_blank"
//           href="img/CVscavone.pdf"
//           className="nav-bar__item btn"
//         >
//           vedi CV
//         </a>
//       </nav>

export const siteConfig = {
  name: "frascavone | Portfolio",
  description: "",
  mainNav: [
    {
      title: "chi sono",
      href: "#about",
    },
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
}
