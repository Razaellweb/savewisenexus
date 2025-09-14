import React from 'react'

const Products = () => {
  return (
    <div className='w-full mt-[4rem] md:mt-[6rem]'>
      <div className="flex items-center flex-wrap justify-between">
        <div className="w-[97%] md:w-[62%] 2xl:w-[52%] md:left-0">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
            What you get with <span className="text-[#facc15]">SaveWise Nexus</span>
          </h1>
          <p className="text-base pt-3.5 text-white/80 text-center md:text-left">
            Built for Nigerians: automate savings, invest with confidence, access instant loans, and run trusted Ajo/Esusu group savings — all in one app.
          </p>
        </div>
        <div className='w-fit right-0 mt-4 md:mt-0 mx-auto md:mx-0'>
          <div className='w-fit bg-white/5 border border-white/10 px-3 py-3 rounded-full flex items-center'>
            <button className='px-5 py-2 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#0f766e] text-white text-base cursor-pointer'>Personal</button>
            <button className='px-5 py-2 rounded-full text-white/80 text-base cursor-pointer'>Business</button>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-[3.5rem]">
        <article className='bg-[#0e1424] border border-white/10 rounded-2xl p-6'>
          <h2 className="text-xl">Automated Savings</h2>
          <p className="text-base text-white/70 mt-2">
            Set your debit date, we handle retries, and you watch your stash grow. Goal vaults keep you disciplined.
          </p>
        </article>

        <article className='bg-[#0e1424] border border-white/10 rounded-2xl p-6'>
          <h2 className="text-xl">Locked Savings Vaults</h2>
          <p className="text-base text-white/70 mt-2">
            Lock funds to earn better returns. Optional early-withdrawal penalty to stay consistent.
          </p>
        </article>

        <article className='bg-[#0e1424] border border-white/10 rounded-2xl p-6'>
          <h2 className="text-xl">Curated Investments</h2>
          <p className="text-base text-white/70 mt-2">
            Access low‑risk options like government bonds with transparent fees and performance monitoring.
          </p>
        </article>

        <article className='bg-[#0e1424] border border-white/10 rounded-2xl p-6'>
          <h2 className="text-xl">Instant Collateral‑backed Loans</h2>
          <p className="text-base text-white/70 mt-2">
            Borrow up to 80% of your savings instantly. Auto‑debit repayments keep you on track.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Products