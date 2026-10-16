import { useState } from 'react'

import { salon, services } from '../data/content'
import { Reveal } from '../components/Reveal'
import { useSeo } from '../hooks/useSeo'
import { CheckIcon, ClockIcon, WhatsappIcon } from '../components/Icons'

const champs =
  'w-full rounded-2xl border border-clay/15 bg-cream px-5 py-3.5 text-sm outline-none transition placeholder:text-muted/60 focus:border-clay focus:ring-4 focus:ring-clay/10'

export function Appointment() {
  useSeo(
    `Prendre rendez-vous | ${salon.nom}`,
    `Réservez votre prestation au salon ${salon.nom} à ${salon.ville}. Confirmation par WhatsApp sous 2 heures.`,
  )

  const [confirme, setConfirme] = useState(false)

  return (
    <>
      <section className="bg-sand/50 pt-40 pb-20 sm:pt-48">
        <div className="container-salon max-w-3xl">
          <p className="eyebrow">Rendez-vous</p>
          <h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">Réservez votre créneau</h1>
          <p className="mt-6 text-base leading-8 text-muted">
            Remplissez le formulaire : nous confirmons votre rendez-vous par WhatsApp sous deux heures, du lundi au
            dimanche.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-salon grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            {confirme ? (
              <div className="rounded-[2.5rem] border border-clay/20 bg-sand/50 p-10 text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-clay text-cream">
                  <CheckIcon className="size-6" />
                </span>
                <h2 className="mt-6 font-display text-3xl">Demande envoyée</h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Merci ! Nous vous rappelons rapidement pour confirmer l’horaire exact de votre prestation.
                </p>
                <button
                  type="button"
                  onClick={() => setConfirme(false)}
                  className="btn btn-outline mt-8"
                >
                  Faire une autre demande
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setConfirme(true)
                  event.currentTarget.reset()
                }}
                className="space-y-5 rounded-[2.5rem] border border-clay/12 p-8 sm:p-12"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-xs tracking-[0.2em] text-muted uppercase">
                    Nom complet
                    <input required name="nom" className={`${champs} mt-2`} placeholder="Aïcha Koné" />
                  </label>
                  <label className="block text-xs tracking-[0.2em] text-muted uppercase">
                    Téléphone
                    <input required type="tel" name="telephone" className={`${champs} mt-2`} placeholder="+225 07 00 00 00" />
                  </label>
                </div>
                <label className="block text-xs tracking-[0.2em] text-muted uppercase">
                  Adresse email
                  <input required type="email" name="email" className={`${champs} mt-2`} placeholder="vous@exemple.com" />
                </label>
                <label className="block text-xs tracking-[0.2em] text-muted uppercase">
                  Prestation souhaitée
                  <select required name="service" className={`${champs} mt-2`} defaultValue="">
                    <option value="" disabled>
                      Choisir une prestation
                    </option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.nom}
                      </option>
                    ))}
                    <option value="conseil">Conseil / diagnostic</option>
                  </select>
                </label>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-xs tracking-[0.2em] text-muted uppercase">
                    Date souhaitée
                    <input required type="date" name="date" className={`${champs} mt-2`} />
                  </label>
                  <label className="block text-xs tracking-[0.2em] text-muted uppercase">
                    Créneau préféré
                    <select required name="creneau" className={`${champs} mt-2`} defaultValue="matin">
                      <option value="matin">Matin (9h – 13h)</option>
                      <option value="apres-midi">Après-midi (13h – 17h)</option>
                      <option value="soir">Soir (17h – 20h)</option>
                    </select>
                  </label>
                </div>
                <label className="block text-xs tracking-[0.2em] text-muted uppercase">
                  Précisions (optionnel)
                  <textarea name="message" rows={4} className={`${champs} mt-2 resize-y`} placeholder="Type de cheveux, allergies, demande particulière…" />
                </label>
                <button type="submit" className="btn btn-primary w-full">
                  Envoyer ma demande
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-clay/12 p-8">
                <h2 className="font-display text-2xl">Besoin d’aide ?</h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Appelez-nous ou écrivez-nous sur WhatsApp pour choisir votre prestation avec un conseiller dédié.
                </p>
                <a
                  href={`https://wa.me/${salon.telephone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary mt-6 w-full"
                >
                  <WhatsappIcon />
                  WhatsApp
                </a>
              </div>

              <div className="rounded-[2rem] bg-sand/60 p-8">
                <h2 className="flex items-center gap-3 font-display text-2xl">
                  <ClockIcon className="size-5 text-clay" />
                  Horaires
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">{salon.horaires}</p>
              </div>

              <div className="rounded-[2rem] bg-ink p-8 text-cream">
                <h2 className="font-display text-2xl">Annulation</h2>
                <p className="mt-4 text-sm leading-7 text-cream/70">
                  Prévenez-nous au moins 24 h à l’avance par téléphone ou WhatsApp : nous vous reproposons un autre
                  créneau sans frais.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  )
}