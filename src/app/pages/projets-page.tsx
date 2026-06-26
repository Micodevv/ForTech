import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight, Quote } from "lucide-react";
import { Button } from "../components/ui/button";
import { SectionHeading, Eyebrow } from "../components/section-heading";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useI18n } from "../i18n";
import { projects, testimonials, stats } from "../data";

const TAGS = ["UX/UI", "Web", "Mobile", "DevOps", "Data"];

export default function ProjetsPage() {
  const { tr } = useI18n();
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.tags.some((t) => t.toLowerCase() === active.toLowerCase()));

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] text-[var(--navy-foreground)] py-20 lg:py-28">
        <div className="absolute -top-32 right-0 size-[600px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
          <Eyebrow light>{tr({ fr: "Portfolio", en: "Portfolio" })}</Eyebrow>
          <h1 className="text-white mt-4 text-[2.8rem] md:text-[4rem] leading-[1.04]" style={{ fontWeight: 800 }}>
            {tr({ fr: "Des projets qui parlent d'eux-mêmes", en: "Projects that speak for themselves" })}
          </h1>
          <p className="mt-5 text-[var(--navy-foreground)]/75 text-lg leading-relaxed max-w-2xl">
            {tr({
              fr: "Découvrez les solutions digitales que nous avons conçues pour nos clients. De la fintech à l'EdTech, chaque projet est une histoire de transformation.",
              en: "Discover the digital solutions we've crafted for our clients. From fintech to EdTech, each project is a story of transformation.",
            })}
          </p>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="text-3xl text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{s.value}</p>
                <p className="text-sm text-[var(--navy-foreground)]/60 mt-1">{tr(s.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={tr({ fr: "Nos réalisations", en: "Our work" })}
            title={tr({ fr: "Explorez notre portfolio", en: "Explore our portfolio" })}
            subtitle={tr({
              fr: "Filtrez par technologie ou expertise pour trouver les projets les plus pertinents pour vous.",
              en: "Filter by technology or expertise to find the most relevant projects for you.",
            })}
          />

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            {["all", ...TAGS].map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-colors border ${
                  active === tag
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-white border-border hover:border-primary text-foreground/80"
                }`}
              >
                {tag === "all" ? tr({ fr: "Tous", en: "All" }) : tag}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="group rounded-3xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:shadow-primary/10 transition-shadow"
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                    <ImageWithFallback
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                      {p.year}
                    </span>
                    <div className="absolute bottom-3 right-3 size-10 rounded-full bg-primary text-primary-foreground grid place-items-center translate-y-12 group-hover:translate-y-0 transition-transform">
                      <ArrowUpRight className="size-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-primary" style={{ fontFamily: "var(--font-mono)" }}>{tr(p.category)}</span>
                    <h3 className="mt-1.5 mb-2" style={{ fontWeight: 600 }}>{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{tr(p.desc)}</p>

                    {/* Challenge / Solution */}
                    <div className="rounded-xl bg-secondary/60 p-3.5 mb-4 space-y-2">
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                          {tr({ fr: "Défi", en: "Challenge" })}
                        </p>
                        <p className="text-xs leading-relaxed">{tr(p.challenge)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                          {tr({ fr: "Solution", en: "Solution" })}
                        </p>
                        <p className="text-xs leading-relaxed">{tr(p.solution)}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow={tr({ fr: "Témoignages", en: "Testimonials" })}
            title={tr({ fr: "Ce que disent nos clients", en: "What our clients say" })}
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col rounded-3xl bg-card border border-border p-7 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <Quote className="size-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed flex-1 italic mb-6">"{tr(t.quote)}"</p>
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={t.image}
                    alt={t.name}
                    className="size-11 rounded-full object-cover"
                  />
                  <div>
                    <p style={{ fontWeight: 600 }}>{t.name}</p>
                    <p className="text-xs text-muted-foreground">{tr(t.role)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--navy)] text-[var(--navy-foreground)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Eyebrow light>{tr({ fr: "Votre projet", en: "Your project" })}</Eyebrow>
          <h2 className="text-white mt-4 text-[2rem] md:text-[2.6rem]" style={{ fontWeight: 700 }}>
            {tr({ fr: "Construisons quelque chose ensemble", en: "Let's build something together" })}
          </h2>
          <p className="mt-4 text-[var(--navy-foreground)]/70 max-w-xl mx-auto">
            {tr({
              fr: "Partagez votre vision et notre équipe vous proposera une approche sur mesure, avec un devis gratuit sous 48h.",
              en: "Share your vision and our team will propose a tailored approach, with a free quote within 48h.",
            })}
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full h-12 px-8">
            <Link to="/contact">
              {tr({ fr: "Démarrer mon projet", en: "Start my project" })} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
