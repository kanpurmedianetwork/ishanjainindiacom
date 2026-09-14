import { PageShell, SectionLabel } from '@/components/site-shell'
import { writing } from '@/lib/content'

export default function WritingPage() {
  return (
    <PageShell>
      <main>
        <section className="interior section-shell">
          <SectionLabel>Research & Papers / 03</SectionLabel>
          <div className="section-heading-row">
            <h1>Research &<br /><span>Publications.</span></h1>
            <p>Peer-reviewed paper, independent policy research, and academic studies in physics and economics.</p>
          </div>

          <div className="writing-list-expanded">
            {writing.map((paper, idx) => (
              <article className="paper-card" key={idx}>
                <div className="paper-top">
                  <span className="paper-category">{paper.category}</span>
                  <span className="paper-date">{paper.date}</span>
                </div>
                <h2>{paper.title}</h2>
                <p className="paper-author"><strong>Author:</strong> {paper.author}</p>
                <p className="paper-text">{paper.text}</p>
                {paper.doi && <p className="paper-doi"><strong>DOI:</strong> {paper.doi}</p>}

                {paper.image && (
                  <div className="paper-media-preview">
                    {paper.image.endsWith('.pdf') ? (
                      <div className="pdf-badge">
                        <span>📄 Academic PDF Document</span>
                        <a className="inline-link" href={paper.image} target="_blank" rel="noreferrer">
                          Open PDF Document <span>↗︎</span>
                        </a>
                      </div>
                    ) : (
                      <div className="paper-img-frame">
                        <img src={paper.image} alt={paper.title} loading="lazy" />
                      </div>
                    )}
                  </div>
                )}

                <div className="paper-links">
                  {paper.links.map((linkItem, linkIdx) => (
                    <a
                      key={linkIdx}
                      className="paper-link-btn"
                      href={linkItem.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {linkItem.label} ↗︎
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  )
}
