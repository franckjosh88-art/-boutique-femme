import { useRef } from 'react'

import { equipe } from '../data/content'
import { Reveal } from '../components/Reveal'
import { ArrowLeft, ArrowRight } from '../components/Icons'

export function Team() {
  const pisteRef = useRef<HTMLDivElement>(null)

  const defiler = (direction: number) => {
    const piste = pisteRef.current
    if (!piste) return
    piste.scrollBy({ left: direction * (piste.clientWidth * 0.75), behavior: 'smooth' })
  }

  return (
    <section className="py-24 sm:py-32">
      <div className="container-salon">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">L’équipe</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Rencontrez nos stylistes</h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => defiler(-1)}
              aria-label="Équipe précédente"
              className="grid size-12 place-items-center rounded-full border border-clay/25 text-ink transition hover:border-clay hover:bg-clay hover:text-cream"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => defiler(1)}
              aria-label="Équipe suivante"
              className="grid size-12 place-items-center rounded-full border border-clay/25 text-ink transition hover:border-clay hover:bg-clay hover:text-cream"
            >
              <ArrowRight />
            </button>
          </div>
        </Reveal>
      </div>

      <div
        ref={pisteRef}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-4 sm:px-8"
        style={{ scrollbarWidth: 'none' }}
      >
        {equipe.map((membre, index) => (
          <Reveal key={membre.nom} delay={(index % 4) * 80} className="shrink-0 snap-start">
            <article className="group w-64 sm:w-72">
              <div className="overflow-hidden rounded-[2rem] bg-sand">
                <img
                  src={membre.image}
                  alt={`Portrait de ${membre.nom}, ${membre.role}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{membre.nom}</h3>
              <p className="mt-1 text-xs tracking-[0.18em] text-clay uppercase">{membre.role}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}