import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

const images = [
  "./image_88.png",
  "./zakir_khan_1.png",
  "./imagessad6.png",
  "./sufa789.png",
  "./zakir_khan_1.png",
];

const CarouselContainer = styled.div`
  position: relative;
  width: 370px;
  height: 700px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Slide = styled(motion.img)`
  position: absolute;
  width: 80%;
  height: auto;
  cursor: pointer;
`;

const Button = styled.button`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const UpButton = styled(Button)`
  left: 10px;
`;

const DownButton = styled(Button)`
  right: 10px;
`;

const variants = {
  enter: (direction) => {
    return {
      y: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1111111,
    y: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

const VerticalCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = page % images.length;
  const prevImageIndex = (page - 1 + images.length) % images.length;
  const nextImageIndex = (page + 1) % images.length;

  const paginate = (newDirection) => {
    const nextPage = page + newDirection;
    const maxPageIndex = images.length - 1;
    const nextPageIndex =
      nextPage < 0 ? maxPageIndex : nextPage > maxPageIndex ? 0 : nextPage;
    setPage([nextPageIndex, newDirection]);
  };

  return (
    <CarouselContainer>
      <AnimatePresence initial={false} custom={direction}>
        <Slide
          className="pixosi"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "linear", stiffness: 300, damping: 30 },
            opacity: { duration: 0.1 },
          }}
          style={{ zIndex: 111111111 }}
        />
        <Slide
          className="pixosi"
          key={`prev-${prevImageIndex}`}
          src={images[prevImageIndex]}
          custom={-1}
          variants={variants}
          initial="enter"
          animate={{
            y: -170,
            opacity: 0.5,
            scale: 0.8,
            zIndex: 1,
            rotate: "12deg",
            marginLeft: "100px",
          }}
          transition={{
            y: { type: "linear" },
            opacity: { duration: 0.1 },
          }}
          onClick={() => paginate(-1)}
        />
        <Slide
          className="pixosi"
          key={`next-${nextImageIndex}`}
          src={images[nextImageIndex]}
          custom={1}
          variants={variants}
          initial="enter"
          animate={{
            y: 170,
            opacity: 0.5,
            scale: 0.8,
            zIndex: 1,
            rotate: "-12deg",
            marginLeft: "100px",
          }}
          transition={{
            y: { type: "linear", stiffness: 300, damping: 30 },
            opacity: { duration: 0.1 },
          }}
          onClick={() => paginate(1)}
        />
      </AnimatePresence>
    </CarouselContainer>
  );
};

export default VerticalCarousel;
