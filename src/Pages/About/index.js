import React, { useEffect, useState } from "react";
import Aboutus from "./Aboutus";
import Ourmission from "./Ourmission";
import Ourvission from "./Ourvission";
import Meetourexperts from "./Meetourexperts";
import Testimonialslider from "./Testimonialslider";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getPageData } from "../../redux/pages/thunk";

export default function About() {
  const [pageData, setPageData] = useState({});

  const handlePageData = async () => {
    const response = await handleApiRequest(getPageData, 2);
    if (response.message === "success") {
      setPageData(response.data || {});
    }
  };

  useEffect(() => {
    handlePageData();
  }, []);

  return (
    <>
      <Aboutus pageData={pageData} />
      <Ourmission pageData={pageData} />
      <Ourvission pageData={pageData} />
      <Meetourexperts pageData={pageData} />
      <Testimonialslider pageData={pageData} />
    </>
  );
}
