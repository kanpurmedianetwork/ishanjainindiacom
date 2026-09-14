import { PageShell, SectionLabel } from '@/components/site-shell'
import { aboutSections, interests } from '@/lib/content'

export default function AboutPage() {
  return <PageShell><main><section className="interior section-shell"><SectionLabel>About Ishan / 01</SectionLabel><div className="about-content"><h1>Curiosity is a<br /><span>way of life.</span></h1><div className="about-long-copy">{aboutSections.map((section) => <section className="about-block" key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<section className="about-block"><h2>Academic interests</h2><div className="interest-list">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div></section></div></div></section><section className="statement section-shell"><blockquote>Stay open to the world.<br /><em>Build what matters.</em></blockquote></section></main></PageShell>
}
