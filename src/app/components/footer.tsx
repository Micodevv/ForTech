import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from "lucide-react";
import { Logo } from "./logo";
import { useI18n } from "../i18n";
import { services } from "../data";

export function Footer() {
  const { t, tr, lang } = useI18n();

  const company: { label: string; to: string }[] = {
    fr: [
      { label: "À propos", to: "/equipe" },
      { label: "Notre équipe", to: "/equipe" },
      { label: "Projets", to: "/projets" },
      { label: "Carrières", to: "/equipe#rejoindre" },
    ],
    en: [
      { label: "About", to: "/equipe" },
      { label: "Our team", to: "/equipe" },
      { label: "Projects", to: "/projets" },
      { label: "Careers", to: "/equipe#rejoindre" },
    ],
  }[lang];

  return (
    <footer className="bg-[var(--navy)] text-[var(--navy-foreground)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5 max-w-xs">
            <Logo light />
            <p className="text-sm leading-relaxed text-[var(--navy-foreground)]/70">
              {tr({
                fr: "Agence web & académie en ligne. Nous concevons des produits digitaux et formons les talents de demain.",
                en: "Web agency & online academy. We craft digital products and train tomorrow's talent.",
              })}
            </p>
            <div className="flex gap-2">
              {[Linkedin, Twitter, Github, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center size-9 rounded-lg bg-white/10 hover:bg-primary transition-colors"
                  aria-label="social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title={t("nav.services")}>
            {services.slice(0, 5).map((s) => (
              <FooterLink key={s.id} to="/services">
                {tr(s.title)}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={tr({ fr: "Entreprise", en: "Company" })}>
            {company.map((c) => (
              <FooterLink key={c.label} to={c.to}>
                {c.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={t("nav.contact")}>
            <ContactItem icon={Mail}>contact@fortechlab.com</ContactItem>
            <ContactItem icon={Phone}>+229 0196147230</ContactItem>
            <ContactItem icon={MapPin}>
              {tr({ fr: "Cotonou, Bénin", en: "Cotonou, Benin" })}
            </ContactItem>
          </FooterCol>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--navy-foreground)]/60">
          <p className="text-center w-full">© {new Date().getFullYear()} ForTechLab. {tr({ fr: "Tous droits réservés.", en: "All rights reserved." })}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-white" style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-[var(--navy-foreground)]/70 hover:text-[var(--cyan)] transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function ContactItem({ icon: Icon, children }: { icon: typeof Mail; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-[var(--navy-foreground)]/70">
      <Icon className="size-4 text-[var(--cyan)] shrink-0" />
      {children}
    </li>
  );
}
