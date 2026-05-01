export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src="/logo.jpg" alt="ABC Computer Solutions" className="footer-logo" />
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} ABC Computer Solutions. All rights reserved.</p>
          <p>Computer Repair &amp; Internet Marketing · Olympia, Lacey, Tumwater &amp; Thurston County, WA</p>
        </div>
        <div className="footer-contact">
          <a href="tel:3605398486">(360) 539-8486</a>
          <a href="mailto:henry.abccomputers@gmail.com">henry.abccomputers@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
