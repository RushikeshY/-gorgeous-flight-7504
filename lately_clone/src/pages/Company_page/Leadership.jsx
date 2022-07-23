//page customer stories

import React, { useState } from "react";
import "../Resources_page/Resources.css";
import LeaderData from "./LeaderData";

import Cards1 from "./Cards1";

const Leadership = () => {
  const [ldata, setLdata] = useState(LeaderData);
  console.log(ldata);
  return (
    <>
      <div style={{ backgroundColor: "rgb(232,248,242)" }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "rgb(23,76,67)",
            height: "280px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <br />
          <br />
          <br />
          <h1 style={{ color: "white",fontSize: "30px",fontWeight:"bold" }}>
            <b>Team Lately</b>
          </h1>
          <h6>
            <b style={{ color: "white", fontSize: "30px",fontWeight:"bold",width:"80%" }}>
              Hi, humans. We may not have met yet but we like you already. 💚
            </b>
          </h6>
        </div>
        <div style={{width:"80%",margin:"auto"}} className="d-flex align-content-around flex-wrap">
          <Cards1 data={ldata} />
        </div>

        {/* //bottom bar */}
        <div
          style={{
            width: "100%",
            backgroundColor: "rgb(23,76,67)",
            height: "400px",
            marginBottom: "40px",
            paddingTop: "40px",
          }}
        >
          <div style={{ width: "70%", margin: "auto" }}>
            <h2 style={{ color: "rgb(0,198,107)" }}>Your team is our team.</h2>
            <h3 style={{ color: "white" }}>
              “The experience we’ve had working with the people at Lately is
              second-to-none. I hesitate to use the term “customer service,”
              because they feel more like business partners to us. We truly feel
              like they are invested in our organization’s success.”
            </h3>

            <div style={{ display: "flex", color: "white" }}>
              <div>
                <img
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/600102959735541a6e7ce0ef_1575256461580-p-500.jpeg"
                  style={{
                    width: "150px",
                    borderRadius: "50%",
                    marginRight: "70px",
                  }}
                ></img>
              </div>
              <br></br>
              <div>
                <br />
                <h5>Josh Switzer</h5>
                <p>
                  Marketing Specialist,
                  <br /> Amerifirst
                </p>
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
