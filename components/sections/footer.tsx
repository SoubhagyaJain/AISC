import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 text-sm text-muted md:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-foreground">AISC Growth OS</p>
          <p className="mt-3 max-w-xs">
            AI SEO and marketing operations platform for steel-focused contractors and fabricators.
          </p>
          <p className="mt-4 text-xs text-muted/60">
            © {new Date().getFullYear()} AISC Growth OS. All rights reserved.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Product</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
            <li><Link href="/#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link href="/#how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-foreground">SteelGenie Engine</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/engine" className="text-accent hover:text-accent/80 transition-colors">Engine Overview</Link></li>
            <li><Link href="/engine#how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
            <li><Link href="/engine#deliverables" className="hover:text-foreground transition-colors">Deliverables</Link></li>
            <li><Link href="/engine#demo" className="hover:text-foreground transition-colors">Book Demo</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-foreground">Company</p>
          <ul className="mt-3 space-y-2">
            <li><span className="hover:text-foreground transition-colors cursor-pointer">About</span></li>
            <li><Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            <li><span className="hover:text-foreground transition-colors cursor-pointer">Privacy</span></li>
            <li>
              <a href="mailto:support@aiscgrowthos.com" className="hover:text-foreground transition-colors">
                support@aiscgrowthos.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
