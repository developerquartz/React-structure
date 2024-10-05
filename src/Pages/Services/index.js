import React, { useEffect, useState } from "react";
import Servicesbanner from "./Servicesbanner";
import Servicescolumn from "./Servicescolumn";
import Servicelocation from "./Servicelocation";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getPageData } from "../../redux/pages/thunk";

export default function Services() {
  const [pageData, setPageData] = useState({});

  const handlePageData = async () => {
    const response = await handleApiRequest(getPageData, 3);
    if (response.message === "success") {
      setPageData(response.data || {});
    }
  };

  useEffect(() => {
    handlePageData();
  }, []);

  return (
    <>
      <Servicesbanner pageData={pageData} />
      <Servicescolumn pageData={pageData} />
      <Servicelocation pageData={pageData} />
    </>
  );
}
