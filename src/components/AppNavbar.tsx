import { Home, User, Code, Briefcase, FolderGit2, Mail, Menu } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";

const menuItems = [
  { title: "Accueil", url: "/", icon: Home },
  { title: "À Propos", url: "/about", icon: User },
  { title: "Compétences", url: "/skills", icon: Code },
  { title: "Projets", url: "/projects", icon: FolderGit2 },
  { title: "Expérience", url: "/experience", icon: Briefcase },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function AppNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="space-y-1">
            <h2 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Astou Mbow
            </h2>
            <p className="text-xs text-muted-foreground">Linguere_Dev</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                end
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`
                }
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </NavLink>
            ))}
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.url}
                    end
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground"
                      }`
                    }
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        )}

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}