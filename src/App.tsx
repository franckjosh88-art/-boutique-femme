const produits = [
  { id: 1, nom: 'Robe fleurie', prix: 25000, couleur: 'bg-pink-200' },
  { id: 2, nom: 'Ensemble élégant', prix: 35000, couleur: 'bg-purple-200' },
  { id: 3, nom: 'Sac à main', prix: 18000, couleur: 'bg-amber-200' },
  { id: 4, nom: 'Sandales', prix: 12000, couleur: 'bg-rose-200' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-2xl font-bold text-pink-600">Boutique Femme</h1>
        <button className="px-4 py-2 rounded-full bg-pink-600 text-white">
          Panier (0)
        </button>
      </header>

      <section className="px-6 py-16 text-center bg-pink-50">
        <h2 className="text-4xl font-bold text-gray-800">Nouvelle collection</h2>
        <p className="mt-3 text-gray-600">Des vêtements pour toutes les occasions</p>
      </section>

      <main className="grid grid-cols-2 gap-4 p-6 md:grid-cols-4">
        {produits.map((p) => (
          <div key={p.id} className="overflow-hidden border rounded-xl">
            <div className={`h-48 ${p.couleur}`} />
            <div className="p-3">
              <h3 className="font-semibold">{p.nom}</h3>
              <p className="text-pink-600">{p.prix.toLocaleString()} FCFA</p>
              <button className="w-full py-2 mt-2 text-sm text-white bg-gray-900 rounded-lg">
                Ajouter
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}