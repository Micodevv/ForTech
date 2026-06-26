import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export type Lang = "fr" | "en";

export type Localized<T = string> = { fr: T; en: T };

type Dict = Record<string, Localized>;

/** UI chrome strings (navigation, buttons, form labels, section eyebrows). */
const STRINGS: Dict = {
  "nav.services": { fr: "Services", en: "Services" },
  "nav.formations": { fr: "Formations", en: "Training" },
  "nav.projects": { fr: "Projets", en: "Projects" },
  "nav.team": { fr: "Équipe", en: "Team" },
  "nav.join": { fr: "Rejoindre", en: "Join us" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "cta.contact": { fr: "Nous contacter", en: "Contact us" },
  "cta.discover": { fr: "Découvrir nos formations", en: "Explore our training" },
  "cta.start": { fr: "Démarrer un projet", en: "Start a project" },
  "cta.viewAll": { fr: "Voir tout", en: "View all" },
  "cta.learnMore": { fr: "En savoir plus", en: "Learn more" },
  "cta.enroll": { fr: "S'inscrire", en: "Enroll now" },
  "cta.backHome": { fr: "Retour à l'accueil", en: "Back to home" },
  "common.popular": { fr: "Le plus choisi", en: "Most popular" },
  "common.from": { fr: "à partir de", en: "from" },
  "common.duration": { fr: "Durée", en: "Duration" },
  "common.level": { fr: "Niveau", en: "Level" },
  "common.youWillLearn": { fr: "Ce que vous allez apprendre", en: "What you'll learn" },
  "common.program": { fr: "Programme du module", en: "Module program" },
  "common.sending": { fr: "Envoi…", en: "Sending…" },

  "form.name": { fr: "Nom complet", en: "Full name" },
  "form.email": { fr: "Adresse e-mail", en: "Email address" },
  "form.phone": { fr: "Téléphone", en: "Phone" },
  "form.subject": { fr: "Sujet", en: "Subject" },
  "form.company": { fr: "Entreprise / Organisation", en: "Company / Organization" },
  "form.message": { fr: "Votre message", en: "Your message" },
  "form.send": { fr: "Envoyer le message", en: "Send message" },
  "form.success": {
    fr: "Merci ! Votre message a bien été envoyé. Notre équipe vous répondra sous 24h.",
    en: "Thank you! Your message has been sent. Our team will reply within 24h.",
  },
  "form.placeholder.name": { fr: "Ex. Awa Diallo", en: "e.g. Awa Diallo" },
  "form.placeholder.message": {
    fr: "Parlez-nous de votre projet ou de votre objectif…",
    en: "Tell us about your project or goal…",
  },
};

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Translate a UI string key. */
  t: (key: keyof typeof STRINGS | string) => string;
  /** Resolve a localized content object to the current language. */
  tr: <T,>(obj: Localized<T>) => T;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  const t = useCallback(
    (key: string) => STRINGS[key]?.[lang] ?? key,
    [lang],
  );
  const tr = useCallback(
    <T,>(obj: Localized<T>) => obj[lang],
    [lang],
  ) as I18nValue["tr"];
  const toggle = useCallback(() => setLang((l) => (l === "fr" ? "en" : "fr")), []);

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle, t, tr }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
