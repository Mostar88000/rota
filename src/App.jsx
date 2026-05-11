import { useEffect, useRef, useState } from 'react'

const languages = [
  { code: 'bs', label: 'Bosanski', short: 'BS' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'en', label: 'English', short: 'EN' },
]

const content = {
  de: {
    ui: {
      menu: 'Menü',
      close: 'Schließen',
      language: 'Sprache wählen',
      maps: 'Google Maps öffnen',
      eyebrow: 'Mostar / ROTA 1996',
      prices: 'Preise',
      menuTitle: 'Speisekarte',
      location: 'Standort',
      locations: 'Standorte',
      hours: 'Öffnungszeiten',
      phone: 'Telefon',
    },
    nav: ['Home', 'Standort', 'Preise'],
    story: [
      {
        label: 'Ursprung',
        title: 'Mitten in Mostar',
        text: 'Mitten im Herzen von Mostar begann ROTA mit einer einfachen Idee: ehrliches Essen, echte Tradition und ein Ort, an dem Menschen zusammenkommen. Was mit Leidenschaft für bosnische Küche begann, wurde schnell zu einem festen Treffpunkt für Einheimische und Reisende aus aller Welt.',
      },
      {
        label: 'Handwerk',
        title: 'Tradition am Grill',
        text: 'Jeder Ćevap, jedes frisch gebackene Somun und jede Spezialität erzählt ein Stück unserer Geschichte - gemacht nach traditionellen Rezepten, mit Liebe und besten Zutaten. Der Duft vom Grill, das Lächeln unserer Gäste und die Wärme unserer Atmosphäre machen ROTA zu mehr als nur einem Restaurant.',
      },
      {
        label: 'Heute',
        title: 'Willkommen bei ROTA',
        text: 'Heute ist ROTA an zwei Standorten in Mostar zuhause - aber unser Herz bleibt dasselbe: Tradition bewahren, Geschmack teilen und jeden Gast wie Familie empfangen. Willkommen bei ROTA.',
      },
      {
        label: 'Genuss',
        title: 'Frisch auf den Tisch',
        text: 'Wenn der Grill glüht und das Somun warm serviert wird, entsteht genau dieser ROTA-Moment: unkompliziert, herzlich und voller Geschmack. Jeder Teller kommt mit dem Duft Mostars und der Einladung, sich Zeit zu nehmen.',
      },
      {
        label: 'Atmosphäre',
        title: 'Ein Platz zum Ankommen',
        text: 'Ob kurzer Mittagstisch, Abendessen mit Freunden oder eine Pause nach dem Spaziergang durch die Altstadt - bei ROTA findet jeder seinen Platz. Warmes Licht, ehrliche Küche und ein Service, der Gäste willkommen heißt.',
      },
      {
        label: 'Einladung',
        title: 'Gemeinsam schmeckt es besser',
        text: 'Unsere Küche ist gemacht zum Teilen: frisch gegrilltes Fleisch, duftendes Brot, Kajmak und Salate auf dem Tisch. Kommen Sie vorbei, bestellen Sie Ihre Favoriten und erleben Sie Mostar so, wie es schmecken soll.',
      },
    ],
    priceSections: [
      {
        title: 'Fleisch',
        items: [
          { name: 'Mostarski Ćevap ROTA', prices: ['15 Stk. 20,50 KM', '10 Stk. 14,00 KM', '7 Stk. 10,00 KM', '5 Stk. 7,50 KM'] },
          { name: 'Pljeskavica', prices: ['Groß 14,00 KM', 'Klein 7,50 KM', 'Scharf 14,00 KM'] },
          { name: 'Gourmet-Pljeskavica', prices: ['Groß 16,00 KM', 'Klein 11,00 KM'] },
          { name: 'Hausgemachte Sudžukice', prices: ['Groß 15,00 KM', 'Klein 8,50 KM'] },
          { name: 'Šiš Ćevap', prices: ['Groß 15,00 KM', 'Klein 8,50 KM'] },
          { name: 'Gefüllter Šiš Ćevap', prices: ['Groß 18,00 KM'] },
        ],
      },
      {
        title: 'Kalbfleisch',
        items: [
          { name: 'Kalbsspieße', prices: ['Groß 17,00 KM', 'Klein 10,00 KM'] },
          { name: 'Kalbsschnitzel', prices: ['Groß 17,00 KM'] },
          { name: 'Kalbsgeschnetzeltes', prices: ['Groß 17,00 KM', 'Klein 10,00 KM'] },
          { name: 'Kalbsnieren', prices: ['Groß 15,00 KM', 'Klein 9,00 KM'] },
          { name: 'Kalbsbries', prices: ['Groß 18,00 KM'] },
          { name: 'Kalbsleber', prices: ['Groß 16,00 KM', 'Klein 9,00 KM'] },
        ],
      },
      {
        title: 'Hähnchen',
        items: [
          { name: 'Hähnchenfilets', prices: ['Groß 14,00 KM', 'Klein 8,50 KM'] },
          { name: 'Hähnchenspieße', prices: ['Groß 14,00 KM', 'Klein 8,50 KM'] },
          { name: 'Hähnchenschenkel', prices: ['Groß 12,00 KM'] },
          { name: 'Hähnchensalat', prices: ['Groß 12,50 KM'] },
        ],
      },
      {
        title: 'Kombinationen',
        items: [
          { name: 'Fünf Ćevapi + kleine Pljeskavica', prices: ['15,00 KM'] },
          { name: 'Fünf Ćevapi + kleine Sudžukice', prices: ['15,50 KM'] },
          { name: 'Fünf Ćevapi + kleine Kalbsstreifen', prices: ['16,50 KM'] },
          { name: 'Fünf Ćevapi + kleine Filets', prices: ['16,00 KM'] },
        ],
      },
      {
        title: 'Beilagen',
        items: [
          { name: 'Kajmak', prices: ['4,00 KM'] },
          { name: 'Kajmak kleine Portion', prices: ['2,00 KM'] },
          { name: 'Somun', prices: ['1,00 KM'] },
          { name: 'Saisonsalat', prices: ['5,00 KM'] },
          { name: 'Sauermilch', prices: ['3,00 KM'] },
        ],
      },
      {
        title: 'Getränke',
        items: [
          { name: 'Coca-Cola', prices: ['4,00 KM'] },
          { name: 'Fanta Orange', prices: ['4,00 KM'] },
          { name: 'Fanta Lemon', prices: ['4,00 KM'] },
          { name: 'Sprite', prices: ['4,00 KM'] },
          { name: 'Schweppes Bitter Lemon', prices: ['4,00 KM'] },
          { name: 'Schweppes Tonic Water', prices: ['4,00 KM'] },
          { name: 'Cockta', prices: ['4,00 KM'] },
          { name: 'Mineralwasser', prices: ['3,00 KM'] },
          { name: 'Sensation', prices: ['3,50 KM'] },
        ],
      },
      {
        title: 'Natürliche Säfte',
        items: [
          { name: 'Pfirsich', prices: ['4,00 KM'] },
          { name: 'Apfel', prices: ['4,00 KM'] },
          { name: 'Erdbeere', prices: ['4,00 KM'] },
          { name: 'Heidelbeere', prices: ['4,00 KM'] },
          { name: 'Orangensaft', prices: ['4,00 KM'] },
          { name: 'Orangina', prices: ['4,50 KM'] },
          { name: 'Eistee', prices: ['4,00 KM'] },
          { name: 'Stilles Wasser', prices: ['3,00 KM'] },
          { name: 'Alkoholfreies Bier', prices: ['4,00 KM'] },
        ],
      },
    ],
  },
  bs: {
    ui: {
      menu: 'Meni',
      close: 'Zatvori',
      language: 'Odaberi jezik',
      maps: 'Otvori Google Maps',
      eyebrow: 'Mostar / ROTA 1996',
      prices: 'Cijene',
      menuTitle: 'Jelovnik',
      location: 'Lokacija',
      locations: 'Lokacije',
      hours: 'Radno vrijeme',
      phone: 'Telefon',
    },
    nav: ['Početna', 'Lokacija', 'Cijene'],
    story: [
      {
        label: 'Početak',
        title: 'U srcu Mostara',
        text: 'U srcu Mostara ROTA je počela s jednostavnom idejom: iskrena hrana, prava tradicija i mjesto gdje se ljudi okupljaju. Ono što je počelo iz ljubavi prema bosanskoj kuhinji brzo je postalo prepoznatljivo mjesto za domaće goste i putnike iz cijelog svijeta.',
      },
      {
        label: 'Zanat',
        title: 'Tradicija s roštilja',
        text: 'Svaki ćevap, svaki svježe pečeni somun i svaki specijalitet priča dio naše priče - pripremljen po tradicionalnim receptima, s ljubavlju i najboljim sastojcima. Miris roštilja, osmijeh naših gostiju i toplina atmosfere čine ROTU više od restorana.',
      },
      {
        label: 'Danas',
        title: 'Dobro došli u ROTU',
        text: 'Danas je ROTA kod kuće na dvije lokacije u Mostaru - ali naše srce ostaje isto: čuvati tradiciju, dijeliti ukus i svakog gosta dočekati kao porodicu. Dobro došli u ROTU.',
      },
    ],
    priceSections: [
      {
        title: 'Meso',
        items: [
          { name: 'Mostarski ćevap ROTA', prices: ['15 kom. 20,50 KM', '10 kom. 14,00 KM', '7 kom. 10,00 KM', '5 kom. 7,50 KM'] },
          { name: 'Pljeskavica', prices: ['Velika 14,00 KM', 'Mala 7,50 KM', 'Ljuta 14,00 KM'] },
          { name: 'Gurmanska pljeskavica', prices: ['Velika 16,00 KM', 'Mala 11,00 KM'] },
          { name: 'Domaće sudžukice', prices: ['Velika 15,00 KM', 'Mala 8,50 KM'] },
          { name: 'Šiš ćevap', prices: ['Velika 15,00 KM', 'Mala 8,50 KM'] },
          { name: 'Punjeni šiš ćevap', prices: ['Velika 18,00 KM'] },
        ],
      },
      {
        title: 'Teleće meso',
        items: [
          { name: 'Teleći ražnjići', prices: ['Velika 17,00 KM', 'Mala 10,00 KM'] },
          { name: 'Teleća šnicla', prices: ['Velika 17,00 KM'] },
          { name: 'Teleće krpice', prices: ['Velika 17,00 KM', 'Mala 10,00 KM'] },
          { name: 'Teleći bubrezi', prices: ['Velika 15,00 KM', 'Mala 9,00 KM'] },
          { name: 'Teleća brizla', prices: ['Velika 18,00 KM'] },
          { name: 'Teleća džigarica', prices: ['Velika 16,00 KM', 'Mala 9,00 KM'] },
        ],
      },
      {
        title: 'Piletina',
        items: [
          { name: 'Pileći fileti', prices: ['Velika 14,00 KM', 'Mala 8,50 KM'] },
          { name: 'Pileći ražnjići', prices: ['Velika 14,00 KM', 'Mala 8,50 KM'] },
          { name: 'Pileći batak', prices: ['Velika 12,00 KM'] },
          { name: 'Pileća salata', prices: ['Velika 12,50 KM'] },
        ],
      },
      {
        title: 'Kombinacije',
        items: [
          { name: 'Pet ćevapa + mala pljeskavica', prices: ['15,00 KM'] },
          { name: 'Pet ćevapa + male sudžukice', prices: ['15,50 KM'] },
          { name: 'Pet ćevapa + male krpice', prices: ['16,50 KM'] },
          { name: 'Pet ćevapa + mali fileti', prices: ['16,00 KM'] },
        ],
      },
      {
        title: 'Prilozi',
        items: [
          { name: 'Kajmak', prices: ['4,00 KM'] },
          { name: 'Kajmak mala porcija', prices: ['2,00 KM'] },
          { name: 'Somun', prices: ['1,00 KM'] },
          { name: 'Sezonska salata', prices: ['5,00 KM'] },
          { name: 'Kiselo mlijeko', prices: ['3,00 KM'] },
        ],
      },
      {
        title: 'Piće',
        items: [
          { name: 'Coca-Cola', prices: ['4,00 KM'] },
          { name: 'Fanta naranđa', prices: ['4,00 KM'] },
          { name: 'Fanta limun', prices: ['4,00 KM'] },
          { name: 'Sprite', prices: ['4,00 KM'] },
          { name: 'Schweppes Bitter Lemon', prices: ['4,00 KM'] },
          { name: 'Schweppes Tonic Water', prices: ['4,00 KM'] },
          { name: 'Cockta', prices: ['4,00 KM'] },
          { name: 'Mineralna voda', prices: ['3,00 KM'] },
          { name: 'Sensation', prices: ['3,50 KM'] },
        ],
      },
      {
        title: 'Prirodni sokovi',
        items: [
          { name: 'Breskva', prices: ['4,00 KM'] },
          { name: 'Jabuka', prices: ['4,00 KM'] },
          { name: 'Jagoda', prices: ['4,00 KM'] },
          { name: 'Borovnica', prices: ['4,00 KM'] },
          { name: 'Đus', prices: ['4,00 KM'] },
          { name: 'Orangina', prices: ['4,50 KM'] },
          { name: 'Ledeni čaj', prices: ['4,00 KM'] },
          { name: 'Prirodna voda', prices: ['3,00 KM'] },
          { name: 'Bezalkoholno pivo', prices: ['4,00 KM'] },
        ],
      },
    ],
  },
  en: {
    ui: {
      menu: 'Menu',
      close: 'Close',
      language: 'Choose language',
      maps: 'Open Google Maps',
      eyebrow: 'Mostar / ROTA 1996',
      prices: 'Prices',
      menuTitle: 'Menu',
      location: 'Location',
      locations: 'Locations',
      hours: 'Opening Hours',
      phone: 'Phone',
    },
    nav: ['Home', 'Location', 'Prices'],
    story: [
      {
        label: 'Origin',
        title: 'In the Heart of Mostar',
        text: 'In the heart of Mostar, ROTA began with a simple idea: honest food, real tradition, and a place where people come together. What started with a passion for Bosnian cuisine quickly became a familiar meeting point for locals and travelers from around the world.',
      },
      {
        label: 'Craft',
        title: 'Tradition on the Grill',
        text: 'Every ćevap, every freshly baked somun, and every specialty tells a part of our story - made from traditional recipes, with care and the best ingredients. The scent of the grill, the smiles of our guests, and the warmth of the atmosphere make ROTA more than a restaurant.',
      },
      {
        label: 'Today',
        title: 'Welcome to ROTA',
        text: 'Today, ROTA is home at two locations in Mostar - but our heart stays the same: preserve tradition, share flavor, and welcome every guest like family. Welcome to ROTA.',
      },
    ],
    priceSections: [
      {
        title: 'Meat',
        items: [
          { name: 'Mostar Ćevap ROTA', prices: ['15 pcs. 20,50 KM', '10 pcs. 14,00 KM', '7 pcs. 10,00 KM', '5 pcs. 7,50 KM'] },
          { name: 'Pljeskavica', prices: ['Large 14,00 KM', 'Small 7,50 KM', 'Spicy 14,00 KM'] },
          { name: 'Gourmet Pljeskavica', prices: ['Large 16,00 KM', 'Small 11,00 KM'] },
          { name: 'Homemade Sudžukice', prices: ['Large 15,00 KM', 'Small 8,50 KM'] },
          { name: 'Shish Ćevap', prices: ['Large 15,00 KM', 'Small 8,50 KM'] },
          { name: 'Stuffed Shish Ćevap', prices: ['Large 18,00 KM'] },
        ],
      },
      {
        title: 'Veal',
        items: [
          { name: 'Veal Skewers', prices: ['Large 17,00 KM', 'Small 10,00 KM'] },
          { name: 'Veal Steak', prices: ['Large 17,00 KM'] },
          { name: 'Veal Strips', prices: ['Large 17,00 KM', 'Small 10,00 KM'] },
          { name: 'Veal Kidneys', prices: ['Large 15,00 KM', 'Small 9,00 KM'] },
          { name: 'Veal Sweetbread', prices: ['Large 18,00 KM'] },
          { name: 'Veal Liver', prices: ['Large 16,00 KM', 'Small 9,00 KM'] },
        ],
      },
      {
        title: 'Chicken',
        items: [
          { name: 'Chicken Fillets', prices: ['Large 14,00 KM', 'Small 8,50 KM'] },
          { name: 'Chicken Skewers', prices: ['Large 14,00 KM', 'Small 8,50 KM'] },
          { name: 'Chicken Leg', prices: ['Large 12,00 KM'] },
          { name: 'Chicken Salad', prices: ['Large 12,50 KM'] },
        ],
      },
      {
        title: 'Combinations',
        items: [
          { name: 'Five Ćevapi + Small Pljeskavica', prices: ['15,00 KM'] },
          { name: 'Five Ćevapi + Small Sudžukice', prices: ['15,50 KM'] },
          { name: 'Five Ćevapi + Small Veal Strips', prices: ['16,50 KM'] },
          { name: 'Five Ćevapi + Small Fillets', prices: ['16,00 KM'] },
        ],
      },
      {
        title: 'Side Dishes',
        items: [
          { name: 'Kajmak', prices: ['4,00 KM'] },
          { name: 'Kajmak Small Portion', prices: ['2,00 KM'] },
          { name: 'Somun', prices: ['1,00 KM'] },
          { name: 'Seasonal Salad', prices: ['5,00 KM'] },
          { name: 'Sour Milk', prices: ['3,00 KM'] },
        ],
      },
      {
        title: 'Drinks',
        items: [
          { name: 'Coca-Cola', prices: ['4,00 KM'] },
          { name: 'Fanta Orange', prices: ['4,00 KM'] },
          { name: 'Fanta Lemon', prices: ['4,00 KM'] },
          { name: 'Sprite', prices: ['4,00 KM'] },
          { name: 'Schweppes Bitter Lemon', prices: ['4,00 KM'] },
          { name: 'Schweppes Tonic Water', prices: ['4,00 KM'] },
          { name: 'Cockta', prices: ['4,00 KM'] },
          { name: 'Mineral Water', prices: ['3,00 KM'] },
          { name: 'Sensation', prices: ['3,50 KM'] },
        ],
      },
      {
        title: 'Natural Drinks',
        items: [
          { name: 'Peach', prices: ['4,00 KM'] },
          { name: 'Apple', prices: ['4,00 KM'] },
          { name: 'Strawberry', prices: ['4,00 KM'] },
          { name: 'Blueberry', prices: ['4,00 KM'] },
          { name: 'Orange Juice', prices: ['4,00 KM'] },
          { name: 'Orangina', prices: ['4,50 KM'] },
          { name: 'Iced Tea', prices: ['4,00 KM'] },
          { name: 'Natural Water', prices: ['3,00 KM'] },
          { name: 'Non-Alcoholic Beer', prices: ['4,00 KM'] },
        ],
      },
    ],
  },
}

const extraStories = {
  bs: [
    {
      label: 'Uzitak',
      title: 'Svjeze na stolu',
      text: 'Kada rostilj zamirise, a somun dodje topao na sto, nastaje pravi ROTA trenutak: jednostavan, srdacan i pun ukusa. Svaki tanjir nosi miris Mostara i poziv da se ostane jos malo.',
    },
    {
      label: 'Atmosfera',
      title: 'Mjesto za predah',
      text: 'Bilo da dolazite na brzi rucak, veceru s prijateljima ili pauzu poslije setnje starim gradom - u ROTI svako lako pronadje svoje mjesto. Topla atmosfera, domaci ukus i docek koji se pamti.',
    },
    {
      label: 'Poziv',
      title: 'Zajedno je ukusnije',
      text: 'Nasa kuhinja je stvorena za dijeljenje: meso s rostilja, mirisni somun, kajmak i salate na stolu. Svratite, narucite ono sto volite i dozivite Mostar kroz okus koji ostaje.',
    },
  ],
  en: [
    {
      label: 'Flavor',
      title: 'Fresh from the Grill',
      text: 'When the grill is glowing and warm somun reaches the table, that is the ROTA moment: honest, generous, and full of flavor. Every plate carries the scent of Mostar and an invitation to slow down.',
    },
    {
      label: 'Atmosphere',
      title: 'A Place to Settle In',
      text: 'Whether it is a quick lunch, dinner with friends, or a pause after walking through the Old Town, ROTA gives every guest a comfortable place to land. Warm light, real food, and a welcome that feels personal.',
    },
    {
      label: 'Invitation',
      title: 'Better Shared',
      text: 'Our kitchen is made for the table: grilled specialties, fragrant bread, kajmak, and fresh salads meant to be enjoyed together. Come by, order your favorites, and taste Mostar the ROTA way.',
    },
  ],
}

const storeImageSources = [
  '/ROTA_1996_3.png',
  '/ROTA_1996_2.png',
  '/ROTA_1996_1.png',
  '/ROTA_1996_4.jpeg',
  '/ROTA_1996_5.jpeg',
  '/ROTA_1996_6.jpeg',
]

const locations = [
  {
    name: 'ROTA Old Town',
    hours: ['Mo-So 10:00-22:00'],
    address: 'Onešćukova 7, 88000 Mostar, Bosnien und Herzegowina',
    maps: 'https://www.google.com/maps/search/?api=1&query=Rota%20One%C5%A1%C4%87ukova%207%20Mostar',
  },
  {
    name: 'ROTA Carina',
    hours: ['Mo-Sa 08:00-23:00', 'So 13:00-23:00'],
    phone: '+387 36 550-714',
    address: 'Mladena Balorde, 88000 Mostar, Bosnien und Herzegowina',
    maps: 'https://www.google.com/maps/search/?api=1&query=Rota%20Mladena%20Balorde%20Mostar',
  },
]

const navTargets = ['#scene-1', '#story', '#prices']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [activeScene, setActiveScene] = useState(0)
  const [selectedLanguage, setSelectedLanguage] = useState('de')
  const [pointer, setPointer] = useState({ x: 50, y: 50 })
  const t = content[selectedLanguage]
  const storyItems = t.story.length === storeImageSources.length ? t.story : [...t.story, ...(extraStories[selectedLanguage] || [])]
  const activeLanguage = languages.find((language) => language.code === selectedLanguage)

  useEffect(() => {
    const handlePointer = (event) => {
      setPointer({
        x: Math.round((event.clientX / window.innerWidth) * 100),
        y: Math.round((event.clientY / window.innerHeight) * 100),
      })
    }

    window.addEventListener('pointermove', handlePointer)
    return () => window.removeEventListener('pointermove', handlePointer)
  }, [])

  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-scene]')]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveScene(Number(visible.target.getAttribute('data-scene')))
        }
      },
      { threshold: [0.35, 0.55, 0.75] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="experience" style={{ '--x': `${pointer.x}%`, '--y': `${pointer.y}%` }}>
      <SketchBackdrop direction="center" />
      <ParticleField />
      <div className="grain" aria-hidden="true" />

      <header className="chrome">
        <button className="menu-trigger" type="button" onClick={() => setMenuOpen(true)}>{t.ui.menu}</button>
        <div className="language-switcher">
          <button
            className="language-toggle"
            type="button"
            aria-label={t.ui.language}
            aria-expanded={languageOpen}
            onClick={() => setLanguageOpen((open) => !open)}
          >
            <span className="globe-icon" aria-hidden="true" />
            <span>{activeLanguage.short}</span>
          </button>
          <div className={`language-menu${languageOpen ? ' open' : ''}`}>
            {languages.map((language) => (
              <button
                className={language.code === selectedLanguage ? 'active' : ''}
                type="button"
                key={language.code}
                onClick={() => {
                  setSelectedLanguage(language.code)
                  setLanguageOpen(false)
                }}
              >
                <span>{language.short}</span>
                <strong>{language.label}</strong>
              </button>
            ))}
          </div>
        </div>
      </header>

      <aside className="progress-rail" aria-label="Seitennavigation">
        {t.nav.map((label, index) => (
          <a className={activeScene === index ? 'active' : ''} href={navTargets[index]} key={label} aria-label={label}>
            <strong>{label}</strong>
          </a>
        ))}
      </aside>

      <main id="top">
        <section className="intro" id="scene-1" data-scene="0">
          <div className="intro-video" aria-label="ROTA Grillvideo">
            <video autoPlay muted loop playsInline preload="auto">
              <source src="/cevape.mp4" type="video/mp4" />
            </video>
          </div>

          <Reveal className="intro-copy">
            <p className="eyebrow">{t.ui.eyebrow}</p>
            <h1>
              ROTA
              <span>Mostar</span>
            </h1>
          </Reveal>
        </section>

        <section className="story-locations" id="story" data-scene="1">
          <div className="section-intro">
            <p className="eyebrow">{t.ui.location}</p>
            <h2>{t.ui.locations}</h2>
          </div>

          <div className="story-grid">
            {storyItems.map((image, index) => (
              <Reveal className="story-card" delay={index * 110} key={image.title}>
                <img src={storeImageSources[index]} alt={`${image.title} bei ROTA Mostar`} />
                <div>
                  <span>{image.label}</span>
                  <h3>{image.title}</h3>
                  <p>{image.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </section>

        <section className="price-board" id="prices" data-scene="2">
          <div className="price-heading">
            <p className="eyebrow">{t.ui.prices}</p>
            <h2>{t.ui.menuTitle}</h2>
          </div>

          <div className="price-grid">
            {t.priceSections.map((section, index) => (
              <Reveal as="article" className="price-section" delay={index * 70} key={section.title}>
                <h3>{section.title}</h3>
                <div className="price-list">
                  {section.items.map((item) => (
                    <div className="price-item" key={`${section.title}-${item.name}`}>
                      <div className="price-name">
                        <strong>{item.name}</strong>
                      </div>
                      <div className="price-values">
                        {item.prices.map((price) => (
                          <span key={price}>{price}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="location-board" delay={160}>
          <p className="eyebrow">{t.ui.locations}</p>
          <div className="location-list">
            {locations.map((location) => (
              <article className="location-link" key={location.name}>
                <strong>{location.name}</strong>
                <span>{location.address}</span>
                <div className="location-meta">
                  <div className="location-hours">
                    <small>{t.ui.hours}</small>
                    {location.hours.map((hours) => (
                      <span key={`${location.name}-${hours}`}>{hours}</span>
                    ))}
                  </div>
                  {location.phone && (
                    <a className="location-phone" href={`tel:${location.phone.replace(/[\s-]/g, '')}`}>
                      <small>{t.ui.phone}</small>
                      <span>{location.phone}</span>
                    </a>
                  )}
                </div>
                <a className="location-map" href={location.maps} target="_blank" rel="noreferrer">{t.ui.maps}</a>
              </article>
            ))}
          </div>
        </Reveal>
      </main>

      <div className={`overlay-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <SketchBackdrop className="menu-sketch" direction="center" active={menuOpen} placement="menu" />
        <button type="button" className="close-menu" onClick={() => setMenuOpen(false)}>{t.ui.close}</button>
        <nav aria-label="Overlay Navigation">
          {t.nav.map((label, index) => (
            <a href={navTargets[index]} onClick={() => setMenuOpen(false)} key={label}>{label}</a>
          ))}
        </nav>
        <div className="overlay-mark">1996</div>
      </div>
    </div>
  )
}

function SketchBackdrop({ className = '', direction = 'ltr', active = true, placement = 'page' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const image = new Image()
    let animationId
    let points = []
    let startTime = 0
    let viewport = { width: window.innerWidth, height: window.innerHeight, ratio: window.devicePixelRatio || 1 }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: Math.min(window.devicePixelRatio || 1, 1.75),
      }
      canvas.width = viewport.width * viewport.ratio
      canvas.height = viewport.height * viewport.ratio
      canvas.style.width = `${viewport.width}px`
      canvas.style.height = `${viewport.height}px`
      ctx.setTransform(viewport.ratio, 0, 0, viewport.ratio, 0, 0)
    }

    const buildPoints = () => {
      const sampleWidth = 960
      const sampleHeight = Math.round((image.naturalHeight / image.naturalWidth) * sampleWidth)
      const sampler = document.createElement('canvas')
      const samplerCtx = sampler.getContext('2d', { willReadFrequently: true })
      sampler.width = sampleWidth
      sampler.height = sampleHeight
      samplerCtx.drawImage(image, 0, 0, sampleWidth, sampleHeight)

      const imageData = samplerCtx.getImageData(0, 0, sampleWidth, sampleHeight)
      const data = imageData.data
      const nextPoints = []

      for (let y = 0; y < sampleHeight; y += 3) {
        for (let x = 0; x < sampleWidth; x += 3) {
          const index = (y * sampleWidth + x) * 4
          const brightness = (data[index] + data[index + 1] + data[index + 2]) / 3
          if (data[index + 3] > 20 && brightness > 118) {
            const nx = x / sampleWidth
            const ny = y / sampleHeight
            const jitter = Math.sin(x * 0.037 + y * 0.071) * 0.045
            const horizontalOrder = direction === 'center' ? Math.abs(nx - 0.5) * 2 : direction === 'rtl' ? 1 - nx : nx
            nextPoints.push({
              x: nx,
              y: ny,
              order: (direction === 'center' ? 1 - horizontalOrder : horizontalOrder) * 0.78 + ny * 0.18 + jitter,
              alpha: Math.min(1, (brightness - 118) / 120),
            })
          }
        }
      }

      points = nextPoints
    }

    const draw = (time = 0) => {
      const width = viewport.width
      const height = viewport.height
      ctx.clearRect(0, 0, width, height)

      if (points.length && active) {
        const imageAspect = image.naturalWidth / image.naturalHeight
        const isMobileMenu = placement === 'menu' && width <= 720
        const drawWidth = isMobileMenu ? width * 1.62 : Math.min(width * 1.12, 1520)
        const drawHeight = drawWidth / imageAspect
        const originX = (width - drawWidth) / 2
        const originY = isMobileMenu ? height * 0.28 : Math.max(54, height * 0.08)
        const elapsed = Math.max(0, time - startTime)
        const loop = reduceMotion ? 0.78 : (elapsed % 8800) / 8800
        const reveal = reduceMotion ? 1 : Math.min(loop / 0.72, 1)
        const fadeOut = reduceMotion || loop < 0.78 ? 1 : Math.max(0, 1 - (loop - 0.78) / 0.22)
        const head = reveal * 1.16 - 0.08
        const tail = Math.max(0, head - 0.34)

        ctx.save()
        ctx.globalCompositeOperation = 'lighter'

        points.forEach((point, index) => {
          if (point.order > head) return

          const leadingEdge = point.order > tail ? 0.48 + ((head - point.order) / Math.max(head - tail, 0.01)) * 0.52 : 1
          const flicker = 0.82 + Math.sin(time * 0.006 + index * 0.41) * 0.18
          const alpha = point.alpha * leadingEdge * fadeOut * flicker
          if (alpha <= 0.03) return

          const x = originX + point.x * drawWidth
          const y = originY + point.y * drawHeight
          const size = point.alpha > 0.62 ? 1.25 : 0.9

          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(alpha * 0.64, 0.62)})`
          ctx.fillRect(x, y, size, size)

          if (point.order > tail && index % 7 === 0) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(alpha * 0.18, 0.18)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x - 8, y)
            ctx.lineTo(x + 8, y)
            ctx.stroke()
          }
        })

        ctx.restore()
      }

      animationId = requestAnimationFrame(draw)
    }

    image.onload = () => {
      startTime = performance.now()
      resize()
      buildPoints()
      draw()
    }
    image.src = '/Mostar.png'

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [active, direction, placement])

  return <canvas className={`sketch-backdrop${className ? ` ${className}` : ''}`} ref={canvasRef} aria-hidden="true" />
}

function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const pointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 }
    const particles = Array.from({ length: 96 }, (_, index) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: Math.cos(index) * 0.18,
      vy: Math.sin(index) * 0.18,
      size: 1 + Math.random() * 2.7,
    }))
    let frame = 0
    let animationId

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const move = (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    }

    const draw = () => {
      frame += 0.008
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.fillStyle = 'rgba(7, 7, 7, 0.28)'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      particles.forEach((particle, index) => {
        const dx = pointer.x - particle.x
        const dy = pointer.y - particle.y
        const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1)
        const pull = Math.min(0.018, 18 / (distance * distance))

        particle.vx += dx * pull * 0.015
        particle.vy += dy * pull * 0.015
        particle.vx += Math.sin(frame + index) * 0.006
        particle.vy += Math.cos(frame + index * 0.7) * 0.006
        particle.vx *= 0.985
        particle.vy *= 0.985
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < -20) particle.x = window.innerWidth + 20
        if (particle.x > window.innerWidth + 20) particle.x = -20
        if (particle.y < -20) particle.y = window.innerHeight + 20
        if (particle.y > window.innerHeight + 20) particle.y = -20

        ctx.beginPath()
        ctx.fillStyle = `rgba(245, 176, 92, ${0.15 + Math.sin(frame + index) * 0.07})`
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particles.slice(index + 1).forEach((other) => {
          const lx = other.x - particle.x
          const ly = other.y - particle.y
          const linkDistance = Math.sqrt(lx * lx + ly * ly)
          if (linkDistance < 132) {
            ctx.strokeStyle = `rgba(245, 176, 92, ${0.065 * (1 - linkDistance / 132)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', move)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', move)
    }
  }, [])

  return <canvas className="particle-field" ref={canvasRef} aria-hidden="true" />
}

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default App
