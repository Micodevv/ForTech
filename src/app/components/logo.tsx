import { Link } from "react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
      <img className="h-10" src="/imgs/Logo-ForTechLab 1.png" alt="logo-ForTechLab" />
      {/* <span className="relative grid place-items-center size-9 rounded-xl bg-primary text-primary-foreground overflow-hidden"> */}
        {/* geometric mark */}
        {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path d="M3 3h14v3.4H7.2v3.1H15v3.4H7.2V17H3V3Z" fill="currentColor" />
        </svg>
        <span className="absolute -right-1 -bottom-1 size-3 rounded-full bg-[var(--cyan)]" />
      </span>
      <span
        className={`text-[1.2rem] tracking-tight ${light ? "text-white" : "text-foreground"}`}
        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
      >
        ForTech<span className="text-[var(--brand-blue-bright)]">Lab</span>
      </span> */}
    </Link>
  );
}
