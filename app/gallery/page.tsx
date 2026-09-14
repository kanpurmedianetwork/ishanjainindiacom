import { PageShell, SectionLabel } from '@/components/site-shell'
import { gallery, galleryGroups, sportsGallery } from '@/lib/content'

export default function GalleryPage() {
  return (
    <PageShell>
      <main>
        <section className="interior section-shell gallery">
          <SectionLabel>Gallery & Sports / 07</SectionLabel>
          <div className="section-heading-row">
            <h1>Life & Sports in<br /><span>Frames.</span></h1>
            <p>A visual record of sports achievements, academic exchange, leadership, and community service.</p>
          </div>

          {/* Dedicated Sports Section with side-by-side 2-column layout */}
          <div className="sports-highlight-section">
            <SectionLabel>Sports Highlights</SectionLabel>
            <h2>Cricket & Golf</h2>
            <div className="sports-side-by-side-grid">
              {sportsGallery.map((item, idx) => (
                <figure className="sports-card" key={idx}>
                  <div className="sports-img-frame">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <figcaption>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Grouped Gallery */}
          <div className="gallery-groups section-rule">
            {galleryGroups.map((group) => (
              <section className="gallery-group" key={group}>
                <h2>{group}</h2>
                <div className="gallery-grid">
                  {gallery
                    .filter((item) => item.group === group)
                    .map((item) => (
                      <figure className="gallery-card" key={item.title}>
                        <div className="gallery-image-wrap">
                          <img src={item.image} alt={item.title} loading="lazy" />
                        </div>
                        <figcaption>
                          <strong>{item.title}</strong>
                          <span>{item.detail}</span>
                        </figcaption>
                      </figure>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  )
}
