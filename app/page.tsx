'use client'

import { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '#writing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    number: '01',
    title: 'Aurex',
    type: 'Product · Strategy · Design',
    text: 'A digital product exploring how thoughtful systems can make ambitious ideas easier to understand, use, and share.',
    tag: 'Featured work',
  },
  {
    number: '02',
    title: 'Water cleaning project',
    type: 'Research · Sustainability',
    text: 'A practical exploration into accessible water purification, bringing together research, prototyping, and social impact.',
    tag: 'Independent research',
  },
]

const writing = [
  { date: 'Published research · IJSREM · Feb 2026', title: 'How are Quantum Principles Used in GPS Systems and Atomic Clocks to Achieve High Precision?', text: 'An accessible study of quantum transitions, atomic clocks, relativity corrections, and the precision timing that makes modern GPS possible. DOI: 10.55041/IJSREM56653.', href: 'https://blobs.vusercontent.net/blob/Ishan%20Jain%20Published%20Paper-74D26925-lsF329E1zZkG274Wyhl4r5QCL5Cj8s.pdf' },
  { date: 'Research paper · Secondary data analysis · 2009–2026', title: "Does a Higher Basic Customs Duty on Gold Reduce India's Current Account Deficit?", text: "An analysis of whether higher gold customs duties reduce India's recorded current account deficit or shift the deficit into informal channels, with policy recommendations on smuggling, gold monetization, and financial inclusion.", href: '/research-paper-gold-duty.pdf' },
  { date: 'Field notes', title: 'Learning in public', text: 'Notes from working across design, technology, and the questions that sit between them.', href: '#contact' },
]

const community = {
  title: 'Education & mentorship volunteer',
  organization: 'Rooh Foundation',
  detail: 'Long-term volunteer mentor supporting underprivileged children through thoughtful lessons, continuity, and relationship-led learning · 2023–2026',
  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-F86AE9F1-pPLgqG4kQZvEXDwyCKXnfdB63vM38X.jpeg',
}

const internships = [
  { title: 'Junior Coder', organization: 'Excelstar Technologies', detail: 'Coding, debugging, and software development support · May–June 2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-6E03EB9A-G9bW7jTBTBJCrLZ3J2N8rr12P8F0Z8.jpeg' },
  { title: 'Manufacturing & Operations', organization: 'Shreeji Impex, Jaipur', detail: 'Production processes, workflow management, and factory operations · June 2023', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-1BCB1D05-1YPyjoBfoeFmotyvcYI0DDqNBrQTfu.jpeg' },
  { title: 'Equity Research', organization: 'Winvest AIF', detail: 'Market research, portfolio tracking, and investment fundamentals · 2025–2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-D596404F-dWvaJN1cH9RYV1jrcbMQhqQfOKOW3N.jpeg' },
  { title: 'Clean Energy & Sustainability', organization: 'CleanMax Enviro Energy Solutions', detail: 'Renewable energy, sustainability, and real-world clean energy applications · June 2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-D57DEFE6-LchFjuY7A83hOeYyLdo1GQyelgyjgf.jpeg' },
]

const gallery = [
  { title: 'A journey with people', detail: 'Travel, family, and shared moments', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-95748E2B-7BgQjDMNezPWl7nS6ytf84syoYJpCA.jpeg' },
  { title: 'On the way', detail: 'A quiet moment between destinations', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-9A17D64D-JJ2GmUA0acRueReeRz8f3BXldVR6e4.jpeg' },
  { title: 'Learning across cultures', detail: 'Community, exchange, and new perspectives', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-E1C4CFBE-yP5Py2J1cLKl3JjksNDzkek4j1Enlp.jpeg' },
  { title: 'Curiosity in motion', detail: 'Exploring places and finding the story in them', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-BC83DA83-5SpBajf4tbeTdpfepCMYoiRGKD2Er5.jpeg' },
  { title: 'A shared experience', detail: 'The people and places that shape the journey', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-6C227CFE-gRi3g01qH9N3v7h4HNqazkW5IRLSYQ.jpeg' },
  { title: 'Arrivals and new beginnings', detail: 'A team, a destination, and a moment to remember', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-4837ED80-efGWmwWbSwDXd4p3oatqeM3Xt7M1nS.jpeg' },
  { title: 'Golf Junior USA', detail: 'Under 12 · Sport, focus, and early ambition', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-92581BB5-VDvEkenzybJCtjDbbHGlLIJiYxgbz4.jpeg' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ishan Jain home">IJ<span>.</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? 'Close' : 'Menu'}</span><i aria-hidden="true" />
        </button>
        <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-arrow" href="mailto:aurexishanjain@gmail.com" aria-label="Email Ishan">↗︎</a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="eyebrow">Independent thinker / builder / learner</div>
        <h1>Making sense of<br /><em>what&apos;s next.</em></h1>
        <div className="hero-bottom">
          <div className="hero-profile">
            <figure className="profile-frame">
              <img className="profile-image" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-C4EC11BD-cislAJJHHl0MgIVK1BprBCd0oZijHV.jpeg" alt="Professional portrait of Ishan Jain in a navy suit and red tie" />
              <figcaption>Founder / independent builder</figcaption>
            </figure>
            <div className="hero-copy"><p className="hero-intro">Hi, I&apos;m <strong>Ishan Jain</strong>.</p><p className="hero-subintro">A curious mind working at the intersection of ideas, design, technology, and impact.</p></div>
          </div>
          <a className="circle-link" href="#about" aria-label="Scroll to about section">↓</a>
        </div>
        <div className="hero-mark" aria-hidden="true">+</div>
      </section>

      <section id="about" className="about section-shell section-rule">
        <div className="section-label">About / 01</div>
        <div className="about-content">
          <h2>Curiosity is a<br /><span>way of life.</span></h2>
          <div className="about-copy">
            <p>I believe the most interesting work happens when disciplines overlap. My practice moves between research, storytelling, strategy, and making — always with a focus on the human side of progress.</p>
            {expanded && <p>I&apos;m interested in the questions that do not have easy answers: how can technology feel more humane? How can design help us see a problem differently? How do we create a future that is useful, equitable, and full of possibility?</p>}
            <button className="text-button" type="button" onClick={() => setExpanded(!expanded)}>{expanded ? 'Read less' : 'Read more'} <span>↗︎</span></button>
          </div>
        </div>
      </section>

      <section className="statement section-shell">
        <p className="statement-kicker">A personal principle</p>
        <blockquote>“Stay open to the world.<br /><em>Build what matters.</em>”</blockquote>
      </section>

      <section id="work" className="work section-shell section-rule">
        <div className="section-label">Selected work / 02</div>
        <div className="section-heading-row"><h2>Ideas into<br /><span>action.</span></h2><p>Projects, experiments, and collaborations that have shaped how I think and work.</p></div>
        <div className="project-grid">
          {projects.map((project) => <article className="project-card" key={project.title}><div className="project-top"><span>{project.number}</span><span>{project.tag}</span></div><div className="project-visual"><div className="visual-cross">+</div><span>{project.title}</span></div><div className="project-info"><h3>{project.title}</h3><p className="project-type">{project.type}</p><p>{project.text}</p><a href="#contact" className="inline-link">Explore project <span>↗︎</span></a></div></article>)}
        </div>
      </section>

      <section id="writing" className="writing section-shell section-rule">
        <div className="section-label">Writing / 03</div>
        <div className="section-heading-row"><h2>Thoughts worth<br /><span>sharing.</span></h2><p>Research, reflections, and observations from an ongoing practice.</p></div>
        <div className="writing-list">{writing.map((item) => <a className="writing-item" href={item.href} key={item.title}><div><span className="writing-date">{item.date}</span><h3>{item.title}</h3></div><p>{item.text}</p><span className="writing-arrow">↗︎</span></a>)}</div>
      </section>

      <section id="internships" className="internships section-shell section-rule">
        <div className="section-label">Internships / 04</div>
        <div className="section-heading-row"><h2>Learning by<br /><span>doing.</span></h2><p>Practical experiences across technology, manufacturing, finance, and sustainable energy.</p></div>
        <div className="internship-grid">{internships.map((item) => <article className="internship-card" key={item.organization}><div className="internship-image-wrap"><img src={item.image} alt={`${item.organization} internship certificate`} /><span className="internship-index">Certificate</span></div><div className="internship-card-copy"><span className="writing-date">{item.organization}</span><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div>
      </section>

      <section id="community" className="community section-shell section-rule">
        <div className="section-label">Community / 05</div>
        <div className="community-feature">
          <div className="community-copy">
            <span className="writing-date">Rooh Foundation · 2023–2026</span>
            <h2>Showing up<br /><span>with purpose.</span></h2>
            <h3>{community.title}</h3>
            <p>{community.detail}</p>
          </div>
          <figure className="community-proof">
            <img src={community.image} alt="Recommendation letter from Rooh Foundation recognizing Ishan Jain's volunteer mentorship" />
            <figcaption>Community recommendation · Rooh Foundation · May 2026</figcaption>
          </figure>
        </div>
      </section>

      <section id="gallery" className="gallery section-shell section-rule">
        <div className="section-label">Gallery / 06</div>
        <div className="section-heading-row"><h2>Life in<br /><span>frames.</span></h2><p>A visual record of the people, places, and shared experiences that continue to shape the journey.</p></div>
        <div className="gallery-grid">{gallery.map((item, index) => <figure className={`gallery-card gallery-card-${index + 1}`} key={item.title}><div className="gallery-image-wrap"><img src={item.image} alt={item.title} loading="lazy" /></div><figcaption><strong>{item.title}</strong><span>{item.detail}</span></figcaption></figure>)}</div>
      </section>

      <section className="opportunity section-shell"><div className="section-label">Also / 07</div><div className="opportunity-grid"><h2>Always open to<br /><em>new perspectives.</em></h2><div><p>From the Goethe scholarship to internships and new collaborations, I&apos;m always looking for rooms that make the thinking richer.</p><a className="button-link" href="mailto:aurexishanjain@gmail.com">Let&apos;s talk <span>↗︎</span></a></div></div></section>

      <footer id="contact" className="site-footer section-shell"><div className="footer-top"><h2>Have a good<br /><em>question?</em></h2><div className="footer-contact"><a className="footer-email" href="mailto:aurexishanjain@gmail.com">aurexishanjain@gmail.com <span>↗︎</span></a><a className="footer-phone" href="tel:+919001113380">+91 90011 13380</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ishan Jain</span><div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a><a href="#top">Back to top ↑</a></div></div></footer>
    </main>
  )
}
