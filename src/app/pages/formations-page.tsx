import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Check, Clock, BarChart3, ArrowRight, Award, Layers } from "lucide-react";
import { Button } from "../components/ui/button";
import { SectionHeading, Eyebrow } from "../components/section-heading";
import { useI18n } from "../i18n";
import { formations, formationDomains, formatPrice } from "../data";

export default function FormationsPage() {
  const { t, tr } = useI18n();
  const [activeDomain, setActiveDomain] = useState<string>("all");

  const filtered =
    activeDomain === "all"
      ? formations
      : formations.filter((f) => f.domain === activeDomain);

  const groupedByDomain =
    activeDomain === "all"
      ? formationDomains.map((d) => ({
          domain: d,
          items: formations.filter((f) => f.domain === d.id),
        })).filter((g) => g.items.length > 0)
      : formationDomains
          .filter((d) => d.id === activeDomain)
          .map((d) => ({ domain: d, items: filtered }));

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] text-[var(--navy-foreground)] py-20 lg:py-28">
        <div className="absolute -top-40 right-0 size-[700px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-[var(--cyan)]/10 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
          <Eyebrow light>{tr({ fr: "L'Académie ForTechLab", en: "ForTechLab Academy" })}</Eyebrow>
          <h1 className="text-white mt-4 text-[2.8rem] md:text-[4rem] leading-[1.04]" style={{ fontWeight: 800 }}>
            {tr({ fr: "Toutes nos formations", en: "All our trainings" })}
          </h1>
          <p className="mt-5 text-[var(--navy-foreground)]/75 text-lg leading-relaxed max-w-2xl">
            {tr({
              fr: "Des parcours pratiques, encadrés par des experts, avec projets réels et certification à la clé. Choisissez votre domaine et lancez-vous.",
              en: "Hands-on programs led by experts, with real projects and certification. Choose your domain and get started.",
            })}
          </p>

          {/* Highlights */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { icon: Award, label: tr({ fr: "Certificat inclus", en: "Certificate included" }) },
              { icon: Layers, label: tr({ fr: "Projets réels", en: "Real projects" }) },
              { icon: Clock, label: tr({ fr: "Sessions en direct", en: "Live sessions" }) },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm">
                <Icon className="size-4 text-[var(--cyan)]" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Domain filter */}
      <section className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveDomain("all")}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-colors border ${
              activeDomain === "all"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-white border-border hover:border-primary text-foreground/80"
            }`}
          >
            {tr({ fr: "Tous les domaines", en: "All domains" })}
          </button>
          {formationDomains.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDomain(d.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-colors border ${
                activeDomain === d.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-white border-border hover:border-primary text-foreground/80"
              }`}
            >
              <d.icon className="size-3.5" />
              {tr(d.name)}
            </button>
          ))}
        </div>
      </section>

      {/* Formations grouped by domain */}
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col gap-24">
          <AnimatePresence mode="wait">
            {groupedByDomain.map(({ domain, items }) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Domain header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
                  <div className="grid place-items-center size-14 rounded-2xl bg-primary/10 text-primary shrink-0">
                    <domain.icon className="size-7" />
                  </div>
                  <div>
                    <h2 className="text-[1.6rem]" style={{ fontWeight: 700 }}>{tr(domain.name)}</h2>
                    <p className="text-muted-foreground text-sm mt-0.5">{tr(domain.description)}</p>
                  </div>
                </div>

                {/* Formation cards — pricing plan style */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {items.map((f, i) => (
                    <motion.div
                      key={f.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className={`relative flex flex-col rounded-3xl border bg-card transition-all hover:-translate-y-1.5 ${
                        f.popular
                          ? "border-primary shadow-2xl shadow-primary/20 ring-1 ring-primary"
                          : "border-border hover:shadow-xl hover:shadow-primary/5"
                      }`}
                    >
                      {f.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs whitespace-nowrap" style={{ fontFamily: "var(--font-mono)" }}>
                          {t("common.popular")}
                        </span>
                      )}

                      {/* Card top */}
                      <div className="p-7 pb-0">
                        <div className="grid place-items-center size-12 rounded-xl bg-primary/10 text-primary mb-5">
                          <f.icon className="size-6" />
                        </div>
                        <h3 className="mb-1.5" style={{ fontWeight: 700 }}>{tr(f.title)}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{tr(f.tagline)}</p>

                        {/* Price */}
                        <div className="mb-2">
                          <span className="text-xs text-muted-foreground">{t("common.from")}</span>
                        </div>
                        <div className="flex items-baseline gap-1 mb-5">
                          <span className="text-3xl text-foreground" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
                            {formatPrice(f.price)}
                          </span>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground pb-5 border-b border-border">
                          <span className="flex items-center gap-2">
                            <Clock className="size-4 text-primary" /> {tr(f.duration)}
                          </span>
                          <span className="flex items-center gap-2">
                            <BarChart3 className="size-4 text-primary" /> {tr(f.level)}
                          </span>
                          <span className="flex items-center gap-2">
                            <Award className="size-4 text-primary" />
                            {tr({ fr: "Certificat ForTechLab", en: "ForTechLab certificate" })}
                          </span>
                        </div>
                      </div>

                      {/* Learn list */}
                      <div className="px-7 pt-5 flex-1">
                        <p className="text-xs text-muted-foreground mb-3" style={{ fontFamily: "var(--font-mono)" }}>
                          {tr({ fr: "Ce que vous allez maîtriser", en: "What you'll master" })}
                        </p>
                        <ul className="flex flex-col gap-2.5">
                          {tr(f.learn).map((l) => (
                            <li key={l} className="flex items-start gap-2 text-sm">
                              <Check className="size-4 text-primary shrink-0 mt-0.5" />
                              <span>{l}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Modules preview */}
                      <div className="px-7 pt-5 pb-7 mt-auto">
                        <p className="text-xs text-muted-foreground mb-3" style={{ fontFamily: "var(--font-mono)" }}>
                          {tr({ fr: "Programme — ", en: "Program — " })}{tr(f.modules).length} {tr({ fr: "modules", en: "modules" })}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {tr(f.modules).map((m) => (
                            <span key={m.name} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                              {m.name}
                            </span>
                          ))}
                        </div>

                        <Button
                          asChild
                          variant={f.popular ? "default" : "outline"}
                          className="rounded-full w-full"
                        >
                          <Link to={`/formation/${f.id}`}>
                            {tr({ fr: "Voir le programme complet", en: "See full program" })} <ArrowRight className="size-4" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* CTA Band */}
      <section className="py-20 bg-[var(--navy)] text-[var(--navy-foreground)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Eyebrow light>{tr({ fr: "Besoin de conseils ?", en: "Need guidance?" })}</Eyebrow>
          <h2 className="text-white mt-4 text-[2rem] md:text-[2.6rem]" style={{ fontWeight: 700 }}>
            {tr({ fr: "Pas sûr de quelle formation choisir ?", en: "Not sure which training to choose?" })}
          </h2>
          <p className="mt-4 text-[var(--navy-foreground)]/70 max-w-xl mx-auto">
            {tr({
              fr: "Notre équipe pédagogique vous aide gratuitement à identifier le parcours le plus adapté à votre profil et à vos objectifs.",
              en: "Our training team helps you for free to identify the path best suited to your profile and goals.",
            })}
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full h-12 px-8">
            <Link to="/contact">
              {tr({ fr: "Parler à un conseiller", en: "Speak to an advisor" })} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
