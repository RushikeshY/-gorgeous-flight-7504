//page blog

import React, { useState } from "react";
import "./Resources.css";
import BlogData from "./BlogData";

import Cards from "./Cards";

const Blog = () => {
  const [bdata, setBdata] = useState(BlogData);
  console.log(bdata);

  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(23,76,67)",
          height: "200px",
          textAlign: "center",
          margin: "auto",
          padding: "30px",
        }}
      >
        {/* <h6 style={{color:'rgb(17,175,107)',}} >LATELY OFFICE HOURS</h6> */}
        <h1 style={{ color: "white",fontSize:"30px",marginBottom:"10px" }}>Lately Blog</h1>

        <h4 style={{ color: "white", marginLeft: "8% ",fontSize:"24px" }}>
          Product Updates, News, Marketing Tips & the Occasional
          Spreadsheet-Hating Tangent
        </h4>
      </div>
      <div className="d-flex align-content-around flex-wrap">
        <Cards
          data={bdata}
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
        />
      </div>
    </>
  );
};

export default Blog;
