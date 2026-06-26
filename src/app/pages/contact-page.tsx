import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { Eyebrow } from "../components/section-heading";
import { ContactForm } from "../components/contact-form";
import { useI18n } from "../i18n";

export default function ContactPage() {
  const { tr } = useI18n();

  const info = [
    { icon: Mail, label: { fr: "Email", en: "Email" }, value: "contact@ForTechLab.com", href: "mailto:contact@ForTechLab.com" },
    { icon: Phone, label: { fr: "Téléphone", en: "Phone" }, value: "+229 01 96 14 72 30", href: "tel:+2290196147230" },
    { icon: MapPin, label: { fr: "Adresse", en: "Address" }, value: tr({ fr: "Cotonou, Bénin", en: "Cotonou, Benin" }), href: null },
    { icon: Clock, label: { fr: "Horaires", en: "Hours" }, value: tr({ fr: "Lun – Ven, 9h – 18h", en: "Mon – Fri, 9am – 6pm" }), href: null },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] text-[var(--navy-foreground)] py-16 lg:py-24">
        <div className="absolute -top-32 right-0 size-[500px] rounded-full bg-primary/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 size-72 rounded-full bg-[var(--cyan)]/8 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
          <Eyebrow light>{tr({ fr: "Contactez-nous", en: "Contact us" })}</Eyebrow>
          <h1 className="text-white mt-4 text-[2.6rem] md:text-[3.8rem] leading-[1.05]" style={{ fontWeight: 800 }}>
            {tr({ fr: "Parlons de votre projet", en: "Let's talk about your project" })}
          </h1>
          <p className="mt-4 text-[var(--navy-foreground)]/75 text-lg leading-relaxed max-w-2xl">
            {tr({
              fr: "Une question, un projet ou une envie de formation ? Écrivez-nous, notre équipe vous répond sous 24h.",
              en: "A question, a project or a desire to learn? Write to us, our team replies within 24h.",
            })}
          </p>
          <div className="mt-8 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/10 border border-white/15 text-sm">
            <MessageSquare className="size-4 text-[var(--cyan)]" />
            {tr({ fr: "Réponse garantie sous 24h — 7j/7", en: "Reply guaranteed within 24h — 7 days a week" })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Left: info */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-28">
            <h2 className="text-xl mb-2" style={{ fontWeight: 700 }}>
              {tr({ fr: "Informations de contact", en: "Contact information" })}
            </h2>
            {info.map((item, i) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all"
                  >
                    <div className="grid place-items-center size-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{tr(item.label)}</p>
                      <p style={{ fontWeight: 600 }}>{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                    <div className="grid place-items-center size-12 rounded-xl bg-primary/10 text-primary shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{tr(item.label)}</p>
                      <p style={{ fontWeight: 600 }}>{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Map */}
            {/* <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-2 rounded-2xl overflow-hidden border border-border h-52 bg-muted"
            >
              <iframe
                title="map"
                className="w-full h-full grayscale"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-17.52%2C14.66%2C-17.41%2C14.74&layer=mapnik"
              />
            </motion.div> */}
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-card border border-border p-7 sm:p-10 shadow-2xl shadow-primary/5"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="grid place-items-center size-11 rounded-xl bg-primary text-primary-foreground shrink-0">
                <MessageSquare className="size-5" />
              </div>
              <div>
                <h3 style={{ fontWeight: 700 }}>{tr({ fr: "Envoyez-nous un message", en: "Send us a message" })}</h3>
                <p className="text-xs text-muted-foreground">{tr({ fr: "Tous les champs * sont obligatoires", en: "All * fields are required" })}</p>
              </div>
            </div>
            <ContactForm variant="general" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
