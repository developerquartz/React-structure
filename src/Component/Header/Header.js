import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";
import Redirectnotemod from "../Modals/redirectnotemod";
import { ReactComponent as SerachIcon } from "../../assets/icons/search.svg";
import { handleApiRequest } from "../../services/handleApiRequest";
import { logoutUser } from "../../redux/auth/thunk";
import { profile, services, sign_in } from "../../Routers/routesPath";
import DeletePopup from "../Modals/deletePop";
import { getServiceList } from "../../redux/common/thunk";
import { isArray } from "../../utils/formatersAndParsers";

export default function Header(props) {
  const navigate = useNavigate();
  const { loggedinUser } = useSelector((state) => state.auth);
  const { settings, allServices } = useSelector((state) => state.common);
  const [nav, setNav] = useState(false);
  const [redirectmod, setRedirectmod] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [userAction, setUserAction] = useState(null);

  const handleServiceList = async () => {
    await handleApiRequest(getServiceList);
  };

  const handleLogout = async () => {
    const response = await handleApiRequest(logoutUser);
    if (response) {
      navigate(sign_in);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    handleServiceList();
  }, []);

  return (
    <>
      {redirectmod && <Redirectnotemod show={redirectmod} onhide={() => setRedirectmod(false)} />}
      <section className={scroll ? "header-main  fixed-header" : `header-main ${props.nobanner}`}>
        <Container>
          <div className="header">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                  <img
                    src={settings.settings?.[0]?.main_logo || "/images/logo.png"}
                    alt="logo"
                    className="img-fluid"
                  />
                </Link>
                <button
                  className={`navbar-toggler ${nav ? "" : "menu_click"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => setNav(!nav)}
                >
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </button>
                <div
                  className={nav ? "collapse navbar-collapse show" : "collapse navbar-collapse"}
                  id="navbarSupportedContent"
                >
                  <div className="mobileMenu_overlay"></div>
                  <ul className="navbar-nav scroll-menu ms-auto mb-2 mb-lg-0">
                    <Button onClick={() => setNav(false)} className="close-menu">
                      <svg
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--gg"
                        width="28"
                        height="28"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#000"
                          d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586L6.225 4.81Z"
                        />
                      </svg>
                    </Button>
                    <li className="nav-item">
                      <NavLink
                        to="/about-us"
                        className="nav-link gradient-text"
                        aria-current="page"
                        onClick={() => setNav(false)}
                      >
                        About
                      </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                      <NavLink
                        to="/services"
                        className="nav-link gradient-text"
                        onClick={() => setNav(false)}
                      >
                        Services
                      </NavLink>

                      <div className="dropdown-content">
                        <ul>
                          {isArray(allServices.data?.services).map((service) => (
                            <li>
                              <NavLink to={`${services}/${service.id}`} className="dropdown-item">
                                {service.service_name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link
                        to=""
                        className="nav-link gradient-text"
                        onClick={(e) => {
                          e.preventDefault();
                          setNav(false);
                          setRedirectmod(true);
                        }}
                      >
                        Ahlein
                      </Link>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/careers"
                        className="nav-link gradient-text"
                        onClick={() => setNav(false)}
                      >
                        Careers
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/find-us"
                        className="nav-link gradient-text"
                        onClick={() => setNav(false)}
                      >
                        Find Us
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/news"
                        className="nav-link gradient-text"
                        onClick={() => setNav(false)}
                      >
                        News
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/ESG"
                        className="nav-link gradient-text"
                        onClick={() => setNav(false)}
                      >
                        ESG
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        className="nav-link gradient-text"
                        onClick={() => setNav(false)}
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="add-wallet-wrap">
              <div className="wallet-section">
                {/* <Link to="" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                      fill="white"
                    />
                    <path
                      d="M8.99999 21.75H7.99999C7.58999 21.75 7.24999 21.41 7.24999 21C7.24999 20.59 7.56999 20.26 7.97999 20.25C6.40999 14.89 6.40999 9.11 7.97999 3.75C7.56999 3.74 7.24999 3.41 7.24999 3C7.24999 2.59 7.58999 2.25 7.99999 2.25H8.99999C9.23999 2.25 9.46999 2.37 9.60999 2.56C9.74999 2.76 9.78999 3.01 9.70999 3.24C7.82999 8.89 7.82999 15.11 9.70999 20.77C9.78999 21 9.74999 21.25 9.60999 21.45C9.46999 21.63 9.23999 21.75 8.99999 21.75Z"
                      fill="white"
                    />
                    <path
                      d="M15 21.7499C14.92 21.7499 14.84 21.7399 14.76 21.7099C14.37 21.5799 14.15 21.1499 14.29 20.7599C16.17 15.1099 16.17 8.88994 14.29 3.22994C14.16 2.83994 14.37 2.40994 14.76 2.27994C15.16 2.14994 15.58 2.35994 15.71 2.74994C17.7 8.70994 17.7 15.2699 15.71 21.2199C15.61 21.5499 15.31 21.7499 15 21.7499Z"
                      fill="white"
                    />
                    <path
                      d="M12 17.2C9.21 17.2 6.43 16.81 3.75 16.02C3.74 16.42 3.41 16.75 3 16.75C2.59 16.75 2.25 16.41 2.25 16V15C2.25 14.76 2.37 14.53 2.56 14.39C2.76 14.25 3.01 14.21 3.24 14.29C8.89 16.17 15.12 16.17 20.77 14.29C21 14.21 21.25 14.25 21.45 14.39C21.65 14.53 21.76 14.76 21.76 15V16C21.76 16.41 21.42 16.75 21.01 16.75C20.6 16.75 20.27 16.43 20.26 16.02C17.57 16.81 14.79 17.2 12 17.2Z"
                      fill="white"
                    />
                    <path
                      d="M21 9.75011C20.92 9.75011 20.84 9.74011 20.76 9.71011C15.11 7.83011 8.88 7.83011 3.23 9.71011C2.83 9.84011 2.41 9.63011 2.28 9.24011C2.16 8.84011 2.37 8.42011 2.76 8.29011C8.72 6.30011 15.28 6.30011 21.23 8.29011C21.62 8.42011 21.84 8.85011 21.7 9.24011C21.61 9.55011 21.31 9.75011 21 9.75011Z"
                      fill="white"
                    />
                  </svg>
                </Link>

                <Link to="" className="nav-link">
                  <SerachIcon />
                </Link> */}

                {loggedinUser.data?.token ? (
                  <>
                    <HiOutlineUserCircle
                      className="logoutIcon pointer"
                      onClick={() => navigate(profile)}
                    />
                    <IoIosLogOut
                      className="logoutIcon pointer"
                      onClick={() => setUserAction("logout")}
                    />
                  </>
                ) : (
                  <Link to="/sign-in" className="nav-link login_btn">
                    login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
      {userAction && (
        <DeletePopup
          action={userAction}
          setAction={setUserAction}
          onSubmit={handleLogout}
          submitLabel="Logout"
        />
      )}
    </>
  );
}
