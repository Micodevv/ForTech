import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, Globe, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { Logo } from "./logo";
import { useI18n } from "../i18n";

const links = [
  { to: "/services", key: "nav.services" },
  { to: "/formations", key: "nav.formations" },
  { to: "/projets", key: "nav.projects" },
  { to: "/equipe", key: "nav.team" },
] as const;

export function Navbar() {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(to + "/");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-[0_4px_24px_-12px_rgba(11,20,55,0.18)]"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[72px] flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3.5 py-2 rounded-lg text-sm transition-colors ${
                isActive(l.to)
                  ? "text-primary bg-primary/8 font-medium"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="hidden sm:flex items-center gap-1.5 px-3 h-9 rounded-lg border border-border text-sm hover:bg-secondary transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
            aria-label="Switch language"
          >
            <Globe className="size-4 text-primary" />
            {lang.toUpperCase()}
          </button>

          <Button asChild className="hidden sm:inline-flex rounded-full px-5">
            <Link to="/contact">
              {t("cta.contact")} <ArrowRight className="size-4" />
            </Link>
          </Button>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden rounded-lg">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-6">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mb-8">
                <Logo />
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2.5 rounded-lg transition-colors ${
                      isActive(l.to)
                        ? "text-primary bg-primary/8 font-medium"
                        : "hover:bg-secondary"
                    }`}
                  >
                    {t(l.key)}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={toggle}
                  className="flex items-center justify-center gap-2 h-10 rounded-lg border border-border"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <Globe className="size-4 text-primary" />
                  {lang === "fr" ? "Français" : "English"}
                </button>
                <Button asChild className="rounded-full w-full" onClick={() => setOpen(false)}>
                  <Link to="/contact">{t("cta.contact")}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
