import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Star, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useI18n } from "../i18n";
import { stats } from "../data";

export function Hero() {
  const { t, tr } = useI18n();

  return (
    <section className="relative overflow-hidden">
      {/* decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-white to-white" />
        <div className="absolute -top-32 -right-24 size-[480px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-40 -left-32 size-[420px] rounded-full bg-[var(--cyan)]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--navy) 1px, transparent 1px), linear-gradient(90deg, var(--navy) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-7"
        >
          <span
            className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white border border-border shadow-sm text-sm"
          >
            <Sparkles className="size-4 text-primary" />
            {tr({ fr: "Agence web & Académie en ligne", en: "Web agency & Online academy" })}
          </span>

          <h1 className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.02]" style={{ fontWeight: 800 }}>
            {tr({ fr: "On construit le ", en: "We build the " })}
            <span className="relative text-primary">
              {tr({ fr: "digital", en: "digital" })}
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                <path d="M2 7C50 2 150 2 198 7" stroke="var(--cyan)" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            {tr({ fr: "qui fait grandir votre business", en: "that grows your business" })}
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            {tr({
              fr: "ForTechLab conçoit des produits digitaux sur mesure et forme les talents tech de demain. Du design au déploiement, nous transformons vos idées en solutions concrètes.",
              en: "ForTechLab designs custom digital products and trains tomorrow's tech talent. From design to deployment, we turn your ideas into real solutions.",
            })}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full h-12 px-7">
              <Link to="/contact">
                {t("cta.start")} <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-12 px-7 bg-white">
              <a href="#formations">{t("cta.discover")}</a>
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-2">
              {[
                "photo-1573497161161-c3e73707e25c",
                "photo-1614023342667-6f060e9d1e04",
                "photo-1642257859842-c95f9fa8121d",
              ].map((id) => (
                <ImageWithFallback
                  key={id}
                  src={`https://images.unsplash.com/${id}?w=80&h=80&fit=crop&auto=format&q=80`}
                  alt=""
                  className="size-9 rounded-full border-2 border-white object-cover bg-muted"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span className="text-sm text-muted-foreground">
                {tr({ fr: "850+ apprenants & 120+ projets livrés", en: "850+ learners & 120+ projects delivered" })}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 border border-border">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=900&fit=crop&auto=format&q=80"
              alt={tr({ fr: "L'équipe ForTechLab au travail", en: "The ForTechLab team at work" })}
              className="w-full h-[420px] lg:h-[520px] object-cover bg-muted"
            />
          </div>

          {/* floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -left-4 sm:-left-8 bottom-10 bg-white rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3"
          >
            <div className="grid place-items-center size-11 rounded-xl bg-primary/10 text-primary">
              <Rocket className="size-5" />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontFamily: "var(--font-display)" }}>98%</p>
              <p className="text-xs text-muted-foreground">
                {tr({ fr: "Clients satisfaits", en: "Happy clients" })}
              </p>
            </div>
          </motion.div>

          <div className="absolute -right-3 -top-3 size-20 rounded-2xl bg-[var(--cyan)] -z-10 rotate-12" />
          <div className="absolute -bottom-4 right-10 size-12 rounded-full bg-[var(--amber)]" />
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.value} className="py-7 px-4 text-center flex flex-col gap-1">
              <span className="text-3xl lg:text-4xl text-primary" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                {s.value}
              </span>
              <span className="text-sm text-muted-foreground">{tr(s.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
