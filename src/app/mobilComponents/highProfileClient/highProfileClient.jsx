"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HighProfileClient() {
  const events = [
    {
      id: 1,
      name: "Perfectly organized event at Pune and a huge shout out to StarClinch for this wonderful opportunity",
      imgSrc: "./frame-1321314674@2x.png",
      artist: "Abhishek Vyas (Singer)",
    },
    {
      id: 2,
      name: "Memorable concert in Mumbai featuring top artists from around the world",
      imgSrc: "./asdhius..png",
      artist: "Various Artists",
    },
    {
      id: 3,
      name: "Exclusive fashion show in New York showcasing the latest trends in haute couture",
      imgSrc: "./frame-1321314674@2x.png",
      artist: "Fashion Designers",
    },
    {
      id: 4,
      name: "Gourmet food festival in Paris celebrating the culinary arts",
      imgSrc: "./asuigd.png",
      artist: "Renowned Chefs",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === events.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="high-profile-clients-trust-us-parent">
      <div className="high-profile-clients">High Profile Clients Trust Us</div>
      <div className="parent">
        <img className="icon" alt="" src="./vectort.svg" />

        <div className="frame-parent9">
          <div className="slider">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className={`slide ${index === currentSlide ? "active" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="perfectly-organized-event-at-p-group">
                  <div className="perfectly-organized-event-container1">
                    <span>{event.name}</span>
                  </div>
                  <div className="frame-parent10">
                    <img className="frame-child15" alt="" src={event.imgSrc} />
                    <div className="abhishek-vyas-singer">-{event.artist}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rectangle-parent1">
            {[...Array(4)].map((_, index) => (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setCurrentSlide(index)}
                className={` ${
                  index === currentSlide ? "frame-child17" : "frame-child16"
                }`}
                key={index}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
