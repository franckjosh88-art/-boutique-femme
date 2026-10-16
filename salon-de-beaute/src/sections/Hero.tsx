import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { salon } from '../data/content'
import { ArrowLeft, ArrowRight } from '../components/Icons'

const photo = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

const images = [
  {
    src: photo(7388902, 2000),
    alt: 'Deux clientes dans un salon de coiffure afro à Abidjan',
    position: 'center',
  },
  {
    src: photo(2520446, 2000),
    alt: 'Femme afro aux cheveux naturels coiffés au salon',
    position: 'center',
  },
]

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % images.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [])

  const precedent = () => setIndex((value) => (value - 1 + images.length) % images.length)
  const suivant = () => setIndex((value) => (value + 1) % images.length)

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, i) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            style={{ objectPosition: image.position }}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-[1200ms] ease-in-out ${index === i ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/40" />
      </div>

      <div className="container-salon relative w-full pb-20 pt-40 sm:pb-28">
        <p className="text-[0.7rem] tracking-[0.3em] text-cream/70 uppercase">
          {salon.baseline} — {salon.ville}
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] text-cream sm:text-7xl lg:text-[5.5rem]">
          L’expert des cheveux afro et naturels
        </h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-cream/80 sm:text-lg">
          Box braids, vanilles, knotless, soin des boucles et de la peau noire : une équipe de tresseuses et de
          spécialistes qui travaille votre texture, jamais contre elle.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link to={salon.booking} className="btn btn-light">
            Prendre rendez-vous
          </Link>
          <a
            href={`tel:${salon.telephone.replace(/\s/g, '')}`}
            className="btn border border-cream/35 text-cream transition hover:border-cream hover:bg-cream/10"
          >
            {salon.telephone}
          </a>
        </div>

        <div className="absolute bottom-20 right-5 hidden items-center gap-3 sm:flex lg:right-10">
          <button
            type="button"
            onClick={precedent}
            aria-label="Image précédente"
            className="grid size-12 place-items-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-ink"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={suivant}
            aria-label="Image suivante"
            className="grid size-12 place-items-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-ink"
          >
            <ArrowRight />
          </button>
        </div>

        <div className="absolute bottom-20 left-5 flex items-center gap-3 sm:left-8 lg:left-10">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Afficher l’image ${i + 1}`}
              className={`h-px transition-all duration-500 ${index === i ? 'w-14 bg-cream' : 'w-7 bg-cream/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}