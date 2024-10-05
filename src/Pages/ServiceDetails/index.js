import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Innerbannner from "./innerbannner";
import Aircraftservices from "./aircraftservices";
import Newscomponent from "./newscomponent";
import Getquote from "./getquote";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getServiceDetails } from "../../redux/common/thunk";

export default function ServiceDetails() {
  const { serviceId } = useParams();

  const [pageData, setPageData] = useState({});

  const handlePageData = async () => {
    const response = await handleApiRequest(getServiceDetails, serviceId);
    if (response.message === "success") {
      setPageData(response.data || {});
    }
  };

  useEffect(() => {
    handlePageData();
  }, [serviceId]);

  return (
    <>
      <Innerbannner pageData={pageData} />
      <Aircraftservices pageData={pageData} />
      <Newscomponent pageData={pageData} />
      <Getquote pageData={pageData} />
    </>
  );
}
