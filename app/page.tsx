import Link from "next/link"

export default function IndexPage() {
  return (
    <main>
      <header className="hero">
        <span className="hero__tiny">Ciao, mi chiamo </span>
        <span className="hero__name">Francesco Scavone</span>
        <span className="hero__tiny">e sono un</span>
        <span className="hero__info">web developer front-end</span>
        <a className="btn hero__btn btn--animated" href="#about">
          Scopri di più
        </a>
      </header>

      <section id="about" className="about">
        <span className="section__title about__title">Chi sono</span>
        <div className="about__container">
          <div className="about__image">
            <img alt="Propic" className="propic" src="img/propic.jpg" />
          </div>

          <div className="about__info">
            <p className="about__info-text">
              Mi chiamo Francesco, ho 34 anni, sono lucano e vivo ad Arezzo.
            </p>

            <p className="about__info-text">
              Da sempre affascinato dal mondo dell'informatica, ho studiato
              sviluppo web da autodidatta, riuscendo ad ottenere il mio primo
              lavoro da sviluppatore web front-end
            </p>
            <div className="about__btn">
              <a
                rel="noreferrer"
                target="_blank"
                className="btn btn__dark"
                href="img/CVscavone.pdf"
              >
                Vedi CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <span className="section__title skills__title">skills</span>
        <div className="skills__row">
          <div className="skills__box">
            <svg className="skills__icon">
              <use xlinkHref="img/sprite.svg#icon-react"></use>
            </svg>
            <p className="skills__text">
              Creazione di interfacce grafiche con framework React
            </p>
          </div>
          <div className="skills__box">
            <svg className="skills__icon">
              <use xlinkHref="img/sprite.svg#icon-vue"></use>
            </svg>
            <p className="skills__text">
              Creazione di interfacce grafiche con framework Vue
            </p>
          </div>
          <div className="skills__box">
            <svg className="skills__icon">
              <use xlinkHref="img/sprite.svg#icon-javascript"></use>
            </svg>
            <p className="skills__text">
              Creazione di funzioni, OOP e AJAX in Javascript ES6
            </p>
          </div>
          <div className="skills__box">
            <svg className="skills__icon">
              <use xlinkHref="img/sprite.svg#icon-html-five"></use>
            </svg>
            <p className="skills__text">
              Creazione di pagine web in codice HTML
            </p>
          </div>
          <div className="skills__box">
            <svg className="skills__icon">
              <use xlinkHref="img/sprite.svg#icon-sass"></use>
            </svg>
            <p className="skills__text">
              Formattazione stile pagine web responsive con CSS e SASS
            </p>
          </div>

          <div className="skills__box">
            <svg className="skills__icon">
              <use xlinkHref="img/sprite.svg#icon-mysql"></use>
            </svg>
            <p className="skills__text">Gestione dei database MySQL</p>
          </div>
          <div className="skills__box">
            <svg className="skills__icon">
              <use xlinkHref="img/sprite.svg#icon-php"></use>
            </svg>
            <p className="skills__text">
              Gestione dati inseriti e invio email in PHP
            </p>
          </div>

          <div className="skills__box">
            <svg className="skills__icon">
              <use xlinkHref="img/sprite.svg#icon-bootstrap"></use>
            </svg>
            <p className="skills__text">
              Creazione di pagine web con l'uso di componenti Bootstrap
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <span className="section__title">progetti</span>
        <div className="projects__row">
          <div className="card">
            <div className="card__side card__side--front card__side--front--user-onboarding">
              <span>User onboarding</span>
            </div>
            <div className="card__side card__side--back">
              <span className="card__text">
                <p>
                  Form in 3 step realizzato con React per l'onboarding utente.
                  Ho usato React router per la navigazione tra gli step del
                  form, ogni campo è validato e testato, i dati vengono
                  conservati temporaneamente nel localStorage.
                </p>
              </span>
              <span className="card__text card__text--cta">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/frascavone/user-onboarding"
                >
                  <svg className="projects__icon">
                    <use xlinkHref="img/sprite.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn__dark"
                  href="https://user-onboarding-frascavone.netlify.app/"
                >
                  Esplora
                </a>
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card__side card__side--front card__side--front--mytutor">
              <span>myTutor</span>
            </div>
            <div className="card__side card__side--back">
              <span className="card__text">
                <p>
                  App per la ricerca di tutor per ripetizioni. <br />
                  Interfaccia sviluppata interamente con Vue.js, vue-router per
                  il routing e Pinia per lo state management.
                </p>
              </span>
              <span className="card__text card__text--cta">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/frascavone/myTutor/"
                >
                  <svg className="projects__icon">
                    <use xlinkHref="img/sprite.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn__dark"
                  href="#"
                >
                  Esplora
                </a>
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card__side card__side--front card__side--front--hangman">
              <span>Hangman</span>
            </div>
            <div className="card__side card__side--back">
              <span className="card__text">
                <p>
                  Il gioco dell’impiccato. <br />
                  La parola è pescata casualmente da una API esterna.
                </p>
              </span>
              <span className="card__text card__text--cta">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/frascavone/hangman-game"
                >
                  <svg className="projects__icon">
                    <use xlinkHref="img/sprite.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn__dark"
                  href="https://frascavone.github.io/hangman-game/"
                >
                  Esplora
                </a>
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card__side card__side--front card__side--front--volare">
              <span>Volare</span>
            </div>
            <div className="card__side card__side--back">
              <span className="card__text">
                <p>
                  Una web app dove l'utente prenota dei finti voli tra i
                  principali aeroporti italiani, interrogando un database di
                  tratte aeree di mia creazione, con l'implementazione di
                  PayPal.
                </p>
              </span>
              <span className="card__text card__text--cta">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/frascavone/volare"
                >
                  <svg className="projects__icon">
                    <use xlinkHref="img/sprite.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn__dark"
                  href="https://www.frascavone.it/volare/"
                >
                  Esplora
                </a>
              </span>
            </div>
          </div>

          <div className="card">
            <div className="card__side card__side--front card__side--front--indovina-il-numero">
              <span>Indovina il numero</span>
            </div>
            <div className="card__side card__side--back">
              <span className="card__text">
                <p>
                  Piccolo gioco in cui l'utente cerca di indovinare un numero
                  generato randomicamente dall'app. <br />
                  Esercizio sulla manipolazione del DOM.
                </p>
              </span>
              <span className="card__text card__text--cta">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/frascavone/Indovina-il-numero"
                >
                  <svg className="projects__icon">
                    <use xlinkHref="img/sprite.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn__dark"
                  href="https://frascavone.github.io/Indovina-il-numero/"
                >
                  Esplora
                </a>
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card__side card__side--front card__side--front--mapty">
              <span>Mapty</span>
            </div>
            <div className="card__side card__side--back">
              <span className="card__text">
                <p>
                  Progetto Javascript. <br />
                  Una web app che permette di mappare i propri allenamenti
                  tramite l'uso di una API di terze parti per la
                  geolocalizzazione.
                </p>
              </span>
              <span className="card__text card__text--cta">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/frascavone/mapty-frascavone"
                >
                  <svg className="projects__icon">
                    <use xlinkHref="img/sprite.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn__dark"
                  href="https://mapty-frascavone.netlify.app"
                >
                  Esplora
                </a>
              </span>
            </div>
          </div>

          <div className="card">
            <div className="card__side card__side--front card__side--front--forkify">
              <span>Forkify</span>
            </div>
            <div className="card__side card__side--back">
              <span className="card__text">
                <p>
                  Progetto Javascript. <br />
                  Web app che permette di cercare anche in base agli ingredienti
                  tra migliaia di ricette di tutto il mondo, tramite l'utilizzo
                  di una API di terze parti. È possibile anche aggiungere
                  ricette ai preferiti o crearne di proprie.
                </p>
              </span>
              <span className="card__text card__text--cta">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/frascavone/forkify-frascavone"
                >
                  <svg className="projects__icon">
                    <use xlinkHref="img/sprite.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn__dark"
                  href="https://forkify-frascavone.netlify.app"
                >
                  Esplora
                </a>
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card__side card__side--front card__side--front--to-do-list">
              <span>To do list</span>
            </div>
            <div className="card__side card__side--back">
              <span className="card__text">
                <p>
                  Piccolo esercizio in cui l'utente aggiunge elementi ad una
                  lista tramite input, conservando gli elementi della lista
                  anche dopo aver ricaricato la pagina.
                </p>
              </span>
              <span className="card__text card__text--cta">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/frascavone/to-do-list"
                >
                  <svg className="projects__icon">
                    <use xlinkHref="img/sprite.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn__dark"
                  href="https://frascavone.github.io/to-do-list/"
                >
                  Esplora
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacts" className="contacts">
        <h2 className="section__title contacts__title">Contatti</h2>
        <div className="contacts__wrapper">
          <p>
            Per info non esitare a scrivermi via email o sui social
            <br />
            <a
              rel="noreferrer"
              target="_blank"
              className="btn"
              href="mailto:fra.scavone88@gmail.com"
            >
              Email
            </a>
          </p>

          <div className="social__links">
            <a
              rel="noreferrer"
              href="https://www.facebook.com/francesco.scavone.16"
              target="_blank"
            >
              <svg className="contacts__icon">
                <use xlinkHref="img/sprite.svg#icon-facebook"></use>
              </svg>
            </a>
            <a rel="noreferrer" href="#!" target="_blank">
              <i className="fa fa-twitter fa-inverse"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/frascavone/"
              target="_blank"
            >
              <svg className="contacts__icon">
                <use xlinkHref="img/sprite.svg#icon-linkedin"></use>
              </svg>
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/frascavone"
              target="_blank"
            >
              <svg className="contacts__icon">
                <use xlinkHref="img/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </div>

          <hr />
          <a rel="noreferrer" href="#top" className="back-to-top">
            <svg className="contacts__icon">
              <use xlinkHref="img/sprite.svg#icon-circle-up"></use>
            </svg>
          </a>
        </div>
        <p>&copy; 2022 Built by Francesco Scavone</p>
      </footer>
    </main>
  )
}
