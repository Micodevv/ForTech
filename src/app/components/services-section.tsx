import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "../i18n";
import { services } from "../data";

export function ServicesSection() {
  const { t, tr } = useI18n();

  return (
    <section id="services" className="py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow={tr({ fr: "Nos services", en: "Our services" })}
            title={tr({ fr: "Tout pour réussir en ligne", en: "Everything you need to succeed online" })}
            subtitle={tr({
              fr: "Une équipe pluridisciplinaire pour vous accompagner à chaque étape de votre projet digital.",
              en: "A multidisciplinary team to support you at every stage of your digital project.",
            })}
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all shrink-0"
          >
            {tr({ fr: "Voir tous nos services", en: "See all services" })} <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <Link
                to="/contact"
                className="group block h-full rounded-2xl border border-border bg-card p-7 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="grid place-items-center size-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="size-6" />
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="mb-2" style={{ fontWeight: 600 }}>{tr(s.title)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{tr(s.desc)}</p>
                <ul className="flex flex-col gap-2">
                  {tr(s.features).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
