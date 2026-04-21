import { Tour } from "@/types";

export const MOCK_TOURS: Tour[] = [
  // ─── LONG WALKING TOURS ───────────────────────────────────────────────────

  {
    id: "1",
    title: "Porto Unveiled",
    slug: "porto-unveiled",
    description:
      "Porto has many faces — and this full-day private tour reveals them all. Beginning at the Roman foundations of Portus Cale, your archaeologist guide leads you through layers of medieval fortifications, Baroque splendour, Enlightenment-era urbanism, and the industrial revolution that shaped the Porto we know today. From the Sé Cathedral to the Ribeira waterfront, from the Fernandina Wall to the Palácio da Bolsa, Porto Unveiled is the most complete historical narrative of this UNESCO World Heritage city. Suitable for history enthusiasts and first-time visitors alike.",
    short_description:
      "A full-day immersion in Porto's complete history — from Roman foundations to modernity, guided by an archaeologist.",
    duration_minutes: 420,
    price_eur: 0,
    max_participants: 8,
    category: "historical",
    zone: "porto",
    image_url:
      "https://www.civitatis.com/f/portugal/oporto/galeria/panoramica-oporto-medieval.jpg",
    gallery_urls: [],
    highlights: [
      "Roman Portus Cale — the origins of Porto and Portugal",
      "Sé Cathedral and its Romanesque cloister",
      "Fernandina Wall — Porto's medieval defensive perimeter",
      "Palácio da Bolsa — the heart of 19th-century commerce",
      "Ribeira (UNESCO) — the ancient waterfront district",
      "Expert archaeological commentary throughout",
    ],
    meeting_point: "Sé Cathedral Main Entrance",
    meeting_point_coords: { lat: 41.1427, lng: -8.6117 },
    is_active: true,
    created_at: "2026-01-15T10:00:00Z",
  },

  {
    id: "2",
    title: "Porto VIP Historical Tour",
    slug: "porto-vip-historical-tour",
    description:
      "A curated 4-hour private tour that distils the essential history of Porto into an unforgettable narrative. Ideal for travellers who want depth and expert insight without a full-day commitment. Your archaeologist guide takes you through the key monuments and hidden layers of Porto's past — the stories, the people, and the events that made this city one of Europe's most distinctive. Private and flexible: pace, stops, and focus are adapted to your interests.",
    short_description:
      "The essential Porto history experience — 4 hours of expert-guided discovery through the city's most iconic and hidden sites.",
    duration_minutes: 240,
    price_eur: 0,
    max_participants: 8,
    category: "historical",
    zone: "porto",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Porto_nightscape_%288079816865%29.jpg/1280px-Porto_nightscape_%288079816865%29.jpg",
    gallery_urls: [],
    highlights: [
      "Porto's founding myths and Roman legacy",
      "The medieval cathedral and bishop's palace",
      "Rua das Flores — the historic merchant street",
      "São Bento Station and its 20,000 azulejo tiles",
      "The Ribeira district and Douro waterfront",
    ],
    meeting_point: "Sé Cathedral Main Entrance",
    meeting_point_coords: { lat: 41.1427, lng: -8.6117 },
    is_active: true,
    created_at: "2026-01-15T10:00:00Z",
  },

  // ─── SHORT WALKING TOURS ──────────────────────────────────────────────────

  {
    id: "3",
    title: "The Origins of Porto",
    slug: "the-origins-of-porto",
    description:
      "How did a small Celtic settlement on the banks of the Douro become one of Europe's most beloved cities — and give its name to an entire nation? This focused 2-hour tour answers that question. Your guide leads you through the oldest layers of Porto: the pre-Roman hilltop settlement, the Roman castrum, the early medieval bishopric, and the walled city that grew around them. A perfect introduction to Porto for the historically curious visitor who wants to understand the 'why' behind what they see.",
    short_description:
      "Trace Porto's roots from Celtic settlement to medieval city — the story of how a port town gave its name to Portugal.",
    duration_minutes: 120,
    price_eur: 0,
    max_participants: 10,
    category: "historical",
    zone: "porto",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Se_catedral_porto.JPG/800px-Se_catedral_porto.JPG",
    gallery_urls: [],
    highlights: [
      "The hilltop where Porto's first settlers lived",
      "Roman Portus Cale — archaeological traces in the city",
      "Porto's Romanesque cathedral — built to defend a medieval diocese",
      "The evolution from Roman castrum to medieval walled city",
      "Why Porto — and not Lisbon — gave its name to Portugal",
    ],
    meeting_point: "Sé Cathedral Main Entrance",
    meeting_point_coords: { lat: 41.1427, lng: -8.6117 },
    is_active: true,
    created_at: "2026-01-20T10:00:00Z",
  },

  {
    id: "4",
    title: "The Douro Unveiled",
    slug: "the-douro-unveiled",
    description:
      "The Douro is more than a river — it is Porto's reason for existing. In just 2 hours, this tour traces the history of Porto and Gaia through the lens of the river that defines them both: ancient trade routes, the Roman bridge site, the medieval waterfront, the barcos rabelos that carried Port wine barrels downstream, and the iconic Dom Luís I Bridge that linked two cities into one identity. Stand on the bridge and understand everything the river below has witnessed across 2,000 years.",
    short_description:
      "Understand Porto and Gaia through their river — 2,000 years of trade, wine, and history along the Douro.",
    duration_minutes: 120,
    price_eur: 0,
    max_participants: 10,
    category: "historical",
    zone: "both",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Porto_nightscape_%288079816865%29.jpg/1280px-Porto_nightscape_%288079816865%29.jpg",
    gallery_urls: [],
    highlights: [
      "Dom Luís I Bridge — the iron icon that connects two cities",
      "Cais da Ribeira — Porto's UNESCO World Heritage waterfront",
      "The barcos rabelos and the Port wine trade",
      "Views across the Douro to Vila Nova de Gaia",
      "2,000 years of river history condensed into 2 hours",
    ],
    meeting_point: "Praça da Ribeira Fountain",
    meeting_point_coords: { lat: 41.1405, lng: -8.6132 },
    is_active: true,
    created_at: "2026-01-25T10:00:00Z",
  },

  {
    id: "5",
    title: "The Jewish Quarter of Gaia",
    slug: "the-jewish-quarter-of-gaia",
    description:
      "Across the river from Porto, Vila Nova de Gaia holds a lesser-known but deeply moving chapter of Iberian history. This tour explores the medieval Jewish community of Gaia — their quarter, their economic role, the trauma of the 1496 expulsion decree, and the hidden traces of Crypto-Jewish practice that survived for generations. A nuanced and deeply human history, guided by an archaeologist with specialist knowledge of Iberian Jewish heritage. Unlike any other tour in the Porto area.",
    short_description:
      "Explore the hidden Jewish history of Vila Nova de Gaia — medieval community, expulsion, and the traces that remain.",
    duration_minutes: 120,
    price_eur: 0,
    max_participants: 10,
    category: "historical",
    zone: "gaia",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Livraria_Lello_-_Porto_-_Portugal_%2818045390626%29.jpg/800px-Livraria_Lello_-_Porto_-_Portugal_%2818045390626%29.jpg",
    gallery_urls: [],
    highlights: [
      "The medieval Jewish quarter of Gaia — its boundaries and daily life",
      "Economic role of the Jewish community in pre-expulsion Portugal",
      "The 1496 expulsion decree and its consequences across Iberia",
      "Traces of Crypto-Jewish practice in the post-expulsion period",
      "How this history connects to the global Sephardic diaspora",
    ],
    meeting_point: "Jardim do Morro (Gaia side of Dom Luís I Bridge)",
    meeting_point_coords: { lat: 41.1378, lng: -8.6128 },
    is_active: true,
    created_at: "2026-02-01T10:00:00Z",
  },

  {
    id: "6",
    title: "Gaia's Castle",
    slug: "gaias-castle",
    description:
      "Before Porto was Porto, there was a hilltop fortress on the south bank of the Douro. This tour takes you to the archaeological heart of Vila Nova de Gaia — a site occupied by Celts, Romans, and medieval lords centuries before the wine cellars arrived. Standing above the river with the Mosteiro da Serra do Pilar as your backdrop, your archaeologist guide brings an ancient hilltop to life through excavation finds, fortification layers, and the long human presence that shaped this remarkable landscape.",
    short_description:
      "Discover the ancient hilltop fortress of Gaia — Celtic, Roman, and medieval layers revealed by an archaeologist.",
    duration_minutes: 120,
    price_eur: 0,
    max_participants: 10,
    category: "archaeological",
    zone: "gaia",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Porto_nightscape_%288079816865%29.jpg/1280px-Porto_nightscape_%288079816865%29.jpg",
    gallery_urls: [],
    highlights: [
      "Pre-Roman Celtic hilltop settlement — the original Cale",
      "Roman military presence on the south bank of the Douro",
      "Medieval fortifications and the castle of Gaia",
      "Mosteiro da Serra do Pilar — circular church with panoramic views",
      "Archaeological excavation finds and their historical context",
    ],
    meeting_point: "Jardim do Morro (Gaia side of Dom Luís I Bridge)",
    meeting_point_coords: { lat: 41.1378, lng: -8.6128 },
    is_active: true,
    created_at: "2026-02-05T10:00:00Z",
  },

  {
    id: "7",
    title: "Porto's Age of Iron",
    slug: "portos-age-of-iron",
    description:
      "The 19th century transformed Porto with iron, steam, and capital. This tour explores the industrial revolution's remarkable physical legacy in the city: the Gustave Eiffel-era Maria Pia Bridge, the Crystal Palace gardens, the early railway infrastructure, and the bourgeois architecture that rose alongside it all. A tour for those who want to understand how Porto became a modern European city — told through its most dramatic period of transformation and the social tensions that came with it.",
    short_description:
      "Trace Porto's industrial revolution — Eiffel bridges, crystal palaces, and the iron age that built modern Porto.",
    duration_minutes: 120,
    price_eur: 0,
    max_participants: 10,
    category: "historical",
    zone: "porto",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C3%93bidos_-_Varanda_%285414515924%29.jpg/1280px-%C3%93bidos_-_Varanda_%285414515924%29.jpg",
    gallery_urls: [],
    highlights: [
      "Maria Pia Bridge — Gustave Eiffel's Porto masterpiece",
      "Palácio de Cristal — Porto's great 19th-century exhibition hall",
      "The first railway route on the Iberian Peninsula",
      "Bourgeois Porto — how new wealth reshaped the urban fabric",
      "Industrial social tensions — workers, merchants, and capital",
    ],
    meeting_point: "Jardins do Palácio de Cristal Main Gate",
    meeting_point_coords: { lat: 41.1479, lng: -8.6265 },
    is_active: true,
    created_at: "2026-02-10T10:00:00Z",
  },

  // ─── EXCLUSIVE EXPERIENCES ────────────────────────────────────────────────

  {
    id: "8",
    title: "Douro Valley VIP Tour",
    slug: "douro-valley-vip-tour",
    description:
      "Leave the city behind and spend a full day in the UNESCO World Heritage Douro Valley — one of the world's oldest demarcated wine regions and one of Europe's most spectacular river landscapes. Your archaeologist guide brings genuine historical depth to every vineyard, quinta, and village you visit: from Roman wine-producing estates to the 18th-century Pombaline regulation that defined Port wine as we know it. A private, unhurried, and deeply informed day in one of Portugal's greatest landscapes.",
    short_description:
      "A private full-day journey to the UNESCO Douro Valley — ancient vineyards, historic quintas, and deep archaeological insight.",
    duration_minutes: 480,
    price_eur: 0,
    max_participants: 6,
    category: "wine",
    zone: "both",
    image_url:
      "https://www.travelawaits.com/wp-content/uploads/2021/04/eefcd88c5df6268869b151a896aa8eefcd8-scaled.jpg?w=800",
    gallery_urls: [],
    highlights: [
      "UNESCO World Heritage Douro Valley terraced vineyards",
      "Historic quintas and the story of Port wine production",
      "Roman wine estates — viticulture predating the Christian era",
      "The Pombaline demarcation of 1756 — the world's first regulated wine region",
      "Private wine tasting at a historic quinta",
    ],
    meeting_point: "Hotel pickup in Porto city centre (confirmed on booking)",
    meeting_point_coords: { lat: 41.1496, lng: -8.6109 },
    is_active: true,
    created_at: "2026-02-15T10:00:00Z",
  },

  {
    id: "9",
    title: "Porto Living — A Local Day Experience",
    slug: "porto-living",
    description:
      "What does an ordinary day in Porto look and taste like? In this full-day private experience, your guide takes you beyond the tourist trail and into the living city: the neighbourhood market at dawn, the coffee rituals, the traditional tascas where locals eat, the viewpoints and squares where daily life happens. Woven throughout is the history — why Porto's neighbourhoods developed as they did, and how the city's social fabric has been shaped by centuries of commerce, migration, and resilience.",
    short_description:
      "Experience Porto as a local — markets, tascas, neighbourhoods, and the human stories behind everyday city life.",
    duration_minutes: 420,
    price_eur: 0,
    max_participants: 6,
    category: "gastronomic",
    zone: "porto",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Francesinha_%282%29.jpg/1280px-Francesinha_%282%29.jpg",
    gallery_urls: [],
    highlights: [
      "Morning visit to a local neighbourhood market",
      "Porto's coffee culture — the ritual of the bica and galão",
      "Traditional tascas — lunch where locals eat, not tourists",
      "Hidden miradouros (viewpoints) away from the crowds",
      "The history behind Porto's neighbourhoods and communities",
    ],
    meeting_point: "To be confirmed on booking",
    meeting_point_coords: { lat: 41.1496, lng: -8.6059 },
    is_active: true,
    created_at: "2026-02-20T10:00:00Z",
  },

  {
    id: "10",
    title: "The Wine Tasting Experience",
    slug: "the-wine-tasting-experience",
    description:
      "Port wine is one of the world's great fortified wines — and no one is better placed to tell its story than a local archaeologist who has spent years studying the Douro Valley and the Gaia cellars. In this focused 1.5-hour experience, you'll learn the history of Port wine from its ancient origins to the 18th-century Pombaline regulation, understand the different styles and their production methods, and taste a curated selection. Held in the historic cellars of Vila Nova de Gaia — wine appreciation with genuine historical depth.",
    short_description:
      "A guided Port wine tasting in Gaia's historic cellars — history, varieties, and curated selections with an archaeologist guide.",
    duration_minutes: 90,
    price_eur: 0,
    max_participants: 8,
    category: "wine",
    zone: "gaia",
    image_url:
      "https://www.travelawaits.com/wp-content/uploads/2021/04/eefcd88c5df6268869b151a896aa8eefcd8-scaled.jpg?w=800",
    gallery_urls: [],
    highlights: [
      "History of Port wine from ancient viticulture to today",
      "The Pombaline demarcation — regulating the world's first wine appellation",
      "Understanding the major Port styles (Ruby, Tawny, Vintage, LBV)",
      "Curated wine tasting in a historic Gaia cellar",
      "The geography of the Douro — how landscape shapes flavour",
    ],
    meeting_point: "Jardim do Morro (Gaia side of Dom Luís I Bridge)",
    meeting_point_coords: { lat: 41.1378, lng: -8.6128 },
    is_active: true,
    created_at: "2026-02-25T10:00:00Z",
  },
];

export const MOCK_REVIEWS = [
  {
    id: "r1",
    tour_id: "1",
    rating: 5,
    comment:
      "An extraordinary day. Our guide's knowledge of Porto's history is on another level — you feel like you're walking through the city with someone who has actually excavated it. We saw and understood things we never would have found in any guidebook.",
    user: { full_name: "Sarah M.", country: "United States" },
    created_at: "2026-03-10T14:00:00Z",
  },
  {
    id: "r2",
    tour_id: "10",
    rating: 5,
    comment:
      "The wine tasting was wonderful, but what made it special was the historical context. I finally understand why Port wine is so tied to this city and this river. Highly recommend to anyone who wants more than just a sip.",
    user: { full_name: "James T.", country: "United Kingdom" },
    created_at: "2026-03-15T16:00:00Z",
  },
  {
    id: "r3",
    tour_id: "3",
    rating: 5,
    comment:
      "The Origins of Porto tour completely changed how I saw the city for the rest of my trip. The guide explained the 'why' behind everything — why Porto feels different, why it mattered historically. Absolutely brilliant.",
    user: { full_name: "Emily R.", country: "Canada" },
    created_at: "2026-03-20T11:00:00Z",
  },
  {
    id: "r4",
    tour_id: "8",
    rating: 5,
    comment:
      "The Douro Valley tour was the highlight of our entire Portugal trip. Private, unhurried, and deeply informed. The historical context our guide brought to the vineyards made the wine tasting at the quinta feel completely different.",
    user: { full_name: "Michael & Laura K.", country: "Australia" },
    created_at: "2026-03-28T15:00:00Z",
  },
  {
    id: "r5",
    tour_id: "2",
    rating: 5,
    comment:
      "We had 4 hours and wanted to make the most of Porto's history. This tour delivered exactly that — private, expert, and perfectly paced. Our guide had us completely captivated from start to finish.",
    user: { full_name: "Daniel P.", country: "Ireland" },
    created_at: "2026-04-02T10:00:00Z",
  },
];
