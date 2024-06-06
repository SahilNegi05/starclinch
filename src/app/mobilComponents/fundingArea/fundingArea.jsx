"use client";
import React from "react";

import { motion } from "framer-motion";
import VerticalCarousel from "./verticalSlider";

export default function FundingArea() {
  return (
    <div class="component-15-parent">
      <div class="component-15">
        <div class="vector-parent">
          <img class="frame-child20" alt="" src="./vector-214.svg" />

          <div class="we-are-the-only-vc-funded-ent-parent">
            <motion.div
              transition={{ duration: 1 }}
              initial={{ opacity: 0.03, top: 70 }}
              whileInView={{ opacity: 1, top: 0 }}
              viewport={{ once: false, amount: 0.8 }}
              class="we-are-the-container"
            >
              <span>We are</span>
              <span class="the-only-vc"> the only VC Funded </span>
              <span>Ent-Tech startup </span>
              <span class="in-asia">in Asia</span>
            </motion.div>
            <div class="read-more-wrapper">
              <div class="read-more-">Read More -&gt;</div>
            </div>
          </div>
        </div>
      </div>
      <div class="subtract-parent">
        <img class="subtract-icon1" alt="" src="./subtract1.svg" />

        <div class="frame-parent12">
          <div class="mditick-circle-parent">
            <img class="mditick-circle-icon" alt="" src="./mditickcircle.svg" />

            <div class="leveraging-tech-to">
              Leveraging tech to give out the best price
            </div>
          </div>
          <div class="mditick-circle-group">
            <img
              class="mditick-circle-icon1"
              alt=""
              src="./mditickcircle.svg"
            />

            <div class="reliable-booking-and">
              Reliable Booking and Hassle-free Refunds
            </div>
          </div>
        </div>
        <div class="component-28">
          <img class="component-28-child" alt="" src="./star-52.svg" />

          <div class="component-28-item"></div>
          <div class="component-28-inner"></div>
          <b class="b">08</b>

          <motion.div
            initial={{ rotate: 189 }}
            animate={{ rotate: 360 }}
            transition={{
              ease: "linear",
              duration: 2.5,
              repeat: Infinity,
            }}
            className="star-group"
          >
            <img class="star-icon" alt="" src="./star-32.svg" />

            <img class="group-child3" alt="" src="./star-42.svg" />

            <img class="group-icon2" alt="" src="./group3@2x.png" />

            <img class="group-icon3" alt="" src="./group4@2x.png" />
          </motion.div>
        </div>
      </div>
      <div class="frame-parent13">
        <div style={{ position: "absolute", top: "300px", left: "40px" }}>
          <VerticalCarousel />
        </div>

        <div class="choose-from-10-categories-parent">
          <div class="choose-from-10-container">
            <span>Choose from</span>
            <span class="categories1"> 10+ Categories</span>
          </div>
          <div class="explore-all-categories-parent">
            <div class="explore-all-categories">Explore all categories</div>
            <img class="frame-child21" alt="" src="./vector-2091.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
