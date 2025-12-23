/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useRef, useState } from "react";
import { RegisterContext } from "../../utils/main/Context";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getEmployerOrganization, uploadEmployerDocs } from "../../utils/functions/EmployerRequests";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { handleData } from "../../utils/functions/Extra";

interface EmployerVerificationFormValues {
  CAC: string,
  Utility: string,
  ValidId: string,
  NIN: string,
  TIN: string
}

const AccountVerification = () => {
  const { registerType, setRegisterType } = useContext(RegisterContext);
  const { register, reset, handleSubmit, formState } = useForm<EmployerVerificationFormValues>();
  const { errors } = formState;
  const [ orgName, setOrgName ] = useState<string>("N/A");
  const { regType, orgId } = useParams();
  const navigate = useNavigate();

  const formRef = useRef<HTMLDivElement>(null!);

  const handleRegisterChange = (value: string) => () => {
    setRegisterType(value);
  };

  useEffect(() => {
    return () => {
      setRegisterType(regType ?? "agent");
    };
  }, []);

  const submitFiles = async (data: any) => {
    if (!errors.CAC &&
      !errors.Utility && !errors.NIN &&
      !errors.ValidId && !errors.TIN
    ) {
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const formData = new FormData();
      formData.append('CAC', data.CAC[0]);
      formData.append('Utility', data.Utility[0]);
      formData.append('ValidId', data.ValidId[0]);
      formData.append('NIN', data.NIN[0]);
      formData.append('TIN', data.TIN);
      const res = await uploadEmployerDocs(formData, Number(orgId));
      handleData(res, loader, text, { toast }, reset, navigate);
    }
  }
  

  useEffect(() => {
    return () => {
      getEmployerOrganization(Number(orgId))
        .then((res: any) => {
          console.log(res);
          if (res.status === 200) {
            res.json()
              .then((data: any) => {
                console.log(data)
                setOrgName(`- For: ${data.data.name}`)
            })
          } else {
            toast.warning("Organization Not Found");
            navigate("/register");
          }   
        })
        .catch((err: any) => {
          console.log(err);
          toast.warning("Organization Not Found");
          navigate("/register");
        })
    }
  }, [])

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
  
  return (
    <>
      {/* Banner Area */}
      <div
        className="pages-banner"
        style={{
          background: "url(./assets/main/images/bg/ct_account_verification.jpg)",
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
                  onSubmit={handleSubmit(submitFiles)}
                  noValidate
                >
                  <div className="section-title">
                    <h2 className="tmp-title-style-3">Step 2 of 2 - Employer Registration {orgName} </h2>
                  </div>
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
                          {
                            ...register('CAC', {
                              required: 'Required'
                            })
                          }
                          required
                        />
                        <p className='error-msg'>{ errors.CAC?.message }</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>National Identification *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="file"
                          {
                            ...register('NIN', {
                              required: 'Required'
                            })
                          }
                          required
                        />
                        <p className='error-msg'>{ errors.NIN?.message }</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>
                        Proof of Address (Utility Bill or Lease Document) *
                      </label>
                      <div className="form-group tmponhover">
                        <input type="file"
                          {
                            ...register('Utility', {
                              required: 'Required'
                            })
                          }
                          required />
                        <p className='error-msg'>{ errors.Utility?.message }</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Administrator’s Valid ID *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="file"
                          {
                            ...register('ValidId', {
                              required: 'Required'
                            })
                          }
                          required
                        />
                        <p className='error-msg'>{ errors.ValidId?.message }</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <label>Tax Identification Number *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          {
                            ...register('TIN', {
                              required: 'Required'
                            })
                          }
                          required
                        />
                        <p className='error-msg'>{ errors.TIN?.message }</p>
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
                      <div className="dots hidden" id="query-loader">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                      <span id="query-text">Submit Data</span>
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
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Tax Identification Number *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
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
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Valid ID of Representative *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="file"
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
                      <div className="dots hidden" id="query-loader">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                      <span id="query-text">Submit Data</span>
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
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Proof of Address *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="file"
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
                      <div className="dots hidden" id="query-loader">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                      <span id="query-text">Submit Data</span>
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
