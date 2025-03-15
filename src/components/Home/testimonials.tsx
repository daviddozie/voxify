"use client";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Navigation, EffectCoverflow } from "swiper/modules";

const testimonials = [
  {
    name: "Lila M.",
    role: "Tech Enthusiast",
    image: "/profile.jpg",
    text: "What I love about Voxify is its ability to learn and adapt to my preferences. The AI feels so natural, and the premium plan has everything I need to stay connected. It’s the future of smart assistance!",
  },
  {
    name: "James D.",
    role: "Software Engineer",
    image: "/profile.jpg",
    text: "Voxify has revolutionized the way I work. I can now focus on what matters without worrying about the small stuff.",
  },
  {
    name: "Emma W.",
    role: "Product Manager",
    image: "/profile.jpg",
    text: "An incredible tool! The AI's ability to understand context and provide meaningful suggestions is top-notch.",
  },
];

const Rates = [
  { quantity: "95+", label: "Satisfaction Rate" },
  { quantity: "1m", label: "Over 1 Million Tasks Completed" },
  { quantity: "20+", label: "Available in 20+ Languages" },
]

export const Testimonials = () => {
  return (
    <>
      <div className="py-[60px] bg-[#040411] px-[100px] relative">
        <div className="flex justify-center">
          <Button className="bg-white/10 py-[10px] px-[15px] backdrop-blur-lg border-white/10 border text-sm font-normal roboto-mono rounded-[24px]">
            Testimonial
          </Button>
        </div>
        <h2 className="text-[32px] font-bold text-white poppins my-3 text-center">
          Join Thousands Who Simplify Their<br /> Lives with Voxify
        </h2>
        <p className="text-sm font-normal text-center text-[#989898] roboto-mono">
          Discover how Voxify transforms daily tasks into effortless moments.
        </p>

        {/* Swiper Container */}
        <div className="relative max-w-3xl mx-auto">
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={1.4}
            spaceBetween={-100}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 1.7 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative p-6 text-white text-center transition-transform duration-500">
                  <div className="bg-blue-600 p-6 rounded-lg shadow-lg">
                    <p className="text-lg">{testimonial.text}</p>
                    <div className="mt-4 flex items-center gap-3 justify-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-1/2 -left-12 transform -translate-y-1/2">
            <button className="swiper-button-prev flex items-center justify-center w-12 h-12 rounded-full border border-white bg-white shadow-lg hover:bg-gray-200">
              <ChevronLeft className="text-gray-700 w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2">
            <button className="swiper-button-next flex items-center justify-center w-12 h-12 rounded-full border border-white bg-white shadow-lg hover:bg-gray-200">
              <ChevronRight className="text-gray-700 w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-[150px] justify-center">
          {Rates.map((rate, index) => (
            <div key={index}>
              <h2 className="font-bold text-center text-[32px] text-white poppins">{rate.quantity}</h2>
              <p className="text-[12px] roboto-mono text-[#989898] ">{rate.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
