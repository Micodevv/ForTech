import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/root-layout";
import HomePage from "./pages/home-page";
import FormationDetailPage from "./pages/formation-detail-page";
import ContactPage from "./pages/contact-page";
import ServicesPage from "./pages/services-page";
import FormationsPage from "./pages/formations-page";
import ProjetsPage from "./pages/projets-page";
import EquipePage from "./pages/equipe-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "formations", Component: FormationsPage },
      { path: "formation/:id", Component: FormationDetailPage },
      { path: "projets", Component: ProjetsPage },
      { path: "equipe", Component: EquipePage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: HomePage },
    ],
  },
]);
