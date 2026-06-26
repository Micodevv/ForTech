import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useI18n } from "../i18n";

export function CtaBand() {
  const { t, tr } = useI18n();

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-14 lg:px-16 lg:py-20 text-center">
          {/* decorative */}
          <div className="absolute -top-16 -left-10 size-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -right-10 size-72 rounded-full bg-[var(--cyan)]/20 blur-2xl" />
          <div className="absolute top-8 right-10 size-16 rounded-2xl bg-white/10 rotate-12" />
          <div className="absolute bottom-10 left-12 size-10 rounded-full bg-[var(--amber)]/80" />

          <div className="relative flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <h2 className="text-white text-[2rem] md:text-[2.8rem] leading-[1.1]" style={{ fontWeight: 800 }}>
              {tr({
                fr: "Prêt à donner vie à votre projet ?",
                en: "Ready to bring your project to life?",
              })}
            </h2>
            <p className="text-white/85 text-lg">
              {tr({
                fr: "Discutons de vos objectifs. Notre équipe vous répond sous 24h.",
                en: "Let's talk about your goals. Our team replies within 24h.",
              })}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild variant="secondary" className="rounded-full h-12 px-7 bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  {t("cta.contact")} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild className="rounded-full h-12 px-7 bg-[var(--navy)] text-white hover:bg-[var(--navy)]/90">
                <a href="#formations">{t("cta.discover")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
