export interface AdCampaign {
  id: string;
  platform: 'Amazon Ads' | 'Meta (Facebook / Instagram)' | 'BookBub Ads' | 'Reddit Ads';
  campaignName: string;
  targetObjective: string;
  targetAudience: string;
  keywordsOrInterests: string[];
  asinTargets?: string[];
  suggestedBidOrCpc: string;
  budgetRecommendation: string;
  primaryCopyEn: string;
  primaryCopyFr: string;
  headlineEn: string;
  headlineFr: string;
  callToAction: string;
  targetAcosOrRoas: string;
  proTips: string[];
}

export const TARGETED_AD_CAMPAIGNS: AdCampaign[] = [
  {
    id: 'ad-amazon-asin',
    platform: 'Amazon Ads',
    campaignName: 'Amazon Sponsored Products - Sci-Fi Bestsellers ASIN Targeting',
    targetObjective: 'Show Book 1 directly on product pages of comp titles when readers are ready to buy',
    targetAudience: 'Active US Kindle & Paperback buyers reading similar hard sci-fi, android, and space opera books',
    keywordsOrInterests: [
      'Product Targeting (PAT)',
      'Science Fiction > Hard Science Fiction',
      'Science Fiction > Space Opera',
      'Science Fiction > Artificial Intelligence & Cyberpunk',
    ],
    asinTargets: [
      'B001ANYDAO (Isaac Asimov - Foundation)',
      'B000FBFO4W (Philip K. Dick - Do Androids Dream of Electric Sheep?)',
      'B004XIS0E2 (James S.A. Corey - Leviathan Wakes / The Expanse)',
      'B004A8WV2W (Richard K. Morgan - Altered Carbon)',
      'B00P9V225K (Cixin Liu - The Three-Body Problem)',
      'B0112V80A6 (Adrian Tchaikovsky - Children of Time)',
      'B01N9AX3VN (Martha Wells - All Systems Red / Murderbot Diaries)',
      'B071F2NW94 (Dennis E. Taylor - We Are Legion / Bobiverse)',
    ],
    suggestedBidOrCpc: '$0.38 - $0.65 CPC',
    budgetRecommendation: '$10 - $25 / day',
    primaryCopyEn:
      'In 2047, humanity rebuilt with android butlers and AI judges. When 93-year-old Yann Sorel meets an extraterrestrial merchant from Canocan, he embarks on an expedition that shatters Asimov’s laws. Read Book 1 on Kindle ($7.99) or in Hardcover Deluxe.',
    primaryCopyFr:
      'En 2047, l’humanité s’est reconstruite avec des robots majordomes et une IA omniprésente. Yann Sorel, 93 ans, rencontre un négociant extraterrestre venu de Canocan et s’embarque dans une expédition qui fait voler en éclats les lois d’Asimov. Découvrez le Tome 1.',
    headlineEn: 'Isaac Asimov Meets The Expanse: Can An Android Feel True Love?',
    headlineFr: 'Quand Asimov rencontre The Expanse : Une androïde peut-elle aimer ?',
    callToAction: 'Read on Amazon',
    targetAcosOrRoas: 'Target ACoS: 32% - 40% (Profitable across series read-through)',
    proTips: [
      'Use Amazon Attribution tags (e.g., ?tag=yannsorel-20) to track exact royalties from ads.',
      'Add negative exact keywords like "free", "pdf", "used textbook" to avoid wasteful spend.',
      'Target both Kindle ($7.99) and the Deluxe Hardcover ($41.86) to capture high-margin collector sales.',
    ],
  },
  {
    id: 'ad-amazon-keywords',
    platform: 'Amazon Ads',
    campaignName: 'Amazon Sponsored Products - High-Intent Sci-Fi Keywords',
    targetObjective: 'Capture high-buying intent US search traffic searching for futuristic sci-fi series',
    targetAudience: 'US readers searching for hard sci-fi, android fiction, space exploration trilogies',
    keywordsOrInterests: [
      '"hard science fiction trilogy" (Exact & Phrase)',
      '"artificial intelligence sci fi book" (Exact & Phrase)',
      '"sentient android novels" (Phrase)',
      '"space opera trilogy series" (Exact & Phrase)',
      '"books about longevity immortality" (Broad & Phrase)',
      '"first contact alien commercial fiction" (Phrase)',
      '"books like altered carbon" (Phrase)',
      '"asimov robotics future" (Phrase)',
      '"galactic federation epic" (Phrase)',
      '"transhumanism science fiction" (Exact & Phrase)',
    ],
    suggestedBidOrCpc: '$0.42 - $0.72 CPC',
    budgetRecommendation: '$15 - $30 / day',
    primaryCopyEn:
      'What happens when memories are sold like bread in 2148? Discover the 3-era saga of Yann Sorel spanning 2047, 2075, and 2148. Available now in Kindle & Luxury Hardcover.',
    primaryCopyFr:
      'Que se passe-t-il quand les souvenirs se vendent comme du pain en 2148 ? Découvrez la saga en 3 époques de Yann Sorel (2047, 2075, 2148). Disponible sur Kindle et Relié Deluxe.',
    headlineEn: 'The Yann Sorel Trilogy: 3 Eras. 200 Years of Destiny.',
    headlineFr: 'La Trilogie Yann Sorel : 3 Époques. 200 ans de destinée humaine.',
    callToAction: 'Shop on Amazon',
    targetAcosOrRoas: 'Target ACoS: 35%',
    proTips: [
      'Separate into Exact Match campaigns (higher bid, e.g., $0.65) and Broad Match (lower bid, e.g., $0.35) for keyword discovery.',
      'Every week, harvest converting search terms from Broad campaigns and promote them to Exact match.',
    ],
  },
  {
    id: 'ad-meta-lead-gen',
    platform: 'Meta (Facebook / Instagram)',
    campaignName: 'Meta Ads - Free Sci-Fi Dossier Lead Magnet (US List Building)',
    targetObjective: 'Acquire high-quality US Sci-Fi reader emails for under $0.90 to feed automated email sequence',
    targetAudience: 'US Adults 25-65+, Interests: Hard Science Fiction, Isaac Asimov, Philip K. Dick, Cyberpunk, Amazon Kindle readers',
    keywordsOrInterests: [
      'Interest: Science fiction novels',
      'Interest: Isaac Asimov',
      'Interest: Philip K. Dick',
      'Interest: Arthur C. Clarke',
      'Interest: The Expanse (novel series)',
      'Behavior: Amazon Kindle store buyers',
      'Language: English (US)',
      'Placement: Instagram Feeds, Facebook Mobile Feed, Stories',
    ],
    suggestedBidOrCpc: '$0.50 - $0.95 Cost Per Lead (CPL)',
    budgetRecommendation: '$15 - $40 / day',
    primaryCopyEn:
      '⚡ Sci-Fi Readers: "In 2047, physical death was conquered. In 2148, memories are sold like bread on the corner."\n\nIf you love thought-provoking space opera, philosophical artificial intelligence, and first contact diplomacy that respects real physics—step into the Yann Sorel universe.\n\nDownload the exclusive 2047 Prelude Dossier + First 3 Chapters for FREE right now.',
    primaryCopyFr:
      '⚡ Passionnés de SF : "En 2047, la mort physique a été vaincue. En 2148, les souvenirs se vendent comme du pain au coin de la rue."\n\nSi vous aimez le space opera exigeant, l’intelligence artificielle philosophique et les premiers contacts extraterrestres—plongez dans l’univers de Yann Sorel.\n\nTéléchargez gratuitement le Dossier Prélude 2047 et les 3 premiers chapitres immédiatement.',
    headlineEn: 'Free Sci-Fi Prelude: The Yann Sorel Trilogy',
    headlineFr: 'Prélude SF Offert : La Trilogie Yann Sorel',
    callToAction: 'Download Free Book',
    targetAcosOrRoas: 'Cost Per Lead < $0.90 (Leads convert at 18-24% to paid Book 1 via email drip)',
    proTips: [
      'Use Instant Forms (native in-app opt-in) for 40% cheaper cost per subscriber compared to external landing pages.',
      'Connect Meta Lead Form directly to Mailchimp, ConvertKit, or ActiveCampaign via Zapier or Webhook.',
      'Retarget anyone who engaged with your video or ad but did not opt in with a direct Amazon Book 1 link.',
    ],
  },
  {
    id: 'ad-bookbub',
    platform: 'BookBub Ads',
    campaignName: 'BookBub Self-Serve CPC Campaign - Author Retargeting',
    targetObjective: 'Show banner ads directly at the bottom of daily BookBub sci-fi book alert emails in the US',
    targetAudience: 'BookBub subscribers following comp authors in hard sci-fi and space opera',
    keywordsOrInterests: [
      'Author Target: Neal Asher',
      'Author Target: Peter F. Hamilton',
      'Author Target: Alastair Reynolds',
      'Author Target: John Scalzi',
      'Author Target: Greg Egan',
      'Category Filter: Science Fiction (US Market only)',
    ],
    suggestedBidOrCpc: '$0.35 - $0.55 CPC',
    budgetRecommendation: '$10 - $20 / day',
    primaryCopyEn:
      'He is 93 years old in 2047. She is an android designed to defy robotics laws for love. The journey begins on Amazon Kindle.',
    primaryCopyFr:
      'Il a 93 ans en 2047. Elle est une androïde conçue pour braver les lois de la robotique par amour. L’aventure commence sur Amazon.',
    headlineEn: 'New Hard Sci-Fi Trilogy: 93 Years Old in 2047',
    headlineFr: 'Nouvelle Trilogie de Hard SF : 93 ans en 2047',
    callToAction: 'Read Now on Kindle',
    targetAcosOrRoas: 'Target ROAS: 2.2x - 3.5x',
    proTips: [
      'BookBub readers have extremely high purchasing intent—they open the email with wallet in hand.',
      'Test 2 to 3 author targets per ad set so you know exactly which comp author delivers the highest ROI.',
    ],
  },
];
