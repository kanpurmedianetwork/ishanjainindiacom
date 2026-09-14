'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navItems } from '@/lib/content'

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Ishan Jain home"><img src="/ij-logo-provided.jpeg" alt="IJ" /></Link>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}><span>{menuOpen ? 'Close' : 'Menu'}</span><i aria-hidden="true" /></button>
      <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
        {navItems.map((item) => <Link className={pathname === item.href ? 'is-active' : ''} key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
        <a className="nav-arrow" href="mailto:aurexishanjain@gmail.com" aria-label="Email Ishan">↗︎</a>
      </nav>
    </header>
  )
}

export function Footer() {
  return <footer className="site-footer section-shell"><div className="footer-brand"><img src="/ij-logo-provided.jpeg" alt="IJ" /></div><div className="footer-top"><div className="footer-heading"><span className="footer-kicker">Keep in touch</span><h2>Have a good<br /><em>day.</em></h2><p>For thoughtful conversations, collaborations, or simply to say hello.</p></div><div className="footer-contact"><a className="footer-email" href="mailto:aurexishanjain@gmail.com">aurexishanjain@gmail.com <span>↗︎</span></a><a className="footer-phone" href="tel:+919001113380">+91 90011 13380</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ishan Jain</span><div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a><Link href="/">Back to top ↑</Link></div></div></footer>
}

export function PageShell({ children }: { children: React.ReactNode }) { return <><SiteHeader />{children}<Footer /></> }
export function SectionLabel({ children }: { children: React.ReactNode }) { return <div className="section-label">{children}</div> }
