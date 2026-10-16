import { avis, salon } from '../data/content'
import { Reveal } from '../components/Reveal'
import { GoogleIcon, MapPinIcon, StarIcon } from '../components/Icons'

export function GoogleReviews() {
  return (
    <section className="bg-sand/50 py-24 sm:py-32">
      <div className="container-salon grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal>
          <div className="rounded-[2.5rem] bg-cream p-8 sm:p-12">
            <GoogleIcon className="size-8" />
            <div className="mt-8 flex items-end gap-4">
              <p className="font-display text-7xl leading-none text-ink">{salon.note}</p>
              <div className="pb-2">
                <div className="flex gap-1 text-clay">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
                <p className="mt-1 text-xs tracking-[0.2em] text-muted uppercase">
                  {salon.nbAvis} avis Google
                </p>
              </div>
            </div>

            <h2 className="mt-8 font-display text-3xl leading-snug sm:text-4xl">
              Pourquoi nos clientes reviennent
            </h2>

            <ul className="mt-8 space-y-6">
              {avis.map((item) => (
                <li key={item.auteur} className="border-l-2 border-clay/30 pl-5">
                  <div className="flex gap-1 text-clay">
                    {Array.from({ length: item.note }).map((_, index) => (
                      <StarIcon key={index} className="size-3.5" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-ink/80">{item.texte}</p>
                  <p className="mt-3 text-xs tracking-[0.2em] text-muted uppercase">{item.auteur}</p>
                </li>
              ))}
            </ul>

            <a
              href={salon.avisGoogle}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline mt-10 w-full sm:w-auto"
            >
              Voir tous nos avis
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full overflow-hidden rounded-[2.5rem] border border-clay/15 bg-cream">
            <iframe
              title={`Carte du salon ${salon.nom}`}
              src={`${salon.carteGoogle}&output=embed`}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="flex items-center gap-3 border-t border-clay/10 px-6 py-5 text-sm text-muted">
              <MapPinIcon className="size-4 shrink-0 text-clay" />
              {salon.adresse}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}