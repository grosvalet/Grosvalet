export interface FunnelStage {
  stageNumber: number;
  id: string;
  nameEn: string;
  nameFr: string;
  icon: string;
  objective: string;
  benchmarkRate: string;
  mechanicsEn: string;
  mechanicsFr: string;
  keyMetrics: string[];
  optimizationTipsFr: string[];
  optimizationTipsEn: string[];
}

export const FUNNEL_STAGES: FunnelStage[] = [
  {
    stageNumber: 1,
    id: 'traffic',
    nameEn: 'Stage 1: Targeted Traffic Inflow',
    nameFr: 'Étape 1 : Acquisition de Trafic Ciblé',
    icon: 'Radio',
    objective: 'Drive engaged US & international sci-fi readers into the ecosystem at predictable cost',
    benchmarkRate: 'CTR: 1.8% - 3.5% | CPC: $0.35 - $0.70',
    mechanicsEn:
      'Multi-channel acquisition combining Amazon KDP Sponsored Product ads (ASIN targeting comp authors), Meta Video Lead Ads (featuring cinematic sci-fi clips like the 2047 ballroom and android Eve), and BookFunnel/StoryOrigin sci-fi group promotions.',
    mechanicsFr:
      'Acquisition multi-canale combinant les annonces Amazon Ads (ciblage ASIN d’Asimov et The Expanse), les publicités vidéo Meta (avec extraits vidéo comme le bal galactique et l’androïde Ève) et les promotions croisées BookFunnel.',
    keyMetrics: ['Impressions', 'Clicks', 'Click-Through Rate (CTR)', 'Cost Per Click (CPC)', 'Ad Spend'],
    optimizationTipsFr: [
      'Si votre CTR est < 1.5%, testez une nouvelle accroche vidéo ou changez le visuel d’Ève et Yann Sorel.',
      'Excluez les mots-clés négatifs ("gratuit", "film", "cours") sur Amazon Ads pour ne pas gaspiller de budget.',
      'Utilisez le retargeting vidéo : diffusez le lien vers Amazon à toute personne ayant regardé plus de 50% de la vidéo de présentation.',
    ],
    optimizationTipsEn: [
      'If CTR is < 1.5%, test a new video hook or alternative cover visual featuring Eve and Yann.',
      'Add negative exact keywords on Amazon Ads to avoid non-converting queries.',
      'Deploy video retargeting on Facebook/Instagram to anyone who watched >50% of the trilogy trailer.',
    ],
  },
  {
    stageNumber: 2,
    id: 'optin',
    nameEn: 'Stage 2: Squeeze Page / Reader Magnet Opt-In',
    nameFr: 'Étape 2 : Page de Capture & "Reader Magnet"',
    icon: 'Magnet',
    objective: 'Convert cold traffic into subscribed email fans with explicit CAN-SPAM consent',
    benchmarkRate: 'Opt-In Rate: 35% - 60% on Lead Pages | 18% - 28% on General Web',
    mechanicsEn:
      'Readers arrive on a dedicated mobile-optimized landing page offering "The 2047 Protocol: The Yann Sorel Sci-Fi Prelude & First 3 Chapters". In exchange for their email, they instantly receive the ebook via BookFunnel or direct autoresponder.',
    mechanicsFr:
      'Les lecteurs arrivent sur une page épurée offrant "Le Protocole 2047 : Prélude de la trilogie Yann Sorel et les 3 premiers chapitres". En échange de leur e-mail, ils reçoivent immédiatement le fichier ebook via BookFunnel.',
    keyMetrics: ['Landing Page Visitors', 'Total Subscribers Collected', 'Opt-in Conversion Rate', 'Cost Per Lead (CPL)'],
    optimizationTipsFr: [
      'Limitez le formulaire à un seul champ (Email uniquement) pour maximiser le taux de conversion.',
      'Affichez un visuel 3D percutant de la liseuse ou du livre broché avec la mention "Offert immédiatement".',
      'Intégrez une citation critique percutante sur l’intelligence artificielle et Asimov dès le premier écran.',
    ],
    optimizationTipsEn: [
      'Keep the form to 1 single field (Email only) to maximize conversions.',
      'Showcase a gorgeous 3D digital mockup of the ebook with a badge "Instant Download".',
      'Feature a strong editorial quote comparing the story to Asimov above the fold.',
    ],
  },
  {
    stageNumber: 3,
    id: 'drip',
    nameEn: 'Stage 3: Automated Welcome Drip Sequence',
    nameFr: 'Étape 3 : Séquence d’Indoctrination Automatisée',
    icon: 'MailCheck',
    objective: 'Nurture, build deep emotional attachment to Yann & Eve, and warm up the lead',
    benchmarkRate: 'Open Rate: 42% - 55% | Click Rate: 15% - 25%',
    mechanicsEn:
      'An automated 5-email drip sequence fires over 12 days. Each email provides philosophical value, discusses the real AI and immortality concepts of 2047, shares press reviews, and removes friction to starting the series.',
    mechanicsFr:
      'Une séquence de 5 e-mails s’échelonne sur 12 jours. Chaque courriel approfondit l’univers, questionne les limites de la robotique et de l’immortalité, partage des avis critiques et incite à passer à l’action.',
    keyMetrics: ['Email Open Rate', 'Click-to-Open Rate (CTOR)', 'Unsubscribe Rate (< 0.6%)', 'Spam Rate (< 0.05%)'],
    optimizationTipsFr: [
      'Personnalisez l’objet du premier e-mail avec un émoji et la mention [Téléchargement immédiat].',
      'Terminez chaque e-mail par une question ouverte invitant le lecteur à répondre pour booster la délivrabilité Gmail.',
      'Insérez des liens Amazon clairs avec suivi (Amazon Attribution) pour mesurer précisément les ventes par e-mail.',
    ],
    optimizationTipsEn: [
      'Include [Instant Download] in Email #1 subject line to guarantee 50%+ open rate.',
      'End emails with an open question prompting reader replies to maximize inbox deliverability.',
      'Tag Amazon links with Amazon Attribution tags to measure sales generated per email.',
    ],
  },
  {
    stageNumber: 4,
    id: 'tripwire',
    nameEn: 'Stage 4: Front-End Tripwire (Book 1 Sales)',
    nameFr: 'Étape 4 : Vente Front-End (Tome 1 sur Amazon)',
    icon: 'ShoppingCart',
    objective: 'Convert free readers into paying Amazon buyers of "93 Years Old in 2047"',
    benchmarkRate: 'Tripwire Conversion: 12% - 22% of active subscribers',
    mechanicsEn:
      'Readers click through to Amazon to purchase Book 1 on Kindle ($7.99), Paperback ($22), or the Deluxe Hardcover ($41.86). Once a reader buys the first book, their psychological status shifts from casual subscriber to committed fan.',
    mechanicsFr:
      'Les lecteurs basculent sur Amazon pour acheter le Tome 1 en version Kindle (7,99 $), Broché (22 $) ou Relié Deluxe (41,86 $). Dès ce premier achat, le lecteur passe du statut de prospect à celui d’admirateur engagé.',
    keyMetrics: ['Amazon Clicks', 'Kindle Units Sold ($7.99)', 'Paperback Units Sold ($22)', 'Conversion Rate Clicks to Sales'],
    optimizationTipsFr: [
      'Proposez temporairement une offre de lancement Kindle ou mettez en avant le rapport qualité/prix de l’édition brochée.',
      'Dans les toutes dernières pages du Tome 1, intégrez obligatoirement le premier chapitre du Tome 2 avec un lien direct Amazon.',
      'Invitez le lecteur à s’inscrire au Cercle VIP directement depuis la page de fin du livre.',
    ],
    optimizationTipsEn: [
      'Ensure the final page of Book 1 has a clickable link and sample chapter of Book 2.',
      'Promote both Kindle ($7.99) for rapid reading and Hardcover ($41.86) for collectors.',
      'Include a back-matter link to join the author’s VIP ARC team directly on Amazon Kindle.',
    ],
  },
  {
    stageNumber: 5,
    id: 'backend',
    nameEn: 'Stage 5: Back-End Trilogy Read-Through & Upsell',
    nameFr: 'Étape 5 : Ventes Back-End & Vitesse de Lecture de la Trilogie',
    icon: 'Sparkles',
    objective: 'Maximize Customer Lifetime Value (LTV) through Book 2 & Book 3 read-through',
    benchmarkRate: 'Series Read-Through Rate: 55% - 75% from Book 1 to 2 | 70% - 85% from Book 2 to 3',
    mechanicsEn:
      'Because each book features Yann Sorel at different ages (121 in 2075, 194 in 2148), readers naturally binge the full trilogy. An automated cross-sell sequence triggers 14 days after Book 1 purchase promoting Books 2 and 3.',
    mechanicsFr:
      'Puisque chaque livre explore une époque fascinante (121 ans en 2075, 194 ans en 2148), les lecteurs dévorent la suite. Une séquence automatique de relance se déclenche 14 jours plus tard pour recommander les Tomes 2 et 3.',
    keyMetrics: ['Book 2 Units Sold', 'Book 3 Units Sold', 'Trilogy Completion Rate', 'Reader Lifetime Value (LTV)'],
    optimizationTipsFr: [
      'Un lecteur qui a aimé le Tome 1 a 65% de chance d’acheter le Tome 2 s’il est relancé dans les 10 jours.',
      'Mettez en avant l’édition Relié Deluxe (49,90 $) comme cadeau collector ou objet de collection.',
      'Créez un pack "Intégrale de la Trilogie" ou bundle pour augmenter le panier moyen d’un seul clic.',
    ],
    optimizationTipsEn: [
      'A reader who enjoyed Book 1 has a 65%+ probability of purchasing Book 2 if reminded within 10 days.',
      'Highlight the Deluxe Hardcover editions ($49.90) as heirloom collector items.',
      'Offer a complete trilogy bundle recommendation to capture maximum order value.',
    ],
  },
  {
    stageNumber: 6,
    id: 'retention',
    nameEn: 'Stage 6: Retention, Amazon Reviews & VIP ARC Squad',
    nameFr: 'Étape 6 : Rétention, Avis Amazon & Cercle VIP',
    icon: 'Award',
    objective: 'Turn passionate readers into brand ambassadors who leave 5-star reviews on Amazon',
    benchmarkRate: 'Review Rate: 4% - 8% of readers leaving Amazon/Goodreads reviews',
    mechanicsEn:
      'Automated email requests reviews with one-click links to Amazon review forms, then recruits enthusiastic readers to join the private Vanguard ARC team for early access to future stories.',
    mechanicsFr:
      'L’e-mail automatisé sollicite des avis honnêtes avec liens directs vers la page d’évaluation Amazon, puis recrute les lecteurs passionnés dans le Cercle VIP Avant-Première.',
    keyMetrics: ['Amazon Star Rating', 'Verified Reviews Count', 'ARC Team Size', 'Referral Shares'],
    optimizationTipsFr: [
      'Facilitez au maximum le dépôt d’avis en fournissant le lien direct pré-rempli vers la page Amazon Review.',
      'Ne demandez jamais un avis "positif" (interdit par Amazon), mais un "avis honnête et sincère".',
      'Récompensez votre équipe ARC avec des bonus inédits (nouvelles exclusives, fiches de lore galactique).',
    ],
    optimizationTipsEn: [
      'Provide direct links to the Amazon review page so readers do not have to search for the book.',
      'Always request an "honest review" in accordance with Amazon KDP terms of service.',
      'Reward your ARC team with bonus lore compendiums and unreleased universe stories.',
    ],
  },
];
