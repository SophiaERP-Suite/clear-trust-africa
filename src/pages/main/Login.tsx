const Login = () => {
  //employer - instituion name
  return (
    <>
      {/* Banner Area */}
      {/* <div className="pages-banner">
        <h2>Sign in to your account</h2>

        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>Login</li>
        </ul>
      </div> */}

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
                    <span className="subtitle-text">Login</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h4 className="title mt--20 tmp-title-split">
                  Sign in to manage your verification activities securely
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inv-appoinment-area-start tmp-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="aapoiment-left-area-thumbnail">
                <img
                  src="./assets/main/images/bg/ct_login.jpg"
                  alt="appoinment"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <form
                className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form"
                id="contact-form"
                method="POST"
                action="https://html.inversweb.com/corpox/mail.php"
              >
                <div className="row g-5 register-form-row">
                  <div className="col-lg-12 col-md-12">
                    <label>Organization Code *</label>
                    <div className="form-group tmponhover">
                      <input
                        type="text"
                        name="contact-name"
                        id="contact-name"
                        placeholder="Your Organization Code"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <label>Email Address *</label>
                    <div className="form-group tmponhover">
                      <input
                        type="text"
                        name="contact-name"
                        id="contact-name"
                        placeholder="Your Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 mt-5">
                    <label>Password *</label>
                    <div className="form-group tmponhover">
                      <input
                        type="text"
                        name="contact-name"
                        id="contact-name"
                        placeholder="Your Password"
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
                  >
                    <span>Submit Now</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
