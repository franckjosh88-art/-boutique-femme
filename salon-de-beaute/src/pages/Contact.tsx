import { Link } from 'react-router-dom'

import { salon } from '../data/content'
import { Reveal } from '../components/Reveal'
import { useSeo } from '../hooks/useSeo'
import { ClockIcon, GoogleIcon, MapPinIcon, PhoneIcon, WhatsappIcon } from '../components/Icons'

export function Contact() {
  useSeo(
    `Contact | ${salon.nom}`,
    `Contactez ${salon.nom} : ${salon.adresse}, ${salon.telephone}. WhatsApp, téléphone, e-mail et plan d’accès.`,
  )

  return (
    <>
      <section className="bg-sand/50 pt-40 pb-20 sm:pt-48">
        <div className="container-salon max-w-3xl">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">Parlons de vous</h1>
          <p className="mt-6 text-base leading-8 text-muted">
            Une question sur une prestation, un doute sur un produit ou simplement envie de passer dire bonjour :
            écrivez-nous, nous répondons rapidement.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-salon grid gap-10 lg:grid-cols-3">
          {[
            {
              icon: PhoneIcon,
              titre: 'Téléphone',
              contenu: salon.telephone,
              href: `tel:${salon.telephone.replace(/\s/g, '')}`,
            },
            {
              icon: WhatsappIcon,
              titre: 'WhatsApp',
              contenu: salon.telephone,
              href: `https://wa.me/${salon.telephone.replace(/[^0-9]/g, '')}`,
            },
            {
              icon: MapPinIcon,
              titre: 'Adresse',
              contenu: salon.adresse,
              href: salon.carteGoogle,
            },
          ].map(({ icon: Icon, titre, contenu, href }, index) => (
            <Reveal key={titre} delay={index * 90}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="card-hover flex h-full flex-col rounded-[2rem] border border-clay/12 p-8"
              >
                <span className="grid size-11 place-items-center rounded-full border border-clay/20 text-clay">
                  <Icon />
                </span>
                <h2 className="mt-6 font-display text-2xl text-ink">{titre}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{contenu}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-salon grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] border border-clay/15">
              <iframe
                title={`Plan d’accès au salon ${salon.nom}`}
                src={`${salon.carteGoogle}&output=embed`}
                className="h-full min-h-[420px] w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between rounded-[2.5rem] bg-ink p-10 text-cream">
              <div>
                <h2 className="flex items-center gap-3 font-display text-3xl">
                  <ClockIcon className="size-5 text-clay" />
                  Horaires
                </h2>
                <p className="mt-5 text-sm leading-8 text-cream/75">{salon.horaires}</p>
                <p className="mt-6 text-sm leading-8 text-cream/50">
                  Pour les prestations longues (pose d’extensions, hammam), nous une réservation trois semaines à
                  l’avance.
                </p>
              </div>
              <div className="mt-10 space-y-3">
                <Link to={salon.booking} className="btn btn-light w-full">
                  Prendre rendez-vous
                </Link>
                <a
                  href={salon.avisGoogle}
                  target="_blank"
                  rel="noreferrer"
                  className="btn w-full border border-cream/30 text-cream transition hover:border-clay hover:bg-clay/10"
                >
                  <GoogleIcon className="size-4" />
                  Lire nos avis
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}