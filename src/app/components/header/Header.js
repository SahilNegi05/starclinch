import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header class="header">
      <div class="logo">
        <img src="logo.png" alt="StarClinch" />
      </div>
      <nav class="nav-links">
        <a href="#">
          Book Celebrities
          <img class="frame-item" alt="" src="vector-1.svg" />
        </a>
        <a href="#">Join Community</a>
        <a href="#" class="highlighted">
          Post Your Requirements
        </a>
      </nav>
    </header>
  );
}
