import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './App.css'

// ─── TOGGLE: set to true when ready to make this page public ───
const BUSINESS_PAGE_ENABLED = false
// ────────────────────────────────────────────────────────────────

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
