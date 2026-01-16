/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleDataAuth, handleVerifyUser } from "../../utils/functions/Extra";
import { verifyCode } from "../../utils/functions/EmployerRequests";
import { useAuth } from "../../utils/main/useAuth";
import { useEffect } from "react";

export interface VerificationFormValues {
  VerificationCode: string;
}

const Verification = () => {
  const { register, reset, handleSubmit, formState } =
    useForm<VerificationFormValues>();
  const { errors } = formState;
  const navigate = useNavigate();
  const auth = useAuth();

  const { mfaSession } = useAuth();

  useEffect(() => {
    if (!mfaSession || mfaSession.expiresAt < Date.now()) {
      navigate("/login");
    }
    console.log(
      "user info",
      Number(mfaSession?.userId),
      Number(mfaSession?.organisationId)
    );
  }, [mfaSession]);

  const submitData = async (code: any) => {
    if (!errors.VerificationCode) {
      const loader = document.getElementById("query-loader");
      const text = document.getElementById("query-text");
      if (loader) {
        loader.style.display = "flex";
      }
      if (text) {
        text.style.display = "none";
      }
      const res = await verifyCode(
        code,
        Number(mfaSession?.userId),
        Number(mfaSession?.organisationId)
      );
      handleVerifyUser(res, loader, text, { toast }, reset, navigate, auth);
    }
  };
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
                    <span className="subtitle-text">Verification</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h4 className="title mt--20 tmp-title-split">
                  We have sent a verification code to your registered email
                  address. Please enter the code to proceed.
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
                    <label>Verification Code *</label>
                    <div className="form-group tmponhover">
                      <input
                        type="text"
                        placeholder="Enter code here"
                        {...register("VerificationCode", {
                          required: "Input verification code",
                        })}
                        required
                      />
                      <p className="error-msg">
                        {errors.VerificationCode?.message}
                      </p>
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
                    <span id="query-text">Verify Code</span>
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

export default Verification;
