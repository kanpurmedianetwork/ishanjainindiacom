export const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'Goethe Exchange', href: '/goethe-scholarship' },
  { label: 'Internships', href: '/internships' },
  { label: 'Community', href: '/community' },
  { label: 'Gallery & Sports', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const projects = [
  { 
    number: '01', 
    title: 'Aurex', 
    type: 'Product · E-Commerce · Strategy', 
    text: 'Building an e-commerce platform for my mother’s jewelry business to take an established offline brand and grow it digitally for a wider audience.', 
    tag: 'Featured Venture' 
  },
  { 
    number: '02', 
    title: 'Water Cleaning System', 
    type: 'Research · Engineering · Sustainability', 
    text: 'Designed a water-cleaning system to restore water to natural conditions using layered filtration, detectors, and controlled flow interaction with natural environments.', 
    tag: 'Independent Engineering' 
  },
]

export const writing = [
  {
    category: 'Quantum Mechanics & GPS',
    date: 'Published Research Paper · IJSREM · February 2026',
    author: 'Ishan Jain',
    title: 'How are Quantum Principles Used in GPS Systems and Atomic Clocks to Achieve High Precision?',
    text: 'Explores the practical application of quantum mechanics in modern navigation systems, examining atomic clocks, quantum transitions, and Einstein\'s theory of relativity in GPS accuracy.',
    doi: '10.55041/IJSREM56653',
    href: 'https://ijsrem.com/download/how-are-quantum-principles-used-in-gps-systems-and-atomic-clocks-to-achieve-high-precision/',
    image: '/images/research-ijsrem.png',
    links: [
      { label: 'Download Published Paper (IJSREM)', href: 'https://ijsrem.com/download/how-are-quantum-principles-used-in-gps-systems-and-atomic-clocks-to-achieve-high-precision/' }
    ]
  },
  {
    category: 'Economics & Financial Markets',
    date: 'Independent Research Project · 2025–2026',
    author: 'Ishan Jain',
    title: 'To what extent did the change in US 10-year bond yields between 2025–2026 affect the performance of the Indian stock market, as measured by the Nifty 50 index and foreign portfolio investment flows?',
    text: 'An empirical study investigating the correlation between changes in US Treasury 10-year yields and Indian stock market performance (Nifty 50 daily returns) alongside USD/INR exchange rate, Brent Crude oil prices, VIX, and S&P 500 returns using multiple linear regressions.',
    href: '/research-paper-us-bond-yields.pdf',
    image: '/research-paper-us-bond-yields.pdf',
    links: [
      { label: 'Read Research Paper (PDF)', href: '/research-paper-us-bond-yields.pdf' }
    ]
  }
]

export const goetheScholarship = {
  title: 'Goethe Scholarship – Germany',
  subtitle: 'Grade XI · 2025 · Cultural & Educational Exchange',
  organization: 'Modern School & Goethe-Institut (Max Mueller Bhavan)',
  text: 'Selected by Modern School through the Goethe-Institut (Max Mueller Bhavan) for a fully funded three-week cultural and educational exchange programme in Germany. The experience provided international exposure while strengthening cross-cultural communication and language skills.',
  images: [
    { src: '/images/goethe-germany-1.png', title: 'Goethe Exchange Selection & Program Document' },
    { src: '/images/goethe-germany-2.png', title: 'Cultural Immersion in Germany' },
    { src: '/images/goethe-germany-3.jpg', title: 'Goethe-Institut Program Activities' },
    { src: '/images/goethe-germany-4.jpg', title: 'Educational Visits in Germany' },
    { src: '/images/goethe-germany-5.jpg', title: 'Group Learning Sessions' },
    { src: '/images/goethe-germany-6.jpg', title: 'Exchange Program Delegation' },
    { src: '/images/goethe-germany-7.jpg', title: 'Cultural Certificate & Milestone' },
    { src: '/images/goethe-germany-8.jpg', title: 'Goethe Exchange Team Photo' },
  ]
}

export const leadership = [
  {
    role: 'House Captain – Student Council',
    institution: 'Modern School, Vasant Vihar | Grade XII (2026–2027)',
    detail: 'Elected Student Council House Captain, responsible for school house leadership, event coordination, student representation, and building house spirit.',
    images: ['/images/house-captain-1.jpg', '/images/house-captain-2.jpg', '/images/house-captain-3.png']
  },
  {
    role: 'Director – Vyom Astronomy Club',
    institution: 'Grades X–XI',
    detail: 'Served as Director of Modern School\'s Vyom Astronomy Club for two consecutive academic years, leading one of the school\'s most active STEM societies. Responsible for planning astronomy programmes, organizing workshops, and encouraging scientific curiosity.',
    images: ['/images/vyom-astronomy.png']
  }
]

export const internshipsByYear = [
  { 
    year: '2026', 
    items: [
      { 
        title: 'Sustainability Intern', 
        organization: 'CleanMax Enviro Energy Solutions', 
        detail: 'Completed an internship with one of India\'s leading clean energy companies, gaining practical exposure to renewable energy solutions and sustainability initiatives · 1–30 June 2026', 
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-D57DEFE6-LchFjuY7A83hOeYyLdo1GQyelgyjgf.jpeg' 
      },
      { 
        title: 'Junior Coder (Remote, USA)', 
        organization: 'Excelstar Technologies', 
        detail: 'Completed a one-month international remote internship with a USA-based technology company in Texas, gaining exposure to professional software development practices in a global environment · 20 March – 20 April 2026', 
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-02DCB13D-Bb3uvivq6A7bCV13pcHEo9DUgPeVLV.jpeg' 
      },
      { 
        title: 'Investment & Equity Research Intern', 
        organization: 'Winvest Investment Internship', 
        detail: 'Completed two structured investment internship programmes focused on stock markets, financial analysis, and portfolio management · Grade XI (30 Dec 2025 – 11 Jan 2026 & 13 March 2026 – 31 March 2026)', 
        image: '/images/winvest-internship.png' 
      }
    ] 
  },
  { 
    year: '2025', 
    items: [
      { 
        title: 'Junior Coder', 
        organization: 'Excelstar Technologies', 
        detail: 'Completed a Junior Coding Internship with Excelstar Technologies, gaining practical exposure to software development and programming fundamentals · 18 May – 30 June 2025', 
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-02DCB13D-Bb3uvivq6A7bCV13pcHEo9DUgPeVLV.jpeg' 
      }
    ] 
  },
  { 
    year: '2023', 
    items: [
      { 
        title: 'Product Engineering Intern', 
        organization: 'Sree Ji Impex, Jaipur', 
        detail: 'Completed an internship within a jewellery manufacturing unit under the guidance of the Production Manager. Gained first-hand exposure to metallurgy, jewellery manufacturing processes, and commercial production · 1–30 June 2023', 
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-1BCB1D05-1YPyjoBfoeFmotyvcYI0DDqNBrQTfu.jpeg' 
      }
    ] 
  },
]

export const communityServices = [
  {
    organization: 'Rooh Foundation',
    role: 'Volunteer Teacher',
    period: 'Grades IX–XI (3 Consecutive Years)',
    detail: 'Volunteered with the Rooh Foundation across three consecutive years, teaching underprivileged children and supporting educational initiatives.',
    reels: [
      'https://www.instagram.com/reel/DY4HGYSzbLq/?igsh=aTR4OXg1b3Q1NHpu',
      'https://www.instagram.com/reel/DY1SiP9Ta9Z/?igsh=M2E4ZzNtazlzcGZz'
    ],
    images: [
      '/images/rooh-volunteer-1.png',
      '/images/rooh-volunteer-2.png',
      '/images/rooh-volunteer-3.png',
      '/images/rooh-volunteer-4.png',
      '/images/rooh-volunteer-5.png'
    ]
  },
  {
    organization: 'Rotary Divyang Kendra',
    role: 'Volunteer',
    period: 'Grade XI',
    detail: 'Volunteered with Rotary Divyang Kendra during camps for the fitment and distribution of artificial limbs and assistive aids, supporting patients and assisting the management team.',
    images: []
  }
]

export const community = { 
  title: 'Education & mentorship volunteer', 
  detail: 'Long-term volunteer mentor supporting underprivileged children through thoughtful lessons, continuity, and relationship-led learning across 3 consecutive years (2023–2026).', 
  image: '/images/rooh-volunteer-1.png' 
}

export const sportsGallery = [
  {
    title: 'Under 10 Junior School Cricket Team',
    category: 'Cricket',
    detail: 'Modern School Under-10 Junior School Cricket Team representation.',
    image: '/images/cricket-under10.png'
  },
  {
    title: 'Golf',
    category: 'Golf',
    detail: 'Competitive golf playing, building patience, discipline, and strategic focus.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-92581BB5-VDvEkenzybJCtjDbbHGlLIJiYxgbz4.jpeg'
  }
]

export const gallery = [
  // Original Gallery Items
  { title: 'A journey with people', detail: 'Travel, family, and shared moments', group: 'Travel & shared moments', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-95748E2B-7BgQjDMNezPWl7nS6ytf84syoYJpCA.jpeg' },
  { title: 'On the way', detail: 'A quiet moment between destinations', group: 'Travel & shared moments', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-9A17D64D-JJ2GmUA0acRueReeRz8f3BXldVR6e4.jpeg' },
  { title: 'Learning across cultures', detail: 'Community, exchange, and new perspectives', group: 'Learning & culture', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-E1C4CFBE-yP5Py2J1cLKl3JjksNDzkek4j1Enlp.jpeg' },
  { title: 'Curiosity in motion', detail: 'Exploring places and finding the story in them', group: 'Learning & culture', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-BC83DA83-5SpBajf4tbeTdpfepCMYoiRGKD2Er5.jpeg' },
  { title: 'A shared experience', detail: 'The people and places that shape the journey', group: 'Travel & shared moments', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-6C227CFE-gRi3g01qH9N3v7h4HNqazkW5IRLSYQ.jpeg' },
  { title: 'Arrivals and new beginnings', detail: 'A team, a destination, and a moment to remember', group: 'Learning & culture', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-4837ED80-efGWmwWbSwDXd4p3oatqeM3Xt7M1nS.jpeg' },
  { title: 'Golf Junior USA', detail: 'Under 12 · Sport, focus, and early ambition', group: 'Sports & Ambition', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-92581BB5-VDvEkenzybJCtjDbbHGlLIJiYxgbz4.jpeg' },
  // Profile Document Gallery Additions
  { title: 'Under 10 Junior School Cricket Team', detail: 'Modern School Cricket Team representation', group: 'Sports & Ambition', image: '/images/cricket-under10.png' },
  { title: 'Goethe Exchange Program, Germany', detail: 'Three-week cultural and educational exchange in Germany', group: 'Goethe Exchange', image: '/images/goethe-germany-2.png' },
  { title: 'Modern School Student Council', detail: 'House Captain Leadership & Badge Ceremony', group: 'Leadership', image: '/images/house-captain-1.jpg' },
  { title: 'Vyom Astronomy Club', detail: 'Directing STEM & Astronomy Programs', group: 'Leadership', image: '/images/vyom-astronomy.png' },
  { title: 'Rooh Foundation Community Teaching', detail: 'Teaching underprivileged children across 3 years', group: 'Community Service', image: '/images/rooh-volunteer-1.png' },
  { title: 'Exchange Culture & Team', detail: 'Learning, perspective, and team moments in Germany', group: 'Goethe Exchange', image: '/images/goethe-germany-5.jpg' },
  // CBSE Innovative Ideas Competition Additions
  { title: 'CBSE Innovative Ideas Competition', detail: 'INSPIRE-MANAK Scheme 2026–27', group: 'CBSE Innovative Ideas Competition', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-67815CEA-AmZgh30IcF7sU27ge1UjvcEX0UjoEa.jpeg' },
  { title: 'CBSE Innovative Ideas Competition', detail: 'INSPIRE-MANAK Scheme 2026–27', group: 'CBSE Innovative Ideas Competition', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-37229962-GT0hrAIRiqhDe5VUZAeZIlUrRq115U.jpeg' },
]

export const portrait = '/images/ishan-jain.jpeg'

export const galleryGroups = [...new Set(gallery.map((item) => item.group))]

