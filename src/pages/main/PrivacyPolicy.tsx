import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Start Breadcarumb area  */}
      <div className="breadcrumb-area breadcarumb-style-1 ptb--30 pt--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-start">
                <div className="breadcrumb-page-title">
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className="tmp-breadcrumb-item active">
                      &nbsp; Privacy Policy
                    </li>
                  </ul>
                  <div className="line-separator"></div>
                </div>
                <h1 className="title h1 mt--20">
                  Privacy <span className="theme-gradient">Policy</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcarumb area  */}

      {/* Start Elements Area  */}
      <div className="tmp-elements-area tmp-section-gapBottom privacy-policy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="entry-content">
                <p className="privacy-paragraph">
                  At ClearTrust Africa, we value your privacy and are committed
                  to protecting your personal data. This policy explains how we
                  collect, use, and safeguard your information when you use our
                  DBS verification services.
                </p>
                <h4>1. Information We Collect</h4>
                <h6>We may collect:</h6>
                <ul>
                  <li>
                    Personal details — name, date of birth, email, phone, and
                    address.
                  </li>

                  <li>
                    Identification documents — passport, ID card, driver’s
                    licence, proof of address.
                  </li>

                  <li>
                    Payment details — handled securely by trusted third-party
                    processors.
                  </li>

                  <li>
                    Technical data — IP address, browser, device, and usage
                    activity.
                  </li>
                </ul>
                <h4>2. How We Use Your Information</h4>
                <h6>We use your data to:</h6>
                <ul>
                  <li>Process DBS checks and verify your identity.</li>

                  <li>Deliver reports and communicate updates.</li>

                  <li>Improve our services and maintain security.</li>

                  <li>Meet legal and regulatory requirements.</li>
                </ul>
                <h4>3. Sharing Your Data</h4>
                <h6>We share data only with:</h6>
                <ul>
                  <li>
                    Verified third-party providers (e.g., payment and
                    verification partners).
                  </li>

                  <li>Authorities when legally required.</li>
                  <li>We never sell your data to third parties.</li>
                </ul>
                <h4>4. Data Storage & Retention</h4>
                <p>
                  Your data is stored securely and retained only as long as
                  necessary to complete verification and comply with legal
                  obligations. Sensitive information is encrypted and
                  permanently deleted after use.
                </p>
                <h4>5. Your Rights</h4>
                <h6>You can request to:</h6>
                <ul>
                  <li> Access, correct, or delete your data.</li>

                  <li>Restrict processing or withdraw consent.</li>
                  <li>
                    Contact us at{" "}
                    <a href="info@alphachildcare.com">
                      info@alphachildcare.com
                    </a>{" "}
                    for any privacy-related requests.
                  </li>
                </ul>
                <h4>6. Cookies</h4>
                <p>
                  We use cookies to enhance performance and analytics. You can
                  adjust cookie preferences in your browser settings.
                </p>
                <h4>7. Security</h4>
                <p>
                  We apply strict technical and organizational measures to
                  protect your data from unauthorized access or misuse.
                </p>
                <h4>8. Updates</h4>
                <p>
                  We may update this policy occasionally. The latest version
                  will always be available on this page.
                </p>
                <h4>9. Contact Us</h4>
                <h6>For privacy questions, please contact us at:</h6>
                <pre>
                  <a href="mailto:info@alphachildcare.com">
                    info@alphachildcare.com
                  </a>
                </pre>
                <pre>
                  <a href="tel:+442084691888">+44 20 8469 1888</a>{" "}
                </pre>
                <pre>
                  <a href="https://maps.app.goo.gl/aXfsjpTHZpoo2E7j9">
                    28-31 Plumbridge St Greenwich SE10 8PA
                  </a>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Elements Area  */}
    </div>
  );
};

export default PrivacyPolicy;
