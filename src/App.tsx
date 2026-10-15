import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const produits = [
  { id: 1, nom: 'Robe fleurie', prix: 25000, tag: 'Nouvelle saison', motif: '01', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85' },
  { id: 2, nom: 'Ensemble elegant', prix: 35000, tag: 'Edition limitee', motif: '02', image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85' },
  { id: 3, nom: 'Sac a main', prix: 18000, tag: 'Le detail chic', motif: '03', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85' },
  { id: 4, nom: 'Sandales', prix: 12000, tag: 'Essentiel ete', motif: '04', image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85' },
]

function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={overlay ? 'absolute inset-x-0 top-0 z-20' : 'border-b border-stone-200/70 bg-[#fffdfa]/85 backdrop-blur-xl'}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6">
        <Link to="/" className={`group flex items-center gap-2 text-sm font-semibold tracking-[0.18em] ${overlay ? 'text-white' : 'text-stone-900'}`}>
          <span className={`grid size-8 place-items-center rounded-full text-sm transition duration-300 group-hover:rotate-12 ${overlay ? 'border border-white/40 bg-white/15 text-white backdrop-blur-md' : 'bg-stone-900 text-white'}`}>F</span>
          FEMME<span className={overlay ? 'text-white/60' : 'text-[#b97756]'}>.</span>
        </Link>
        <nav className={`flex items-center gap-2 text-xs font-medium sm:gap-3 ${overlay ? 'text-white' : 'text-stone-700'}`}>
          <Link to="/" className={`hidden px-3 py-2 transition duration-200 sm:block ${overlay ? 'text-white/80 hover:text-white' : 'hover:text-[#b97756]'}`}>Collection</Link>
          <Link to="/contact" className={`rounded-full border px-4 py-2.5 transition duration-200 ${overlay ? 'border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20' : 'border-stone-200 bg-white/60 hover:border-[#b97756]'}`}>Contact</Link>
          <button aria-label="Voir le panier" className={`grid size-10 place-items-center rounded-full text-xs transition duration-200 ${overlay ? 'bg-white text-stone-900 hover:bg-white/85' : 'bg-stone-900 text-white hover:bg-[#b97756]'}`}>
            <span className="relative">Sac<span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-pink-500 text-[9px]">0</span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f3ee] text-[#2b211d]">
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2000&q=90" alt="Femme portant une tenue rose elegante" className="absolute inset-0 size-full object-cover object-[58%_center]" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/15 to-stone-950/60" />
        <Header overlay />
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-28 pt-32 sm:px-8 sm:pt-36">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.22em] text-white/80 uppercase">Collection printemps 2026</p>
            <h1 className="mt-5 text-5xl font-light leading-[0.94] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">Une allure<br /><span className="text-white/70">naturellement belle.</span></h1>
            <p className="mt-7 max-w-lg text-base font-light leading-7 text-white/85 sm:text-lg">Une garde-robe sensible et contemporaine, pensee pour accompagner chaque moment avec douceur.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#collection" className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-stone-900 transition duration-200 hover:bg-white/85">Decouvrir la collection</a>
              <Link to="/contact" className="rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition duration-200 hover:bg-white/20">Nous contacter</Link>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-5 sm:px-8 sm:pb-8">
          <div className="grid gap-3 rounded-[1.75rem] border border-white/30 bg-white/12 p-4 text-white backdrop-blur-xl sm:grid-cols-3 sm:gap-0 sm:p-2">
            {['Selection soignee', 'Livraison rapide', 'Paiement securise'].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl px-3 py-2.5 sm:border-r sm:border-white/20 sm:last:border-0">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/15 text-sm">{['*', '+', '#'][index]}</span>
                <div><p className="text-sm font-medium">{item}</p><p className="text-xs text-white/65">Une experience en toute simplicite</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="collection" className="bg-[#f7f3ee]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-[#b97756] uppercase">A porter maintenant</p>
              <h2 className="mt-4 text-4xl font-light tracking-[-0.045em] sm:text-5xl">Nos coups de coeur</h2>
            </div>
            <span className="hidden text-sm font-medium text-stone-500 sm:block">04 pieces selectionnees</span>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 sm:gap-x-6">
            {produits.map((p) => (
              <article key={p.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-100">
                  <img src={p.image} alt={p.nom} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/25 via-transparent to-white/10" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/25 px-2.5 py-1 text-[10px] font-medium tracking-wider text-white uppercase backdrop-blur-md">{p.tag}</span>
                  <button aria-label={`Ajouter ${p.nom} au panier`} className="absolute bottom-3 right-3 grid size-10 translate-y-16 place-items-center rounded-full bg-white text-lg text-stone-900 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">+</button>
                </div>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <div><h3 className="font-medium text-stone-900">{p.nom}</h3><p className="mt-1 text-sm text-[#b97756]">{p.prix.toLocaleString()} FCFA</p></div>
                  <span className="text-xs text-stone-400">N°{p.id}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-3 sm:px-8 sm:py-24">
        {['Choisi avec soin', 'Livraison douce', 'Conseil personnalise'].map((item, index) => (
          <div key={item} className="flex items-center gap-4">
            <span className="grid size-10 place-items-center rounded-full border border-stone-300 text-sm text-[#b97756]">0{index + 1}</span>
            <p className="font-medium text-stone-700">{item}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-[#fffafb] text-gray-800">
      <Header />
      <main className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
        <section className="rounded-3xl bg-pink-600 p-8 text-white shadow-xl shadow-pink-200/70 sm:p-11">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-pink-100">Nous contacter</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Une question sur votre commande ?</h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-pink-50">Notre équipe vous répond avec plaisir pour vous aider à trouver la pièce parfaite.</p>
          <div className="mt-12 space-y-6 border-t border-pink-400 pt-8">
            <div>
              <p className="text-sm font-semibold text-pink-100">Email</p>
              <a className="mt-1 block text-lg font-semibold hover:underline" href="mailto:bonjour@boutiquefemme.com">bonjour@boutiquefemme.com</a>
            </div>
            <div>
              <p className="text-sm font-semibold text-pink-100">Horaires</p>
              <p className="mt-1 text-lg">Lundi - Samedi, 9h - 18h</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-pink-100 bg-white p-7 shadow-lg shadow-pink-100/50 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-900">Envoyez-nous un message</h2>
          <p className="mt-2 text-gray-600">Nous vous répondrons dans les meilleurs délais.</p>
          {sent && <p className="mt-6 rounded-xl bg-pink-50 px-4 py-3 font-medium text-pink-700">Merci, votre message a bien été envoyé.</p>}
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-gray-700">Prénom
                <input required name="prenom" className="mt-2 w-full rounded-xl border border-pink-100 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100" placeholder="Votre prénom" />
              </label>
              <label className="block text-sm font-semibold text-gray-700">Nom
                <input required name="nom" className="mt-2 w-full rounded-xl border border-pink-100 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100" placeholder="Votre nom" />
              </label>
            </div>
            <label className="block text-sm font-semibold text-gray-700">Adresse email
              <input required type="email" name="email" className="mt-2 w-full rounded-xl border border-pink-100 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100" placeholder="vous@exemple.com" />
            </label>
            <label className="block text-sm font-semibold text-gray-700">Votre message
              <textarea required name="message" rows={5} className="mt-2 w-full resize-y rounded-xl border border-pink-100 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100" placeholder="Comment pouvons-nous vous aider ?" />
            </label>
            <button className="w-full rounded-xl bg-pink-600 px-5 py-3.5 font-bold text-white transition hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-200" type="submit">Envoyer mon message</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
