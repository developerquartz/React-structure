import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// images

export default function Headerlogin(props) {
  const [nav, setNav] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const logout = () => {
    localStorage.clear();
    window.reload();
  };

  return (
    <>
      <section className={scroll ? "header-main  dash-sixed" : "header-main"}>
        <Container fluid>
          <div className="header">
            <div className="logo_wrap">
              <h1>{props.heading}</h1>
            </div>

            {/* <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img src="images/logo.png" alt="logo" className="img-fluid" />
              </Link>
              <button
                className="navbar-toggler"
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
                className={
                  nav
                    ? "collapse navbar-collapse show"
                    : "collapse navbar-collapse"
                }
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav scroll-menu m-auto mb-2 mb-lg-0">
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
                        fill="#ffffff"
                        d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586L6.225 4.81Z"
                      />
                    </svg>
                  </Button>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link gradient-text"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/" className="nav-link gradient-text">
                    Leader Board
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link gradient-text">
                    Predictions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link gradient-text">
                    Coin Flip
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}

            <div className="search_form">
              <Form>
                <FormGroup className="position-relative">
                  <Input
                    type="search"
                    name="email"
                    id="exampleEmail"
                    placeholder=""
                  />
                </FormGroup>
              </Form>
            </div>

            <div className="add-wallet-wrap">
              <div className="toggle_here d-flex">
                <label className="switch me-3">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <h5>ZK/Privacy</h5>
              </div>
              <div className="notification position-relative">
                <a href="javascript:void(0)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.02 20.53C9.68999 20.53 7.35999 20.16 5.14999 19.42C4.30999 19.13 3.66999 18.54 3.38999 17.77C3.09999 17 3.19999 16.15 3.65999 15.39L4.80999 13.48C5.04999 13.08 5.26999 12.28 5.26999 11.81V8.92004C5.26999 5.20004 8.29999 2.17004 12.02 2.17004C15.74 2.17004 18.77 5.20004 18.77 8.92004V11.81C18.77 12.27 18.99 13.08 19.23 13.49L20.37 15.39C20.8 16.11 20.88 16.98 20.59 17.77C20.3 18.56 19.67 19.16 18.88 19.42C16.68 20.16 14.35 20.53 12.02 20.53ZM12.02 3.67004C9.12999 3.67004 6.76999 6.02004 6.76999 8.92004V11.81C6.76999 12.54 6.46999 13.62 6.09999 14.25L4.94999 16.16C4.72999 16.53 4.66999 16.92 4.79999 17.25C4.91999 17.59 5.21999 17.85 5.62999 17.99C9.80999 19.39 14.24 19.39 18.42 17.99C18.78 17.87 19.06 17.6 19.19 17.24C19.32 16.88 19.29 16.49 19.09 16.16L17.94 14.25C17.56 13.6 17.27 12.53 17.27 11.8V8.92004C17.27 6.02004 14.92 3.67004 12.02 3.67004Z"
                      fill="#9E9E9E"
                    />
                    <path
                      d="M13.88 3.94005C13.81 3.94005 13.74 3.93005 13.67 3.91005C13.38 3.83005 13.1 3.77005 12.83 3.73005C11.98 3.62005 11.16 3.68005 10.39 3.91005C10.11 4.00005 9.80999 3.91005 9.61999 3.70005C9.42999 3.49005 9.36999 3.19005 9.47999 2.92005C9.88999 1.87005 10.89 1.18005 12.03 1.18005C13.17 1.18005 14.17 1.86005 14.58 2.92005C14.68 3.19005 14.63 3.49005 14.44 3.70005C14.29 3.86005 14.08 3.94005 13.88 3.94005Z"
                      fill="#9E9E9E"
                    />
                    <path
                      d="M12.02 22.8101C11.03 22.8101 10.07 22.4101 9.37002 21.7101C8.67002 21.0101 8.27002 20.0501 8.27002 19.0601H9.77002C9.77002 19.6501 10.01 20.2301 10.43 20.6501C10.85 21.0701 11.43 21.3101 12.02 21.3101C13.26 21.3101 14.27 20.3001 14.27 19.0601H15.77C15.77 21.1301 14.09 22.8101 12.02 22.8101Z"
                      fill="#9E9E9E"
                    />
                  </svg>
                </a>
                {/* <div className="dot"></div> */}
              </div>
              <div className="user_login">
                <div className="Explore_menu">
                  <UncontrolledDropdown>
                    <DropdownToggle>
                      <div className="user_wrap">
                        <img
                          src="images/user.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="walet_name_addrees">
                        <p>0xa0105b88a7b....</p>
                      </div>
                    </DropdownToggle>

                    <DropdownMenu>
                      <DropdownItem>
                        <Link to="/profile">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                          >
                            <path
                              d="M15.0125 12.2158C15.018 12.0761 14.9948 11.9368 14.9442 11.8064C14.8937 11.6761 14.817 11.5575 14.7188 11.458C14.3953 11.1455 13.8344 11.0111 12.8438 11.0298C11.824 11.0742 10.8107 11.2144 9.81721 11.4486C9.19271 11.5847 8.577 11.7585 7.97346 11.9689C7.50471 12.1252 7.18127 12.2361 6.80471 12.2361H6.79064C6.66998 12.2426 6.5496 12.2189 6.44044 12.167C6.33129 12.1152 6.23683 12.0369 6.16564 11.9392C6.09765 11.8313 6.05712 11.7084 6.04759 11.5812C6.03806 11.454 6.05981 11.3264 6.11096 11.2095C6.36053 10.5285 6.45605 9.80063 6.39064 9.07828C6.28752 8.07046 5.78596 7.49078 5.01252 7.48453C4.89168 7.47711 4.77063 7.49527 4.65728 7.53781C4.54393 7.58034 4.44083 7.64631 4.35471 7.7314C4.07189 8.02515 4.06721 8.47203 4.08752 8.94234C4.10471 9.37046 3.63908 9.8064 3.36096 10.0673C2.73596 10.658 2.25471 11.5205 2.15002 12.2642C2.13439 12.3752 2.12346 12.4767 2.11252 12.5767C2.11034 12.7422 2.07584 12.9057 2.01096 13.058C1.69914 13.3391 1.37096 13.6015 1.02814 13.8439C0.994973 13.8684 0.966988 13.8993 0.945802 13.9347C0.924616 13.9701 0.910649 14.0093 0.904707 14.0502C0.904707 14.0892 0.778144 15.0095 1.70939 16.1923C2.37658 17.0408 3.32971 17.4236 3.94377 17.4236H3.96564C4.05765 17.4321 4.15037 17.4188 4.2362 17.3845C4.32203 17.3503 4.39852 17.2962 4.45939 17.2267C4.61564 17.0095 5.22033 16.3533 5.45939 16.2252C6.06408 15.8986 6.67346 15.6002 7.22189 15.358C8.51877 15.333 11.8297 15.3111 12.5797 15.497C12.7054 15.5285 12.8345 15.5443 12.9641 15.5439C13.5281 15.5439 14.1156 15.2611 14.2969 14.6861C14.359 14.5219 14.3858 14.3464 14.3756 14.1712C14.3653 13.9959 14.3183 13.8248 14.2375 13.6689C14.178 13.5633 14.102 13.4678 14.0125 13.3861C14.8172 13.1173 15.0094 12.6205 15.0125 12.2158ZM13.7016 14.4986C13.5922 14.8439 13.1016 14.983 12.7313 14.8908C12.1156 14.7345 10.211 14.7127 8.79377 14.7173L8.94064 14.6627C10.2763 14.1552 11.6623 13.7917 13.075 13.5783C13.3875 13.6689 13.5969 13.8033 13.6891 13.9705C13.7271 14.053 13.7478 14.1424 13.75 14.2332C13.7521 14.3241 13.7357 14.4144 13.7016 14.4986ZM13.3641 12.9064C10.8531 13.2908 9.52033 13.7877 8.72346 14.0845L8.48752 14.1564C7.34618 14.5846 6.23528 15.0899 5.16252 15.6689C4.79846 15.8642 4.19377 16.5548 4.00158 16.7923C3.74689 16.8283 2.84689 16.6236 2.20002 15.8002C1.62033 15.0642 1.53127 14.4877 1.52189 14.2517C1.81564 14.0314 2.37189 13.6048 2.50783 13.4298C2.66408 13.2189 2.70002 12.9611 2.73752 12.6361C2.74689 12.5486 2.75783 12.4533 2.77189 12.3486C2.85783 11.7455 3.26721 11.0111 3.79221 10.5205C4.12502 10.208 4.74533 9.62671 4.71408 8.91265C4.70471 8.6939 4.68752 8.28765 4.80783 8.16265C4.82189 8.14859 4.86252 8.1064 5.00627 8.1064C5.44221 8.1064 5.69846 8.4564 5.76721 9.13921C5.82668 9.76626 5.7461 10.3987 5.53127 10.9908C5.4438 11.2019 5.40946 11.4312 5.43125 11.6587C5.45304 11.8862 5.53031 12.1048 5.65627 12.2955C5.78426 12.476 5.95466 12.6223 6.15247 12.7214C6.35028 12.8206 6.56943 12.8696 6.79064 12.8642C7.27814 12.8642 7.65471 12.7408 8.17658 12.5658C8.76249 12.3604 9.3605 12.1913 9.96721 12.0595C10.9195 11.8339 11.891 11.6989 12.8688 11.6564C13.6281 11.6423 14.1031 11.7252 14.2844 11.9048C14.3236 11.9461 14.3531 11.9955 14.3709 12.0495C14.3888 12.1036 14.3944 12.1609 14.3875 12.2173C14.386 12.3423 14.3828 12.7502 13.3641 12.9064Z"
                              fill="#fff"
                            />
                            <path
                              d="M3.89355 5.87505C3.91699 5.87505 6.30293 6.2313 7.2873 7.21567C8.27168 8.20005 8.6248 10.5829 8.6248 10.6063C8.6248 10.6892 8.65773 10.7687 8.71633 10.8273C8.77494 10.8859 8.85442 10.9188 8.9373 10.9188C9.02018 10.9188 9.09967 10.8859 9.15828 10.8273C9.21688 10.7687 9.2498 10.6892 9.2498 10.6063C9.2498 10.5829 9.60605 8.19692 10.5904 7.21255C11.5748 6.22817 13.9576 5.87505 13.9811 5.87505C14.0639 5.87505 14.1434 5.84212 14.202 5.78352C14.2606 5.72491 14.2936 5.64543 14.2936 5.56255C14.2936 5.47967 14.2606 5.40018 14.202 5.34158C14.1434 5.28297 14.0639 5.25005 13.9811 5.25005C13.9576 5.25005 11.5717 4.8938 10.5873 3.90942C9.60293 2.92505 9.2498 0.542236 9.2498 0.518799C9.2498 0.435919 9.21688 0.356433 9.15828 0.297828C9.09967 0.239223 9.02018 0.206299 8.9373 0.206299C8.85442 0.206299 8.77494 0.239223 8.71633 0.297828C8.65773 0.356433 8.6248 0.435919 8.6248 0.518799C8.6248 0.542236 8.26855 2.92817 7.28418 3.91255C6.2998 4.89692 3.91699 5.25005 3.89355 5.25005C3.81067 5.25005 3.73119 5.28297 3.67258 5.34158C3.61398 5.40018 3.58105 5.47967 3.58105 5.56255C3.58105 5.64543 3.61398 5.72491 3.67258 5.78352C3.73119 5.84212 3.81067 5.87505 3.89355 5.87505ZM7.72949 4.35786C8.32012 3.76724 8.70449 2.79536 8.9373 1.99692C9.17012 2.80005 9.5623 3.76724 10.1451 4.35786C10.7279 4.94849 11.7076 5.33286 12.5061 5.56567C11.7014 5.79849 10.7357 6.19067 10.1451 6.77349C9.55449 7.3563 9.17012 8.32817 8.9373 9.1313C8.70449 8.32817 8.3123 7.36099 7.72949 6.77036C7.14668 6.17974 6.16699 5.79536 5.36855 5.56255C6.17324 5.32974 7.13887 4.94536 7.72949 4.35474V4.35786Z"
                              fill="#fff"
                            />
                            <path
                              d="M11.75 3.06255C11.8328 3.0622 11.912 3.02904 11.9704 2.97036L12.5954 2.34536C12.6466 2.28558 12.6733 2.20868 12.6703 2.13003C12.6672 2.05138 12.6346 1.97677 12.579 1.92112C12.5233 1.86546 12.4487 1.83286 12.3701 1.82982C12.2914 1.82679 12.2145 1.85354 12.1547 1.90473L11.5297 2.52973C11.4863 2.57343 11.4567 2.629 11.4448 2.68944C11.4328 2.74989 11.439 2.81252 11.4626 2.86946C11.4861 2.9264 11.526 2.97511 11.5771 3.00946C11.6283 3.04382 11.6884 3.06229 11.75 3.06255ZM11.5297 8.15473C11.4715 8.21328 11.4389 8.29249 11.4389 8.37505C11.4389 8.4576 11.4715 8.53681 11.5297 8.59536L12.1547 9.22036C12.2145 9.27155 12.2914 9.29831 12.3701 9.29527C12.4487 9.29223 12.5233 9.25963 12.579 9.20397C12.6346 9.14832 12.6672 9.07371 12.6703 8.99506C12.6733 8.91641 12.6466 8.83951 12.5954 8.77973L11.9704 8.15473C11.9118 8.09653 11.8326 8.06386 11.75 8.06386C11.6675 8.06386 11.5883 8.09653 11.5297 8.15473ZM5.90473 2.97036C5.96451 3.02155 6.04141 3.04831 6.12006 3.04527C6.19871 3.04223 6.27332 3.00963 6.32897 2.95397C6.38463 2.89832 6.41723 2.82371 6.42027 2.74506C6.42331 2.66641 6.39655 2.58951 6.34536 2.52973L5.72036 1.90473C5.66058 1.85354 5.58368 1.82679 5.50503 1.82982C5.42638 1.83286 5.35177 1.86546 5.29612 1.92112C5.24046 1.97677 5.20786 2.05138 5.20482 2.13003C5.20179 2.20868 5.22854 2.28558 5.27973 2.34536L5.90473 2.97036Z"
                              fill="#fff"
                            />
                          </svg>
                          Profile
                        </Link>
                      </DropdownItem>

                      <DropdownItem divider />
                      <DropdownItem>
                        <Link to="/" onClick={logout}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                          >
                            <path
                              d="M19.0187 4.68302C18.6633 4.68302 18.3513 4.87306 18.1792 5.15685L13.9819 4.22415C13.9298 3.73181 13.5121 3.34692 13.0062 3.34692C12.4652 3.34692 12.025 3.78708 12.025 4.32813C12.025 4.41646 12.037 4.502 12.0589 4.58345L7.59359 7.56079C7.42208 7.42742 7.21098 7.35508 6.99371 7.35524C6.45367 7.35524 6.01422 7.7938 6.01258 8.33345L1.76383 9.74962C1.58453 9.51274 1.30043 9.35939 0.981211 9.35939C0.440156 9.35942 0 9.79958 0 10.3406C0 10.8817 0.440156 11.3218 0.981211 11.3218C1.52125 11.3218 1.9607 10.8833 1.96234 10.3436L6.21109 8.92751C6.39039 9.16435 6.67441 9.3177 6.99371 9.3177C7.53477 9.3177 7.97492 8.87755 7.97492 8.33649C7.97492 8.24845 7.96305 8.16309 7.94117 8.08181L12.4068 5.10423C12.5783 5.23734 12.7891 5.30951 13.0062 5.30935C13.3617 5.30935 13.6736 5.11927 13.8457 4.83548L18.043 5.76817C18.0951 6.26052 18.5127 6.64544 19.0187 6.64544C19.5597 6.64544 19.9999 6.20528 19.9999 5.66423C19.9999 5.12317 19.5598 4.68302 19.0187 4.68302ZM0.981211 10.6955C0.785508 10.6955 0.626289 10.5363 0.626289 10.3406C0.626289 10.1449 0.785508 9.98567 0.981211 9.98567C1.17691 9.98567 1.33613 10.1449 1.33613 10.3406C1.33613 10.5363 1.17691 10.6955 0.981211 10.6955ZM6.99371 8.69134C6.79801 8.69134 6.63879 8.53212 6.63879 8.33642C6.63879 8.14071 6.79801 7.98149 6.99371 7.98149C7.18941 7.98149 7.34863 8.14071 7.34863 8.33642C7.34863 8.53212 7.18941 8.69134 6.99371 8.69134ZM13.0062 4.68302C12.8105 4.68302 12.6513 4.5238 12.6513 4.3281C12.6513 4.13239 12.8105 3.97317 13.0062 3.97317C13.2019 3.97317 13.3611 4.13239 13.3611 4.3281C13.3611 4.5238 13.2019 4.68302 13.0062 4.68302ZM19.0187 6.01915C18.823 6.01915 18.6638 5.85993 18.6638 5.66423C18.6638 5.46853 18.823 5.30931 19.0187 5.30931C19.2144 5.30931 19.3736 5.46853 19.3736 5.66423C19.3736 5.85993 19.2144 6.01915 19.0187 6.01915Z"
                              fill="#fff"
                            />
                            <path
                              d="M14.2917 5.56833C14.1456 5.47564 13.9521 5.51923 13.8596 5.66532L10.2328 11.3918C10.0458 11.3459 9.84944 11.3562 9.66826 11.4214L8.2526 9.63318C8.20104 9.56807 8.12573 9.5261 8.04323 9.51651C7.96074 9.50691 7.87781 9.53047 7.81268 9.582C7.78043 9.60753 7.75353 9.63916 7.7335 9.67508C7.71348 9.711 7.70073 9.75052 7.69598 9.79137C7.69123 9.83222 7.69458 9.87361 7.70583 9.91317C7.71708 9.95273 7.73601 9.98969 7.76154 10.0219L9.17752 11.8105C9.07374 11.9694 9.01855 12.155 9.01869 12.3447C9.01869 12.8858 9.45885 13.3259 9.9999 13.3259C10.541 13.3259 10.9811 12.8858 10.9811 12.3447C10.9813 12.1198 10.9038 11.9016 10.7617 11.7272L14.3887 6.00032C14.4107 5.96559 14.4256 5.92686 14.4327 5.88636C14.4397 5.84585 14.4387 5.80435 14.4297 5.76424C14.4207 5.72412 14.4038 5.68618 14.3802 5.65256C14.3565 5.61895 14.3264 5.59033 14.2917 5.56833ZM9.9999 12.6997C9.8042 12.6997 9.64498 12.5405 9.64498 12.3448C9.64498 12.1491 9.8042 11.9899 9.9999 11.9899C10.1956 11.9899 10.3548 12.1491 10.3548 12.3448C10.3548 12.5405 10.1956 12.6997 9.9999 12.6997ZM19.9774 0.871183C19.9621 0.832989 19.9395 0.798178 19.9108 0.768739C19.882 0.7393 19.8478 0.71581 19.81 0.699612C19.7722 0.683414 19.7316 0.674826 19.6904 0.674338C19.6493 0.673851 19.6085 0.681473 19.5703 0.696769L17.0927 1.6881C16.9126 1.477 16.6449 1.34275 16.3463 1.34275C15.8053 1.34275 15.3651 1.7829 15.3651 2.32396C15.365 2.54895 15.4425 2.7671 15.5846 2.94153L15.196 3.55513C15.1528 3.62527 15.139 3.70961 15.1575 3.78987C15.1761 3.87014 15.2255 3.93986 15.2951 3.98394C15.3647 4.02801 15.4488 4.04289 15.5293 4.02535C15.6098 4.0078 15.6802 3.95925 15.7251 3.89021L16.1135 3.27696C16.1881 3.29525 16.2661 3.30513 16.3464 3.30513C16.8874 3.30513 17.3276 2.86497 17.3276 2.32392C17.3276 2.3056 17.327 2.28739 17.326 2.26927L19.803 1.27821C19.8412 1.26295 19.876 1.24031 19.9054 1.21159C19.9348 1.18287 19.9583 1.14863 19.9745 1.11083C19.9907 1.07304 19.9993 1.03242 19.9998 0.991295C20.0003 0.950175 19.9927 0.90936 19.9774 0.871183ZM16.3464 2.67884C16.1507 2.67884 15.9915 2.51962 15.9915 2.32392C15.9915 2.12825 16.1507 1.969 16.3464 1.969C16.5421 1.969 16.7013 2.12821 16.7013 2.32392C16.7013 2.51966 16.5421 2.67884 16.3464 2.67884ZM6.01233 6.80337L4.47572 4.86243C4.57952 4.70359 4.63471 4.51792 4.63455 4.32818C4.63455 3.78712 4.1944 3.34696 3.65334 3.34696C3.11229 3.34696 2.67217 3.78708 2.67217 4.32814C2.67217 4.44626 2.69318 4.55954 2.73158 4.66454L0.11756 6.7554C0.0854427 6.78108 0.0586995 6.81284 0.0388575 6.84886C0.0190155 6.88488 0.00646347 6.92445 0.0019183 6.96532C-0.00262686 7.00619 0.000923879 7.04756 0.0123677 7.08706C0.0238116 7.12655 0.0429243 7.16341 0.0686144 7.19552C0.0979284 7.23227 0.13516 7.26193 0.177534 7.28229C0.219908 7.30265 0.26633 7.31318 0.313341 7.3131C0.384391 7.31316 0.453329 7.28895 0.508732 7.24446L3.12326 5.15318C3.28121 5.25528 3.46531 5.30951 3.65338 5.30935C3.76971 5.30935 3.88135 5.28888 3.98498 5.25157L5.52131 7.19216C5.55061 7.22925 5.58795 7.25922 5.63051 7.27979C5.67307 7.30037 5.71974 7.31102 5.76701 7.31095C5.83752 7.31102 5.90596 7.28716 5.96115 7.24329C5.9934 7.21777 6.0203 7.18614 6.04033 7.15022C6.06035 7.1143 6.0731 7.07478 6.07785 7.03393C6.0826 6.99308 6.07926 6.95169 6.06802 6.91213C6.05678 6.87257 6.03785 6.83562 6.01233 6.80337ZM3.65338 4.68302C3.45768 4.68302 3.29846 4.5238 3.29846 4.3281C3.29846 4.13239 3.45768 3.97318 3.65338 3.97318C3.84908 3.97318 4.0083 4.13239 4.0083 4.3281C4.0083 4.5238 3.84908 4.68302 3.65338 4.68302Z"
                              fill="#fff"
                            />
                          </svg>
                          Logout
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>

                {/* <div className="profile_menu">
                  <Link to="/profile">
                    <div className="login-avtar">
                      <div className="user_wrap">
                        <img
                          src="images/user.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <p>Vikas Ali</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                      >
                        <path
                          d="M3.29977 4.3L0.699768 1.7C0.383101 1.38333 0.312435 1.021 0.487768 0.613C0.663101 0.205 0.975435 0.000666667 1.42477 0H6.57477C7.02477 0 7.33743 0.204333 7.51277 0.613C7.6881 1.02167 7.6171 1.384 7.29977 1.7L4.69977 4.3C4.59977 4.4 4.49143 4.475 4.37477 4.525C4.2581 4.575 4.1331 4.6 3.99977 4.6C3.86643 4.6 3.74143 4.575 3.62477 4.525C3.5081 4.475 3.39977 4.4 3.29977 4.3Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
