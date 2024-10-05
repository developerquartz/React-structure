import React, { useEffect, useState } from "react";
import Newslider from "./Newslider";
import NewsComp from "./News";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getPageData } from "../../redux/pages/thunk";

export default function News() {
  const [pageData, setPageData] = useState({});

  const handlePageData = async () => {
    const response = await handleApiRequest(getPageData, 7);
    if (response.message === "success") {
      setPageData(response.data || {});
    }
  };

  useEffect(() => {
    handlePageData();
  }, []);

  return (
    <>
      <NewsComp pageData={pageData} />
      <Newslider pageData={pageData} />
    </>
  );
}
