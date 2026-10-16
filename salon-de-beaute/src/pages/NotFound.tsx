import { Link } from 'react-router-dom'

import { salon } from '../data/content'
import { useSeo } from '../hooks/useSeo'

export function NotFound() {
  useSeo(`Page introuvable | ${salon.nom}`, `La page demandée n’existe pas sur le site de ${salon.nom}.`)

  return (
    <section className="container-salon flex min-h-[80svh] flex-col items-center justify-center pt-32 text-center">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="mt-6 font-display text-6xl leading-tight sm:text-8xl">Page introuvable</h1>
      <p className="mt-6 max-w-md text-base leading-8 text-muted">
        Cette page a peut-être été déplacée. Revenez à l’accueil ou réservez directement votre créneau.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to="/" className="btn btn-primary">
          Retour à l’accueil
        </Link>
        <Link to={salon.booking} className="btn btn-outline">
          Prendre rendez-vous
        </Link>
      </div>
    </section>
  )
}