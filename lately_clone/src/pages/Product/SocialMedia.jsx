import React from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

import shap from "./images/shap.png";

const SocialMedia = () => {
  return (
    <div>
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
          SOCIAL MEDIA MARKETING A.I. SOFTWARE
        </h2>
        <h1
          style={{
            fontSize: "3rem",
            color: "white",
            paddingLeft: "10rem",
            paddingRight: "30rem",
            // marginTop: "-.4rem",
            fontWeight: "700",
            lineHeight: "50px",
          }}
        >
          Scale your free social marketing program
        </h1>
        <h2
          style={{
            fontSize: "1.3rem",
            color: "white",
            paddingLeft: "10rem",
            paddingRight: "44rem",
            marginTop: "1rem",
            lineHeight: "31px",
            fontWeight: "600",
          }}
        >
          An all-in-one solution for social media marketing professionals and
          teams that starts with writing your social media posts for you
        </h2>
      <Link to="/demo"> <button style={{ width: "230px" }} className={styles.btn}>
          REQUEST A FREE DEMO
        </button></Link> 
      </div>

      <div style={{ backgroundColor: "#f4f4f4", height: "55rem" }}>
        <div style={{ width: "52%", margin: "auto", paddingTop: "40px" }}>
          <h2
            style={{
              fontSize: "32px",
              lineHeight: "34px",
              color: "#174c43",
              fontWeight: "500",
              textAlign: "center",
              marginBottom: "20px",
              marginTop: "50px",
            }}
          >
            Everything you need to run your social media marketing program SUPER
            efficiently
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "17px",
              lineHeight: "26px",
              color: "#5f5f5f",
              fontWeight: "500",
            }}
          >
            Once our A.I. Content Writing software writes your social media
            posts for you, Lately gives you everything you need to review, edit,
            approve, schedule and publish droves of social media posts across
            all your channels. If you are responsible for social media marketing
            for multiple regions, brands and products then our parent-child
            accounts make it easy manage everything in one place.
          </p>
        </div>

        <div style={{ display: "flex", height: "26rem", marginTop: "100px" }}>
          <div style={{}}>
            <img
              style={{ height: "440px", width: "690px", paddingLeft: "10rem" }}
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29a7d50a96f863c3cb607_SocialMediaMarketing-01.svg"
              alt=""
            />
          </div>
          <div style={{ width: "42.3%", paddingLeft: "47px" }}>
            <h2
              style={{
                marginTop: "26px",
                fontSize: "24px",
                lineHeight: "34px",
                fontWeight: "500",
                color: "#133d36",
                //   marginTop: "100px",
              }}
            >
              {" "}
              Social media post preparation
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#5f5f5f",
                lineHeight: "24px",
                fontWeight: "400",
                paddingRight: "10px",
                marginTop: ".31rem",
              }}
            >
              Lately automatically pulls together everything you need for each
              social media post including the copy, image, tracking links and
              corresponding audio or video clips – saving you a solid 8 – 12
              minutes per post.
            </p>

            <h2
              style={{
                marginTop: "26px",
                fontSize: "24px",
                lineHeight: "34px",
                fontWeight: "500",
                color: "#133d36",
                //   marginTop: "100px",
              }}
            >
              {" "}
              Scheduling and publishing
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#5f5f5f",
                lineHeight: "24px",
                fontWeight: "400",
                paddingRight: "10px",
                marginTop: ".31rem",
              }}
            >
              Once your social media posts are reviewed and approved Lately
              makes it easy to schedule and publish across all your social media{" "}
              <br />
              channels{" "}
            </p>

            <h2
              style={{
                marginTop: "26px",
                fontSize: "24px",
                lineHeight: "34px",
                fontWeight: "500",
                color: "#133d36",
                //   marginTop: "100px",
              }}
            >
              {" "}
              Advanced controls
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#5f5f5f",
                lineHeight: "24px",
                fontWeight: "400",
                paddingRight: "10px",
                marginTop: ".31rem",
              }}
            >
              Specify who must review each social media post prior to it being
              scheduled for publishing.
            </p>
          </div>
        </div>
      </div>

      <div style={{ width: "90%", margin: "auto" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "700",
            lineHeight: "36px",
            color: "#174c43",
            marginTop: "70px",
            marginBottom: "40px",
          }}
        >
          Key Content Writer Software Features
        </h1>
        <div className={styles.nineDiv}>
          <div>
            <h2>Automatic Post Prep</h2>
            <p>
              Automatically creates the copy, image, tracking links and
              corresponding audio or video clip for each post
            </p>
          </div>
          <div>
            <h2>Scheduling</h2>
            <p>
              Built in social media post scheduling makes it easy to do
              everything in one place
            </p>
          </div>
          <div>
            <h2>Approval Workflows</h2>
            <p>
              Review and approve every social media post before you schedule it
              to be published
            </p>
          </div>
          <div>
            <h2>Tracking Links</h2>
            <p>
              Allows you to add unique tracking links for each post you track
              engagement
            </p>
          </div>
          <div>
            <h2>Publishing</h2>
            <p>
              Lately will publish your social media posts across all your
              channels
            </p>
          </div>
          <div>
            <h2>Parent-Child Accounts</h2>
            <p>Syndicate and publish content across multiple accounts</p>
          </div>
          <div>
            <h2>Calendar</h2>
            <p>
              View all your past and scheduled social media posts in a single
              view
            </p>
          </div>
          <div>
            <h2>Campaigns</h2>
            <p>
              Rollup and track social media posts by campaign for richer
              reporting and analysis
            </p>
          </div>
          <div>
            <h2>Integrations</h2>
            <p>
              Take your social media posts created by Lately and publish them
              through your existing Hubspot account
            </p>
          </div>
        </div>
      </div>

      <div style={{ height: "22rem", backgroundColor: "#174c43" }}>
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
          <b>
            “Lately could EASILY replace other more pricey social media tools
            that do nothing.
          </b>{" "}
          I was skeptical and tried to break it but ended up saying WOW – A.I.
          is here and it really works.”
        </h2>

        <div style={{ display: "flex" }}>
          <img
            style={{
              height: "115px",
              width: "115px",
              borderRadius: "50%",
              marginLeft: "14rem",
              marginTop: "30px",
            }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6000b28a3291644f2276c2bf_1597236647385.jpeg"
            alt=""
          />
          <div style={{ color: "white" }}>
            {" "}
            <h2
              style={{
                fontWeight: "500",
                marginTop: "30px",
                fontSize: "22px",
                marginLeft: "24px",
              }}
            >
              Keith Bisogno{" "}
            </h2>{" "}
            <h2 style={{ marginLeft: "25px", fontSize: "18px", width: "70%" }}>
              Former Head of Global Corporate Communications, Content and
              Multimedia, Thermo Fisher Scientific
            </h2>
          </div>
          <img
            style={{
              height: "30px",
              width: "140px",
              marginLeft: "-200px",
              marginTop: "60px",
            }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffcb775e6184021618368d7_Thermo-Fisher-Scientific_White.png"
            alt=""
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#e6f6ef",
          //   paddingTop: "1px",
          paddingTop: "10px",
          paddingBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "500",
            textAlign: "center",
            lineHeight: "36px",
            marginTop: "70px",
            color: "#174c43",
            paddingBottom: "30px",
          }}
        >
          Customers See Real Results From The Free Social Media <br /> Content
          Created And Managed With Lately
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

      <div className={styles.main}>
        <div className={styles.right_text}>
          <img
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fea2eed7aaf965bf7857079_Quote_DkGreen.svg"
            alt="/"
          />
          <p
            style={{ marginTop: "10px", width: "55%" }}
            className={styles.text_para}
          >
            <i>
              <b style={{ fontWeight: "500" }}>
                I LOVE how Lately makes my life easier by helping me amplify my
                content.
              </b>{" "}
              I can’t imagine writing a blog post or recording a podcast and not
              using Lately's A.I. to help craft my social media messages.”
            </i>
          </p>
          <h3
            style={{
              marginTop: "20px",
              fontSize: "19px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#133d36",
            }}
          >
            Michael Oberther
          </h3>
          <p className={styles.dire_para}>
            Director of Business Development, Supporting Strategies
          </p>
        </div>
        <div className={styles.left_image}>
          <img
            style={{ marginLeft: "-200px", width: "800px", height: "100px" }}
            src={shap}
            alt=""
          />
        </div>
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
    </div>
  );
};

export default SocialMedia;
