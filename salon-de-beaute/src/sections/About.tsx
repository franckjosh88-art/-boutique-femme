import { Link } from 'react-router-dom'

import { salon } from '../data/content'
import { Reveal } from '../components/Reveal'
import { SparkleIcon, ScissorsIcon, StarIcon } from '../components/Icons'

const bénéfices = [
  {
    icon: SparkleIcon,
    titre: 'La fibre avant tout',
    texte: 'Des bobines fines, des poses sans tension et des soins qui respectent votre écrouissance.',
  },
  {
    icon: ScissorsIcon,
    titre: 'Des gestes sans dommage',
    texte: 'Chaque diagnostic se termine par des explications simples, sans jargon, sur l’entretien à la maison.',
  },
  {
    icon: StarIcon,
    titre: 'Des produits que nous utilisons nous-mêmes',
    texte: 'Shampoings sans sulfate, karité, huiles de ricin : uniquement ce qui marche sur les textures afro.',
  },
]

export function About() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-salon grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/14296197/pexels-photo-14296197.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Femme afro aux cheveux naturels dans la lumière du salon"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2.5rem] object-cover"
            />
            <div className="absolute -bottom-8 -right-4 w-56 rounded-[2rem] border border-clay/15 bg-cream p-6 shadow-xl sm:-right-8">
              <p className="font-display text-4xl text-clay">8 ans</p>
              <p className="mt-2 text-xs leading-6 tracking-wide text-muted uppercase">
                de soins, de coupes et de conseils à {salon.ville}
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">À propos</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Un salon qui comprend les cheveux afro
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-muted">
              {salon.nom} est né d’un constat simple : trop de cabinets treatent les cheveux crépus comme un problème à
              corriger. Nous commençons chaque rendez-vous par un diagnostic de texture, et nous nous engageons à ne
              proposer que ce qui va vraiment à vos cheveux et à votre quotidien.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="mt-12 font-display text-2xl text-ink">Notre équipe comprend :</h3>
            <ul className="mt-6 space-y-5">
              {bénéfices.map(({ icon: Icon, titre, texte }) => (
                <li key={titre} className="flex gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-clay/20 text-clay">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-medium text-ink">{titre}</p>
                    <p className="mt-1 text-sm leading-7 text-muted">{texte}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <Link to={salon.booking} className="btn btn-primary mt-10">
              Prendre rendez-vous
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}