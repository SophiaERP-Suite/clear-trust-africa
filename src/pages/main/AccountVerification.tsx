import { useContext, useEffect, useRef } from "react";
import { RegisterContext } from "../../utils/main/Context";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const AccountVerification = () => {
  const { registerType, setRegisterType } = useContext(RegisterContext);

  const formRef = useRef<HTMLDivElement>(null!);
  const redirectTimeout = useRef<number>(null!);

  const handleRegisterChange = (value: string) => () => {
    setRegisterType(value);
  };

  useEffect(() => {
    return () => {
      setRegisterType("agent");
    };
  }, []);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.animate(
        { opacity: [0, 1] },
        {
          duration: 300,
        }
      );
    }
  }, [registerType]);

  const handleSubmit = () => {
    toast.dismissAll();
    clearTimeout(redirectTimeout.current);

    toast.success(
      "Your verification details have been submitted successfully. We’ll review your information and notify you once your account has been verified."
    );

    redirectTimeout.current = setTimeout(
      () => (window.location.href = "/admin"),
      4500
    );
  };

  return (
    <>
      {/* Banner Area */}
      <div
        className="pages-banner"
        style={{
          background: "url(/assets/main/images/bg/ct_account_verification.jpg)",
        }}
      >
        <div className="pages-banner-content">
          <h2>Verify Your Account</h2>

          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>Account Verification</li>
          </ul>
        </div>
      </div>

      <div className="tmp-contact-area tmp-section-gap register-tag">
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
                    <span className="subtitle-text">Verification</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h4 className="title mt--20 tmp-title-split">
                  Complete your verification to become a trusted member of our
                  platform.
                </h4>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <div className="col-lg-12">
              <div className="tmp-contact-address mt_dec--30">
                <div className="row g-5">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div
                      className={`tmp-address tmponhover register-form-type  ${
                        registerType === "agent" ? "active" : ""
                      }`}
                      onClick={handleRegisterChange("agent")}
                    >
                      <div className="icon">
                        <i className="feather-headphones"></i>
                      </div>
                      <div className="inner">
                        <h4 className="title">As an Agent</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div
                      className={`tmp-address tmponhover register-form-type ${
                        registerType === "employer" ? "active" : ""
                      }`}
                      onClick={handleRegisterChange("employer")}
                    >
                      <div className="icon">
                        <i className="feather-mail"></i>
                      </div>
                      <div className="inner">
                        <h4 className="title">As an Employer</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div
                      className={`tmp-address tmponhover register-form-type ${
                        registerType === "institution" ? "active" : ""
                      }`}
                      onClick={handleRegisterChange("institution")}
                    >
                      <div className="icon">
                        <i className="feather-map-pin"></i>
                      </div>
                      <div className="inner">
                        <h4 className="title">As an Institution</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Employer */}
      {registerType === "employer" && (
        <div
          className="inv-appoinment-area-start tmp-section-gapBottom"
          ref={formRef}
        >
          <div className="container">
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
                      <label>
                        Employer License / CAC Registration Certificate *
                      </label>
                      <div className="form-group tmponhover">
                        <input
                          type="file"
                          name="contact-name"
                          id="contact-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Tax Identification Number *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>
                        Proof of Address (Utility Bill or Lease Document) *
                      </label>
                      <div className="form-group tmponhover">
                        <input type="file" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Administrator’s Valid ID *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="file"
                          name="contact-name"
                          id="contact-name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group submit-btn mt-5 mb-5">
                    <button
                      name="submit"
                      type="submit"
                      id="submit"
                      className="btn-default btn-large tmp-btn"
                      style={{ width: "100%;" }}
                      onClick={handleSubmit}
                    >
                      <span>Submit Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Institution */}
      {registerType === "institution" && (
        <div
          className="inv-appoinment-area-start tmp-section-gapBottom"
          ref={formRef}
        >
          <div className="container">
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
                      <label>
                        Institution Registration Number / Certificate *
                      </label>
                      <div className="form-group tmponhover">
                        <input
                          type="file"
                          name="contact-name"
                          id="contact-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Tax Identification Number *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>
                        Proof of Address (Utility Bill or Official Document) *
                      </label>
                      <div className="form-group tmponhover">
                        <input type="file" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>
                        Letter of Authorization (Signed and Stamped) *
                      </label>
                      <div className="form-group tmponhover">
                        <input
                          type="file"
                          name="contact-name"
                          id="contact-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Valid ID of Representative *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="file"
                          name="contact-name"
                          id="contact-name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group submit-btn mt-5 mb-5">
                    <button
                      name="submit"
                      type="submit"
                      id="submit"
                      className="btn-default btn-large tmp-btn"
                      style={{ width: "100%;" }}
                      onClick={handleSubmit}
                    >
                      <span>Submit Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Agent */}

      {registerType === "agent" && (
        <div
          className="inv-appoinment-area-start tmp-section-gapBottom"
          ref={formRef}
        >
          <div className="container">
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
                      <label>National ID / Driver’s License *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="file"
                          name="contact-name"
                          id="contact-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Proof of Address *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="file"
                          name="contact-name"
                          id="contact-name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group submit-btn mt-5 mb-5">
                    <button
                      name="submit"
                      type="submit"
                      id="submit"
                      className="btn-default btn-large tmp-btn"
                      style={{ width: "100%;" }}
                      onClick={handleSubmit}
                    >
                      <span>Submit Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountVerification;
