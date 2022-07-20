import React from "react";
import styles from "./Product.module.css";
import img3 from "./images/img3.png";
const Product = () => {
  return (
    <>
      {/* =========================== Product Overview Part ====================================== */}

      <div style={{ height: "26rem", backgroundColor: "#174c43" }}>
        <h2
          style={{
            textTransform: "uppercase",
            fontSize: "1.2rem",
            color: "#00c66b",
            fontWeight: "600",
            paddingLeft: "14rem",
            paddingTop: "2.8rem",
            paddingBottom: "7px",
          }}
        >
          PRODUCT OVERVIEW
        </h2>
        <h1
          style={{
            fontSize: "3rem",
            color: "white",
            paddingLeft: "14rem",
            paddingRight: "30rem",
            marginTop: "-.4rem",
            fontWeight: "700",
            lineHeight: "44px",
          }}
        >
          Take the Guesswork Out of What to Say on Social Media
        </h1>
        <h2
          style={{
            fontSize: "1.3rem",
            color: "white",
            paddingLeft: "14rem",
            paddingRight: "43rem",
            marginTop: "-.8rem",
            // font
            lineHeight: "30px",
            fontWeight: "600",
          }}
        >
          Lately’s all-in-one solution uses A.I. to generate the most effective
          content for scaling your social media marketing and social selling
          programs.
        </h2>
        <button className={styles.btn}>TRY FOR FREE</button>
      </div>

      {/* ============================ A.I. Management Content Platform Part ========================== */}

      <div
        style={{
          display: "flex",
          height: "24rem",
          paddingTop: "50px",
          backgroundColor: "#e6f6ef",
        }}
      >
        <div style={{}}>
          <img
            style={{
              height: "290px",
              width: "470px",
              paddingLeft: "13rem",
              paddingTop: "40px",
            }}
            src={img3}
            alt=""
          />
        </div>
        <div style={{ width: "37%", paddingLeft: "80px" }}>
          <h2
            style={{
              marginTop: "20px",
              fontSize: "32px",
              lineHeight: "34px",
              fontWeight: "700",
              color: "#133d36",
              marginTop: "90px",
            }}
          >
            {" "}
            The Lately Social A.I. Management Content Platform
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#5f5f5f",
              lineHeight: "24px",
              fontWeight: "400",
              paddingRight: "20px",
              marginTop: "-.6rem",
            }}
          >
            In addition to a full-service platform of scheduling, analytics and
            enterprise-wide syndication features, Lately's artificial
            intelligence generates dozens and even hundreds of custom,
            pre-tested social posts automatically.
          </p>
        </div>
      </div>

      {/* ============================= Content Writing Part  ======================================== */}

      <div style={{ display: "flex", height: "26rem", paddingTop: "30px" }}>
        <div style={{ width: "37%", paddingLeft: "14rem" }}>
          <h2
            style={{
              fontSize: "32px",
              lineHeight: "34px",
              fontWeight: "700",
              color: "#133d36",
              //   marginTop:"100px"
              //   marginTop: "30px",
            }}
          >
            {" "}
            A.I. Content Writing - How it Works
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#5f5f5f",
              lineHeight: "24px",
              fontWeight: "400",
              paddingRight: "",
              marginTop: "-.6rem",
            }}
          >
            First, Lately studies what words and phrases best resonate with your
            target audience by analyzing the social channels you connect to our
            platform. We then build a writing model based on what we learn and
            apply this writing model to each piece of longform content that you
            feed the A.I. brain.
          </p>
          <button className={styles.btn1}>LEARN MORE</button>
        </div>
        <div style={{}}>
          <img
            style={{ height: "300px", width: "500px", paddingLeft: "30px" }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7a906e969ea8c00a347d8_home-bowtie-content-to-gold.png"
            alt=""
          />
        </div>
      </div>

      {/* ================================  Feeding the Lately A.I. Brain Part ========================= */}

      <div style={{ display: "flex", height: "26rem" }}>
        <div style={{}}>
          <img
            style={{ height: "420px", width: "600px", paddingLeft: "13rem" }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29a7d50a96f863c3cb607_SocialMediaMarketing-01.svg"
            alt=""
          />
        </div>
        <div style={{ width: "37%", paddingLeft: "30px" }}>
          <h2
            style={{
              marginTop: "60px",
              fontSize: "32px",
              lineHeight: "34px",
              fontWeight: "700",
              color: "#133d36",
              marginTop: "100px",
            }}
          >
            {" "}
            Feeding the Lately A.I. Brain
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#5f5f5f",
              lineHeight: "24px",
              fontWeight: "400",
              paddingRight: "20px",
              marginTop: "-.6rem",
            }}
          >
            Upload longform content files like blogs, webpages, news articles,
            white papers, newsletters or any kind of text imaginable. You can
            also upload audio and video like podcasts, workshops, conference
            panels, keynotes and more. We'll then automatically transcribe your
            audio and video files for the brain to ingest.
          </p>
          <button className={styles.btn1}>LEARN MORE</button>
        </div>
      </div>

      {/* ============================== Unlock the Gold part  ================================= */}

      <div style={{ display: "flex", height: "26rem", marginTop: "8rem" }}>
        <div style={{}}></div>
        <div style={{ width: "37%", paddingLeft: "14rem" }}>
          <h2
            style={{
              marginTop: "60px",
              fontSize: "32px",
              lineHeight: "34px",
              fontWeight: "700",
              color: "#133d36",
              marginTop: "100px",
            }}
          >
            {" "}
            Unlock the Gold
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#5f5f5f",
              lineHeight: "24px",
              fontWeight: "400",
              paddingRight: "20px",
              marginTop: "-.6rem",
            }}
          >
            In minutes, Lately transforms your longform content into dozens or
            even hundreds of quotes that our A.I. knows will get you the highest
            engagement. Users have the opportunity to edit and enhance all
            quotes, which, in the case of video files, include the matching
            video clips of the speakers voicing the text of each quote.
          </p>
          <button className={styles.btn1}>LEARN MORE</button>
        </div>
        <img
          style={{ height: "420px", width: "600px" }}
          src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29c07bcae60a0f0063646_SocialSelling-01.svg"
          alt=""
        />
      </div>

      {/* ============================   Social Media Marketing Part ============================= */}

      <div style={{ display: "flex", height: "26rem", marginTop: "8rem" }}>
        <div style={{}}>
          <img
            style={{ height: "420px", width: "600px", paddingLeft: "13rem" }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29a7d50a96f863c3cb607_SocialMediaMarketing-01.svg"
            alt=""
          />
        </div>
        <div style={{ width: "37%", paddingLeft: "30px" }}>
          <h2
            style={{
              marginTop: "60px",
              fontSize: "32px",
              lineHeight: "34px",
              fontWeight: "700",
              color: "#133d36",
              marginTop: "100px",
            }}
          >
            {" "}
            Social Media Marketing
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#5f5f5f",
              lineHeight: "24px",
              fontWeight: "400",
              paddingRight: "20px",
              marginTop: "-.6rem",
            }}
          >
            Accelerates the preparation, approvals and scheduling steps needed
            to publish droves of social media posts across your channels.
          </p>
          <button className={styles.btn1}>LEARN MORE</button>
        </div>
      </div>

      {/* ===============================   Social Selling Part ====================================*/}

      <div style={{ display: "flex", height: "26rem", marginTop: "8rem" }}>
        <div style={{}}></div>
        <div style={{ width: "37%", paddingLeft: "14rem" }}>
          <h2
            style={{
              marginTop: "60px",
              fontSize: "32px",
              lineHeight: "34px",
              fontWeight: "700",
              color: "#133d36",
              marginTop: "100px",
            }}
          >
            {" "}
            Social Selling
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#5f5f5f",
              lineHeight: "24px",
              fontWeight: "400",
              paddingRight: "20px",
              marginTop: "-.6rem",
            }}
          >
            Ensures messaging is on point as you scale your social media content
            across sales teams, executives and employees.
          </p>
          <button className={styles.btn1}>LEARN MORE</button>
        </div>
        <img
          style={{ height: "420px", width: "600px" }}
          src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29c07bcae60a0f0063646_SocialSelling-01.svg"
          alt=""
        />
      </div>

      {/* =============================  Social Media Analytics Part ==================================*/}

      <div style={{ display: "flex", height: "26rem", marginTop: "8rem" }}>
        <div style={{}}>
          <img
            style={{ height: "420px", width: "600px", paddingLeft: "13rem" }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29c543d22be5e1c68aaf2_SocialMediaAnalytics-01.svg"
            alt=""
          />
        </div>
        <div style={{ width: "37%", paddingLeft: "30px" }}>
          <h2
            style={{
              marginTop: "60px",
              fontSize: "32px",
              lineHeight: "34px",
              fontWeight: "700",
              color: "#133d36",
              marginTop: "100px",
            }}
          >
            {" "}
            Social Media Analytics
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#5f5f5f",
              lineHeight: "24px",
              fontWeight: "400",
              paddingRight: "20px",
              marginTop: "-.6rem",
            }}
          >
            Gives you performance analytics for each piece of social media
            content and helps you shape your A.I. writing model to constantly
            improve your shortform content.
          </p>
          <button className={styles.btn1}>LEARN MORE</button>
        </div>
      </div>

  
    </>
  );
};

export default Product;
