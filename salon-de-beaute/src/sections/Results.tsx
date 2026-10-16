import { resultats } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Results() {
  return (
    <section className="bg-sand/50 py-24 sm:py-32">
      <div className="container-salon">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Avant / Après</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Des résultats réels sur de vraies clientes
          </h2>
          <p className="mt-6 text-base leading-8 text-muted">
            Aucune retouche numérique : uniquement ce que nous réalisons en cabine, avec le temps du soin et les
            produits adaptés.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {resultats.map((resultat, index) => (
            <Reveal key={resultat.titre} delay={index * 100}>
              <article className="overflow-hidden rounded-[2rem] bg-cream shadow-sm">
                <div className="grid grid-cols-2">
                  <figure className="relative">
                    <img
                      src={resultat.avant}
                      alt={`Avant — ${resultat.titre}`}
                      loading="lazy"
                      className="aspect-[3/4] size-full object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[0.6rem] tracking-[0.2em] text-ink uppercase">
                      Avant
                    </span>
                  </figure>
                  <figure className="relative">
                    <img
                      src={resultat.apres}
                      alt={`Après — ${resultat.titre}`}
                      loading="lazy"
                      className="aspect-[3/4] size-full object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-clay px-3 py-1 text-[0.6rem] tracking-[0.2em] text-cream uppercase">
                      Après
                    </span>
                  </figure>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-ink">{resultat.titre}</h3>
                  <p className="mt-2 text-sm text-muted">{resultat.detail}</p>
                  <p className="mt-4 text-[0.65rem] tracking-[0.2em] text-clay uppercase">{resultat.duree}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}