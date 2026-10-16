import { Link } from 'react-router-dom'

import { salon, services } from '../data/content'
import { FacebookIcon, InstagramIcon, MapPinIcon, PhoneIcon, TiktokIcon, WhatsappIcon } from './Icons'

const annee = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-salon grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full border border-cream/30 font-display text-lg">
              B
            </span>
            <span className="font-display text-xl tracking-[0.2em] text-cream">{salon.nom.toUpperCase()}</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-cream/60">
            Un salon de beauté pensé comme une maison : diagnostic honnête, gestes précis et produits choisis pour
            durer.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-cream/15 transition hover:border-clay hover:text-clay">
              <InstagramIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid size-10 place-items-center rounded-full border border-cream/15 transition hover:border-clay hover:text-clay">
              <FacebookIcon />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="grid size-10 place-items-center rounded-full border border-cream/15 transition hover:border-clay hover:text-clay">
              <TiktokIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">Navigation</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/about" className="transition hover:text-clay">À propos</Link></li>
            <li><Link to="/services/coiffure" className="transition hover:text-clay">Services</Link></li>
            <li><Link to="/blog" className="transition hover:text-clay">Blog</Link></li>
            <li><Link to="/review" className="transition hover:text-clay">Avis</Link></li>
            <li><Link to="/appointment" className="transition hover:text-clay">Rendez-vous</Link></li>
            <li><Link to="/contact" className="transition hover:text-clay">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">Prestations</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="transition hover:text-clay">
                  {service.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">Nous trouver</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPinIcon className="mt-1 size-4 shrink-0 text-clay" />
              <span>{salon.adresse}</span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-1 size-4 shrink-0 text-clay" />
              <a href={`tel:${salon.telephone.replace(/\s/g, '')}`} className="transition hover:text-clay">
                {salon.telephone}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsappIcon className="mt-1 size-4 shrink-0 text-clay" />
              <a
                href={`https://wa.me/${salon.telephone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-clay"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-salon flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {annee} {salon.nom}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <button type="button" className="transition hover:text-clay">
              Cookie Settings
            </button>
            <Link to="/contact" className="transition hover:text-clay">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}