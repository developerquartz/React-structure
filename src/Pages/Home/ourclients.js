import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { isArray } from "../../utils/formatersAndParsers";

const Ourclients = ({ pageData = {} }) => {
  const [clients, setClients] = useState([]);

  function create2DArray(myArr) {
    const arr = isArray(myArr);
    const result = [];
    let pattern = [1, 2, 3, 2, 1];
    let patternIndex = 0; // To keep track of where we are in the pattern
    let index = 0; // To keep track of where we are in the input array

    while (index < arr.length) {
      let currentSize = pattern[patternIndex]; // Get the current size from the pattern
      const currentSubArray = [];

      for (let i = 0; i < currentSize; i++) {
        if (index < arr.length) {
          currentSubArray.push(arr[index]);
          index++;
        } else {
          currentSubArray.push({});
        }
      }

      result.push(currentSubArray);
      patternIndex = (patternIndex + 1) % pattern.length; // Move to the next pattern item, wrap if necessary
    }

    return result;
  }

  useEffect(() => {
    if (pageData.clients) {
      const outputArray = create2DArray(pageData.clients);
      console.log("outputArray", outputArray);

      setClients([...outputArray]);
    }
  }, [pageData]);

  return (
    <section className="Middleeastmap_Sec  our_clinets common_pad">
      <Container>
        <div className="heading_main_all trust_wraping text-center">
          <div className="top_line_heading position-relative">
            <p className="trust_us">Trust us</p>
          </div>
          <h2>Our Clients</h2>
        </div>

        <div className="clinet_logo_box">
          {isArray(clients).map((myClient) => (
            <div
              className={`${
                myClient.length === 2 ? "logo_two" : "logo_three"
              } d-flex align-items-center justify-content-between`}
            >
              {myClient.map((client) => (
                <div className="logocommon">
                  <img src={client?.image} alt="" className="img-fluid" />
                </div>
              ))}
            </div>
          ))}

          {/* <div className="logocommon">
            <img src={pageData.clients?.[0]?.image} alt="" className="img-fluid" />
          </div>

          <div className="logo_two d-flex align-items-center justify-content-between">
            <div className="logocommon">
              <img src={pageData.clients?.[1]?.image} alt="" className="img-fluid" />
            </div>

            <div className="logocommon">
              <img src="/images/logothree.png" alt="" className="img-fluid" />
            </div>
          </div>

          <div className="logo_three d-flex align-items-center justify-content-between">
            <div className="logocommon">
              <img src="/images/logofour.png" alt="" className="img-fluid" />
            </div>

            <div className="logocommon">
              <img src="/images/logofive.png" alt="" className="img-fluid" />
            </div>
            <div className="logocommon">
              <img src="/images/logosix.png" alt="" className="img-fluid" />
            </div>
          </div>

          <div className="logo_two d-flex align-items-center justify-content-between">
            <div className="logocommon">
              <img src="/images/logoseven.png" alt="" className="img-fluid" />
            </div>

            <div className="logocommon">
              <img src="/images/logoeight.png" alt="" className="img-fluid" />
            </div>
          </div>

          <div className="logocommon">
            <img src="/images/logonine.png" alt="" className="img-fluid" />
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Ourclients;
