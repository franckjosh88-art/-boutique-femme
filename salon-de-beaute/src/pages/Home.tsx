import { Hero } from '../sections/Hero'
import { Gallery } from '../sections/Gallery'
import { About } from '../sections/About'
import { Services } from '../sections/Services'
import { Results } from '../sections/Results'
import { Team } from '../sections/Team'
import { GoogleReviews } from '../sections/GoogleReviews'
import { Faq } from '../sections/Faq'
import { CallbackForm } from '../sections/CallbackForm'
import { useSeo } from '../hooks/useSeo'
import { salon } from '../data/content'

export function Home() {
  useSeo(
    `${salon.nom} | Salon de beauté & spa à ${salon.ville}`,
    'Coiffure, soins du visage, manucure, maquillage, extensions et massage à Abidjan. Réservez votre rendez-vous en ligne.',
  )

  return (
    <>
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Results />
      <Team />
      <GoogleReviews />
      <Faq />
      <CallbackForm />
    </>
  )
}