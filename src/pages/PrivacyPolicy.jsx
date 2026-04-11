import './Legal.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-hero-glow" />
        <div className="legal-hero-content">
          <span className="legal-badge">🔒 Legal</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2025 &nbsp;|&nbsp; Effective: January 2025</p>
        </div>
      </div>

      <div className="legal-body">
        <aside className="legal-toc">
          <div className="legal-toc-inner">
            <h4>Table of Contents</h4>
            <ul>
              {['Information We Collect','How We Use Information','Cookies & Tracking','Data Sharing','Data Security','Your Rights','Children\'s Privacy','Third-Party Links','Changes to Policy','Contact Us'].map((item, i) => (
                <li key={i}><a href={`#section-${i+1}`}><span>{i+1}.</span>{item}</a></li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="legal-content">

          <div className="legal-intro-box">
            <span>🙏</span>
            <p>At <strong>DharamYodha</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our platform dedicated to the saints and sages of Sanatan Dharma.</p>
          </div>

          <section id="section-1" className="legal-section">
            <div className="legal-section-num">01</div>
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information when you use DharamYodha:</p>
            <div className="legal-cards">
              <div className="legal-card">
                <span>👤</span>
                <h4>Personal Information</h4>
                <p>Name, email address, and contact details you voluntarily provide through our contact form or newsletter subscription.</p>
              </div>
              <div className="legal-card">
                <span>📊</span>
                <h4>Usage Data</h4>
                <p>Pages visited, time spent, browser type, device information, and IP address collected automatically when you browse our site.</p>
              </div>
              <div className="legal-card">
                <span>🍪</span>
                <h4>Cookies Data</h4>
                <p>Small data files stored on your device to enhance your browsing experience and remember your preferences.</p>
              </div>
            </div>
          </section>

          <section id="section-2" className="legal-section">
            <div className="legal-section-num">02</div>
            <h2>How We Use Your Information</h2>
            <p>The information we collect is used solely to improve your experience on DharamYodha:</p>
            <ul className="legal-list">
              <li>To provide and maintain our spiritual content platform</li>
              <li>To respond to your inquiries and contact form submissions</li>
              <li>To send newsletters and spiritual updates (only if you subscribed)</li>
              <li>To analyze website traffic and improve our content</li>
              <li>To detect and prevent fraudulent or abusive activity</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section id="section-3" className="legal-section">
            <div className="legal-section-num">03</div>
            <h2>Cookies & Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.</p>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead><tr><th>Cookie Type</th><th>Purpose</th><th>Duration</th></tr></thead>
                <tbody>
                  <tr><td>Essential</td><td>Required for basic site functionality</td><td>Session</td></tr>
                  <tr><td>Analytics</td><td>Understand how visitors use our site</td><td>1 Year</td></tr>
                  <tr><td>Preferences</td><td>Remember your settings and choices</td><td>6 Months</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="section-4" className="legal-section">
            <div className="legal-section-num">04</div>
            <h2>Data Sharing & Disclosure</h2>
            <p>We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share data only in these limited circumstances:</p>
            <ul className="legal-list">
              <li>With trusted service providers who assist in operating our website (under strict confidentiality)</li>
              <li>When required by law or to protect our legal rights</li>
              <li>In the event of a merger or acquisition (users will be notified)</li>
            </ul>
          </section>

          <section id="section-5" className="legal-section">
            <div className="legal-section-num">05</div>
            <h2>Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information including SSL encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section id="section-6" className="legal-section">
            <div className="legal-section-num">06</div>
            <h2>Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <div className="legal-rights-grid">
              {[['🔍','Access','Request a copy of your personal data'],['✏️','Correction','Request correction of inaccurate data'],['🗑️','Deletion','Request deletion of your personal data'],['🚫','Opt-Out','Unsubscribe from our communications anytime']].map(([icon,title,desc]) => (
                <div key={title} className="legal-right-item">
                  <span>{icon}</span>
                  <div><strong>{title}</strong><p>{desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section id="section-7" className="legal-section">
            <div className="legal-section-num">07</div>
            <h2>Children's Privacy</h2>
            <p>DharamYodha does not knowingly collect personal information from children under the age of 13. Our platform is designed for general audiences seeking spiritual knowledge. If you believe a child has provided us personal information, please contact us immediately.</p>
          </section>

          <section id="section-8" className="legal-section">
            <div className="legal-section-num">08</div>
            <h2>Third-Party Links</h2>
            <p>Our website may contain links to external websites such as YouTube channels of saints and sages. We are not responsible for the privacy practices of these third-party sites. We encourage you to review their privacy policies before providing any personal information.</p>
          </section>

          <section id="section-9" className="legal-section">
            <div className="legal-section-num">09</div>
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically.</p>
          </section>

          <section id="section-10" className="legal-section">
            <div className="legal-section-num">10</div>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className="legal-contact-box">
              <div><span>📧</span><span>contact@dharamyodha.com</span></div>
              <div><span>📍</span><span>India — Serving Sanatan Dharma Worldwide</span></div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
