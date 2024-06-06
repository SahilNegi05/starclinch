"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useRef, useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function Banner() {
  const [isInView, setIsInView] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        observer.unobserve(parentRef.current);
      }
    };
  }, []);

  const childVariants = {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
    },
  };

  return (
    <div class="frame-parent" ref={parentRef}>
      <div class="instance-child"></div>
      <motion.img
        transition={{ duration: 0.6, ease: "easeInOut" }}
        variants={childVariants}
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        viewport={{ once: false, amount: 0.6 }}
        class="instance-item"
        src="./hytus.png"
        alt=""
      />

      <motion.div
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
        variants={{
          initial: {
            opacity: 0.1,
          },
          inView: {
            opacity: 1,
            zIndex: 11111,
          },
        }}
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        viewport={{ once: false, amount: 0.6 }}
        class="frame-group"
      >
        <input class="tablersearch-parent" placeholder="Search for an artist" />

        <div class="book-a-celebrity-parent">
          <div class="book-a-celebrity">Book a Celebrity</div>
          <div class="for-your-iconic-container">
            <span>for your</span>
            <span class="iconic-event"> Iconic Event</span>
          </div>
          <div class="frame-child"></div>
        </div>
      </motion.div>
      <motion.img
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
        variants={{
          initial: {
            opacity: 0.1,
          },
          inView: {
            opacity: 1,
          },
        }}
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        viewport={{ once: false, amount: 0.6 }}
        class="instance-inner"
        alt=""
        src="./frame-1321314646@2x.png"
      />

      <motion.div
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
        variants={{
          initial: {
            opacity: 0.1,
          },
          inView: {
            opacity: 0.81,
          },
        }}
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        viewport={{ once: false, amount: 0.9 }}
        class="image-62-parent"
      >
        <img class="image-62-icon" alt="" src="./image-62@2x.png" />

        <div class="frame-item"></div>
      </motion.div>
      <motion.div
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
        variants={{
          initial: {
            opacity: 0.1,
          },
          inView: {
            opacity: 0.81,
          },
        }}
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        viewport={{ once: false, amount: 0.9 }}
        class="image-63-parent"
      >
        <img class="image-63-icon" alt="" src="./image-63@2x.png" />

        <img class="frame-inner" alt="" src="./frame-1321314653@2x.png" />
      </motion.div>
      <motion.div
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
        variants={{
          initial: {
            opacity: 0.1,
            backdropFilter: "none",
            boxShadow: "none",
          },
          inView: {
            opacity: 1,
            backdropFilter: "none",
            boxShadow: "none",
          },
        }}
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        viewport={{ once: false, amount: 0.9 }}
        class="star-parent"
      >
        <img class="group-child" alt="" src="./star-51.svg" />
        <img class="group-inner" alt="" src="./star-41.svg" />
        <div class="ellipse-div"></div>
        <div class="group-child1"></div>
        <b class="starclinch-verified-artists-container">
          <p class="starclinch">STARCLINCH</p>
          <p class="verified">VERIFIED</p>
          <p class="artists">ARTISTS</p>
        </b>
        <img class="group-icon" alt="" src="./group1@2x.png" />

        <img class="group-icon1" alt="" src="./group2@2x.png" />
      </motion.div>

      <img class="frame-icon" alt="" src="./frame-1321314651@2x.png" />

      <img class="instance-child1" alt="" src="./frame-1321314652@2x.png" />

      <img class="subtract-icon" alt="" src="./subtract.svg" />
    </div>
  );
}

//.frame-parent, .frame-group, .image-62-parent
