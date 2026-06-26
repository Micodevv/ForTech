import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { SectionHeading } from "./section-heading";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useI18n } from "../i18n";
import { projects } from "../data";

const TAGS = ["UX/UI", "Web", "Mobile", "DevOps", "Data"];

export function ProjectsSection() {
  const { tr } = useI18n();
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.tags.some((t) => t.toLowerCase() === active.toLowerCase()));

  return (
    <section id="projets" className="py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={tr({ fr: "Réalisations", en: "Our work" })}
          title={tr({ fr: "Des projets qui parlent d'eux-mêmes", en: "Projects that speak for themselves" })}
          subtitle={tr({
            fr: "Découvrez quelques-unes des solutions que nous avons conçues pour nos clients et partenaires.",
            en: "Discover some of the solutions we've crafted for our clients and partners.",
          })}
        />

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
                  <span className="text-xs text-primary" style={{ fontFamily: "var(--font-mono)" }}>
                    {tr(p.category)}
                  </span>
                  <h3 className="mt-1.5 mb-2" style={{ fontWeight: 600 }}>{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tr(p.desc)}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8 gap-2">
            <Link to="/projets">
              {tr({ fr: "Voir tous les projets", en: "View all projects" })}
              <ChevronRight className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
