import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={(e)=>handleNavClick(e, '#home')} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-cyan-500/20 border border-cyan-400/40" />
            <span className="font-semibold tracking-wide text-white">AnyTechie</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e)=>handleNavClick(e, item.href)}
                className="text-sm text-white/80 hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-black/80 border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e)=>handleNavClick(e, item.href)}
                className="block px-2 py-2 rounded text-white/90 hover:text-cyan-300 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
