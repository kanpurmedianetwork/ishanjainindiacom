export const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const projects = [
  { number: '01', title: 'Aurex', type: 'Product · Strategy · Design', text: 'A digital product exploring how thoughtful systems can make ambitious ideas easier to understand, use, and share.', tag: 'Featured work' },
  { number: '02', title: 'Water cleaning project', type: 'Research · Sustainability', text: 'A practical exploration into accessible water purification, bringing together research, prototyping, and social impact.', tag: 'Independent research' },
]

export const writing = [
  { date: 'Published research · IJSREM · Feb 2026', title: 'How are Quantum Principles Used in GPS Systems and Atomic Clocks to Achieve High Precision?', text: 'An accessible study of quantum transitions, atomic clocks, relativity corrections, and the precision timing that makes modern GPS possible. DOI: 10.55041/IJSREM56653.', href: 'https://blobs.vusercontent.net/blob/Ishan%20Jain%20Published%20Paper-74D26925-lsF329E1zZkG274Wyhl4r5QCL5Cj8s.pdf' },
  { date: 'Research paper · Secondary data analysis · 2009–2026', title: "Does a Higher Basic Customs Duty on Gold Reduce India's Current Account Deficit?", text: "An analysis of whether higher gold customs duties reduce India's recorded current account deficit or shift the deficit into informal channels, with policy recommendations on smuggling, gold monetization, and financial inclusion.", href: '/research-paper-gold-duty.pdf' },
  { date: 'Field notes', title: 'Learning in public', text: 'Notes from working across design, technology, and the questions that sit between them.', href: '/contact' },
]

export const internshipsByYear = [
  { year: '2026', items: [{ title: 'Clean Energy & Sustainability', organization: 'CleanMax Enviro Energy Solutions', detail: 'Renewable energy, sustainability, and real-world clean energy applications · June 2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-D57DEFE6-LchFjuY7A83hOeYyLdo1GQyelgyjgf.jpeg' }] },
  { year: '2025', items: [{ title: 'Equity Research', organization: 'Winvest AIF', detail: 'Market research, portfolio tracking, and investment fundamentals · 2025–2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-D596404F-dWvaJN1cH9RYV1jrcbMQhqQfOKOW3N.jpeg' }, { title: 'Junior Coder', organization: 'Excelstar Technologies', detail: 'Programming fundamentals, debugging, and software development · May–June 2025', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-02DCB13D-Bb3uvivq6A7bCV13pcHEo9DUgPeVLV.jpeg' }] },
  { year: '2023', items: [{ title: 'Manufacturing & Operations', organization: 'Shreeji Impex, Jaipur', detail: 'Production processes, workflow management, and factory operations · June 2023', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-1BCB1D05-1YPyjoBfoeFmotyvcYI0DDqNBrQTfu.jpeg' }] },
]

export const gallery = [
  { title: 'A journey with people', detail: 'Travel, family, and shared moments', group: 'Travel & shared moments', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-95748E2B-7BgQjDMNezPWl7nS6ytf84syoYJpCA.jpeg' },
  { title: 'On the way', detail: 'A quiet moment between destinations', group: 'Travel & shared moments', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-9A17D64D-JJ2GmUA0acRueReeRz8f3BXldVR6e4.jpeg' },
  { title: 'Learning across cultures', detail: 'Community, exchange, and new perspectives', group: 'Learning & culture', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-E1C4CFBE-yP5Py2J1cLKl3JjksNDzkek4j1Enlp.jpeg' },
  { title: 'Curiosity in motion', detail: 'Exploring places and finding the story in them', group: 'Learning & culture', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-BC83DA83-5SpBajf4tbeTdpfepCMYoiRGKD2Er5.jpeg' },
  { title: 'A shared experience', detail: 'The people and places that shape the journey', group: 'Travel & shared moments', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-6C227CFE-gRi3g01qH9N3v7h4HNqazkW5IRLSYQ.jpeg' },
  { title: 'Arrivals and new beginnings', detail: 'A team, a destination, and a moment to remember', group: 'Learning & culture', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-4837ED80-efGWmwWbSwDXd4p3oatqeM3Xt7M1nS.jpeg' },
  { title: 'Golf Junior USA', detail: 'Under 12 · Sport, focus, and early ambition', group: 'Sport & early ambition', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-92581BB5-VDvEkenzybJCtjDbbHGlLIJiYxgbz4.jpeg' },
]

export const community = { title: 'Education & mentorship volunteer', detail: 'Long-term volunteer mentor supporting underprivileged children through thoughtful lessons, continuity, and relationship-led learning · 2023–2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-F86AE9F1-pPLgqG4kQZvEXDwyCKXnfdB63vM38X.jpeg' }

export const portrait = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-C4EC11BD-cislAJJHHl0MgIVK1BprBCd0oZijHV.jpeg'

export const galleryGroups = [...new Set(gallery.map((item) => item.group))]
