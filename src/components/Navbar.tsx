import { useState } from 'react';
import { Music2, Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ['About', 'Lineup', 'Tickets', 'Gallery', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Music2 className="w-7 h-7 text-brand-light" />
          <span className="text-2xl font-bold tracking-widest text-white uppercase">RockStage</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm font-semibold tracking-widest uppercase text-gray-300 hover:text-brand-light transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#tickets"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-brand text-white text-sm font-bold tracking-widest uppercase hover:bg-brand-light transition-colors duration-200"
        >
          Get Tickets
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300 bg-black/90',
          open ? 'max-h-96 py-4' : 'max-h-0'
        )}
      >
        <ul className="flex flex-col items-center gap-4 pb-4">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold tracking-widest uppercase text-gray-300 hover:text-brand-light transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#tickets"
              onClick={() => setOpen(false)}
              className="inline-flex items-center px-5 py-2 rounded-full bg-brand text-white text-sm font-bold tracking-widest uppercase hover:bg-brand-light transition-colors duration-200"
            >
              Get Tickets
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
