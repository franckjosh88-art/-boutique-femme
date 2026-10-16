import { Link } from 'react-router-dom'

import { articles, salon } from '../data/content'
import { Reveal } from '../components/Reveal'
import { useSeo } from '../hooks/useSeo'
import { ArrowRight } from '../components/Icons'

export function BlogPage() {
  useSeo(
    `Blog beauté | ${salon.nom}`,
    `Conseils cheveux, peau et spa : les articles du blog de ${salon.nom}, salon de beauté à ${salon.ville}.`,
  )

  const [premier, ...suite] = articles

  return (
    <>
      <section className="bg-sand/50 pt-40 pb-20 sm:pt-48">
        <div className="container-salon max-w-3xl">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">Conseils beauté utiles</h1>
          <p className="mt-6 text-base leading-8 text-muted">
            Nos coiffeuses, esthéticiennes et praticiennes écrivent ce qu’elles appliquent vraiment en cabine.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-salon">
          <Reveal>
            <Link
              to={`/blog/${premier.slug}`}
              className="card-hover group grid overflow-hidden rounded-[2.5rem] border border-clay/12 lg:grid-cols-2"
            >
              <img
                src={premier.image}
                alt={premier.titre}
                className="aspect-[4/3] size-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="flex flex-col justify-center p-9 sm:p-14">
                <p className="text-[0.65rem] tracking-[0.25em] text-clay uppercase">
                  {premier.categorie} · À la une
                </p>
                <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">{premier.titre}</h2>
                <p className="mt-5 text-sm leading-8 text-muted">{premier.extrait}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-ink uppercase">
                  Lire l’article <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {suite.map((article, index) => (
              <Reveal key={article.slug} delay={(index % 3) * 90}>
                <Link
                  to={`/blog/${article.slug}`}
                  className="card-hover group flex h-full flex-col overflow-hidden rounded-[2rem] border border-clay/12"
                >
                  <img
                    src={article.image}
                    alt={article.titre}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-[0.62rem] tracking-[0.25em] text-clay uppercase">
                      {article.categorie} · {article.date}
                    </p>
                    <h3 className="mt-4 font-display text-2xl leading-snug text-ink">{article.titre}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{article.extrait}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}