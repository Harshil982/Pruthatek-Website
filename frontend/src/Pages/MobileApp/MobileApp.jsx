import React from "react";
import "./MobileApp.css";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import MobailPc from "./assets/72 1.png";
// import mCommerce from "./assets/image 13.png";
// import mediaStraming from "./assets/image 14.png";
// import DigitalContant from "./assets/image 15.png";
// import MobailHealthcare from "./assets/image 16.png";
// import Socialnetwork from "./assets/image 17.png";
// import Sportslifestyle from "./assets/image 18.png";
// import ios from "./assets/image 19.png";
// import android from "./assets/image 20.png";
// import windows from "./assets/image 22.png";
// import crossplatform from "./assets/image 23.png";
import mobailepcleptop from "./assets/mobilepcleptop.png";

const MobileApp = () => {
  return (
    <div className="MobailApp">
      <div className="MobailTitle">
        <h2 className="MobailApp_Title">
          {" "}
          We do Not just Build Apps. We Craft top-Notch mobaile Experience{" "}
        </h2>
      </div>
      <div className="MobailAppParagraph">
        <p>
          The organization and its working methodologies have been changing, and
          BYOD fits more popular. At PruthaTek, we understand the need and
          importance of enterprise mobility solutions and how it can transform
          your business.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-md-6 col-xl-6 col-xs-12">
            <div className="UserExperienceTitle">
              <h3 className="UserTitle">User Experience Design</h3>
              <span className="userUnderLine"></span>
            </div>
            <div className="UserExperienceContaine">
              <p className="UserContaine">
                Our artistic UI &amp; UX designer team focuses on providing
                user-friendly designs to transform your ideas into a meaningful
                solution. With our mobile application design service, we support
                your project visualization with the complete software
                application.
              </p>
            </div>
            <div className="UserExperienceTitle">
              <h3 className="UserTitle">Cross-Platform Coverage</h3>
              <span className="userUnderLine"></span>
            </div>
            <div className="UserExperienceContaine">
              <p className="UserContaine">
                We leverage the advantages of a Cross-platform framework and
                offer competitive mobile app development that runs with more
                than one operating system, in this case, iOS and Android.
              </p>
            </div>
            <div className="UserExperienceTitle">
              <h3 className="UserTitle">Scalability &amp; Interoperability</h3>
              <span className="userUnderLine"></span>
            </div>
            <div className="UserExperienceContaine">
              <p className="UserContaine">
                Our mobile app solutions are scalable enough to operate in a
                growing environment where software can run in a wide power
                range. It overall reduces software development costs and brings
                products to market quickly.
              </p>
            </div>
            <div className="UserExperienceTitle">
              <h3 className="UserTitle">Security & Compliance</h3>
              <span className="userUnderLine"></span>
            </div>
            <div className="UserExperienceContaine">
              <p className="UserContaine">
                Every business needs security, and every mobile app demands
                compliance. We keep safety and compliance in consideration while
                developing any solution and address the best possible security
                requirements for a business to run smoothly.{" "}
              </p>
            </div>
            <div className="UserExperienceTitle">
              <h3 className="UserTitle">Accelerated Delivery</h3>
              <span className="userUnderLine"></span>
            </div>
            <div className="UserExperienceContaine">
              <p className="UserContaine">
                With technology know-how and the best app development resources,
                the Pyour project is as fat as possible by maintaining quality
                and enhanced user experience. We focus on delivering remarkable
                mobile-experience in the industry.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-md-4 col-xl-4 col-xs-12">
            <div className="ImageMobail">
              <img src={MobailPc} className="MobailImage" alt="Here"/>
            </div>
          </div>
        </div>
      </div>
      {/*=====================Domain Expertise======================== */}
      <div className="row domain-expertise">
        <div className="ma-features-title">DOMAIN EXPERTISE</div>
        <div className="ma-features-subtitle">
          We deliver highly functional mobile apps drawing on hands-on
          experience in the following solution domains:
        </div>
        {/* <OwlCarousel className="owl-theme" items={6} loop margin={10}>
          <div className="des-items">
            <div className="des-items" style={{ color: "#000" }}>
              <img className="des-img" src={mCommerce} alt="Here"/>
              mCommerce
            </div>
          </div>
          <div className="des-items">
            <div className="des-items" style={{ color: "#000" }}>
              <img className="des-img" src={mediaStraming} alt="Here"/>
              Media Straming
            </div>
          </div>
          <div className="des-items">
            <div className="des-items" style={{ color: "#000" }}>
              <img className="des-img" src={DigitalContant} alt="Here"/>
              Digital Contant
            </div>
          </div>
          <div className="des-items">
            <div className="des-items" style={{ color: "#000" }}>
              <img className="des-img" src={MobailHealthcare} alt="Here"/>
              Mobail Healthcare
            </div>
          </div>
          <div className="des-items">
            <div className="des-items" style={{ color: "#000" }}>
              <img className="des-img" src={Socialnetwork} alt="Here"/>
              Social network
            </div>
          </div>

          <div className="des-items">
            <div className="des-items" style={{ color: "#000" }}>
              <img className="des-img" src={Sportslifestyle} alt="Here"/>
              Sport & Lifestyle App
            </div>
          </div>
        </OwlCarousel> */}
        ;
      </div>
      {/*===================================One- stop solution================= */}
      <div className="OnstopSolution">
        <div className="OneStopTitle">
          <h1 className="TitleOneStop">
            One-stop Solution provider for Multi-platform Project
          </h1>
        </div>
        <div className="OnstopContaine">
          <p className="ContaineOneStop">
            With years of experience in IT, we take complete responsibility for
            our customer’s software development needs by ensuring top-quality
            performance. You can consider us as your one-stop development
            partner, and we deliver you the best industry-specific services,
            along with strategic alliances with professional consultants and
            business experts.
          </p>
        </div>
        <div className="OnestopImage">
          <img
            src={mobailepcleptop}
            className="ImageOnestop"
            alt="OnestopImage"
          />
        </div>
      </div>
      {/*=======================TECHNOLOGY================================= */}
      <div className="row Technology">
        <div className="TechnologyTitle">
          <h3 className="TitleTechnology">TECHNOLOGY</h3>
        </div>
        {/* <OwlCarousel items={4} loop margin={0}>
          <div className="Technology-items">
            <div className="Technology-items" style={{ color: "#000" }}>
              <img className="Technology-img" src={ios} alt="Here"/>
            </div>
          </div>
          <div className="Technology-items">
            <div className="Technology-items" style={{ color: "#000" }}>
              <img className="Technology-img" src={android} alt="Here"/>
            </div>
          </div>
          <div className="Technology-items">
            <div className="Technology-items" style={{ color: "#000" }}>
              <img className="Technology-img" src={windows} alt="Here"/>
            </div>
          </div>
          <div className="Technology-items">
            <div className="Technology-items" style={{ color: "#000" }}>
              <img className="Technology-img" src={crossplatform} alt="Here"/>
            </div>
          </div>
        </OwlCarousel> */}
        ;
      </div>
    </div>
  );
  
}

export default MobileApp;