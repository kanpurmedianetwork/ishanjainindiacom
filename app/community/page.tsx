import { PageShell, SectionLabel } from '@/components/site-shell'
import { communityServices } from '@/lib/content'

export default function CommunityPage() {
  return (
    <PageShell>
      <main>
        <section className="interior section-shell">
          <SectionLabel>Community Service / 06</SectionLabel>
          <div className="section-heading-row">
            <h1>Community &<br /><span>Social Impact.</span></h1>
            <p>Ground-level engagement in education, philanthropy, and assistive care.</p>
          </div>

          <div className="community-cards-list">
            {communityServices.map((service, idx) => (
              <article className="community-card-detailed" key={idx}>
                <div className="community-card-header">
                  <span className="community-tag">{service.organization}</span>
                  <span className="community-period">{service.period}</span>
                </div>
                <h2>{service.role} — {service.organization}</h2>
                <p>{service.detail}</p>

                {service.reels && service.reels.length > 0 && (
                  <div className="community-reels">
                    <h3>Instagram Reels & Highlights:</h3>
                    <div className="reel-links">
                      {service.reels.map((reelUrl, rIdx) => (
                        <a key={rIdx} className="reel-btn" href={reelUrl} target="_blank" rel="noreferrer">
                          🎥 Watch Volunteer Reel {rIdx + 1} ↗︎
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {service.images && service.images.length > 0 && (
                  <div className="community-gallery-grid">
                    {service.images.map((imgSrc, imgIdx) => (
                      <figure key={imgIdx} className="community-img-wrap">
                        <img src={imgSrc} alt={`${service.organization} volunteer activity ${imgIdx + 1}`} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  )
}
