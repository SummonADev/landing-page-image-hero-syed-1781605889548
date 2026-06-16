import { Zap, Headphones, MapPin, Star } from 'lucide-react';

type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'High-Energy Shows',
    desc: 'World-class artists delivering unforgettable performances every night.',
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: 'Premium Sound',
    desc: 'State-of-the-art audio systems engineered for flawless live sound.',
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: 'Prime Location',
    desc: 'Centrally located at Downtown Arena with easy access and parking.',
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: 'VIP Experience',
    desc: 'Exclusive lounges, priority access, and meet-and-greet opportunities.',
  },
];

export default function Features() {
  return (
    <section className="bg-dark-2 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-light mb-3">Why Attend</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">The Full Experience</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-8 rounded-2xl border border-white/10 bg-dark-3 hover:border-brand/50 hover:bg-brand/5 transition-all duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand/20 text-brand-light group-hover:bg-brand/30 transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
