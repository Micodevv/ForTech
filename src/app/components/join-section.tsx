import { motion } from "motion/react";
import { Briefcase, Globe2, TrendingUp, Heart } from "lucide-react";
import { Eyebrow } from "./section-heading";
import { ContactForm } from "./contact-form";
import { useI18n } from "../i18n";

export function JoinSection() {
  const { tr } = useI18n();

  const perks = [
    {
      icon: Globe2,
      title: { fr: "Projets internationaux", en: "International projects" },
      desc: { fr: "Travaillez sur des produits à impact pour des clients variés.", en: "Work on impactful products for diverse clients." },
    },
    {
      icon: TrendingUp,
      title: { fr: "Montée en compétences", en: "Skill growth" },
      desc: { fr: "Formez-vous en continu et progressez avec des experts.", en: "Keep learning and grow alongside experts." },
    },
    {
      icon: Heart,
      title: { fr: "Flexibilité & remote", en: "Flexibility & remote" },
      desc: { fr: "Collaborez à distance avec une équipe bienveillante.", en: "Collaborate remotely with a caring team." },
    },
  ];

  return (
    <section id="rejoindre" className="py-20 lg:py-28 bg-secondary/50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 lg:sticky lg:top-28"
        >
          <Eyebrow>{tr({ fr: "Carrières", en: "Careers" })}</Eyebrow>
          <h2 className="text-[2rem] md:text-[2.6rem] leading-[1.08]" style={{ fontWeight: 700 }}>
            {tr({ fr: "Rejoignez l'équipe ForTechLab", en: "Join the ForTechLab team" })}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-[1.05rem]">
            {tr({
              fr: "Vous êtes développeur, designer, DevOps ou expert du numérique ? Nous sommes toujours à la recherche de talents passionnés pour construire l'avenir avec nous.",
              en: "Are you a developer, designer, DevOps or digital expert? We're always looking for passionate talent to build the future with us.",
            })}
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {perks.map((p) => (
              <div key={p.title.fr} className="flex items-start gap-4">
                <div className="grid place-items-center size-11 rounded-xl bg-primary/10 text-primary shrink-0">
                  <p.icon className="size-5" />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>{tr(p.title)}</h4>
                  <p className="text-sm text-muted-foreground">{tr(p.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-xl shadow-primary/5"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="grid place-items-center size-11 rounded-xl bg-primary text-primary-foreground">
              <Briefcase className="size-5" />
            </div>
            <h3 style={{ fontWeight: 600 }}>{tr({ fr: "Candidature spontanée", en: "Spontaneous application" })}</h3>
          </div>
          <ContactForm variant="join" compact />
        </motion.div>
      </div>
    </section>
  );
}
