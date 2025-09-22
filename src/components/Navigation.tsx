import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import LanguageToggle from "./LanguageToggle";

const Navigation = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.projects"), path: "/projects" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-auto" style={{ transform: 'translateX(-50%)' }}>
      <div className="glass-card rounded-glass px-6 py-3 whitespace-nowrap fade-in">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative",
                "hover:text-primary-foreground",
                location.pathname === item.path
                  ? "text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
          <div className="border-l border-glass-border h-6"></div>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;