import React from 'react'
import Link from "next/link";

const CTA = () => {
  return (
    <div className="mt-[7rem] w-[97%] mx-auto md:mx-0 md:w-full relative rounded-[1rem] overflow-hidden border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1d4ed8] to-[#0f766e] opacity-20" aria-hidden="true" />
      <div className="relative z-10 px-6 py-[3rem] bg-[#0b1020]/70 backdrop-blur rounded-[1rem]">
        <div className="w-[86%] md:w-[90%] mx-auto flex items-center flex-wrap justify-between">
          <div className="w-[96%] md:w-[67%] left-0">
            <h1 className="text-3xl md:text-3xl xl:text-4xl text-center md:text-left">
              Start your money journey with <span className="text-[#facc15]">SaveWise Nexus</span>
            </h1>
            <p className="text-base pt-3.5 text白/80 text-center md:text-left">
              Automate savings, invest in low‑risk options, and unlock instant collateral‑backed loans. Built for Nigerians with BVN verification and seamless Paystack/Flutterwave payments.
            </p>
          </div>
          <div className="w-fit right-0 mt-4 md:mt-0 mx-auto md:mx-0">
            <Link href="/signup" className='px-7 py-3 rounded-full text-white text-lg bg-gradient-to-r from-[#1d4ed8] to-[#0f766e] cursor-pointer mt-[2rem] inline-block'>
              Start saving now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA