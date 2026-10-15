export interface EmailTemplate {
  id: string;
  stepNumber: number;
  triggerDelay: string;
  purpose: string;
  subjectLinesEn: string[];
  subjectLinesFr: string[];
  previewTextEn: string;
  previewTextFr: string;
  bodyEn: string;
  bodyFr: string;
  callToActionEn: { text: string; url: string; secondaryText?: string; secondaryUrl?: string };
  callToActionFr: { text: string; url: string; secondaryText?: string; secondaryUrl?: string };
  conversionGoal: string;
  keyPsychologicalTrigger: string;
  targetOpenRate: string;
  targetClickRate: string;
}

export const AUTOMATED_EMAIL_SEQUENCE: EmailTemplate[] = [
  {
    id: 'email-1',
    stepNumber: 1,
    triggerDelay: 'Immediately (0 min post-optin)',
    purpose: 'Deliver Lead Magnet + Indoctrinate Reader into the Yann Sorel 2047 Universe',
    subjectLinesEn: [
      '⚡ [Download] The 2047 Protocol: Your Yann Sorel Sci-Fi Dossier is inside',
      'Welcome to 2047: Can an android feel love? (+ Your free chapters)',
      'Human, Machine, Extraterrestrial: Your journey begins here',
    ],
    subjectLinesFr: [
      '⚡ [Téléchargement] Le Protocole 2047 : Votre dossier Yann Sorel est arrivé',
      'Bienvenue en 2047 : Une androïde peut-elle aimer ? (+ Vos extraits offerts)',
      'Humain, Machine, Extraterrestre : Votre voyage commence ici',
    ],
    previewTextEn: 'Download your exclusive prelude chapters and discover why immortality comes with a dark price...',
    previewTextFr: 'Téléchargez vos chapitres exclusifs et découvrez pourquoi l’immortalité a un prix vertigineux...',
    bodyEn: `Hello fellow voyager,

Welcome to the year 2047. 

Twenty years after the nuclear conflict that scarred our planet, humanity did not simply rebuild—it mutated. Household androids serve our breakfast, algorithmic intelligence arbitrates society, and 93-year-olds like Yann Sorel have barely begun their lives.

Here is your instant access pass:
👉 [Click Here to Read: The Yann Sorel Sci-Fi Dossier & First 3 Chapters]

When Yann first encounters Garacan—an extraterrestrial emissary from the planet Canocan—he expects trade negotiations. He never expects to fall hopelessly in love with an android companion engineered to challenge everything we know about emotion.

And more importantly: the Three Laws of Robotics are breaking down.

Take a quiet moment tonight, open the excerpt, and step into 2047. 

In my next email, I’ll reveal the real science and AI questions that inspired Yann's relationship with an android.

Safe travels through the stars,

J.F. Grosvois
Author of *The Yann Sorel Trilogy*
https://grosvois.com`,
    bodyFr: `Bonjour voyageur de l’espace,

Bienvenue en l’an 2047.

Vingt ans après un conflit nucléaire dévastateur, l’humanité n’a pas seulement reconstruit : elle s’est métamorphosée. Les androïdes de maison préparent nos repas, l’intelligence artificielle gouverne la cité, et les nonagénaires comme Yann Sorel (93 ans) ne font que commencer leur existence.

Voici votre accès immédiat :
👉 [Cliquez ici pour lire : Le Dossier Yann Sorel & Les 3 Premiers Chapitres]

Lorsque Yann rencontre Garacan — un émissaire extraterrestre de la planète Canocan —, il s’attend à des négociations commerciales. Il ne s’attend certainement pas à tomber éperdument amoureux d’une androïde conçue pour bouleverser notre conception même des sentiments.

Et par-dessus tout : les célèbres Lois de la Robotique sont sur le point d’exploser.

Installez-vous confortablement ce soir, ouvrez cet extrait et plongez en 2047.

Dans mon prochain message, je vous dévoilerai les questions technologiques réelles qui ont donné naissance à ce monde.

Bienvenue parmi les étoiles,

J.F. Grosvois
Auteur de la *Trilogie Yann Sorel*
https://grosvois.com`,
    callToActionEn: {
      text: 'Download Your Free Sci-Fi Dossier (PDF/ePub)',
      url: 'https://grosvois.com',
      secondaryText: 'Get Book 1 on Amazon Kindle ($7.99)',
      secondaryUrl: 'https://www.amazon.com/dp/B0CFK2C7VK',
    },
    callToActionFr: {
      text: 'Télécharger le Dossier Offert (PDF/ePub)',
      url: 'https://grosvois.com',
      secondaryText: 'Découvrir le Tome 1 sur Amazon Kindle (7,99 $)',
      secondaryUrl: 'https://www.amazon.com/dp/B0CFK2C7VK',
    },
    conversionGoal: 'Over 55% open rate, high lead engagement, whitelisting author email',
    keyPsychologicalTrigger: 'Curiosity + Reciprocity (Free value immediately delivered)',
    targetOpenRate: '58.4%',
    targetClickRate: '24.2%',
  },
  {
    id: 'email-2',
    stepNumber: 2,
    triggerDelay: 'Day 2 (48 hours after opt-in)',
    purpose: 'Deepen Character Immersion + Address Hard Sci-Fi AI Themes + Build Anticipation',
    subjectLinesEn: [
      'Could you fall in love with synthetic consciousness?',
      'Asimov gave us 3 laws. In 2047, we had to break them all.',
      'Why Yann Sorel refused to accept ordinary death at 93',
    ],
    subjectLinesFr: [
      'Pourriez-vous tomber amoureux d’une conscience synthétique ?',
      'Asimov nous a légué 3 lois. En 2047, nous avons dû toutes les briser.',
      'Pourquoi Yann Sorel a refusé de mourir à 93 ans',
    ],
    previewTextEn: 'When robotics engineers create empathy, who is truly human? A look behind the curtain of Yann Sorel.',
    previewTextFr: 'Quand les cybernéticiens créent l’empathie, qui est véritablement humain ? Les coulisses de Yann Sorel.',
    bodyEn: `Reader,

Isaac Asimov’s Three Laws of Robotics were written in 1942:
1. A robot may not injure a human being...
2. A robot must obey human orders...
3. A robot must protect its own existence...

They served science fiction well for a century. But what happens when an extraterrestrial civilization—like the Canocans in *93 Years Old in 2047*—engineers an android that feels genuine heartbreak?

When Yann Sorel meets the android companion designed by Garacan’s megacorporation, he asks the question that philosophy has avoided for millennia:

*"If synthetic love provides genuine solace to a grieving human heart, does its artificial origin even matter?"*

Yann is 93 years old. He has survived radiation wars, societal collapse, and the rise of automated governance. But nothing prepared him for the voyage ahead: commercial expeditions into unmapped sectors of the Milky Way, serving as an alien's senior advisor.

Readers in the United States and across the world have called *93 Years Old in 2047* a rare blend of Golden Age hard sci-fi wonder and philosophical transhumanism.

If you enjoyed the preview chapters, you can grab the complete Book 1 on Amazon in Kindle ($7.99), Paperback ($22), or the Deluxe Collector Hardcover ($41.86):

👉 [Read 93 Years Old in 2047 on Amazon Kindle / Paperback]

To the future,

J.F. Grosvois`,
    bodyFr: `Chers lecteurs,

Les Trois Lois de la Robotique d’Asimov ont été formulées en 1942 :
1. Un robot ne peut porter atteinte à un être humain...
2. Un robot doit obéir aux ordres...
3. Un robot doit protéger son existence...

Elles ont guidé la science-fiction pendant un siècle. Mais que se passe-t-il lorsqu’une civilisation extraterrestre — comme les Canocans dans *93 ans en 2047* — conçoit une androïde capable d’éprouver un véritable chagrin d’amour ?

Quand Yann Sorel rencontre cette compagne androïde fabriquée par la corporation de Garacan, il pose la question que la philosophie a éludée :

*"Si un amour synthétique apporte un réconfort absolu à un cœur humain, son origine artificielle a-t-elle la moindre importance ?"*

Yann a 93 ans. Il a survécu aux conflits nucléaires et à l’essor de la gouvernance par IA. Mais rien ne le préparait à l’expédition qui l’attend : explorer les confins inexplorés de la Voie Lactée comme conseiller d’un être venu d’ailleurs.

Découvrez l’intégralité du Tome 1 sur Amazon en version Kindle (7,99 $), Broché (22 $) ou Relié Deluxe Collector (41,86 $) :

👉 [Découvrir 93 ans en 2047 sur Amazon]

Vers le futur,

J.F. Grosvois`,
    callToActionEn: {
      text: 'Get 93 Years Old in 2047 on Amazon ($7.99 Kindle)',
      url: 'https://www.amazon.com/dp/B0CFK2C7VK',
      secondaryText: 'Paperback ($22) & Deluxe Hardcover ($41.86)',
      secondaryUrl: 'https://www.amazon.com/dp/B0CFZ9GZ8Y',
    },
    callToActionFr: {
      text: 'Obtenir 93 ans en 2047 sur Amazon (Kindle 7,99 $)',
      url: 'https://www.amazon.com/dp/B0CFK2C7VK',
      secondaryText: 'Édition Broché (22 $) et Relié Deluxe (41,86 $)',
      secondaryUrl: 'https://www.amazon.com/dp/B0CFZ9GZ8Y',
    },
    conversionGoal: 'Drive first book purchase (Tripwire conversion) on Amazon',
    keyPsychologicalTrigger: 'Philosophical Hook + Story Cliffhanger',
    targetOpenRate: '46.1%',
    targetClickRate: '18.7%',
  },
  {
    id: 'email-3',
    stepNumber: 3,
    triggerDelay: 'Day 5 (120 hours after opt-in)',
    purpose: 'Social Proof + Press Reviews + Overcome Friction (Can you read it as standalone?)',
    subjectLinesEn: [
      '"A gripping crossroad between human creativity and AI" — The Critics Speak',
      'Can you read Yann Sorel without reading Book 1 first?',
      'Starships, alien treaties, and 121-year-old adventurers',
    ],
    subjectLinesFr: [
      '"Un carrefour fascinant entre créativité humaine et IA" — La presse en parle',
      'Peut-on lire la trilogie dans le désordre ?',
      'Vaisseaux vivants, traités extraterrestres et aventuriers de 121 ans',
    ],
    previewTextEn: 'See what reviewers are praising in the Yann Sorel saga + Why each book stands on its own.',
    previewTextFr: 'Ce que disent les critiques de la saga Yann Sorel + Pourquoi chaque tome peut se lire indépendamment.',
    bodyEn: `Fellow Sci-Fi Reader,

One of the most frequent questions readers send me is:

*"Do I have to read the Yann Sorel books in strict order?"*

The answer is: Each era is a self-contained epic.
- In **Book 1 (2047)**, Yann is 93, witnessing first contact and the dawn of sentience.
- In **Book 2 (2075)**, Yann is 121, traversing 15 distinct missions: the Draconians, the living spaceship Canalana, the Android Rights uprising of 2070, and the Galactic Federation congress.
- In **Book 3 (2148)**, Yann is 194, confronting the illicit memory black markets and his rogue android Eve.

Every volume includes an opening universe summary, so you can jump in at any century. However, as one reviewer put it:

*"Starting from 2047 and watching Yann's transhuman evolution across two centuries feels like watching humanity’s destiny unfold through a master keyhole."*

Press and blogs on *grosvois.com* have highlighted:
⭐⭐⭐⭐⭐ *"An immersion where human creativity meets AI extrapolation. A must-read for fans of classic Asimov and modernized space exploration."*

Whether you prefer an instant digital download on Kindle or a gorgeous physical book on your sci-fi shelf:

👉 [Order Book 1: 93 Years Old in 2047] (Kindle $7.99 / Paperback $22)
👉 [Explore Book 2: 121 Years Old in 2075] (Kindle $7.99 / Paperback $22)

May your journey be boundless,

J.F. Grosvois`,
    bodyFr: `Chers passionnés de SF,

Une question revient constamment dans les messages de mes lecteurs :

*"Doit-on obligatoirement lire les livres dans l’ordre ?"*

La réponse : chaque époque constitue une grande aventure autonome.
- **Tome 1 (2047)** : Yann a 93 ans, premier contact et naissance de la conscience robotique.
- **Tome 2 (2075)** : Yann a 121 ans, 15 missions prodigieuses, les Draconiens, le vaisseau Canalana et les révoltes androïdes de 2070.
- **Tome 3 (2148)** : Yann a 194 ans, le trafic de souvenirs et son alliance avec Ève.

Chaque livre intègre un résumé récapitulatif. Mais vivre la transformation de Yann sur deux siècles complets est une expérience inoubliable.

👉 [Commander le Tome 1 : 93 ans en 2047 sur Amazon] (7,99 $ Kindle / 22 $ Broché)
👉 [Découvrir le Tome 2 : 121 ans en 2075 sur Amazon] (7,99 $ Kindle / 22 $ Broché)

Excellente lecture stellaire,

J.F. Grosvois`,
    callToActionEn: {
      text: 'Choose Your Edition on Amazon (Kindle / Physical)',
      url: 'https://www.amazon.com/dp/B0CFK2C7VK',
      secondaryText: 'Explore Book 2: 121 Years Old in 2075',
      secondaryUrl: 'https://www.amazon.com/dp/B0CZBSWN6S',
    },
    callToActionFr: {
      text: 'Choisir votre édition sur Amazon (Kindle / Papier)',
      url: 'https://www.amazon.com/dp/B0CFK2C7VK',
      secondaryText: 'Découvrir le Tome 2 : 121 ans en 2075',
      secondaryUrl: 'https://www.amazon.com/dp/B0CZBSWN6S',
    },
    conversionGoal: 'Overcome reader hesitation, provide multiple entry formats, boost read-through',
    keyPsychologicalTrigger: 'Authority / Social Proof + Friction Removal',
    targetOpenRate: '41.8%',
    targetClickRate: '15.3%',
  },
  {
    id: 'email-4',
    stepNumber: 4,
    triggerDelay: 'Day 8 (192 hours after opt-in)',
    purpose: 'Promote Book 3 & The Complete Trilogy (High Ticket / Complete Series Read-Through)',
    subjectLinesEn: [
      'In 2148, memories are sold like bread in the street...',
      'Yann Sorel is 194 years old. This is his final odyssey.',
      'Defying the laws of robotics for love: Meet Eve',
    ],
    subjectLinesFr: [
      'En 2148, les souvenirs se vendent comme du pain dans la rue...',
      'Yann Sorel a 194 ans. Voici son ultime odyssée.',
      'Bravant les lois de la robotique par amour : Rencontrez Ève',
    ],
    previewTextEn: 'In 2148, immortality is cheap, but the soul has become a commodity. Enter the climax of the trilogy.',
    previewTextFr: 'En 2148, l’immortalité est banale, mais l’âme est devenue une marchandise. Le point culminant de la trilogie.',
    bodyEn: `Dear Reader,

Imagine waking up in the year 2148.

You cannot die of old age. Nanotech repair grids maintain your physical form indefinitely. But in this immortal paradise, an insidious black market has emerged:

Memories are commodified. Stolen childhoods, fabricated heroics, and erased traumas are bought and sold at street corners like bread.

Yann Sorel is now 194 years old. The solar system he knew in 2047 has expanded into an intricate galactic web of rival species, political intrigue, and shadowy syndicate syndicates. 

Standing beside him is Eve: an android who made the unthinkable choice to shatter her primary programming out of love.

Together, they must decide:
*Does humanity deserve to be saved—or does it simply need to wake up?*

*194 Years Old in 2148* is the crown jewel of the Yann Sorel saga. 

For collectors and hardcover lovers, the Deluxe Hardcover Edition features archival paper, exclusive formatting, and breathtaking collector cover art.

👉 [Order 194 Years Old in 2148 on Amazon (Kindle $7.99 / Deluxe $49.90)]
👉 [Explore the Complete Three Eras on grosvois.com]

I'd love to know: if you could live to 194, which memory would you never allow anyone to trade? Just hit reply and tell me.

With astronomical regards,

J.F. Grosvois`,
    bodyFr: `Chers lecteurs,

Imaginez-vous vous réveiller en l’an 2148.

La vieillesse ne peut plus vous tuer. La nanotechnologie maintient votre corps indéfiniment. Mais dans ce paradis immortel, un marché noir terrifiant s’est développé :

Les souvenirs sont devenus une marchandise. Des enfances volées, des gloires héroïques préfabriquées et des traumatismes effacés s’achètent au coin de la rue comme du pain.

Yann Sorel a 194 ans. À ses côtés se tient Ève : une androïde qui a fait le choix impensable de briser ses protocoles fondamentaux par amour.

Ensemble, ils font face au dilemme suprême :
*L’humanité mérite-t-elle d’être sauvée, ou doit-elle simplement se réveiller ?*

*194 ans en 2148* est l’apogée de la trilogie.

Pour les collectionneurs et amateurs de beaux livres, l’Édition Reliée Deluxe offre une finition d’exception.

👉 [Commander 194 ans en 2148 sur Amazon (Kindle 7,99 $ / Relié 49,90 $)]
👉 [Découvrir l’ensemble des Trois Époques sur grosvois.com]

Dites-moi : si vous viviez jusqu’à 194 ans, quel souvenir refuseriez-vous de vendre à tout prix ? Répondez simplement à ce mail !

Salutations stellaires,

J.F. Grosvois`,
    callToActionEn: {
      text: 'Discover 194 Years Old in 2148 on Amazon',
      url: 'https://www.amazon.com/dp/B0GDW1V973',
      secondaryText: 'Hardcover Deluxe Edition ($49.90)',
      secondaryUrl: 'https://www.amazon.com/dp/B0GDX4GHNX',
    },
    callToActionFr: {
      text: 'Découvrir 194 ans en 2148 sur Amazon',
      url: 'https://www.amazon.com/dp/B0GDW1V973',
      secondaryText: 'Édition Relié Deluxe Collector (49,90 $)',
      secondaryUrl: 'https://www.amazon.com/dp/B0GDX4GHNX',
    },
    conversionGoal: 'Sell Book 3 and promote high-margin Deluxe Hardcovers ($49.90)',
    keyPsychologicalTrigger: 'Existential Intrigue + Urgency + Direct Reader Reply Call',
    targetOpenRate: '38.5%',
    targetClickRate: '14.1%',
  },
  {
    id: 'email-5',
    stepNumber: 5,
    triggerDelay: 'Day 12 (288 hours after opt-in)',
    purpose: 'Join the VIP ARC Review Team + Leave an Amazon Review + Viral Word of Mouth',
    subjectLinesEn: [
      'Join my private Sci-Fi Reader Vanguard (Free future ARCs)',
      'Your feedback matters: Review Yann Sorel on Amazon',
      'Exclusive invitation: Help shape the next galactic chapter',
    ],
    subjectLinesFr: [
      'Rejoignez mon Cercle VIP de lecteurs SF (Livres offerts en avant-première)',
      'Votre avis compte : Laissez une note sur Amazon',
      'Invitation exclusive : Aidez à façonner les prochains mondes',
    ],
    previewTextEn: 'Want to receive free advance review copies of upcoming sci-fi releases? Here is your invitation.',
    previewTextFr: 'Envie de recevoir gratuitement les futurs tomes en avant-première ? Voici votre invitation officielle.',
    bodyEn: `Dear Voyager,

Independent science fiction thrives on one single currency: honest reader reviews.

On Amazon and Goodreads, algorithms only recommend books that real human beings talk about. If you have picked up any volume of *The Yann Sorel Trilogy*—or even dipped your toes into the preview chapters—would you take 60 seconds to leave an honest review on Amazon?

Even three sentences telling other sci-fi fans what surprised you makes an immense difference.

⭐ [Click Here to Leave a Fast Amazon Review for Book 1]

### Join the Yann Sorel Vanguard (VIP ARC Team)
As a thank you, I am opening 50 spots for my private Advance Review Copy (ARC) team. 
As a Vanguard member:
- You receive free digital copies of every future release 3 weeks before publication.
- You get exclusive deleted scenes, universe lore compendiums, and character art.
- Your name can appear in the author acknowledgments!

All I ask in return is that you post your honest review within 7 days of book launch.

👉 [Apply for the Free VIP ARC Reader Vanguard Here]

Thank you for traveling across light-years with Yann, Eve, and Garacan.

Keep looking at the stars,

J.F. Grosvois
https://grosvois.com`,
    bodyFr: `Chers explorateurs,

La science-fiction indépendante vit d’une ressource vitale : vos avis honnêtes de lecteurs.

Sur Amazon et Goodreads, les algorithmes ne recommandent un roman que si de vrais lecteurs partagent leur ressenti. Si vous avez lu un tome de *La Trilogie Yann Sorel* — ou même apprécié les chapitres d’introduction —, pourriez-vous prendre 60 secondes pour déposer un avis sur Amazon ?

Trois phrases suffisent pour guider les amoureux de SF.

⭐ [Cliquez ici pour déposer un avis rapide sur Amazon]

### Rejoignez l’Avant-Garde VIP (Équipe ARC)
Pour vous remercier, j’ouvre 50 places dans mon club d’avant-première :
- Recevez gratuitement chaque futur livre 3 semaines avant sa sortie officielle.
- Accédez à des scènes coupées exclusives et aux illustrations de l’univers.
- Votre nom dans les remerciements de l’auteur !

Tout ce que je vous demande : publier votre avis honnête lors de la sortie.

👉 [Postuler au Cercle VIP ARC de Yann Sorel]

Merci d’avoir traversé les années-lumière avec Yann, Ève et Garacan.

Les yeux tournés vers les étoiles,

J.F. Grosvois
https://grosvois.com`,
    callToActionEn: {
      text: 'Leave a Quick Amazon Review',
      url: 'https://www.amazon.com/review/create-review/?asin=B0CFK2C7VK',
      secondaryText: 'Join the Free VIP Reader ARC Vanguard',
      secondaryUrl: 'https://grosvois.com',
    },
    callToActionFr: {
      text: 'Déposer un avis rapide sur Amazon',
      url: 'https://www.amazon.com/review/create-review/?asin=B0CFK2C7VK',
      secondaryText: 'Rejoindre le Cercle VIP Avant-Première',
      secondaryUrl: 'https://grosvois.com',
    },
    conversionGoal: 'Secure verified reviews on Amazon/Goodreads & recruit active ARC squad',
    keyPsychologicalTrigger: 'Community belonging + Reciprocity + Exclusivity',
    targetOpenRate: '36.2%',
    targetClickRate: '12.8%',
  },
];
