import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Features = () => {
  return (
    <div className="w-full mt-[4rem] md:mt-[6rem]">
      <div className="w-[97%] mx-auto md:mx-0 md:w-[68%] left-0">
        <h1 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
          Powerful <span className="text-[#facc15]">features</span> built for Nigerians
        </h1>
        <p className="text-base pt-3.5 text-white/70 text-center md:text-left">
          SaveWise Nexus brings automated savings, curated investments, instant collateral‑backed loans, and Ajo/Esusu group savings into one secure, easy app.
        </p>
      </div>

      <div className="mt-[3.5rem] w-full flex items-start justify-between flex-wrap">
        <div className="w-[97%] mx-auto xl:mx-0 md:w-[23%] 2xl:w-[17.5%] bg-white/5 rounded-[1rem] py-6 md:py-11 pl-6 md:pl-11 md:pr-11 border border-white/10">
          <div className="flex gap-4 md:gap-0 overflow-x-scroll md:overflow-x-hidden md:flex-col md:space-y-5">
            <div className="w-fit md:w-full whitespace-nowrap rounded-full py-3 px-5 bg-[#0e1424] text-base cursor-pointer text-[#facc15] border border-white/10">
              Savings
            </div>

            <div className="w-fit md:w-full whitespace-nowrap rounded-full py-3 px-5 text-base cursor-pointer border border-white/10">
              Investments
            </div>

            <div className="w-fit md:w-full whitespace-nowrap rounded-full py-3 px-5 text-base cursor-pointer border border-white/10">
              Loans
            </div>

            <div className="w-fit md:w-full whitespace-nowrap rounded-full py-3 px-5 text-base cursor-pointer border border-white/10">
              Ajo/Esusu
            </div>
          </div>
        </div>

        <div className="w-[97%] mx-auto md:mx-0 md:w-[75%] 2xl:w-[79%] mt-4 md:mt-0 flex items-center justify-between flex-wrap">
          <div className="w-[97%] mx-auto md:mx-0 md:w-[49%] 2xl:w-[48%] mt-[4.5%] md:mt-0 bg-white/5 rounded-[1rem] px-8 py-11 md:px-11 md:py-14 2xl:py-11 border border-white/10">
            <h1 className="text-xl w-full flex items-center justify-between text-white">
              Automated savings that stick
              <span className="text-[#facc15]">
                <ArrowUpRightIcon className="w-6 h-6" />
              </span>
            </h1>

            <p className="text-base pt-4.5 text-white/70">
              Create auto‑debit plans with smart retries, set goals, and lock vaults for discipline. Watch your savings grow without stress.
            </p>
          </div>

          <div className="w-[97%] mx-auto md:mx-0 md:w-[49%] 2xl:w-[48%] mt-[4.5%] md:mt-0 bg-white/5 rounded-[1rem] px-8 py-11 md:px-11 md:py-14 2xl:py-11 border border-white/10">
            <h1 className="text-xl w-full flex items-center justify-between text-white">
              Low‑risk investments, transparent returns
              <span className="text-[#facc15]">
                <ArrowUpRightIcon className="w-6 h-6" />
              </span>
            </h1>

            <p className="text-base pt-4.5 text-white/70">
              Curated access to government bonds, T‑bills, and more. Clear fees, performance updates, and auto‑rollover.
            </p>
          </div>

          <div className="w-[97%] mx-auto md:mx-0 md:w-[49%] 2xl:w-[48%] mt-[4.5%] md:mt-[2%] 2xl:mt-[4%] bg-white/5 rounded-[1rem] px-8 py-8 md:px-11 md:py-11 border border-white/10">
            <h1 className="text-xl w-full flex items-center justify-between text-white">
              Instant loans up to 80% of savings
              <span className="text-[#facc15]">
                <ArrowUpRightIcon className="w-6 h-6" />
              </span>
            </h1>

            <p className="text-base pt-4.5 text-white/70">
              Access credit backed by your savings. Funds in minutes, auto‑debit repayments, and fair interest.
            </p>
          </div>

          <div className="w-[97%] mx-auto md:mx-0 md:w-[49%] 2xl:w-[48%] mt-[4.5%] md:mt-[2%] 2xl:mt-[4%] bg-white/5 rounded-[1rem] px-8 py-11 md:px-11 md:py-14 2xl:py-11 border border-white/10">
            <h1 className="text-xl w-full flex items-center justify-between text-white">
              Group savings (Ajo/Esusu)
              <span className="text-[#facc15]">
                <ArrowUpRightIcon className="w-6 h-6" />
              </span>
            </h1>

            <p className="text-base pt-4.5 text-white/70">
              Create secure rotating savings groups with BVN‑verified members, transparent schedules, and instant payouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
