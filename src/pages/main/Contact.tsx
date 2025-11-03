const Contact = () => {
  return (
    <div className="main-content">
      {/* Banner Area */}
      <div className="pages-banner">
        <div className="pages-banner-content">
          <h2>Get in Touch With Us</h2>

          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="tmp-contact-area tmp-section-gap contact-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tmp-section-title-border text-center">
                <div className="pres-line-separator-wrapper text-center mb--10">
                  <div className="line-separator line-left"></div>
                  <span className="subtitle">
                    <span className="number">
                      <a href="#"></a>
                    </span>
                    <span className="subtitle-text">Contact With Us</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h2 className="title   mt--20 tmp-title-split">
                  Let’s Get in Touch
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <div className="col-lg-12">
              <div className="tmp-contact-address mt_dec--30">
                <div className="row g-5">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="tmp-address tmponhover">
                      <div className="icon">
                        <i className="feather-headphones"></i>
                      </div>
                      <div className="inner">
                        <h4 className="title">Call us today</h4>
                        <p>
                          <a href="tel:+442084691888">+44 20 8469 1888</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="tmp-address tmponhover">
                      <div className="icon">
                        <i className="feather-mail"></i>
                      </div>
                      <div className="inner">
                        <h4 className="title">Send an Email</h4>
                        <p>
                          <a href="mailto:info@alphachildcare.com">
                            info@alphachildcare.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="tmp-address tmponhover">
                      <div className="icon">
                        <i className="feather-map-pin"></i>
                      </div>
                      <div className="inner">
                        <h4 className="title">Visit our HQ</h4>
                        <p>28-31 Plumbridge St, Greenwich, SE10 8PA, UK</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="tmp-office-branch tmp-section-gapBottom">
        <div className="container">
          <h2 className="title tmp-title-split">Other Branches</h2>
          <div className="section-inner pt--30 pt_md--30 pt_sm--30 d-flex gap-5 flex-column">
            <div
              className="branch-wrapper2 tmponhover"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="content">
                <p className="desc">
                  3 Darnley Rd, Hackney, <br />
                  London E9 6QH
                </p>
                <br />

                <a
                  href="https://maps.app.goo.gl/qdyVfoSkqRfWPfyz5"
                  className="tmp-btn btn-primary btn-two"
                >
                  Get Direction <i className="feather-arrow-right"></i>
                </a>
              </div>
              <div className="image-area">
                <img
                  src="/assets/main/images/bg/ct_alpha_1.jpg"
                  width="645"
                  alt=""
                />
              </div>
            </div>
            <div
              className="branch-wrapper2 tmponhover"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="content">
                <p className="desc">
                  Woodhill Primary School Woodhill,
                  <br /> London SE18 5JE
                </p>
                <br />
                <a
                  href="https://maps.app.goo.gl/RJj4WJxcQCEdkipe9"
                  className="tmp-btn btn-primary btn-two"
                >
                  Get Direction <i className="feather-arrow-right"></i>
                </a>
              </div>
              <div className="image-area">
                <img
                  src="/assets/main/images/bg/ct_alpha_2.jpg"
                  width="645"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="inv-appoinment-area-start tmp-section-gapBottom">
        <div className="container">
          <div>
            <h3>We’d Love to Hear From You</h3>
            <p>
              Have a question or need assistance? &nbsp;Fill out the form below,
              and our team will get back to you promptly.
            </p>
          </div>

          <div className="row g-5">
            <div className="col-lg-5">
              <div className="aapoiment-left-area-thumbnail">
                <img
                  src="/assets/main/images/bg/ct_coontact.jpg"
                  alt="appoinment"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <form
                className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form"
                id="contact-form"
              >
                <div className="form-group-wrapper">
                  <div className="form-group tmponhover">
                    <input
                      type="text"
                      name="contact-name"
                      id="contact-name"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group tmponhover">
                    <input
                      type="text"
                      name="contact-phone"
                      id="contact-phone"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="form-group-wrapper">
                  <div className="form-group tmponhover">
                    <input
                      type="email"
                      id="contact-email"
                      name="contact-email"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="form-group tmponhover">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="form-group tmponhover">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group tmponhover">
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div className="form-group">
                  <button
                    name="submit"
                    type="submit"
                    id="submit"
                    className="btn-default btn-large tmp-btn"
                    style={{ width: "100%" }}
                  >
                    <span>Submit Now</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="tmp-map-area tmp-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 sal-animate">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.1858028010656!2d-0.016654924147152625!3d51.47310371320925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760288285251a1%3A0x8ed9002e0971012!2s28-31%20Plumbridge%20St%2C%20London%20SE10%208PA%2C%20UK!5e0!3m2!1sen!2sng!4v1761824417094!5m2!1sen!2sng"
                height="550"
                style={{ border: 0 }}
                loading="lazy"
                spellCheck={false}
                aria-label="To enrich screen reader interactions, please activate Accessibility in Grammarly extension settings"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
