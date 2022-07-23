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
            paddingLeft: "10rem",
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
            paddingLeft: "10rem",
            paddingRight: "23rem",
            // marginTop: "-.4rem",
            fontWeight: "700",
            lineHeight: "50px",
          }}
        >
          Take the Guesswork Out of What to Say on Social Media
        </h1>
        <h2
          style={{
            fontSize: "1.3rem",
            color: "white",
            paddingLeft: "10rem",
            paddingRight: "33rem",
            marginTop: "1rem",
            lineHeight: "31px",
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
          height: "26rem",
          paddingTop: "50px",
          backgroundColor: "#e6f6ef",
        }}
      >
        <div style={{}}>
          <img
            style={{
              height: "320px",
              width: "600px",
              paddingLeft: "10rem",
              paddingTop: "40px",
              marginTop: "-30px",
            }}
            src={img3}
            alt=""
          />
        </div>
        <div style={{ width: "50%", paddingLeft: "80px" }}>
          <h2
            style={{
              marginTop: "20px",
              fontSize: "32px",
              lineHeight: "34px",
              fontWeight: "700",
              color: "#133d36",
              marginTop: "80px",
            }}
          >
            {" "}
            The Lately Social A.I. <br /> Management Content Platform
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#5f5f5f",
              lineHeight: "24px",
              fontWeight: "400",
              paddingRight: "4.7rem",
              marginTop: ".6rem",
            }}
          >
            In addition to a full-service platform of scheduling, analytics and
            enterprise-wide syndication features, Lately's artificial
            intelligence generates dozens and even hundreds of custom,
            pre-tested social posts <i> automatically.</i>
          </p>
        </div>
      </div>

      {/* ============================= Content Writing Part  ======================================== */}

      <div style={{ display: "flex", height: "23rem", paddingTop: "30px" }}>
        <div style={{ width: "50%", paddingLeft: "10rem" }}>
          <h2
            style={{
              fontSize: "32px",
              lineHeight: "34px",
              fontWeight: "700",
              color: "#133d36",
              marginTop: "20px",
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
              paddingTop: "20px",
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
            style={{ height: "270px", width: "520px", paddingLeft: "30px" }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7a906e969ea8c00a347d8_home-bowtie-content-to-gold.png"
            alt=""
          />
        </div>
      </div>

      {/* ================================  Feeding the Lately A.I. Brain Part ========================= */}

      <div style={{ display: "flex", height: "26rem" }}>
        <div style={{}}>
          <img
            style={{ height: "440px", width: "690px", paddingLeft: "10rem" }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29a7d50a96f863c3cb607_SocialMediaMarketing-01.svg"
            alt=""
          />
        </div>
        <div style={{ width: "41.3%", paddingLeft: "47px" }}>
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
              paddingRight: "10px",
              marginTop: "1rem",
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
        <div style={{ width: "50%", paddingLeft: "10rem" }}>
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
              marginTop: "1rem",
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

      <div style={{ display: "flex", height: "26rem", paddingTop: "100px" }}>
        <div style={{}}>
          <img
            style={{ height: "440px", width: "690px", paddingLeft: "10rem" }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29a7d50a96f863c3cb607_SocialMediaMarketing-01.svg"
            alt=""
          />
        </div>
        <div style={{ width: "41.3%", paddingLeft: "47px" }}>
          <h2
            style={{
              marginTop: "60px",
              fontSize: "32px",
              lineHeight: "34px",
              fontWeight: "700",
              color: "#133d36",
              marginTop: "110px",
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
              paddingRight: "10px",
              marginTop: "1rem",
            }}
          >
            Accelerates the preparation, approvals and scheduling steps needed
            to publish droves of social media posts across your channels.
          </p>
          <button className={styles.btn1}>LEARN MORE</button>
        </div>
      </div>

      {/* ============================== Unlock the Gold part  ================================= */}

      <div style={{ display: "flex", height: "26rem", marginTop: "240px" }}>
        <div style={{}}></div>
        <div style={{ width: "50%", paddingLeft: "10rem" }}>
          <h2
            style={{
              marginTop: "60px",
              fontSize: "32px",
              lineHeight: "34px",
              fontWeight: "700",
              color: "#133d36",
              marginTop: "120px",
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
              marginTop: "1rem",
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
      <div style={{ display: "flex", height: "32rem", marginTop: "100px" }}>
        <div style={{}}>
          <img
            style={{ height: "440px", width: "690px", paddingLeft: "10rem" }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29c543d22be5e1c68aaf2_SocialMediaAnalytics-01.svg"
            alt=""
          />
        </div>
        <div style={{ width: "41.3%", paddingLeft: "47px" }}>
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
              paddingRight: "10px",
              marginTop: "1rem",
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

    {/* ==============================   And Their More Part ======================== */}

      <img
        style={{
          height: "60px",
          width: "300px",
          marginLeft: "38%",
          marginTop: "90px",
          marginBottom: "70px",
        }}
        src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29d706767c54673422575_AndTheresMore_Text-01.svg"
        alt=""
      />

      {/* ============================== Testimonial Part ========================== */}
      <div
        style={{
          backgroundColor: "#e6f6ef",
          paddingTop: "1px",
          marginTop: "30px",
          paddingBottom: "40px",
        }}
      >
              <h1 style={{ paddingTop: "50px", color: "#174c43",textAlign:"center",width:"75%",marginBottom:"40px", fontSize:"34px",fontWeight:"700",marginLeft:"10rem",lineHeight:"36px" }}>
          The Lately social media AI content writing <br /> solution is designed for
          companies of every size
        </h1>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            marginLeft: "10rem",
            marginRight: "10rem",
          }}
        >
          <div>
            <img
              style={{
                height: "170px",
                width: "170px",
                justifyContent: "center",
                marginLeft: "70px",
              }}
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe2a107354a9a53719df14e_Icon_Circles_AI.svg"
              alt=""
            />
            <div style={{ height: "80px", marginTop: "20px" }}>
              <h2 className={styles.head2}>
                Artificial Social Intelligence Engine
              </h2>
            </div>

            <p className={styles.para}>
              Our AI constantly learns from your past social media posts and
              builds a writing model based on what is most engaging for your
              audience.
            </p>
            <button
              style={{ marginLeft: "27%", marginTop: "40px" }}
              className={styles.btn1}
            >
              LEARN MORE
            </button>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <img
              style={{ height: "170px", width: "170px", marginLeft: "120px" }}
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe2a106b3d5038e3fa9b20f_Icon_Circles_Parent_Child.svg"
              alt=""
            />
            <div style={{ height: "80px", marginTop: "20px" }}>
              <h2 className={styles.head2}>Parent-Child Accounts</h2>
            </div>

            <p className={styles.para}>
              Make it easy to manage, publish and analyze all of your social
              media content across multiple products, brands, regions,
              franchises, and users all from one centralized place.
            </p>
            <button
              style={{ marginLeft: "33%", marginTop: "40px" }}
              className={styles.btn1}
            >
              LEARN MORE
            </button>
          </div>
          <div>
            <img
              style={{ height: "170px", width: "170px", marginLeft: "120px" }}
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe2a1073d22be4b6068b0ff_Icon_Circles_Pricing.svg"
              alt=""
            />
            <div style={{ height: "80px", marginTop: "20px" }}>
              <h2 className={styles.head2}>Just-right Pricing</h2>
            </div>

            <p className={styles.para}>
              Whether you’re just starting to scale your social media marketing
              program or you’re ready to extend it across executives and sales
              teams, we have an edition right-sized for your needs.
            </p>
            <button
              style={{ marginLeft: "34%", marginTop: "40px" }}
              className={styles.btn1}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* ================================  Customer Part =========================== */}

      <div style={{ height: "23rem", backgroundColor: "#174c43" }}>
        <h2
          style={{
            fontSize: "25px",
            color: "white",
            paddingLeft: "14rem",
            paddingRight: "18rem",
            paddingTop: "3rem",
            lineHeight: "31px",
            fontWeight: "300",
          }}
        >
          “Before Lately, social media was a weak point for me to do super
          consistently – because I didn’t have the time and didn’t want to sound
          dumb or boring. Now I have confidence because{" "}
          <b>Lately takes the pressure</b> off and makes me sound smart!”
        </h2>

        <div style={{ display: "flex", paddingBottom: "30px" }}>
          <img
            style={{
              height: "115px",
              width: "115px",
              borderRadius: "50%",
              marginLeft: "14rem",
              marginTop: "30px",
            }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6000f81ed69a057cba01da03_1516314003757.jpeg"
            alt=""
          />
          <div style={{ color: "white" }}>
            {" "}
            <h2
              style={{
                fontWeight: "500",
                marginTop: "30px",
                fontSize: "22px",
                marginLeft: "28px",
              }}
            >
              Alicia Jimenez{" "}
            </h2>{" "}
            <h2 style={{ marginLeft: "25px", fontSize: "18px", width: "90%" }}>
              Senior Vice President, Global Head of Technology & Platform
              Services Delivery, SAP
            </h2>
          </div>
          <img
            style={{
              height: "70px",
              width: "140px",
              marginLeft: "-10px",
              marginTop: "30px",
            }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6001c93ce5e6851d13888269_saplogowhite-p-500.png"
            alt=""
          />
        </div>
      </div>

      <div>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "500",
            textAlign: "center",
            lineHeight: "36px",
            marginTop: "70px",
            color: "#174c43",
          }}
        >
          Customers See Real Results From The Free Social Media <br /> Content
          Created And Managed With Lately
        </h1>
      </div>

      <div className={styles.divthree}>
        <div>
          <img
            className={styles.img1logo}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe8eaa301171b1f5cc69d87_Color_Icons_Engagement.svg"
            alt=""
          />
          <h1
            style={{ color: "#24aae1", fontSize: "65px", lineHeight: "65px" }}
          >
            +12,000%
          </h1>
          <h1
            style={{
              color: "#24aae1",
              fontSize: "29px",
              lineHeight: "35px",
              marginTop: "10px",
              marginLeft: "10px",
            }}
          >
            ENGAGEMENT
          </h1>
          <hr
            style={{
              height: "5px",
              width: "53%",
              backgroundColor: "#24aae1",
              marginLeft: "25%",
              marginTop: "5px",
            }}
          />
          <p style={{ marginTop: "10px", width: "50%", marginLeft: "25%" }}>
            <i>No – that’s not a typo</i>
          </p>
        </div>

        <div>
          <img
            className={styles.img1logo}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe8eaa39cc80bee2292190c_Color_Icons_Clicks.svg"
            alt=""
          />
          <h1
            style={{ color: "#00c66b", fontSize: "65px", lineHeight: "65px" }}
          >
            +245%
          </h1>
          <h1
            style={{
              color: "#00c66b",
              fontSize: "29px",
              lineHeight: "35px",
              marginTop: "10px",
            }}
          >
            MORE CLICKS
          </h1>
          <hr
            style={{
              height: "5px",
              width: "50%",
              backgroundColor: "#00c66b",
              marginLeft: "25%",
              marginTop: "5px",
            }}
          />
          <p style={{ marginTop: "10px", width: "50%", marginLeft: "25%" }}>
            <i>More clicks = mo’ better</i>
          </p>
        </div>

        <div>
          <img
            className={styles.img1logo}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe8eaa333bab928ce2f7868_Color_Icons_Leads.svg"
            alt=""
          />
          <h1
            style={{ color: "#1684b6", fontSize: "65px", lineHeight: "65px" }}
          >
            +200%
          </h1>
          <h1
            style={{
              color: "#1684b6",
              fontSize: "29px",
              lineHeight: "35px",
              marginTop: "10px",
            }}
          >
            MORE LEADS
          </h1>
          <hr
            style={{
              height: "5px",
              width: "50%",
              backgroundColor: "#1684b6",
              marginLeft: "25%",
              marginTop: "5px",
            }}
          />
          <p style={{ marginTop: "10px", width: "50%", marginLeft: "25%" }}>
            <i>
              And higher quality leads when actively used by marketing and sales
            </i>
          </p>
        </div>
      </div>

 {/* =======================================   Try for free Part =================== */}

      {/* <div className={styles.LastDiv1}>
        <h1
          style={{
            fontSize: "36px",
            paddingTop: "80px",
            color: "#133d36",
            lineHeight: "44px",
            marginTop: "70px",
            width: "60%",
            marginLeft: "20%",
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          Ready to start generating more effective social posts with AI?
        </h1>
        <button style={{ marginLeft: "44%" }} className={styles.btn1}>
          TRY IT FREE
        </button>
      </div> */}
    </>
  );
};

export default Product;
