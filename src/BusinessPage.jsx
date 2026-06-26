import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './App.css'

// ─── TOGGLE: set to true when ready to make this page public ───
const BUSINESS_PAGE_ENABLED = true
// ────────────────────────────────────────────────────────────────

const seoServices = [
  { icon: '📍', title: 'Google Business Profile', desc: 'Optimize your listing to dominate the local map pack and get more calls directly from Google.' },
  { icon: '🔍', title: 'Local Keyword Research', desc: 'We find the exact searches your customers are making and build your strategy around them.' },
  { icon: '📄', title: 'On-Page SEO', desc: 'Optimize your website content, titles, and structure so Google knows exactly what you offer.' },
  { icon: '📋', title: 'Citation Building', desc: 'Get your business listed consistently across Yelp, Bing, Apple Maps, and 50+ directories.' },
  { icon: '⭐', title: 'Review Strategy', desc: 'Build a steady stream of 5-star reviews that boost your rankings and convert new customers.' },
  { icon: '📊', title: 'Monthly Reporting', desc: 'Clear, plain-English reports showing exactly where you rank and how your traffic is growing.' },
]

const steps = [
  { num: '01', title: 'Free SEO Audit', desc: 'We analyze your current online presence — Google ranking, website, reviews, and competitors — at no cost.' },
  { num: '02', title: 'Custom Local Strategy', desc: 'We build a targeted plan focused on the keywords and platforms that will bring you the most local customers.' },
  { num: '03', title: 'Rank, Grow & Get Calls', desc: 'We execute the strategy and track results monthly. More visibility means more calls, more customers, more revenue.' },
]

const services = [
  {
    icon: '🌐',
    color: '#1a6dd4',
    title: 'Website Design & Development',
    tagline: 'Your 24/7 sales machine',
    desc: 'A professional website is the foundation of your online presence. We build fast, mobile-friendly websites that are designed to convert visitors into customers — and optimized for Google from day one.',
    features: [
      'Custom design tailored to your brand',
      'Mobile-responsive on every device',
      'SEO-optimized structure & content',
      'Contact forms & lead capture',
    ],
  },
  {
    icon: '🔍',
    color: '#059669',
    title: 'Local SEO Services',
    tagline: 'Get found when it matters most',
    desc: 'When customers search for what you offer, your business should be at the top. Our local SEO strategies get you ranking on Google and Google Maps.',
    features: [
      'Google Business Profile optimization',
      'Local keyword research & strategy',
      'On-page & technical SEO',
      'Citation building & directory listings',
      'Monthly ranking reports',
    ],
  },
  {
    icon: '📱',
    color: '#7c3aed',
    title: 'Social Media Marketing',
    tagline: 'Build your brand where customers are',
    desc: 'Consistent, engaging social media builds trust and keeps your business top of mind.',
    features: [
      'Profile setup & brand optimization',
      'Custom content creation & scheduling',
      'Facebook & Instagram',
      'Monthly performance analytics',
    ],
  },
  {
    icon: '✉️',
    color: '#ea580c',
    title: 'Email Marketing',
    tagline: '$42 returned for every $1 spent',
    desc: 'Email is still the highest ROI channel in digital marketing. We build and manage targeted campaigns that turn subscribers into loyal customers.',
    features: [
      'Email list growth strategy',
      'Professional newsletter design',
      'Automated campaigns',
      'Open rate & click tracking',
    ],
  },
]

export default function BusinessPage() {
  useEffect(() => {
    document.title = 'Business Services | ABC Computer Solutions'
    window.scrollTo(0, 0)
  }, [])

  if (!BUSINESS_PAGE_ENABLED) {
    return (
      <>
        <Navbar />
        <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: '500px', padding: '40px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚧</div>
            <h2 style={{ color: '#0a2d6e', marginBottom: '12px' }}>Business Services Coming Soon</h2>
            <p style={{ color: '#555', marginBottom: '24px' }}>This page is currently under construction. Check back soon or call us for more information.</p>
            <a href="tel:3605398486" className="btn-primary">(360) 539-8486</a>
          </div>
        </section>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <section className="sp-hero">
        <div className="container sp-hero-content">
          <h1>Grow Your Business Online</h1>
          <p>Professional internet marketing for local businesses in Olympia, WA. From websites to SEO to social media — we handle the marketing so you can focus on what you do best.</p>
          <div className="hero-btns">
            <a href="/#contact" className="btn-primary">Get a Free Consultation</a>
            <a href="tel:3605398486" className="btn-outline">Call (360) 539-8486</a>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title section-title--light">Get Found by More Local Customers</h2>
          <p className="section-intro">97% of consumers search online to find local businesses. If your business isn't showing up on Google, you're handing those customers to your competitors. We specialize in local SEO for Olympia-area businesses.</p>
          <div className="seo-grid">
            {seoServices.map(s => (
              <div key={s.title} className="seo-card">
                <div className="seo-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="seo-cta-row">
            <a href="/#contact" className="btn-primary">Get a Free SEO Audit</a>
            <p className="seo-cta-sub">No contract. No obligation. Just a clear picture of where you stand.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            {steps.map(s => (
              <div key={s.num} className="step-card">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Business Services</h2>
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
