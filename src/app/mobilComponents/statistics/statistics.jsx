"use client";

import { motion } from "framer-motion";

export default function Statistics() {
  return (
    <div class="frame-parent11">
      <img className="frame-child19" alt="" src="./frame-1321314686@2x.png" />

      <div class="committed-to-excellence-container">
        <span>Committed </span>
        <span class="to-excellence">to excellence</span>
        <span> since 2015</span>
      </div>
      <div class="instance-group">
        <div class="frame-wrapper1">
          <div class="cr-parent">
            <motion.div
              transition={{ duration: 1 }}
              initial={{ top: 78, opacity: 0.3 }}
              whileInView={{ top: 23, opacity: 1 }}
              viewport={{ once: false }}
              class="cr"
            >
              ₹24Cr+
            </motion.div>
            <div class="worth-of-booking">Worth of booking</div>
            <motion.img
              transition={{ duration: 1 }}
              initial={{ top: 78, right: 161, opacity: 0.3 }}
              whileInView={{ top: 0, right: 58, opacity: 1 }}
              viewport={{ once: false }}
              src="./Uniontype.png"
              alt=""
              className="Uniontype"
            />
          </div>
        </div>
        <div class="frame-wrapper2">
          <div class="k-group">
            <div class="k1">12K+</div>
            <div class="performances">Performances</div>
          </div>
        </div>
        <div class="frame-wrapper3">
          <div class="group">
            <div class="div">100+</div>
            <div class="cities">Cities</div>
          </div>
        </div>
        <div class="frame-wrapper4">
          <div class="m-parent">
            <div class="m">2M+</div>
            <div class="stage-mins">Stage mins</div>
          </div>
        </div>
        <div class="frame-wrapper5">
          <div class="parent1">
            <div class="div1">150+</div>
            <div class="categories">Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
}
