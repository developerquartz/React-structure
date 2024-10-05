import React, { useEffect, useState } from "react";
import Aboutus from "./aboutus";
import Chooselat from "./chooselat";
import Ourservices from "./ourservices";
import Idealsection from "./idealsection";
import Middleeastmap from "./middleeastmap";
import Ourclients from "./ourclients";
import HomeComp from "./home";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getPageData } from "../../redux/pages/thunk";

export default function Home() {
  const [pageData, setPageData] = useState({});

  const handlePageData = async () => {
    const response = await handleApiRequest(getPageData, 1);
    if (response.message === "success") {
      setPageData(response.data || {});
    }
  };

  useEffect(() => {
    handlePageData();
  }, []);

  return (
    <>
      <HomeComp pageData={pageData} />
      <Aboutus pageData={pageData} />
      <Chooselat pageData={pageData} />
      <Ourservices pageData={pageData} />
      <Idealsection pageData={pageData} />
      <Middleeastmap pageData={pageData} />
      <Ourclients pageData={pageData} />
    </>
  );
}
