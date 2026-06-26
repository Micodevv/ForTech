import { motion } from "motion/react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "../i18n";
import { processSteps } from "../data";

const icons = [Search, PenTool, Code2, Rocket];

export function ProcessSection() {
  const { tr } = useI18n();

  return (
    <section className="py-20 lg:py-28 bg-[var(--navy)] text-[var(--navy-foreground)] relative overflow-hidden">
      <div className="absolute -top-20 right-0 size-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 size-72 rounded-full bg-[var(--cyan)]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <SectionHeading
          light
          align="center"
          eyebrow={tr({ fr: "Notre méthode", en: "Our method" })}
          title={tr({ fr: "De l'idée au lancement, en 4 étapes", en: "From idea to launch, in 4 steps" })}
          subtitle={tr({
            fr: "Un processus éprouvé, transparent et collaboratif pour livrer des produits qui marchent.",
            en: "A proven, transparent and collaborative process to ship products that work.",
          })}
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-colors"
              >
                <span
                  className="absolute top-6 right-6 text-5xl text-white/10"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  0{i + 1}
                </span>
                <div className="grid place-items-center size-12 rounded-xl bg-primary text-primary-foreground mb-5">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-white mb-2" style={{ fontWeight: 600 }}>{tr(step.title)}</h3>
                <p className="text-sm text-[var(--navy-foreground)]/70 leading-relaxed">{tr(step.desc)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
