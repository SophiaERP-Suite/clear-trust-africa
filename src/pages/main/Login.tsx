/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleDataAuth } from "../../utils/functions/Extra";
import { loginUser } from "../../utils/functions/EmployerRequests";
import { useAuth } from "../../utils/main/useAuth";
import { useEffect } from "react";

interface LoginFormValues {
  Email: string;
  Password: string;
}
const Login = () => {
  const { register, reset, handleSubmit, formState } = useForm<LoginFormValues>();
  const { errors } = formState;
  const navigate = useNavigate();
  const auth = useAuth();

   const { mfaSession } = useAuth();
  
    useEffect(() => {
      if (mfaSession) {
        navigate("/verification");
      }
    
    }, [mfaSession]);

  const submitData = async (data: any) => {
    if (!errors.Email && !errors.Password) {
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const res = await loginUser(data);
      handleDataAuth(res, loader, text, { toast }, reset, navigate, auth);
    }
  }
  return (
    <>

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
                onSubmit={handleSubmit(submitData)}
                noValidate
              >
                <div className="row g-5 register-form-row">
                  <div className="col-lg-12 col-md-12">
                    <label>Email Address *</label>
                    <div className="form-group tmponhover">
                      <input
                        type="text"
                        placeholder="Email Address"
                        {
                          ...register('Email', {
                            required: 'Input Email Address',
                            pattern: {
                              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                              message: "Invalid Email"
                            } 
                          })
                        }
                        required
                      />
                      <p className='error-msg'>{ errors.Email?.message }</p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 mt-5">
                    <label>Password *</label>
                    <div className="form-group tmponhover">
                      <input
                          type="password"
                          placeholder="Password"
                          {
                            ...register('Password', {
                              required: 'Input Password',
                              minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters',
                              },
                            })
                          }
                          required
                        />
                        <p className='error-msg'>{ errors.Password?.message }</p>
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
                      <span id="query-text">Login</span>
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
