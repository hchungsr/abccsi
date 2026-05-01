import { useState } from 'react'
import './App.css'

const faqs = [
  {
    q: "What is local SEO and why does my business need it?",
    a: "Local SEO helps your business appear in Google search results and Google Maps when nearby customers search for your services. If your business doesn't show up on the first page of Google, you're losing customers to competitors who do. We help you rank where it counts."
  },
  {
    q: "How long does it take to see results from local SEO?",
    a: "Most businesses start seeing measurable improvements in 60–90 days. Local SEO builds momentum over time — the longer we work together, the stronger and more consistent your rankings become."
  },
  {
    q: "Can you help my business show up on Google Maps?",
    a: "Absolutely. Google Business Profile optimization is one of the most powerful things we do. We optimize your listing so you appear in the local map pack — those top 3 results that show up for nearly every local search."
  },
  {
    q: "How much does your local SEO service cost?",
    a: "Our SEO packages are tailored to your business size and goals. We offer honest, transparent pricing with no long-term contracts. Call us at (360) 539-8486 for a free consultation and custom quote."
  },
  {
    q: "How much does computer repair cost in Olympia, WA?",
    a: "Our repair costs vary depending on the issue. We offer honest, reasonable pricing with no hidden fees. Call us at (360) 539-8486 for a free estimate on your specific problem."
  },
  {
    q: "How long does a typical computer repair take?",
    a: "Most repairs are completed quickly — many same day or within 24–48 hours. We know you depend on your computer, so we work efficiently to get it back to you as fast as possible."
  },
  {
    q: "Do you repair both PC and Mac computers?",
    a: "Yes! We repair all major brands including Dell, HP, Apple, Lenovo, Asus, Acer, Samsung, and more. Whether it's a PC, Mac, laptop, or tablet, we can help."
  },
  {
    q: "Can you remove viruses and malware from my computer?",
    a: "Absolutely. Virus and malware removal is one of our most common services. We thoroughly clean your system and help protect it from future infections."
  },
  {
    q: "Do you offer pickup and drop-off service?",
    a: "Yes! We offer convenient pickup and drop-off service in the Olympia area. Call us at (360) 539-8486 to arrange a time that works for you."
  },
]

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

function StarRating({ count = 5 }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => <span key={i}>★</span>)}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const closeMenu = () => setMenuOpen(false)
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <img src="/logo.jpg" alt="ABC Computer Solutions Logo" className="nav-logo" />

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#marketing" onClick={closeMenu}>Local SEO</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#testimonials" onClick={closeMenu}>Reviews</a></li>
            <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          <a href="tel:3605398486" className="nav-phone">(360) 539-8486</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Olympia, WA · Trusted Since 1993</p>
          <h1>Tech Support &amp; Local SEO<br />for Olympia Businesses</h1>
          <p className="hero-sub">
            We fix your computers <em>and</em> help your business get found on Google.
            One trusted local partner for all your technology and marketing needs.
          </p>
          <div className="hero-btns">
            <a href="tel:3605398486" className="btn-primary">Call (360) 539-8486</a>
            <a href="#marketing" className="btn-outline btn-outline-green">Free SEO Audit</a>
            <a href="#services" className="btn-outline">Computer Repair</a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="container trust-bar-grid">
          <div className="trust-item">
            <strong>30+</strong>
            <span>Years in Business</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <strong>MCSE</strong>
            <span>Certified Technicians</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <strong>Local SEO</strong>
            <span>Google Ranking Experts</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <strong>Free</strong>
            <span>Estimates &amp; SEO Audits</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">

            <div className="service-card service-card--featured">
              <div className="service-card-badge">Internet Marketing</div>
              <div className="service-icon">📈</div>
              <h3>Local SEO &amp; Internet Marketing</h3>
              <ul>
                <li>Google Business Profile optimization</li>
                <li>Local search ranking &amp; visibility</li>
                <li>On-page website SEO</li>
                <li>Citation &amp; directory listings</li>
                <li>Review generation strategy</li>
                <li>Monthly ranking reports</li>
              </ul>
              <a href="#marketing" className="service-cta">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>PC, Mac &amp; Tablet Repair</h3>
              <ul>
                <li>Screen replacement</li>
                <li>Keyboard &amp; battery replacement</li>
                <li>RAM &amp; storage upgrades</li>
                <li>Hardware diagnostics &amp; repair</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>IT &amp; Tech Support</h3>
              <ul>
                <li>Virus &amp; malware removal</li>
                <li>Data recovery</li>
                <li>OS upgrades &amp; reinstallation</li>
                <li>Network &amp; Wi-Fi troubleshooting</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Home Appliance Repair</h3>
              <ul>
                <li>Microwave repair</li>
                <li>Oven &amp; stove repair</li>
                <li>General appliance diagnostics</li>
              </ul>
            </div>

          </div>
          <div className="brands">
            <p>Computer brands we service:</p>
            <div className="brand-list">
              {['Dell', 'HP', 'Apple', 'Lenovo', 'Asus', 'Acer', 'Samsung', 'and more'].map(b => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section id="marketing" className="section section-dark">
        <div className="container">
          <span className="section-tag section-tag--light">Internet Marketing</span>
          <h2 className="section-title section-title--light">Get Found by More Local Customers</h2>
          <p className="section-intro">
            97% of consumers search online to find local businesses. If your business isn't
            showing up on Google, you're handing those customers to your competitors.
            We specialize in local SEO for Olympia-area businesses — helping you rank higher,
            get more calls, and grow your revenue.
          </p>

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
            <a href="#contact" className="btn-green">Get a Free SEO Audit</a>
            <p className="seo-cta-sub">No contract. No obligation. Just a clear picture of where you stand.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-alt">
        <div className="container">
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">How Local SEO Works With Us</h2>
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

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container about-container">
          <div className="about-text">
            <span className="section-tag" style={{ marginBottom: '12px', display: 'inline-block' }}>About Us</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Your Local Tech &amp; Marketing Partner</h2>
            <p>ABC Computer Solutions has been serving the Greater Olympia area for over 30 years. We started as a computer repair and IT support company — and we've grown into a full-service technology partner that also helps local businesses get found online.</p>
            <p>Our MCSE-certified technicians handle everything from broken screens to complex virus removal. Our marketing team helps restaurants, retailers, service providers, and other local businesses rank on Google and attract more customers.</p>
            <p>We know Olympia. We live here. We understand what local customers search for — and we put your business in front of them.</p>
            <div className="badges">
              <div className="badge">✅ MCSE Certified</div>
              <div className="badge">✅ 30+ Years Experience</div>
              <div className="badge badge--green">📈 Local SEO Experts</div>
              <div className="badge badge--green">📍 Olympia-Based</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Is your business invisible on Google?</h2>
            <p>Get a free local SEO audit and see exactly where you stand — and how to fix it.</p>
          </div>
          <div className="cta-btns">
            <a href="tel:3605398486" className="btn-primary cta-btn">Call (360) 539-8486</a>
            <a href="#contact" className="btn-outline-white cta-btn">Request Free Audit</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section section-alt">
        <div className="container">
          <span className="section-tag">Customer Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <StarRating />
              <p>"I've been a client for multiple years and always receive personal attention and quick turnaround. Reasonably priced and very trustworthy!"</p>
              <span>— Satisfied Customer, Olympia WA</span>
            </div>
            <div className="testimonial-card">
              <StarRating />
              <p>"They fixed my laptop screen the same day I brought it in. Excellent service and very professional. Highly recommend!"</p>
              <span>— Local Customer, Olympia WA</span>
            </div>
            <div className="testimonial-card">
              <StarRating />
              <p>"Got rid of a nasty virus that two other shops couldn't fix. Honest people who know what they're doing."</p>
              <span>— Returning Customer, Lacey WA</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <span className="section-tag">Common Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(i)} aria-expanded={openFaq === i}>
                  <span>{item.q}</span>
                  <span className="faq-chevron">{openFaq === i ? '▲' : '▼'}</span>
                </button>
                {openFaq === i && <p className="faq-answer">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT + HOURS */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-left">
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:3605398486">(360) 539-8486</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>417 Stonewood DR SE<br />Olympia, WA 98513</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:henry.abccomputers@gmail.com">henry.abccomputers@gmail.com</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🚗</span>
                  <div>
                    <strong>Pickup &amp; Drop-Off</strong>
                    <p>Convenient service available — call to arrange.</p>
                  </div>
                </div>
              </div>

              <div className="hours-card">
                <h3 className="hours-title">Hours of Operation</h3>
                <div className="hours-table">
                  {[
                    ['Monday',    '9:00 AM – 5:00 PM'],
                    ['Tuesday',   '9:00 AM – 5:00 PM'],
                    ['Wednesday', '9:00 AM – 5:00 PM'],
                    ['Thursday',  '9:00 AM – 5:00 PM'],
                    ['Friday',    '9:00 AM – 5:00 PM'],
                    ['Saturday',  null],
                    ['Sunday',    null],
                  ].map(([day, time]) => (
                    <div key={day} className={`hours-row ${!time ? 'closed' : ''}`}>
                      <span className="hours-day">{day}</span>
                      <span className="hours-time">{time ?? 'Closed'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-right">
              <form className="contact-form" action="https://formspree.io/f/xjglboge" method="POST">
                <h3>Send Us a Message</h3>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="tel" name="phone" placeholder="Your Phone Number" />
                <input type="email" name="email" placeholder="Your Email" />
                <select name="service">
                  <option value="">I need help with… (optional)</option>
                  <option value="seo">Local SEO / Internet Marketing</option>
                  <option value="repair">Computer Repair</option>
                  <option value="it">IT Support</option>
                  <option value="appliance">Appliance Repair</option>
                  <option value="other">Other</option>
                </select>
                <textarea name="message" placeholder="Tell us more about your situation..." rows="4" required />
                <input type="hidden" name="_subject" value="New message from abccsi.com" />
                <button type="submit" className="btn-primary">Send Message</button>
              </form>

              <div className="map-container">
                <iframe
                  title="ABC Computer Solutions Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.7!2d-122.8542!3d46.9965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDU5JzQ3LjQiTiAxMjLCsDUxJzE1LjEiVw!5e0!3m2!1sen!2sus!4v1"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <img src="/logo.jpg" alt="ABC Computer Solutions" className="footer-logo" />
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} ABC Computer Solutions. All rights reserved.</p>
            <p>Computer Repair &amp; Local SEO · Serving Olympia, Lacey, Tumwater &amp; Thurston County, WA</p>
          </div>
          <div className="footer-contact">
            <a href="tel:3605398486">(360) 539-8486</a>
            <a href="mailto:henry.abccomputers@gmail.com">henry.abccomputers@gmail.com</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
