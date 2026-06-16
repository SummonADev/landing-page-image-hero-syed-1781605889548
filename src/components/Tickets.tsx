import { Check } from 'lucide-react';
import clsx from 'clsx';

type Tier = {
  name: string;
  price: string;
  features: string[];
  highlighted: boolean;
};

const tiers: Tier[] = [
  {
    name: 'General',
    price: '$79',
    features: [
      '3-Day Festival Pass',
      'Access to All Stages',
      'Festival Map & Guide',
      'Standard Entry Queue',
    ],
    highlighted: false,
  },
  {
    name: 'VIP',
    price: '$199',
    features: [
      'Everything in General',
      'VIP Lounge Access',
      'Priority Stage Viewing',
      'Complimentary Drinks',
      'Exclusive Merch Pack',
    ],
    highlighted: true,
  },
  {
    name: 'Backstage',
    price: '$449',
    features: [
      'Everything in VIP',
      'Backstage Access',
      'Artist Meet & Greet',
      'Premium Dining',
      'Commemorative Pass',
    ],
    highlighted: false,
  },
];

export default function Tickets() {
  return (
    <section id="tickets" className="bg-dark-2 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-light mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">Get Your Tickets</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Choose the experience that suits you. All passes include festival access for all three days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={clsx(
                'relative rounded-2xl border p-8 flex flex-col transition-all duration-300',
                t.highlighted
                  ? 'border-brand bg-gradient-to-b from-brand/20 to-dark-3 scale-105 shadow-2xl shadow-brand/30'
                  : 'border-white/10 bg-dark-3 hover:border-brand/40'
              )}
            >
              {t.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-brand text-white text-xs font-black tracking-widest uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-sm font-black tracking-[0.2em] uppercase text-gray-400 mb-2">{t.name}</h3>
                <div className="text-5xl font-black text-white">{t.price}</div>
                <div className="text-xs text-gray-500 mt-1">per person · 3 days</div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span
                      className={clsx(
                        'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center',
                        t.highlighted ? 'bg-brand text-white' : 'bg-white/10 text-gray-300'
                      )}
                    >
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-sm text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={clsx(
                  'w-full py-3 rounded-full font-bold tracking-widest uppercase text-sm transition-all duration-200',
                  t.highlighted
                    ? 'bg-brand hover:bg-brand-light text-white shadow-lg shadow-brand/40'
                    : 'border border-white/20 text-white hover:border-brand hover:bg-brand/10'
                )}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
