import { useState, FormEvent } from "react";
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { useI18n } from "../i18n";

export type FormVariant = "general" | "join" | "formation";

export function ContactForm({
  variant = "general",
  context,
  compact = false,
}: {
  variant?: FormVariant;
  context?: string;
  compact?: boolean;
}) {
  const { t, tr } = useI18n();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const subjectLabel = tr({
    join: { fr: "Domaine d'expertise", en: "Area of expertise" },
    formation: { fr: "Formation visée", en: "Target training" },
    general: { fr: "Sujet", en: "Subject" },
  }[variant]);

  const messageLabel = tr({
    join: { fr: "Présentez-vous & vos compétences", en: "Introduce yourself & your skills" },
    formation: { fr: "Vos questions sur la formation", en: "Your questions about the training" },
    general: { fr: "Votre message", en: "Your message" },
  }[variant]);

  const messagePlaceholder = tr({
    join: {
      fr: "Décrivez votre expérience, vos technologies de prédilection et ce que vous souhaitez apporter à ForTechLab…",
      en: "Describe your experience, your preferred technologies and what you'd bring to ForTechLab…",
    },
    formation: {
      fr: "Dites-nous votre niveau actuel, vos objectifs et toute question sur le programme…",
      en: "Tell us your current level, your goals and any questions about the program…",
    },
    general: {
      fr: "Parlez-nous de votre projet ou de votre objectif…",
      en: "Tell us about your project or goal…",
    },
  }[variant]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-14 px-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary border border-primary/20">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
          <div className="relative grid place-items-center size-16 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <CheckCircle2 className="size-8" />
          </div>
        </div>
        <div>
          <h3 className="text-lg mb-1" style={{ fontWeight: 700 }}>
            {tr({ fr: "Message envoyé !", en: "Message sent!" })}
          </h3>
          <p className="text-muted-foreground text-sm max-w-sm">{t("form.success")}</p>
        </div>
        <Button variant="outline" className="rounded-full" onClick={() => setSent(false)}>
          {tr({ fr: "Envoyer un autre message", en: "Send another message" })}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {context && (
        <div className="flex items-center gap-2.5 text-sm px-4 py-3 rounded-xl bg-primary/8 border border-primary/20 text-primary">
          <Tag className="size-4 shrink-0" />
          <span style={{ fontFamily: "var(--font-mono)" }}>{context}</span>
        </div>
      )}

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <FloatingField
          label={t("form.name")}
          htmlFor="name"
          icon={User}
        >
          <input
            id="name"
            required
            placeholder={t("form.placeholder.name")}
            className="peer w-full h-12 rounded-xl border border-border bg-secondary/50 px-4 pl-10 text-sm outline-none transition-all focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
          />
        </FloatingField>

        <FloatingField
          label={t("form.email")}
          htmlFor="email"
          icon={Mail}
        >
          <input
            id="email"
            type="email"
            required
            placeholder="email@exemple.com"
            className="peer w-full h-12 rounded-xl border border-border bg-secondary/50 px-4 pl-10 text-sm outline-none transition-all focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
          />
        </FloatingField>

        <FloatingField
          label={t("form.phone")}
          htmlFor="phone"
          icon={Phone}
        >
          <input
            id="phone"
            type="tel"
            placeholder="+229 …"
            className="peer w-full h-12 rounded-xl border border-border bg-secondary/50 px-4 pl-10 text-sm outline-none transition-all focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
          />
        </FloatingField>

        <FloatingField
          label={subjectLabel}
          htmlFor="subject"
          icon={Tag}
        >
          <input
            id="subject"
            required
            placeholder={subjectLabel}
            className="peer w-full h-12 rounded-xl border border-border bg-secondary/50 px-4 pl-10 text-sm outline-none transition-all focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
          />
        </FloatingField>
      </div>

      <FloatingField label={messageLabel} htmlFor="message" icon={MessageSquare}>
        <textarea
          id="message"
          required
          rows={5}
          placeholder={messagePlaceholder}
          className="peer w-full rounded-xl border border-border bg-secondary/50 px-4 pl-10 py-3 text-sm outline-none transition-all focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60 resize-none"
        />
      </FloatingField>

      <div className="flex items-center justify-between pt-1">
        <p className="text-xs text-muted-foreground">
          {tr({ fr: "Réponse sous 24h garantie", en: "Reply guaranteed within 24h" })}
        </p>
        <Button
          type="submit"
          disabled={loading}
          className="rounded-full h-11 px-7 gap-2 shadow-lg shadow-primary/20"
        >
          {loading ? (
            <>
              <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              {t("common.sending")}
            </>
          ) : (
            <>
              {t("form.send")}
              <Send className="size-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function FloatingField({
  label,
  htmlFor,
  icon: Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm text-muted-foreground pl-1" style={{ fontWeight: 500 }}>
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        {children}
      </div>
    </div>
  );
}
