import { Link } from "react-router";
import { motion } from "motion/react";
import { Check, ArrowRight, Clock, BarChart3, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { SectionHeading } from "./section-heading";
import { useI18n } from "../i18n";
import { formations, formatPrice } from "../data";

const PREVIEW_COUNT = 4;

export function FormationsSection() {
  const { t, tr } = useI18n();
  const preview = formations.slice(0, PREVIEW_COUNT);

  return (
    <section id="formations" className="py-20 lg:py-28 bg-secondary/50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow={tr({ fr: "L'Académie ForTechLab", en: "ForTechLab Academy" })}
          title={tr({ fr: "Des formations pour booster votre carrière", en: "Training to boost your career" })}
          subtitle={tr({
            fr: "Des parcours pratiques, encadrés par des experts, avec projets réels et certification à la clé.",
            en: "Hands-on programs led by experts, with real projects and certification.",
          })}
        />

        <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {preview.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl border bg-card p-7 transition-all hover:-translate-y-1.5 ${
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

              <div className="grid place-items-center size-12 rounded-xl bg-primary/10 text-primary mb-5">
                <f.icon className="size-6" />
              </div>

              <h3 className="mb-1.5" style={{ fontWeight: 600 }}>{tr(f.title)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 min-h-[40px]">{tr(f.tagline)}</p>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-xs text-muted-foreground">{t("common.from")}</span>
              </div>
              <div className="mb-5">
                <span className="text-2xl text-foreground" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                  {formatPrice(f.price)}
                </span>
              </div>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-5 pb-5 border-b border-border">
                <span className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" /> {tr(f.duration)}
                </span>
                <span className="flex items-center gap-2">
                  <BarChart3 className="size-4 text-primary" /> {tr(f.level)}
                </span>
              </div>

              <ul className="flex flex-col gap-2.5 mb-7">
                {tr(f.learn).slice(0, 4).map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm">
                    <Check className="size-4 text-primary shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={f.popular ? "default" : "outline"}
                className="rounded-full mt-auto w-full"
              >
                <Link to={`/formation/${f.id}`}>
                  {t("cta.learnMore")} <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* "Plus de formations" button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <p className="text-sm text-muted-foreground">
            {tr({
              fr: `Et ${formations.length - PREVIEW_COUNT} autres formations dans 6 domaines différents`,
              en: `And ${formations.length - PREVIEW_COUNT} more trainings across 6 different domains`,
            })}
          </p>
          <Button asChild size="lg" className="rounded-full h-12 px-8 gap-2">
            <Link to="/formations">
              {tr({ fr: "Voir toutes les formations", en: "View all trainings" })}
              <ChevronRight className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
