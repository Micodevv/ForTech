import { Link } from "react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
      <img className="h-10" src="/imgs/logo-fortechlab.png" alt="logo-ForTechLab" />
    </Link>
  );
}
