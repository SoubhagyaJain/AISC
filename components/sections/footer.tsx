export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 text-sm text-muted md:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-foreground">AISC Growth OS</p>
          <p className="mt-3 max-w-xs">AI SEO and marketing operations platform for steel-focused contractors and fabricators.</p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Product</p>
          <ul className="mt-3 space-y-2"><li>Features</li><li>Pricing</li><li>Use Cases</li></ul>
        </div>
        <div>
          <p className="font-semibold text-foreground">Company</p>
          <ul className="mt-3 space-y-2"><li>About</li><li>Contact</li><li>Careers</li></ul>
        </div>
        <div>
          <p className="font-semibold text-foreground">Legal</p>
          <ul className="mt-3 space-y-2"><li>Privacy</li><li>Terms</li><li>support@aiscgrowthos.com</li></ul>
        </div>
      </div>
    </footer>
  );
}
