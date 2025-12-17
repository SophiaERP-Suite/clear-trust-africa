import { useContext, useEffect, useRef } from "react";
import { RegisterContext } from "../../utils/main/Context";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Signup = () => {
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

  const submitForm = () => {
    toast.dismissAll();
    clearTimeout(redirectTimeout.current);

    toast.success(
      "Account created successfully. Please verify your email to complete registration."
    );

    redirectTimeout.current = setTimeout(
      () => (window.location.href = "/account-verification"),
      4500
    );
  };

  return (
    <>
      {/* Banner Area */}
      <div
        className="pages-banner"
        style={{ background: "url(./assets/main/images/bg/ct_register.jpg)" }}
      >
        <div className="pages-banner-content">
          <h2>
            Register as an <span className="register-type">{registerType}</span>
          </h2>

          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>Register</li>
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
                    <span className="subtitle-text">Register</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h4 className="title mt--20 tmp-title-split">
                  {registerType === "agent"
                    ? "Join our trusted network — become an authorized verification agent"
                    : registerType === "employer"
                    ? "Protect your company’s integrity — become a verified employer"
                    : "Enhance trust and compliance — register your institution with confidence"}
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
                    <h4 className="tmp-title-style-3">Employer Profile</h4>
                  </div>

                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label>Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Type *</label>
                      <select
                        name="organization-type"
                        id="organization-type"
                        required
                      >
                        <option value="">Select Organization Type</option>

                        <optgroup label="Basic Education">
                          <option value="nursery-primary-school">
                            Nursery / Primary School
                          </option>
                          <option value="secondary-school">
                            Secondary School
                          </option>
                        </optgroup>

                        <optgroup label="Tertiary Education">
                          <option value="college">College</option>
                          <option value="polytechnic">Polytechnic</option>
                          <option value="university">University</option>
                        </optgroup>

                        <optgroup label="Training & Development">
                          <option value="training-institute">
                            Training Institute
                          </option>
                          <option value="vocational-centre">
                            Vocational / Skill Centre
                          </option>
                        </optgroup>
                      </select>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label> Institution Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Institution Name"
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
                      <label>Official Address *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Official Address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="section-title">
                    <h4 className="tmp-title-style-3 mt-3">
                      Access Credentials
                    </h4>
                  </div>

                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label>Password*</label>
                      <div className="form-group tmponhover">
                        <input
                          type="password"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Confirm Password *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="password"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Confirm Password"
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
                      onClick={submitForm}
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
                    <h4 className="tmp-title-style-3">Institution Profile</h4>
                  </div>
                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label>Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Type *</label>
                      <select
                        name="institution-type"
                        id="institution-type"
                        required
                      >
                        <option value="">Select Institution Type</option>
                        <option value="ministry">Ministry</option>
                        <option value="commission">Commission</option>
                        <option value="board">Board</option>
                        <option value="agency">Agency</option>
                        <option value="authority">Authority</option>
                        <option value="council">Council</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Date Established *</label>
                      <div className="form-group tmponhover">
                        <input type="month" required />
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
                      <label>Official Address *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Official Address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="section-title">
                    <h4 className="tmp-title-style-3 mt-3">
                      Access Credentials
                    </h4>
                  </div>
                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label>Password*</label>
                      <div className="form-group tmponhover">
                        <input
                          type="password"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Confirm Password *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="password"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Confirm Password"
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
                      onClick={submitForm}
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
                    <h4 className="tmp-title-style-3">Personal Information</h4>
                  </div>
                  <div className="row g-5 register-form-row">
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
                      <label>Gender *</label>
                      <div className="form-group tmponhover">
                        <select>
                          <option value={"Choose Gender"}>Choose Gender</option>
                          <option value={"Male"}>Male</option>
                          <option value={"Female"}>Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Date of Birth *</label>
                      <div className="form-group tmponhover">
                        <input type="date" required />
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
                      <label>Address *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label> Institution Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Institution Name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="section-title">
                    <h4 className="tmp-title-style-3 mt-3">
                      Access Credentials
                    </h4>
                  </div>
                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label>Password*</label>
                      <div className="form-group tmponhover">
                        <input
                          type="password"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Confirm Password *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="password"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Confirm Password"
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
                      onClick={submitForm}
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

export default Signup;
