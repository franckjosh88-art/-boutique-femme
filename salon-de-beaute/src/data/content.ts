export interface Service {
  slug: string
  nom: string
  note: string
  image: string
  duree: string
  description: string
  details: string[]
  prix: { nom: string; prix: string }[]
}

export interface Membre {
  nom: string
  role: string
  image: string
}

export interface Article {
  slug: string
  titre: string
  extrait: string
  date: string
  categorie: string
  image: string
  contenu: string[]
}

const photo = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

export const salon = {
  nom: 'Belle Époque',
  baseline: 'Salon de beauté afro & spa',
  ville: 'Abidjan',
  telephone: '+225 07 07 07 07 07',
  email: 'bonjour@belle-epoque.ci',
  adresse: 'Rue du Commerce, Cocody Angré 7e Tranche, Abidjan',
  adresseCourte: 'Cocody Angré, Abidjan',
  horaires: 'Lundi – Samedi : 9h – 20h · Dimanche : 11h – 18h',
  carteGoogle: 'https://www.google.com/maps/search/?api=1&query=Cocody+Angre+Abidjan',
  avisGoogle: 'https://www.google.com/maps/search/?api=1&query=salon+de+coiffure+Angre+Abidjan',
  booking: '/appointment',
  note: '4.6',
  nbAvis: '212',
}

export const services: Service[] = [
  {
    slug: 'coiffure',
    nom: 'Coiffure Afro & Brushing',
    note: 'Coupe, contours et coiffage pensés pour les cheveux crépus et afro.',
    image: photo(31741926),
    duree: '1 h – 2 h 30',
    description:
      "Nous travaillons les textures afro, crépus, bouclées et capillaires en respectant l'écrouissance. Chaque prestation commence par un diagnostic de texture et de densité, puis nous construisons une coiffure qui se reprend facilement à la maison.",
    details: [
      'Diagnostic de texture (type 1 à 4C) et de densité',
      'Coupe, dégradé et contours des cheveux crépus',
      'Brushing, lissage et mise en plis',
      'Soin hydratant avant chaque prestation',
    ],
    prix: [
      { nom: 'Diagnostic texture + conseils', prix: 'Offert' },
      { nom: 'Coupe femme + coiffage', prix: '18 000 – 35 000 FCFA' },
      { nom: 'Coupe homme / enfant', prix: '10 000 – 18 000 FCFA' },
      { nom: 'Brushings simple', prix: '12 000 FCFA' },
      { nom: 'Coupe à sec (lock)', prix: '20 000 FCFA' },
    ],
  },
  {
    slug: 'soins-du-visage',
    nom: 'Soins du visage',
    note: 'Diagnostic peau noire, éclat immédiat et soins en profondeur.',
    image: photo(3865548),
    duree: '50 min – 1 h 30',
    description:
      "Les peaux noires et métissées ont leurs propres besoins : hyperpigmentation, taches, sensibilité post-soin. Nous adaptons les actifs et les gestes, et vous repartez avec une routine simple, réalisable à la maison.",
    details: [
      'Diagnostic peau et analyse des taches',
      'Nettoyage profond et extraction douce',
      'Gommage, masque et hydratation intense',
      'Massage facial lymphatique',
    ],
    prix: [
      { nom: 'Diagnostic peau', prix: 'Offert' },
      { nom: 'Soin visage essentiel', prix: '14 000 FCFA' },
      { nom: 'Soin profond + extraction', prix: '22 000 – 30 000 FCFA' },
      { nom: 'Rituel éclat anti-taches 90 min', prix: '40 000 FCFA' },
      { nom: 'Peeling NCTF', prix: '32 000 – 48 000 FCFA' },
    ],
  },
  {
    slug: 'manucure-pedicure',
    nom: 'Manicure & Pédicure',
    note: 'Ongles impeccables, semi-permanent et soin des mains.',
    image: photo(16041439),
    duree: '45 min – 1 h 30',
    description:
      "Manucure et pédicure dans un espace séparé, ventilé et désinfecté entre chaque cliente. Nous travaillons avec des produits hypoallergéniques adaptés aux peaux foncées et des couleurs qui tiennent trois semaines sans s'écailler.",
    details: [
      'Manucure russe et classique',
      'Semi-permanent et gainage gel',
      'Pédicure spa et semi-permanent',
      'Gommage et soin des mains ou des pieds',
    ],
    prix: [
      { nom: 'Manucure simple', prix: '6 000 FCFA' },
      { nom: 'Manicure semi-permanent', prix: '14 000 FCFA' },
      { nom: 'Gainage gel', prix: '18 000 – 25 000 FCFA' },
      { nom: 'Pédicure spa', prix: '17 000 FCFA' },
      { nom: 'Pédicure semi-permanent', prix: '22 000 FCFA' },
    ],
  },
  {
    slug: 'maquillage',
    nom: 'Maquillage & Sourcils',
    note: 'Bases, teint glutathione et sourcils sur mesure.',
    image: photo(17320162),
    duree: '45 min – 2 h',
    description:
      "Nous travaillons la lumière d'Abidjan sur les peaux noires : base neutre respectée, teint lumineux qui ne vire pas au gris, sourcils définis. Nos produits tiennent sous la chaleur et l'humidité pendant toute la journée.",
    details: [
      'Maquillage journée, soirée et mariage',
      'Sourcils : épilation, teinture, microblading',
      'Teintures glutathione et fonds de teint',
      'Ateliers auto-maquillage en groupe',
    ],
    prix: [
      { nom: 'Maquillage simple', prix: '12 000 FCFA' },
      { nom: 'Maquillage soirée', prix: '20 000 – 40 000 FCFA' },
      { nom: 'Épilation sourcils', prix: '5 000 FCFA' },
      { nom: 'Teinture sourcils', prix: '8 000 FCFA' },
      { nom: 'Atelier 3 personnes', prix: '22 000 FCFA / personne' },
    ],
  },
  {
    slug: 'extensions-meches',
    nom: 'Tresses, Vanilles & Mèches',
    note: 'Box braids, knotless, vanilles, tissage et pose de mèches.',
    image: photo(12275480),
    duree: '2 h – 6 h',
    description:
      "Notre cœur de métier : les tresses. Box braids, knotless braids, nattes Vanilles, Goddess, locks et tissage. Nous travaillons toujours sur des cheveux propres et moisturisés, avec un fil tendu qui ne tire pas sur le cuir chevelu.",
    details: [
      'Box braids et knotless braids',
      'Nattes Vanilles, Goddess et cornrows',
      'Tissage, closure et pose de mèches',
      'Retwist, reprise des racines et soin',
    ],
    prix: [
      { nom: 'Cornrows (tresses plaquées)', prix: '15 000 – 30 000 FCFA' },
      { nom: 'Box braids (longueur moyenne)', prix: '35 000 – 70 000 FCFA' },
      { nom: 'Knotless braids', prix: '45 000 – 90 000 FCFA' },
      { nom: 'Nattes Vanilles', prix: '30 000 – 60 000 FCFA' },
      { nom: 'Pose de mèches / closure', prix: '25 000 – 55 000 FCFA' },
      { nom: 'Retwist + soin', prix: '12 000 – 20 000 FCFA' },
    ],
  },
  {
    slug: 'massage-spa',
    nom: 'Massage & Spa',
    note: 'Relaxation, drainage lymphatique et rituels hammam.',
    image: photo(19641818),
    duree: '45 min – 2 h',
    description:
      "Espace spa dédié, musique douce et huiles chaudes : nos massages dénouent les tensions du dos, des épaules et des jambes. Formules pour une séance, pour un couple ou pour offrir.",
    details: [
      'Massage relaxant, japonais ou sport',
      'Drainage lymphatique',
      'Gommage corps et bain de vapeur',
      'Rituels hammam et formules duo',
    ],
    prix: [
      { nom: 'Massage relaxant 45 min', prix: '16 000 FCFA' },
      { nom: 'Massage deep tissue 60 min', prix: '26 000 FCFA' },
      { nom: 'Drainage lymphatique', prix: '30 000 FCFA' },
      { nom: 'Gommage + vapeur', prix: '22 000 FCFA' },
      { nom: 'Rituel hammam duo', prix: '75 000 FCFA' },
    ],
  },
]

export const equipe: Membre[] = [
  { nom: 'Aïcha Koné', role: 'Directrice & specialist tresses', image: photo(14296197, 800) },
  { nom: 'Mariam Touré', role: 'Experte peaux noires', image: photo(4612122, 800) },
  { nom: 'Fatou Diallo', role: 'Tresseuse & vanilles', image: photo(2520446, 800) },
  { nom: 'Nadège Yao', role: 'Maquilleuse professionnelle', image: photo(18367682, 800) },
  { nom: 'Awa N’Guessan', role: 'Manucure & pédicure', image: photo(17320162, 800) },
  { nom: 'Juliet Abro', role: 'Praticienne spa & massage', image: photo(31887155, 800) },
  { nom: 'Sarah Bamba', role: 'Coiffeuse afro', image: photo(24972993, 800) },
  { nom: 'Estelle Gohou', role: 'Accueil & relation client', image: photo(7552695, 800) },
]

export const galerie = [
  photo(23349912, 700),
  photo(35382770, 700),
  photo(11598903, 700),
  photo(17533400, 700),
  photo(16686923, 700),
  photo(19112533, 700),
  photo(36587243, 700),
  photo(12275480, 700),
]

export const resultats = [
  {
    avant: photo(19112533, 900),
    apres: photo(3880274, 900),
    titre: 'Soin profond + brushing',
    detail: 'Cheveux crépus secs et cassants',
    duree: '2 h 30 · Résultat immédiat',
  },
  {
    avant: photo(17533400, 900),
    apres: photo(11598903, 900),
    titre: 'Box braids sur cheveux naturels',
    detail: 'Volume et tenue sur cheveux 4C',
    duree: '4 h · Tenue 8 semaines',
  },
  {
    avant: photo(16686923, 900),
    apres: photo(7388902, 900),
    titre: 'Cornrows + soin visage',
    detail: 'Tresses nettes et teint unifié',
    duree: '2 h · Entretien 6 semaines',
  },
]

export const avis = [
  {
    auteur: 'Adjoua K.',
    note: 5,
    texte:
      'Enfin une tresseuse qui ne tire pas sur les racines. J’ai fait mes box braids ici, personne ne m’a forcée à mettre des mèches, et la pose tient parfaitement.',
  },
  {
    auteur: 'Mariam S.',
    note: 5,
    texte:
      'Le soin du visage est un vrai rendez-vous diagnostic. On m’a expliqué ma mélanine et proposé un rituel anti-taches. Ma peau est plus unie.',
  },
  {
    auteur: 'Tanou N.',
    note: 4,
    texte:
      'Manicure impeccable et ponctualité au rendez-vous. J’apprécie l’ambiance calme et l’hygiène visible dans l’espace.',
  },
  {
    auteur: 'Grace E.',
    note: 5,
    texte:
      'Coiffure afro réalisée au peigne fin, sans casse. Mes cheveux 4C ont enfin une vraie définition de boucles.',
  },
]

export const faq: { question: string; reponse: string }[] = [
  {
    question: 'Dois-je réserver à l’avance ?',
    reponse:
      'Oui, la réservation se fait en ligne ou par WhatsApp. Un créneau est confirmé dès réception de votre message. Pour les tresses et poses de mèches, nous demandons un acompte car chaque appointment immobilise une tresseuse pendant plusieurs heures.',
  },
  {
    question: 'Proposez-vous des services pour les femmes et les hommes ?',
    reponse:
      'Oui. Coupe, soins du visage, massage, manicure et pédicure sont proposés aux deux publics. Pour les messieurs, nous réservons des créneaux dédiés en fin de journée, avec un tarif harmonisé et sans surcoût.',
  },
  {
    question: 'Pouvez-vous m’aider à choisir le style qui me convient ?',
    reponse:
      'Absolument. Chaque rendez-vous commence par un diagnostic : type de texture (1 à 4C), densité, longueur cible, temps d’entretien que vous pouvez consacrer à la maison. Nous vous présentons deux options maximum.',
  },
  {
    question: 'Quels produits utilisez-vous pour les cheveux afro ?',
    reponse:
      'Nous utilisons des lignes professionnelles pensées pour les textures afro : shampoings sans sulfate, leave-in hydratants, beurres de karité, huiles de ricin et sérums protéiques. Nous privilégions les formules vegan et non testées sur les animaux quand un équivalent existe.',
  },
]

export const articles: Article[] = [
  {
    slug: 'routine-capillaire-cheveux-crepus',
    titre: 'La routine capillaire des cheveux crépus en saison sèche',
    extrait:
      'L’air sec d’Abidjan assèche les fibres crépues plus vite qu’on ne le croit. Voici la routine minimaliste que nous recommandons.',
    date: '12 mars 2026',
    categorie: 'Cheveux afro',
    image: photo(19112533),
    contenu: [
      'Entre décembre et mars, l’humidité chute et les cheveux crépus sèchent en profondeur. La priorité n’est pas d’ajouter des produits, mais de sceller l’hydratation : shampooing doux, après-shampooing appliqué en sections des pointes vers les racines, puis leave-in et beurre de karité.',
      'Évitez le peigner à sec sur cheveux non complètement secs : humidifiez d’abord, puis démêlez avec un peigne Demeter ou aux doigts, section par section.',
      'Un masque protéinique par mois suffit à maintenir la force de la fibre, si vos cheveux sont teints ou endommagés.',
    ],
  },
  {
    slug: 'box-braids-entes-echeances',
    titre: 'Box braids : préparer ses cheveux avant la pose',
    extrait:
      'Nettoyage, hydratation, contours : les quatre gestes qui garantissent une pose nette et sans casse.',
    date: '28 février 2026',
    categorie: 'Tresses',
    image: photo(35382770),
    contenu: [
      'La préparation compte autant que la pose. Lavez vos cheveux la veille avec un shampoing clarifiant, séchez en ananas puis humidifiez généreusement : les racines doivent être souples avant de commencer.',
      'Ne taillez pas au plus court : une longueur de 8 à 10 cm facilite le tressage sans tirer sur le cuir chevelu.',
      'Évitez les crèmes et les huiles avant la pose : elles glissent et le tressage devient irrégulier.',
    ],
  },
  {
    slug: 'definir-ses-boucles',
    titre: 'Définir ses boucles sans les aggravate',
    extrait:
      'Shampooing, crème leave-in, scrunching : la technique douce qui préserve l’intégrité des boucles 3C et 4C.',
    date: '9 février 2026',
    categorie: 'Cheveux afro',
    image: photo(14296197),
    contenu: [
      'Les boucles 3C et 4C ont besoin d’eau et de temps. Le meilleur geste consiste à appliquer le leave-in en sections, sans démêler à sec et sans friction.',
      'La technique du scrunching avec un gel ou une mousse suffit à définir les boucles. On ne lisse pas les cheveux pendant qu’ils sèchent.',
      'Une coupe en couches tous les trois mois réduit le temps de coiffage de moitié et limite la casse aux pointes.',
    ],
  },
  {
    slug: 'manucure-peaux-foncees',
    titre: 'Manucure : les gestes sûrs pour les peaux foncées',
    extrait:
      'Acide, cuticules et pigmentation : nos conseils pour des ongles impeccables sans fragiliser la peau.',
    date: '22 janvier 2026',
    categorie: 'Ongles',
    image: photo(22668317),
    contenu: [
      'Sur les peaux foncées, les produits acides mal dosés causent vite des taches. Nous utilisons des concentrations contrôlées et un temps de pose surveillé.',
      'Les cuticules ne doivent jamais être coupées à sec : le travail à l’eau limite les micro-coupures et les marques hyperpigmentées.',
      'Une couche de top coat tous les dix jours prolonge la tenue du semi-permanent et protège la couleur.',
    ],
  },
  {
    slug: 'rituel-spa-couple',
    titre: 'Un rituel spa à deux',
    extrait:
      'Massage duo, bain de vapeur et thé à la menthe : nos formules pour offrir un moment calme, sans monde autour.',
    date: '15 janvier 2026',
    categorie: 'Spa',
    image: photo(6634828),
    contenu: [
      'Notre rituel hammam duo dure deux heures : gommage corps, vapeur, massage dos et jambes, puis thé à la menthe servi au jardin.',
      'C’est aussi notre formule la plus demandée pour les anniversaires et les demandes en mariage. Réservation conseillée trois semaines à l’avance.',
      'Nous adaptons les huiles : lavande et ylang-ylang pour la relaxation, eucalyptus et menthe poivrée pour la circulation.',
    ],
  },
  {
    slug: 'proteger-ses-cheveux-en-ete',
    titre: 'Cheveux afro, chaleur et vacances : le trio gagnant',
    extrait:
      'Climat, piscine et séchoir : nos conseils pour garder vos boucles en pleine forme pendant les vacances.',
    date: '5 janvier 2026',
    categorie: 'Cheveux afro',
    image: photo(7388902),
    contenu: [
      'Le chlore et le sel s’accrochent dans la fibre : rincez à l’eau claire avant d’entrer et appliquez un pré-shampoing à l’huile avant la baignade.',
      'Séchez toujours à l’air libre ou au diffuseur froid : la chaleur directe fissure les cuticules des cheveux crépus.',
      'Un chapeau n’est pas optionnel. Les rayons UVA sont responsables de la majorité des dégâts estivaux sur les cheveux colorés.',
    ],
  },
]