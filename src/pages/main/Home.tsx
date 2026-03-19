import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Banner Area */}
      <div className="banner-slider-area-one">
        {/* Start Slider Area  */}
        <div className="slider-animation-2 slider-activation-2 slider-dot tmp-slick-dot tmp-slick-arrow tmp-slick-arrow-white">
          <div className="slider-area slider-style-2 d-flex variation-2 height-850 bg_image bg_image--10">
            <div className="banner-overlay">&nbsp;</div>
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-10">
                  <div className="inner text-left">
                    <h6 className="tag-title">
                      Smart Background Check Solution for Your Business.
                    </h6>
                    <h1 className="title display-one">
                      We Build a Safer <br /> <span>Workplace</span> for You.
                    </h1>
                    <p className="mb--40 b1">
                      We deliver advanced CTA solutions that improve efficiency
                      and strengthen trust.
                    </p>
                    <div className="read-more-btn">
                      <a
                        className="tmp-btn btn-large round hover-icon-reverse"
                        href="#"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Check our Services</span>
                          <span className="btn-icon">
                            <i data-feather="arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i data-feather="arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-area slider-style-2 d-flex variation-2 height-850 bg_image bg_image--13">
            <div className="banner-overlay">&nbsp;</div>
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-10">
                  <div className="inner text-left">
                    <h6 className="tag-title">
                      Secure Your Organisation with Confidence
                    </h6>
                    <h1 className="title display-one">
                      Ensure a Safe <br />
                      <span>Workforce</span> Efficiently.
                    </h1>
                    <p className="mb--40 b1">
                      Access reliable background checks to make confident hiring
                      decisions.
                    </p>
                    <div className="read-more-btn">
                      <a
                        className="tmp-btn btn-large round hover-icon-reverse"
                        href="#"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Check our Services</span>
                          <span className="btn-icon">
                            <i data-feather="arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i data-feather="arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-area slider-style-2 d-flex variation-2 height-850 bg_image bg_image--19">
            <div className="banner-overlay">&nbsp;</div>{" "}
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-10">
                  <div className="inner text-left">
                    <h6 className="tag-title">
                      Instant Background Verification
                    </h6>
                    <h1 className="title display-one">
                      Trusted <br />
                      <span>Background Checks</span> for You.
                    </h1>
                    <p className="mb--40 b1">
                      We help you verify candidates quickly while maintaining
                      full compliance.
                    </p>
                    <div className="read-more-btn">
                      <a
                        className="tmp-btn btn-large round hover-icon-reverse"
                        href="#"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Check our Services</span>
                          <span className="btn-icon">
                            <i data-feather="arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i data-feather="arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}
      </div>
      {/* Service Area */}
      <div className="tmp-service-area tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tmp-section-title-border text-center">
                <div className="pres-line-separator-wrapper text-center mb--10">
                  <div className="line-separator line-left"></div>
                  <span className="subtitle">
                    <span className="number">04</span>
                    <span className="subtitle-text">Services</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h2 className="title tmp-title-split">Premium Services</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 service-wrapper mt--10">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                <div className="icon">
                  {/* <i className="feather-activity"></i> */}
                  <img
                    src="./assets/main/images/services/icons/01.png"
                    alt="service"
                  />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="/services#basic-check">Basic CTA Check</a>
                  </h4>
                  <p className="description mb--0">
                    Checks for unspent convictions only. Ideal for low-risk
                    roles and quick verification.
                  </p>
                  <div className="discover-btn mt--30">
                    <NavLink
                      className="tmp-btn round btn-small btn-border hover-icon-reverse"
                      to="/services#basic-check"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Discover services</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </NavLink>
                  </div>
                </div>
                <div className="shape-service-1">
                  <img
                    src="./assets/main/images/services/shape/01.png"
                    alt="service"
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                <div className="icon">
                  {/* <i className="feather-cast"></i> */}
                  <img
                    src="./assets/main/images/services/icons/02.png"
                    alt="service"
                  />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="/services#standard-check">Standard CTA Check</a>
                  </h4>
                  <p className="description mb--0">
                    Covers both spent and unspent convictions. Suitable for
                    positions requiring more thorough screening.
                  </p>
                  <div className="discover-btn mt--30">
                    <NavLink
                      className="tmp-btn round btn-small btn-border hover-icon-reverse"
                      to="/services#standard-check"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Discover services</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </NavLink>
                  </div>
                </div>
                <div className="shape-service-1">
                  <img
                    src="./assets/main/images/services/shape/01.png"
                    alt="service"
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                <div className="icon">
                  {/* <i className="feather-map"></i> */}
                  <img
                    src="./assets/main/images/services/icons/03.png"
                    alt="service"
                  />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="/services#enhanced-check">Diaspora CTA Check</a>
                  </h4>
                  <p className="description mb--0">
                    Includes full criminal records and barred lists. Perfect for
                    high-risk roles and regulated work.
                  </p>
                  <div className="discover-btn mt--30">
                    <NavLink
                      className="tmp-btn round btn-small btn-border hover-icon-reverse"
                      to="/services#enhanced-check"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Discover services</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </NavLink>
                  </div>
                </div>
                <div className="shape-service-1">
                  <img
                    src="./assets/main/images/services/shape/01.png"
                    alt="service"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Area */}
      <div className="about-area about-style-4 tmp-section-gapBottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="thumbnail-about-8">
                <div className="large-image  invers-anime">
                  <img
                    src="./assets/main/images/bg/ct_aboutus_section.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 pl--60 pl_md--10 pl_sm--10 mt_md--30 mt_sm--30">
              <div className="about-wrapper-8">
                <div className="tmp-section-title-border text-start">
                  <div className="pres-line-separator-wrapper text-start mb--10">
                    <span className="subtitle">
                      <span className="number">03</span>
                      <span className="subtitle-text">About Us</span>
                    </span>
                    <div className="line-separator line-right"></div>
                  </div>
                  <h2 className="title w-700 tmp-title-split">
                    Discover More <span className="theme-gradient">About</span>{" "}
                    Our <br /> Company
                  </h2>
                </div>
                <p className="discription">
                  We have a diverse team operating worldwide, offering a wide
                  range of specialized services.
                </p>
                <ul className="tmp-list-item-half">
                  <li>
                    <div className="icon">
                      <svg
                        version="1.1"
                        id="fi_263115"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        // @ts-expect-error/style
                        style={{ "enable-background": "new 0 0 512 512" }}
                        xml:space="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064
c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57
c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"
                            ></path>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52
s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053
c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89
c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024
c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847
C455.549,238.499,449.593,232.543,442.246,232.543z"
                            ></path>
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </div>
                    Trusted & Reliable
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        id="fi_3167211"
                        height="512"
                        viewBox="0 0 64 64"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="line copy"
                      >
                        <path d="m32 37a1 1 0 0 0 1-1v-6a1 1 0 0 0 -2 0v6a1 1 0 0 0 1 1z"></path>
                        <path d="m22.4658 36.5957a1 1 0 0 0 1.8477-.7656l-1.148-2.7715a1 1 0 1 0 -1.8476.7656z"></path>
                        <path d="m8.0581 48.165 2.772 1.1485a1 1 0 0 0 .7656-1.8477l-2.772-1.1484a1 1 0 0 0 -.7656 1.8476z"></path>
                        <path d="m52.7876 49.39a.9991.9991 0 0 0 .3823-.0761l2.772-1.1485a1 1 0 0 0 -.7656-1.8476l-2.772 1.1484a1 1 0 0 0 .3833 1.9238z"></path>
                        <path d="m40.8345 33.0586-1.148 2.7714a1 1 0 0 0 1.8477.7656l1.1479-2.7715a1 1 0 0 0 -1.8476-.7656z"></path>
                        <path d="m16.4438 42.8574a1 1 0 0 0 1.4141-1.414l-4.2427-4.2422a1 1 0 0 0 -1.414 1.414z"></path>
                        <path d="m51.7988 37.2012a.9994.9994 0 0 0 -1.414 0l-4.2427 4.2422a1 1 0 1 0 1.4141 1.414l4.2426-4.2422a.9994.9994 0 0 0 0-1.414z"></path>
                        <path d="m60 56h-11.0507a16.9775 16.9775 0 0 0 -33.8986 0h-11.0507a1 1 0 0 0 0 2h56a1 1 0 0 0 0-2zm-42.9493 0a14.9815 14.9815 0 0 1 29.8986 0z"></path>
                        <path d="m55 61h-46a1 1 0 0 0 0 2h46a1 1 0 0 0 0-2z"></path>
                        <path d="m50.5 27a13.5 13.5 0 1 0 -13.5-13.5 13.5155 13.5155 0 0 0 13.5 13.5zm0-25a11.5 11.5 0 1 1 -11.5 11.5 11.5128 11.5128 0 0 1 11.5-11.5z"></path>
                        <circle cx="50.5" cy="5.002" r="1"></circle>
                        <circle cx="50.5" cy="21.999" r="1"></circle>
                        <circle cx="42" cy="13.5" r="1"></circle>
                        <circle cx="59" cy="13.5" r="1"></circle>
                        <circle cx="43.14" cy="9.252" r="1"></circle>
                        <circle cx="57.86" cy="17.75" r="1"></circle>
                        <circle cx="46.25" cy="20.862" r="1"></circle>
                        <circle cx="54.75" cy="6.14" r="1"></circle>
                        <circle cx="43.14" cy="17.75" r="1"></circle>
                        <circle cx="57.86" cy="9.252" r="1"></circle>
                        <circle cx="54.75" cy="20.862" r="1"></circle>
                        <circle cx="46.25" cy="6.14" r="1"></circle>
                        <path d="m49.6426 14.0146 2 3.3335a1 1 0 1 0 1.7148-1.0293l-1.8574-3.0958v-4.723a1 1 0 0 0 -2 0v5h.017a.9729.9729 0 0 0 .1256.5146z"></path>
                      </svg>
                    </div>
                    Secure & Confidential
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        version="1.1"
                        id="fi_36447"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="31.559px"
                        height="31.559px"
                        viewBox="0 0 31.559 31.559"
                        // @ts-expect-error/style
                        style={{ "enable-background": "new 0 0 31.559 31.559" }}
                        xml:space="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M16.646,16.945c0.959-0.457,1.272-1.801,0.702-2.995c-0.571-1.198-1.812-1.801-2.771-1.344
c-0.959,0.457-1.272,1.801-0.701,2.999C14.447,16.801,15.688,17.404,16.646,16.945z"
                            ></path>
                            <path
                              d="M19.52,9.796c0.922,5.771-3.185,10.097-3.185,10.097s-3.386-5.729-9.08-7.458c11.076,8.099,4.772,18.196,4.772,18.196
h3.206C15.234,30.631,22.686,17.77,19.52,9.796z"
                            ></path>
                            <path
                              d="M13.269,10.455c-0.062-0.092-0.125-0.19-0.188-0.298c-0.293-0.506-0.427-0.976-0.427-0.976s0.338,0.354,0.631,0.857
c0.061,0.107,0.114,0.212,0.163,0.312c0.046-0.241,0.1-0.736-0.134-1.144c-0.323-0.559-1.067-0.733-1.067-0.733
s-0.222,0.732,0.101,1.292C12.582,10.173,13.038,10.374,13.269,10.455z"
                            ></path>
                            <path
                              d="M20.622,14.7c0.186,0.16,0.588,0.454,1.057,0.454c0.646,0,1.168-0.559,1.168-0.559s-0.521-0.558-1.168-0.558
c-0.469,0-0.871,0.294-1.057,0.454c0.111-0.008,0.227-0.014,0.352-0.014c0.584,0,1.061,0.116,1.061,0.116
s-0.477,0.118-1.061,0.117C20.848,14.715,20.733,14.708,20.622,14.7z"
                            ></path>
                            <path
                              d="M18.276,10.04c0.291-0.506,0.631-0.859,0.631-0.859s-0.135,0.472-0.428,0.978c-0.062,0.106-0.125,0.206-0.189,0.298
c0.234-0.081,0.689-0.283,0.922-0.688c0.324-0.561,0.104-1.294,0.104-1.294s-0.746,0.177-1.068,0.734
c-0.234,0.406-0.182,0.9-0.135,1.144C18.159,10.252,18.213,10.147,18.276,10.04z"
                            ></path>
                            <path
                              d="M15.519,6.994c0-1.301,0.261-2.354,0.261-2.354s0.262,1.055,0.262,2.354c0,0.275-0.013,0.535-0.033,0.781
c0.358-0.413,1.011-1.308,1.011-2.352c0-1.436-1.24-2.599-1.24-2.599s-1.24,1.163-1.24,2.599c0,1.044,0.653,1.938,1.01,2.352
C15.532,7.529,15.519,7.27,15.519,6.994z"
                            ></path>
                            <path
                              d="M7.217,11.084c0.905,0.522,2.005,0.403,2.542,0.3c-0.222-0.104-0.455-0.226-0.692-0.362
c-1.126-0.649-1.908-1.402-1.908-1.402s1.043,0.3,2.169,0.95c0.238,0.138,0.457,0.278,0.661,0.419
c-0.178-0.518-0.625-1.53-1.531-2.052C7.216,8.218,5.588,8.71,5.588,8.71S5.974,10.367,7.217,11.084z"
                            ></path>
                            <path
                              d="M24.342,18.107c-0.904-0.521-2.004-0.404-2.541-0.301c0.223,0.105,0.455,0.227,0.693,0.363
c1.125,0.65,1.908,1.402,1.908,1.402s-1.043-0.299-2.17-0.949c-0.238-0.139-0.457-0.279-0.66-0.42
c0.178,0.518,0.625,1.529,1.529,2.051c1.242,0.719,2.871,0.227,2.871,0.227S25.584,18.824,24.342,18.107z"
                            ></path>
                            <path
                              d="M9.987,18.205c-0.204,0.139-0.422,0.279-0.66,0.418c-1.126,0.648-2.17,0.951-2.17,0.951s0.782-0.754,1.908-1.404
c0.239-0.139,0.471-0.256,0.693-0.363c-0.536-0.104-1.638-0.223-2.542,0.301c-1.243,0.717-1.631,2.373-1.631,2.373
s1.628,0.492,2.871-0.225C9.362,19.732,9.809,18.721,9.987,18.205z"
                            ></path>
                            <path
                              d="M21.573,10.985c0.203-0.139,0.422-0.279,0.662-0.417c1.125-0.65,2.168-0.95,2.168-0.95s-0.781,0.753-1.908,1.402
c-0.238,0.138-0.471,0.258-0.691,0.362c0.535,0.104,1.637,0.224,2.539-0.3c1.244-0.718,1.631-2.374,1.631-2.374
s-1.627-0.491-2.869,0.227C22.198,9.457,21.75,10.469,21.573,10.985z"
                            ></path>
                            <path
                              d="M10.941,6.831c-0.186-0.273-0.375-0.567-0.56-0.887C9.509,4.436,9.106,3.036,9.106,3.036s1.01,1.048,1.881,2.56
c0.185,0.318,0.344,0.629,0.486,0.928c0.14-0.719,0.299-2.194-0.401-3.406C10.11,1.451,7.89,0.931,7.89,0.931
S7.231,3.113,8.193,4.779C8.893,5.992,10.251,6.591,10.941,6.831z"
                            ></path>
                            <path
                              d="M20.62,22.361c0.186,0.273,0.377,0.566,0.561,0.885c0.873,1.514,1.275,2.91,1.275,2.91s-1.01-1.049-1.883-2.559
c-0.184-0.32-0.344-0.631-0.486-0.928c-0.137,0.719-0.297,2.191,0.402,3.404c0.963,1.666,3.182,2.188,3.182,2.188
s0.662-2.184-0.301-3.85C22.668,23.199,21.311,22.6,20.62,22.361z"
                            ></path>
                            <path
                              d="M5.588,14.947c-1.743,0-3.156-0.352-3.156-0.352s1.413-0.352,3.156-0.352c0.37,0,0.719,0.02,1.048,0.044
c-0.553-0.48-1.751-1.356-3.153-1.356C1.56,12.932,0,14.595,0,14.595s1.561,1.664,3.483,1.663c1.401,0,2.599-0.875,3.152-1.354
C6.306,14.929,5.956,14.947,5.588,14.947z"
                            ></path>
                            <path
                              d="M28.077,12.935c-1.4,0-2.598,0.872-3.152,1.354c0.33-0.025,0.68-0.044,1.047-0.043c1.744,0,3.156,0.351,3.156,0.351
s-1.412,0.352-3.154,0.352c-0.369,0-0.719-0.019-1.049-0.043c0.553,0.479,1.752,1.354,3.152,1.354
c1.924,0,3.482-1.661,3.482-1.661S29.999,12.933,28.077,12.935z"
                            ></path>
                            <path
                              d="M10.988,23.598c-0.872,1.51-1.882,2.559-1.882,2.559s0.402-1.4,1.274-2.91c0.186-0.318,0.375-0.611,0.562-0.887
c-0.692,0.24-2.05,0.84-2.75,2.053c-0.963,1.666-0.303,3.85-0.303,3.85s2.221-0.52,3.183-2.186
c0.701-1.213,0.542-2.689,0.403-3.406C11.33,22.967,11.171,23.275,10.988,23.598z"
                            ></path>
                            <path
                              d="M20.573,5.593c0.871-1.51,1.881-2.558,1.881-2.558s-0.402,1.399-1.275,2.908c-0.184,0.317-0.373,0.613-0.559,0.886
c0.691-0.239,2.049-0.839,2.748-2.051c0.963-1.666,0.303-3.851,0.303-3.851s-2.219,0.521-3.182,2.187
c-0.703,1.213-0.543,2.688-0.404,3.406C20.229,6.225,20.387,5.914,20.573,5.593z"
                            ></path>
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </div>
                    Fast & Efficient
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        id="fi_18502262"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                      >
                        <path
                          d="m320.72 191.29a91.52 91.52 0 1 0 0 129.43 91.53 91.53 0 0 0 0-129.43zm-64.72-46.58a111.3 111.3 0 1 1 -111.3 111.29 111.3 111.3 0 0 1 111.3-111.29zm-100.22-89.47a477.65 477.65 0 0 0 95.52-38 9.88 9.88 0 0 1 9.3-.06 477.29 477.29 0 0 0 95.62 38.08 500 500 0 0 0 102.53 17.11 9.86 9.86 0 0 1 9.91 9.88v122.51.07c-.73 75.26-18.37 136.17-53.26 184.25s-86.87 83.07-156.23 106.38a9.79 9.79 0 0 1 -6.26 0c-69.36-23.31-121.31-58.27-156.23-106.38-34.79-47.88-52.42-108.49-53.29-183.31a8.44 8.44 0 0 1 0-1v-122.52a9.87 9.87 0 0 1 9.28-9.85 500.05 500.05 0 0 0 103.11-17.16zm100.22-18.24c60.35 31.13 125.32 49.07 192.89 54.42v113.34c-.71 70.92-17.12 128-49.56 172.73-31.92 44-79.6 76.26-143.37 98.21-63.77-21.95-111.45-54.23-143.37-98.21-32.29-44.55-48.69-101.41-49.51-171.99 0-.24 0-.49 0-.74v-113.32c67.6-5.35 132.57-23.29 192.92-54.44zm35.45 181a9.86 9.86 0 0 1 14.44 13.44l-58.27 62.67a9.85 9.85 0 0 1 -15-.61l-26.62-29.5a9.84 9.84 0 1 1 14.6-13.21l19.85 21.93z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    Comprehensive Coverage
                  </li>
                </ul>
                <div className="quote-area-about tmponhover bg-card mt--30">
                  <p>
                    Providing secure and reliable background checks for
                    individuals and employers with fast turnaround and peace of
                    mind.
                  </p>
                </div>
                <NavLink to="/about" className="tmp-btn btn-primary">
                  More About Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Key Benefits Area */}
      <div className="tmp-counterup-area tmp-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tmp-section-title-border text-center">
                <div className="pres-line-separator-wrapper text-center mb--10">
                  <div className="line-separator line-left"></div>
                  <span className="subtitle">
                    <span className="number">+15000</span>
                    <span className="subtitle-text">Trusted</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h2 className="title  tmp-title-split">Key Benefits</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--20 tmp_jump_animation-wrapper">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 tmp-jump__item">
              <div className="count-box counter-style-4 tmp-card text-center without-border tmponhover">
                <div>
                  <div className="count-number">Fast Processing</div>
                </div>
                <h5 className="counter-title">
                  Get criminal record checks completed efficiently and on time.
                </h5>
                <div className="left-hover-counter"></div>
                <div className="right-hover-counter"></div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12 tmp-jump__item"
              data-sal-delay="100"
            >
              <div className="count-box counter-style-4 tmp-card text-center without-border tmponhover">
                <div>
                  <div className="count-number">Enhanced Accuracy</div>
                </div>
                <h5 className="counter-title">
                  Minimize errors with reliable, up-to-date data.
                </h5>
                <div className="left-hover-counter"></div>
                <div className="right-hover-counter"></div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12 tmp-jump__item"
              data-sal-delay="200"
            >
              <div className="count-box counter-style-4 tmp-card text-center without-border tmponhover">
                <div>
                  <div className="count-number">Streamlined Process</div>
                </div>
                <h5 className="counter-title">
                  Simplified online checks reduce paperwork and manual effort.
                </h5>
                <div className="left-hover-counter"></div>
                <div className="right-hover-counter"></div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12 tmp-jump__item"
              data-sal-delay="300"
            >
              <div className="count-box counter-style-4 tmp-card text-center without-border tmponhover">
                <div>
                  <div className="count-number">Complete Assurance</div>
                </div>
                <h6 className="counter-title">
                  Keep your organisation or personal records secure and fully
                  compliant.
                </h6>
                <div className="left-hover-counter"></div>
                <div className="right-hover-counter"></div>
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
                    <span className="subtitle-text">Working Process</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h2 className="title  tmp-title-split">
                  Our Method of Operation
                </h2>
                <p className="b1 tmp-title-split">
                  We streamline your background checks, giving you seamless
                  control and complete confidence.
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
                      Consultation & Discovery
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
                      We begin by understanding your needs, goals, and
                      expectations through clear communication and assessment.
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
                      Planning & Strategy
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
                      Our experts create a tailored action plan designed to
                      deliver efficiency, quality, and measurable outcomes.
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
                      Execution & Delivery
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
                      Each stage is handled with precision and professionalism
                      to ensure timely and reliable project completion.
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
                      Review & Support
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
                      We evaluate results, gather feedback, and provide ongoing
                      assistance for consistent client satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Industries */}
      <div className="my-business-service-area tmp-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-flex-between">
                <div className="tmp-section-title-border text-start">
                  <div className="pres-line-separator-wrapper text-start mb--10">
                    <span className="subtitle">
                      <span className="subtitle-text">Inustries We Serve</span>
                    </span>
                    <div className="line-separator line-right"></div>
                  </div>
                  <h2 className="title w-700 tmp-title-split">
                    Innovative Screening Solutions for
                    <br /> Your Industry Needs.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--20">
            <div className="col-lg-12">
              <div
                className="single-service-list-area"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6">
                    <a href="#" className="thumbnail-service-list invers-anime">
                      <img
                        src="./assets/main/images/bg/ct_health.jpg"
                        alt="Business consulting"
                      />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <div className="inner-content">
                      <div className="head">
                        <div className="icon">
                          <img
                            src="./assets/main/images/services/list/icon/01.svg"
                            alt="Business"
                          />
                        </div>
                        <h6 className="title">Healthcare & Social Care</h6>
                      </div>
                      <p className="disc">
                        Hospitals, clinics, and care homes rely on background
                        checks to verify the integrity and credentials of
                        medical and caregiving staff — ensuring patient safety
                        and regulatory compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-service-list-area"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6 order-2 order-lg-1 order-md-2 order-sm-2">
                    <div className="inner-content">
                      <div className="head">
                        <div className="icon">
                          <img
                            src="./assets/main/images/services/list/icon/02.svg"
                            alt="Business"
                          />
                        </div>
                        <h6 className="title">Education & Childcare</h6>
                      </div>
                      <p className="disc">
                        Schools, nurseries, and youth organisations must
                        safeguard children by screening teachers, staff, and
                        volunteers for past offences or misconduct before
                        employment.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 order-md-1 order-sm-1">
                    <a href="#" className="thumbnail-service-list invers-anime">
                      <img
                        src="./assets/main/images/bg/ct_educator.jpg"
                        alt="Business consulting"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="single-service-list-area"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6">
                    <a href="#" className="thumbnail-service-list invers-anime">
                      <img
                        src="./assets/main/images/bg/ct_corporate.jpg"
                        alt="Business consulting"
                      />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <div className="inner-content">
                      <div className="head">
                        <div className="icon">
                          <img
                            src="./assets/main/images/services/list/icon/03.svg"
                            alt="Business"
                          />
                        </div>
                        <h6 className="title">
                          Corporate & Financial Institutions
                        </h6>
                      </div>
                      <p className="disc">
                        Banks, fintechs, and corporates use background screening
                        to validate employee honesty, reduce insider risks, and
                        meet anti-fraud and compliance standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-service-list-area"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6 order-2 order-lg-1 order-md-2 order-sm-2">
                    <div className="inner-content">
                      <div className="head">
                        <div className="icon">
                          <img
                            src="./assets/main/images/services/list/icon/04.svg"
                            alt="Business"
                          />
                        </div>
                        <h6 className="title">
                          Recruitment & Staffing Agencies
                        </h6>
                      </div>
                      <p className="disc">
                        Agencies need fast, verifiable checks on candidates
                        before placement, maintaining client confidence and
                        compliance with employment regulations.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 order-md-1 order-sm-1">
                    <a href="#" className="thumbnail-service-list invers-anime">
                      <img
                        src="./assets/main/images/bg/ct_recruit.jpg"
                        alt="Business consulting"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <div className="tmp-pricing-area tmp-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tmp-section-title-border text-center">
                <div className="pres-line-separator-wrapper text-center mb--10">
                  <div className="line-separator line-left"></div>
                  <span className="subtitle">
                    <span className="number">03</span>
                    <span className="subtitle-text">Our Pricing</span>
                  </span>
                  <div className="line-separator line-right"></div>
                </div>
                <h2 className="title  tmp-title-split">
                  CTA Check Pricing
                </h2>
                <p className="description b1 tmp-title-split-p">
                  Sign up and choose the appropriate CTA check that aligns with the required level of
                  clearance for your staff or workers.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt--20">
            <div className="col-lg-12">
              <ul
                className="nav nav-tabs pricing-tab-nav-yearly"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item d-none" role="presentation">
                  <button
                    className="nav-link tmp-btn btn-border active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Pricing
                  </button>
                </li>
                <li className="nav-item d-none" role="presentation">
                  <button
                    className="nav-link tmp-btn btn-border"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Yearly Plan
                  </button>
                </li>
              </ul>
              <div
                className="tab-content pricing-table-items mt--40"
                id="myTabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div
                        className="pricing-table large-padding tmponhover"
                        // @ts-expect-error/style
                        style={{ "--x": "473.5px", "--y": "112.109375px" }}
                      >
                        <div className="pricing-table-header">
                          <div className="top d-flex justify-content-between align-items-start">
                            <h4>Basic</h4>
                          </div>
                          <h1>
                            &#8358;1000 <span>/ Check</span>
                          </h1>
                        </div>
                        <ul className="feature-lists">
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Basic identity & criminal record check
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Quick online submission
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Results delivered within 3–5 business days
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Remote/online process
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div
                        className="pricing-table large-padding tmponhover"
                        // @ts-expect-error/style
                        style={{ "--x": "473.5px", "--y": "112.109375px" }}
                      >
                        <div className="pricing-table-header">
                          <div className="top d-flex justify-content-between align-items-start">
                            <h4>Standard</h4>
                          </div>
                          <h1>
                            &#8358;2000 <span>/ Check</span>
                          </h1>
                        </div>
                        <ul className="feature-lists">
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Standard identity & criminal record check
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Employment & reference verification
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Results delivered within 2–3 business days
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Remote/online process
                          </li>
                        </ul>
                        <div className="popular-tag">Popular</div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div
                        className="pricing-table large-padding tmponhover"
                        // @ts-expect-error/style
                        style={{ "--x": "473.5px", "--y": "112.109375px" }}
                      >
                        <div className="pricing-table-header">
                          <div className="top d-flex justify-content-between align-items-start">
                            <h4>Diaspora</h4>
                          </div>
                          <h1>
                            &#8358;3000 <span>/ Check</span>
                          </h1>
                        </div>
                        <ul className="feature-lists">
                          <li>
                            <MdOutlineRadioButtonChecked /> Enhanced &
                            comprehensive criminal record check
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked /> Employment,
                            reference, and education verification
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Fast-track results within 24–48 hours
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Remote/online process
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div
                        className="pricing-table large-padding tmponhover"
                        // @ts-expect-error/style
                        style={{ "--x": "473.5px", "--y": "112.109375px" }}
                      >
                        <div className="pricing-table-header">
                          <div className="top d-flex justify-content-between align-items-start">
                            <h4>basic</h4>
                          </div>
                          <h1>
                            &#8358;30000 <span>/ Year</span>
                          </h1>
                        </div>
                        <ul className="feature-lists">
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Basic identity & criminal record check
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Quick online submission
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Results delivered within 3–5 business days
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Remote/online process
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div
                        className="pricing-table large-padding tmponhover"
                        // @ts-expect-error/style
                        style={{ "--x": "473.5px", "--y": "112.109375px" }}
                      >
                        <div className="pricing-table-header">
                          <div className="top d-flex justify-content-between align-items-start">
                            <h4>Standard</h4>
                          </div>
                          <h1>
                            &#8358;50000 <span>/ Year</span>
                          </h1>
                        </div>
                        <ul className="feature-lists">
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Standard identity & criminal record check
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Employment & reference verification
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Results delivered within 2–3 business days
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Remote/online process
                          </li>
                        </ul>
                        <div className="popular-tag">Popular</div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div
                        className="pricing-table large-padding tmponhover"
                        // @ts-expect-error/style
                        style={{ "--x": "473.5px", "--y": "112.109375px" }}
                      >
                        <div className="pricing-table-header">
                          <div className="top d-flex justify-content-between align-items-start">
                            <h4>Diaspora</h4>
                          </div>
                          <h1>
                            &#8358;80000 <span>/ Year</span>
                          </h1>
                        </div>
                        <ul className="feature-lists">
                          <li>
                            <MdOutlineRadioButtonChecked /> Enhanced &
                            comprehensive criminal record check
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked /> Employment,
                            reference, and education verification
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Fast-track results within 24–48 hours
                          </li>
                          <li>
                            <MdOutlineRadioButtonChecked />
                            Remote/online process
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="tmp-faq-area tmp-section-gap faq-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-center mb-20">
                <h4 className="subtitle">FAQ'S</h4>
                <h2 className="title mb-50 tmp-title-split">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div
                className="thumbnail"
                data-sal="slide-right"
                data-sal-duration="800"
              >
                <img
                  className="w-100 radius"
                  loading="lazy"
                  src="./assets/main/images/bg/ct_faq.jpg"
                  alt="About Images"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tmp-accordion-style accordion"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <div className="accordion" id="accordionExamplea">
                  <div className="accordion-item card tmponhover">
                    <h2
                      className="accordion-header card-header"
                      id="headingOne"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What types of checks are available?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body card-body">
                        The software offers Basic, Standard, and Enhanced checks
                        to suit different needs.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item card tmponhover">
                    <h2
                      className="accordion-header card-header"
                      id="headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I submit applications online?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body card-body">
                        Yes, all applications can be completed and submitted
                        entirely online.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item card tmponhover">
                    <h2
                      className="accordion-header card-header"
                      id="headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How long does it take to get results?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body card-body">
                        Results are typically processed quickly, depending on
                        the check type.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item card tmponhover">
                    <h2
                      className="accordion-header card-header"
                      id="headingFour"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Is my data secure?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body card-body">
                        Yes, all information is encrypted and handled in
                        compliance with legal standards.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="tmp-callto-action-area tmp-section-gapBottom">
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
                            The trusted choice for individuals and organisations
                            worldwide.
                          </h6>
                          <div className="call-to-btn d-flex justify-content-center">
                            <a
                              className="tmp-btn btn-extra-large hover-icon-reverse"
                              href="/request"
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">
                                  Request a CTA Check
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
                                src="./assets/main/images/testimonial/tooltip-01.png"
                                alt="education"
                              />
                            </a>
                            <a href="#" className="avatar" data-tooltip="Mark">
                              <img
                                src="./assets/main/images/testimonial/tooltip-02.png"
                                alt="education"
                              />
                            </a>
                            <a
                              href="#"
                              className="avatar"
                              data-tooltip="Jordan"
                            >
                              <img
                                src="./assets/main/images/testimonial/tooltip-03.png"
                                alt="education"
                              />
                            </a>
                            <div className="more-author-text">
                              <h5 className="total-join-students">
                                Join Other Organisations
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
                    <div className="person-stand images-left-right-float">
                    </div>
                    <div className="bg-shape-area-cta-main tmponhover">
                      <img
                        loading="lazy"
                        src="./assets/main/images/bg/ct_request.jpg"
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
    </>
  );
};

export default Home;
