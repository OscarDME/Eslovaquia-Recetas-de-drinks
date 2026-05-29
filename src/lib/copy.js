// ─────────────────────────────────────────────────────────────────────────────
// COPY.JS — Zdroj VŠETKÉHO viditeľného textu pre landing page.
// Doc §7: Žiadny natvrdo nakódovaný text v komponentoch. Všetko, čo je na obrazovke, je tu.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  // ── SEO / METADATA (Číta to Layout.astro) ──────────────────────────────────
  metadata: {
    lang: 'sk',
    title: '150 receptov na prémiové kokteily u vás doma',
    description:
      'Párty kokteily podľa overených receptov — dostupné suroviny a rýchla príprava. Ohúrte priateľov, ušetrite na drahých baroch a staňte sa hviezdou večera. Obsahuje exkluzívne bonusy.',
    canonical: 'https://150receitascopao.netlify.app',
    ogImage: '/og-cover.jpg',
    ogType: 'website',
    siteName: 'SVET KOKTEILOV',
  },

  // ── 1. TIMER STICKY HLAVIČKA ────────────────────────────────────────────────
  timerBar: {
    icon: '⏰',
    label: 'Ponuka vyprší za:',
    initialMinutes: 9,
    initialSeconds: 57,
  },

  // ── 2. HERO ───────────────────────────────────────────────────────────────
  hero: {
    tag: '🍋 Exkluzívna ponuka',
    titleHighlight: '150 receptov na úžasné kokteily',
    titleConnector: 'pre vaše',
    titleHighlightGreen: 'maximálne potešenie',
    titleEnd: 'Aj keď ste úplný začiatočník',
    deliveryLabel: 'Okamžitý prístup cez',
    deliveryChannels: [
      { label: 'WhatsApp', kind: 'whatsapp' },
      { label: 'E-mail', kind: 'email' },
    ],
    videoAlt: 'Predstavenie balíčka 150 receptov na domáce kokteily',
    ctaLabel: '✅ CHCEM MOJE RECEPTY EŠTE DNES',
    ctaSub: '🔒 100% bezpečný nákup • Okamžitý prístup',
  },

  // ── 3. VÝHODY ─────────────────────────────────────────────────────────
  benefits: {
    intro:
      'Recepty stvorené pre čistý pôžitok — bežné suroviny, rýchla príprava,',
    introStrong: 'neskutočná chuť a vzhľad, ktorým ohúrite každého hosťa!',
    items: [
      'Namiešať akýkoľvek kokteil bez predchádzajúcich skúseností',
      'Čarovať za barom bez drahého profi vybavenia',
      'Vychutnávať si overené recepty z bežne dostupných surovín',
      'Zahviezdiť na každej domácej párty, chate či posedení s priateľmi',
    ],
    ctaLabel: '🍹 CHCEM MOJE RECEPTY EŠTE DNES',
  },

  // ── 4. KARUSEL S RECEPTAMI ────────────────────────────────────────────────
  carousel: {
    title: '🍹 Ochutnávka receptov, ktoré si',
    titleHighlight: 'užijete s priateľmi!',
    slides: [
      { caption: 'Sladký bozk', alt: 'Kokteil Sladký bozk' },
      {
        caption: 'Španielske víno s marakujou',
        alt: 'Kokteil Španielske víno s marakujou',
      },
      { caption: 'Krémové MaracuBeats', alt: 'Kokteil Krémové MaracuBeats' },
      { caption: 'Kokteil s cukríkmi Halls', alt: 'Kokteil s cukríkmi Halls' },
      { caption: 'Letný vánok', alt: 'Kokteil Letný vánok' },
      {
        caption: 'Caipirinha s marakujou a kávou',
        alt: 'Kokteil Caipirinha s marakujou a kávou',
      },
    ],
    prevLabel: 'Predchádzajúci slajd',
    nextLabel: 'Ďalší slajd',
    dotLabel: 'Na slajd',
  },

  // ── 5. BONUSY ──────────────────────────────────────────────────────────────
  bonuses: {
    title: '🎁 A samozrejme, nesmú chýbať',
    titleHighlight: 'BONUSY!',
    items: [
      {
        tag: 'Bonus 1',
        title: '50 receptov na párty shoty a punče',
        description: 'Ideálne drinky, ktoré rozprúdia zábavu. Rýchle na prípravu, stvorené pre partiu.',
        alt: '50 receptov na párty shoty a punče',
      },
      {
        tag: 'Bonus 2',
        title: 'Šikovný nákupný zoznam — ako ušetriť peňaženku',
        description:
          'Zistite presne, čo kúpiť pre top kokteily bez toho, aby ste museli nechať výplatu v drahých baroch.',
        alt: 'Nákupný zoznam a kalkulačka',
      },
      {
        tag: 'Bonus 3',
        title: '✅ Príručka: Ako zorganizovať dokonalý kokteilový večer',
        description: 'Hotové nápady a kroky k vytvoreniu nezabudnuteľného zážitku, z ktorého padnú hosťom sánky.',
        alt: 'Manuál pre domácu párty',
      },
      {
        tag: 'Bonus 4',
        title: 'Video lekcia: Ako zdobiť a servírovať ako profík',
        description:
          'Osvojte si tajomstvá dokonalej prezentácie, ktorá z obyčajného drinku spraví 5-hviezdičkové majstrovské dielo.',
        alt: 'Video lekcia zdobenia kokteilov',
      },
    ],
  },

  // ── 6. CENY ──────────────────────────────────────────────────────────────
  pricing: {
    sectionId: 'precos',
    title: 'Vyberte si, ako chcete dnes začať:',
    complete: {
      badge: '⭐ Najpredávanejší',
      title: 'Kompletný balík: 150+ receptov na kokteily',
      descriptionLead: '150+ receptov na úžasné domáce kokteily + všetky',
      descriptionStrong: 'exkluzívne bonusy,',
      descriptionTail: 'vďaka ktorým sa stanete hviezdnym domácim barmanom.',
      mockupAlt: 'Ukážka kompletného balíka 150 receptov',
      includesLabel: '🎁 Obsahuje všetky bonusy:',
      items: [
        '150+ receptov na prémiové kokteily',
        'Zoznam cenovo dostupných alternatív drahého alkoholu',
        'Sprievodca šikovným nákupom surovín',
        'Manuál pre dokonalú domácu párty',
        'Video lekcia profesionálneho zdobenia',
      ],
      strikePrice: 'Pôvodne 29.90 €',
      price: '8.90 €',
      priceNote: 'okamžitý prístup',
      ctaLabel: '🛒 CHCEM KOMPLETNÝ BALÍK',
      footer: '✅ Okamžitý prístup · E-mail + WhatsApp · 14-dňová záruka',
    },
  },

  // ── 7. ZÁRUKA ───────────────────────────────────────────────────────────
  guarantee: {
    icon: '🛡️',
    title: '14-dňová garancia vrátenia peňazí',
    description:
      'Ak z akéhokoľvek dôvodu nebudete nadšení, vrátime vám peniaze do posledného centu. Bez zbytočných otázok a naťahovania.',
  },

  // ── 8. FAQ (Často kladené otázky) ────────────────────────────────────────────────
  faq: {
    title: 'Často kladené',
    titleHighlight: 'otázky:',
    items: [
      {
        q: 'Musím mať nejaké skúsenosti, aby som ich zvládol namiešať?',
        a: 'Absolútne nie! Recepty sú vysvetlené tak jednoducho, že ich zvládne pripraviť každý, aj keď ste doteraz nikdy nedržali v ruke šejker.',
      },
      {
        q: 'Potrebujem drahé šejkre a profi vybavenie?',
        a: 'Vôbec. Všetko si hravo pripravíte doma s bežným kuchynským náradím, ktoré už určite máte v zásuvke.',
      },
      {
        q: 'Na aké príležitosti sa tieto drinky hodia?',
        a: 'Doslova na všetko! Od večerného relaxu po ťažkom dni v práci, cez romantickú večeru, až po poriadnu domácu párty či chatu s kamošmi.',
      },
      {
        q: 'Sú potrebné suroviny drahé?',
        a: 'Nie. Vďaka nášmu šikovnému nákupnému zoznamu sa naučíte, ako dosiahnuť prémiovú chuť s bežnými produktmi z lokálneho supermarketu.',
      },
      {
        q: 'Ako získam prístup po zaplatení?',
        a: 'Prístup je okamžitý! Akonáhle platba prejde, všetko vám pošleme priamo na e-mail a WhatsApp.',
      },
      {
        q: 'Mám nejakú záruku, ak by sa mi to nepáčilo?',
        a: 'Jasné! Máte k dispozícii celých 14 dní záruky. Ak nebudete spokojní, vrátime vám 100 % peňazí späť.',
      },
    ],
  },

  // ── 9. NALIEHAVOSŤ ──────────────────────────────────────────────────────────
  urgency: {
    text: '⏰ Neodkladajte to — víkend sa blíži a s ním ďalší nudný večer. Zmeňte to ešte dnes!',
  },

  // ── 10. ZÁVEREČNÉ CTA ─────────────────────────────────────────────────────────
  finalCta: {
    ctaLabel: '🍹 CHCEM PRÍSTUP K 150 RECEPTOM EŠTE DNES',
    subText: '🔒 Okamžitý prístup • 14-dňová záruka • Bezpečná platba',
  },

  // ── 11. BEZPEČNOSŤ (odznaky) ────────────────────────────────────────────────
  security: {
    items: [
      { icon: '🔒', label: 'SSL Ochrana' },
      { icon: '💳', label: 'Bezpečná platba' },
      { icon: '📲', label: 'Okamžitý prístup' },
    ],
  },

  // ── 12. FOOTER ────────────────────────────────────────────────────────────
  footer: {
    text: '© 2026 · SVET KOKTEILOV · Všetky práva vyhradené',
  },

  // ── A11Y / pomocný text ──
  a11y: {
    skipToContent: 'Prejsť na hlavný obsah',
  },
};