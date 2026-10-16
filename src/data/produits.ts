export interface Product {
  id: number
  nom: string
  prix: number
  tag: string
  motif: string
  image: string
}

export const produits: Product[] = [
  { id: 1, nom: 'Robe fleurie', prix: 25000, tag: 'Nouvelle saison', motif: '01', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85' },
  { id: 2, nom: 'Ensemble elegant', prix: 35000, tag: 'Edition limitee', motif: '02', image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85' },
  { id: 3, nom: 'Sac a main', prix: 18000, tag: 'Le detail chic', motif: '03', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85' },
  { id: 4, nom: 'Sandales', prix: 12000, tag: 'Essentiel ete', motif: '04', image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85' },
]
