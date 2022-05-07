import React from "react";
import BlogPost from "./BlogPost/BlogPost";
import ProjectInfo from "./ProjectInfo/projectInfo";
import PlanningBusiness from "./PlanningBusiness/planningBusiness";
import CustomSDC from "./CustomSDC/CustomSDC";
import ClientsReview from "./ClientsReview/ClientsReview";
import ChooseUs from "./ChooseUs/ChooseUs";
import SomeInfo1 from "./SomeInfo1/someInfo";
import SomeInfo2 from "./SomeInfo2/someInfo2";
import FAQs from "./FAQs/faq";
import CashStudies from "./CashStudies/CashStudies";

function HomePage() {
    return (
      <>
        <PlanningBusiness />
        <CustomSDC />
        <SomeInfo1 />
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
  
export default HomePage;