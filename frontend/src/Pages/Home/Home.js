import React from "react";
import PlanningBusiness from "./PlanningBusiness/planningBusiness";
import CustomSDC from "./CustomSDC/CustomSDC";
import SomeInfo from "./SomeInfo1/someInfo";
import CashStudies from "./CashStudies/CashStudies";
import SomeInfo2 from "./SomeInfo2/someInfo2";
import ChooseUs from "./ChooseUs/ChooseUs";
import ClientsReview from "./ClientsReview/ClientsReview";
import BlogPost from "./BlogPost/BlogPost";
import FAQs from "./FAQs/faq";
import ProjectInfo from "./ProjectInfo/projectInfo";

function Home() {
  return (
    <>
      <PlanningBusiness />
      <CustomSDC />
      <SomeInfo />
      <CashStudies />
      <SomeInfo2 />
      <ChooseUs />
      <ClientsReview />
      <BlogPost />
      <FAQs />
      <ProjectInfo />
    </>
  );
}

export default Home;
