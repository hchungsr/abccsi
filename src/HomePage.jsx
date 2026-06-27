import Navbar from './Navbar'
import Footer from './Footer'
import './App.css'

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Don't Throw It Away —<br />We Can Fix It!</h1>
          <p className="hero-sub">Is your computer slow? Laptop broken? Microwave stopped working?<br />Before you spend money on a new one, let us take a look — we can probably fix it for much less!</p>
          <div className="hero-problems">
            <div className="hero-problem">💻 Slow or Broken Computer</div>
            <div className="hero-problem">🖥️ Laptop Won't Turn On</div>
            <div className="hero-problem">🦠 Virus or Pop-Up Problems</div>
            <div className="hero-problem">📱 Tablet Issues</div>
            <div className="hero-problem">🍽️ Microwave Not Working</div>
            <div className="hero-problem">🔥 Oven or Stove Problems</div>
          </div>
          <p className="hero-exp">⭐ Over 30 Years Experience — Honest, Affordable Repairs ⭐</p>
          <div className="hero-btns">
            <a href="tel:3605398486" className="btn-primary">📞 Call Us: (360) 539-8486</a>
            <a href="#contact" className="btn-outline">Send Us a Message</a>
          </div>
        </div>
      </section>

      {/* FREE DIAGNOSTIC BANNER */}
      <section className="free-diag-banner">
        <div className="container free-diag-container">
          <div className="free-diag-text">
            <h2>🎉 Free Diagnostic for New Customers!</h2>
            <p>Not sure what's wrong with your device? Bring it in and we'll diagnose it for free — no obligation. Call us today for a free estimate and competent service you can trust.</p>
          </div>
          <a href="tel:3605398486" className="btn-primary free-diag-btn">📞 Call (360) 539-8486</a>
        </div>
      </section>

      {/* WHY FIX INSTEAD OF BUY */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Repair Instead of Replace?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">💰</div>
              <h3>Save Money</h3>
              <p>A repair often costs a fraction of buying new. Why spend $500 on a new laptop when we can fix yours for much less?</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Most diagnostics are done same day. Simple repairs are often completed within 24–48 hours if parts are in stock. If parts need to be ordered, we will give you an estimated timeline upfront — no surprises.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🌎</div>
              <h3>Better for the Environment</h3>
              <p>Repairing what you have keeps working electronics out of landfills. A greener choice for our community.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🤝</div>
              <h3>Honest Advice</h3>
              <p>We'll always tell you honestly if something isn't worth fixing. No surprise charges or unnecessary repairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">What We Fix</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>PC / Mac &amp; Tablets Repairs</h3>
              <ul>
                <li>Laptop and Desktop Repairs</li>
                <li>Screen LCD Repair</li>
                <li>Keyboard and Hinge Repairs</li>
                <li>Battery and Charging Port Replacements</li>
                <li>Fan and Heat Sink Repairs</li>
                <li>RAM and HDD/SSD Upgrades</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>IT / Tech Support and Services</h3>
              <ul>
                <li>Virus and Spyware Removal</li>
                <li>Data Recovery and Backup</li>
                <li>Windows/macOS Upgrade and Support</li>
                <li>Transfer Data from Old to New Computer</li>
                <li>Booting or Login Issue Support</li>
                <li>Computer Running Slow or Any other Issues...</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Home Appliances</h3>
              <ul>
                <li>Microwave not heating</li>
                <li>Microwave sparking or noisy</li>
                <li>Oven not working</li>
                <li>Stove burner problems</li>
                <li>General appliance diagnostics</li>
              </ul>
            </div>
          </div>
          <div className="brands">
            <p>Computer brands we service:</p>
            <div className="brand-list">
              <span>Dell</span><span>HP</span><span>Apple</span><span>Lenovo</span><span>Asus</span><span>Acer</span><span>Samsung</span><span>and more</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-alt">
        <div className="container about-container">
          <div className="about-text">
            <h2 className="section-title">About ABC Computer Solutions</h2>
            <p>We are a local family-friendly repair shop serving the Greater Olympia area for <strong>over 30 years</strong>. We speak plain English — no confusing tech talk. We explain what's wrong, what it will cost, and how long it will take — before we do anything.</p>
            <p>Whether you're a senior who needs help with a slow computer, a parent whose kid broke a laptop, or a homeowner with a broken microwave — we treat every customer with patience, respect, and honesty.</p>
            <p>We offer convenient <strong>pickup and drop-off service</strong> so you don't have to struggle carrying heavy equipment.</p>
            <div className="badges">
              <div className="badge">✅ MCSE Certified</div>
              <div className="badge">✅ 30+ Years Experience</div>
              <div className="badge">✅ No Tech Jargon</div>
              <div className="badge">✅ Free Estimates</div>
              <div className="badge">✅ Pickup &amp; Drop-Off</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section id="hours" className="section">
        <div className="container">
          <h2 className="section-title">Hours of Operation</h2>
          <div className="hours-table">
            <div className="hours-row"><span className="hours-day">Monday</span><span className="hours-time">9:00 AM – 5:00 PM</span></div>
            <div className="hours-row"><span className="hours-day">Tuesday</span><span className="hours-time">9:00 AM – 5:00 PM</span></div>
            <div className="hours-row"><span className="hours-day">Wednesday</span><span className="hours-time">9:00 AM – 5:00 PM</span></div>
            <div className="hours-row"><span className="hours-day">Thursday</span><span className="hours-time">9:00 AM – 5:00 PM</span></div>
            <div className="hours-row"><span className="hours-day">Friday</span><span className="hours-time">9:00 AM – 5:00 PM</span></div>
            <div className="hours-row closed"><span className="hours-day">Saturday</span><span className="hours-time">Closed</span></div>
            <div className="hours-row closed"><span className="hours-day">Sunday</span><span className="hours-time">Closed</span></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section section-alt">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"I've been a client for multiple years and always receive personal attention and quick turnaround. Reasonably priced and very trustworthy!"</p>
              <span>— Satisfied Customer, Olympia WA</span>
            </div>
            <div className="testimonial-card">
              <p>"They fixed my laptop screen the same day I brought it in. Excellent service and very professional. Highly recommend!"</p>
              <span>— Local Customer</span>
            </div>
            <div className="testimonial-card">
              <p>"Got rid of a nasty virus that two other shops couldn't fix. Honest people who know what they're doing."</p>
              <span>— Returning Customer</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How do I know if my computer is worth fixing?</h3>
              <p>Call us or bring it in — we'll give you a free estimate. As a rule of thumb, if the repair costs less than half the price of a new one, it's usually worth fixing. We'll always give you our honest opinion.</p>
            </div>
            <div className="faq-item">
              <h3>How much does computer repair cost in Olympia, WA?</h3>
              <p>It depends on the problem. We offer honest, reasonable pricing with no hidden fees. Call us at (360) 539-8486 for a free estimate.</p>
            </div>
            <div className="faq-item">
              <h3>How long does a repair take?</h3>
              <p>Most repairs are done same day or within 24–48 hours. We know you depend on your devices, so we work quickly.</p>
            </div>
            <div className="faq-item">
              <h3>Do you repair both PC and Mac computers?</h3>
              <p>Yes! We repair all major brands — Dell, HP, Apple, Lenovo, Asus, Acer, Samsung, and more.</p>
            </div>
            <div className="faq-item">
              <h3>Can you come to my home to pick up my computer?</h3>
              <p>Yes! We offer convenient pickup and drop-off service in the Olympia area. Call us at (360) 539-8486 to arrange a time.</p>
            </div>
            <div className="faq-item">
              <h3>Is my microwave worth repairing?</h3>
              <p>Often yes! Microwaves are frequently repairable for much less than buying a new one. Bring it in and we'll take a look for free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="section review-section">
        <div className="container review-container">
          <div className="review-icon">⭐</div>
          <h2>Happy With Our Service?</h2>
          <p>Your review helps other customers in Olympia find us and trust us. It only takes 1 minute and means the world to us!</p>
          <a href="https://g.page/r/CYejZ5UZT8zwEBM/review" target="_blank" rel="noopener noreferrer" className="btn-review">
            ⭐ Leave Us a Google Review
          </a>
          <div className="review-steps">
            <p><strong>How to leave a review (it's easy!):</strong></p>
            <ol>
              <li>Click the button above</li>
              <li>Sign in to your Google account (Gmail)</li>
              <li>Click the stars to rate us</li>
              <li>Write a few words about your experience</li>
              <li>Click <strong>Post</strong> — done!</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:3605398486">(360) 539-8486</a></p>
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
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>417 Stonewood DR SE<br />Olympia, WA 98513</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🚗</span>
                <div>
                  <strong>Pickup &amp; Drop-Off</strong>
                  <p>Convenient pickup and drop-off service available. Call us to arrange.</p>
                </div>
              </div>
            </div>
            <form className="contact-form" action="https://formspree.io/f/xjglboge" method="POST">
              <h3>Send Us a Message</h3>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="tel" name="phone" placeholder="Your Phone Number" />
              <input type="email" name="email" placeholder="Your Email" />
              <textarea name="message" placeholder="Describe your issue..." rows="4" required></textarea>
              <input type="hidden" name="_subject" value="New message from abccsi.com" />
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
