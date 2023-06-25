import React from "react";
import TopOfferCourse from "./TopOfferCourse";
import PagePostList from "./PagePostList";
import UniFacilites from "./UniFacilites";
import { Reviews } from "@mui/icons-material";
import UniReviews from "./UniReviews";

const UniHomePage = () => {
  return (
    <div className=" grid grid-cols-1 gap-4 lg:col-span-2">
      <TopOfferCourse />
      <PagePostList />
      <UniFacilites />
      <UniReviews />
    </div>
  );
};

export default UniHomePage;
