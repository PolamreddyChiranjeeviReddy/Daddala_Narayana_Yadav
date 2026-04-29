import type { SiteConfig } from './site'

export type Locale = 'en' | 'te'

const STORAGE_KEY = 'leader_locale'

export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (raw === 'en' || raw === 'te') return raw
  return null
}

export function storeLocale(locale: Locale) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, locale)
}

type UiKey =
  | 'languagePromptTitle'
  | 'languagePromptBody'
  | 'chooseEnglish'
  | 'chooseTelugu'
  | 'language'
  | 'about'
  | 'journey'
  | 'achievements'
  | 'media'
  | 'gallery'
  | 'contact'
  | 'menu'
  | 'openMenu'
  | 'closeMenu'
  | 'explore'
  | 'viewAchievements'
  | 'connect'
  | 'portfolio'
  | 'aboutDescription'
  | 'callSetLink'
  | 'directionsSetLink'
  | 'email'
  | 'phone'
  | 'office'
  | 'sendEmail'
  | 'rightsReserved'

const UI_STRINGS: Record<Locale, Record<UiKey, string>> = {
  en: {
    languagePromptTitle: 'Choose your language',
    languagePromptBody:
      'Do you want to continue in English or Telugu?\nతెలుగు లేదా English లో కొనసాగాలా?',
    chooseEnglish: 'Continue in English',
    chooseTelugu: 'తెలుగులో కొనసాగండి',
    language: 'Language',
    about: 'About',
    journey: 'Journey',
    achievements: 'Achievements',
    media: 'Media',
    gallery: 'Gallery',
    contact: 'Contact',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    explore: 'Explore',
    viewAchievements: 'View Achievements',
    connect: 'Connect',
    portfolio: 'Portfolio',
    aboutDescription:
      'A clear structure that helps visitors understand the leader in 30 seconds.',
    callSetLink: 'Call (set link)',
    directionsSetLink: 'Get Directions (set link)',
    email: 'Email',
    phone: 'Phone',
    office: 'Office',
    sendEmail: 'Send Email',
    rightsReserved: 'All rights reserved.',
  },
  te: {
    languagePromptTitle: 'భాషను ఎంచుకోండి',
    languagePromptBody:
      'తెలుగు లేదా English లో కొనసాగాలా?\nDo you want to continue in Telugu or English?',
    chooseEnglish: 'Continue in English',
    chooseTelugu: 'తెలుగులో కొనసాగండి',
    language: 'భాష',
    about: 'గురించి',
    journey: 'ప్రయాణం',
    achievements: 'సాధనలు',
    media: 'మీడియా',
    gallery: 'గ్యాలరీ',
    contact: 'సంప్రదించండి',
    menu: 'మెను',
    openMenu: 'మెను తెరవండి',
    closeMenu: 'మెను మూసివేయండి',
    explore: 'చూడండి',
    viewAchievements: 'సాధనలు చూడండి',
    connect: 'సంప్రదించండి',
    portfolio: 'పోర్ట్‌ఫోలియో',
    aboutDescription:
      '30 సెకన్లలో నాయకుడి గురించి స్పష్టంగా అర్థమయ్యేలా నిర్మిత సమాచారం.',
    callSetLink: 'కాల్ (లింక్ పెట్టాలి)',
    directionsSetLink: 'దిశలు (లింక్ పెట్టాలి)',
    email: 'ఈమెయిల్',
    phone: 'ఫోన్',
    office: 'కార్యాలయం',
    sendEmail: 'ఈమెయిల్ పంపండి',
    rightsReserved: 'అన్ని హక్కులు రిజర్వ్‌ చేయబడ్డాయి.',
  },
}

export function ui(locale: Locale, key: UiKey) {
  return UI_STRINGS[locale][key]
}

const STR_MAP_TE: Record<string, string> = {
  About: 'గురించి',
  Journey: 'ప్రయాణం',
  Achievements: 'సాధనలు',
  Media: 'మీడియా',
  'Media & interviews': 'మీడియా & ఇంటర్వ్యూలు',
  Gallery: 'గ్యాలరీ',
  Contact: 'సంప్రదించండి',
  Connect: 'సంప్రదించండి',

  Biography: 'జీవిత చరిత్ర',
  Interviews: 'ఇంటర్వ్యూలు',

  'Undergraduate education': 'అండర్‌గ్రాడ్యుయేట్ విద్య',
  'Graduate professional education': 'వృత్తి విద్య',
  'Election affidavit (Andhra Pradesh 2024)': 'ఎలక్షన్ అఫిడవిట్ (ఆంధ్రప్రదేశ్ 2024)',
  'Public engagement': 'ప్రజలతో అనుసంధానం',

  'Criminal Cases': 'కేసులు',
  'Assets (₹)': 'ఆస్తులు (₹)',
  'Liabilities (₹)': 'బాకీలు (₹)',
  Age: 'వయస్సు',

  'Election affidavit profile (Criminal & Asset Declaration)':
    'ఎలక్షన్ అఫిడవిట్ ప్రొఫైల్ (క్రిమినల్ & ఆస్తుల ప్రకటన)',

  'YSRCP · Kanigiri (Prakasam)': 'వైయస్సార్‌సీపీ · కనిగిరి (ప్రకాశం)',
  'Public service and community engagement': 'ప్రజాసేవ మరియు సమాజంతో అనుసంధానం',
  'Kanigiri, Prakasam, Andhra Pradesh, India':
    'కనిగిరి, ప్రకాశం, ఆంధ్రప్రదేశ్, భారతదేశం',
  'Service. Accountability. People-first governance.':
    'సేవ. బాధ్యత. ప్రజలే కేంద్రంగా పాలన.',
  'A public-facing profile built with clarity and proof links. Key facts below are based on the 2024 election affidavit data published via MyNeta (ADR).':
    'స్పష్టతతో, ఆధార లింకులతో రూపొందించిన పబ్లిక్ ప్రొఫైల్. క్రింద ఉన్న ముఖ్య వివరాలు MyNeta (ADR) ద్వారా ప్రచురించిన 2024 ఎన్నికల అఫిడవిట్ డేటాపై ఆధారపడ్డాయి.',

  'A concise profile: background, values, and philosophy.':
    'పరిచయం: నేపథ్యం, విలువలు, మరియు ఆలోచనా విధానం.',
  'A timeline of responsibility and milestones.':
    'బాధ్యతలు మరియు మైలురాళ్ల టైమ్‌లైన్.',
  'Latest media interviews and statements.':
    'తాజా మీడియా ఇంటర్వ్యూలు మరియు ప్రకటనలు.',
  'Key initiatives with measurable outcomes.':
    'కొలిచే ఫలితాలతో ముఖ్య కార్యక్రమాలు.',

  'A concise profile: background, values, and the work philosophy.':
    'పరిచయం: నేపథ్యం, విలువలు, మరియు పనితీరులో ఆలోచనా విధానం.',
  'A timeline of responsibility and leadership milestones.':
    'బాధ్యతలు మరియు నాయకత్వ మైలురాళ్ల టైమ్‌లైన్.',
  'Latest media appearances and official statements.':
    'తాజా మీడియా ప్రదర్శనలు మరియు అధికారిక ప్రకటనలు.',
  'Key initiatives with measurable outcomes and proof links.':
    'కొలిచే ఫలితాలు మరియు ఆధార లింకులతో కీలక కార్యక్రమాలు.',

  'Share an issue, request a meeting, or invite for a community program.':
    'సమస్యను తెలియజేయండి, మీటింగ్ కోరండి, లేదా సమాజ కార్యక్రమానికి ఆహ్వానించండి.',
  'Template content — replace with verified official information.':
    'ఇది నమూనా విషయం — ధృవీకరించిన అధికారిక సమాచారంతో మార్చండి.',
}

function toTeluguString(value: string) {
  return STR_MAP_TE[value] ?? value
}

export function toTeluguSite(siteEn: SiteConfig): SiteConfig {
  return {
    ...siteEn,
    leader: {
      ...siteEn.leader,
      // Keep name/title/lines as-is unless explicitly provided by backend in Telugu
      name: siteEn.leader.name,
      title: toTeluguString(siteEn.leader.title),
      roleLine: toTeluguString(siteEn.leader.roleLine),
      location: toTeluguString(siteEn.leader.location),
      heroLine: toTeluguString(siteEn.leader.heroLine),
      heroSubline: toTeluguString(siteEn.leader.heroSubline),
    },
    nav: siteEn.nav.map((n) => ({ ...n, label: toTeluguString(n.label) })),
    about: {
      headline: toTeluguString(siteEn.about.headline),
      cards: siteEn.about.cards.map((c) => ({
        ...c,
        title: toTeluguString(c.title),
        description: toTeluguString(c.description),
      })),
    },
    journey: {
      headline: toTeluguString(siteEn.journey.headline),
      items: siteEn.journey.items.map((it) => ({
        ...it,
        title: toTeluguString(it.title),
        detail: toTeluguString(it.detail),
      })),
    },
    achievements: {
      headline: toTeluguString(siteEn.achievements.headline),
      highlight: toTeluguString(siteEn.achievements.highlight),
      stats: siteEn.achievements.stats.map((s) => ({
        ...s,
        label: toTeluguString(s.label),
      })),
    },
    media: {
      headline: toTeluguString(siteEn.media.headline),
      items: siteEn.media.items.map((m) => ({
        ...m,
        title: toTeluguString(m.title),
        source: toTeluguString(m.source),
      })),
    },
    gallery: {
      headline: toTeluguString(siteEn.gallery.headline),
      items: siteEn.gallery.items.map((g) => ({
        ...g,
        alt: toTeluguString(g.alt),
        caption: toTeluguString(g.caption),
      })),
    },
    heroSlider: {
      items: siteEn.heroSlider.items.map((it) => ({
        ...it,
        alt: toTeluguString(it.alt),
      })),
    },
    contact: {
      headline: toTeluguString(siteEn.contact.headline),
      subheadline: toTeluguString(siteEn.contact.subheadline),
      socials: siteEn.contact.socials.map((s) => ({
        ...s,
        label: toTeluguString(s.label),
      })),
      phone: siteEn.contact.phone,
      address: siteEn.contact.address,
    },
    footer: {
      note: toTeluguString(siteEn.footer.note),
    },
  }
}
