import { useContext } from "react";
import { RequestContext } from "../../utils/main/Context";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { setRequestType } = useContext(RequestContext);

  const navigate = useNavigate();

  const requestService =
    (type: "basic" | "standard" | "enhanced") =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      setRequestType(type);
      navigate("/request");
    };

  return (
    <div className="main-content">
      {/* Banner Area */}
      <div className="pages-banner">
        <div className="pages-banner-content">
          <h2>Our Services</h2>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>Services</li>
          </ul>
        </div>
      </div>
      {/* Service Area */}
      <div className="my-business-service-area tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-flex-between">
                <div className="tmp-section-title-border text-start">
                  <div className="pres-line-separator-wrapper text-start ">
                    <span className="subtitle">
                      <span className="subtitle-text">Our Services</span>
                    </span>
                    <div className="line-separator line-right"></div>
                  </div>
                  <h2 className="title w-700 tmp-title-split">
                    Our Comprehensive Verification & <br />
                    Compliance Services
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="tmp-about-area mt--50">
            <div className="container">
              <div
                className="row g-5 row--40 align-items-center"
                id="basic-check"
              >
                <div className="col-lg-6 order-2 order-xl-1">
                  <div className="content">
                    <div className="tmp-section-title-border text-start">
                      <div className="pres-line-separator-wrapper mb--10 tmp-title-split">
                        <span className="subtitle">
                          <span className="number">01</span>{" "}
                          <span className="subtitle-text">01</span>
                        </span>
                        <div className="line-separator"></div>
                      </div>
                      <h2 className="title w-700 mb--20 tmp-title-split">
                        Basic DBS Check
                      </h2>

                      <p
                        className="tmp-title-split-p"
                        style={{ marginBottom: "20px" }}
                      >
                        The Basic DBS Check offers a reliable overview of an
                        individual’s criminal record, showing any unspent
                        convictions from the Police National Computer. It
                        supports roles that require integrity verification and
                        helps organizations make informed decisions while
                        ensuring transparency and compliance.
                      </p>

                      <div className="service-features-container">
                        <h4>Features</h4>

                        <ul>
                          <li>
                            Displays unspent criminal convictions as defined by
                            law.
                          </li>
                          <li>
                            Confirms an individual’s identity and personal
                            background.
                          </li>
                          <li>
                            Provides official certification recognized by
                            employers and institutions.
                          </li>

                          <li>
                            Ensures strict data security and confidentiality
                            during processing.
                          </li>

                          <li>
                            Supports compliance with legal and organizational
                            standards.
                          </li>

                          <li>
                            Suitable for employment, licensing, and general
                            screening purposes.
                          </li>
                        </ul>
                      </div>

                      <div className="read-more-btn btn-group gap-4 mt--20">
                        <a
                          className="tmp-btn btn-primary round btn-large"
                          href="/request"
                          onClick={requestService("basic")}
                        >
                          Request Service
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-xl-2 pl--60">
                  <div className="video-btn">
                    <div className="video-popup icon-center about-relative-thumb">
                      <div className="overlay-content">
                        <div className="thumbnail invers-anime">
                          <img
                            className="radius-small"
                            src="/assets/main/images/about/03.webp"
                            alt="Corporate Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="row g-5 row--40 align-items-center mt--40"
                id="standard-check"
              >
                <div className="col-lg-6 order-1 order-xl-2 pl--60">
                  <div className="content">
                    <div className="tmp-section-title-border text-start">
                      <div className="pres-line-separator-wrapper mb--10 tmp-title-split">
                        <span className="subtitle">
                          <span className="number">02</span>{" "}
                          <span className="subtitle-text">02</span>
                        </span>
                        <div className="line-separator"></div>
                      </div>
                      <h2 className="title w-700 mb--20 tmp-title-split">
                        Standard DBS Check
                      </h2>

                      <p
                        className="tmp-title-split-p"
                        style={{ marginBottom: "20px" }}
                      >
                        The Standard DBS Check provides detailed insight into an
                        individual’s criminal history, including spent and
                        unspent convictions, cautions, and reprimands. It is
                        ideal for positions of trust that require integrity and
                        accountability. This check helps organizations ensure
                        safer and more compliant recruitment decisions.
                      </p>

                      <div className="service-features-container">
                        <h4>Features</h4>

                        <ul>
                          <li>
                            Verification of spent and unspent convictions.
                          </li>

                          <li> Disclosure of cautions and reprimands.</li>

                          <li>Secure identity and data validation.</li>

                          <li>
                            Automated verification through police databases.
                          </li>

                          <li>Comprehensive and confidential reports.</li>

                          <li>Real-time tracking of verification progress.</li>
                        </ul>
                      </div>

                      <div className="read-more-btn btn-group gap-4 mt--20">
                        <a
                          className="tmp-btn btn-primary round btn-large"
                          href="/request"
                          onClick={requestService("standard")}
                        >
                          Request Service
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-2 order-xl-1 ">
                  <div className="video-btn">
                    <div className="video-popup icon-center about-relative-thumb">
                      <div className="overlay-content">
                        <div className="thumbnail invers-anime">
                          <img
                            className="radius-small"
                            src="/assets/main/images/about/03.webp"
                            alt="Corporate Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="row g-5 row--40 align-items-center mt--40"
                id="enhanced-check"
              >
                <div className="col-lg-6 order-2 order-xl-1">
                  <div className="content">
                    <div className="tmp-section-title-border text-start">
                      <div className="pres-line-separator-wrapper mb--10 tmp-title-split">
                        <span className="subtitle">
                          <span className="number">03</span>{" "}
                          <span className="subtitle-text">03</span>
                        </span>
                        <div className="line-separator"></div>
                      </div>
                      <h2 className="title w-700 mb--20 tmp-title-split">
                        Enhanced DBS Check
                      </h2>

                      <p
                        className="tmp-title-split-p"
                        style={{ marginBottom: "20px" }}
                      >
                        The Enhanced DBS Check offers the most comprehensive
                        level of background screening, including all details
                        from the Standard Check plus relevant police and barred
                        list information. It is designed for roles involving
                        close contact with vulnerable groups such as children or
                        adults at risk, ensuring maximum safety and compliance.
                      </p>

                      <div className="service-features-container">
                        <h4>Features</h4>

                        <ul>
                          <li>Includes all Standard Check information.</li>

                          <li>Searches children’s and adults’ barred lists.</li>

                          <li> Local police record disclosures.</li>

                          <li>
                            Advanced identity verification and data protection.
                          </li>

                          <li> Designed for safeguarding-sensitive roles.</li>

                          <li> Detailed, compliance-ready reporting</li>
                        </ul>
                      </div>

                      <div className="read-more-btn btn-group gap-4 mt--20">
                        <a
                          className="tmp-btn btn-primary round btn-large"
                          href="/request"
                          onClick={requestService("enhanced")}
                        >
                          Request Service
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-xl-2 pl--60">
                  <div className="video-btn">
                    <div className="video-popup icon-center about-relative-thumb">
                      <div className="overlay-content">
                        <div className="thumbnail invers-anime">
                          <img
                            className="radius-small"
                            src="/assets/main/images/about/03.webp"
                            alt="Corporate Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Work Process */}
      <div className="tmp-timeline-area tmp-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tmp-section-title-border text-center">
                <div className="pres-line-separator-wrapper text-center mb--10">
                  <div className="line-separator line-left"></div>
                  <span className="subtitle">
                    <span className="number">+3</span>
                    <span className="subtitle-text">How It works</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h2 className="title  tmp-title-split">Process Flow</h2>
                <p className="b1 tmp-title-split">
                  Our process ensures fast, secure, and compliant background
                  checks from application to report delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt--10">
            <div className="timeline-style-two bg-color-blackest">
              <div className="row row--0">
                <div className="col-lg-3 col-md-3 tmp-timeline-single no-gradient">
                  <div className="tmp-timeline">
                    <h6
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="700"
                      data-sal-delay="200"
                    >
                      Select Check Type
                    </h6>
                    <div className="progress-line">
                      <div className="line-inner"></div>
                    </div>
                    <div className="progress-dot">
                      <div className="dot-level">
                        <div className="dot-inner"></div>
                      </div>
                    </div>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="700"
                      data-sal-delay="300"
                    >
                      Choose the Basic, Standard, or Enhanced DBS check suited
                      to your needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 tmp-timeline-single no-gradient">
                  <div className="tmp-timeline">
                    <h6
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="700"
                      data-sal-delay="200"
                    >
                      Submit Required Details
                    </h6>
                    <div className="progress-line">
                      <div className="line-inner"></div>
                    </div>
                    <div className="progress-dot">
                      <div className="dot-level">
                        <div className="dot-inner"></div>
                      </div>
                    </div>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="700"
                      data-sal-delay="300"
                    >
                      Securely submit the required personal or organizational
                      information.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 tmp-timeline-single no-gradient">
                  <div className="tmp-timeline">
                    <h6
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="700"
                      data-sal-delay="200"
                    >
                      Verification & Processing
                    </h6>
                    <div className="progress-line">
                      <div className="line-inner"></div>
                    </div>
                    <div className="progress-dot">
                      <div className="dot-level">
                        <div className="dot-inner"></div>
                      </div>
                    </div>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="700"
                      data-sal-delay="300"
                    >
                      We validate and process your data with the relevant
                      authorities.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 tmp-timeline-single no-gradient">
                  <div className="tmp-timeline">
                    <h6
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="700"
                      data-sal-delay="200"
                    >
                      Receive Your Report
                    </h6>
                    <div className="progress-line">
                      <div className="line-inner"></div>
                    </div>
                    <div className="progress-dot">
                      <div className="dot-level">
                        <div className="dot-inner"></div>
                      </div>
                    </div>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="700"
                      data-sal-delay="300"
                    >
                      Access your verified DBS report directly from your
                      dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Benefits */}
      <div className="tmp-service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tmp-section-title-border text-center">
                <div className="pres-line-separator-wrapper text-center mb--10 tmp-title-split">
                  <div className="line-separator line-left"></div>
                  <span className="subtitle">
                    <span className="number">04</span>
                    <span className="subtitle-text">Key Benefits</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h2 className="title   tmp-title-split">Why Choose Us</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 service-wrapper mt--10">
            {/* Start Feature Service */}
            <div className="row g-5">
              {/* Start Single Service */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="service service__style--1 bg-color-blackest radius text-center tmp-border">
                  <div className="icon">
                    <img
                      src="/assets/main/images/services/icon-01.png"
                      alt="corporate-business"
                    />
                    {/* <i className="feather-map"></i>*/}
                  </div>
                  <div className="content">
                    <h4 className="title  ">
                      <a>Secure & Compliant</a>
                    </h4>
                    <p className="description mb--0">
                      Maintaining strict data protection and legal standards.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service */}
              {/* Start Single Service */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="service service__style--1 bg-color-blackest radius text-center tmp-border">
                  <div className="icon">
                    <img
                      src="/assets/main/images/services/icon-02.png"
                      alt="corporate-business"
                    />
                    {/* <i className="feather-loader"></i>*/}
                  </div>
                  <div className="content">
                    <h4 className="title  ">
                      <a>Fast & Accurate</a>
                    </h4>
                    <p className="description mb--0">
                      Delivering reliable verification results efficiently.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service */}
              {/* Start Single Service */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="service service__style--1 bg-color-blackest radius text-center tmp-border">
                  <div className="icon">
                    <img
                      src="/assets/main/images/services/icon-03.png"
                      alt="corporate-business"
                    />
                    {/* <i className="feather-speaker"></i>*/}
                  </div>
                  <div className="content">
                    <h4 className="title  ">
                      <a>Trusted Nationwide </a>
                    </h4>
                    <p className="description mb--0">
                      Recognized and relied upon by organizations across the
                      country.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service */}
            </div>
            {/* End Feature Service */}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="tmp-callto-action-area tmp-section-gap">
        <div className="wrapper">
          <div className="tmp-callto-action-area with-shape position-relative">
            <div className="wrapper">
              <div className="tmp-callto-action clltoaction-style-default style-5">
                <div className="container">
                  <div className="row row--0 align-items-center content-wrapper theme-shape">
                    <div className="col-lg-12">
                      <div className="inner">
                        <div className="content text-center">
                          <h2 className="title tmp-title-split">
                            Ready to begin your <br />
                            background check?
                          </h2>
                          <h6 className="subtitle tmp-title-split">
                            The trusted choice for individuals and organizations
                            worldwide.
                          </h6>
                          <div className="call-to-btn d-flex justify-content-center">
                            <a
                              className="tmp-btn btn-extra-large hover-icon-reverse"
                              href="/request"
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">
                                  Request a DBS Check
                                </span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="tmp-profile-box mt--50">
                          <div className="profile-share justify-content-center">
                            <a
                              href="#"
                              className="avatar"
                              data-tooltip="Mark JOrdan"
                            >
                              <img
                                src="/assets/main/images/testimonial/tooltip-01.png"
                                alt="education"
                              />
                            </a>
                            <a href="#" className="avatar" data-tooltip="Mark">
                              <img
                                src="/assets/main/images/testimonial/tooltip-02.png"
                                alt="education"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar"
                              data-tooltip="Jordan"
                            >
                              <img
                                src="/assets/main/images/testimonial/tooltip-03.png"
                                alt="education"
                              />
                            </a>
                            <div className="more-author-text">
                              <h5 className="total-join-students">
                                Join Other Organizations
                              </h5>
                              <p className="subtitle">
                                <a className="btn-read-more" href="/contact">
                                  <span>Contact Us</span>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="shape-image wow move-out">
                                        <img src="/assets/main/images/shape/01.png" alt="call-to-action">
                                    </div> */}
                    <div className="person-stand images-left-right-float">
                      {/* <img
                        loading="lazy"
                        src="/assets/main/images/call-to-action/01.png"
                        alt="call-to-action"
                      /> */}
                    </div>
                    <div className="bg-shape-area-cta-main tmponhover">
                      <img
                        loading="lazy"
                        src="/assets/main/images/bg/ct_request.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
