import clsx from 'clsx';

type Artist = {
  name: string;
  genre: string;
  day: 'Day 1' | 'Day 2' | 'Day 3';
  headliner: boolean;
};

const artists: Artist[] = [
  { name: 'The Crimson Riffs', genre: 'Classic Rock', day: 'Day 1', headliner: true },
  { name: 'Neon Voltage', genre: 'Hard Rock', day: 'Day 1', headliner: false },
  { name: 'Midnight Steel', genre: 'Heavy Metal', day: 'Day 1', headliner: false },
  { name: 'Solar Chord', genre: 'Indie Rock', day: 'Day 2', headliner: true },
  { name: 'Blue Creek Band', genre: 'Blues Rock', day: 'Day 2', headliner: false },
  { name: 'Echo Chamber', genre: 'Alternative', day: 'Day 2', headliner: false },
  { name: 'Voltage Saints', genre: 'Southern Rock', day: 'Day 3', headliner: true },
  { name: 'The Raw Cuts', genre: 'Garage Rock', day: 'Day 3', headliner: false },
  { name: 'Iron Bloom', genre: 'Progressive Rock', day: 'Day 3', headliner: false },
];

const days = ['Day 1', 'Day 2', 'Day 3'] as const;

export default function Lineup() {
  return (
    <section id="lineup" className="bg-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-light mb-3">Artists</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">Festival Lineup</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {days.map((day) => (
            <div key={day} className="flex flex-col">
              <div className="mb-6 pb-3 border-b border-brand/40">
                <span className="text-sm font-black tracking-[0.2em] uppercase text-brand-light">{day}</span>
              </div>
              <div className="flex flex-col gap-4">
                {artists
                  .filter((a) => a.day === day)
                  .map((a) => (
                    <div
                      key={a.name}
                      className={clsx(
                        'p-5 rounded-xl border transition-all duration-200 hover:scale-[1.02] cursor-default',
                        a.headliner
                          ? 'border-brand/60 bg-brand/10 shadow-md shadow-brand/20'
                          : 'border-white/10 bg-dark-3 hover:border-white/20'
                      )}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div
                            className={clsx(
                              'font-black text-lg leading-tight',
                              a.headliner ? 'text-white' : 'text-gray-200'
                            )}
                          >
                            {a.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-1 tracking-wide">{a.genre}</div>
                        </div>
                        {a.headliner && (
                          <span className="shrink-0 px-2 py-0.5 rounded text-xs font-bold bg-brand text-white tracking-widest uppercase">
                            Headliner
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
