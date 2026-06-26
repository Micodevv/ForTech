import { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] ${
        light ? "text-[var(--cyan)]" : "text-primary"
      }`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "left",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`text-[2rem] md:text-[2.6rem] leading-[1.08] ${light ? "text-white" : "text-foreground"}`}
        style={{ fontWeight: 700 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[1.05rem] leading-relaxed ${light ? "text-[var(--navy-foreground)]/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
