import React from "react";
import styles from "./Product.module.css";
import shap from "./images/shap.png";
import { Link } from "react-router-dom";
const ContentWriter = () => {
  return (
    <>
      {/* ===========================  TRY FOR FREE PARTt ======================================================*/}

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
          SOCIAL MEDIA WRITING SOFTWARE WITH ARTIFICIAL INTELLIGENCE
        </h2>
        <h1
          style={{
            fontSize: "3rem",
            color: "white",
            paddingLeft: "10rem",
            paddingRight: "29rem",
            // marginTop: "-.4rem",
            fontWeight: "700",
            lineHeight: "50px",
          }}
        >
          Use AI to Turn Your Content into Social Media Gold
        </h1>
        <h2
          style={{
            fontSize: "1.4rem",
            color: "white",
            paddingLeft: "10rem",
            paddingRight: "37rem",
            marginTop: "1rem",
            lineHeight: "31px",
            fontWeight: "600",
          }}
        >
          The AI will transform all your longform content into dozens or even
          hundreds of social media posts that will get you the highest
          engagement
        </h2>
        <Link to="/demo"> <button style={{ width: "230px" }} className={styles.btn}>
          REQUEST A FREE DEMO
        </button></Link> 
      </div>

      {/* ============================   Generate All the Social Media Content ============================ */}

      <div style={{ backgroundColor: "#f4f4f4", height: "986px" }}>
        <div style={{ width: "48%", margin: "auto", paddingTop: "40px" }}>
          <h2
            style={{
              fontSize: "32px",
              lineHeight: "34px",
              color: "#174c43",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "20px",
              marginTop: "50px",
            }}
          >
            Generate All the Social Media Content You Need to Scale Your
            Channels
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
            The Lately AI content writer makes your already high quality videos,
            podcasts and longform blogs posts evergreen! It automatically
            atomizes your longform content and gives you dozens of pre-tested
            social media posts ready for you to review and share on your social
            channels.
          </p>
        </div>
        <div style={{ height: "520px", width: "76%", margin: "auto" }}>
          <img
            style={{ height: "445px", width: "90%", marginLeft: "5%" }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7a906e969ea8c00a347d8_home-bowtie-content-to-gold.png"
            alt=""
          />
        </div>

        <div
          style={{
            marginLeft: "10rem",
            marginRight: "14rem",
            display: "flex",
            width: "80%",
            marginTop: "-40px",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <h2 className={styles.contenthead}>A.I. Content Generators</h2>
            <p className={styles.contentP}>
              Automatically turn any longform content, audio files or video into
              hundreds of social media posts with a click of a button.
            </p>
          </div>
          <div style={{ marginRight: "20px" }}>
            <h2 className={styles.contenthead}>A.I. Writing Model</h2>
            <p className={styles.contentP}>
              The A.I. brain learns from whatever you put into it and builds a
              writing model that’s on brand and individual to YOU.
            </p>
          </div>
          <div style={{ marginRight: "20px" }}>
            <h2 className={styles.contenthead}>
              {" "}
              Pre-tested Social Media Posts
            </h2>
            <p className={styles.contentP}>
              The A.I. studies what words and phrases resonate with your target
              audience, ensuring quality content and improve SEO.
            </p>
          </div>
        </div>

        <h2
          style={{
            color: "#00c66b",
            fontSize: "16px",
            marginTop: "20px",
            marginLeft: "10rem",
            fontWeight: "600",
          }}
        >
          See content generators in action ={" "}
        </h2>
      </div>

      {/* =========================  Key Content Writer =========================================== */}

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
            <h2>Web Copy Generator</h2>
            <p>
              Automatically turns all of your written longform content into MANY
              dozens of social media posts.
            </p>
          </div>
          <div>
            <h2>Messaging Guides</h2>
            <p>
              Tell the AI your specific brand messaging guidelines and they’re
              incorporated into the writing model.
            </p>
          </div>
          <div>
            <h2>Transcripts</h2>
            <p>
              The software transcribes your audio and video files then gives you
              the fully converted transcript.
            </p>
          </div>
          <div>
            <h2>Podcast Clip Generator</h2>
            <p>
              Turn your old podcasts into refreshed and on-brand social media
              posts that link BACK to the original podcast.
            </p>
          </div>
          <div>
            <h2>SEO & Keyword Enforcement</h2>
            <p>
              The AI writing model will ensure every post follows your specific
              and optimal keyword guidelines.
            </p>
          </div>
          <div>
            <h2>AI Writing Model</h2>
            <p>
              It learns from you! The more you upload, the more words and
              phrases best resonate with your audience.
            </p>
          </div>
          <div>
            <h2>Video Clip Generator</h2>
            <p>
              Automatically turn your old videos into fresh and on-brand social
              posts that send traffic back to the original link.
            </p>
          </div>
          <div>
            <h2>Voice & Tone</h2>
            <p>
              The guidelines ensure every post you share is on brand and has a
              customized and consistent voice.
            </p>
          </div>
          <div>
            <h2>Audience Pre-Testing</h2>
            <p>
              Every post written by the content writer is pre-tested and based
              on what the AI knows will resonate with your audience.
            </p>
          </div>
        </div>
      </div>

      <div style={{ height: "18rem", backgroundColor: "#174c43" }}>
        <h2
          style={{
            fontSize: "25px",
            color: "white",
            paddingLeft: "14rem",
            paddingRight: "10rem",
            paddingTop: "3rem",
            lineHeight: "31px",
            fontWeight: "300",
          }}
        >
          “Lately is a <b>really powerful AI-powered platform</b> to add to your
          team’s arsenal.”
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
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/60ca659005d25a414c678974_1595443201477.jpeg"
            alt=""
          />
          <div style={{ color: "white" }}>
            {" "}
            <h2
              style={{
                fontWeight: "500",
                marginTop: "60px",
                fontSize: "22px",
                marginLeft: "24px",
              }}
            >
              Colleen O'Brien{" "}
            </h2>{" "}
            <h2 style={{ marginLeft: "25px", fontSize: "18px", width: "100%" }}>
              Chief Marketing Officer, M12 – Microsoft's Venture Fund
            </h2>
          </div>
          <img
            style={{
              height: "30px",
              width: "140px",
              marginLeft: "100px",
              marginTop: "90px",
            }}
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/60a41d21c40f51052e03e0a4_mslogo-p-500.png"
            alt=""
          />
        </div>
      </div>

      <div style={{ backgroundColor: "#e6f6ef" }}>
        <h1
          style={{
            paddingTop: "50px",
            color: "#174c43",
            textAlign: "center",
            width: "75%",
            marginBottom: "40px",
            fontSize: "34px",
            fontWeight: "700",
            marginLeft: "10rem",
            lineHeight: "36px",
          }}
        >
          The Lately social media AI content writing <br /> solution is designed
          for companies of every size
        </h1>

        <div
          style={{
            paddingTop: "1px",
            marginTop: "30px",
            paddingBottom: "40px",
          }}
        >
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
                Whether you’re just starting to scale your social media
                marketing program or you’re ready to extend it across executives
                and sales teams, we have an edition right-sized for your needs.
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
      </div>
      <div className={styles.main}>
        <div className={styles.right_text}>
          <img
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fea2eed7aaf965bf7857079_Quote_DkGreen.svg"
            alt="/"
          />
          <p style={{ marginTop: "10px" }} className={styles.text_para}>
            <i>
              <b style={{ fontWeight: "500" }}>“Overall Lately is a homerun.</b>{" "}
              I love that I can create and schedule all my content in about 20
              minutes per week.”
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
          <img src={shap} alt="" />
        </div>
      </div>

      <hr
        style={{ width: "80%", margin: "auto", backgroundColor: "#333333" }}
      />

      <div style={{ marginTop: "30px", height: "32rem" }}>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "800",
            color: "#133d36",
            lineHeight: "44px",
            textAlign: "left",
            marginLeft:"12rem"
          }}
        >
          AI-generated results that don’t muck around.
        </h1>
        <div className={styles.fourDiv}>
          <div style={{display:"flex",marginTop:"10px"}}>
            <img
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6002236421b928e945df4385_stat4.png"
              alt=""
            />
            <div style={{marginLeft:"20px"}}>
              <h2>Generate Social Content the New Way</h2>
              <p>
                Stop guessing what to write. Lately’s AI creates organic social
                media content that it already knows your audience will love.
              </p>
            </div>
          </div>
          <div style={{display:"flex",marginTop:"10px"}}>
            <img
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/60022364b4348190da308534_stat3.png"
              alt=""
            />
            <div style={{marginLeft:"20px"}}> 
              <h2>Unlock the Power of Longform Content</h2>
              <p>
                Automatically atomize any longform video, audio, or text into
                dozens of pre-tested social media posts designed to magnify
                engagement.
              </p>
            </div>
          </div>
          <div style={{display:"flex",marginTop:"10px"}}>
            <img
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/600223648dc79dc41d78513f_stat2.png"
              alt=""
            />
            <div style={{marginLeft:"20px"}}>
              <h2>Social Selling on Steroids</h2>
              <p>
                Generate consistent, engaging content that converts high-quality
                leads for employees who don’t know a dang thing about
                copywriting.
              </p>
            </div>
          </div>
          <div style={{display:"flex",marginTop:"10px"}}>
            <img
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/600223649f9648efb7abb3d3_stat_1.png"
              alt=""
            /> 
            <div style={{marginLeft:"20px"}}>
              <h2>Game-Changing AI Insights</h2>
              <p>
                Learn the key words, phrases and values that make up the
                messaging your brand’s audience actually wants to watch, hear or
                read.
              </p>
            </div>
          </div>
        </div>
      </div>
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

export default ContentWriter;
