import { useState } from 'react'

import { faq } from '../data/content'
import { Reveal } from '../components/Reveal'
import { ChevronDown } from '../components/Icons'

export function Faq() {
  const [ouvert, setOuvert] = useState<number | null>(0)

  return (
    <section className="py-24 sm:py-32">
      <div className="container-salon grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">FAQ</h2>
          <p className="mt-6 max-w-sm text-base leading-8 text-muted">
            Vous hésitez encore ? Appelez-nous, nous répondons de vive voix et sans engagement.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="divide-y divide-clay/12 border-y border-clay/12">
            {faq.map((item, index) => {
              const actif = ouvert === index
              return (
                <li key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOuvert(actif ? null : index)}
                    aria-expanded={actif}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl text-ink sm:text-2xl">{item.question}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-clay transition-transform duration-500 ${actif ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      actif ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <p className="overflow-hidden text-sm leading-8 text-muted sm:text-base">{item.reponse}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}