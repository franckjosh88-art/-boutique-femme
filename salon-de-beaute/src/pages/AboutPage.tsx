import { Link } from 'react-router-dom'

import { Reveal } from '../components/Reveal'
import { equipe, salon } from '../data/content'
import { useSeo } from '../hooks/useSeo'
import { CheckIcon, ClockIcon, MapPinIcon, PhoneIcon } from '../components/Icons'

const valeurs = [
  'Un diagnostic de texture (type 1 à 4C) avant chaque prestation, sans vente forcée.',
  'Des produits pour cheveux afro que nous utilisons nous-mêmes en cabine.',
  'Des tarifs annoncés clairement, jamais modifiés en cours de route.',
  'Un salon ultra-hygiénique, désinfecté entre chaque cliente.',
]

export function AboutPage() {
  useSeo(
    `À propos | ${salon.nom}`,
    `Découvrez ${salon.nom}, salon de beauté et spa à ${salon.ville} : notre histoire, notre équipe et nos engagements.`,
  )

  return (
    <>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden pt-32">
        <img
          src="https://images.pexels.com/photos/11598903/pexels-photo-11598903.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Trois femmes aux cheveux tressés dans le salon Belle Époque"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/30" />
        <div className="container-salon relative pb-16">
          <p className="eyebrow">À propos</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-tight text-cream sm:text-7xl">
            Le salon de référence des cheveux afro à Abidjan
          </h1>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-salon grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Notre histoire</h2>
            <div className="mt-7 space-y-6 text-base leading-8 text-muted">
              <p>
                {salon.nom} a ouvert en {salon.ville} avec une idée simple : un salon doit être un lieu où l’on
                comprend ce qu’on nous fait. Nos clientes viennent pour leurs tresses, leurs boucles et leur peau : chaque
                soin commence par une conversation, jamais par un catalogue.
              </p>
              <p>
                Huit ans plus tard, notre équipe compte huit spécialistes et accueille chaque semaine des clientes
                venues de tout le pays. Nous avons gardé la méthode : écouter, diagnostiquer, puis seulement prodiguer.
              </p>
            </div>
            <Link to={salon.booking} className="btn btn-primary mt-10">
              Prendre rendez-vous
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2.5rem] bg-sand/60 p-9 sm:p-12">
              <h2 className="font-display text-3xl text-ink">Nos engagements</h2>
              <ul className="mt-8 space-y-5">
                {valeurs.map((valeur) => (
                  <li key={valeur} className="flex gap-4">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-clay text-cream">
                      <CheckIcon className="size-3.5" />
                    </span>
                    <span className="text-sm leading-7 text-muted">{valeur}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/50 py-24 sm:py-32">
        <div className="container-salon">
          <Reveal>
            <p className="eyebrow">L’équipe</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Huit métiers, une seule exigence</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((membre, index) => (
              <Reveal key={membre.nom} delay={(index % 4) * 80}>
                <article className="group">
                  <img
                    src={membre.image}
                    alt={`${membre.nom}, ${membre.role}`}
                    loading="lazy"
                    className="aspect-square w-full rounded-[1.75rem] object-cover grayscale transition duration-700 group-hover:grayscale-0"
                  />
                  <h3 className="mt-4 font-display text-xl text-ink">{membre.nom}</h3>
                  <p className="mt-1 text-xs tracking-[0.18em] text-clay uppercase">{membre.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-salon grid gap-6 sm:grid-cols-3">
          {[
            { icon: MapPinIcon, titre: salon.adresseCourte, texte: salon.adresse },
            { icon: ClockIcon, titre: 'Horaires', texte: salon.horaires },
            { icon: PhoneIcon, titre: 'Téléphone', texte: salon.telephone },
          ].map(({ icon: Icon, titre, texte }, index) => (
            <Reveal key={titre} delay={index * 90}>
              <div className="h-full rounded-[2rem] border border-clay/12 p-8">
                <span className="grid size-11 place-items-center rounded-full border border-clay/20 text-clay">
                  <Icon />
                </span>
                <h3 className="mt-5 font-display text-xl text-ink">{titre}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{texte}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}