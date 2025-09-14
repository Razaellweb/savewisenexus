import React from "react";

const Cases = () => {
  return (
    <div className="w-full mt-[4rem] md:mt-[6rem]">
      <div className="w-[97%] mx-auto md:mx-0 md:w-[70%] left-0">
        <h1 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4 text-[#facc15]">
          Use cases
        </h1>
        <p className="text-base pt-3.5 text-white/70 text-center md:text-left">
          Whether you’re a student, freelancer, or small business owner, SaveWise Nexus adapts to your goals with simple, automated money tools.
        </p>
      </div>

      <div className="w-full flex justify-between items-center flex-wrap mt-[3.5rem]">
        <div className="relative w-[97%] mx-auto md:mx-0 md:w-[48%] bg-white/5 flex items-center justify-center rounded-[1.5rem] border border-white/10">
          <div className="p-6 md:p-8 grid grid-cols-2 gap-4 z-10 w-full">
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">Salary goals</h1>
              <p className="text-white/60 text-sm">Auto‑stash part of each paycheck</p>
            </div>
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">Ajo groups</h1>
              <p className="text-white/60 text-sm">Rotating payouts, BVN‑verified</p>
            </div>
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">School fees</h1>
              <p className="text-white/60 text-sm">Lock savings, withdraw when due</p>
            </div>
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">Business float</h1>
              <p className="text-white/60 text-sm">Loan up to 80% of savings</p>
            </div>
          </div>
        </div>

        <div className="w-[97%] mx-auto md:mx-0 md:w-[48%] mt-5 md:mt-0">
          <h1 className="text-xl text-center md:text-left font-semibold">
            For Individuals
          </h1>
          <p className="text-base pt-3 text-white/70 text-center md:text-left">
            Save for rent, fees, or emergencies with auto‑debits and locked vaults. Invest safely and access credit when you need it.
          </p>
          <div className="w-full flex items-center flex-wrap md:mt-[2.5rem]">
            <div className="w-[80%] mx-auto md:mx-0 md:w-[33.3%] py-9 md:py-0 border-b border-b-white/10 md:border-b-0 md:border-r md:border-r-white/10">
              <h1 className="text-5xl pt-1.5 md:pt-4 text-[#facc15] text-center md:text-left">78%</h1>
              <p className="text-base md:w-[70%] pt-3 text-white/70 text-center md:text-left">Reach goals faster</p>
            </div>

            <div className="w-[80%] mx-auto md:mx-0 md:w-[33.3%] py-9 md:py-0 md:pl-6 border-b border-b-white/10 md:border-b-0 md:border-r md:border-r-white/10">
              <h1 className="text-5xl pt-1.5 md:pt-4 text-[#facc15] text-center md:text-left">63%</h1>
              <p className="text-base md:w-[80%] 2xl:w-[70%] pt-3 text-white/70 text-center md:text-left">Better budgeting</p>
            </div>

            <div className="w-[80%] mx-auto md:mx-0 md:w-[33.3%] py-9 md:py-0 md:pl-6 md:border-r md:border-r-white/10">
              <h1 className="text-5xl pt-1.5 md:pt-4 text-[#facc15] text-center md:text-left">91%</h1>
              <p className="text-base md:w-[80%] 2xl:w-[70%] pt-3 text-white/70 text-center md:text-left">Reduced money stress</p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center md:hidden ">
            <button className="w-fit mx-auto px-7 py-3 rounded-full bg-white/5 border border-white/10 text-base cursor-pointer mt-[2rem]">
              Learn more
            </button>
          </div>

          <div className="w-full hidden md:block ">
            <button className=" px-7 py-3 rounded-full bg-white/5 border border-white/10 text-base cursor-pointer mt-[2rem]">
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:flex justify-between items-center mt-[3rem] flex-col-reverse md:flex-row hidden">
        <div className="w-[97%] mx-auto md:mx-0 md:w-[48%] mt-5 md:mt-0 ">
          <h1 className="text-xl text-center md:text-left font-semibold">For Business</h1>
          <p className="text-base text-center md:text-left pt-3 text-white/70">
            Stabilize cashflow with automated saving, earn on idle funds, and get collateral‑backed working capital quickly.
          </p>
          <div className="w-full flex items-center md:mt-[2.5rem] flex-wrap">
            <div className="w-[80%] mx-auto md:mx-0 md:w-[33.3%] py-9 md:py-0 border-b border-b-white/10 md:border-b-0 md:border-r md:border-r-white/10">
              <h1 className="text-5xl pt-1.5 md:pt-4 text-[#facc15] text-center md:text-left">65%</h1>
              <p className="text-base md:w-[70%] pt-3 text-white/70 text-center md:text-left">Improved cashflow</p>
            </div>

            <div className="w-[80%] mx-auto md:mx-0 md:w-[33.3%] py-9 md:py-0 md:pl-6 border-b border-b-white/10 md:border-b-0 md:border-r md:border-r-white/10">
              <h1 className="text-5xl pt-1.5 md:pt-4 text-[#facc15] text-center md:text-left">70%</h1>
              <p className="text-base md:w-[80%] 2xl:w-[70%] pt-3 text-white/70 text-center md:text-left">Faster growth</p>
            </div>

            <div className="w-[80%] mx-auto md:mx-0 md:w-[33.3%] py-9 md:py-0 md:pl-6 md:border-r md:border-r-white/10">
              <h1 className="text-5xl pt-1.5 md:pt-4 text-[#facc15] text-center md:text-left">45%</h1>
              <p className="text-base md:w-[80%] 2xl:w-[70%] pt-3 text-white/70 text-center md:text-left">Less payroll stress</p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center md:hidden ">
            <button className="w-fit mx-auto px-7 py-3 rounded-full bg-white/5 border border-white/10 text-base cursor-pointer mt-[2rem]">
              Learn more
            </button>
          </div>

          <div className="w-full hidden md:block ">
            <button className=" px-7 py-3 rounded-full bg-white/5 border border-white/10 text-base cursor-pointer mt-[2rem]">
              Learn more
            </button>
          </div>
        </div>

        <div className="relative w-[97%] mx-auto md:mx-0 md:w-[48%] bg-white/5 flex items-center justify-center rounded-[1.5rem] border border-white/10">
          <div className="p-8 grid grid-cols-2 gap-4 z-10 w-full">
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">Startups</h1>
              <p className="text-white/60 text-sm">Save runway automatically</p>
            </div>
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">Cashflow</h1>
              <p className="text-white/60 text-sm">Auto‑debit loan repayments</p>
            </div>
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">Expansion</h1>
              <p className="text-white/60 text-sm">Invest idle funds safely</p>
            </div>
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">Payments</h1>
              <p className="text-white/60 text-sm">Paystack/Flutterwave ready</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile duplicate for business block */}
      <div className="w-full mt-[3rem] block md:hidden">
        <div className="relative w-[97%] mx-auto bg-white/5 flex items-center justify-center rounded-[1.5rem] border border-white/10">
          <div className="p-8 grid grid-cols-2 gap-4 z-10 w-full">
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">Startups</h1>
              <p className="text-white/60 text-sm">Save runway automatically</p>
            </div>
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">Cashflow</h1>
              <p className="text-white/60 text-sm">Auto‑debit loan repayments</p>
            </div>
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">Expansion</h1>
              <p className="text-white/60 text-sm">Invest idle funds safely</p>
            </div>
            <div className="border border-white/10 rounded-[1rem] space-y-2 bg-[#0e1424] flex flex-col items-center justify-center py-6 px-6 text-center">
              <h1 className="text-base md:text-xl">Payments</h1>
              <p className="text-white/60 text-sm">Paystack/Flutterwave ready</p>
            </div>
          </div>
        </div>

        <div className="w-[97%] mx-auto mt-5">
          <h1 className="text-xl text-center font-semibold">For Business</h1>
          <p className="text-base text-center pt-3 text-white/70">
            Stabilize cashflow with automated saving, earn on idle funds, and get collateral‑backed working capital quickly.
          </p>
          <div className="w-full flex items-center flex-wrap">
            <div className="w-[80%] mx-auto md:w-[33.3%] py-9 border-b border-b-white/10">
              <h1 className="text-5xl pt-1.5 text-[#facc15] text-center">65%</h1>
              <p className="text-base pt-3 text-white/70 text-center">Improved cashflow</p>
            </div>
            <div className="w-[80%] mx-auto md:w-[33.3%] py-9 border-b border-b-white/10">
              <h1 className="text-5xl pt-1.5 text-[#facc15] text-center">70%</h1>
              <p className="text-base pt-3 text-white/70 text-center">Faster growth</p>
            </div>
            <div className="w-[80%] mx-auto md:w-[33.3%] py-9">
              <h1 className="text-5xl pt-1.5 text-[#facc15] text-center">45%</h1>
              <p className="text-base pt-3 text-white/70 text-center">Less payroll stress</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="w-fit mx-auto px-7 py-3 rounded-full bg-white/5 border border-white/10 text-base cursor-pointer mt-[2rem]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
