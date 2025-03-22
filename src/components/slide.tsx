"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text: "What I love about Voxify is its ability to learn and adapt to my preferences. The AI feels so natural, and the premium plan has everything I need to stay connected. It’s the future of smart assistance!",
    author: "Lila M.",
    role: "Tech Enthusiast",
    avatar: "/avatar.jpg",
  },
  {
    text: "Voxify has transformed how I interact with my devices. The seamless experience and AI-driven responses are truly game-changing!",
    author: "John D.",
    role: "AI Researcher",
    avatar: "/avatar2.jpg",
  },
  {
    text: "The AI-powered tools in Voxify have been a lifesaver for my workflow. I highly recommend it!",
    author: "Samantha K.",
    role: "Software Engineer",
    avatar: "/avatar3.jpg",
  },
  {
    text: "I love how intuitive and smart Voxify is. It makes life so much easier!",
    author: "Alex R.",
    role: "UX Designer",
    avatar: "/avatar4.jpg",
  },
  {
    text: "Hands down the best AI assistant I've ever used. Voxify is revolutionary!",
    author: "Chris B.",
    role: "Product Manager",
    avatar: "/avatar5.jpg",
  },
];

export const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative flex items-center justify-center h-[450px] w-full">
      <div className="relative w-[90%] max-w-2xl h-[300px]">
        {testimonials.map((testimonial, index) => {
          const isActive = index === currentIndex;
          const isNext = index === (currentIndex + 1) % testimonials.length;

          return (
            <motion.div
              key={index}
              initial={{ opacity: isActive ? 1 : 0.6, scale: isActive ? 1 : 1.05 }}
              animate={{ opacity: isActive ? 1 : 0.5, scaleX: isActive ? 1.05 : 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`absolute top-0 left-1/2 -translate-x-1/2 mx-auto p-8 text-white bg-blue-500 rounded-xl shadow-2xl transition-all ${
                isActive ? "z-20 w-[100%]" : isNext ? "z-10 w-[106%] opacity-70" : "z-0 hidden"
              }`}
              style={{
                transform: isNext ? "translateY(10px)" : "translateY(0px)",
                minHeight: isActive ? "260px" : "260px",
              }}
            >
              <p className="text-xl leading-relaxed">{testimonial.text}</p>
              <div className="mt-5 flex items-center space-x-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.author}</h4>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
        <button
          onClick={prevSlide}
          className="absolute left-[-120px] top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[-120px] top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
};
