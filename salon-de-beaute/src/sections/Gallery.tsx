import { galerie } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Gallery() {
  const boucle = [...galerie, ...galerie]

  return (
    <section className="overflow-hidden border-y border-clay/10 bg-sand/60 py-20 sm:py-28">
      <div className="container-salon">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Réalisations</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
              Des résultats réels, dans nos fauteuils
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted">
            Faites défiler nos réalisations. Survolez pour mettre le défilement en pause.
          </p>
        </Reveal>
      </div>

      <div className="marquee mt-14">
        {boucle.map((image, index) => (
          <figure
            key={`${image}-${index}`}
            className="group relative aspect-[3/4] w-64 shrink-0 overflow-hidden rounded-[2rem] sm:w-72"
          >
            <img
              src={image}
              alt={`Réalisation du salon Belle Époque ${index % galerie.length + 1}`}
              loading="lazy"
              className="size-full object-cover transition duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 pt-12 text-xs tracking-[0.2em] text-cream uppercase opacity-0 transition duration-500 group-hover:opacity-100">
              Belle Époque
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}