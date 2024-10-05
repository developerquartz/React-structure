import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Successmod(props) {
  const navigate = useNavigate();

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal_uploadcv"
    >
      <Modal.Body>
        <div className="modal_uploadcv_inner position-relative">
          <a
            href="javascript:void(0)"
            className="modal_close"
            onClick={props.onhide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="16 11 90 90"
              fill="none"
            >
              <g filter="url(#filter0_d_32_16628)">
                <rect
                  x="35"
                  y="31"
                  width="49"
                  height="49"
                  rx="24.5"
                  fill="white"
                />
              </g>
              <path
                d="M54 62L66 50"
                stroke="#52A7DC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M66 62L54 50"
                stroke="#52A7DC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <filter
                  id="filter0_d_32_16628"
                  x="0"
                  y="0"
                  width="119"
                  height="119"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="17.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_32_16628"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_32_16628"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>

          <div className="modal_uploadcv_confimation text-center">
            <div className="gif_img">
              <img src="/images/checkout.png" alt="" className="img-fluid" />
            </div>
            <h3>Thank You</h3>

            <p>Your password has been reset successfully.</p>

            <p>Our team will carefully review your application. </p>

            <Button className="view_allcta w-100" onClick={props.onhide}>Continue</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
