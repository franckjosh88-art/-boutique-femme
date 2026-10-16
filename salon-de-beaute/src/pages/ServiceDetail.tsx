import { Link, useParams } from 'react-router-dom'

import { salon, services } from '../data/content'
import { Reveal } from '../components/Reveal'
import { useSeo } from '../hooks/useSeo'
import { CheckIcon, ClockIcon } from '../components/Icons'

export function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  useSeo(
    service ? `${service.nom} | ${salon.nom}` : `Prestation introuvable | ${salon.nom}`,
    service
      ? `${service.nom} à ${salon.ville} : ${service.note} Tarifs et réservation en ligne.`
      : `Découvrez nos prestations au salon ${salon.nom}.`,
  )

  if (!service) {
    return (
      <section className="container-salon pt-48 pb-32 text-center">
        <h1 className="font-display text-5xl">Prestation introuvable</h1>
        <p className="mt-4 text-muted">Cette page n’existe pas ou a été déplacée.</p>
        <Link to="/" className="btn btn-primary mt-8">
          Retour à l’accueil
        </Link>
      </section>
    )
  }

  const autres = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <>
      <section className="relative flex min-h-[75svh] items-end overflow-hidden">
        <img
          src={service.image}
          alt={`${service.nom} — ${salon.nom}`}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/30" />
        <div className="container-salon relative pb-16 pt-40">
          <Link to="/" className="text-xs tracking-[0.25em] text-cream/70 uppercase hover:text-cream">
            ← Accueil
          </Link>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight text-cream sm:text-7xl">
            {service.nom}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-cream/80">{service.note}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-salon grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">En détail</h2>
            <p className="mt-6 text-base leading-8 text-muted">{service.description}</p>
            <ul className="mt-10 space-y-4">
              {service.details.map((detail) => (
                <li key={detail} className="flex gap-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-clay text-cream">
                    <CheckIcon className="size-3.5" />
                  </span>
                  <span className="text-sm leading-7 text-ink/80">{detail}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2.5rem] border border-clay/12 p-9">
              <div className="flex items-center gap-3 text-clay">
                <ClockIcon className="size-4" />
                <span className="text-xs tracking-[0.2em] uppercase">Durée : {service.duree}</span>
              </div>

              <h2 className="mt-8 font-display text-3xl">Tarifs</h2>
              <ul className="mt-6 divide-y divide-clay/10">
                {service.prix.map((ligne) => (
                  <li key={ligne.nom} className="flex items-baseline justify-between gap-6 py-4">
                    <span className="text-sm text-ink/80">{ligne.nom}</span>
                    <span className="shrink-0 text-sm font-medium text-clay">{ligne.prix}</span>
                  </li>
                ))}
              </ul>

              <Link to={salon.booking} className="btn btn-primary mt-8 w-full">
                Réserver maintenant
              </Link>
              <p className="mt-4 text-center text-xs text-muted">
                Le devis final est confirmé après le diagnostic gratuit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/50 py-20">
        <div className="container-salon">
          <h2 className="font-display text-3xl">Autres prestations</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {autres.map((autre) => (
              <Link
                key={autre.slug}
                to={`/services/${autre.slug}`}
                className="card-hover group flex flex-col overflow-hidden rounded-[2rem] bg-cream"
              >
                <img
                  src={autre.image}
                  alt={autre.nom}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl text-ink">{autre.nom}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{autre.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}