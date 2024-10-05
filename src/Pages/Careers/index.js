import React, { useEffect, useState } from "react";
import Careersbanner from "./Careersbanner";
import Jobvacancy from "./Jobvacancy";
import Careerjoinus from "./Careerjoinus";
import Careerfaq from "./Careerfaq";
import Joincommunity from "./Joincommunity";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getPageData } from "../../redux/pages/thunk";

export default function Career() {
  const [pageData, setPageData] = useState({});

  const handlePageData = async () => {
    const response = await handleApiRequest(getPageData, 4);
    if (response.message === "success") {
      setPageData(response.data || {});
    }
  };

  useEffect(() => {
    handlePageData();
  }, []);

  return (
    <>
      <Careersbanner pageData={pageData} />
      <Jobvacancy pageData={pageData} />
      <Careerjoinus pageData={pageData} />
      <Careerfaq pageData={pageData} />
      <Joincommunity pageData={pageData} />
    </>
  );
}
