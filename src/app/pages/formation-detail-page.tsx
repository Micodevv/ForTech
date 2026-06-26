import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { Check, Clock, BarChart3, ArrowLeft, Award, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Eyebrow } from "../components/section-heading";
import { ContactForm } from "../components/contact-form";
import { useI18n } from "../i18n";
import { formations, formatPrice } from "../data";

export default function FormationDetailPage() {
  const { id } = useParams();
  const { t, tr } = useI18n();
  const formation = formations.find((f) => f.id === id);

  if (!formation) return <Navigate to="/formations" replace />;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] text-[var(--navy-foreground)]">
        <div className="absolute -top-20 right-10 size-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 size-72 rounded-full bg-[var(--cyan)]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 pb-16 relative">
          <Link
            to="/formations"
            className="inline-flex items-center gap-2 text-sm text-[var(--navy-foreground)]/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="size-4" /> {tr({ fr: "Toutes les formations", en: "All trainings" })}
          </Link>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
            <div className="flex flex-col gap-5">
              <div className="grid place-items-center size-14 rounded-2xl bg-primary text-primary-foreground">
                <formation.icon className="size-7" />
              </div>
              <Eyebrow light>{tr({ fr: "Formation certifiante", en: "Certified training" })}</Eyebrow>
              <h1 className="text-white text-[2.4rem] md:text-[3.2rem] leading-[1.05]" style={{ fontWeight: 800 }}>
                {tr(formation.title)}
              </h1>
              <p className="text-[1.1rem] text-[var(--navy-foreground)]/80 max-w-xl leading-relaxed">
                {tr(formation.tagline)}
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Chip icon={Clock}>{tr(formation.duration)}</Chip>
                <Chip icon={BarChart3}>{tr(formation.level)}</Chip>
                <Chip icon={Award}>{tr({ fr: "Certificat inclus", en: "Certificate included" })}</Chip>
              </div>
            </div>

            {/* price card */}
            <div className="rounded-3xl bg-white text-foreground p-7 shadow-2xl shadow-black/30">
              <p className="text-sm text-muted-foreground">{t("common.from")}</p>
              <p className="text-3xl text-primary mt-1 mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                {formatPrice(formation.price)}
              </p>
              <p className="text-sm text-muted-foreground mb-5">
                {tr({ fr: "Paiement en plusieurs fois possible", en: "Installment payment available" })}
              </p>
              <div className="flex flex-col gap-2.5 mb-6 text-sm">
                <span className="flex items-center gap-2"><Clock className="size-4 text-primary" />{tr(formation.duration)}</span>
                <span className="flex items-center gap-2"><Users className="size-4 text-primary" />{tr({ fr: "Mentor dédié & projets réels", en: "Dedicated mentor & real projects" })}</span>
                <span className="flex items-center gap-2"><Award className="size-4 text-primary" />{tr({ fr: "Certificat ForTechLab", en: "ForTechLab certificate" })}</span>
              </div>
              <Button asChild className="rounded-full w-full h-12">
                <a href="#inscription">{t("cta.enroll")}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-[1.8rem] mb-8" style={{ fontWeight: 700 }}>{t("common.youWillLearn")}</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tr(formation.learn).map((l) => (
              <li key={l} className="flex items-start gap-3 rounded-xl bg-secondary/60 p-4 border border-border">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modules — presented as pricing plan cards */}
      <section className="py-16 lg:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <Eyebrow>{tr({ fr: "Programme", en: "Program" })}</Eyebrow>
              <h2 className="text-[1.8rem] mt-2" style={{ fontWeight: 700 }}>
                {tr({ fr: "Les modules de la formation", en: "Training modules" })}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              {tr(formation.modules).length} {tr({ fr: "modules · Durée totale :", en: "modules · Total duration:" })} {tr(formation.duration)}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tr(formation.modules).map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative flex flex-col rounded-3xl border border-border bg-card p-6 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                {/* Module number badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="grid place-items-center size-9 rounded-xl bg-primary/10 text-primary shrink-0 text-sm"
                    style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground px-2.5 py-1 rounded-full bg-secondary border border-border">
                    <Clock className="size-3" />
                    {m.duration}
                  </span>
                </div>

                <h3 className="mb-2" style={{ fontWeight: 700 }}>{m.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{m.detail}</p>

                {/* Learn items */}
                {m.learn && m.learn.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3" style={{ fontFamily: "var(--font-mono)" }}>
                      {tr({ fr: "Au programme", en: "In this module" })}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {m.learn.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs">
                          <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inscription / Contact */}
      <section id="inscription" className="py-16 lg:py-24 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center flex flex-col gap-3 mb-10">
            <Eyebrow>{tr({ fr: "Inscription", en: "Enrollment" })}</Eyebrow>
            <h2 className="text-[2rem]" style={{ fontWeight: 700 }}>
              {tr({ fr: "Intéressé par cette formation ?", en: "Interested in this training?" })}
            </h2>
            <p className="text-muted-foreground">
              {tr({
                fr: "Laissez-nous vos coordonnées, un conseiller vous recontacte pour finaliser votre inscription.",
                en: "Leave us your details and an advisor will reach out to finalize your enrollment.",
              })}
            </p>
          </div>
          <div className="rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-xl shadow-primary/5">
            <ContactForm
              variant="formation"
              context={`${tr({ fr: "Formation", en: "Training" })}: ${tr(formation.title)} — ${formatPrice(formation.price)}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Chip({ icon: Icon, children }: { icon: typeof Clock; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm">
      <Icon className="size-4 text-[var(--cyan)]" />
      {children}
    </span>
  );
}
