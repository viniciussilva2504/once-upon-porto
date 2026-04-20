-- ============================================
-- Seed Data — 6 Tours + 5 Reviews
-- ============================================

insert into public.tours (title, slug, description, short_description, duration_minutes, price_eur, max_participants, category, zone, image_url, gallery_urls, highlights, meeting_point, meeting_point_lat, meeting_point_lng) values
(
  'Porto Medieval Walking Tour',
  'porto-medieval-walking-tour',
  'Journey back to the Middle Ages as we walk through Porto''s medieval quarter. Discover the ancient walls, the Romanesque Cathedral, and hidden streets that tell the story of a city forged by commerce and conquest. Led by archaeologist Fábio Soares, this tour brings centuries of history to life with expert storytelling and exclusive access to lesser-known sites.',
  'Explore Porto''s medieval heritage — from the Romanesque Cathedral to the ancient Fernandina Wall.',
  150, 35, 12, 'historical', 'porto',
  'https://www.civitatis.com/f/portugal/oporto/galeria/panoramica-oporto-medieval.jpg',
  '{}',
  ARRAY['Sé Cathedral – Porto''s Romanesque fortress-church', 'Fernandina Wall – the medieval defensive perimeter', 'Rua das Flores – historic merchant street', 'Hidden medieval courtyards and alleyways', 'Exclusive archaeological insights from Fábio Soares'],
  'Sé Cathedral Main Entrance', 41.142700, -8.611700
),
(
  'Port Wine Heritage Trail',
  'port-wine-heritage-trail',
  'Cross the iconic Dom Luís I Bridge into Vila Nova de Gaia and uncover the centuries-old story of Port wine. Visit historic cellars, learn about the barcos rabelos that transported wine barrels down the Douro, and taste curated selections — all framed by the rich history that made Porto''s wine world-famous.',
  'From Ribeira to Gaia — the history, the cellars, and the taste of Port wine.',
  180, 45, 10, 'wine', 'both',
  'https://www.travelawaits.com/wp-content/uploads/2021/04/eefcd88c5df6268869b151a896aa8eefcd8-scaled.jpg?w=800',
  '{}',
  ARRAY['Dom Luís I Bridge crossing with panoramic views', 'Historic Port wine cellars in Gaia', 'The story of barcos rabelos and the Douro trade', 'Guided wine tasting of curated Port selections', 'Cais da Ribeira UNESCO World Heritage site'],
  'Praça da Ribeira Fountain', 41.140500, -8.613200
),
(
  'Azulejo Art & Stories',
  'azulejo-art-and-stories',
  'Portugal''s iconic blue tiles are more than decoration — they are narrative art. This tour takes you through Porto''s most stunning azulejo collections, from the grand São Bento Railway Station to the ornate Igreja do Carmo, revealing the history, symbolism, and craftsmanship behind each panel.',
  'Discover the history and symbolism behind Porto''s world-famous blue tile art.',
  120, 30, 14, 'azulejo', 'porto',
  'https://upload.wikimedia.org/wikipedia/commons/d/d3/%C3%93bidos_-_Varanda_%285414515924%29.jpg',
  '{}',
  ARRAY['São Bento Station — 20,000 hand-painted tiles', 'Igreja do Carmo — baroque azulejo masterpiece', 'Chapel of Souls — fully tiled façade', 'Evolution of azulejo art from Moorish to modern', 'Hidden tile gems off the tourist trail'],
  'São Bento Railway Station Main Hall', 41.145600, -8.610200
),
(
  'Legends & Mysteries Night Tour',
  'legends-and-mysteries-night-tour',
  'As the sun sets over the Douro, a different Porto emerges. This evening tour takes you through dimly lit alleys and ancient squares, uncovering legends of hidden treasures, ghostly monks, and the darker chapters of Porto''s past. A unique experience blending history with storytelling under the city lights.',
  'Explore Porto after dark — legends, ghost stories, and the city''s hidden history.',
  120, 30, 15, 'nocturnal', 'porto',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Porto_nightscape_%288079816865%29.jpg/1280px-Porto_nightscape_%288079816865%29.jpg',
  '{}',
  ARRAY['Porto''s haunted spots and legendary tales', 'The mystery of the Clérigos Tower at night', 'Dark chapters of the Inquisition in Porto', 'Atmospheric walk through candlelit streets', 'Sunset views from Jardim do Morro'],
  'Clérigos Tower Base', 41.145800, -8.614600
),
(
  'Taste of Porto Food Walk',
  'taste-of-porto-food-walk',
  'Porto''s culinary traditions are deeply rooted in history. From the bustling Bolhão Market to hidden tascas, this tour traces the origins of Porto''s most iconic dishes — the francesinha, tripas à moda do Porto, and pastéis de nata — while exploring the neighborhoods that shaped them.',
  'A culinary journey through Porto''s markets, tascas, and the stories behind iconic dishes.',
  180, 50, 10, 'gastronomic', 'porto',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Francesinha_%282%29.jpg/1280px-Francesinha_%282%29.jpg',
  '{}',
  ARRAY['Bolhão Market — Porto''s historic food hub', 'The origin story of the francesinha sandwich', 'Traditional tascas with local tastings', 'Pastéis de nata from a century-old bakery', 'Why Porto locals are called ''tripeiros'''],
  'Bolhão Market Main Entrance', 41.149600, -8.605900
),
(
  'Literary Porto: From Camilo to Rowling',
  'literary-porto-from-camilo-to-rowling',
  'Porto has inspired writers for centuries. Walk in the footsteps of Camilo Castelo Branco, discover where JK Rowling found inspiration for Harry Potter, and visit the Lello Bookstore — one of the world''s most beautiful. This tour weaves literature, architecture, and history into a single, unforgettable narrative.',
  'Walk in the footsteps of writers — from Camilo Castelo Branco to JK Rowling''s Porto.',
  120, 30, 12, 'literary', 'porto',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Livraria_Lello_-_Porto_-_Portugal_%2818045390626%29.jpg/800px-Livraria_Lello_-_Porto_-_Portugal_%2818045390626%29.jpg',
  '{}',
  ARRAY['Livraria Lello — one of the world''s most beautiful bookshops', 'JK Rowling''s Porto: the cafés and streets that inspired Harry Potter', 'University of Porto''s literary legacy', 'Camilo Castelo Branco''s romantic Porto', 'Hidden literary cafés and bookshops'],
  'Praça dos Leões (Martires da Pátria)', 41.147200, -8.615900
);

-- Insert reviews (referencing tours by slug subquery)
insert into public.reviews (tour_id, guest_name, guest_country, rating, comment, is_approved) values
(
  (select id from public.tours where slug = 'porto-medieval-walking-tour'),
  'Sarah M.', 'United States', 5,
  'Fábio is an incredible guide! His knowledge of Porto''s medieval history is unmatched. We learned things you''d never find in a guidebook. Absolutely worth it!',
  true
),
(
  (select id from public.tours where slug = 'port-wine-heritage-trail'),
  'James T.', 'United Kingdom', 5,
  'The wine tasting was wonderful, but what made it special was the historical context. I finally understand why Port wine is so tied to this city. Highly recommend!',
  true
),
(
  (select id from public.tours where slug = 'azulejo-art-and-stories'),
  'Emily R.', 'Canada', 5,
  'I had no idea tiles could tell such stories! São Bento station will never look the same to me. Fábio''s expertise as an archaeologist really shines through.',
  true
),
(
  (select id from public.tours where slug = 'legends-and-mysteries-night-tour'),
  'Michael B.', 'Australia', 4,
  'Such a unique experience. The night atmosphere combined with the legends made it feel magical. My only wish: it could have been even longer!',
  true
),
(
  (select id from public.tours where slug = 'taste-of-porto-food-walk'),
  'Lisa & Mark K.', 'United States', 5,
  'Best food tour we''ve ever done. Fábio doesn''t just show you where to eat — he explains the history behind every dish. The francesinha backstory was fascinating.',
  true
);
