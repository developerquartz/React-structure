import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSettings } from "../../redux/common/thunk";
import { handleApiRequest } from "../../services/handleApiRequest";

export default function Footer() {
  const { settings } = useSelector((state) => state.common);

  const handleSettings = async () => {
    const response = await handleApiRequest(getSettings);
  };

  useEffect(() => {
    handleSettings();
  }, []);

  return (
    <>
      <section id="footerid" className="footer-main position-relative">
        <Container>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <div className="footer_logo_wrap text-start">
                <div className="footerlogo">
                  <img
                    src={settings.settings?.[0]?.footer_logo || "/images/logo.png"}
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lorem.
                </p>

                <ul className="social_links">
                  <li>
                    <a href={settings.settings?.[0]?.facebook || ""} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"
                          fill="#3F5AA7"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href={settings.settings?.[0]?.twitter || ""} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#3F5AA7"
                          d="M11.548 25.752c9.056 0 14.01-7.503 14.01-14.01c0-.213 0-.425-.015-.636A10.017 10.017 0 0 0 28 8.556a9.827 9.827 0 0 1-2.828.776a4.942 4.942 0 0 0 2.164-2.724a9.866 9.866 0 0 1-3.126 1.195a4.929 4.929 0 0 0-8.392 4.491A13.98 13.98 0 0 1 5.67 7.15a4.928 4.928 0 0 0 1.525 6.573a4.887 4.887 0 0 1-2.235-.617v.063a4.926 4.926 0 0 0 3.95 4.827a4.917 4.917 0 0 1-2.223.084a4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 4 23.54a13.94 13.94 0 0 0 7.547 2.209"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href={settings.settings?.[0]?.youtube || ""} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#3F5AA7"
                          d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href={settings.settings?.[0]?.linkedin || ""} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#3F5AA7"
                          d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7M11.1 24.4H7.6V13h3.5zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1m15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={8} md={8} sm={12}>
              <div className="footer_menu_wrap">
                <div className="menu_common">
                  <h5>Company</h5>
                  <ul>
                    <li>
                      <Link to="">Dolor Sit</Link>
                    </li>
                    <li>
                      <Link to="">Dolor Sit</Link>
                    </li>
                    <li>
                      <Link to="">Dolor Sit</Link>
                    </li>
                    <li>
                      <Link to="">Dolor Sit</Link>
                    </li>
                    <li>
                      <Link to="">Dolor Sit</Link>
                    </li>
                    <a href="" className="see_more">
                      See More
                    </a>
                  </ul>
                </div>

                <div className="menu_common">
                  <h5>Explore</h5>
                  <ul>
                    <li>
                      <Link to="">Dolor Sit</Link>
                    </li>
                    <li>
                      <Link to="">Dolor Sit</Link>
                    </li>
                    <li>
                      <Link to="">Dolor Sit</Link>
                    </li>
                    <li>
                      <Link to="">Dolor Sit</Link>
                    </li>
                    <li>
                      <Link to="">Dolor Sit</Link>
                    </li>
                    <li>
                      <Link to="">Dolor Sit</Link>
                    </li>
                    <a href="" className="see_more">
                      See More
                    </a>
                  </ul>
                </div>

                <div className="menu_common">
                  <h5>Terms and Policies</h5>
                  <ul>
                    <li>
                      <Link to="">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="">Terms of use</Link>
                    </li>
                    <li>
                      <Link to="">Reward system policy</Link>
                    </li>
                    <li>
                      <Link to="">Refund Policies</Link>
                    </li>
                  </ul>
                </div>

                <div className="menu_common">
                  <h5>Help</h5>
                  <ul>
                    <li>
                      <Link to="">Support</Link>
                    </li>
                    <li>
                      <Link to="">International Travel Documents</Link>
                    </li>
                    <li>
                      <Link to="">Acessibility</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="wrrapingsub_footer d-flex align-items-center justify-content-end">
          <div className="footer-copyright">
            <p>© All rights reserved 2023</p>
          </div>
        </div>
      </section>
    </>
  );
}
