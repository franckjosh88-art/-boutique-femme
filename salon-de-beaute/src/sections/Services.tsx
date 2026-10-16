import { Link } from 'react-router-dom'

import { services, salon } from '../data/content'
import { Reveal } from '../components/Reveal'
import { ArrowRight } from '../components/Icons'

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-salon">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Nos prestations</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Nos services</h2>
          <p className="mt-6 text-base leading-8 text-muted">
            Six univers complémentaires, pensés pour prendre soin de vous de la tête aux pieds. Chaque prestation
            commence par un diagnostic gratuit.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 90}>
              <Link
                to={`/services/${service.slug}`}
                className="card-hover group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-clay/12 bg-cream"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.nom} — ${salon.nom}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl text-ink">{service.nom}</h3>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-clay/25 text-clay transition duration-500 group-hover:translate-x-1 group-hover:bg-clay group-hover:text-cream">
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">{service.note}</p>
                  <p className="mt-5 text-[0.65rem] tracking-[0.2em] text-clay uppercase">{service.duree}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}