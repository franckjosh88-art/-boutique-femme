import { Link, useParams } from 'react-router-dom'

import { articles, salon } from '../data/content'
import { Reveal } from '../components/Reveal'
import { useSeo } from '../hooks/useSeo'
import { ArrowRight } from '../components/Icons'

export function BlogPost() {
  const { slug } = useParams()
  const article = articles.find((item) => item.slug === slug)

  useSeo(
    article ? `${article.titre} | ${salon.nom}` : `Article introuvable | ${salon.nom}`,
    article?.extrait ?? `Blog de ${salon.nom}, salon de beauté à ${salon.ville}.`,
  )

  if (!article) {
    return (
      <section className="container-salon pt-48 pb-32 text-center">
        <h1 className="font-display text-5xl">Article introuvable</h1>
        <Link to="/blog" className="btn btn-primary mt-8">
          Retour au blog
        </Link>
      </section>
    )
  }

  const autres = articles.filter((item) => item.slug !== slug).slice(0, 3)

  return (
    <>
      <article>
        <header className="bg-sand/50 pt-40 pb-16 sm:pt-48">
          <div className="container-salon max-w-3xl">
            <Link to="/blog" className="text-xs tracking-[0.25em] text-clay uppercase hover:text-clay-dark">
              ← Blog
            </Link>
            <h1 className="mt-6 font-display text-4xl leading-tight sm:text-6xl">{article.titre}</h1>
            <p className="mt-6 text-xs tracking-[0.2em] text-muted uppercase">
              {article.categorie} · {article.date}
            </p>
          </div>
        </header>

        <div className="container-salon -mt-10">
          <img
            src={article.image}
            alt={article.titre}
            className="aspect-[16/9] w-full rounded-[2.5rem] object-cover"
          />
        </div>

        <div className="container-salon grid gap-12 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28 rounded-[2rem] bg-sand/60 p-8">
              <p className="text-xs tracking-[0.2em] text-muted uppercase">Vous avez une question ?</p>
              <p className="mt-4 font-display text-2xl leading-snug text-ink">
                Nos spécialistes répondent en cabine, gratuitement.
              </p>
              <Link to={salon.booking} className="btn btn-primary mt-6 w-full">
                Prendre rendez-vous
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6 text-base leading-8 text-muted">
              <p className="font-display text-2xl leading-relaxed text-ink">{article.extrait}</p>
              {article.contenu.map((paragraphe) => (
                <p key={paragraphe.slice(0, 32)}>{paragraphe}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      <section className="bg-sand/50 py-20">
        <div className="container-salon">
          <h2 className="font-display text-3xl">À lire également</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {autres.map((autre) => (
              <Link
                key={autre.slug}
                to={`/blog/${autre.slug}`}
                className="card-hover group flex flex-col overflow-hidden rounded-[2rem] bg-cream"
              >
                <img
                  src={autre.image}
                  alt={autre.titre}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[0.62rem] tracking-[0.25em] text-clay uppercase">{autre.categorie}</p>
                  <h3 className="mt-3 font-display text-xl leading-snug text-ink">{autre.titre}</h3>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-xs tracking-[0.2em] text-muted uppercase">
                    Lire <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}