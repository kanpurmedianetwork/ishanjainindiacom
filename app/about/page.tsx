'use client'

import { PageShell, SectionLabel } from '@/components/site-shell'
import { leadership } from '@/lib/content'

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <section className="interior section-shell">
          <SectionLabel>About / 01</SectionLabel>
          <div className="about-content">
            <h1>Curiosity is a<br /><span>way of life.</span></h1>
            <div className="about-copy">
              <p>
                I&apos;ve always been someone who likes building ideas, not just thinking about them. A lot of my work has come from noticing small problems and trying to figure out how they could work differently, whether that&apos;s in technology, sustainability, or everyday systems.
              </p>
              <p>
                One of the ideas I explored early on was a water-cleaning system designed to restore water to more natural conditions using layered filtration, detectors, and controlled flow. It was my first attempt at thinking about how machines could interact with natural environments in a more responsive way, and it pushed me to go beyond theory and actually design how something like that could work.
              </p>
              <p>
                At the same time, I&apos;ve been working on <strong>Aurex</strong>, where I&apos;m building an e-commerce platform for my mother&apos;s jewelry business. The goal is to take something that already exists offline and rethink how it can grow digitally and reach a wider audience. I&apos;ve been involved in everything from structuring the platform to thinking about how users experience it and how the brand translates online.
              </p>
              <p>
                For me, both of these are part of the same process — figuring things out by building them. Outside of this, I&apos;ve spent time teaching underprivileged children and working with NGOs, which has helped me stay connected to impact at a more ground level. It&apos;s a reminder that what you build should eventually matter beyond just the idea itself.
              </p>
            </div>
          </div>
        </section>

        {/* Vision for Future */}
        <section className="section-shell section-rule">
          <SectionLabel>Vision & Purpose</SectionLabel>
          <div className="about-section-grid">
            <h2>Vision for<br /><span>the Future.</span></h2>
            <div className="about-copy">
              <p>
                I envision a future where I can combine innovation, technology, and entrepreneurship to build ideas that create real-world impact. I enjoy exploring how businesses and technology can work together to solve problems, and I hope to eventually build ventures that are both meaningful and scalable.
              </p>
              <p>
                At the same time, I want to grow into someone who can give back through philanthropy and community-driven work. My experiences teaching underprivileged children and working with NGOs have shown me how important it is to use opportunities and success to positively impact others as well.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership & Problem-Solving */}
        <section className="section-shell section-rule">
          <SectionLabel>Philosophy & Mindset</SectionLabel>
          <div className="about-two-col">
            <div className="about-card">
              <h3>Leadership Philosophy</h3>
              <p>
                I believe leadership is less about being the loudest person in a group and more about taking initiative, staying dependable, and helping people work together effectively. I usually lead by listening first, understanding different perspectives, and then contributing through ideas and consistent effort.
              </p>
            </div>
            <div className="about-card">
              <h3>Problem-Solving Mindset</h3>
              <p>
                My problem-solving mindset is based on curiosity and adaptability. I enjoy breaking down problems, exploring how things work, and finding practical ways to improve them. At the same time, I&apos;ve learned that not every idea works perfectly the first time, so I try to stay open to feedback and keep improving step by step rather than giving up quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Positions */}
        <section className="section-shell section-rule">
          <SectionLabel>Leadership Positions</SectionLabel>
          <div className="section-heading-row">
            <h2>Positions of<br /><span>Responsibility.</span></h2>
          </div>
          <div className="leadership-grid">
            {leadership.map((item, idx) => (
              <div className="leadership-card" key={idx}>
                <div className="leadership-header">
                  <h3>{item.role}</h3>
                  <span className="leadership-inst">{item.institution}</span>
                </div>
                <p>{item.detail}</p>
                {item.images && item.images.length > 0 && (
                  <div className="leadership-images">
                    {item.images.map((imgSrc, imgIdx) => (
                      <img key={imgIdx} src={imgSrc} alt={`${item.role} highlight ${imgIdx + 1}`} loading="lazy" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies & Personality */}
        <section className="section-shell section-rule">
          <SectionLabel>Hobbies & Personality</SectionLabel>
          <div className="about-section-grid">
            <h2>Interests &<br /><span>Exploration.</span></h2>
            <div className="about-copy">
              <p>
                I&apos;ve always enjoyed hobbies that involve exploration, strategy, and curiosity. I enjoy following technology and innovation closely, reading about emerging ideas in science, business, engines, and futuristic technology, and understanding how systems work behind the scenes. A lot of my interests naturally turn into experiments, projects, or ideas that I try building on my own.
              </p>
              <p>
                Outside of technology, I enjoy astronomy and anything connected to space and discovery, which is one reason I became involved with the Vyom Astronomy Club. Sports like golf and cricket have also been an important part of my life, teaching me patience, discipline, and focus over time.
              </p>
              <p>
                Personality-wise, I&apos;m naturally more quiet and observant than outspoken. I prefer listening, thinking deeply, and working consistently rather than seeking attention. At the same time, I enjoy meeting people with different perspectives, learning from conversations, and pushing myself into new experiences that help me grow.
              </p>
            </div>
          </div>
        </section>

        <section className="statement section-shell">
          <blockquote>Stay open to the world.<br /><em>Build what matters.</em></blockquote>
        </section>
      </main>
    </PageShell>
  )
}
