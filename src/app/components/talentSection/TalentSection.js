"use client";

import { useEffect, useState } from "react";

export default function TalentSection() {
  useEffect(() => {
    const button = document.getElementById("theme-btn");
    const tags = document.querySelectorAll(".tags");

    const handleMouseEnter = () => {
      tags.forEach((tag) => tag.classList.add("tasdi"));
    };

    const handleMouseLeave = () => {
      tags.forEach((tag) => tag.classList.remove("tasdi"));
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div>
      <section class="section-last">
        <div class="gradiant-sq">
          <div class="inner-heading">
            <div class="tags t1">Fun</div>
            <h1>20+Talented Folks</h1>
            <div class="tags t2">Inclusive</div>
            <p>
              From passion-driven dedication to impactful contribution, we do it
              all here. We are growing and will be excited to hear from you !
            </p>
          </div>

          <div class="animation-sec">
            <div>
              <button id="theme-btn">
                Join our team
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <div class="animation-sec" style={{ position: "relative" }}>
            <div class="tags  tt1t">Focused</div>
            <div class="tags  tt2t">Collaborative</div>

            <div class="tags  tt3t">United</div>
            <div class="tags  tt4t">Vibrant</div>
            <div class="tags  tt5t">Dynamic</div>
            <div class="tags  tt6t">Motivated</div>
          </div>
        </div>
        <div class="gradiant-ball left"></div>
        <div class="gradiant-left"></div>
      </section>
    </div>
  );
}
