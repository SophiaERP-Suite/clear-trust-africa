import { useContext, useEffect, useRef, useState } from "react";
import { RequestContext } from "../../utils/main/Context";
import { NavLink } from "react-router-dom";

const Request = () => {
  const { requestType } = useContext(RequestContext);
  const [requestObj, setRequestObj] = useState<{
    type: "basic" | "standard" | "enhanced";
    stage: number;
    paymentMethod: "card" | "transfer";
  }>({
    type: requestType,
    stage: 0,
    paymentMethod: "card",
  });

  const serviceDescriptionRef = useRef<HTMLDivElement>(null!);

  const changeRequestType = (type: "basic" | "standard" | "enhanced") => () => {
    setRequestObj((prev) => ({ ...prev, type }));
  };

  const containerRef = useRef<HTMLDivElement>(null!);
  const headingRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (serviceDescriptionRef.current) {
      serviceDescriptionRef.current.animate(
        { opacity: [0, 1] },
        {
          duration: 300,
        }
      );
    }
  }, [requestObj.type]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.animate(
        { opacity: [0, 1] },
        {
          duration: 300,
        }
      );
    }
  }, [requestObj.stage]);

  const changeStage = (type: "prev" | "next") => () => {
    let stage;

    if (type === "next") {
      stage = Math.min(3, requestObj.stage + 1);
    } else {
      stage = Math.max(0, requestObj.stage - 1);
    }

    setRequestObj((prev) => ({ ...prev, stage }));
    if (headingRef.current) headingRef.current.scrollIntoView();
  };

  return (
    <div>
      {/* Banner Area */}
      <div
        className="pages-banner"
        style={{
          background: "url(./assets/main/images/bg/ct_request_banner.jpg)",
        }}
      >
        <div className="pages-banner-content">
          <h2>Request a DBS Check</h2>

          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>Request</li>
          </ul>
        </div>
      </div>

      <div
        className="tmp-contact-area tmp-section-gap register-tag"
        ref={headingRef}
      >
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
                    <span className="subtitle-text">Request</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h4 className="title mt--20 tmp-title-split">
                  Request Your DBS Check — Fast, Secure, and Verified
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" tmp-section-gapBottom">
        {requestObj.stage === 0 ? (
          <div className="container" ref={containerRef}>
            <div className="row">
              <div className="col-lg-12">
                <div className="service-layout-presentation-box tmponhover">
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 order-2 order-lg-1">
                      <div className="section-title text-start mb--20">
                        <span className="subtitle bg-primary-opacity">
                          Select Service
                        </span>
                      </div>

                      <div className="advance-tab-button advance-tab-button-1">
                        <ul className="nav nav-tabs splash-nav-tabs tab-button-list">
                          <li className="nav-item active-nav">
                            <a
                              className={`nav-link tab-button ${
                                requestObj.type === "basic"
                                  ? "active-request-type"
                                  : ""
                              }`}
                              id="layouttab1-tab"
                              onClick={changeRequestType("basic")}
                            >
                              <div className="tab">
                                <span>01</span>
                                <div className="inner">
                                  <h4 className="title">Basic DBS Check</h4>
                                  <p>
                                    Trusted overview of unspent convictions.
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className={`nav-link tab-button ${
                                requestObj.type === "standard"
                                  ? "active-request-type"
                                  : ""
                              }`}
                              id="layouttab2-tab"
                              onClick={changeRequestType("standard")}
                            >
                              <div className="tab">
                                <span>02</span>
                                <div className="inner">
                                  <h4 className="title">Standard DBS Check</h4>
                                  <p>
                                    Comprehensive check with spent convictions.
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className={`nav-link tab-button ${
                                requestObj.type === "enhanced"
                                  ? "active-request-type"
                                  : ""
                              }`}
                              id="layouttab3-tab"
                              onClick={changeRequestType("enhanced")}
                            >
                              <div className="tab">
                                <span>03</span>
                                <div className="inner">
                                  <h4 className="title">Enhanced DBS Check</h4>
                                  <p>
                                    Full criminal record with sensitive data.
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade advance-tab-content-1 active show"
                          id="layouttab1"
                          role="tabpanel"
                          aria-labelledby="layouttab1-tab"
                          ref={serviceDescriptionRef}
                        >
                          {requestObj.type === "basic" ? (
                            <div className="content">
                              <div className="tmp-section-title-border text-start">
                                <h2 className="title w-700 mb--20 tmp-title-split">
                                  Basic DBS Check
                                </h2>

                                <div className="service-features-container">
                                  <h4>Features</h4>

                                  <ul>
                                    <li>
                                      Displays unspent criminal convictions as
                                      defined by law.
                                    </li>
                                    <li>
                                      Confirms an individual’s identity and
                                      personal background.
                                    </li>
                                    <li>
                                      Provides official certification recognized
                                      by employers and institutions.
                                    </li>

                                    <li>
                                      Ensures strict data security and
                                      confidentiality during processing.
                                    </li>

                                    <li>
                                      Supports compliance with legal and
                                      organisational standards.
                                    </li>

                                    <li>
                                      Suitable for employment, licensing, and
                                      general screening purposes.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ) : requestObj.type === "standard" ? (
                            <div className="content">
                              <div className="tmp-section-title-border text-start">
                                <h2 className="title w-700 mb--20 tmp-title-split">
                                  Standard DBS Check
                                </h2>

                                <div className="service-features-container">
                                  <h4>Features</h4>

                                  <ul>
                                    <li>
                                      Verification of spent and unspent
                                      convictions.
                                    </li>

                                    <li>
                                      {" "}
                                      Disclosure of cautions and reprimands.
                                    </li>

                                    <li>
                                      Secure identity and data validation.
                                    </li>

                                    <li>
                                      Automated verification through police
                                      databases.
                                    </li>

                                    <li>
                                      Comprehensive and confidential reports.
                                    </li>

                                    <li>
                                      Real-time tracking of verification
                                      progress.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="content">
                              <div className="tmp-section-title-border text-start">
                                <h2 className="title w-700 mb--20 tmp-title-split">
                                  Enhanced DBS Check
                                </h2>

                                <div className="service-features-container">
                                  <h4>Features</h4>

                                  <ul>
                                    <li>
                                      Includes all Standard Check information.
                                    </li>

                                    <li>
                                      Searches children’s and adults’ barred
                                      lists.
                                    </li>

                                    <li> Local police record disclosures.</li>

                                    <li>
                                      Advanced identity verification and data
                                      protection.
                                    </li>

                                    <li>
                                      {" "}
                                      Designed for safeguarding-sensitive roles.
                                    </li>

                                    <li>
                                      {" "}
                                      Detailed, compliance-ready reporting
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="request-btn-box">
                        <div
                          className="read-more-btn btn-group service-btn"
                          onClick={changeStage("next")}
                        >
                          <a className="tmp-btn btn-primary round btn-large">
                            Next
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : requestObj.stage === 1 ? (
          <div className="container" ref={containerRef}>
            <div className="row g-5">
              <div className="col-12">
                <form
                  className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form"
                  id="contact-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="section-title">
                    <h4 className="tmp-title-style-3">Applicant Details</h4>
                  </div>

                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label>Title *</label>
                      <div className="form-group tmponhover">
                        <select>
                          <option value={"Select Title"}>Select Title</option>
                          <option value={"Mr"}>Mr</option>
                          <option value={"Mrs"}>Mrs</option>
                          <option value={"Miss"}>Miss</option>
                          <option value={"Ms"}>Ms</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>First Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Middle Name </label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Middle Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Last Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label> Date of Birth *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="date"
                          name="contact-name"
                          id="contact-name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Gender *</label>
                      <div className="form-group tmponhover">
                        <select>
                          <option value={"select gender"}>Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Phone Number *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Email Address *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Country *</label>
                      <div className="form-group tmponhover">
                        <select>
                          <option>Select Country</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>State *</label>
                      <div className="form-group tmponhover">
                        <select>
                          <option>Select State</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>City *</label>
                      <div className="form-group tmponhover">
                        <select>
                          <option>Select City</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Home Address *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Home Address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="request-btn-box">
                    <div className="read-more-btn">
                      <a
                        className="tmp-btn round btn-large btn-border"
                        onClick={changeStage("prev")}
                      >
                        Previous
                      </a>
                    </div>

                    <div
                      className="read-more-btn btn-group service-btn"
                      onClick={changeStage("next")}
                    >
                      <a className="tmp-btn btn-primary round btn-large">
                        Next
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : requestObj.stage === 2 ? (
          <div className="container" ref={containerRef}>
            <div className="row g-5">
              <div className="col-12">
                <form
                  className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form"
                  id="contact-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="section-title">
                    <h4 className="tmp-title-style-3">Verification Details</h4>
                  </div>

                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label> Government‑Issued ID *</label>
                      <div className="form-group tmponhover">
                        <input type="file" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Proof of Address *</label>
                      <div className="form-group tmponhover">
                        <input type="file" required />
                      </div>
                    </div>

                    <div className="col-12">
                      <ul className="request-verification-list">
                        <li>
                          <span>Terms & Conditions</span>
                          <div>
                            <input type="checkbox" id="terms" />{" "}
                            <label htmlFor="terms">
                              I have read and agree to the Terms and Conditions.
                            </label>
                          </div>{" "}
                        </li>

                        <li>
                          <span>Privacy Policy</span>
                          <div>
                            <input type="checkbox" id="privacy" />
                            <label htmlFor="privacy">
                              I consent to the processing of my personal data in
                              accordance with the Privacy Policy.
                            </label>
                          </div>
                        </li>
                        <li>
                          <span>Information Accuracy</span>
                          <div>
                            <input type="checkbox" id="info" />
                            <label htmlFor="info">
                              I confirm that the information provided in this
                              form is true and accurate to the best of my
                              knowledge.
                            </label>
                          </div>
                        </li>
                        <li>
                          <span>Background Check Consent</span>
                          <div>
                            <input type="checkbox" id="consent" />
                            <label htmlFor="consent">
                              I authorize the company to conduct the necessary
                              background and identity verification checks.
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="request-btn-box">
                    <div className="read-more-btn">
                      <a
                        className="tmp-btn round btn-large btn-border"
                        onClick={changeStage("prev")}
                      >
                        Previous
                      </a>
                    </div>

                    <div
                      className="read-more-btn btn-group service-btn"
                      onClick={changeStage("next")}
                    >
                      <a className="tmp-btn btn-primary round btn-large">
                        Next
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="container" ref={containerRef}>
            <div className="row g-5">
              <div className="col-12">
                <form
                  className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form"
                  id="contact-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="section-title">
                    <h4 className="tmp-title-style-3">Payment Details</h4>
                  </div>

                  <div className="row g-5 register-form-row">
                    <div className="col-12">
                      <label>Payment Method *</label>
                      <div className="form-group tmponhover">
                        <select
                          value={requestObj.paymentMethod}
                          onChange={(e) =>
                            setRequestObj((prev) => ({
                              ...prev,
                              paymentMethod: e.target.value as
                                | "card"
                                | "transfer",
                            }))
                          }
                        >
                          <option value={"card"}>Bank Card</option>
                          <option value={"transfer"}>Transfer</option>
                        </select>
                      </div>
                    </div>

                    {requestObj.paymentMethod === "transfer" && (
                      <div className="col-12">
                        <label>Payment Receipt *</label>
                        <div className="form-group tmponhover">
                          <input
                            type="file"
                            name="contact-name"
                            id="contact-name"
                            required
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt--20">
                    <ul>
                      <li>
                        <b>Service Name:</b>{" "}
                        <span style={{ textTransform: "capitalize" }}>
                          {requestObj.type}
                        </span>{" "}
                        DBS Check
                      </li>
                      <li>
                        <b>Service Feee:</b> &#8358;30, 000
                      </li>
                    </ul>
                  </div>

                  {requestObj.paymentMethod === "transfer" && (
                    <div className="mt--20">
                      <h5>Bank Details </h5>
                      <ul>
                        <li>
                          <b>Bank Name:</b> United Bank of Africa (UBA)
                        </li>
                        <li>
                          <b>Account Name:</b> ClearTrust Africa
                        </li>
                        <li>
                          <b>Account Number:</b> 2345678901
                        </li>
                      </ul>
                    </div>
                  )}

                  <div className="request-btn-box">
                    <div className="read-more-btn">
                      <a
                        className="tmp-btn round btn-large btn-border"
                        onClick={changeStage("prev")}
                      >
                        Previous
                      </a>
                    </div>

                    <div className="read-more-btn btn-group service-btn">
                      <a className="tmp-btn btn-primary round btn-large">
                        {requestObj.paymentMethod === "card"
                          ? "Make"
                          : "Confirm"}{" "}
                        Payment
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Request;
