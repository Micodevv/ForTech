import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Linkedin,
  Twitter,
  Briefcase,
  Globe2,
  TrendingUp,
  Heart,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { SectionHeading, Eyebrow } from "../components/section-heading";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ContactForm } from "../components/contact-form";
import { useI18n } from "../i18n";
import { team, stats } from "../data";

export default function EquipePage() {
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
    {
      icon: Star,
      title: { fr: "Culture de l'excellence", en: "Excellence culture" },
      desc: { fr: "Rejoignez une équipe qui vise toujours plus haut.", en: "Join a team that always aims higher." },
    },
    {
      icon: Zap,
      title: { fr: "Projets variés & stimulants", en: "Varied & stimulating projects" },
      desc: { fr: "Fintech, EdTech, HealthTech — ne vous ennuyez jamais.", en: "Fintech, EdTech, HealthTech — never be bored." },
    },
    {
      icon: Briefcase,
      title: { fr: "Freelance bienvenu", en: "Freelancers welcome" },
      desc: { fr: "Rejoignez notre vivier d'experts freelance sur des missions.", en: "Join our expert freelance pool for missions." },
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] text-[var(--navy-foreground)] py-20 lg:py-28">
        <div className="absolute -top-40 right-0 size-[700px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 size-80 rounded-full bg-[var(--cyan)]/10 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
          <Eyebrow light>{tr({ fr: "Notre équipe", en: "Our team" })}</Eyebrow>
          <h1 className="text-white mt-4 text-[2.8rem] md:text-[4rem] leading-[1.04]" style={{ fontWeight: 800 }}>
            {tr({ fr: "Les talents derrière ForTechLab", en: "The talent behind ForTechLab" })}
          </h1>
          <p className="mt-5 text-[var(--navy-foreground)]/75 text-lg leading-relaxed max-w-2xl">
            {tr({
              fr: "Une équipe passionnée qui allie créativité, expertise technique et sens du détail pour livrer des solutions digitales d'exception.",
              en: "A passionate team blending creativity, technical expertise and attention to detail to deliver exceptional digital solutions.",
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

      {/* Team grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow={tr({ fr: "L'équipe", en: "The team" })}
            title={tr({ fr: "Rencontrez nos experts", en: "Meet our experts" })}
            subtitle={tr({
              fr: "Chaque membre de l'équipe ForTechLab est sélectionné pour son expertise, sa passion et son engagement envers l'excellence.",
              en: "Every ForTechLab team member is selected for their expertise, passion and commitment to excellence.",
            })}
          />

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
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
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/80 to-transparent">
                  <h3 className="text-white" style={{ fontWeight: 600 }}>{m.name}</h3>
                  <p className="text-sm text-[var(--cyan)]" style={{ fontFamily: "var(--font-mono)" }}>{tr(m.role)}</p>
                  <p className="text-xs text-white/60 mt-1.5 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {tr(m.bio)}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {[Linkedin, Twitter].map((Icon, k) => (
                        <a
                          key={k}
                          href="#"
                          className="grid place-items-center size-8 rounded-lg bg-white/15 hover:bg-primary text-white transition-colors"
                          aria-label="social"
                        >
                          <Icon className="size-4" />
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1 ml-auto">
                      {m.skills.map((skill) => (
                        <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why join us */}
      <section className="py-20 lg:py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow={tr({ fr: "Pourquoi nous rejoindre", en: "Why join us" })}
            title={tr({ fr: "Travaillez différemment", en: "Work differently" })}
            subtitle={tr({
              fr: "Chez ForTechLab, nous croyons qu'un environnement épanouissant est la clé de la créativité et de l'excellence.",
              en: "At ForTechLab, we believe a fulfilling environment is the key to creativity and excellence.",
            })}
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((p, i) => (
              <motion.div
                key={p.title.fr}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="grid place-items-center size-11 rounded-xl bg-primary/10 text-primary shrink-0">
                  <p.icon className="size-5" />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>{tr(p.title)}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tr(p.desc)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join form */}
      <section id="rejoindre" className="py-20 lg:py-28 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 lg:sticky lg:top-28"
          >
            <Eyebrow>{tr({ fr: "Candidature", en: "Application" })}</Eyebrow>
            <h2 className="text-[2rem] md:text-[2.6rem] leading-[1.08]" style={{ fontWeight: 700 }}>
              {tr({ fr: "Rejoignez l'équipe ForTechLab", en: "Join the ForTechLab team" })}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[1.05rem]">
              {tr({
                fr: "Vous êtes développeur, designer, DevOps ou expert du numérique ? Nous sommes toujours à la recherche de talents passionnés pour construire l'avenir avec nous.",
                en: "Are you a developer, designer, DevOps or digital expert? We're always looking for passionate talent to build the future with us.",
              })}
            </p>
            <div className="mt-2 p-5 rounded-2xl bg-secondary border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tr({
                  fr: "Postes ouverts en ce moment : Développeur React Senior, Designer UX Mobile, Ingénieur DevOps, Data Analyst.",
                  en: "Currently open positions: Senior React Developer, Mobile UX Designer, DevOps Engineer, Data Analyst.",
                })}
              </p>
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

      {/* CTA */}
      <section className="py-16 bg-[var(--navy)] text-[var(--navy-foreground)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Eyebrow light>{tr({ fr: "Des questions ?", en: "Any questions?" })}</Eyebrow>
          <h2 className="text-white mt-4 text-[1.8rem] md:text-[2.4rem]" style={{ fontWeight: 700 }}>
            {tr({ fr: "Parlons de votre projet ou de votre candidature", en: "Let's discuss your project or application" })}
          </h2>
          <Button asChild size="lg" className="mt-8 rounded-full h-12 px-8">
            <Link to="/contact">
              {tr({ fr: "Nous contacter", en: "Contact us" })} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
