import React from 'react';

const clients = [
  { name: 'Talent Garden', src: '/images/talentgarden.png' },
  { name: 'Sketchin', src: '/images/sketchin.png' },
  { name: 'Tangity', src: '/images/tangity.png' },
  { name: 'The Wave', src: '/images/thewave.png' },
  { name: 'Kiwi', src: '/images/kiwi.png' },
  { name: 'Poste Italiane', src: '/images/poste.png' },
  { name: 'Barilla', src: '/images/barilla.png' },
  { name: "Giro d'Italia", src: '/images/giroditalia.png' },
  { name: 'E.ON', src: '/images/eon.png' },
  { name: 'Enel', src: '/images/enel.png' },
  { name: 'Prada', src: '/images/prada.png' },
  { name: 'Costa', src: '/images/costa.png' },
  { name: 'BPER', src: '/images/bper.png' },
  { name: 'Sanofi', src: '/images/sanofi.png' },
  { name: 'DHL', src: '/images/dhl.png' },
  { name: 'Brembo', src: '/images/brembo.png' },
  { name: 'Mottura', src: '/images/mottura.png' },
  { name: 'Monogrid', src: '/images/monogrid.png' },
  { name: 'Tangible', src: '/images/tangible.png' },
  { name: 'Togevent', src: '/images/togevent.png' },
];

export default function Marquee() {
  // Duplicate for continuous seamless marquee scroll
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="py-16 md:py-24 border-t border-gray-100 overflow-hidden">
      <div className="px-4" />
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-8 md:gap-14 hover:[animation-play-state:paused] cursor-grab">
          {marqueeItems.map((client, idx) => (
            <img
              key={idx}
              src={client.src}
              alt={client.name}
              loading="lazy"
              className="h-10 md:h-16 w-auto max-w-[140px] md:max-w-[200px] object-contain shrink-0 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
