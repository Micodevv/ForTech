import { Link } from "react-router";
import { motion } from "motion/react";
import { Check, ArrowRight, ArrowUpRight, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import { SectionHeading, Eyebrow } from "../components/section-heading";
import { ContactForm } from "../components/contact-form";
import { ProcessSection } from "../components/process-section";
import { useI18n } from "../i18n";
import { services, stats } from "../data";

export default function ServicesPage() {
  const { t, tr } = useI18n();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] text-[var(--navy-foreground)] py-20 lg:py-28">
        <div className="absolute -top-32 right-0 size-[600px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 size-96 rounded-full bg-[var(--cyan)]/8 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
          <div className="max-w-3xl">
            <Eyebrow light>{tr({ fr: "Nos Services", en: "Our Services" })}</Eyebrow>
            <h1 className="text-white mt-4 text-[2.8rem] md:text-[4rem] leading-[1.04]" style={{ fontWeight: 800 }}>
              {tr({ fr: "Tout ce qu'il faut pour réussir en ligne", en: "Everything you need to succeed online" })}
            </h1>
            <p className="mt-5 text-[var(--navy-foreground)]/75 text-lg leading-relaxed max-w-2xl">
              {tr({
                fr: "Une équipe pluridisciplinaire — designers, développeurs, DevOps, data scientists — à vos côtés pour chaque étape de votre projet digital.",
                en: "A multidisciplinary team — designers, developers, DevOps, data scientists — by your side at every stage of your digital project.",
              })}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full h-12 px-7">
                <Link to="/contact">
                  {t("cta.start")} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full h-12 px-7 border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link to="/projets">
                  {tr({ fr: "Voir nos réalisations", en: "See our work" })}
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="text-3xl text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{s.value}</p>
                <p className="text-sm text-[var(--navy-foreground)]/60 mt-1">{tr(s.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={tr({ fr: "Ce que nous faisons", en: "What we do" })}
            title={tr({ fr: "Des expertises complémentaires pour votre succès", en: "Complementary expertise for your success" })}
            subtitle={tr({
              fr: "Chaque service est conçu pour s'intégrer parfaitement aux autres et créer une valeur maximale pour votre entreprise.",
              en: "Each service is designed to integrate seamlessly with the others and create maximum value for your business.",
            })}
          />

          <div className="mt-14 flex flex-col gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group rounded-3xl border border-border bg-card p-7 sm:p-9 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4">
                    <div className="grid place-items-center size-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <s.icon className="size-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-2" style={{ fontWeight: 700 }}>{tr(s.title)}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{tr(s.detail)}</p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                      {tr(s.features).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <Check className="size-4 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="shrink-0 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm whitespace-nowrap mt-1"
                  >
                    {tr({ fr: "Démarrer un projet", en: "Start a project" })} <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      {/* Contact section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28 flex flex-col gap-5"
            >
              <Eyebrow>{tr({ fr: "Démarrons ensemble", en: "Let's get started" })}</Eyebrow>
              <h2 className="text-[2.2rem] leading-[1.1]" style={{ fontWeight: 700 }}>
                {tr({ fr: "Un projet en tête ?", en: "Have a project in mind?" })}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {tr({
                  fr: "Parlez-nous de votre idée. Notre équipe vous répond sous 24h avec une estimation gratuite et sans engagement.",
                  en: "Tell us about your idea. Our team gets back to you within 24h with a free, no-commitment estimate.",
                })}
              </p>
              <div className="flex items-center gap-3 mt-2 p-4 rounded-2xl bg-card border border-border">
                <div className="grid place-items-center size-10 rounded-xl bg-primary/10 text-primary shrink-0">
                  <MessageSquare className="size-5" />
                </div>
                <div>
                  <p className="text-sm" style={{ fontWeight: 600 }}>
                    {tr({ fr: "Réponse garantie sous 24h", en: "Reply guaranteed within 24h" })}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {tr({ fr: "Tous les jours, même le week-end", en: "Every day, including weekends" })}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-xl shadow-primary/5"
            >
              <ContactForm variant="general" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
