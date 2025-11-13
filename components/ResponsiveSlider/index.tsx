import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  description?: any;
}

interface SliderProps {
  slides: Slide[];
  badgeContent?: any;
  autoPlay?: boolean;
  interval?: number;
}

const ResponsiveSlider: React.FC<SliderProps> = ({
  slides,
  badgeContent,
  autoPlay = false,
  interval = 5000,
}) => {
  const [current, setCurrent] = useState(0);

  // Go to next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Optional autoplay
  React.useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  return (
    <div className="relative w-full h-96 lg:h-[520px] overflow-hidden rounded-2xl shadow-lg">
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slides[current].id}
          className="absolute w-full h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          {/* Overlay for info */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
            <h2 className="text-lg font-semibold pb-8">{slides[current].description}</h2>
            {/* {slides[current].description && (
              <p className="text-sm">{slides[current].description}</p>
            )} */}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        <ChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              idx === current ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      {/* Badge */}
      <div className="absolute top-3 right-3">
        {badgeContent}
      </div>
    </div>
  );
};

export default ResponsiveSlider;
