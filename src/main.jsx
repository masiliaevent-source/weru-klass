import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Cookie,
  DoorOpen,
  ExternalLink,
  Factory,
  FileText,
  Gauge,
  Hammer,
  Home,
  Mail,
  MessageCircle,
  MapPin,
  Menu,
  Phone,
  Ruler,
  Scale,
  ShieldCheck,
  SunMedium,
  X,
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Home,
    title: "Ferestre PVC",
    text: "Profile termoizolante, feronerie fiabila si pachete de sticla configurate pentru confort zilnic.",
  },
  {
    icon: DoorOpen,
    title: "Usi si glisante",
    text: "Usi de intrare, usi balcon si sisteme culisante pentru acces fluid catre terasa sau gradina.",
  },
  {
    icon: Building2,
    title: "Aluminiu arhitectural",
    text: "Tamplarie din aluminiu pentru proiecte moderne, vitraje ample si linii curate.",
  },
  {
    icon: Factory,
    title: "Fatade si inchideri",
    text: "Solutii pentru spatii comerciale, birouri, terase, balcoane si zone cu trafic intens.",
  },
];

const benefits = [
  "Masuratori precise la fata locului",
  "Consultanta pentru profil, culoare si sticla",
  "Montaj atent, curat si verificat",
  "Solutii pentru eficienta energetica",
  "Finisaje potrivite arhitecturii casei",
  "Interventii si reglaje post-montaj",
];

const projects = [
  {
    label: "Locuinte",
    title: "Ferestre eficiente pentru case noi",
    meta: "PVC alb, geam termoizolant, montaj etans",
  },
  {
    label: "Premium",
    title: "Glisante mari din aluminiu",
    meta: "Antracit mat, prag jos, deschidere ampla",
  },
  {
    label: "Comercial",
    title: "Vitrine si fatade pentru spatii business",
    meta: "Profile rezistente, sticla securizata, acces facil",
  },
];

const company = {
  name: "WERU KLASS S.R.L.",
  cui: "28653735",
  regCom: "J23/1644/2011",
  address: "Str. Ceahlau nr. 61, Voluntari, Jud. Ilfov, Romania",
  email: "office@weruklass.ro",
  phone: "0720 539 697",
};

const legalPages = {
  "/termeni": {
    eyebrow: "Legal",
    title: "Termeni si conditii",
    description:
      "Termeni si conditii pentru utilizarea site-ului WERU KLASS S.R.L., furnizor de tamplarie PVC si aluminiu.",
    intro:
      "Aceasta pagina stabileste conditiile generale de utilizare a site-ului WERU KLASS si are caracter informativ.",
    sections: [
      {
        title: "Operatorul site-ului",
        body: `${company.name}, CUI ${company.cui}, Nr. Reg. Com. ${company.regCom}, cu sediul social in ${company.address}, administreaza acest site de prezentare.`,
      },
      {
        title: "Scopul site-ului",
        body:
          "Site-ul prezinta servicii de tamplarie PVC si aluminiu, ferestre, usi, sisteme glisante, fatade si solutii conexe pentru proiecte rezidentiale si comerciale.",
      },
      {
        title: "Cereri de oferta",
        body:
          "Trimiterea unei solicitari prin telefon, email sau formular nu reprezinta contract comercial. Oferta finala se stabileste individual, in functie de dimensiuni, materiale, complexitatea proiectului si conditiile de montaj.",
      },
      {
        title: "Informatii si disponibilitate",
        body:
          "WERU KLASS poate actualiza informatiile de pe site fara notificare prealabila. Imaginile si descrierile au rol de prezentare, iar specificatiile finale se confirma in oferta si documentele comerciale.",
      },
      {
        title: "Proprietate intelectuala",
        body:
          "Textele, imaginile, designul si elementele grafice ale site-ului apartin WERU KLASS sau sunt utilizate cu drept legal. Copierea sau folosirea lor in scop comercial necesita acord scris.",
      },
      {
        title: "Contact",
        body: `Pentru intrebari despre acesti termeni, ne poti contacta la ${company.email} sau ${company.phone}.`,
      },
    ],
  },
  "/confidentialitate": {
    eyebrow: "GDPR",
    title: "Politica de confidentialitate",
    description:
      "Politica de confidentialitate WERU KLASS S.R.L.: date prelucrate, scopuri, temeiuri si drepturile persoanelor vizate.",
    intro:
      "Aceasta politica explica pe scurt ce date pot fi prelucrate atunci cand contactezi WERU KLASS prin site, telefon sau email.",
    sections: [
      {
        title: "Operatorul datelor",
        body: `${company.name}, CUI ${company.cui}, Nr. Reg. Com. ${company.regCom}, sediu social ${company.address}, email ${company.email}, telefon ${company.phone}, este operatorul datelor transmise prin canalele de contact.`,
      },
      {
        title: "Date prelucrate",
        body:
          "Putem prelucra nume, prenume, numar de telefon, adresa de email, localitate, informatii despre proiect si mesajele trimise voluntar pentru ofertare sau comunicare comerciala.",
      },
      {
        title: "Scopuri",
        body:
          "Datele sunt folosite pentru raspuns la solicitari, pregatirea ofertelor, programarea masuratorilor, gestionarea relatiei cu clientii si respectarea obligatiilor legale.",
      },
      {
        title: "Temeiuri",
        body:
          "Prelucrarea se poate baza pe consimtamant, demersuri precontractuale, executarea unui contract, obligatii legale sau interes legitim, dupa caz.",
      },
      {
        title: "Durata de pastrare",
        body:
          "Datele sunt pastrate atat timp cat este necesar pentru scopurile pentru care au fost colectate sau conform termenelor cerute de lege.",
      },
      {
        title: "Drepturile tale",
        body:
          "Ai drept de acces, rectificare, stergere, restrictionare, opozitie, portabilitate si retragere a consimtamantului, acolo unde legea permite. Solicitarile pot fi trimise la office@weruklass.ro.",
      },
    ],
  },
  "/cookies": {
    eyebrow: "Cookies",
    title: "Politica de cookies",
    description:
      "Politica de cookies WERU KLASS: informatii despre cookie-uri necesare, preferinte si setari.",
    intro:
      "Aceasta pagina descrie folosirea cookie-urilor pe site. In versiunea curenta, site-ul foloseste doar preferinta salvata pentru bannerul de cookies.",
    sections: [
      {
        title: "Ce sunt cookie-urile",
        body:
          "Cookie-urile sunt fisiere mici salvate in browser pentru functionarea site-ului, memorarea preferintelor sau masurarea utilizarii, in functie de setarile active.",
      },
      {
        title: "Cookie-uri strict necesare",
        body:
          "Site-ul poate salva local preferinta ta privind bannerul de cookies. Aceasta preferinta ajuta la afisarea corecta a bannerului si nu este folosita pentru profilare.",
      },
      {
        title: "Cookie-uri optionale",
        body:
          "Daca pe viitor vor fi adaugate instrumente de analiza, marketing sau continut extern, acestea trebuie activate doar conform preferintelor exprimate prin banner.",
      },
      {
        title: "Schimbarea preferintelor",
        body:
          "Poti sterge datele site-ului din setarile browserului pentru a revedea bannerul si a alege din nou. Pentru intrebari, contacteaza WERU KLASS la office@weruklass.ro.",
      },
    ],
  },
};

const defaultSeo = {
  title: "WERU KLASS | Tamplarie PVC si aluminiu",
  description:
    "WERU KLASS S.R.L. produce si monteaza tamplarie PVC si aluminiu: ferestre, usi, sisteme glisante, fatade si solutii eficiente energetic in Voluntari, Ilfov si Bucuresti.",
  canonical: "https://weruklass.ro/",
};

const anpcBanners = [
  {
    title: "ANPC",
    subtitle: "Depune o reclamatie online",
    text: "Acces rapid catre serviciile electronice ale Autoritatii Nationale pentru Protectia Consumatorilor.",
    href: "https://eservicii.anpc.ro/Depune-Cerere?serviciufilter-Category=Reclamatii+Consumatori",
    icon: ShieldCheck,
  },
  {
    title: "SAL",
    subtitle: "Solutionarea alternativa a litigiilor",
    text: "Platforma electronica integrata pentru solutionarea amiabila a litigiilor dintre consumatori si comercianti.",
    href: "https://reclamatiisal.anpc.ro/",
    icon: Scale,
  },
];

function useHashRoute() {
  const getPath = () => window.location.hash.replace("#", "") || "/";
  const [path, setPath] = React.useState(getPath);

  React.useEffect(() => {
    const handleHash = () => setPath(getPath());
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return path;
}

function CookieBanner() {
  const [choice, setChoice] = React.useState(() => localStorage.getItem("weruCookieConsent"));
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  if (choice) {
    return (
      <button
        type="button"
        className="cookie-reopen"
        onClick={() => {
          localStorage.removeItem("weruCookieConsent");
          setChoice(null);
          setSettingsOpen(true);
        }}
      >
        <Cookie size={18} />
        Cookies
      </button>
    );
  }

  const saveChoice = (value) => {
    localStorage.setItem("weruCookieConsent", value);
    setChoice(value);
  };

  return (
    <aside className="cookie-banner" aria-label="Setari cookies">
      <div className="cookie-copy">
        <Cookie size={22} />
        <div>
          <h2>Cookies</h2>
          <p>
            Folosim cookie-uri strict necesare pentru functionarea site-ului si memorarea preferintei tale.
            Cookie-urile optionale pot fi activate doar cu acordul tau.
          </p>
          {settingsOpen && (
            <div className="cookie-settings">
              <label>
                <input type="checkbox" checked readOnly />
                Necesare
              </label>
              <label>
                <input type="checkbox" disabled />
                Analiza trafic
              </label>
              <label>
                <input type="checkbox" disabled />
                Marketing
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="cookie-actions">
        <button type="button" className="ghost-button" onClick={() => setSettingsOpen((open) => !open)}>
          Setari
        </button>
        <button type="button" className="ghost-button" onClick={() => saveChoice("necessary")}>
          Refuz
        </button>
        <button type="button" className="solid-button" onClick={() => saveChoice("accepted")}>
          Accept
        </button>
      </div>
    </aside>
  );
}

function Header({ navOpen, setNavOpen }) {
  const closeNav = () => setNavOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="WERU KLASS acasa" onClick={closeNav}>
        <span className="brand-mark">WK</span>
        <span>
          <strong>WERU KLASS</strong>
          <small>Tamplarie PVC si aluminiu</small>
        </span>
      </a>
      <button
        className="icon-button nav-toggle"
        type="button"
        aria-label={navOpen ? "Inchide meniul" : "Deschide meniul"}
        onClick={() => setNavOpen((open) => !open)}
      >
        {navOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={navOpen ? "open" : ""}>
        <a href="#servicii" onClick={closeNav}>Servicii</a>
        <a href="#proces" onClick={closeNav}>Proces</a>
        <a href="#lucrari" onClick={closeNav}>Lucrari</a>
        <a href="#contact" onClick={closeNav}>Contact</a>
      </nav>
    </header>
  );
}

function App() {
  const [navOpen, setNavOpen] = React.useState(false);
  const path = useHashRoute();
  const legalPage = legalPages[path];

  React.useEffect(() => {
    const title = legalPage ? `${legalPage.title} | WERU KLASS` : defaultSeo.title;
    const description = legalPage ? legalPage.description : defaultSeo.description;
    const canonical = legalPage ? `${defaultSeo.canonical}#${path}` : defaultSeo.canonical;
    const setMeta = (selector, attr, value) => {
      const element = document.head.querySelector(selector);
      if (element) {
        element.setAttribute(attr, value);
      }
    };

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", canonical);

    if (legalPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [legalPage, path]);

  if (legalPage) {
    return (
      <main>
        <Header navOpen={navOpen} setNavOpen={setNavOpen} />
        <SeoJsonLd path={path} legalPage={legalPage} />
        <LegalPage page={legalPage} />
        <SiteFooter />
        <CookieBanner />
      </main>
    );
  }

  return (
    <main>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <SeoJsonLd path={path} />

      <section className="hero" id="top" aria-label="Prezentare WERU KLASS">
        <div className="hero-image" role="img" aria-label="Tamplarie moderna PVC si aluminiu montata pe o casa contemporana" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Ferestre, usi, glisante, fatade</p>
          <h1>WERU KLASS</h1>
          <p className="hero-lead">
            Tamplarie PVC si aluminiu pentru locuinte si spatii comerciale, cu masuratori corecte,
            configurare atenta si montaj care tine linia dreapta.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Cere oferta <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#servicii">
              Vezi serviciile <ChevronRight size={18} />
            </a>
          </div>
          <div className="hero-metrics" aria-label="Repere WERU KLASS">
            <span><strong>PVC</strong> eficient energetic</span>
            <span><strong>Aluminiu</strong> pentru vitraje ample</span>
            <span><strong>Montaj</strong> masurat si verificat</span>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-inner intro-grid">
          <div>
            <p className="section-kicker">Pentru proiecte curate</p>
            <h2>Solutii potrivite casei, nu doar dimensiunii golului.</h2>
          </div>
          <p>
            Alegerea tamplariei inseamna confort termic, lumina buna, siguranta si aspect coerent.
            WERU KLASS combina profile PVC si aluminiu cu sticla, feronerie si accesorii potrivite
            pentru fiecare tip de proiect.
          </p>
        </div>
      </section>

      <section className="section-inner services-section" id="servicii">
        <div className="section-heading">
          <p className="section-kicker">Servicii</p>
          <h2>Tamplarie configurata pentru utilizare reala.</h2>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <span className="card-icon"><Icon size={24} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-band">
        <div className="section-inner split">
          <div>
            <p className="section-kicker light">De ce conteaza detaliile</p>
            <h2>Etansare, rigiditate, sticla si montaj lucrate impreuna.</h2>
            <p>
              O fereastra buna nu inseamna doar profil. Conteaza masuratoarea, alegerea armaturii,
              tipul de geam, feroneria, spuma, benzile de etansare si reglajul final.
            </p>
          </div>
          <div className="benefits-list">
            {benefits.map((benefit) => (
              <div className="benefit" key={benefit}>
                <Check size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-inner process-section" id="proces">
        <div className="section-heading">
          <p className="section-kicker">Proces</p>
          <h2>De la discutie la montaj, pasii sunt clari.</h2>
        </div>
        <div className="process-grid">
          <article>
            <span>01</span>
            <Ruler size={24} />
            <h3>Masurare</h3>
            <p>Verificam golurile, peretii, pragurile si sensurile de deschidere.</p>
          </article>
          <article>
            <span>02</span>
            <Gauge size={24} />
            <h3>Configurare</h3>
            <p>Alegem profilul, sticla, culoarea, feroneria si accesoriile potrivite.</p>
          </article>
          <article>
            <span>03</span>
            <Hammer size={24} />
            <h3>Montaj</h3>
            <p>Montam, etansam, reglam si lasam tamplaria pregatita pentru utilizare.</p>
          </article>
          <article>
            <span>04</span>
            <ShieldCheck size={24} />
            <h3>Verificare</h3>
            <p>Controlam inchiderile, planeitatea si detaliile finale inainte de predare.</p>
          </article>
        </div>
      </section>

      <section className="work-band" id="lucrari">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Lucrari</p>
            <h2>Tipuri de proiecte pentru care WERU KLASS poate fi partener.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span>{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-inner contact-grid">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Trimite dimensiunile sau programeaza o masuratoare.</h2>
            <p>
              Pentru o oferta corecta, pregateste latimea si inaltimea golurilor, tipul de lucrare
              si cateva fotografii ale zonei unde se monteaza tamplaria.
            </p>
          </div>
          <div className="contact-panel">
            <a href="tel:+40720539697"><Phone size={20} /> {company.phone}</a>
            <a href={`mailto:${company.email}`}><Mail size={20} /> {company.email}</a>
            <span><MapPin size={20} /> {company.address.replace(", Romania", "")}</span>
            <div className="contact-note">
              <BadgeCheck size={20} />
              <p>{company.name} | CUI {company.cui} | Nr. Reg. Com. {company.regCom}</p>
            </div>
          </div>
        </div>
      </section>

      <AnpcBanners />

      <SiteFooter />
      <WhatsAppButton />
      <CookieBanner />
    </main>
  );
}

function SeoJsonLd({ path, legalPage }) {
  const data = legalPage
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `https://weruklass.ro/#${path}`,
        name: `${legalPage.title} | WERU KLASS`,
        description: legalPage.description,
        isPartOf: {
          "@type": "WebSite",
          name: "WERU KLASS",
          url: "https://weruklass.ro/",
        },
        about: {
          "@id": "https://weruklass.ro/#business",
        },
      }
    : {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://weruklass.ro/#website",
            name: "WERU KLASS",
            url: "https://weruklass.ro/",
            inLanguage: "ro-RO",
          },
          {
            "@type": "Service",
            "@id": "https://weruklass.ro/#services",
            name: "Tamplarie PVC si aluminiu",
            provider: {
              "@id": "https://weruklass.ro/#business",
            },
            areaServed: ["Voluntari", "Ilfov", "Bucuresti", "Romania"],
            serviceType: [
              "Ferestre PVC",
              "Usi PVC si aluminiu",
              "Sisteme glisante",
              "Fatade aluminiu",
              "Montaj tamplarie",
            ],
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://weruklass.ro/#breadcrumbs",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Acasa",
                item: "https://weruklass.ro/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: "https://weruklass.ro/#contact",
              },
            ],
          },
        ],
      };

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/40720539697"
      target="_blank"
      rel="noreferrer"
      aria-label="Contacteaza WERU KLASS pe WhatsApp"
    >
      <MessageCircle size={26} />
      <span>WhatsApp</span>
    </a>
  );
}

function AnpcBanners() {
  return (
    <section className="anpc-section" aria-label="Informare ANPC">
      <div className="section-inner anpc-inner">
        {anpcBanners.map(({ title, subtitle, text, href, icon: Icon }) => (
          <a className="anpc-banner" href={href} target="_blank" rel="noreferrer" key={title}>
            <span className="anpc-mark">{title}</span>
            <span className="anpc-copy">
              <strong>{subtitle}</strong>
              <small>{text}</small>
            </span>
            <span className="anpc-icon">
              <Icon size={22} />
              <ExternalLink size={16} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function LegalPage({ page }) {
  return (
    <section className="legal-page">
      <div className="section-inner legal-layout">
        <aside className="legal-nav" aria-label="Pagini legale">
          <span><FileText size={18} /> Pagini legale</span>
          <a href="#/termeni">Termeni si conditii</a>
          <a href="#/confidentialitate">Politica de confidentialitate</a>
          <a href="#/cookies">Politica de cookies</a>
          <a href="#top">Inapoi la site</a>
        </aside>
        <article className="legal-content">
          <p className="section-kicker">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="legal-intro">{page.intro}</p>
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <p className="legal-updated">Ultima actualizare: 30 iulie 2026</p>
        </article>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer>
      <span>WERU KLASS</span>
      <span>Tamplarie PVC si aluminiu</span>
      <span><SunMedium size={16} /> Confort, lumina, siguranta</span>
      <div className="footer-links">
        <a href="#/termeni">Termeni</a>
        <a href="#/confidentialitate">Confidentialitate</a>
        <a href="#/cookies">Cookies</a>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
