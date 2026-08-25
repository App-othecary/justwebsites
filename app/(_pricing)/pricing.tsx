"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";
import SectionHeading from "../components/section-heading";
import { pricingData, extraServicesData } from "@/lib/data";
import PricingProps from "./pricing-card";
import ExtraServicesProps from "./extra-services-card";
import PricingFooter from "./pricing-footer";
import PricingCardSample from "./pricing-card-sample";

export default function Pricing() {
  const { ref } = useSectionInview("Pricing", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-280 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="pricing"
    >
      <SectionHeading>Pricing</SectionHeading>

      <p className="text-center max-w:45 rem m-4">
        Weather you're just getting started or need a website to grow with your
        business.
      </p>
      <main className=" md:col-span-3 cardPrimaryColor rounded-2xl shadow-sm border border-gray-200">
        <h1 className="text-4xl font-medium text-zinc-100 ">
          justwebsites.co.za
        </h1>
        <p className="text-gray-600">simple websites. real results</p>

        <div className="w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 p-2">
            <div
              className="grid grid-cols-1  
                                sm:grid-cols-2  
                                lg:grid-cols-2
                                gap-2  rounded-lg"
            >
              {pricingData.map((pricing, index) => (
                <React.Fragment key={index}>
                  <PricingProps {...pricing} />
                </React.Fragment>
              ))}
            </div>{" "}
            <div
              className="grid grid-cols-1  
                                sm:grid-cols-2  
                                lg:grid-cols-2
                                gap-2   rounded-lg "
            >
              {extraServicesData.map((extraService, index) => (
                <React.Fragment key={index}>
                  <ExtraServicesProps {...extraService} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <PricingFooter />
      </main>
      <PricingCardSample />
    </motion.section>
  );
}
