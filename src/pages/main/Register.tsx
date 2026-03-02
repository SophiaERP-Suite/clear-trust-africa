/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useRef } from "react";
import { RegisterContext } from "../../utils/main/Context";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addAgent, addEmployer } from "../../utils/functions/EmployerRequests";
import { handleDataReg } from "../../utils/functions/Extra";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface EmployerFormValues {
  Name: string;
  RegistrationNumber: string;
  Address: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Password: string;
  ConfirmPassword: string;
}

interface AgentFormValues {
  FirstName: string;
  LastName: string;
  Gender: string;
  DateOfBirth: string;
  Email: string;
  Phone: string;
  Address: string;
  InstitutionName: string;
  RegistrationNumber: string;
  Password: string;
  ConfirmPassword: string;
}

const Signup = () => {
  const { registerType, setRegisterType } = useContext(RegisterContext);
  const { register, reset, handleSubmit, watch, formState } = useForm<EmployerFormValues>();
  const password = watch('Password');
  const { errors } = formState;

  const formRef = useRef<HTMLDivElement>(null!);
  const redirectTimeout = useRef<number>(null!);
  const navigate = useNavigate();

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

  const {
    register: registerAgent,
    reset: resetAgent,
    handleSubmit: handleSubmitAgent,
    watch: watchAgent,
    formState: agentFormState
  } = useForm<AgentFormValues>();

  const agentPassword = watchAgent('Password');
  const { errors: agentErrors } = agentFormState;

  const submitAgent = async (data: any) => {
    if (!agentErrors.FirstName && !agentErrors.LastName && !agentErrors.Gender &&
      !agentErrors.DateOfBirth && !agentErrors.Email && !agentErrors.Phone &&
      !agentErrors.Address && !agentErrors.InstitutionName &&
      !agentErrors.Password && !agentErrors.ConfirmPassword && !agentErrors.RegistrationNumber
    ) {
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) loader.style.display = 'flex';
      if (text) text.style.display = 'none';
      const res = await addAgent(data);
      handleDataReg(res, loader, text, { toast }, resetAgent, navigate, "Agent account created successfully. Please verify your email to complete registration.", "agent");
    }
  }

  const submitForm = () => {
    clearTimeout(redirectTimeout.current);

    toast.success(
      "Account created successfully. Please verify your email to complete registration."
    );

    redirectTimeout.current = setTimeout(
      () => (window.location.href = "../account-verification"),
      4500
    );
  };

  const submitEmployer = async (data: any) => {
    if (!errors.Name &&
      !errors.RegistrationNumber &&
      !errors.Address && !errors.FirstName &&
      !errors.LastName && !errors.Email &&
      !errors.Phone && !errors.Password &&
      !errors.ConfirmPassword
    ) {
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const res = await addEmployer(data);
      handleDataReg(res, loader, text, { toast }, reset, navigate, "Employer account created successfully. Please verify your email to complete registration.", "employer");
    }
  }

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
                  <div className="col-md-6 col-12">
                    <div
                      className={`tmp-address tmponhover register-form-type  ${registerType === "agent" ? "active" : ""
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
                  <div className="col-md-6 col-12">
                    <div
                      className={`tmp-address tmponhover register-form-type ${registerType === "employer" ? "active" : ""
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
                  <div className="d-none col-lg-4 col-md-6 col-12">
                    <div
                      className={`tmp-address tmponhover register-form-type ${registerType === "institution" ? "active" : ""
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
                  onSubmit={handleSubmit(submitEmployer)}
                  noValidate
                >
                  <div className="section-title">
                    <h2 className="tmp-title-style-3">Step 1 of 2 - Employer Registration</h2>
                  </div>
                  <div className="section-title">
                    <h4 className="tmp-title-style-3">Organisation Details</h4>
                  </div>

                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label>Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="Name"
                          {
                          ...register('Name', {
                            required: 'Provide Organisation Name'
                          })
                          }
                          required
                        />
                        <p className='error-msg'>{errors.Name?.message}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Registration Number</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="Registration Number"
                          {
                          ...register('RegistrationNumber', {
                            required: 'Provide CAC Registration Number'
                          })
                          }
                          required
                        />
                        <p className='error-msg'>{errors.RegistrationNumber?.message}</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <label>Official Address *</label>
                      <div className="form-group tmponhover">
                        <textarea
                          placeholder="Official Address"
                          {
                          ...register('Address', {
                            required: 'Provide Official Address'
                          })
                          }
                          required
                        ></textarea>
                        <p className='error-msg'>{errors.Address?.message}</p>
                      </div>
                    </div>
                  </div>

                  <div className="section-title">
                    <h4 className="tmp-title-style-3 mt-3">
                      Super User Credentials
                    </h4>
                  </div>

                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label>First Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="First Name"
                          {
                          ...register('FirstName', {
                            required: 'Provide First Name'
                          })
                          }
                          required
                        />
                        <p className='error-msg'>{errors.FirstName?.message}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Last Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="Last Name"
                          {
                          ...register('LastName', {
                            required: 'Provide Last Name'
                          })
                          }
                          required
                        />
                        <p className='error-msg'>{errors.LastName?.message}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Email Address *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="Email Address"
                          {
                          ...register('Email', {
                            required: 'Provide Email Address',
                            pattern: {
                              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                              message: "Invalid Email"
                            }
                          })
                          }
                          required
                        />
                        <p className='error-msg'>{errors.Email?.message}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Phone Number *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          {
                          ...register('Phone', {
                            required: 'Provide Phone Number'
                          })
                          }
                          required
                        />
                        <p className='error-msg'>{errors.Phone?.message}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Password*</label>
                      <div className="form-group tmponhover">
                        <input
                          type="password"
                          placeholder="Password"
                          {
                          ...register('Password', {
                            required: 'Provide Password',
                            minLength: {
                              value: 8,
                              message: 'Password must be at least 8 characters',
                            },
                          })
                          }
                          required
                        />
                        <p className='error-msg'>{errors.Password?.message}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <label>Confirm Password *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          {...register('ConfirmPassword', {
                            required: 'Confirm your password',
                            validate: (value) =>
                              value === password || 'Passwords do not match',
                          })}
                          required
                        />
                        <p className='error-msg'>{errors.ConfirmPassword?.message}</p>
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
                    <h4 className="tmp-title-style-3">Institution Profile</h4>
                  </div>
                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label>Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
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
        <div className="inv-appoinment-area-start tmp-section-gapBottom" ref={formRef}>
          <div className="container">
            <div className="row g-5">
              <div className="col-12">
                <form
                  className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form"
                  id="contact-form"
                  onSubmit={handleSubmitAgent(submitAgent)}
                  noValidate
                >
                  <div className="section-title">
                    <h2 className="tmp-title-style-3">Agent Registration</h2>
                  </div>
                  <div className="section-title">
                    <h4 className="tmp-title-style-3">Personal Information</h4>
                  </div>

                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label>First Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="First Name"
                          {...registerAgent('FirstName', { required: 'Provide First Name' })}
                        />
                        <p className='error-msg'>{agentErrors.FirstName?.message}</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Last Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="Last Name"
                          {...registerAgent('LastName', { required: 'Provide Last Name' })}
                        />
                        <p className='error-msg'>{agentErrors.LastName?.message}</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Gender *</label>
                      <div className="form-group tmponhover">
                        <select {...registerAgent('Gender', { required: 'Select Gender', validate: v => v !== 'Choose Gender' || 'Select Gender' })}>
                          <option value="Choose Gender">Choose Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <p className='error-msg'>{agentErrors.Gender?.message}</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Date of Birth *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="date"
                          {...registerAgent('DateOfBirth', { required: 'Provide Date of Birth' })}
                        />
                        <p className='error-msg'>{agentErrors.DateOfBirth?.message}</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Email Address *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="Email Address"
                          {...registerAgent('Email', {
                            required: 'Provide Email Address',
                            pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid Email' }
                          })}
                        />
                        <p className='error-msg'>{agentErrors.Email?.message}</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Phone Number *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          {...registerAgent('Phone', { required: 'Provide Phone Number' })}
                        />
                        <p className='error-msg'>{agentErrors.Phone?.message}</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Address *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="Address"
                          {...registerAgent('Address', { required: 'Provide Address' })}
                        />
                        <p className='error-msg'>{agentErrors.Address?.message}</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Institution Name *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="Institution Name"
                          {...registerAgent('InstitutionName', { required: 'Provide Institution Name' })}
                        />
                        <p className='error-msg'>{agentErrors.InstitutionName?.message}</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Registration Number *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="text"
                          placeholder="Registration Number"
                          {...registerAgent('RegistrationNumber', { required: 'Provide Registration Number' })}
                        />
                        <p className='error-msg'>{agentErrors.RegistrationNumber?.message}</p>
                      </div>
                    </div>
                  </div>

                  <div className="section-title">
                    <h4 className="tmp-title-style-3 mt-3">Access Credentials</h4>
                  </div>

                  <div className="row g-5 register-form-row">
                    <div className="col-lg-6 col-md-12">
                      <label>Password *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="password"
                          placeholder="Password"
                          {...registerAgent('Password', {
                            required: 'Provide Password',
                            minLength: { value: 8, message: 'Password must be at least 8 characters' }
                          })}
                        />
                        <p className='error-msg'>{agentErrors.Password?.message}</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label>Confirm Password *</label>
                      <div className="form-group tmponhover">
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          {...registerAgent('ConfirmPassword', {
                            required: 'Confirm your password',
                            validate: (value) => value === agentPassword || 'Passwords do not match'
                          })}
                        />
                        <p className='error-msg'>{agentErrors.ConfirmPassword?.message}</p>
                      </div>
                    </div>
                  </div>

                  <div className="form-group submit-btn mt-5 mb-5">
                    <button
                      name="submit"
                      type="submit"
                      className="btn-default btn-large tmp-btn"
                      style={{ width: "100%" }}
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

export default Signup;
