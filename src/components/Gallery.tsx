export default function Gallery() {
  const items = [
    { label: 'Main Stage Energy', col: 'col-span-2' },
    { label: 'Crowd Vibes', col: 'col-span-1' },
    { label: 'Guitar Solo', col: 'col-span-1' },
    { label: 'Night Show', col: 'col-span-2' },
  ];

  return (
    <section id="gallery" className="bg-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-light mb-3">Moments</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">Gallery</h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Large hero image */}
          <div className="col-span-3 md:col-span-2 relative rounded-2xl overflow-hidden h-80 group">
            <img
              src="/images/pexels-elmedionoob-37610662.jpg"
              alt="Guitar player on stage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-sm font-bold text-white tracking-widest uppercase">Main Stage</span>
          </div>

          {/* Placeholder cards */}
          <div className="col-span-3 md:col-span-1 flex flex-col gap-4">
            {['Crowd Energy', 'Night Lights'].map((label) => (
              <div key={label} className="relative rounded-2xl overflow-hidden flex-1 min-h-36 bg-dark-3 border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-dark-3" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-500">{label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          {['Backstage', 'Headliner Set', 'Festival Vibes'].map((label) => (
            <div key={label} className="col-span-1 relative rounded-2xl overflow-hidden h-44 bg-dark-3 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-dark-3" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
