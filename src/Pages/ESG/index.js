import React, { useEffect, useState } from "react";
import ESGComp from "./Esg";
import ESGfuture from "./ESGfuture";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getPageData } from "../../redux/pages/thunk";

export default function ESG() {
  const [pageData, setPageData] = useState({});

  const handlePageData = async () => {
    const response = await handleApiRequest(getPageData, 5);
    if (response.message === "success") {
      setPageData(response.data || {});
    }
  };

  useEffect(() => {
    handlePageData();
  }, []);

  return (
    <>
      <ESGComp pageData={pageData} />
      <ESGfuture pageData={pageData} />
    </>
  );
}
