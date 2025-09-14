"use client";

import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

// Testimonials data
const testimonials = [
  {
    text: "SaveWise Nexus helped me automate my savings. I finally hit my goal without thinking about it.",
    author: "Ada, Product Designer",
  },
  {
    text: "I invested in government bonds on SaveWise and loved the transparency. Returns were exactly as stated.",
    author: "Seyi, Small Business Owner",
  },
  {
    text: "The instant loan backed by my savings came through in minutes. Auto‑debits made repayment painless.",
    author: "Tolu, Freelancer",
  },
  {
    text: "Our Ajo group runs smoothly now with BVN checks and rotating payouts handled automatically.",
    author: "Chidera, Student",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(1);

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const getIndex = (offset: number) =>
    (current + offset + testimonials.length) % testimonials.length;

  return (
    <div className="w-full mt-[4rem] md:mt-[6rem] ">
      <div className="flex items-center flex-wrap justify-between">
        <div className="w-[97%] md:w-[62%] 2xl:w-[52%] left-0">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
            What Nigerians say about <span className="text-[#facc15]">SaveWise Nexus</span>
          </h1>
          <p className="text-base pt-3.5 text-white/70 text-center md:text-left">
            Real stories from customers using automated savings, curated investments, instant loans, and Ajo/Esusu.
          </p>
        </div>
        <div className="w-fit right-0 mt-4 md:mt-0 mx-auto md:mx-0">
          <div className="w-fit bg-white/5 px-3 py-3 rounded-full border border-white/10 flex items-center">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#0f766e] text-white text-base cursor-pointer">
              Personal
            </button>
            <button className="px-5 py-2 rounded-full text-white/80 text-base cursor-pointer">
              Business
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center flex-wrap mt-[2rem] md:mt-[3.5rem] justify-center relative">
        {/* Left Arrow */}
        <button
          className="absolute cursor-pointer left-0 z-10 bg-white/5 rounded-full p-2 hover:bg-white/10 border border-white/10 transition md:block hidden"
          onClick={prevTestimonial}
          aria-label="Previous"
        >
          <ArrowLeftIcon className="w-6 h-6 text-[#facc15]" />
        </button>

        {/* Left (left-shadow only, pushed back) */}
        <article
          className="w-[96%] md:w-[33.3%] flex-col items-center justify-center space-y-8 px-6 2xl:px-14 relative transition-all duration-300 scale-90 -translate-x-6 z-0 md:flex hidden"
          style={{ zIndex: 1 }}
        >
          {/* Left shadow overlay */}
          <div className="absolute left-0 top-0 h-full w-[80%] pointer-events-none bg-gradient-to-r from-[#0b0f14] to-transparent" />
          <div className="w-full flex items-center justify-between">
            <div className="w-[40%] h-[0.1vh] bg-white/10"></div>
            <div className="text-white/60 text-xs">Review</div>
            <div className="w-[40%] h-[0.1vh] bg-white/10"></div>
          </div>
          <p className="text-base text-center text-white/70">
            {testimonials[getIndex(-1)].text}
          </p>
          <h1 className="text-sm text-[#facc15]">
            {testimonials[getIndex(-1)].author}
          </h1>
        </article>

        {/* Center (focused, pop out) */}
        <article
          className="relative w-[87%] mx-auto md:mx-0 md:w-[33.3%] mt-5 md:mt-0 md:border-0 border border-white/10 flex flex-col items-center justify-center space-y-8 pt-6 md:pt-0 px-6 2xl:px-14 transition-all duration-300 bg-transparent rounded-xl scale-110 z-20"
          style={{ zIndex: 2 }}
        >
          <div className="absolute left-0 top-0 h-full w-[30%] pointer-events-none bg-gradient-to-r from-[#0b0f14] to-transparent block md:hidden" />
          <div className="w-full flex items-center justify-between">
            <div className="w-[40%] h-[0.1vh] bg-white/10"></div>
            <div className="text-white/60 text-xs">Featured review</div>
            <div className="w-[40%] h-[0.1vh] bg-white/10"></div>
          </div>
          <p className={`text-base text-center text-white`}>
            {testimonials[getIndex(0)].text}
          </p>
          <h1 className="text-sm text-[#facc15]">
            {testimonials[getIndex(0)].author}
          </h1>
          <div className="absolute right-0 top-0 h-full w-[30%] pointer-events-none bg-gradient-to-l from-[#0b0f14] to-transparent block md:hidden" />
        </article>

        {/* Right (right-shadow only, pushed back) */}
        <article
          className="w-[96%] md:w-[33.3%] flex-col items-center justify-center space-y-8 px-6 2xl:px-14 relative transition-all duration-300 scale-90 translate-x-6 z-0 md:flex hidden"
          style={{ zIndex: 1 }}
        >
          {/* Right shadow overlay */}
          <div className="absolute right-0 top-0 h-full w-[80%] pointer-events-none bg-gradient-to-l from-[#0b0f14] to-transparent" />
          <div className="w-full flex items-center justify-between">
            <div className="w-[40%] h-[0.1vh] bg-white/10"></div>
            <div className="text-white/60 text-xs">Review</div>
            <div className="w-[40%] h-[0.1vh] bg-white/10"></div>
          </div>
          <p className="text-base text-center text-white/70">
            {testimonials[getIndex(1)].text}
          </p>
          <h1 className="text-sm text-[#facc15]">
            {testimonials[getIndex(1)].author}
          </h1>
        </article>

        {/* Right Arrow */}
        <button
          className="absolute cursor-pointer right-0 z-10 bg-white/5 rounded-full p-2 transition border border-white/10 md:block hidden"
          onClick={nextTestimonial}
          aria-label="Next"
        >
          <ArrowRightIcon className="w-6 h-6 text-[#facc15]" />
        </button>

        {/* Mobile navigation arrows */}
        <div className="flex w-full justify-center items-center gap-4 mt-9 md:hidden">
          <button
            className="bg-white/5 rounded-full border border-white/10 p-2 hover:bg-white/10 transition"
            onClick={prevTestimonial}
            aria-label="Previous"
          >
            <ArrowLeftIcon className="w-7 h-7 text-[#facc15]" />
          </button>
          <button
            className="bg-white/5 rounded-full border border-white/10 p-2 transition"
            onClick={nextTestimonial}
            aria-label="Next"
          >
            <ArrowRightIcon className="w-7 h-7 text-[#facc15]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
