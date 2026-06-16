import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/pexels-elmedionoob-37610662.jpg')" }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />

      {/* Red tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand/60 bg-brand/20 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-light">
            Live Music Festival 2025
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-none mb-6">
          Feel the
          <br />
          <span className="text-brand-light drop-shadow-lg">Rhythm</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-4 leading-relaxed">
          An electrifying weekend of rock, blues & soul — live on stage.
          <br className="hidden md:block" />
          August 15–17 · Downtown Arena
        </p>

        {/* Stat row */}
        <div className="flex flex-wrap justify-center gap-8 my-10">
          {[
            { label: 'Artists', value: '40+' },
            { label: 'Stages', value: '6' },
            { label: 'Hours of Music', value: '72' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-brand-light">{s.value}</div>
              <div className="text-xs tracking-widest uppercase text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#tickets"
            className="px-8 py-4 rounded-full bg-brand hover:bg-brand-light text-white font-bold tracking-widest uppercase text-sm transition-all duration-200 shadow-lg shadow-brand/40 hover:shadow-brand-light/50"
          >
            Get Your Tickets
          </a>
          <a
            href="#lineup"
            className="px-8 py-4 rounded-full border border-white/40 text-white font-bold tracking-widest uppercase text-sm hover:border-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          >
            View Lineup
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-200 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
