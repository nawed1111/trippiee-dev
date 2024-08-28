import Home2About from "@/components/about/Home2About";
import Home2Activities from "@/components/activities/Home2Activities";
import Home2Banner from "@/components/banner/Home2Banner";
import Home2Banner2 from "@/components/banner/Home2Banner2";
import Home2Blog from "@/components/blog/Home2Blog";
import Home2Destinationslide from "@/components/destinationSlider/Home2Destinationslide";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import Home2Team from "@/components/team/Home2Team";
import Home2Testimonial from "@/components/testimonial/Home2Testimonial";
import Home2ThrillingTour from "@/components/tourPackage/Home2ThrillingTour";
import Home2VideoSection from "@/components/videoSection/Home2VideoSection";
import Home2WhyChoose from "@/components/whyChoose/Home2WhyChoose";
import React from "react";

export const metadata = {
  title: "TripRex - Tour & Travel Agency  NextJs Template",
  description:
    "TripRex is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const page = () => {
  return (
    <>
    <Header2 />
      <Home2Banner />
      <Home2Destinationslide />
      <Home2ThrillingTour />
      <Home2About />
      <Home2Activities />
      <Home2WhyChoose />
      <Home2Testimonial />
      <Home2Team />
      <Home2VideoSection />
      <Home2Blog />
      <Home2Banner2 />
      <Footer style="style-2" />
    </>
  );
};

export default page;
