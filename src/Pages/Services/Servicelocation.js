import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Servicelocation = ({ pageData = {} }) => {
  const our_locations = pageData?.page?.page_data?.our_locations || {};
  const navigate = useNavigate();

  return (
    <section className="Servicelocation_sec common_pad">
      <Container>
        <div
          className="our_location position-relative"
          style={{ backgroundImage: `url(${our_locations?.our_locations_image})` }}
        >
          <div className="Location_inner_content text-center">
            <h3>{our_locations?.our_locations_title}</h3>
            <p>{our_locations?.our_locations_description}</p>
            <Button type="button" className="view_allcta" onClick={() => navigate("/find-us")}>
              Explore
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Servicelocation;
