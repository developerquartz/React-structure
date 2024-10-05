import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// importing all the themes
import Pagenotfound from "../Pages/404page";
import Signin from "../Pages/Auth/Signin";
import Signup from "../Pages/Auth/Signup";
import About from "../Pages/About";
import MainTheme from "../themes/main-theme";
import Home from "../Pages/Home";
import Findus from "../Pages/Findus";
import Carrerapply from "../Pages/Carrerapply";
import Career from "../Pages/Careers";
import Contact from "../Pages/Contact";
import ESG from "../Pages/ESG";
import FindUsSingle from "../Pages/Findussingle";
import Services from "../Pages/Services";
import ServiceDetails from "../Pages/ServiceDetails";
import NewsSingle from "../Pages/Newssingle";
import News from "../Pages/News";
import Profile from "../Pages/Profile";
import * as Path from "./routesPath";
import ResetPassowrd from "../Pages/Auth/reset-password";
import { useSelector } from "react-redux";
import ScrollToTop from "../Component/scrollToTop";

function MyRouts() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { loggedinUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loggedinUser.data?.token && pathname === Path.sign_in) {
      navigate("/");
    }
  }, [loggedinUser, pathname]);

  return (
    <>
      <ScrollToTop />
      <Routes onUpdate={() => window.scrollTo(0, 0)}>
        {!loggedinUser.data?.token && (
          <>
            <Route exact path={Path.sign_in} element={<Signin />} />
            <Route exact path={Path.sign_up} element={<Signup />} />
            <Route exact path={Path.reset_password} element={<ResetPassowrd />} />
          </>
        )}
        <Route path="/" element={<MainTheme className="" />}>
          <Route exact path="/" element={<Home />} />
        </Route>

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          path="/"
          element={<MainTheme className="nobanner" />}
        >
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            exact={true}
            path={Path.about_us}
            element={<About />}
          />
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            exact={true}
            path={Path.find_us}
            element={<Findus />}
          />
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            exact={true}
            path={Path.careers}
            element={<Career />}
          />
          <Route path={`${Path.careers_apply}/:job/:careerId`} element={<Carrerapply />} />
          <Route path={`${Path.careers_apply}`} element={<Carrerapply />} />
          <Route path={`${Path.find_us}/:id`} element={<FindUsSingle />} />
          <Route path={Path.services} element={<Services />} />
          <Route path={`${Path.services}/:serviceId`} element={<ServiceDetails />} />
        </Route>

        <Route path="/" element={<MainTheme className="nobanner bg-white" />}>
          <Route path={Path.contact} element={<Contact />} />
          <Route path={Path.ESG} element={<ESG />} />
          <Route path={`${Path.news}/:newsId`} element={<NewsSingle />} />
          <Route path={Path.news} element={<News />} />
          {loggedinUser.data?.token && <Route path={Path.profile} element={<Profile />} />}
        </Route>

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}
export default MyRouts;
