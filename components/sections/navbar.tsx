import { navLinks } from "@/data/landing-content";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg border border-accent/40 bg-accent/20" />
          <span className="text-lg font-semibold">AISC Growth OS</span>
        </div>
        <ul className="hidden items-center gap-8 text-sm text-muted lg:flex">
          {navLinks.map((item) => (
            <li key={item} className="cursor-pointer transition-colors hover:text-foreground">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block">Sign In</button>
          <Button>Book Demo</Button>
        </div>
      </nav>
    </header>
  );
}
