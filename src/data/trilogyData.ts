export interface BookFormat {
  type: 'Kindle' | 'Paperback' | 'Hardcover Deluxe';
  price: string;
  asin: string;
  url: string;
}

export interface BookInfo {
  id: string;
  volume: number;
  titleEn: string;
  titleFr: string;
  yearSetting: number;
  protagonistAge: number;
  tagline: string;
  synopsisEn: string;
  synopsisFr: string;
  formats: BookFormat[];
  keyThemes: string[];
  notableCharacters: string[];
  readStandalone: boolean;
}

export const YANN_SOREL_TRILOGY: BookInfo[] = [
  {
    id: 'book-1',
    volume: 1,
    titleEn: '93 Years Old in 2047',
    titleFr: '93 ans en 2047',
    yearSetting: 2047,
    protagonistAge: 93,
    tagline: '20 years after the nuclear conflict, the boundaries between man, machine, and alien life dissolve.',
    synopsisEn:
      'It is 2047, twenty years after a global nuclear conflict. Yann Sorel, a 93-year-old man leading an apparently ordinary existence, observes the astonishing emergence of pervasive artificial intelligence, household robot butlers, and revolutionary life-extension technologies. His world is upended when he makes first contact on Earth with Garacan, an extraterrestrial from the planet Canocan. Yann falls in love with an android specially engineered for earthlings, and joins deep-space commercial prospecting expeditions across the galaxy as Garacan’s trusted advisor. In 2047, the foundational laws of robotics are forced to evolve.',
    synopsisFr:
      'En 2047, vingt ans après un conflit nucléaire majeur. Yann Sorel, 93 ans, mène une vie ordinaire dans un monde transformé par les progrès vertigineux de l’intelligence artificielle, des robots majordomes et de l’extension de la longévité. Tout bascule lors d’un contact sur Terre avec Garacan, un extraterrestre venu de la planète Canocan. Yann tombe amoureux d’une androïde conçue pour les Terriens et s’embarque dans des expéditions de prospection commerciale à travers la galaxie. En 2047, les célèbres lois de la robotique doivent impérativement évoluer.',
    formats: [
      {
        type: 'Kindle',
        price: '$7.99',
        asin: 'B0CFK2C7VK',
        url: 'https://www.amazon.com/dp/B0CFK2C7VK',
      },
      {
        type: 'Paperback',
        price: '$22.00',
        asin: 'B0CFCVYNS3',
        url: 'https://www.amazon.com/dp/B0CFCVYNS3',
      },
      {
        type: 'Hardcover Deluxe',
        price: '$41.86',
        asin: 'B0CFZ9GZ8Y',
        url: 'https://www.amazon.com/dp/B0CFZ9GZ8Y',
      },
    ],
    keyThemes: ['Post-Nuclear Rebirth', 'Sentient Androids', 'First Contact', 'Laws of Robotics', 'Longevity Extension'],
    notableCharacters: ['Yann Sorel (93 yo)', 'Garacan (Alien from Canocan)', 'The First Android Companion', 'Robot Butler'],
    readStandalone: true,
  },
  {
    id: 'book-2',
    volume: 2,
    titleEn: '121 Years Old in 2075',
    titleFr: '121 ans en 2075',
    yearSetting: 2075,
    protagonistAge: 121,
    tagline: '15 incredible galactic adventures: Galactic congresses, sentient rights revolts, and space megacities.',
    synopsisEn:
      'The hero Yann Sorel, now 121 years old, takes us on 15 exhilarating adventures: encounters with the Draconians, the secrets of the moon of Ucratos, daily survival and high society in 2075, the outlandish superhero craze, and the tribulations of psycho-cyberneticians. Yann navigates the towering space cities known as "The Tors", witnesses the historic Android Demands of 2070 and the failure of android Andria, meets the Arcturians, attends the Extraordinary Congress of the Galactic Federation in 2072, negotiates with the ruler of Khanna, and boards the living starship Canalana.',
    synopsisFr:
      'Yann Sorel, désormais âgé de 121 ans, nous entraîne dans 15 aventures extraordinaires : rencontre avec les Draconiens, mystères de la lune d’Ucratos, engouement extravagant pour les super-héros, tourments des psycho-cybernéticiens et vie dans les cités spatiales "Les Tors". Il assiste aux revendications androïdes de 2070, fait face à l’échec de l’androïde Andria, entre en contact avec quatre nouvelles civilisations stellaires, participe au Congrès Extraordinaire de la Fédération Galactique en 2072 et voyage à bord du vaisseau spatial Canalana.',
    formats: [
      {
        type: 'Kindle',
        price: '$7.99',
        asin: 'B0CZBSWN6S',
        url: 'https://www.amazon.com/dp/B0CZBSWN6S',
      },
      {
        type: 'Paperback',
        price: '$22.00',
        asin: 'B0CZDVQHGV',
        url: 'https://www.amazon.com/dp/B0CZDVQHGV',
      },
      {
        type: 'Hardcover Deluxe',
        price: '$49.90',
        asin: 'B0CZDD5FMX',
        url: 'https://www.amazon.com/dp/B0CZDD5FMX',
      },
    ],
    keyThemes: ['Galactic Federation Politics', 'Android Civil Rights', 'Floating Space Cities (Tors)', 'Multi-Species Diplomacy', 'Transhuman Identity'],
    notableCharacters: ['Yann Sorel (121 yo)', 'Android Andria', 'The Ruler of Khanna', 'The Draconians & Arcturians'],
    readStandalone: true,
  },
  {
    id: 'book-3',
    volume: 3,
    titleEn: '194 Years Old in 2148',
    titleFr: '194 ans en 2148',
    yearSetting: 2148,
    protagonistAge: 194,
    tagline: 'When memories are traded like bread, an immortal and a rogue android fight for the soul of humanity.',
    synopsisEn:
      'In 2148, physical immortality has become commonplace, but emotional authenticity is the ultimate luxury. Yann Sorel, now 194 years old, navigates a galaxy where synthetic and stolen memories are bought and sold like bread in the marketplace. Accompanied by Eve, an android who openly defies the Three Laws of Robotics for love, Yann confronts the ruthless commodification of the soul. From the murky corridors of power in the Galactic Federation to forgotten ruins of ancient precursor civilizations, Yann embarks on his final poignant odyssey about memory, legacy, and our right to choose our own destiny.',
    synopsisFr:
      'En 2148, l’immortalité physique est devenue banale, mais l’authenticité est devenue un luxe inaccessible. Yann Sorel, 194 ans, vit dans une galaxie où les souvenirs se vendent comme du pain. Accompagné d’Ève, une androïde qui brave délibérément les lois de la robotique par amour, il s’insurge contre la marchandisation de l’âme humaine. Des intrigues politiques de la Fédération aux mystères des civilisations disparues, Yann mène son ultime odyssée : l’humanité mérite-t-elle d’être sauvée, ou doit-elle simplement se réveiller ?',
    formats: [
      {
        type: 'Kindle',
        price: '$7.99',
        asin: 'B0GDW1V973',
        url: 'https://www.amazon.com/dp/B0GDW1V973',
      },
      {
        type: 'Paperback',
        price: '$22.00',
        asin: 'B0GDXL935Y',
        url: 'https://www.amazon.com/dp/B0GDXL935Y',
      },
      {
        type: 'Hardcover Deluxe',
        price: '$49.90',
        asin: 'B0GDX4GHNX',
        url: 'https://www.amazon.com/dp/B0GDX4GHNX',
      },
    ],
    keyThemes: ['Commodification of Memories', 'Love Defying Robotics Laws', 'Ultimate Immortality', 'Soul Authenticity', 'Extinction vs Awakening'],
    notableCharacters: ['Yann Sorel (194 yo)', 'Eve (Rogue Android In Love)', 'Federation High Council', 'The Memory Traders'],
    readStandalone: true,
  },
];

export const AUTHOR_DETAILS = {
  name: 'J.F. Grosvois (Jean-François Grosvois)',
  website: 'https://grosvois.com',
  domain: 'grosvois.com',
  seriesTitle: 'The Yann Sorel Trilogy / Trois Époques',
  genre: 'Epic Hard Sci-Fi / Space Opera / Transhumanism & AI',
  targetMarket: 'United States, United Kingdom, Canada, France, Worldwide',
  targetDemographic: 'Readers of Isaac Asimov, Philip K. Dick, Arthur C. Clarke, Martha Wells, Alastair Reynolds, and The Expanse',
  editorialQuote:
    'An immersion where human imagination and algorithmic logic intersect. Grosvois weaves visionary technological extrapolation with deep existential philosophy.',
};
