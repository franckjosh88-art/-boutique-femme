import { useState } from 'react'

import { Reveal } from '../components/Reveal'
import { CheckIcon } from '../components/Icons'

const champs =
  'w-full rounded-2xl border border-clay/15 bg-cream px-5 py-3.5 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-clay focus:ring-4 focus:ring-clay/10'

export function CallbackForm() {
  const [envoye, setEnvoye] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEnvoye(true)
    event.currentTarget.reset()
  }

  return (
    <section className="bg-ink py-24 text-cream sm:py-32">
      <div className="container-salon grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/9146381/pexels-photo-9146381.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Espace massage et spa du salon Belle Époque"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2.5rem] object-cover"
            />
            <div className="absolute -bottom-6 left-6 rounded-3xl bg-cream px-6 py-4 text-ink">
              <p className="font-display text-2xl">≤ 2 h</p>
              <p className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">Délai de rappel moyen</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[0.7rem] tracking-[0.3em] text-clay uppercase">Rappel téléphonique</p>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            Vous ne savez pas encore ce qui vous convient ?
          </h2>
          <p className="mt-5 text-base leading-8 text-cream/70">
            Laissez-nous vos coordonnées : nous vous appelons rapidement pour comprendre votre besoin et vous orienter
            vers la prestation idéale.
          </p>

          {envoye && (
            <p className="mt-8 flex items-center gap-3 rounded-2xl border border-clay/40 bg-clay/15 px-5 py-4 text-sm text-cream">
              <CheckIcon className="size-5 text-clay" />
              Merci, votre demande est enregistrée. Nous vous rappelons très vite.
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs tracking-[0.2em] text-cream/60 uppercase">
                Nom complet
                <input required name="nom" className={`${champs} mt-2`} placeholder="Aïcha Koné" />
              </label>
              <label className="block text-xs tracking-[0.2em] text-cream/60 uppercase">
                Téléphone
                <input required name="telephone" type="tel" className={`${champs} mt-2`} placeholder="+225 07 00 00 00" />
              </label>
            </div>
            <label className="block text-xs tracking-[0.2em] text-cream/60 uppercase">
              Adresse email
              <input required name="email" type="email" className={`${champs} mt-2`} placeholder="vous@exemple.com" />
            </label>
            <label className="block text-xs tracking-[0.2em] text-cream/60 uppercase">
              Votre message
              <textarea
                required
                name="message"
                rows={4}
                className={`${champs} mt-2 resize-y`}
                placeholder="Je cherche un soin pour des cheveux abîmés par la décoloration…"
              />
            </label>
            <button type="submit" className="btn btn-light w-full sm:w-auto">
              Envoyer ma demande
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}