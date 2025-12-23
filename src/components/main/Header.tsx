import { useContext } from "react";
import { RegisterContext } from "../../utils/main/Context";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useAuth } from "../../utils/main/useAuth";

const secondHeaderPaths = ["login", "privacy-policy", "terms-and-condition"];

const Header = () => {
  const { setRegisterType } = useContext(RegisterContext);
  const { user, logout } = useAuth();

  const pagePath = useLocation()
    .pathname.split("/")
    .filter((value) => value)[0];

  const handleRegisterChange = (value: string) => () => {
    setRegisterType(value);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="header-left">
                <p>Smart security. Strong protection.</p>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12">
              <div className="header-right">
                <div className="address-content">
                  <p>
                    <i data-feather="map-pin"></i>
                    <span>Greenwich, UK</span>
                  </p>
                  <p>
                    <i data-feather="phone"></i>
                    <span>
                      <NavLink to="#">+44 20 8469 1888</NavLink>
                    </span>
                  </p>
                </div>
                <div className="social-icon-wrapper">
                  <ul className="social-icon social-default icon-naked">
                    <li>
                      <NavLink to="#"
                        target="_blank"
                      >
                        <i data-feather="facebook"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#"
                        target="_blank"
                      >
                        <i data-feather="youtube"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#"
                        target="_blank"
                      >
                        <i data-feather="instagram"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Header Area  */}
      <header
        className={
          secondHeaderPaths.includes(pagePath)
            ? "tmp-header header-default header-not-transparent header-sticky-smooth header-sticky"
            : "tmp-header header-default header-transparent logo-white-show default-nav-white header-sticky header-one"
        }
      >
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              <div className="logo">
                <NavLink to="/home">
                  <img
                    className="logo-light"
                    src="./assets/main/images/logo/clear3.png"
                    alt="Corporate Logo"
                  />
                  <img
                    className="logo-dark"
                    src="./assets/main/images/logo/clear.png"
                    alt="Corporate Logo"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-6 col-8 position-static">
              <div className="header-right with-search">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <ul className="mainmenu">
                    <li>
                      <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">How it works</NavLink>
                    </li>
                    <li className="with-megamenu">
                      <NavLink to="/services">Services</NavLink>
                    </li>
                    <li className="with-megamenu">
                      <NavLink to="/request">Request </NavLink>
                    </li>
                    {
                      user
                      ?  (<></>)
                      : (<li>
                          <NavLink to="/login">Login</NavLink>
                        </li>)
                    }
                  </ul>
                </nav>

                {/* Start Header Btn  */}
                <div className="header-btn">
                  <div className="dot-btn">
                    <img src="./assets/main/images/shop/dot.svg" alt="" />
                    <span className="offcanvas-trigger">
                      <span className="offcanvas-bars">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </span>
                  </div>
                    {
                      user ? 
                        (
                          <div className="get-started-box">
                          <li>
                            <a href="#" className="tmp-btn round  get-started-btn">
                              Hello, {user.firstName}
                            </a>
                          </li>
                          <ul>
                            <li>
                              {
                                user.organizationType === "Employer" && (
                                  <a href="https://cleartrustafrica.com/xt/cta_emp/" target="_blank">
                                    My Portal
                                  </a>
                                )
                              }
                              {
                                user.organizationType === "Root" && (
                                  <a href="https://cleartrustafrica.com/xt/cta_adm/" target="_blank">
                                    My Portal
                                  </a>
                                )
                              }
                              {
                                user.organizationType === "Agent" && (
                                  <a href="https://cleartrustafrica.com/xt/cta_agt/" target="_blank">
                                    My Portal
                                  </a>
                                )
                              }
                            </li>
                            <li>
                              <a href="#" onClick={logout}>
                                Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                      )
                      : (
                        <div className="get-started-box">
                          <li>
                            <NavLink to="#" className="tmp-btn round  get-started-btn">
                              Get Started
                            </NavLink>
                          </li>
                          <ul>
                            <li>
                              <Link
                                to={"/register"}
                                onClick={handleRegisterChange("agent")}
                              >
                                As Agent
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/register"}
                                onClick={handleRegisterChange("employer")}
                              >
                                As Employer
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/register"}
                                onClick={handleRegisterChange("institution")}
                              >
                                As Institution
                              </Link>
                            </li>
                          </ul>
                        </div>
                        )
                    }

                  <div className="cart-container">
                    <span>
                      <span className="cart-icon">
                        <IoCartOutline />
                      </span>
                    </span>
                  </div>
                </div>
                {/* End Header Btn  */}

                {/* Start Mobile-Menu-Bar */}
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <button className="hamberger-button">
                      <i data-feather="menu"></i>
                    </button>
                  </div>
                </div>
                {/* Start Mobile-Menu-Bar */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* End Header Area  */}
      <div className="popup-mobile-menu">
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <NavLink to="/home">
                <img
                  className="logo-light"
                  src="./assets/main/images/logo/logo.png"
                  alt="Corporate Logo"
                />
                <img
                  className="logo-dark"
                  src="./assets/main/images/logo/logo-dark.png"
                  alt="Corporate Logo"
                />
              </NavLink>
            </div>
            <div className="close-menu">
              <button className="close-button">
                <i data-feather="x"></i>
              </button>
            </div>
          </div>
          <ul className="mainmenu">
            <li className="with-megamenu has-menu-child-item">
              <NavLink to="/home">Home</NavLink>
              <div className="tmp-megamenu with-mega-item-2 full-width-mega">
                <div className="wrapper demos-area-drop-down">
                  <div className="row row--0">
                    <div className="col-lg-12">
                      <div className="tab_wrapper onapge-multipage-tab-wrapper">
                        <div
                          className="nav nav-pills me-3 tabs-nav"
                          role="tablist"
                        >
                          <button
                            className="nav-links tmp-btn active"
                            data-target=".multipage_content"
                            type="button"
                          >
                            Multipage
                          </button>
                          <button
                            className="nav-links tmp-btn"
                            data-target=".onepage_content"
                            type="button"
                          >
                            Onepage
                          </button>
                        </div>

                        <div className="tab-content">
                          <div className="tab-pane multipage_content active">
                            {/* multipage area start */}
                            <ul className="mega-menu-item">
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/01-business-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting{" "}
                                  <span className="tmp-badge-card success">
                                    Popular
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-01-business-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting{" "}
                                  <span className="tmp-badge-card success">
                                    Popular
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/02-business-consulting-2.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-02-business-consulting-2.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/03-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Agency{" "}
                                  <span className="tmp-badge-card success">
                                    Hot
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-03-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Agency{" "}
                                  <span className="tmp-badge-card success">
                                    Hot
                                  </span>
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/04-services-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Services Agency
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-04-services-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Services Agency
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/05-corporate.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Corporate</NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-05-corporate.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Corporate</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/11-personal-portfolio.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">HR Website</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-11-personal-portfolio.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  HR Website
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/06-startup.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Startup Business</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-06-startup.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Startup Business
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/07-creative-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Creative Agency
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-07-creative-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Creative Agency
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/08-business.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Business</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-08-business.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Business</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/09-digital-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Digital Agency
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-09-digital-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Digital Agency
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/10-marketing-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Marketing Agency
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-10-marketing-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Marketing Agency
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/12-index-business-consulting-3.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting 3
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-12-index-business-consulting-3.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting 3
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/13-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Agency 2</NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-13-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Agency 2</NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/14-financial-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Financial Consulting{" "}
                                  <span className="tmp-badge-card success">
                                    Hot
                                  </span>
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-14-financial-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Financial Consulting{" "}
                                  <span className="tmp-badge-card success">
                                    Hot
                                  </span>
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/15-business-coach.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Coach
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-15-business-coach.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Coach
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/16-real-estate-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Real Estate Consulting
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-16-real-estate-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Real Estate Consulting
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/17-real-estate-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Real Estate Consulting 2
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-17-real-estate-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Real Estate Consulting 2
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/18-it-solution.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  It Company{" "}
                                  <span className="tmp-badge-card success">
                                    New
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-18-it-solution.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  It Company{" "}
                                  <span className="tmp-badge-card success">
                                    New
                                  </span>
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/19-personal-advisory.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Personal Advisory
                                  <span className="tmp-badge-card success">
                                    New
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-19-personal-advisory.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Personal Advisory
                                  <span className="tmp-badge-card success">
                                    New
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#" className="thumbnail-demos">
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/coming-soon.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  SEO Website{" "}
                                  <span className="tmp-badge-card success">
                                    Coming Soon
                                  </span>
                                </NavLink>
                              </li>
                            </ul>
                            {/* multipage area end */}
                          </div>

                          <div className="tab-pane onepage_content">
                            {/* multipage area start */}
                            <ul className="mega-menu-item">
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/01-business-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting{" "}
                                  <span className="tmp-badge-card success">
                                    Popular
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-01-business-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting{" "}
                                  <span className="tmp-badge-card success">
                                    Popular
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/02-business-consulting-2.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-02-business-consulting-2.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/03-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Agency{" "}
                                  <span className="tmp-badge-card success">
                                    Hot
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-03-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Agency{" "}
                                  <span className="tmp-badge-card success">
                                    Hot
                                  </span>
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/04-services-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Services Agency</NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-04-services-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Services Agency
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/05-corporate.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Corporate</NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-05-corporate.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Corporate</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/11-personal-portfolio.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">HR Website</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-11-personal-portfolio.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  HR Website
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/06-startup.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Startup Business</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-06-startup.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Startup Business
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/07-creative-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Creative Agency</NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-07-creative-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Creative Agency
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/08-business.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Business</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-08-business.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Business</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/09-digital-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Digital Agency</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-09-digital-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Digital Agency
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/10-marketing-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Marketing Agency</NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-10-marketing-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Marketing Agency
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/12-index-business-consulting-3.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting 3
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-12-index-business-consulting-3.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Consulting 3
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/13-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">Agency 2</NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-13-agency.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Agency 2
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/14-financial-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Financial Consulting{" "}
                                  <span className="tmp-badge-card success">
                                    Hot
                                  </span>
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-14-financial-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Financial Consulting{" "}
                                  <span className="tmp-badge-card success">
                                    Hot
                                  </span>
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/15-business-coach.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Coach
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-15-business-coach.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Business Coach
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/16-real-estate-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Real Estate Consulting
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-16-real-estate-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Real Estate Consulting
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/17-real-estate-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Real Estate Consulting 2
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-17-real-estate-consulting.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Real Estate Consulting 2
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/18-it-solution.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  It Company{" "}
                                  <span className="tmp-badge-card success">
                                    New
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-18-it-solution.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  It Company{" "}
                                  <span className="tmp-badge-card success">
                                    New
                                  </span>
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/19-personal-advisory.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Personal Advisory
                                  <span className="tmp-badge-card success">
                                    New
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#"
                                  className="thumbnail-demos"
                                >
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/white-19-personal-advisory.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  Personal Advisory
                                  <span className="tmp-badge-card success">
                                    New
                                  </span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#" className="thumbnail-demos">
                                  <img
                                    loading="lazy"
                                    src="./assets/main/images/demo/coming-soon.webp"
                                    alt=""
                                  />
                                </NavLink>
                                <NavLink to="#">
                                  SEO Website{" "}
                                  <span className="tmp-badge-card success">
                                    Coming Soon
                                  </span>
                                </NavLink>
                              </li>
                            </ul>
                            {/* multipage area end */}
                          </div>
                        </div>
                      </div>

                      <div className="load-demo-btn-wrap mt--15">
                        <div className="load-demo-btn text-center">
                          <span className="color-white b3">
                            Scroll to view more{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-arrow-down-up"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <span className="bg-content">corpox</span> */}
                </div>
              </div>
            </li>
            <li className="with-megamenu has-menu-child-item">
              <NavLink to="#">
                Pages
                {/* <i data-feather="more-vertical"></i> */}
              </NavLink>
              <div className="tmp-megamenu with-mega-item-2 full-width-mega">
                <div className="wrapper">
                  <div className="row row--0">
                    <div className="col-xl-2 col-lg-3 single-mega-item">
                      <ul className="mega-menu-item">
                        <li>
                          <NavLink to="#">About Company</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Service</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Service Two</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Service Three</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Service Four</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Service Five</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Service Details Two
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="#">
                            Service Details Three
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="#">
                            Service Details Four
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Service Details</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Team</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Team Two</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Our History{" "}
                            <span className="tmp-badge-card">New</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Clients <span className="tmp-badge-card">New</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-2 col-lg-3 single-mega-item">
                      <ul className="mega-menu-item">
                        <li>
                          <NavLink to="#">
                            Office Branch{" "}
                            <span className="tmp-badge-card">New</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Team Three</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Team Details</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Pricing Plan</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Pricing Plan Two</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Pricing Plan Three</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Portfolio Default</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Portfolio 3 Column
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Portfolio Full Width
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Portfolio Grid Layout
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Portfolio Box Layout
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Portfolio Card Hover
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Portfolio with Content
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Portfolio Details</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-2 col-lg-3 single-mega-item">
                      <ul className="mega-menu-item">
                        <li>
                          <NavLink to="#">
                            Portfolio Details Two
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Portfolio Details Video
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Portfolio Details Video
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Portfolio Details Slider
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Working Process</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Gallery</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Gallery col 3</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Career Oppertunity</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Career Details</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Apply Job</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Blog Grid</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Blog List View</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Blog Bento View</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Blog Details</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-2 col-lg-3 single-mega-item">
                      <ul className="mega-menu-item">
                        <li>
                          <NavLink to="#">
                            Blog Standard{" "}
                            <span className="tmp-badge-card">New</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Faq's <span className="tmp-badge-card">New</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Testimonial</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Testimonial Two</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Testimonial Three</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Testimonial Modern
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Contact Page</NavLink>
                        </li>

                        <li>
                          <NavLink to="#">
                            Shop <span className="tmp-badge-card">New</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Shop Details
                            <span className="tmp-badge-card">New</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Cart <span className="tmp-badge-card">New</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Checkout <span className="tmp-badge-card">New</span>
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="#">404 Page</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Privacy Policy</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Terms & Condition</NavLink>
                        </li>
                      </ul>
                    </div>

                    <div className="col-xl-4 d-lg-none d-xl-block">
                      <NavLink to="#"
                        className="feature-image-add-header"
                      >
                        <img
                          loading="lazy"
                          src="./assets/main/images/banner/header-contact-dark.webp"
                          alt="corporate-business"
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="with-megamenu has-menu-child-item position-relative">
              <NavLink to="#">Service</NavLink>
              <div className="tmp-megamenu width-small-mega">
                <div className="wrapper">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mega-top-banner">
                        <div className="content">
                          <h4 className="title">Service hub</h4>
                          <p className="description">
                            Complete Business Consultation for You, All Services
                            in One Place.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row row--15">
                    <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                      <h3 className="tmp-short-title">Service Layout</h3>
                      <ul className="mega-menu-item">
                        <li>
                          <NavLink to="#">Our Service</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Service Two</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Service Three</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Service Four</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Service Five</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Service Six</NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="#">
                            Service List Style{" "}
                            <span className="tmp-badge-card">New</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                      <h3 className="tmp-short-title">Service Details</h3>
                      <ul className="mega-menu-item">
                        <li>
                          <NavLink to="#">
                            Service Details{" "}
                            <span className="tmp-badge-card">Popular</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Service Details center
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            Service Details Two
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="#">
                            Service Details Three
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="#">
                            Service Details Four
                          </NavLink>
                        </li>

                        <li>
                          {" "}
                          <NavLink to="#">
                            Service List Style{" "}
                            <span className="tmp-badge-card">Coming</span>
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="#">
                            Service Details Six{" "}
                            <span className="tmp-badge-card">Coming</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <ul className="nav-quick-access">
                        <li>
                          <NavLink to="#">
                            <i data-feather="folder-minus"></i> Quick Start
                            Guide
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            <i data-feather="folder-minus"></i> For Open Source
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            <i data-feather="folder-minus"></i> API Status
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            <i data-feather="folder-minus"></i> Support
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="has-droupdown has-menu-child-item">
              <NavLink to="#">Project</NavLink>
              <ul className="submenu">
                <li>
                  <NavLink to="#">Portfolio Default</NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    Portfolio Three Column
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">Portfolio Full Width</NavLink>
                </li>
                <li>
                  <NavLink to="#">Portfolio Grid Layout</NavLink>
                </li>
                <li>
                  <NavLink to="#">Portfolio Box Layout</NavLink>
                </li>
                <li>
                  <NavLink to="#">Portfolio Card Hover</NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    Portfolio Bottom Content
                  </NavLink>
                </li>
                <li className="has-third-lev">
                  <NavLink to="#">Portfolio Details</NavLink>
                  <ul className="submenu">
                    <li>
                      <NavLink to="#">Portfolio Details</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        Portfolio Details Two
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        Portfolio Details Video
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        Portfolio Details Video 2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        Portfolio Details Slider
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-droupdown has-menu-child-item">
              <NavLink to="#">Blog</NavLink>
              <ul className="submenu">
                <li>
                  <NavLink to="#">Blog Grid</NavLink>
                </li>
                <li>
                  <NavLink to="#">Blog List View</NavLink>
                </li>
                <li>
                  <NavLink to="#">Blog Bento</NavLink>
                </li>
                <li className="has-third-lev">
                  <NavLink to="#">Blog Details</NavLink>
                  <ul className="submenu">
                    <li>
                      <NavLink to="#">Blog Details</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        Details Standard{" "}
                        <span className="tmp-badge-card">New</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        Blog Details Right Sidebar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        Blog Details Left Sidebar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Blog Details Video</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        Blog Details Video Two
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        Blog Details Video Popup
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="#">Contact</NavLink>
            </li>

            <li className="with-megamenu has-menu-child-item">
              <NavLink to="#">Elements</NavLink>
              <div className="tmp-megamenu with-mega-item-2 full-width-mega">
                <div className="wrapper">
                  <div className="row row--0">
                    <div className="col-lg-3">
                      <div className="feature-image-add-header">
                        <img
                          loading="lazy"
                          src="./assets/main/images/banner/04.webp"
                          alt="corporate-business"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 single-mega-item">
                      <ul className="mega-menu-item">
                        <li>
                          <NavLink to="#">
                            Style Guide{" "}
                            <span className="tmp-badge-card">Hot</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Button Page</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Service</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Service Details</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Accordion Style</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Progressbar</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Blog Grid</NavLink>
                        </li>

                        <li>
                          <NavLink to="#">Our Team</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Modern Tabs</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Social Share</NavLink>
                        </li>

                        <li>
                          <NavLink to="#">Brand Style</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Contact Page</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 single-mega-item">
                      <ul className="mega-menu-item">
                        <li>
                          <NavLink to="#">Counter Up</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Gallery</NavLink>
                        </li>

                        <li>
                          <NavLink to="#">404 Page</NavLink>
                        </li>

                        <li>
                          <NavLink to="#">Video Style</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Our Portfolio</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Testimonial</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Pricing Plan</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Privacy Policy</NavLink>
                        </li>

                        <li>
                          <NavLink to="#">Tool Tip</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Section Title</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Team Style</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Typography</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <ul className="mega-menu-item">
                        <li>
                          <NavLink to="#">Form Style</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Pagination</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Avatars</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Heading Split</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Light Box</NavLink>
                        </li>

                        <li>
                          <NavLink to="#">Call To Action</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Banner Slider</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">About Style</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Timeline</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Tab Style</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
