import { Home, Mic } from "lucide-react";
import Index from "./pages/Index.jsx";
import PodcastPlatform from "./pages/PodcastPlatform.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Podcast Platform",
    to: "/podcast",
    icon: <Mic className="h-4 w-4" />,
    page: <PodcastPlatform />,
  },
];
