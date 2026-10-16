import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { salon, services } from '../data/content'
import {
  ChevronDown,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  WhatsappIcon,
} from './Icons'

const liens = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/services/coiffure', label: 'Services', dropdown: true },
  { to: '/review', label: 'Avis' },
  { to: '/blog', label: 'Blog' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const [pathname, setPathname] = useState(location.pathname)

  if (pathname !== location.pathname) {
    setPathname(location.pathname)
    setOpen(false)
    setServicesOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-clay/10 bg-cream/90 py-3 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-salon flex items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${salon.nom} — accueil`}>
          <span className="grid size-10 place-items-center rounded-full border border-clay/40 font-display text-lg text-clay transition-transform duration-500 group-hover:rotate-12">
            B
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-[0.2em] text-ink">{salon.nom.toUpperCase()}</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.3em] text-muted uppercase">{salon.baseline}</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {liens.map((lien) => (
            <li key={lien.to} className="relative">
              {lien.dropdown ? (
                <div
                  className="group relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={lien.to}
                    className="flex items-center gap-1.5 text-sm tracking-wide text-ink/80 transition hover:text-clay"
                  >
                    {lien.label}
                    <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </NavLink>
                  <div
                    className={`invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 ${servicesOpen ? 'visible opacity-100' : ''}`}
                  >
                    <ul className="rounded-3xl border border-clay/10 bg-cream p-3 shadow-xl shadow-clay/10">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="block rounded-2xl px-4 py-2.5 text-sm text-ink/75 transition hover:bg-sand hover:text-clay"
                          >
                            {service.nom}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <NavLink
                  to={lien.to}
                  className={({ isActive }) =>
                    `text-sm tracking-wide transition hover:text-clay ${isActive ? 'text-clay' : 'text-ink/80'}`
                  }
                >
                  {lien.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${salon.telephone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 rounded-full border border-clay/25 px-4 py-2.5 text-sm text-ink transition hover:border-clay hover:text-clay"
          >
            <PhoneIcon />
            {salon.telephone}
          </a>
          <a
            href={`https://wa.me/${salon.telephone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary !px-5 !py-2.5 !text-xs"
          >
            <WhatsappIcon />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-clay/25 text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-cream pt-24 transition-all duration-500 lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <div className="container-salon flex h-full flex-col gap-2 overflow-y-auto pb-10">
          {liens.map((lien) => (
            <Link
              key={lien.to}
              to={lien.to}
              className="border-b border-clay/10 py-4 font-display text-2xl text-ink transition hover:text-clay"
            >
              {lien.label}
            </Link>
          ))}

          <details className="border-b border-clay/10 py-4">
            <summary className="cursor-pointer font-display text-2xl text-ink">Tous les services</summary>
            <ul className="mt-4 space-y-3 pl-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-sm text-muted transition hover:text-clay">
                    {service.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <div className="mt-8 flex flex-col gap-3">
            <a href={`tel:${salon.telephone.replace(/\s/g, '')}`} className="btn btn-outline w-full">
              <PhoneIcon />
              {salon.telephone}
            </a>
            <a
              href={`https://wa.me/${salon.telephone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full"
            >
              <WhatsappIcon />
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}