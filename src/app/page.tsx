import Cases from "@/components/Home/cases";
import FAQ from "@/components/Home/faq";
import Features from "@/components/Home/features";
import Products from "@/components/Home/products";
import Testimonials from "@/components/Home/testimonials";
import CTA from "@/components/cta";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-[4rem] md:mt-[6.5rem] mb-[10rem]">
      {/* Hero */}
      <section className="w-full flex items-start flex-wrap justify-between">
        <div className="w-[97%] mx-auto md:w-[55%] text-center md:text-left">
          <div className="w-fit flex items-center mx-auto md:mx-0 gap-2 px-3 py-2.5 md:py-1.5 bg-white/5 border border-white/10 rounded-full">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#facc15]" />
              CBN & NDPR-aligned • BVN verification • Paystack/Flutterwave
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight font-semibold pt-5">
            Save, invest, and borrow —
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d4ed8] to-[#0f766e]"> wisely.</span>
          </h1>

          <p className="text-base md:text-lg pt-5 text-white/80">
            SaveWise Nexus is a mobile‑first fintech for Nigerians. Automate savings, grow with low‑risk investments like government bonds, access instant collateral‑backed loans up to 80% of your savings, and run trusted Ajo/Esusu — with BVN verification and seamless Paystack/Flutterwave payments.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-center md:justify-start mt-6">
            <Link href="/signup" className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-[#1d4ed8] to-[#0f766e] text-base">
              Start saving now
            </Link>
            <a href="#features" className="px-6 py-3 rounded-full text-base bg-white/5 border border-white/10">
              Explore features
            </a>
          </div>

          <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start mt-7 text-white/60 text-sm">
            <span>Trusted by 50,000+ Nigerians</span>
            <span className="hidden md:inline">•</span>
            <span>Insured vaults • Bank‑grade security</span>
          </div>
        </div>

        <div className="relative w-full md:w-[40%] mt-[2.5rem] md:mt-0">
          <div className="w-full aspect-[4/5] rounded-[1.25rem] bg-gradient-to-b from-[#0b122a] to-[#0a1a17] border border-white/5 shadow-2xl" />
        </div>
      </section>

      {/* Social proof / partners */}
      <section className="mt-12 md:mt-16" aria-label="partners">
        <div className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex flex-wrap items-center justify-center gap-6 text-white/60 text-xs md:text-sm">
          <span>Integrated with Paystack</span>
          <span>•</span>
          <span>Flutterwave</span>
          <span>•</span>
          <span>BVN verification</span>
          <span>•</span>
          <span>Govt. bonds marketplace</span>
        </div>
      </section>

      {/* Features anchor maps to existing components */}
      <div id="features" className="scroll-mt-24">
        <Products />
        <Features />
      </div>

      {/* Pricing */}
      <section id="pricing" className="w-full mt-[3.5rem] md:mt-[5rem]">
        <div className="w-[97%] mx-auto md:w-[70%]">
          <h2 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
            Simple, transparent <span className="text-[#facc15]">pricing</span>
          </h2>
          <p className="text-base pt-3.5 text-white/70 text-center md:text-left">
            No hidden fees. Competitive rates on savings and investments; fair interest on loans.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Savings */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl">Automated Savings</h3>
            <p className="text-white/70 mt-2">Free • Failed-debit retries • Goal vaults</p>
            <div className="mt-4 text-3xl font-semibold">Up to 12% p.a.</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Auto-debit plans</li>
              <li>Locked vaults</li>
              <li>Early withdrawal penalty optional</li>
            </ul>
          </div>
          {/* Investments */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl">Curated Investments</h3>
            <p className="text-white/70 mt-2">Government bonds • T-bills • Low-risk funds</p>
            <div className="mt-4 text-3xl font-semibold">13–18% p.a.</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Clear fee disclosure</li>
              <li>Auto-rollover options</li>
              <li>Daily performance updates</li>
            </ul>
          </div>
          {/* Loans */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl">Instant Loans</h3>
            <p className="text-white/70 mt-2">Collateral‑backed by your savings</p>
            <div className="mt-4 text-3xl font-semibold">Up to 80% LTV</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Auto‑debit repayments</li>
              <li>Transparent rates</li>
              <li>No paper forms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use cases (rename contextually) */}
      <Cases />

      {/* Testimonials */}
      <section id="social_proof" className="scroll-mt-24">
        <Testimonials />
      </section>

      {/* FAQ */}
      <div id="faq" className="scroll-mt-24">
        <FAQ />
      </div>

      {/* CTA */}
      <div id="contact" className="scroll-mt-24">
        <CTA />
      </div>

      {/* Security anchor placeholder for nav */}
      <div id="security" />
    </div>
  );
}
