export type NavItem = { label: string; href: string }

export type SiteConfig = {
  leader: {
    name: string
    title: string
    roleLine: string
    location: string
    heroLine: string
    heroSubline: string
    email: string
  }
  nav: NavItem[]
  about: {
    headline: string
    cards: Array<{ title: string; description: string; href: string }>
  }
  journey: {
    headline: string
    items: Array<{ year: string; title: string; detail: string }>
  }
  achievements: {
    headline: string
    highlight: string
    stats: Array<{ label: string; value: number; suffix?: string }>
  }
  media: {
    headline: string
    items: Array<{ title: string; source: string; date: string; href: string }>
  }
  gallery: {
    headline: string
    items: Array<{ src: string; alt: string; caption: string }>
  }
  heroSlider: {
    items: Array<{ src: string; alt: string }>
  }
  contact: {
    headline: string
    subheadline: string
    phone: string
    address: string
    socials: Array<{ label: string; href: string }>
  }
  footer: {
    note: string
  }
}

export const defaultSite: SiteConfig = {
  leader: {
    name: 'Daddala Narayana',
    title: 'YSRCP · Kanigiri (Prakasam)',
    roleLine: 'Public service and community engagement',
    location: 'Kanigiri, Prakasam, Andhra Pradesh, India',
    heroLine: 'Service. Accountability. People-first governance.',
    heroSubline:
      'A public-facing profile built with clarity and proof links. Key facts below are based on the 2024 election affidavit data published via MyNeta (ADR).',
    email: 'contact@example.com',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Media', href: '#media' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  about: {
    headline: 'About',
    cards: [
      {
        title: 'Biography',
        description:
          'A concise profile: background, values, and the work philosophy.',
        href: '#about',
      },
      {
        title: 'Journey',
        description:
          'A timeline of responsibility and leadership milestones.',
        href: '#journey',
      },
      {
        title: 'Interviews',
        description:
          'Latest media appearances and official statements.',
        href: '#media',
      },
      {
        title: 'Achievements',
        description:
          'Key initiatives with measurable outcomes and proof links.',
        href: '#achievements',
      },
    ],
  },
  journey: {
    headline: 'Journey',
    items: [
      {
        year: '2004',
        title: 'Undergraduate education',
        detail: 'B.Sc (G.C. & YPN Degree College, Kanigiri) — as per affidavit record.',
      },
      {
        year: '2006',
        title: 'Graduate professional education',
        detail: 'B.Ed (M.V.J. College of Education, Bangalore) — as per affidavit record.',
      },
      {
        year: '2024',
        title: 'Election affidavit (Andhra Pradesh 2024)',
        detail: 'Constituency: Kanigiri (Prakasam). Party: YSRCP. Key disclosures: age, assets, liabilities, cases.',
      },
      {
        year: 'Now',
        title: 'Public engagement',
        detail: 'Ongoing constituency-focused outreach and issue follow-up.',
      },
    ],
  },
  achievements: {
    headline: 'Achievements',
    highlight:
      'Verified disclosures from the 2024 election affidavit (MyNeta/ADR).',
    stats: [
      { label: 'Criminal Cases', value: 3 },
      { label: 'Assets (₹)', value: 36819218 },
      { label: 'Liabilities (₹)', value: 17009907 },
      { label: 'Age', value: 42 },
    ],
  },
  media: {
    headline: 'Media & interviews',
    items: [
      {
        title: 'Election affidavit profile (Criminal & Asset Declaration)',
        source: 'MyNeta (ADR)',
        date: '2024',
        href: 'https://www.myneta.info/AndhraPradesh2024/candidate.php?candidate_id=105',
      },
      {
        title: 'Add verified interviews / speeches (links)',
        source: 'Official / Press',
        date: '—',
        href: '#',
      },
      {
        title: 'Add constituency work coverage (links)',
        source: 'Regional Media',
        date: '—',
        href: '#',
      },
    ],
  },
  gallery: {
    headline: 'Gallery',
    items: [
      {
        src: '/leader.jpg',
        alt: 'Leader speaking at a public gathering',
        caption: 'Public dialogue · 2025',
      },
      {
        src: '/gallery-1.svg',
        alt: 'Review meeting',
        caption: 'Review meeting · Delivery focus',
      },
      {
        src: '/gallery-2.svg',
        alt: 'Field visit',
        caption: 'Field visit · Accountability',
      },
      {
        src: '/gallery-3.svg',
        alt: 'Listening to citizens',
        caption: 'Listening camp · Support',
      },
    ],
  },
  heroSlider: {
    items: [
      { src: '/hero/dn1.jpg', alt: 'Campaign activity' },
      { src: '/hero/dn5.jpg', alt: 'Public outreach' },
      { src: '/hero/dn6.jpg', alt: 'Community meeting' },
    ],
  },
  contact: {
    headline: 'Connect',
    subheadline:
      'Share an issue, request a meeting, or invite for a community program.',
    phone: '+00 00000 00000',
    address: 'Office Address, City',
    socials: [
      { label: 'Facebook', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'X (Twitter)', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
  footer: {
    note: 'Template content — replace with verified official information.',
  },
}
