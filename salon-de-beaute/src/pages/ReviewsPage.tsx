import { avis, salon } from '../data/content'
import { Reveal } from '../components/Reveal'
import { useSeo } from '../hooks/useSeo'
import { GoogleIcon, StarIcon } from '../components/Icons'

export function ReviewsPage() {
  useSeo(
    `Avis clients | ${salon.nom}`,
    `Découvrez les avis Google de ${salon.nom}, salon de beauté à ${salon.ville}. Note moyenne : ${salon.note}/5 sur ${salon.nbAvis} avis.`,
  )

  return (
    <>
      <section className="bg-sand/50 pt-40 pb-20 sm:pt-48">
        <div className="container-salon text-center">
          <GoogleIcon className="mx-auto size-10" />
          <h1 className="mt-8 font-display text-5xl leading-tight sm:text-7xl">Vos mots comptent</h1>
          <div className="mt-8 flex items-center justify-center gap-4">
            <p className="font-display text-6xl text-ink">{salon.note}</p>
            <div>
              <div className="flex gap-1 text-clay">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <p className="mt-1 text-xs tracking-[0.2em] text-muted uppercase">{salon.nbAvis} avis Google</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-salon grid gap-6 md:grid-cols-2">
          {avis.map((item, index) => (
            <Reveal key={item.auteur} delay={(index % 2) * 90}>
              <article className="h-full rounded-[2rem] border border-clay/12 p-9">
                <div className="flex gap-1 text-clay">
                  {Array.from({ length: item.note }).map((_, index) => (
                    <StarIcon key={index} className="size-4" />
                  ))}
                </div>
                <p className="mt-6 text-base leading-8 text-ink/80">“{item.texte}”</p>
                <p className="mt-6 text-xs tracking-[0.2em] text-muted uppercase">{item.auteur}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container-salon mt-14 text-center">
          <a href={salon.avisGoogle} target="_blank" rel="noreferrer" className="btn btn-primary">
            Voir tous nos avis sur Google
          </a>
        </div>
      </section>
    </>
  )
}