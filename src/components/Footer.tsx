import { Music2, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Music2 className="w-7 h-7 text-brand-light" />
              <span className="text-2xl font-bold tracking-widest text-white uppercase">RockStage</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The ultimate live music festival experience. Three days of raw energy, legendary artists, and memories that last forever.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[
                { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                { icon: <Youtube className="w-5 h-5" />, label: 'YouTube' },
                { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand/60 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-black tracking-[0.2em] uppercase text-white mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['About', 'Lineup', 'Tickets', 'Gallery', 'Contact'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-brand-light transition-colors duration-200"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black tracking-[0.2em] uppercase text-white mb-4">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>Downtown Arena, Main St.</li>
              <li>info@rockstage.com</li>
              <li>+1 (800) 555-ROCK</li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Newsletter</p>
              <form
                onSubmit={(e: React.FormEvent) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand/60"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full bg-brand hover:bg-brand-light text-white text-xs font-bold tracking-widest uppercase transition-colors duration-200"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; 2025 RockStage Festival. All rights reserved.</p>
          <p className="text-xs text-gray-600">Made with ♥ for music lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
}
