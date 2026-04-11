import './Legal.css';

export default function TermsOfUse() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-hero-glow" />
        <div className="legal-hero-content">
          <span className="legal-badge">📜 Legal</span>
          <h1>Terms of Use</h1>
          <p>Last updated: January 2025 &nbsp;|&nbsp; Please read carefully before using our platform</p>
        </div>
      </div>

      <div className="legal-body">
        <aside className="legal-toc">
          <div className="legal-toc-inner">
            <h4>Table of Contents</h4>
            <ul>
              {['Acceptance of Terms','Use of Platform','Intellectual Property','User Conduct','Content Disclaimer','Limitation of Liability','Indemnification','Termination','Governing Law','Contact Us'].map((item, i) => (
                <li key={i}><a href={`#term-${i+1}`}><span>{i+1}.</span>{item}</a></li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="legal-content">

          <div className="legal-intro-box">
            <span>🕉</span>
            <p>Welcome to <strong>DharamYodha</strong>. By accessing or using our platform, you agree to be bound by these Terms of Use. These terms govern your use of our website dedicated to the saints and sages of Sanatan Dharma.</p>
          </div>

          <section id="term-1" className="legal-section">
            <div className="legal-section-num">01</div>
            <h2>Acceptance of Terms</h2>
            <p>By accessing and using DharamYodha, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our platform. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.</p>
          </section>

          <section id="term-2" className="legal-section">
            <div className="legal-section-num">02</div>
            <h2>Use of Platform</h2>
            <p>DharamYodha grants you a limited, non-exclusive, non-transferable license to access and use our platform for personal, non-commercial purposes. You may:</p>
            <ul className="legal-list">
              <li>Browse and read content about saints and sages</li>
              <li>Share content links on social media with proper attribution</li>
              <li>Subscribe to our newsletter for spiritual updates</li>
              <li>Contact us through our contact form</li>
            </ul>
            <div className="legal-highlight-box">
              <span>⚠️</span>
              <p>You may <strong>not</strong> reproduce, distribute, modify, or create derivative works from our content without explicit written permission from DharamYodha.</p>
            </div>
          </section>

          <section id="term-3" className="legal-section">
            <div className="legal-section-num">03</div>
            <h2>Intellectual Property</h2>
            <p>All content on DharamYodha — including text, images, graphics, logos, and design — is the intellectual property of DharamYodha or its content suppliers and is protected by applicable copyright and trademark laws.</p>
            <div className="legal-cards">
              <div className="legal-card">
                <span>©</span>
                <h4>Copyright</h4>
                <p>All written content, descriptions, and articles are © DharamYodha 2024-2025.</p>
              </div>
              <div className="legal-card">
                <span>™</span>
                <h4>Trademarks</h4>
                <p>The DharamYodha name and logo are trademarks and may not be used without permission.</p>
              </div>
              <div className="legal-card">
                <span>🖼️</span>
                <h4>Images</h4>
                <p>Saint images are used for educational and devotional purposes with respect and reverence.</p>
              </div>
            </div>
          </section>

          <section id="term-4" className="legal-section">
            <div className="legal-section-num">04</div>
            <h2>User Conduct</h2>
            <p>When using DharamYodha, you agree to conduct yourself with the same reverence and respect that the platform embodies. You must not:</p>
            <ul className="legal-list">
              <li>Post or transmit any content that is disrespectful to any saint, religion, or spiritual tradition</li>
              <li>Use the platform for any unlawful or fraudulent purpose</li>
              <li>Attempt to gain unauthorized access to any part of our platform</li>
              <li>Transmit viruses, malware, or any other harmful code</li>
              <li>Scrape, crawl, or harvest data from our platform without permission</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section id="term-5" className="legal-section">
            <div className="legal-section-num">05</div>
            <h2>Content Disclaimer</h2>
            <p>DharamYodha provides information about saints and sages for educational and devotional purposes. While we strive for accuracy:</p>
            <ul className="legal-list">
              <li>Content is provided "as is" without warranties of any kind</li>
              <li>We do not guarantee the completeness or accuracy of all information</li>
              <li>Spiritual experiences and beliefs are personal — we do not make any claims</li>
              <li>External links to YouTube or other platforms are not under our control</li>
            </ul>
          </section>

          <section id="term-6" className="legal-section">
            <div className="legal-section-num">06</div>
            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, DharamYodha shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our platform, even if we have been advised of the possibility of such damages.</p>
          </section>

          <section id="term-7" className="legal-section">
            <div className="legal-section-num">07</div>
            <h2>Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless DharamYodha and its team from any claims, damages, losses, liabilities, costs, and expenses arising from your use of the platform or violation of these Terms of Use.</p>
          </section>

          <section id="term-8" className="legal-section">
            <div className="legal-section-num">08</div>
            <h2>Termination</h2>
            <p>We reserve the right to terminate or suspend access to our platform at our sole discretion, without notice, for conduct that we believe violates these Terms of Use or is harmful to other users, us, third parties, or for any other reason.</p>
          </section>

          <section id="term-9" className="legal-section">
            <div className="legal-section-num">09</div>
            <h2>Governing Law</h2>
            <p>These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of India.</p>
          </section>

          <section id="term-10" className="legal-section">
            <div className="legal-section-num">10</div>
            <h2>Contact Us</h2>
            <p>For any questions regarding these Terms of Use, please reach out to us:</p>
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
