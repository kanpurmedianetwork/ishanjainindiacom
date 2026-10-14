import Link from 'next/link'
import { PageShell, SectionLabel } from '@/components/site-shell'
import { community, gallery, internshipsByYear, portrait, projects, writing } from '@/lib/content'

export default function HomePage() {
  return <PageShell><main>
    <section className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="eyebrow">Independent thinker / builder / learner</div>
          <h1>Making sense of<br /><em>what&apos;s next.</em></h1>
          <div className="hero-copy">
            <p className="hero-intro">Hi, I&apos;m <strong>Ishan Jain</strong>.</p>
            <p className="hero-subintro">A curious mind working at the intersection of ideas, design, technology, and impact.</p>
          </div>
          <Link className="circle-link" href="#about" aria-label="Explore Ishan Jain&apos;s work">↓</Link>
        </div>
        <div className="hero-media">
          <figure className="profile-frame">
            <img className="profile-image" src={portrait} alt="Professional portrait of Ishan Jain in a navy suit and red tie" />
            <figcaption>Founder / independent builder</figcaption>
          </figure>
        </div>
      </div>
      <div className="hero-mark" aria-hidden="true">+</div>
    </section>

    <section id="about" className="about section-shell section-rule"><SectionLabel>About / 01</SectionLabel><div className="about-content"><h2>Curiosity is<br /><span>a way of life.</span></h2><div className="about-copy"><p>I&apos;m interested in the space between disciplines — where ideas become useful, and where thoughtful work can create lasting impact.</p><p>From building products and researching questions to learning from people and places, I try to stay open, rigorous, and ready to begin again.</p><Link className="inline-link" href="/about">More about me <span>↗︎</span></Link></div></div></section>

    <section className="statement section-shell"><p className="statement-kicker">A personal principle</p><blockquote>“Stay open to the world.<br /><em>Build what matters.</em>”</blockquote></section>

    <section id="work" className="work section-shell section-rule"><SectionLabel>Work / 02</SectionLabel><div className="section-heading-row"><h2>Ideas into<br /><span>action.</span></h2><p>Selected projects across product, strategy, research, sustainability, and technology.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-top"><span>{project.number}</span><span>{project.tag}</span></div><div className="project-visual"><span>{project.title}</span><b className="visual-cross">+</b></div><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.text}</p><Link className="inline-link" href="/work">View work <span>↗︎</span></Link></div></article>)}</div></section>

    <section id="writing" className="writing section-shell section-rule"><SectionLabel>Writing / 03</SectionLabel><div className="section-heading-row"><h2>Thoughts<br /><span>worth sharing.</span></h2><p>Research, field notes, and questions explored in public.</p></div><div className="writing-list">{writing.map((item) => <a className="writing-item" href={item.href} key={item.title}><div><span className="writing-date">{item.date}</span><h3>{item.title}</h3></div><p>{item.text}</p><span className="writing-arrow">↗︎</span></a>)}</div></section>

    <section id="internships" className="internships section-shell section-rule"><SectionLabel>Internships / 04</SectionLabel><div className="section-heading-row"><h2>Learning by<br /><span>doing.</span></h2><p>Year-wise experience across technology, manufacturing, finance, and sustainable energy.</p></div><div className="internship-years">{internshipsByYear.map((group) => <section className="internship-year" key={group.year}><div className="internship-year-heading"><h3>{group.year}</h3><span>{group.items.length} {group.items.length === 1 ? 'experience' : 'experiences'}</span></div><div className="internship-grid">{group.items.map((item) => <article className="internship-card" key={item.organization}><div className="internship-image-wrap"><img src={item.image} alt={`${item.organization} internship certificate`} /><span className="internship-index">Certificate</span></div><div className="internship-card-copy"><span className="writing-date">{item.organization}</span><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div></section>)}</div><Link className="inline-link home-more-link" href="/internships">See all internship details <span>↗︎</span></Link></section>

    <section id="community" className="opportunity section-shell section-rule"><SectionLabel>Community / 05</SectionLabel><div className="opportunity-grid"><h2>Learning is<br /><span>shared.</span></h2><div><img className="community-image" src={community.image} alt="Ishan Jain volunteering with children" /><p>{community.detail}</p><Link className="inline-link" href="/community">Community work <span>↗︎</span></Link></div></div></section>

    <section id="gallery" className="gallery section-shell section-rule"><SectionLabel>Gallery / 06</SectionLabel><div className="section-heading-row"><h2>Life in<br /><span>frames.</span></h2><p>People, places, learning, and the moments that make the journey.</p></div><div className="gallery-grid">{gallery.slice(0, 4).map((item, index) => <figure className={`gallery-card gallery-card-${index + 1}`} key={item.title}><div className="gallery-image-wrap"><img src={item.image} alt={item.title} /></div><figcaption><strong>{item.title}</strong><span>{item.detail}</span></figcaption></figure>)}</div><Link className="inline-link home-more-link" href="/gallery">Open full gallery <span>↗︎</span></Link></section>

    <section id="contact" className="home-contact section-shell section-rule"><SectionLabel>Contact / 07</SectionLabel><div className="contact-details"><h2>Let&apos;s start<br /><em>a conversation.</em></h2><a href="mailto:aurexishanjain@gmail.com">aurexishanjain@gmail.com ↗︎</a><a href="tel:+919001113380">+91 90011 13380</a></div></section>
  </main></PageShell>
}
