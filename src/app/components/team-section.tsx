import { Link } from "react-router";
import { motion } from "motion/react";
import { Linkedin, Twitter, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { SectionHeading } from "./section-heading";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useI18n } from "../i18n";
import { team } from "../data";

export function TeamSection() {
  const { tr } = useI18n();

  return (
    <section id="equipe" className="py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow={tr({ fr: "Notre équipe", en: "Our team" })}
          title={tr({ fr: "Les talents derrière ForTechLab", en: "The talent behind ForTechLab" })}
          subtitle={tr({
            fr: "Une équipe passionnée qui allie créativité, expertise technique et sens du détail.",
            en: "A passionate team blending creativity, technical expertise and attention to detail.",
          })}
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group relative rounded-3xl overflow-hidden border border-border bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <ImageWithFallback
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/70 to-transparent">
                <h3 className="text-white" style={{ fontWeight: 600 }}>{m.name}</h3>
                <p className="text-sm text-[var(--cyan)]" style={{ fontFamily: "var(--font-mono)" }}>{tr(m.role)}</p>
                <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  {[Linkedin, Twitter].map((Icon, k) => (
                    <a key={k} href="#" className="grid place-items-center size-8 rounded-lg bg-white/15 hover:bg-primary text-white transition-colors" aria-label="social">
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8 gap-2">
            <Link to="/equipe">
              {tr({ fr: "Rejoindre l'équipe", en: "Join the team" })}
              <ChevronRight className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
