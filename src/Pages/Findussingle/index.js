import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FindussingleComp from "./FindUsSingle";
import Contactservices from "./Contactservices";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getLocationDetails } from "../../redux/common/thunk";

export default function FindUsSingle() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const handleDetails = async () => {
    const response = await handleApiRequest(getLocationDetails, id);
    if (response.message === "success") {
      setDetails(response.data || {});
    }
  };

  useEffect(() => {
    handleDetails();
  }, [id]);

  return (
    <>
      <FindussingleComp details={details} />
      <Contactservices details={details} />
    </>
  );
}
