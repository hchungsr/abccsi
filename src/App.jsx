import './App.css'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <img src="/logo.jpg" alt="ABC Computer Solutions Logo" className="nav-logo" />
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="tel:3605398486" className="nav-phone">(360) 539-8486</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>ABC Computer Solutions</h1>
          <p className="hero-sub">Professional Computer Repair &amp; IT Support — Serving the Greater Olympia Area</p>
          <p className="hero-exp">Over 30 Years of Expertise</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get Help Now</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
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
            <p>Brands we service:</p>
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
            <h2 className="section-title">About Us</h2>
            <p>ABC Computer Solutions has been serving the Greater Olympia area for over 30 years. Our MCSE-certified IT specialists bring deep expertise and a personal touch to every repair.</p>
            <p>We offer convenient pickup and drop-off services so you never have to go out of your way. We take pride in fast turnaround times and honest, reasonable pricing.</p>
            <div className="badges">
              <div className="badge">✅ MCSE Certified</div>
              <div className="badge">✅ 30+ Years Experience</div>
              <div className="badge">✅ Fast Turnaround</div>
              <div className="badge">✅ Reasonable Pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section id="hours" className="section">
        <div className="container">
          <h2 className="section-title">Hours of Operation</h2>
          <div className="hours-table">
            <div className="hours-row">
              <span className="hours-day">Monday</span>
              <span className="hours-time">9:00 AM – 5:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Tuesday</span>
              <span className="hours-time">9:00 AM – 5:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Wednesday</span>
              <span className="hours-time">9:00 AM – 5:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Thursday</span>
              <span className="hours-time">9:00 AM – 5:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Friday</span>
              <span className="hours-time">9:00 AM – 5:00 PM</span>
            </div>
            <div className="hours-row closed">
              <span className="hours-day">Saturday</span>
              <span className="hours-time">Closed</span>
            </div>
            <div className="hours-row closed">
              <span className="hours-day">Sunday</span>
              <span className="hours-time">Closed</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section">
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
              <h3>How much does computer repair cost in Olympia, WA?</h3>
              <p>Our repair costs vary depending on the issue. We offer honest, reasonable pricing with no hidden fees. Call us at (360) 539-8486 for a free estimate on your specific problem.</p>
            </div>
            <div className="faq-item">
              <h3>How long does a typical computer repair take?</h3>
              <p>Most repairs are completed quickly — many same day or within 24–48 hours. We know you depend on your computer, so we work efficiently to get it back to you as fast as possible.</p>
            </div>
            <div className="faq-item">
              <h3>Do you repair both PC and Mac computers?</h3>
              <p>Yes! We repair all major brands including Dell, HP, Apple, Lenovo, Asus, Acer, Samsung, and more. Whether it's a PC, Mac, laptop, or tablet, we can help.</p>
            </div>
            <div className="faq-item">
              <h3>Can you remove viruses and malware from my computer?</h3>
              <p>Absolutely. Virus and malware removal is one of our most common services. We thoroughly clean your system and help protect it from future infections.</p>
            </div>
            <div className="faq-item">
              <h3>Can you recover lost or deleted files?</h3>
              <p>Yes, we offer professional data recovery services. Whether your hard drive crashed or you accidentally deleted important files, we have the tools to recover your data.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer pickup and drop-off service?</h3>
              <p>Yes! We offer convenient pickup and drop-off service in the Olympia area. Call us at (360) 539-8486 to arrange a time that works for you.</p>
            </div>
            <div className="faq-item">
              <h3>What areas do you serve?</h3>
              <p>We serve the Greater Olympia area including Olympia, Lacey, Tumwater, and surrounding Thurston County communities.</p>
            </div>
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
                  <p>Convenient pickup and drop-off service available. Call us to arrange.</p>
                </div>
              </div>
            </div>
            <form className="contact-form" action="https://formspree.io/f/xjglboge" method="POST">
              <h3>Send Us a Message</h3>
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Your Phone Number" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Describe your issue..." rows="4" required></textarea>
              <input type="hidden" name="_subject" value="New message from abccsi.com" />
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <img src="/logo.jpg" alt="ABC Computer Solutions" className="footer-logo" />
          <p>&copy; {new Date().getFullYear()} ABC Computer Solutions. All rights reserved.</p>
          <p>Serving the Greater Olympia, WA area</p>
        </div>
      </footer>
    </>
  )
}

export default App
