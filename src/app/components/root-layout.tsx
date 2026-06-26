import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function RootLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // allow the target section to render before scrolling
      const el = document.getElementById(hash.slice(1));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
