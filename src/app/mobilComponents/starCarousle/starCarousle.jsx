"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "./image-591@2x.png",
  "./image-601@2x.png",
  "./image-611@2x.png",
];

export default function StarCarousle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div class="frame-parent17">
      <div class="recent-shows-made-star-studded-parent">
        <div class="recent-shows-made">
          Recent shows made star-studded via StarClinch
        </div>
        <div class="component-14">
          <div class="frame-parent18">
            <div class="image-59-parent">
              <AnimatePresence wait>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="carousel-image image-59-icon"
                />
              </AnimatePresence>
            </div>
            <div class="frame-parent19">
              <div class="nora-fatehi-for-an-event-hoste-parent">
                <div class="nora-fatehi-for-container">
                  <span>Nora Fatehi </span>
                  <span class="for-an-event">
                    for an event hosted by XYZ performed
                  </span>
                  <span> at Pune .</span>
                </div>
                <div class="fluentcalendar-16-filled-parent">
                  <img
                    class="fluentcalendar-16-filled-icon"
                    alt=""
                    src="./fluentcalendar16filled1.svg"
                  />
                  <div class="march-2023">14 March 2023</div>
                </div>
              </div>
              <div class="rectangle-parent2">
                <div class="frame-child26"></div>
                <div class="frame-child27"></div>
                <div class="frame-child28"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="marquee-container top">
        <div class="marquee">
          <p>
            highlight of the day
            <span style={{ margin: "0 10px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.67 0.117155L22.3924 12.8805L35.1546 17.6034L22.3924 22.3263L17.67 35.0896L12.9476 22.3263L0.185483 17.6034L12.9476 12.8805L17.67 0.117155Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
            </span>
            highlight of the day
            <span style={{ margin: "0 10px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.67 0.117155L22.3924 12.8805L35.1546 17.6034L22.3924 22.3263L17.67 35.0896L12.9476 22.3263L0.185483 17.6034L12.9476 12.8805L17.67 0.117155Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
            </span>
            highlight of the day
            <span style={{ margin: "0 10px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.67 0.117155L22.3924 12.8805L35.1546 17.6034L22.3924 22.3263L17.67 35.0896L12.9476 22.3263L0.185483 17.6034L12.9476 12.8805L17.67 0.117155Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
      <div class="marquee-container bottom">
        <div class="marquee">
          <p>
            highlight of the day
            <span style={{ margin: "0 10px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.67 0.117155L22.3924 12.8805L35.1546 17.6034L22.3924 22.3263L17.67 35.0896L12.9476 22.3263L0.185483 17.6034L12.9476 12.8805L17.67 0.117155Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
            </span>
            highlight of the day
            <span style={{ margin: "0 10px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.67 0.117155L22.3924 12.8805L35.1546 17.6034L22.3924 22.3263L17.67 35.0896L12.9476 22.3263L0.185483 17.6034L12.9476 12.8805L17.67 0.117155Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
            </span>
            highlight of the day
            <span style={{ margin: "0 10px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.67 0.117155L22.3924 12.8805L35.1546 17.6034L22.3924 22.3263L17.67 35.0896L12.9476 22.3263L0.185483 17.6034L12.9476 12.8805L17.67 0.117155Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
