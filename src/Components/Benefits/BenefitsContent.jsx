import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Benefits.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
const audienceData = [
  {
    title: "Developers",
    description:
      "Perfect for coders and software developers who want to stay updated on the latest technologies and programming trends.",
    benefits: [
      "Access to a rich collection of coding resources and tutorials.",
      "Engage with a community of like-minded developers.",
      "Stay informed about industry news and best practices.",
    ],
  },
  {
    title: "Corporate Professionals",
    description:
      "Tailored for corporate professionals seeking business insights, leadership tips, and professional development resources.",
    benefits: [
      "Explore business strategies and management techniques.",
      "Networking opportunities with professionals from various industries.",
      "Exclusive access to industry reports and case studies.",
    ],
  },
  {
    title: "Bankers",
    description:
      "Designed for finance and banking professionals who want to stay ahead in the ever-evolving financial landscape.",
    benefits: [
      "Stay informed about financial market trends and updates.",
      "Access to in-depth analysis of economic indicators.",
      "Networking with fellow finance professionals and experts.",
    ],
  },
  // Add more audience types as needed
];
const BenefitsContent = () => {
  return (
    <>
      <div>
        <h1 className="text-xl md:text-4xl text-center font-light py-6 md:py-10 lg:py-20 uppercase mt-8 md:mt-16">
          whom this can be of benefit?
        </h1>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://i.ibb.co/q7vY4cH/businessman-using-his-tablet-with-background-blue-tones.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <>
          {audienceData.map((audience, index) => (
            <SwiperSlide key={index} className="h-[400px]">
              <div className="w-[550px] p-6 bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="title" data-swiper-parallax="-300">
                  <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {" "}
                    {audience.title}
                  </h5>
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  <p className="my-5 font-normal text-lg text-gray-700 dark:text-gray-400">
                    {" "}
                    {audience.description}
                  </p>
                </div>
                <div className="text mt-5" data-swiper-parallax="-100 ">
                  <ul>
                    {audience.benefits.map((benefit, i) => (
                      <li className="text-black my-3" key={i}>
                        {i + 1}
                        {". "}
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </>
  );
};

export default BenefitsContent;
