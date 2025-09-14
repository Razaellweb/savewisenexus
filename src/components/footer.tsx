import { MailsIcon, PhoneIcon, MapPinIcon, ShieldCheck } from "lucide-react";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#0e1424] mt-[7rem] flex items-center justify-center border-t border-white/10">
      <div className="w-[98%] md:w-[90%] 2xl:w-[80%] mt-[3.5rem] mb-[2rem]">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="left-0 flex gap-3 items-center">
            <span className="inline-block w-7 h-7 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#0f766e] shadow-[0_0_0_4px_rgba(255,255,255,0.05)]" />
            <h1 className="text-2xl">SaveWise Nexus</h1>
          </div>

          <div className="flex items-center gap-1 mt-[1.2rem] md:mt-[2.5rem]">
            <h1 className="text-lg md:text-xl px-2 md:px-5 py-2 rounded-full cursor-pointer">
              <Link href="/">Home</Link>
            </h1>
            <h1 className="text-lg md:text-xl px-2 md:px-5 py-2 rounded-full cursor-pointer">
              <a href="#features">Features</a>
            </h1>
            <h1 className="text-lg md:text-xl px-2 md:px-5 py-2 rounded-full cursor-pointer">
              <a href="#pricing">Pricing</a>
            </h1>
            <h1 className="text-lg md:text-xl px-2 md:px-5 py-2 rounded-full cursor-pointer">
              <a href="#faq">FAQ</a>
            </h1>
            <h1 className="text-lg md:text-xl px-2 md:px-5 py-2 rounded-full cursor-pointer">
              <a href="#contact">Contact</a>
            </h1>
          </div>

          <div className="w-full h-px bg-white/10 mt-[1.5rem] md:mt-[2.5rem]"></div>

          <div className="flex items-center gap-3 mt-[1.5rem] md:mt-[2.5rem] flex-wrap text-white/80">
            <h1 className="flex items-center gap-2 text-lg md:text-xl px-2 md:px-5 py-2 rounded-full">
              <MailsIcon className="w-5 h-5 text-[#facc15]" /> support@savewisenexus.com
            </h1>
            <h1 className="flex items-center gap-2 text-lg md:text-xl px-2 md:px-5 py-2 rounded-full">
              <PhoneIcon className="w-5 h-5 text-[#facc15]" /> +234 (0) 700-SAVEWISE
            </h1>
            <h1 className="flex items-center gap-2 text-lg md:text-xl px-2 md:px-5 py-2 mx-auto rounded-full">
              <MapPinIcon className="w-5 h-5 text-[#facc15]" /> Lagos, Nigeria
            </h1>
          </div>

          <div className="w-full h-px bg-white/10 mt-[1.5rem] md:mt-[2.5rem]"></div>

          <div className="w-full xl:flex items-center justify-between mt-[1.5rem] md:mt-[2.5rem] px-3 py-3 bg-white/5 border border-white/10 rounded-full hidden">
            <div className="flex items-center gap-3 text-sm text-white/70">
              <ShieldCheck className="w-4 h-4 text-[#facc15]" />
              <span>BVN verification • CBN-compliant • NDPR aligned</span>
            </div>

            <div className="w-fit">
              <h1 className="text-base text-white/70">
                © {new Date().getFullYear()} SaveWise Nexus. All rights reserved.
              </h1>
            </div>

            <div className="w-fit text-white/70 text-sm">
              Privacy Policy | Terms of Service
            </div>
          </div>

          <div className="w-[98%] mx-auto md:hidden flex flex-col items-center justify-center bg白/5 border border-white/10 rounded-[1rem] mt-[3rem] md:mt-[2.5rem] text-white/80">
            <div className="flex items-center gap-2 mt-4 text-sm">
              <ShieldCheck className="w-4 h-4 text-[#facc15]" /> BVN verified • Paystack • Flutterwave
            </div>
            <h1 className="text-base text-white/60 mt-3">
              © {new Date().getFullYear()} SaveWise Nexus
            </h1>
            <h1 className="text-base text-white/60 mt-3 mb-5">Privacy Policy | Terms of Service</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
