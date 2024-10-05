import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Getaquotemod from "../../Component/Modals/getaquotemod";
import Getquotesuccessmod from "../../Component/Modals/getquotesuccessmod";

const Getquote = ({ pageData = {} }) => {
  const [userAction, setUserAction] = useState(null);

  let ele = document.getElementsByClassName("App");
  useEffect(() => {
    if (userAction) {
      ele[0].classList.add("bodyfix");
    } else {
      ele[0].classList.remove("bodyfix");
    }
  }, [userAction]);

  return (
    <>
      <section className="Getquote_sec common_pad">
        <Container>
          <div
            className="our_location Getquote_inner_content position-relative"
            style={{ backgroundImage: `url(${pageData.service?.get_quote_image})` }}
          >
            <div className="Location_inner_content text-center">
              <h3>{pageData.service?.get_quote_title}</h3>
              <p dangerouslySetInnerHTML={{ __html: pageData.service?.get_quote_description }}></p>

              <Button
                type="button"
                className="view_allcta"
                onClick={() => setUserAction({ action: "requestQuote", service: pageData })}
              >
                {pageData.service?.get_quote_btn}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {userAction?.action === "requestQuote" && (
        <Getaquotemod userAction={userAction} setUserAction={setUserAction} />
      )}
      {userAction?.action === "successMsg" && (
        <Getquotesuccessmod userAction={userAction} setUserAction={setUserAction} />
      )}
    </>
  );
};

export default Getquote;
