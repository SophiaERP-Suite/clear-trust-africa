import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="tmp-footer footer-style-default variation-two position-relative dark-footer">
      <div className="footer-top pt--0">
        <div className="container pb--80"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="tmp-footer-widget">
                <div className="logo">
                  <NavLink to="/home">
                    <img
                      className="logo-light"
                      src="./assets/main/images/logo/clear3.png"
                      alt="Corporate Logo"
                    />
                    <img
                      className="logo-dark"
                      src="./assets/main/images/logo/clear3.png"
                      alt="Corporate Logo"
                    />
                  </NavLink>
                </div>
                <p className="subtitle mt--30 text-white">
                  Get started today with a trusted background verification
                  solution tailored to your needs.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="tmp-footer-widget">
                <h4 className="title">Company</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/request">Request</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Pricing</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="tmp-footer-widget">
                <h4 className="title">Services</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <NavLink to="#">How It Works</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services#basic-check">Basic DBS Check</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services#standard-check">Standard DBS Check</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services#enhanced-check">Enhanced DBS Check</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="tmp-footer-widget">
                <h4 className="title">Stay With Us.</h4>
                <div className="inner">
                  <h6 className="subtitle">
                    Trusted by clients and organizations worldwide for reliable
                    screening solutions.
                  </h6>
                  <ul className="social-icon social-default justify-content-start">
                    <li>
                      <a
                        href="https://www.facebook.com/Alpha_Childcare-100153735026940"
                        target="_blank"
                      >
                        <i className="feather-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCF6CTF2_t9GokCgUQ_6eT1A"
                        target="_blank"
                      >
                        <i className="feather-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/alpha_childcare/"
                        target="_blank"
                      >
                        <i className="feather-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   Start Copy Right Area   */}
      <div className="copyright-area copyright-style-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="copyright-left">
                <ul className="ft-menu link-hover">
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms-and-condition">Terms And Condition</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12 col-12">
              <div className="copyright-right text-center text-lg-end">
                <p className="copyright-text text-white">
                  All Right © ClearTrust Africa<span id="year"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   End Copy Right Area   */}
    </footer>
  );
};

export default Footer;
