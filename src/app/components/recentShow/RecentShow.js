/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";

export default function RecentShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageSrc: "image-59@2x.png",
      title: "Nora Fatehi ",
      description: "for an event hosted by XYZ performed at Pune.",
      date: "14 March 2023",
    },
    {
      imageSrc: "image-60@2x.png",
      title: "Kapil Sharma",
      description: "for an event hosted by ABC performed at Mumbai.",
      date: "20 April 2023",
    },
    {
      imageSrc: "frame-1321314658-1@2x.png",
      title: "Zakir Khan",
      description: "for an event hosted by ABC performed at Delhi.",
      date: "20 April 2023",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section class="footer">
      <div class="recent-shows-container-parent">
        <div class="marquee-container top">
          <div class="marquee">
            <p>
              highlight of the day
              <span style={{ margin: "0 10px" }}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
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
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
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
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
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
        <div class="recent-shows-container">
          <div class="recent-shows-made-star-studded-wrapper">
            <h1 class="recent-shows-made">
              Recent shows made star-studded via StarClinch
            </h1>
          </div>
          <div class="component-18">
            <div className="slider-parent">
              <div className="image-row-wrapper">
                <div className="image-row">
                  <img
                    className="image-59-icon"
                    loading="lazy"
                    alt=""
                    src={slides[currentSlide].imageSrc}
                  />
                </div>
              </div>
              <div className="nora-fatehi-for-an-event-hoste-parent">
                <h1 className="nora-fatehi-for-container">
                  <span>{slides[currentSlide].title}</span>
                  <span className="for-an-event">
                    {slides[currentSlide].description}
                  </span>
                </h1>
                <div className="frame-parent11">
                  <div className="fluentcalendar-16-filled-wrapper">
                    <img
                      className="fluentcalendar-16-filled-icon"
                      loading="lazy"
                      alt=""
                      src="fluentcalendar16filled.svg"
                    />
                  </div>
                  <div className="march-2023">{slides[currentSlide].date}</div>
                </div>
              </div>
            </div>
            <span style={{ cursor: "pointer" }} onClick={prevSlide}>
              <img
                className="component-18-child"
                loading="lazy"
                alt=""
                src="group-3.svg"
              />
            </span>
            <span style={{ cursor: "pointer" }} onClick={nextSlide}>
              <img
                className="component-18-item"
                loading="lazy"
                alt=""
                src="group-4@2x.png"
              />
            </span>
          </div>
        </div>

        <div class="marquee-container bottom">
          <div class="marquee">
            <p>
              highlight of the day
              <span style={{ margin: "0 10px" }}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
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
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
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
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
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
    </section>
  );
}
