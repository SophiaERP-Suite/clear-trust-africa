import { NavLink } from "react-router-dom";

const Terms = () => {
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
                      &nbsp; Terms and Condition
                    </li>
                  </ul>
                  <div className="line-separator"></div>
                </div>
                <h1 className="title h1 mt--20">
                  Terms and <span className="theme-gradient">Condition</span>
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
                  By accessing this website or requesting a DBS check, you agree
                  to comply with these Terms & Conditions. Please read them
                  carefully before continuing.
                </p>
                <h4>1. Our Service</h4>
                <p>
                  We facilitate Basic, Standard, and Enhanced DBS checks through
                  authorised channels. While we are not the official DBS
                  authority, we act as an intermediary to process your
                  application securely and efficiently.
                </p>
                <h4>2. Your Responsibilities</h4>
                <h6>You must:</h6>
                <ul>
                  <li>Provide accurate and complete information.</li>

                  <li>Submit valid identification and supporting documents.</li>

                  <li>
                    Obtain proper consent when applying on behalf of others.
                  </li>

                  <li>
                    Use the service only for lawful and authorised purposes.
                  </li>
                </ul>
                <h4>3. Processing & Delivery</h4>
                <p>
                  All checks are processed in accordance with DBS and government
                  regulations. Processing times may vary depending on
                  verification requirements. You will receive notification once
                  your report is completed.
                </p>
                <h4>4. Data Protection</h4>
                <p>
                  Your information is processed in line with our Privacy Policy.
                  By submitting your details, you consent to their use for
                  verification and compliance purposes.
                </p>
                <h4>5. Liability</h4>
                <p>
                  We are not responsible for delays, errors, or issues beyond
                  our control. Our total liability is limited to the value of
                  the service provided.
                </p>
                <h4>6. Updates</h4>
                <p>
                  We may modify these Terms at any time. Continued use of our
                  services implies acceptance of the updated Terms.
                </p>
                <h4>7. Contact</h4>
                <p>
                  For questions or support, please contact us at{" "}
                  <a href="mailto:info@alphachildcare.com">
                    info@alphachildcare.com
                  </a>{" "}
                  or visit our Contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Elements Area  */}
    </div>
  );
};

export default Terms;
