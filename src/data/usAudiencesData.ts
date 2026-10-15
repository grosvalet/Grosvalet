export interface SciFiContact {
  id: string;
  name: string;
  type: 'Book Reviewer' | 'Newsletter / Promo Platform' | 'Sci-Fi Magazine / Media' | 'Author Swap Network' | 'Podcast / Influencer';
  outlet: string;
  emailOrUrl: string;
  isDirectEmail: boolean;
  audienceSize: string;
  specialty: string;
  location: string;
  guidelinesSummary: string;
  acceptsIndie: boolean;
  cost: 'Free / Review Pitch' | 'Paid Promo' | 'Freemium';
}

export const US_SCIFI_CONTACTS: SciFiContact[] = [
  {
    id: 'contact-1',
    name: 'Sci-Fi Bridge Network',
    type: 'Author Swap Network',
    outlet: 'Sci-Fi Bridge (scifibridge.com)',
    emailOrUrl: 'contact@scifibridge.com',
    isDirectEmail: true,
    audienceSize: '185,000+ US Sci-Fi Readers',
    specialty: 'Space Opera, Hard Sci-Fi, AI, Cyberpunk, Military SF',
    location: 'United States',
    guidelinesSummary: 'A co-op founded by bestselling sci-fi authors. Authors cross-promote each other’s books and newsletter lead magnets directly to verified US sci-fi fans.',
    acceptsIndie: true,
    cost: 'Free / Review Pitch',
  },
  {
    id: 'contact-2',
    name: 'BookBub Sci-Fi Editorial',
    type: 'Newsletter / Promo Platform',
    outlet: 'BookBub (bookbub.com)',
    emailOrUrl: 'partners@bookbub.com',
    isDirectEmail: true,
    audienceSize: '3,400,000+ US Sci-Fi Subscribers',
    specialty: 'Science Fiction, Space Opera, Hard SF, Cyberpunk',
    location: 'Cambridge, MA, USA',
    guidelinesSummary: 'The gold standard for book promotion in the US. Submit for Featured Deals (Kindle $0.99 or Free) or run BookBub CPM/CPC self-serve ads targeting fans of Asimov and Philip K. Dick.',
    acceptsIndie: true,
    cost: 'Paid Promo',
  },
  {
    id: 'contact-3',
    name: 'SFBook Review Editorial',
    type: 'Book Reviewer',
    outlet: 'SFBook Reviews (sfbook.com)',
    emailOrUrl: 'enquiries@sfbook.com',
    isDirectEmail: true,
    audienceSize: '65,000+ Monthly Visitors',
    specialty: 'Hard Sci-Fi, Dystopian, Robotics, Artificial Intelligence',
    location: 'US / UK',
    guidelinesSummary: 'Accepts review requests for published science fiction. Provide pitch, blurb, format (Mobi/ePub/PDF), and Amazon ASIN link in your email.',
    acceptsIndie: true,
    cost: 'Free / Review Pitch',
  },
  {
    id: 'contact-4',
    name: 'Fantasy Book Critic Review Team',
    type: 'Book Reviewer',
    outlet: 'Fantasy Book Critic (fantasybookcritic.blogspot.com)',
    emailOrUrl: 'fantasybookcritic@gmail.com',
    isDirectEmail: true,
    audienceSize: '120,000+ Monthly Readers',
    specialty: 'Space Opera, Transhumanism, Hard SF, Galactic Empires',
    location: 'United States',
    guidelinesSummary: 'Long-standing, highly respected speculative fiction review blog. Accepts digital review copies and author interviews for notable sci-fi releases.',
    acceptsIndie: true,
    cost: 'Free / Review Pitch',
  },
  {
    id: 'contact-5',
    name: 'Sci-Fi & Scary Editorial',
    type: 'Book Reviewer',
    outlet: 'Sci-Fi & Scary (scifiandscary.com)',
    emailOrUrl: 'reviews@scifiandscary.com',
    isDirectEmail: true,
    audienceSize: '45,000+ Monthly Readers',
    specialty: 'Dark Sci-Fi, Extraterrestrial First Contact, Post-Apocalyptic',
    location: 'United States',
    guidelinesSummary: 'Dedicated review platform for science fiction. Clear review policy: accepts independent and traditionally published sci-fi ebooks.',
    acceptsIndie: true,
    cost: 'Free / Review Pitch',
  },
  {
    id: 'contact-6',
    name: 'Nerds of a Feather, Flock Together',
    type: 'Book Reviewer',
    outlet: 'Nerds of a Feather (nerds-feather.com)',
    emailOrUrl: 'nerdsflock@gmail.com',
    isDirectEmail: true,
    audienceSize: '95,000+ Hugo Award Voting Community',
    specialty: 'Speculative Fiction, Philosophical Sci-Fi, Future Societies',
    location: 'USA / International',
    guidelinesSummary: 'Hugo Award-winning fanzine featuring in-depth literary critiques of contemporary science fiction novels.',
    acceptsIndie: true,
    cost: 'Free / Review Pitch',
  },
  {
    id: 'contact-7',
    name: 'Freebooksy / Bargain Booksy Sci-Fi',
    type: 'Newsletter / Promo Platform',
    outlet: 'Written Word Media (writtenwordmedia.com)',
    emailOrUrl: 'info@writtenwordmedia.com',
    isDirectEmail: true,
    audienceSize: '520,000+ US Readers',
    specialty: 'All Science Fiction subgenres ($0.99 to $4.99 and Free deals)',
    location: 'Durham, NC, USA',
    guidelinesSummary: 'Highly popular US daily newsletter with dedicated Science Fiction subscriber segmentation. Excellent ROI for book launch pushes.',
    acceptsIndie: true,
    cost: 'Paid Promo',
  },
  {
    id: 'contact-8',
    name: 'The Fussy Librarian Sci-Fi Department',
    type: 'Newsletter / Promo Platform',
    outlet: 'The Fussy Librarian (thefussylibrarian.com)',
    emailOrUrl: 'support@thefussylibrarian.com',
    isDirectEmail: true,
    audienceSize: '140,000+ US Sci-Fi Readers',
    specialty: 'Hard Sci-Fi, Space Opera, Cyberpunk, Dystopian',
    location: 'United States',
    guidelinesSummary: 'Curates daily ebook recommendations by subgenre to an engaged US audience. Very affordable placement ($20-$35).',
    acceptsIndie: true,
    cost: 'Paid Promo',
  },
  {
    id: 'contact-9',
    name: 'Voracious Readers Only (VRO)',
    type: 'Author Swap Network',
    outlet: 'Voracious Readers Only (voraciousreadersonly.com)',
    emailOrUrl: 'support@voraciousreadersonly.com',
    isDirectEmail: true,
    audienceSize: '35,000+ Opt-In ARC Readers',
    specialty: 'Sci-Fi readers looking for free books in exchange for honest reviews',
    location: 'United States',
    guidelinesSummary: 'Delivers 20 to 100 free opt-in US reader email addresses directly to your autoresponder who specifically requested your sci-fi book.',
    acceptsIndie: true,
    cost: 'Freemium',
  },
  {
    id: 'contact-10',
    name: 'BookFunnel Sci-Fi Author Promos',
    type: 'Author Swap Network',
    outlet: 'BookFunnel (bookfunnel.com)',
    emailOrUrl: 'https://bookfunnel.com',
    isDirectEmail: false,
    audienceSize: 'Hundreds of thousands of monthly active cross-promos',
    specialty: 'Lead magnet delivery + group newsletter builder for sci-fi authors',
    location: 'United States',
    guidelinesSummary: 'Join multi-author US sci-fi giveaways. 15-30 authors share one landing page; every reader who opts in to download your preview is added to your email list.',
    acceptsIndie: true,
    cost: 'Freemium',
  },
  {
    id: 'contact-11',
    name: 'StoryOrigin Sci-Fi Swaps',
    type: 'Author Swap Network',
    outlet: 'StoryOrigin (storyoriginapp.com)',
    emailOrUrl: 'https://storyoriginapp.com',
    isDirectEmail: false,
    audienceSize: 'Co-op of 50,000+ indie authors worldwide',
    specialty: 'Newsletter swaps, group promos, ARC reviewer management',
    location: 'United States',
    guidelinesSummary: 'Find other US sci-fi authors in your subgenre (e.g. AI & Space Opera) and cross-promote each other’s books in weekly newsletters.',
    acceptsIndie: true,
    cost: 'Freemium',
  },
  {
    id: 'contact-12',
    name: 'Tangent Online',
    type: 'Book Reviewer',
    outlet: 'Tangent Online (tangentonline.com)',
    emailOrUrl: 'tangent@tangentonline.com',
    isDirectEmail: true,
    audienceSize: '30,000+ Dedicated SF Enthusiasts',
    specialty: 'Hard Sci-Fi, Short fiction and novellas, Space exploration',
    location: 'United States',
    guidelinesSummary: 'Longstanding speculative fiction magazine specializing in analytical reviews of short science fiction, novellas, and trilogies.',
    acceptsIndie: true,
    cost: 'Free / Review Pitch',
  },
  {
    id: 'contact-13',
    name: 'Amazing Stories Review Bureau',
    type: 'Sci-Fi Magazine / Media',
    outlet: 'Amazing Stories (amazingstories.com)',
    emailOrUrl: 'submissions@amazingstories.com',
    isDirectEmail: true,
    audienceSize: '85,000+ Monthly Visitors',
    specialty: 'Classic Sci-Fi, Transhumanism, Alien Contact, Robotics',
    location: 'United States',
    guidelinesSummary: 'The historic brand founded by Hugo Gernsback in 1926. Now an active web portal reviewing contemporary science fiction novels and publishing interviews.',
    acceptsIndie: true,
    cost: 'Free / Review Pitch',
  },
  {
    id: 'contact-14',
    name: 'Robin Reads Sci-Fi Dispatch',
    type: 'Newsletter / Promo Platform',
    outlet: 'Robin Reads (robinreads.com)',
    emailOrUrl: 'submit@robinreads.com',
    isDirectEmail: true,
    audienceSize: '190,000+ Engaged US Ebook Buyers',
    specialty: 'Space Opera, Artificial Intelligence, Alien Civilizations',
    location: 'United States',
    guidelinesSummary: 'High-converting curated daily book newsletter with dedicated Sci-Fi category.',
    acceptsIndie: true,
    cost: 'Paid Promo',
  },
  {
    id: 'contact-15',
    name: 'Sci-Fi Pulse',
    type: 'Sci-Fi Magazine / Media',
    outlet: 'SciFiPulse (scifipulse.net)',
    emailOrUrl: 'ian@scifipulse.net',
    isDirectEmail: true,
    audienceSize: '50,000+ Monthly Unique Readers',
    specialty: 'Sci-Fi TV, Movies, Literature, Author Interviews',
    location: 'US / UK',
    guidelinesSummary: 'Welcomes book review requests and interview pitches from independent sci-fi creators exploring AI, space, and futurology.',
    acceptsIndie: true,
    cost: 'Free / Review Pitch',
  },
  {
    id: 'contact-16',
    name: 'SF Crowsnest Literature Desk',
    type: 'Sci-Fi Magazine / Media',
    outlet: 'SF Crowsnest (sfcrowsnest.info)',
    emailOrUrl: 'editor@sfcrowsnest.info',
    isDirectEmail: true,
    audienceSize: '75,000+ Monthly Readers',
    specialty: 'Hard Sci-Fi, Cyberpunk, Robotics, Space Opera',
    location: 'US / Global',
    guidelinesSummary: 'One of the web’s longest-running science fiction news and review magazines. Reviews print and digital books.',
    acceptsIndie: true,
    cost: 'Free / Review Pitch',
  },
];

export const OUTREACH_TEMPLATES_EN = {
  reviewerPitch: {
    title: 'Pitching US Sci-Fi Book Reviewers & Bloggers',
    subject: 'Review Copy: "93 Years Old in 2047" (Asimov meets The Expanse: sentient androids & first contact)',
    body: `Hi [Reviewer Name],

I’ve been reading your thoughtful reviews on [Blog/Outlet Name], especially your recent thoughts on [Recent Book They Reviewed].

Given your affinity for hard science fiction and stories interrogating artificial intelligence, I wanted to introduce you to *93 Years Old in 2047*, the opening volume of *The Yann Sorel Trilogy* by French author J.F. Grosvois (available on Amazon in Kindle, Paperback, and Deluxe Hardcover).

Quick Pitch:
Twenty years after a nuclear conflict, 93-year-old Yann Sorel lives in a world run by algorithmic governance and synthetic butlers. When extraterrestrials from Canocan initiate contact, Yann is hired as an advisor for galactic commercial expeditions—and falls in love with an android designed to shatter Asimov's Three Laws of Robotics.

Key themes:
- Re-examining the Laws of Robotics when synthetic beings experience genuine heartbreak
- Nonagenarian protagonist navigating deep space commerce
- Immortality, soul commodification, and alien diplomacy

Formats available:
ePub / Mobi / PDF / Physical paperback (US shipping upon request)

Amazon Link for reference:
https://www.amazon.com/dp/B0CFK2C7VK

Would you be open to an advance or digital review copy? If so, let me know your preferred format!

Best regards,

[Your Name / Author Assistant]
For J.F. Grosvois
https://grosvois.com`,
  },
  newsletterSwap: {
    title: 'Newsletter Swap with Fellow US Sci-Fi Authors (StoryOrigin / BookFunnel)',
    subject: 'Newsletter Swap Request: Hard Sci-Fi / Space Opera (Yann Sorel Trilogy)',
    body: `Hi [Author Name],

I love your work with [Author's Book Title]—our reader bases in space opera, AI, and futuristic transhumanism share so much DNA!

My sci-fi newsletter reaches [Your Subscriber Count] engaged science fiction readers with an average open rate of [Your Open Rate, e.g. 42%].

I'd love to organize a newsletter swap with you in [Upcoming Month, e.g. November]:
- I will feature your book / lead magnet in my primary recommendation slot on [Date A].
- You can feature *93 Years Old in 2047* (or our free prequel preview on BookFunnel) on [Date B].

Here is our book link: https://www.amazon.com/dp/B0CFK2C7VK
And author site: https://grosvois.com

Would you be interested in pairing up for a mutually beneficial swap? Let me know your available broadcast dates!

Warm regards,

J.F. Grosvois
https://grosvois.com`,
  },
  arcTeamInvite: {
    title: 'Recruiting Engaged US Fans for the VIP ARC Reader Vanguard',
    subject: '⚡ Invitation: Join the Yann Sorel Sci-Fi Vanguard (Free Advance Copies)',
    body: `Dear Sci-Fi Reader,

Have you ever wanted to be the first in the galaxy to step into a new universe?

Author J.F. Grosvois is opening an exclusive 50-member Advance Review Copy (ARC) team for *The Yann Sorel Trilogy*.

As a member of the Vanguard:
1. You will receive free digital review copies (ePub / Kindle) 3 weeks before official release.
2. You will get access to unreleased universe maps, alien lore dossiers (Canocan, Draconians, Arcturians), and deleted scenes.
3. Your name will be featured in the official acknowledgments page of future editions.

Our only request:
Post an honest review on Amazon and Goodreads within 7 days of launch.

Ready to explore 2047, 2075, and 2148 with Yann and Eve?

👉 [Click Here to Join the Vanguard ARC Squad]

To infinity,

The Yann Sorel Team
https://grosvois.com`,
  },
};

export const ETHICAL_ACQUISITION_GUIDE = {
  titleFr: "Stratégie d'acquisition d'e-mails de fans de Sci-Fi aux USA (Conforme CAN-SPAM)",
  titleEn: 'Acquiring US Sci-Fi Reader Emails: The Compliant & High-ROI Playbook',
  canSpamWarning:
    'ATTENTION : Récupérer des adresses e-mails personnelles privées de particuliers sans consentement (web scraping de forums ou listes piratées) enfreint la loi fédérale américaine CAN-SPAM Act (15 U.S.C. 7701) et provoque le bannissement immédiat de votre nom de domaine par Gmail, Yahoo et Outlook. Voici la méthode légale, testée et hyper-rentable employée par les auteurs américains à succès pour collecter 5 000 à 25 000 e-mails de fans de SF qualifiés.',
  pillars: [
    {
      pillar: '1. Group Promos BookFunnel & StoryOrigin',
      roi: 'Coût par lead : 0,05 $ à 0,25 $',
      description:
        'Vous vous associez avec 15 à 30 auteurs de science-fiction américains. Vous proposez un "Reader Magnet" gratuit (le prologue offert ou les 3 premiers chapitres de Yann Sorel). Chaque lecteur US entre son e-mail pour télécharger le fichier. Vous récupérez 300 à 1 500 nouveaux abonnés SF ultra-ciblés par mois.',
    },
    {
      pillar: '2. Facebook & Instagram Lead Ads (US Sci-Fi Targeting)',
      roi: 'Coût par lead : 0,60 $ à 1,40 $',
      description:
        'Campagnes publicitaires Meta ciblées sur les fans américains de romans de science-fiction (intérêts : Isaac Asimov, Philip K. Dick, Arthur C. Clarke, The Expanse, Cyberpunk 2077) avec formulaire natif instantané. Les lecteurs opt-in directement dans Instagram/Facebook.',
    },
    {
      pillar: '3. Voracious Readers Only (VRO) ARC System',
      roi: 'Coût par lead : Gratuit à 20 $ par mois',
      description:
        'VRO connecte des auteurs avec plus de 35 000 lecteurs américains assidus qui s’engagent à lire votre roman et à laisser un avis honnête sur Amazon. Chaque lecteur consent à rejoindre votre liste d’abonnés.',
    },
    {
      pillar: '4. Newsletter Swaps (Échanges de listes entre auteurs SF)',
      roi: '100% Gratuit',
      description:
        'Échangez des recommandations avec des auteurs de Space Opera américains ayant entre 2 000 et 10 000 abonnés. Vous recommandez leur livre en P.S., ils recommandent *93 ans en 2047* ou votre lead magnet à leur audience.',
    },
    {
      pillar: '5. BookBub Ads & Featured Deals',
      roi: 'ROI moyen : 200% à 450% sur série complète',
      description:
        'BookBub possède la plus grande base de lecteurs de science-fiction au monde (plus de 3,2 millions d’abonnés aux USA). Une offre promotionnelle propulse instantanément votre livre dans le Top 100 Amazon Sci-Fi.',
    },
  ],
};
