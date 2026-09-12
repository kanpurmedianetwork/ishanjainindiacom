'use client'

import { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '#writing' },
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
  { date: 'Research paper', title: 'Designing for meaningful change', text: 'A paper on the relationship between systems, people, and the future we choose to build.', href: 'https://scholar.google.com/' },
  { date: 'Field notes', title: 'Learning in public', text: 'Notes from working across design, technology, and the questions that sit between them.', href: '#contact' },
]

const internships = [
  { title: 'Junior Coder', organization: 'Excelstar Technologies', detail: 'Coding, debugging, and software development support · May–June 2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-6E03EB9A-G9bW7jTBTBJCrLZ3J2N8rr12P8F0Z8.jpeg' },
  { title: 'Manufacturing & Operations', organization: 'Shreeji Impex, Jaipur', detail: 'Production processes, workflow management, and factory operations · June 2023', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-1BCB1D05-1YPyjoBfoeFmotyvcYI0DDqNBrQTfu.jpeg' },
  { title: 'Equity Research', organization: 'Winvest AIF', detail: 'Market research, portfolio tracking, and investment fundamentals · 2025–2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-D596404F-dWvaJN1cH9RYV1jrcbMQhqQfOKOW3N.jpeg' },
  { title: 'Clean Energy & Sustainability', organization: 'CleanMax Enviro Energy Solutions', detail: 'Renewable energy, sustainability, and real-world clean energy applications · June 2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-D57DEFE6-LchFjuY7A83hOeYyLdo1GQyelgyjgf.jpeg' },
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
          <a className="nav-arrow" href="mailto:hello@ishanjainindia.com" aria-label="Email Ishan">↗</a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="eyebrow">Independent thinker / builder / learner</div>
        <h1>Making sense of<br /><em>what&apos;s next.</em></h1>
        <div className="hero-bottom">
          <div className="hero-profile">
            <figure className="profile-frame">
              <img className="profile-image" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-907B74E0-xFRNG3Km2dNGvI2VLgu8tv25giXQrx.jpeg" alt="Ishan Jain in a navy suit, white shirt, and red tie" />
              <figcaption>Founder / independent builder</figcaption>
            </figure>
            <p className="hero-intro">I&apos;m Ishan Jain, a curious mind working at the intersection of ideas, design, technology, and impact.</p>
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
            <button className="text-button" type="button" onClick={() => setExpanded(!expanded)}>{expanded ? 'Read less' : 'Read more'} <span>↗</span></button>
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
          {projects.map((project) => <article className="project-card" key={project.title}><div className="project-top"><span>{project.number}</span><span>{project.tag}</span></div><div className="project-visual"><div className="visual-cross">+</div><span>{project.title}</span></div><div className="project-info"><h3>{project.title}</h3><p className="project-type">{project.type}</p><p>{project.text}</p><a href="#contact" className="inline-link">Explore project <span>↗</span></a></div></article>)}
        </div>
      </section>

      <section id="writing" className="writing section-shell section-rule">
        <div className="section-label">Writing / 03</div>
        <div className="section-heading-row"><h2>Thoughts worth<br /><span>sharing.</span></h2><p>Research, reflections, and observations from an ongoing practice.</p></div>
        <div className="writing-list">{writing.map((item) => <a className="writing-item" href={item.href} key={item.title}><div><span className="writing-date">{item.date}</span><h3>{item.title}</h3></div><p>{item.text}</p><span className="writing-arrow">↗</span></a>)}</div>
      </section>

      <section id="internships" className="internships section-shell section-rule">
        <div className="section-label">Internships / 04</div>
        <div className="section-heading-row"><h2>Learning by<br /><span>doing.</span></h2><p>Practical experiences across technology, manufacturing, finance, and sustainable energy.</p></div>
        <div className="internship-grid">{internships.map((item) => <article className="internship-card" key={item.organization}><div className="internship-image-wrap"><img src={item.image} alt={`${item.organization} internship certificate`} /><span className="internship-index">Certificate</span></div><div className="internship-card-copy"><span className="writing-date">{item.organization}</span><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div>
      </section>

      <section className="opportunity section-shell"><div className="section-label">Also / 05</div><div className="opportunity-grid"><h2>Always open to<br /><em>new perspectives.</em></h2><div><p>From the Goethe scholarship to internships and new collaborations, I&apos;m always looking for rooms that make the thinking richer.</p><a className="button-link" href="mailto:hello@ishanjainindia.com">Let&apos;s talk <span>↗</span></a></div></div></section>

      <footer id="contact" className="site-footer section-shell"><div className="footer-top"><h2>Have a good<br /><em>question?</em></h2><a className="footer-email" href="mailto:hello@ishanjainindia.com">hello@ishanjainindia.com <span>↗</span></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ishan Jain</span><div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a><a href="#top">Back to top ↑</a></div></div></footer>
    </main>
  )
}
