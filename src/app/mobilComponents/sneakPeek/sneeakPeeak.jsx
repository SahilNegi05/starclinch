"use client";

import React from "react";

import { motion } from "framer-motion";

export default function SneeakPeeak() {
  return (
    <div class="component-7-parent">
      <div class="component-7">
        <div class="frame-parent20">
          <motion.img
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            class="frame-child29"
            alt=""
            src="./image_56_1.png"
          />

          <img
            class="whatsapp-image-2023-08-25-at-1"
            alt=""
            src="./whatsapp-image-20230825-at-111-1@2x.png"
          />

          <motion.div
            transition={{ duration: 0.6, ease: "easeInOut" }}
            initial={{ top: 125, opacity: 0.1 }}
            whileInView={{ top: 75, opacity: 1 }}
            viewport={{ once: false }}
            class="whatsapp-image-2023-08-25-at-1-wrapper"
          >
            <img
              class="whatsapp-image-2023-08-25-at-11"
              alt=""
              src="./inasdg.png"
            />
          </motion.div>

          <motion.img
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            class="frame-child30"
            alt=""
            src="./image_56_1.png"
          />

          <motion.img
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            class="frame-child31"
            alt=""
            src="./sufa789.png"
          />
        </div>
        <div class="component-7-child"></div>
        <div class="component-7-item"></div>
      </div>
      <div class="closest-sneak-peak-to-what-sta-parent">
        <div class="closest-sneak-peak-container">
          <span>Closest</span>
          <span class="sneak-peak-to"> sneak peak to what stars </span>
          <span>have to</span>
          <span class="say-about-us"> say about us</span>
        </div>
        <div class="from-mohit-chauhan">
          From Mohit Chauhan to Zakir khan have shared their words for us. Take
          a quick glimpse of StarClinch world.
        </div>
        <div class="image-57-parent">
          <img class="image-57-icon" alt="" src="./image-571@2x.png" />

          <div class="take-me-to">Take me to Gram -&gt;</div>
        </div>
      </div>
    </div>
  );
}
