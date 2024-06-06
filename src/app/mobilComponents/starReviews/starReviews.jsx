"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function StarReviews() {
  return (
    <div className="frame-container">
      <div className="frame-div"></div>
      <div className="look-what-stars-have-to-say-parent">
        <div className="look-what-stars">Look What Stars have to say</div>
        <div className="top-celebrities-share-their-th-wrapper">
          <div className="top-celebrities-share">
            Top celebrities share their thoughts on working with StarClinch.
          </div>
        </div>
      </div>

      <div className="frame-parent1">
        <div className="instance-parent">
          <div className="group-parent">
            <img
              className="instance-child2"
              alt=""
              src="./group-1321314244@2x.png"
            />

            <img
              className="instance-child3"
              alt=""
              src="./group-1321314246@2x.png"
            />

            <img
              className="instance-child4"
              alt=""
              src="./group-13213142441@2x.png"
            />

            <img
              className="instance-child5"
              alt=""
              src="./group-1321314245@2x.png"
            />

            <div className="rectangle-parent">
              <div className="rectangle-div"></div>
              <img className="image-54-icon" alt="" src="./image-54@2x.png" />
            </div>
          </div>

          <div className="rectangle-group">
            <div className="frame-child1"></div>
            <div className="frame-child2"></div>
            <div className="frame-child3"></div>
            <div className="frame-child4"></div>
            <div className="frame-child5"></div>
            <div className="frame-child6"></div>
            <div className="frame-child7"></div>
          </div>
          <div className="vector-wrapper">
            <img className="vector-icon" alt="" src="./vector-18.svg" />
          </div>
        </div>

        <div className="frame-wrapper">
          <motion.div
            transition={{ duration: 0.8 }}
            initial={{ opacity: 0, top: 192 }}
            whileInView={{ opacity: 1, top: 50 }}
            viewport={{ once: false }}
            className="perfectly-organized-event-at-p-parent"
          >
            <div className="perfectly-organized-event-container">
              <span>Perfectly organized event </span>
              <span className="at-pune-and">at Pune and a</span>
              <span> </span>
              <span className="huge">huge</span>
              <span> shout out to StarClinch </span>
              <span className="for-this-wonderful">
                for this wonderful opportunity
              </span>
            </div>
            <div className="arijit-singh">-Arijit Singh</div>
          </motion.div>
        </div>

        <div className="frame-parent2">
          <div className="frame-parent3">
            <div className="frame-parent4">
              <motion.img
                transition={{ duration: 0.9 }}
                initial={{ background: "black", opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                className="frame-child8"
                alt=""
                src="./asdhius..png"
              />

              <motion.img
                transition={{ duration: 0.9 }}
                initial={{ background: "black", opacity: 1 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: false, amount: 0.8 }}
                className="frame-child9"
                alt=""
                src="./frame-13213146561@2x.png"
              />
            </div>

            <div className="frame-parent5">
              <motion.img
                transition={{ duration: 0.9 }}
                initial={{ background: "black", opacity: 1 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: false, amount: 0.8 }}
                className="frame-child10"
                alt=""
                src="./frame-13213146571@2x.png"
              />

              <motion.img
                transition={{ duration: 0.9 }}
                initial={{ background: "black", opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                className="frame-child11"
                alt=""
                src="./asuigd.png"
              />
            </div>
            <div className="frame-parent6">
              <img
                className="frame-child12"
                alt=""
                src="./frame-13213146582@2x.png"
              />

              <img
                className="frame-child13"
                alt=""
                src="./frame-13213146572@2x.png"
              />
            </div>
          </div>
          <div className="instance-child6"></div>
          <div className="frame-parent7">
            <div className="k-parent">
              <div className="k">25K+</div>
              <div className="celebrities-to-choose-container">
                <span>Celebrities</span>
                <span className="to-choose-from"> to choose from </span>
              </div>
            </div>
            <div className="rectangle-container">
              <div className="group-child2"></div>
              <div className="see-price-and-book-now-parent">
                <div className="see-price-and">See Price and Book Now</div>
                <img className="frame-child14" alt="" src="./vector-209.svg" />
              </div>
            </div>
          </div>
          <div className="instance-child7"></div>
        </div>
      </div>
    </div>
  );
}
