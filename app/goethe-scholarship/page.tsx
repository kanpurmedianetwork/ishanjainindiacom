import { PageShell, SectionLabel } from '@/components/site-shell'
import { goetheScholarship } from '@/lib/content'

export default function GoetheScholarshipPage() {
  return (
    <PageShell>
      <main>
        <section className="interior section-shell">
          <SectionLabel>Scholarship & Exchange / 04</SectionLabel>
          <div className="section-heading-row">
            <h1>{goetheScholarship.title}</h1>
            <p className="section-subtitle">{goetheScholarship.subtitle}</p>
          </div>

          <div className="goethe-hero-card">
            <div className="goethe-copy">
              <span className="writing-date">{goetheScholarship.organization}</span>
              <h2>Cultural & Educational Exchange in Germany</h2>
              <p>{goetheScholarship.text}</p>
            </div>
          </div>

          <div className="goethe-gallery-section">
            <h2>Exchange Gallery & Media</h2>
            <div className="goethe-grid">
              {goetheScholarship.images.map((item, idx) => (
                <figure className="goethe-card" key={idx}>
                  <div className="goethe-image-wrap">
                    <img src={item.src} alt={item.title} loading="lazy" />
                  </div>
                  <figcaption>
                    <strong>{item.title}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
