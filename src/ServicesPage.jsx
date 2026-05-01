import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './App.css'

const services = [
  {
    icon: '🌐',
    color: '#1a6dd4',
    light: '#e8f0fe',
    title: 'Website Design & Development',
    tagline: 'Your 24/7 sales machine',
    desc: 'A professional website is the foundation of your online presence. We build fast, mobile-friendly websites that are designed to convert visitors into customers — and optimized for Google from day one.',
    features: [
      'Custom design tailored to your brand',
      'Mobile-responsive on every device',
      'SEO-optimized structure & content',
      'Fast load times & Core Web Vitals',
      'Contact forms & lead capture',
      'Ongoing maintenance available',
    ],
  },
  {
    icon: '🔍',
    color: '#059669',
    light: '#f0fdf4',
    title: 'SEO Services',
    tagline: 'Get found when it matters most',
    desc: 'When customers search for what you offer, your business should be at the top. Our local SEO strategies get you ranking on Google and Google Maps — and keep you there.',
    features: [
      'Google Business Profile optimization',
      'Local keyword research & strategy',
      'On-page & technical SEO',
      'Citation building & directory listings',
      'Competitor analysis',
      'Monthly ranking reports',
    ],
  },
  {
    icon: '📱',
    color: '#7c3aed',
    light: '#f5f3ff',
    title: 'Social Media Marketing',
    tagline: 'Build your brand where customers are',
    desc: 'Consistent, engaging social media builds trust and keeps your business top of mind. We handle strategy, content creation, and community management so you never have to think about it.',
    features: [
      'Profile setup & brand optimization',
      'Custom content creation & scheduling',
      'Facebook, Instagram & LinkedIn',
      'Audience growth strategies',
      'Engagement & community management',
      'Monthly performance analytics',
    ],
  },
  {
    icon: '✉️',
    color: '#ea580c',
    light: '#fff7ed',
    title: 'Email Marketing',
    tagline: '$42 returned for every $1 spent',
    desc: 'Email is still the highest ROI channel in digital marketing. We build and manage targeted campaigns that turn your subscribers into loyal, paying customers.',
    features: [
      'Email list growth strategy',
      'Professional newsletter design',
      'Automated drip campaigns',
      'Promotional & seasonal campaigns',
      'A/B subject line testing',
      'Open rate & click tracking',
    ],
  },
  {
    icon: '📢',
    color: '#dc2626',
    light: '#fef2f2',
    title: 'Paid Advertising',
    tagline: 'Get leads while you sleep',
    desc: 'Strategic paid ads put your business in front of ready-to-buy customers immediately. We manage every dollar of your ad spend for maximum return on investment.',
    features: [
      'Google Ads (Search & Display)',
      'Facebook & Instagram Ads',
      'Retargeting campaigns',
      'Ad copy & creative development',
      'Bid management & optimization',
      'Transparent ROI reporting',
    ],
  },
  {
    icon: '✍️',
    color: '#0891b2',
    light: '#ecfeff',
    title: 'Content Creation',
    tagline: 'Content that ranks and converts',
    desc: 'Great content builds authority, drives organic traffic, and turns readers into customers. We create content that works for both search engines and real people.',
    features: [
      'SEO blog posts & articles',
      'Website & landing page copy',
      'Social media content & graphics',
      'Email newsletters',
      'Brand voice development',
      'Content calendar planning',
    ],
  },
]

const reasons = [
  {
    icon: '🏠',
    title: 'Local Olympia Experts',
    desc: 'We know the Olympia market because we live and work here. We understand what local customers search for and what makes them choose one business over another.',
  },
  {
    icon: '📊',
    title: 'Transparent Reporting',
    desc: 'No mystery metrics. Every month you get a clear report showing exactly what we did, where you rank, and how many leads your marketing generated.',
  },
  {
    icon: '🤝',
    title: 'No Long-Term Contracts',
    desc: 'We earn your business every single month. No 12-month lock-ins, no cancellation penalties. Stay because the results keep coming.',
  },
  {
    icon: '💼',
    title: 'One Partner for Everything',
    desc: 'Tech support, websites, SEO, social media — one team, one phone call. Less coordination headache, faster execution, better results.',
  },
]

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Digital Marketing Services | ABC Computer Solutions'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* PAGE HERO */}
      <section className="sp-hero">
        <div className="container sp-hero-content">
          <span className="section-tag section-tag--light">Digital Marketing Services</span>
          <h1>Grow Your Business Online</h1>
          <p>Professional internet marketing for local businesses in Olympia, WA and beyond. From websites to SEO to social media — we handle the marketing so you can focus on what you do best.</p>
          <div className="hero-btns">
            <a href="/#contact" className="btn-primary">Get a Free Consultation</a>
            <a href="tel:3605398486" className="btn-outline">Call (360) 539-8486</a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="sp-intro">
        <div className="container">
          <div className="sp-intro-grid">
            <div className="sp-stat">
              <strong>97%</strong>
              <span>of consumers search online before buying locally</span>
            </div>
            <div className="sp-stat-divider" />
            <div className="sp-stat">
              <strong>#1</strong>
              <span>Google result gets 28% of all clicks</span>
            </div>
            <div className="sp-stat-divider" />
            <div className="sp-stat">
              <strong>$42</strong>
              <span>returned for every $1 spent on email marketing</span>
            </div>
            <div className="sp-stat-divider" />
            <div className="sp-stat">
              <strong>4x</strong>
              <span>more leads from businesses with optimized Google profiles</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section">
        <div className="container">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Everything You Need to Attract More Customers</h2>
          <div className="sp-grid">
            {services.map(s => (
              <div key={s.title} className="sp-card">
                <div className="sp-card-header" style={{ background: s.color }}>
                  <span className="sp-card-icon">{s.icon}</span>
                  <div className="sp-card-header-text">
                    <h2>{s.title}</h2>
                    <p className="sp-tagline">{s.tagline}</p>
                  </div>
                </div>
                <div className="sp-card-body">
                  <p className="sp-desc">{s.desc}</p>
                  <ul className="sp-features">
                    {s.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <a href="/#contact" className="sp-cta-link">Get Started →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-tag section-tag--light">Why ABC</span>
          <h2 className="section-title section-title--light">Why Local Businesses Choose Us</h2>
          <div className="sp-why-grid">
            {reasons.map(r => (
              <div key={r.title} className="sp-why-card">
                <div className="sp-why-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to get more customers?</h2>
            <p>Schedule a free consultation — we'll show you exactly where your business stands online and how to improve it.</p>
          </div>
          <div className="cta-btns">
            <a href="tel:3605398486" className="btn-primary cta-btn">Call (360) 539-8486</a>
            <a href="/#contact" className="btn-outline-white cta-btn">Book Free Consultation</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
