import {
  Palette,
  Code2,
  Smartphone,
  ServerCog,
  Wrench,
  LineChart,
  Database,
  ShieldCheck,
  Megaphone,
  Film,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Localized } from "./i18n";

const img = (id: string, w = 900, h = 700) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

/* ------------------------------------------------------------------ */
/* Domains de formation                                                 */
/* ------------------------------------------------------------------ */
export interface FormationDomain {
  id: string;
  icon: LucideIcon;
  name: Localized;
  description: Localized;
}

export const formationDomains: FormationDomain[] = [
  {
    id: "design",
    icon: Palette,
    name: { fr: "Design & Créativité", en: "Design & Creativity" },
    description: {
      fr: "Concevez des expériences visuelles qui marquent les esprits.",
      en: "Create visual experiences that leave a lasting impression.",
    },
  },
  {
    id: "dev",
    icon: Code2,
    name: { fr: "Développement Web & Mobile", en: "Web & Mobile Development" },
    description: {
      fr: "Du code propre, des apps performantes et des interfaces modernes.",
      en: "Clean code, high-performance apps and modern interfaces.",
    },
  },
  {
    id: "devops",
    icon: ServerCog,
    name: { fr: "DevOps & Cloud", en: "DevOps & Cloud" },
    description: {
      fr: "Automatisez, déployez et scalez en toute sérénité.",
      en: "Automate, deploy and scale with confidence.",
    },
  },
  {
    id: "data",
    icon: LineChart,
    name: { fr: "Data & Intelligence Artificielle", en: "Data & Artificial Intelligence" },
    description: {
      fr: "Exploitez la puissance de la donnée pour créer de la valeur.",
      en: "Harness the power of data to create real value.",
    },
  },
  {
    id: "marketing",
    icon: Megaphone,
    name: { fr: "Marketing Digital", en: "Digital Marketing" },
    description: {
      fr: "Atteignez votre audience, engagez et convertissez en ligne.",
      en: "Reach your audience, engage and convert online.",
    },
  },
  {
    id: "security",
    icon: ShieldCheck,
    name: { fr: "Cybersécurité", en: "Cybersecurity" },
    description: {
      fr: "Protégez les systèmes et les données contre les menaces numériques.",
      en: "Protect systems and data from digital threats.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Formations — présentées comme des plans / parcours                  */
/* ------------------------------------------------------------------ */
export interface FormationModule {
  name: string;
  detail: string;
  duration: string;
  learn: string[];
}

export interface Formation {
  id: string;
  domain: string;
  icon: LucideIcon;
  title: Localized;
  level: Localized;
  tagline: Localized;
  duration: Localized;
  price: number; // FCFA
  popular?: boolean;
  learn: Localized<string[]>;
  modules: Localized<FormationModule[]>;
}

export const formations: Formation[] = [
  /* ---- DESIGN ---- */
  {
    id: "ux-ui-design",
    domain: "design",
    icon: Palette,
    title: { fr: "UX / UI Design", en: "UX / UI Design" },
    level: { fr: "Débutant → Intermédiaire", en: "Beginner → Intermediate" },
    tagline: {
      fr: "Concevez des interfaces utiles, esthétiques et centrées utilisateur.",
      en: "Design useful, beautiful and user-centered interfaces.",
    },
    duration: { fr: "8 semaines", en: "8 weeks" },
    price: 150000,
    learn: {
      fr: [
        "Les fondamentaux du design d'expérience (UX)",
        "Recherche utilisateur & personas",
        "Wireframing et prototypage sur Figma",
        "Design systems et composants réutilisables",
        "Tests d'utilisabilité et itération",
      ],
      en: [
        "Foundations of user experience (UX)",
        "User research & personas",
        "Wireframing and prototyping in Figma",
        "Design systems and reusable components",
        "Usability testing and iteration",
      ],
    },
    modules: {
      fr: [
        {
          name: "Fondamentaux UX",
          detail: "Empathie, parcours utilisateur, architecture de l'information et principes Gestalt.",
          duration: "2 semaines",
          learn: ["Principes UX", "User journeys", "Architecture d'information", "Heuristiques de Nielsen"],
        },
        {
          name: "UI & Figma",
          detail: "Maîtrise de Figma, grilles, typographie, couleur, auto-layout et composants avancés.",
          duration: "2 semaines",
          learn: ["Interface Figma", "Grilles & espacements", "Typographie & couleurs", "Auto-layout"],
        },
        {
          name: "Design System",
          detail: "Tokens de design, composants atomiques, variantes et documentation pour les équipes.",
          duration: "2 semaines",
          learn: ["Design tokens", "Composants atomiques", "Variantes & états", "Documentation"],
        },
        {
          name: "Projet final",
          detail: "Conception complète d'une application de A à Z, de la recherche au prototype haute fidélité.",
          duration: "2 semaines",
          learn: ["Recherche terrain", "Prototypage HF", "Tests utilisateurs", "Présentation portfolio"],
        },
      ],
      en: [
        {
          name: "UX foundations",
          detail: "Empathy, user journeys, information architecture and Gestalt principles.",
          duration: "2 weeks",
          learn: ["UX principles", "User journeys", "Information architecture", "Nielsen heuristics"],
        },
        {
          name: "UI & Figma",
          detail: "Master Figma, grids, typography, color and auto-layout.",
          duration: "2 weeks",
          learn: ["Figma interface", "Grids & spacing", "Typography & colors", "Auto-layout"],
        },
        {
          name: "Design System",
          detail: "Design tokens, atomic components, variants and team documentation.",
          duration: "2 weeks",
          learn: ["Design tokens", "Atomic components", "Variants & states", "Documentation"],
        },
        {
          name: "Capstone project",
          detail: "Design a complete application end to end, from research to high-fidelity prototype.",
          duration: "2 weeks",
          learn: ["Field research", "HF prototyping", "Usability testing", "Portfolio presentation"],
        },
      ],
    },
  },
  {
    id: "motion-design",
    domain: "design",
    icon: Film,
    title: { fr: "Motion Design & Vidéo", en: "Motion Design & Video" },
    level: { fr: "Débutant → Intermédiaire", en: "Beginner → Intermediate" },
    tagline: {
      fr: "Créez des animations percutantes pour le web et les réseaux sociaux.",
      en: "Create impactful animations for web and social media.",
    },
    duration: { fr: "6 semaines", en: "6 weeks" },
    price: 120000,
    learn: {
      fr: [
        "Principes de l'animation et du timing",
        "After Effects pour l'animation graphique",
        "Motion pour le web (Lottie, CSS)",
        "Montage vidéo et export optimisé",
        "Création de contenus pour les réseaux sociaux",
      ],
      en: [
        "Animation and timing principles",
        "After Effects for graphic animation",
        "Web motion (Lottie, CSS)",
        "Video editing and optimized export",
        "Social media content creation",
      ],
    },
    modules: {
      fr: [
        {
          name: "Bases de l'animation",
          detail: "Les 12 principes Disney, timing, easing et storytelling visuel.",
          duration: "1 semaine",
          learn: ["12 principes Disney", "Timing & easing", "Storyboarding", "Storytelling visuel"],
        },
        {
          name: "After Effects",
          detail: "Interface, compositions, masques, effets et expressions AE.",
          duration: "2 semaines",
          learn: ["Interface AE", "Compositions & calques", "Effets & masques", "Expressions basiques"],
        },
        {
          name: "Motion pour le web",
          detail: "Animations Lottie, CSS animations et intégration dans des projets React.",
          duration: "2 semaines",
          learn: ["Lottie + Bodymovin", "CSS animations", "Motion React", "Optimisation web"],
        },
        {
          name: "Projet social media",
          detail: "Création d'une identité motion complète pour une marque fictive.",
          duration: "1 semaine",
          learn: ["Brand motion", "Formats réseaux", "Export multi-format", "Portfolio"],
        },
      ],
      en: [
        {
          name: "Animation basics",
          detail: "The 12 Disney principles, timing, easing and visual storytelling.",
          duration: "1 week",
          learn: ["12 Disney principles", "Timing & easing", "Storyboarding", "Visual storytelling"],
        },
        {
          name: "After Effects",
          detail: "Interface, compositions, masks, effects and AE expressions.",
          duration: "2 weeks",
          learn: ["AE interface", "Compositions & layers", "Effects & masks", "Basic expressions"],
        },
        {
          name: "Web motion",
          detail: "Lottie animations, CSS animations and integration in React projects.",
          duration: "2 weeks",
          learn: ["Lottie + Bodymovin", "CSS animations", "Motion React", "Web optimization"],
        },
        {
          name: "Social media project",
          detail: "Create a complete motion identity for a fictional brand.",
          duration: "1 week",
          learn: ["Brand motion", "Social formats", "Multi-format export", "Portfolio"],
        },
      ],
    },
  },

  /* ---- DÉVELOPPEMENT ---- */
  {
    id: "fullstack-web",
    domain: "dev",
    icon: Code2,
    title: { fr: "Développement Web Full-Stack", en: "Full-Stack Web Development" },
    level: { fr: "Débutant → Avancé", en: "Beginner → Advanced" },
    tagline: {
      fr: "Devenez développeur web complet : du front React au back-end et API.",
      en: "Become a complete web developer: from React front-end to back-end & APIs.",
    },
    duration: { fr: "16 semaines", en: "16 weeks" },
    price: 320000,
    popular: true,
    learn: {
      fr: [
        "HTML, CSS moderne et JavaScript ES6+",
        "React, hooks et gestion d'état",
        "API REST avec Node.js & Express",
        "Bases de données SQL et NoSQL",
        "Déploiement et bonnes pratiques Git",
      ],
      en: [
        "HTML, modern CSS and JavaScript ES6+",
        "React, hooks and state management",
        "REST APIs with Node.js & Express",
        "SQL and NoSQL databases",
        "Deployment and Git best practices",
      ],
    },
    modules: {
      fr: [
        {
          name: "Bases du web",
          detail: "HTML sémantique, CSS responsive, Flexbox, Grid et JavaScript moderne.",
          duration: "3 semaines",
          learn: ["HTML sémantique", "CSS & Flexbox/Grid", "JavaScript ES6+", "DOM & événements"],
        },
        {
          name: "Front-end React",
          detail: "Composants, hooks, routing avec React Router, appels d'API et gestion d'état.",
          duration: "4 semaines",
          learn: ["Composants & JSX", "Hooks (useState, useEffect)", "React Router", "Fetch & Axios"],
        },
        {
          name: "Back-end & API",
          detail: "Node.js, Express, middlewares, authentification JWT et sécurité applicative.",
          duration: "4 semaines",
          learn: ["Node.js & Express", "API RESTful", "Authentification JWT", "Sécurité & CORS"],
        },
        {
          name: "Base de données",
          detail: "Modélisation relationnelle avec PostgreSQL et document store avec MongoDB.",
          duration: "3 semaines",
          learn: ["SQL & PostgreSQL", "MongoDB & Mongoose", "ORM Prisma", "Migrations"],
        },
        {
          name: "Projet déployé",
          detail: "Une application full-stack complète mise en production sur le cloud.",
          duration: "2 semaines",
          learn: ["Déploiement Render/Vercel", "CI/CD GitHub Actions", "Variables d'environnement", "Monitoring"],
        },
      ],
      en: [
        {
          name: "Web basics",
          detail: "Semantic HTML, responsive CSS, Flexbox, Grid and modern JavaScript.",
          duration: "3 weeks",
          learn: ["Semantic HTML", "CSS & Flexbox/Grid", "JavaScript ES6+", "DOM & events"],
        },
        {
          name: "React front-end",
          detail: "Components, hooks, routing with React Router, API calls and state management.",
          duration: "4 weeks",
          learn: ["Components & JSX", "Hooks (useState, useEffect)", "React Router", "Fetch & Axios"],
        },
        {
          name: "Back-end & API",
          detail: "Node.js, Express, middlewares, JWT authentication and application security.",
          duration: "4 weeks",
          learn: ["Node.js & Express", "RESTful API", "JWT auth", "Security & CORS"],
        },
        {
          name: "Databases",
          detail: "Relational modeling with PostgreSQL and document store with MongoDB.",
          duration: "3 weeks",
          learn: ["SQL & PostgreSQL", "MongoDB & Mongoose", "Prisma ORM", "Migrations"],
        },
        {
          name: "Deployed project",
          detail: "A complete full-stack application shipped to production on the cloud.",
          duration: "2 weeks",
          learn: ["Render/Vercel deploy", "CI/CD GitHub Actions", "Env variables", "Monitoring"],
        },
      ],
    },
  },
  {
    id: "mobile-dev",
    domain: "dev",
    icon: Smartphone,
    title: { fr: "Développement Mobile", en: "Mobile Development" },
    level: { fr: "Intermédiaire", en: "Intermediate" },
    tagline: {
      fr: "Créez des applications mobiles iOS et Android avec React Native.",
      en: "Build iOS and Android mobile apps with React Native.",
    },
    duration: { fr: "10 semaines", en: "10 weeks" },
    price: 220000,
    learn: {
      fr: [
        "React Native & Expo",
        "Navigation mobile (React Navigation)",
        "Gestion d'état avec Zustand",
        "APIs natives (caméra, géolocalisation, push)",
        "Publication sur App Store & Google Play",
      ],
      en: [
        "React Native & Expo",
        "Mobile navigation (React Navigation)",
        "State management with Zustand",
        "Native APIs (camera, geolocation, push)",
        "Publishing to App Store & Google Play",
      ],
    },
    modules: {
      fr: [
        {
          name: "React Native & Expo",
          detail: "Création de projet, composants natifs, StyleSheet et layout avec Flexbox.",
          duration: "2 semaines",
          learn: ["Setup Expo", "Composants natifs", "StyleSheet & Flexbox", "Hot reload"],
        },
        {
          name: "Navigation & UX Mobile",
          detail: "Stack, Tab et Drawer navigators avec React Navigation.",
          duration: "2 semaines",
          learn: ["Stack Navigator", "Tab Navigator", "Drawer", "Deep links"],
        },
        {
          name: "APIs Natives & Cloud",
          detail: "Caméra, géolocalisation, notifications push et intégration Firebase.",
          duration: "3 semaines",
          learn: ["Expo Camera", "Géolocalisation", "Push Notifications", "Firebase Auth"],
        },
        {
          name: "Publication & Stores",
          detail: "Build, signature d'app, soumission App Store et Google Play.",
          duration: "1 semaine",
          learn: ["EAS Build", "App signing", "App Store Connect", "Google Play Console"],
        },
        {
          name: "Projet mobile complet",
          detail: "Développement d'une application mobile de A à Z avec publication.",
          duration: "2 semaines",
          learn: ["Architecture app", "Tests E2E", "Performance", "Déploiement stores"],
        },
      ],
      en: [
        {
          name: "React Native & Expo",
          detail: "Project setup, native components, StyleSheet and Flexbox layout.",
          duration: "2 weeks",
          learn: ["Expo setup", "Native components", "StyleSheet & Flexbox", "Hot reload"],
        },
        {
          name: "Navigation & Mobile UX",
          detail: "Stack, Tab and Drawer navigators with React Navigation.",
          duration: "2 weeks",
          learn: ["Stack Navigator", "Tab Navigator", "Drawer", "Deep links"],
        },
        {
          name: "Native APIs & Cloud",
          detail: "Camera, geolocation, push notifications and Firebase integration.",
          duration: "3 weeks",
          learn: ["Expo Camera", "Geolocation", "Push Notifications", "Firebase Auth"],
        },
        {
          name: "Publishing & Stores",
          detail: "Build, app signing, App Store and Google Play submission.",
          duration: "1 week",
          learn: ["EAS Build", "App signing", "App Store Connect", "Google Play Console"],
        },
        {
          name: "Full mobile project",
          detail: "Build a complete mobile application from scratch with publishing.",
          duration: "2 weeks",
          learn: ["App architecture", "E2E tests", "Performance", "Store deployment"],
        },
      ],
    },
  },

  /* ---- DEVOPS ---- */
  {
    id: "devops-cloud",
    domain: "devops",
    icon: ServerCog,
    title: { fr: "DevOps & Cloud", en: "DevOps & Cloud" },
    level: { fr: "Intermédiaire → Avancé", en: "Intermediate → Advanced" },
    tagline: {
      fr: "Automatisez, déployez et scalez vos applications dans le cloud.",
      en: "Automate, deploy and scale your applications in the cloud.",
    },
    duration: { fr: "12 semaines", en: "12 weeks" },
    price: 280000,
    learn: {
      fr: [
        "Conteneurisation avec Docker",
        "Orchestration avec Kubernetes",
        "Pipelines CI/CD (GitHub Actions)",
        "Infrastructure as Code (Terraform)",
        "Monitoring et observabilité",
      ],
      en: [
        "Containerization with Docker",
        "Orchestration with Kubernetes",
        "CI/CD pipelines (GitHub Actions)",
        "Infrastructure as Code (Terraform)",
        "Monitoring and observability",
      ],
    },
    modules: {
      fr: [
        {
          name: "Docker",
          detail: "Images, conteneurs, volumes, réseaux et Docker Compose pour les environnements multi-services.",
          duration: "3 semaines",
          learn: ["Dockerfile", "Images & conteneurs", "Docker Compose", "Volumes & réseaux"],
        },
        {
          name: "CI/CD",
          detail: "Automatisation des tests, lint et déploiements avec GitHub Actions et GitLab CI.",
          duration: "2 semaines",
          learn: ["GitHub Actions", "Pipelines", "Secrets & variables", "Déploiement automatisé"],
        },
        {
          name: "Kubernetes",
          detail: "Déploiements, services, ingress et gestion de la scalabilité dans un cluster K8s.",
          duration: "3 semaines",
          learn: ["Pods & Deployments", "Services & Ingress", "ConfigMaps & Secrets", "Autoscaling"],
        },
        {
          name: "Cloud & IaC",
          detail: "AWS ou GCP, IAM, VPC, EC2/GCE et Terraform pour l'infrastructure reproductible.",
          duration: "3 semaines",
          learn: ["AWS / GCP", "Terraform", "IAM & VPC", "S3 / Cloud Storage"],
        },
        {
          name: "Observabilité",
          detail: "Logs centralisés, métriques avec Prometheus/Grafana et alerting en production.",
          duration: "1 semaine",
          learn: ["Prometheus", "Grafana", "ELK Stack", "Alertes & SLOs"],
        },
      ],
      en: [
        {
          name: "Docker",
          detail: "Images, containers, volumes, networks and Docker Compose for multi-service environments.",
          duration: "3 weeks",
          learn: ["Dockerfile", "Images & containers", "Docker Compose", "Volumes & networks"],
        },
        {
          name: "CI/CD",
          detail: "Automate tests, lint and deployments with GitHub Actions and GitLab CI.",
          duration: "2 weeks",
          learn: ["GitHub Actions", "Pipelines", "Secrets & variables", "Automated deployment"],
        },
        {
          name: "Kubernetes",
          detail: "Deployments, services, ingress and scalability management in a K8s cluster.",
          duration: "3 weeks",
          learn: ["Pods & Deployments", "Services & Ingress", "ConfigMaps & Secrets", "Autoscaling"],
        },
        {
          name: "Cloud & IaC",
          detail: "AWS or GCP, IAM, VPC, EC2/GCE and Terraform for reproducible infrastructure.",
          duration: "3 weeks",
          learn: ["AWS / GCP", "Terraform", "IAM & VPC", "S3 / Cloud Storage"],
        },
        {
          name: "Observability",
          detail: "Centralized logs, metrics with Prometheus/Grafana and production alerting.",
          duration: "1 week",
          learn: ["Prometheus", "Grafana", "ELK Stack", "Alerts & SLOs"],
        },
      ],
    },
  },

  /* ---- DATA & IA ---- */
  {
    id: "data-ia",
    domain: "data",
    icon: LineChart,
    title: { fr: "Data & Intelligence Artificielle", en: "Data & Artificial Intelligence" },
    level: { fr: "Intermédiaire", en: "Intermediate" },
    tagline: {
      fr: "Exploitez la donnée et l'IA pour créer de la valeur métier.",
      en: "Leverage data and AI to create real business value.",
    },
    duration: { fr: "14 semaines", en: "14 weeks" },
    price: 300000,
    learn: {
      fr: [
        "Python pour la data",
        "Analyse et visualisation de données",
        "Machine learning supervisé",
        "Introduction aux LLM et à l'IA générative",
        "Mise en production d'un modèle",
      ],
      en: [
        "Python for data",
        "Data analysis and visualization",
        "Supervised machine learning",
        "Introduction to LLMs and generative AI",
        "Putting a model into production",
      ],
    },
    modules: {
      fr: [
        {
          name: "Python & Data",
          detail: "Pandas, NumPy, nettoyage et transformation de données avec des datasets réels.",
          duration: "3 semaines",
          learn: ["Python avancé", "Pandas & NumPy", "Nettoyage de données", "Feature engineering"],
        },
        {
          name: "Visualisation",
          detail: "Tableaux de bord interactifs, storytelling de la donnée avec Matplotlib et Plotly.",
          duration: "2 semaines",
          learn: ["Matplotlib", "Seaborn", "Plotly & Dash", "Storytelling data"],
        },
        {
          name: "Machine Learning",
          detail: "Régression, classification, clustering, évaluation de modèles et scikit-learn.",
          duration: "4 semaines",
          learn: ["Régression & classification", "Scikit-learn", "Cross-validation", "Hyperparamètres"],
        },
        {
          name: "IA générative",
          detail: "Prompting avancé, RAG, Fine-tuning et intégration d'API OpenAI / Anthropic.",
          duration: "3 semaines",
          learn: ["Prompt engineering", "RAG avec LangChain", "Fine-tuning", "API OpenAI"],
        },
        {
          name: "MLOps & Production",
          detail: "Packaging, API FastAPI, déploiement d'un modèle et monitoring en production.",
          duration: "2 semaines",
          learn: ["FastAPI", "Docker ML", "MLflow", "Monitoring modèle"],
        },
      ],
      en: [
        {
          name: "Python & Data",
          detail: "Pandas, NumPy, data cleaning and transformation with real datasets.",
          duration: "3 weeks",
          learn: ["Advanced Python", "Pandas & NumPy", "Data cleaning", "Feature engineering"],
        },
        {
          name: "Visualization",
          detail: "Interactive dashboards and data storytelling with Matplotlib and Plotly.",
          duration: "2 weeks",
          learn: ["Matplotlib", "Seaborn", "Plotly & Dash", "Data storytelling"],
        },
        {
          name: "Machine Learning",
          detail: "Regression, classification, clustering, model evaluation and scikit-learn.",
          duration: "4 weeks",
          learn: ["Regression & classification", "Scikit-learn", "Cross-validation", "Hyperparameters"],
        },
        {
          name: "Generative AI",
          detail: "Advanced prompting, RAG, Fine-tuning and OpenAI / Anthropic API integration.",
          duration: "3 weeks",
          learn: ["Prompt engineering", "RAG with LangChain", "Fine-tuning", "OpenAI API"],
        },
        {
          name: "MLOps & Production",
          detail: "Packaging, FastAPI, model deployment and production monitoring.",
          duration: "2 weeks",
          learn: ["FastAPI", "Docker ML", "MLflow", "Model monitoring"],
        },
      ],
    },
  },

  /* ---- MARKETING ---- */
  {
    id: "marketing-digital",
    domain: "marketing",
    icon: Megaphone,
    title: { fr: "Marketing Digital & SEO", en: "Digital Marketing & SEO" },
    level: { fr: "Débutant → Intermédiaire", en: "Beginner → Intermediate" },
    tagline: {
      fr: "Maîtrisez les leviers du marketing en ligne pour booster votre visibilité.",
      en: "Master digital marketing levers to boost your online visibility.",
    },
    duration: { fr: "8 semaines", en: "8 weeks" },
    price: 130000,
    learn: {
      fr: [
        "SEO technique et rédactionnel",
        "Google Ads & Meta Ads",
        "Email marketing et automation",
        "Analytics et mesure de performance",
        "Stratégie de contenu",
      ],
      en: [
        "Technical and editorial SEO",
        "Google Ads & Meta Ads",
        "Email marketing and automation",
        "Analytics and performance measurement",
        "Content strategy",
      ],
    },
    modules: {
      fr: [
        {
          name: "Fondamentaux Marketing Digital",
          detail: "Écosystème digital, funnel d'acquisition et définition de KPIs clés.",
          duration: "1 semaine",
          learn: ["Funnel d'acquisition", "KPIs & métriques", "Personas marketing", "Stratégie omnicanal"],
        },
        {
          name: "SEO",
          detail: "Audit SEO, mots-clés, optimisation on-page, netlinking et SEO technique.",
          duration: "2 semaines",
          learn: ["Audit SEO", "Recherche mots-clés", "On-page SEO", "Core Web Vitals"],
        },
        {
          name: "Publicité en ligne",
          detail: "Google Ads Search/Display, Meta Ads, ciblage, budget et optimisation des campagnes.",
          duration: "2 semaines",
          learn: ["Google Search Ads", "Meta Ads", "Ciblage & audiences", "A/B testing"],
        },
        {
          name: "Content & Email Marketing",
          detail: "Création de contenu, calendrier éditorial et automation email avec Mailchimp.",
          duration: "2 semaines",
          learn: ["Stratégie de contenu", "Rédaction web", "Email automation", "Segmentation"],
        },
        {
          name: "Analytics & Reporting",
          detail: "Google Analytics 4, Tag Manager, tableaux de bord et reporting performance.",
          duration: "1 semaine",
          learn: ["GA4", "Google Tag Manager", "Dashboards", "Reporting client"],
        },
      ],
      en: [
        {
          name: "Digital Marketing Fundamentals",
          detail: "Digital ecosystem, acquisition funnel and defining key KPIs.",
          duration: "1 week",
          learn: ["Acquisition funnel", "KPIs & metrics", "Marketing personas", "Omnichannel strategy"],
        },
        {
          name: "SEO",
          detail: "SEO audit, keywords, on-page optimization, link building and technical SEO.",
          duration: "2 weeks",
          learn: ["SEO audit", "Keyword research", "On-page SEO", "Core Web Vitals"],
        },
        {
          name: "Online Advertising",
          detail: "Google Ads Search/Display, Meta Ads, targeting, budget and campaign optimization.",
          duration: "2 weeks",
          learn: ["Google Search Ads", "Meta Ads", "Targeting & audiences", "A/B testing"],
        },
        {
          name: "Content & Email Marketing",
          detail: "Content creation, editorial calendar and email automation with Mailchimp.",
          duration: "2 weeks",
          learn: ["Content strategy", "Web copywriting", "Email automation", "Segmentation"],
        },
        {
          name: "Analytics & Reporting",
          detail: "Google Analytics 4, Tag Manager, dashboards and performance reporting.",
          duration: "1 week",
          learn: ["GA4", "Google Tag Manager", "Dashboards", "Client reporting"],
        },
      ],
    },
  },

  /* ---- CYBERSÉCURITÉ ---- */
  {
    id: "cybersecurite",
    domain: "security",
    icon: ShieldCheck,
    title: { fr: "Cybersécurité", en: "Cybersecurity" },
    level: { fr: "Intermédiaire → Avancé", en: "Intermediate → Advanced" },
    tagline: {
      fr: "Protégez les systèmes et données contre les cybermenaces modernes.",
      en: "Protect systems and data against modern cyber threats.",
    },
    duration: { fr: "12 semaines", en: "12 weeks" },
    price: 270000,
    learn: {
      fr: [
        "Bases des réseaux et protocoles",
        "Cryptographie et PKI",
        "Tests de pénétration (pentest)",
        "Sécurité des applications web (OWASP)",
        "Réponse aux incidents et forensique",
      ],
      en: [
        "Network basics and protocols",
        "Cryptography and PKI",
        "Penetration testing",
        "Web application security (OWASP)",
        "Incident response and forensics",
      ],
    },
    modules: {
      fr: [
        {
          name: "Fondamentaux Sécurité",
          detail: "Modèle CIA, réseaux TCP/IP, protocoles et introduction à Linux pour la sécurité.",
          duration: "2 semaines",
          learn: ["Modèle CIA", "Réseaux TCP/IP", "Protocoles (HTTP, DNS, SSL)", "Linux sécurisé"],
        },
        {
          name: "Cryptographie",
          detail: "Chiffrement symétrique et asymétrique, certificats SSL/TLS et gestion des clés.",
          duration: "2 semaines",
          learn: ["Chiffrement AES/RSA", "Hachage SHA", "PKI & certificats", "TLS/HTTPS"],
        },
        {
          name: "Pentest & Audit",
          detail: "Méthodologie pentest, outils (Nmap, Metasploit, Burp Suite), rapport d'audit.",
          duration: "4 semaines",
          learn: ["Reconnaissance", "Exploitation", "Post-exploitation", "Rapport d'audit"],
        },
        {
          name: "Sécurité Web (OWASP)",
          detail: "Top 10 OWASP, injections SQL, XSS, CSRF et sécurisation d'API.",
          duration: "2 semaines",
          learn: ["Injections SQL", "XSS & CSRF", "Broken Auth", "Sécurisation API"],
        },
        {
          name: "Incident Response",
          detail: "Plan de réponse aux incidents, forensique numérique et analyse de logs.",
          duration: "2 semaines",
          learn: ["SIEM & logs", "Analyse forensique", "Plan IR", "Compliance RGPD"],
        },
      ],
      en: [
        {
          name: "Security Fundamentals",
          detail: "CIA model, TCP/IP networks, protocols and introduction to Linux for security.",
          duration: "2 weeks",
          learn: ["CIA model", "TCP/IP networks", "Protocols (HTTP, DNS, SSL)", "Secure Linux"],
        },
        {
          name: "Cryptography",
          detail: "Symmetric and asymmetric encryption, SSL/TLS certificates and key management.",
          duration: "2 weeks",
          learn: ["AES/RSA encryption", "SHA hashing", "PKI & certificates", "TLS/HTTPS"],
        },
        {
          name: "Pentest & Audit",
          detail: "Pentest methodology, tools (Nmap, Metasploit, Burp Suite), audit report.",
          duration: "4 weeks",
          learn: ["Reconnaissance", "Exploitation", "Post-exploitation", "Audit report"],
        },
        {
          name: "Web Security (OWASP)",
          detail: "OWASP Top 10, SQL injections, XSS, CSRF and API hardening.",
          duration: "2 weeks",
          learn: ["SQL injections", "XSS & CSRF", "Broken Auth", "API hardening"],
        },
        {
          name: "Incident Response",
          detail: "Incident response plan, digital forensics and log analysis.",
          duration: "2 weeks",
          learn: ["SIEM & logs", "Forensic analysis", "IR plan", "GDPR compliance"],
        },
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
export interface Service {
  id: string;
  icon: LucideIcon;
  title: Localized;
  desc: Localized;
  features: Localized<string[]>;
  detail: Localized;
}

export const services: Service[] = [
  {
    id: "ux-ui",
    icon: Palette,
    title: { fr: "UX / UI Design", en: "UX / UI Design" },
    desc: {
      fr: "Des interfaces élégantes et intuitives qui convertissent et fidélisent.",
      en: "Elegant, intuitive interfaces that convert and retain.",
    },
    detail: {
      fr: "Nous créons des expériences utilisateur mémorables grâce à une approche centrée sur l'humain. De la recherche utilisateur au design system complet, chaque pixel est pensé pour servir vos objectifs business.",
      en: "We create memorable user experiences through a human-centered approach. From user research to a complete design system, every pixel is crafted to serve your business goals.",
    },
    features: {
      fr: ["Recherche utilisateur & personas", "Wireframes & maquettes haute fidélité", "Design system complet", "Prototypes interactifs", "Tests d'utilisabilité"],
      en: ["User research & personas", "Wireframes & high-fidelity mockups", "Full design system", "Interactive prototypes", "Usability testing"],
    },
  },
  {
    id: "web-dev",
    icon: Code2,
    title: { fr: "Développement Web", en: "Web Development" },
    desc: {
      fr: "Des sites et applications web rapides, robustes et évolutifs.",
      en: "Fast, robust and scalable websites and web applications.",
    },
    detail: {
      fr: "Notre équipe de développeurs full-stack conçoit des solutions web sur mesure, du simple site vitrine à la plateforme SaaS complexe. Performances, sécurité et maintenabilité au cœur de chaque projet.",
      en: "Our full-stack development team builds custom web solutions, from a simple showcase site to a complex SaaS platform. Performance, security and maintainability at the heart of every project.",
    },
    features: {
      fr: ["Sites vitrines & e-commerce", "Applications sur mesure", "Performance & SEO", "Accessibilité WCAG", "Tests & assurance qualité"],
      en: ["Showcase & e-commerce sites", "Custom applications", "Performance & SEO", "WCAG accessibility", "Testing & QA"],
    },
  },
  {
    id: "mobile-dev",
    icon: Smartphone,
    title: { fr: "Développement Mobile", en: "Mobile Development" },
    desc: {
      fr: "Des applications mobiles performantes pour iOS et Android.",
      en: "High-performance mobile apps for iOS and Android.",
    },
    detail: {
      fr: "Nous développons des applications mobiles natives et cross-platform qui offrent une expérience utilisateur fluide et engageante. De la conception à la publication sur les stores.",
      en: "We build native and cross-platform mobile apps that deliver smooth, engaging user experiences. From design to store publishing.",
    },
    features: {
      fr: ["Apps natives & cross-platform", "Expérience fluide & performante", "Intégrations APIs & paiements", "Publication sur les stores", "Maintenance & mises à jour"],
      en: ["Native & cross-platform apps", "Smooth & performant experience", "API & payment integrations", "Store publishing", "Maintenance & updates"],
    },
  },
  {
    id: "devops",
    icon: ServerCog,
    title: { fr: "DevOps & Cloud", en: "DevOps & Cloud" },
    desc: {
      fr: "Automatisation, CI/CD et infrastructure cloud fiable et sécurisée.",
      en: "Automation, CI/CD and reliable, secure cloud infrastructure.",
    },
    detail: {
      fr: "Nous construisons et optimisons votre pipeline de déploiement pour accélérer la livraison logicielle. Infrastructure as Code, conteneurisation et monitoring en temps réel.",
      en: "We build and optimize your deployment pipeline to accelerate software delivery. Infrastructure as Code, containerization and real-time monitoring.",
    },
    features: {
      fr: ["CI/CD & automatisation", "Cloud AWS / GCP / Azure", "Docker & Kubernetes", "Infrastructure as Code", "Sécurité & scalabilité"],
      en: ["CI/CD & automation", "AWS / GCP / Azure cloud", "Docker & Kubernetes", "Infrastructure as Code", "Security & scalability"],
    },
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: { fr: "Maintenance & Support", en: "Maintenance & Support" },
    desc: {
      fr: "Un accompagnement continu pour garder vos produits performants.",
      en: "Continuous support to keep your products performing.",
    },
    detail: {
      fr: "La qualité d'un produit se mesure dans la durée. Nos contrats de maintenance incluent la surveillance proactive, les mises à jour de sécurité, les correctifs et un support réactif.",
      en: "Product quality is measured over time. Our maintenance contracts include proactive monitoring, security updates, bug fixes and responsive support.",
    },
    features: {
      fr: ["Surveillance 24/7", "Correctifs & mises à jour de sécurité", "Support réactif < 4h", "Rapports mensuels", "Optimisation continue"],
      en: ["24/7 monitoring", "Security fixes & updates", "Responsive support < 4h", "Monthly reports", "Continuous optimization"],
    },
  },
  {
    id: "consulting",
    icon: ShieldCheck,
    title: { fr: "Conseil & Stratégie", en: "Consulting & Strategy" },
    desc: {
      fr: "Un accompagnement stratégique pour réussir votre transformation digitale.",
      en: "Strategic guidance to succeed in your digital transformation.",
    },
    detail: {
      fr: "Nous aidons les entreprises à définir et exécuter leur stratégie digitale. Audit de l'existant, feuille de route produit et accompagnement dans le choix des technologies.",
      en: "We help businesses define and execute their digital strategy. Audit of existing systems, product roadmap and technology selection guidance.",
    },
    features: {
      fr: ["Audit digital complet", "Roadmap produit & tech", "Cadrage & priorisation", "Formation des équipes", "Accompagnement sur mesure"],
      en: ["Full digital audit", "Product & tech roadmap", "Scoping & prioritization", "Team training", "Tailored support"],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Projets / Portfolio                                                 */
/* ------------------------------------------------------------------ */
export interface Project {
  id: string;
  title: string;
  category: Localized;
  desc: Localized;
  challenge: Localized;
  solution: Localized;
  image: string;
  tags: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: "fintech-dashboard",
    title: "PayPulse",
    category: { fr: "Fintech · Web App", en: "Fintech · Web App" },
    desc: {
      fr: "Tableau de bord de paiement mobile money avec analytics en temps réel.",
      en: "Mobile-money payment dashboard with real-time analytics.",
    },
    challenge: {
      fr: "Gérer des millions de transactions tout en offrant une UX intuitive à des agents non-techniques.",
      en: "Handle millions of transactions while providing an intuitive UX to non-technical agents.",
    },
    solution: {
      fr: "Architecture microservices, dashboard React temps réel et visualisations Recharts accessibles.",
      en: "Microservices architecture, real-time React dashboard and accessible Recharts visualizations.",
    },
    image: img("photo-1551288049-bebda4e38f71"),
    tags: ["React", "Node.js", "UX/UI"],
    year: "2025",
  },
  {
    id: "edu-platform",
    title: "AkademiPlus",
    category: { fr: "EdTech · Plateforme", en: "EdTech · Platform" },
    desc: {
      fr: "Plateforme e-learning avec cours en direct, quiz et certifications.",
      en: "E-learning platform with live courses, quizzes and certifications.",
    },
    challenge: {
      fr: "Créer une expérience d'apprentissage engageante et scalable pour 10 000+ apprenants simultanés.",
      en: "Build an engaging and scalable learning experience for 10,000+ simultaneous learners.",
    },
    solution: {
      fr: "Next.js, streaming vidéo, moteur de quiz adaptatif et système de certification blockchain.",
      en: "Next.js, video streaming, adaptive quiz engine and blockchain certification system.",
    },
    image: img("photo-1763718528755-4bca23f82ac3"),
    tags: ["Next.js", "DevOps", "Cloud"],
    year: "2025",
  },
  {
    id: "ecommerce",
    title: "Marché Local",
    category: { fr: "E-commerce · Mobile", en: "E-commerce · Mobile" },
    desc: {
      fr: "Application mobile de marketplace connectant artisans et clients.",
      en: "Marketplace mobile app connecting artisans and customers.",
    },
    challenge: {
      fr: "Donner une vitrine digitale aux artisans locaux sans compétences techniques.",
      en: "Give local artisans a digital storefront without technical skills.",
    },
    solution: {
      fr: "React Native, onboarding simplifié, paiement mobile money intégré et géolocalisation.",
      en: "React Native, simplified onboarding, integrated mobile money payment and geolocation.",
    },
    image: img("photo-1609921212029-bb5a28e60960"),
    tags: ["Mobile", "UX/UI", "API"],
    year: "2024",
  },
  {
    id: "health-app",
    title: "SantéConnect",
    category: { fr: "HealthTech · Web App", en: "HealthTech · Web App" },
    desc: {
      fr: "Plateforme de téléconsultation et de suivi médical pour cliniques.",
      en: "Telemedicine and patient-tracking platform for clinics.",
    },
    challenge: {
      fr: "Sécuriser des données médicales sensibles tout en rendant la téléconsultation accessible.",
      en: "Secure sensitive medical data while making telemedicine accessible.",
    },
    solution: {
      fr: "Chiffrement de bout en bout, conformité RGPD, vidéoconférence WebRTC et dossier patient digital.",
      en: "End-to-end encryption, GDPR compliance, WebRTC video conferencing and digital patient records.",
    },
    image: img("photo-1771922748624-b205cf5d002d"),
    tags: ["React", "Sécurité", "Cloud"],
    year: "2024",
  },
  {
    id: "logistics",
    title: "FleetTrack",
    category: { fr: "Logistique · Dashboard", en: "Logistics · Dashboard" },
    desc: {
      fr: "Suivi de flotte en temps réel avec optimisation des itinéraires.",
      en: "Real-time fleet tracking with route optimization.",
    },
    challenge: {
      fr: "Réduire les coûts carburant et les délais de livraison d'une flotte de 500 véhicules.",
      en: "Reduce fuel costs and delivery times for a fleet of 500 vehicles.",
    },
    solution: {
      fr: "IoT trackers, WebSockets pour le temps réel, algorithme d'optimisation des routes et alertes.",
      en: "IoT trackers, WebSockets for real-time, route optimization algorithm and alerts.",
    },
    image: img("photo-1680016661694-1cd3faf31c3a"),
    tags: ["Data", "DevOps", "Maps"],
    year: "2024",
  },
  {
    id: "corporate",
    title: "Nimba Corp",
    category: { fr: "Corporate · Site web", en: "Corporate · Website" },
    desc: {
      fr: "Site institutionnel multilingue avec CMS sur mesure et blog.",
      en: "Multilingual corporate website with custom CMS and blog.",
    },
    challenge: {
      fr: "Refondre l'image digitale d'un groupe panafricain en 3 langues avec gestion de contenu autonome.",
      en: "Revamp the digital image of a pan-African group in 3 languages with autonomous content management.",
    },
    solution: {
      fr: "Next.js, CMS headless Sanity, i18n complet et score Lighthouse 98/100.",
      en: "Next.js, Sanity headless CMS, full i18n and Lighthouse score 98/100.",
    },
    image: img("photo-1560461396-ec0ef7bb29dd"),
    tags: ["Web", "UX/UI", "SEO"],
    year: "2023",
  },
];

/* ------------------------------------------------------------------ */
/* Équipe                                                              */
/* ------------------------------------------------------------------ */
export interface Member {
  name: string;
  role: Localized;
  bio: Localized;
  image: string;
  skills: string[];
}

export const team: Member[] = [
  {
    name: "Mamadou Camara",
    role: { fr: "Fondateur & CEO", en: "Founder & CEO" },
    bio: {
      fr: "Ingénieur logiciel passionné par l'entrepreneuriat tech en Afrique. Ancien ingénieur chez Orange Digital Center.",
      en: "Software engineer passionate about tech entrepreneurship in Africa. Former engineer at Orange Digital Center.",
    },
    image: img("photo-1642257859842-c95f9fa8121d", 600, 700),
    skills: ["Strategy", "Leadership", "Full-Stack"],
  },
  {
    name: "Awa Diallo",
    role: { fr: "Lead UX/UI Designer", en: "Lead UX/UI Designer" },
    bio: {
      fr: "Designer produit avec 6 ans d'expérience sur des projets fintech et EdTech à travers l'Afrique de l'Ouest.",
      en: "Product designer with 6 years of experience on fintech and EdTech projects across West Africa.",
    },
    image: img("photo-1573497161161-c3e73707e25c", 600, 700),
    skills: ["Figma", "UX Research", "Design System"],
  },
  {
    name: "Ibrahima Sow",
    role: { fr: "Lead Développeur Full-Stack", en: "Lead Full-Stack Developer" },
    bio: {
      fr: "Expert React et Node.js, contributeur open source et formateur passionné par le partage de connaissances.",
      en: "React and Node.js expert, open source contributor and trainer passionate about knowledge sharing.",
    },
    image: img("photo-1614023342667-6f060e9d1e04", 600, 700),
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "Fatou Bah",
    role: { fr: "Responsable Académie", en: "Head of Academy" },
    bio: {
      fr: "Pédagogue numérique et ancienne responsable formation chez une grande école d'ingénieurs de Dakar.",
      en: "Digital educator and former training manager at a leading engineering school in Dakar.",
    },
    image: img("photo-1573497491765-dccce02b29df", 600, 700),
    skills: ["Pédagogie", "Curriculum", "Coaching"],
  },
  {
    name: "Oumar Baldé",
    role: { fr: "Ingénieur DevOps & Cloud", en: "DevOps & Cloud Engineer" },
    bio: {
      fr: "Certifié AWS Solutions Architect et Kubernetes Administrator. Expert en infrastructure as code et CI/CD.",
      en: "AWS Solutions Architect and Kubernetes Administrator certified. Expert in infrastructure as code and CI/CD.",
    },
    image: img("photo-1588178454780-441fa5b99fa5", 600, 700),
    skills: ["Docker", "Kubernetes", "AWS"],
  },
  {
    name: "Sékou Touré",
    role: { fr: "Data Scientist", en: "Data Scientist" },
    bio: {
      fr: "Docteur en mathématiques appliquées, spécialisé dans les modèles ML pour les marchés émergents.",
      en: "PhD in applied mathematics, specializing in ML models for emerging markets.",
    },
    image: img("photo-1642736468842-c6bdcfbbcd28", 600, 700),
    skills: ["Python", "ML", "LLMs"],
  },
];

/* ------------------------------------------------------------------ */
/* Témoignages                                                        */
/* ------------------------------------------------------------------ */
export interface Testimonial {
  name: string;
  role: Localized;
  quote: Localized;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Aminata Keita",
    role: { fr: "Directrice, Nimba Corp", en: "Director, Nimba Corp" },
    quote: {
      fr: "ForTechLab a transformé notre présence digitale. Une équipe professionnelle, à l'écoute et incroyablement réactive.",
      en: "ForTechLab transformed our digital presence. A professional, attentive and incredibly responsive team.",
    },
    image: img("photo-1573497491765-dccce02b29df", 200, 200),
  },
  {
    name: "Jean-Marc Dubois",
    role: { fr: "Ancien apprenant, Full-Stack", en: "Alumnus, Full-Stack" },
    quote: {
      fr: "La formation full-stack m'a permis de décrocher mon premier emploi de développeur en 4 mois. Un contenu concret et un suivi exceptionnel.",
      en: "The full-stack training helped me land my first developer job in 4 months. Hands-on content and exceptional mentoring.",
    },
    image: img("photo-1642736468880-b6adf66bdd50", 200, 200),
  },
  {
    name: "Sarah Mendy",
    role: { fr: "CTO, PayPulse", en: "CTO, PayPulse" },
    quote: {
      fr: "Leur expertise DevOps a réduit nos temps de déploiement de 80%. Un vrai partenaire technique de confiance.",
      en: "Their DevOps expertise cut our deployment times by 80%. A truly trusted technical partner.",
    },
    image: img("photo-1573497161161-c3e73707e25c", 200, 200),
  },
];

/* ------------------------------------------------------------------ */
/* Stats / Process / FAQ                                               */
/* ------------------------------------------------------------------ */
export const stats: { value: string; label: Localized }[] = [
  { value: "120+", label: { fr: "Projets livrés", en: "Projects delivered" } },
  { value: "850+", label: { fr: "Apprenants formés", en: "Learners trained" } },
  { value: "98%", label: { fr: "Clients satisfaits", en: "Satisfied clients" } },
  { value: "25+", label: { fr: "Experts dans l'équipe", en: "Experts on the team" } },
];

export const processSteps: { title: Localized; desc: Localized }[] = [
  {
    title: { fr: "Découverte", en: "Discovery" },
    desc: {
      fr: "Nous écoutons vos besoins et définissons ensemble les objectifs.",
      en: "We listen to your needs and define the goals together.",
    },
  },
  {
    title: { fr: "Conception", en: "Design" },
    desc: {
      fr: "Maquettes, prototypes et validation de l'expérience utilisateur.",
      en: "Mockups, prototypes and validation of the user experience.",
    },
  },
  {
    title: { fr: "Développement", en: "Development" },
    desc: {
      fr: "Nous construisons un produit robuste avec des points réguliers.",
      en: "We build a robust product with regular check-ins.",
    },
  },
  {
    title: { fr: "Lancement & Suivi", en: "Launch & Support" },
    desc: {
      fr: "Mise en production, formation et accompagnement continu.",
      en: "Go-live, training and ongoing support.",
    },
  },
];

export const faqs: { q: Localized; a: Localized }[] = [
  {
    q: { fr: "Les formations sont-elles 100% en ligne ?", en: "Are the trainings 100% online?" },
    a: {
      fr: "Oui, nos formations sont accessibles en ligne avec des sessions en direct, des projets pratiques et un mentor dédié. Des sessions hybrides sont également possibles.",
      en: "Yes, our trainings are available online with live sessions, hands-on projects and a dedicated mentor. Hybrid sessions are also available.",
    },
  },
  {
    q: { fr: "Proposez-vous un paiement échelonné ?", en: "Do you offer installment payments?" },
    a: {
      fr: "Absolument. La plupart de nos parcours peuvent être réglés en plusieurs fois. Contactez-nous pour définir un plan adapté.",
      en: "Absolutely. Most of our programs can be paid in installments. Contact us to set up a plan that fits you.",
    },
  },
  {
    q: { fr: "Obtient-on une certification ?", en: "Do learners get a certification?" },
    a: {
      fr: "Oui, chaque parcours débouche sur un certificat ForTechLab attestant des compétences acquises et un projet ajouté à votre portfolio.",
      en: "Yes, every program leads to a ForTechLab certificate attesting your skills, plus a project for your portfolio.",
    },
  },
  {
    q: { fr: "Comment se déroule un projet client ?", en: "How does a client project work?" },
    a: {
      fr: "Nous suivons un processus en 4 étapes : découverte, conception, développement et lancement, avec une communication transparente à chaque étape.",
      en: "We follow a 4-step process: discovery, design, development and launch, with transparent communication at every step.",
    },
  },
  {
    q: { fr: "Recrutez-vous des freelances et experts ?", en: "Do you recruit freelancers and experts?" },
    a: {
      fr: "Oui ! Nous recherchons en permanence des talents passionnés. Rejoignez notre vivier d'experts via le formulaire dédié.",
      en: "Yes! We are always looking for passionate talent. Join our expert network through the dedicated form.",
    },
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
