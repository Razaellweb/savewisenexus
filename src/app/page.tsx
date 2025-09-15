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
          <div className="w-full aspect-[4/5] rounded-[1.25rem] border border-white/10 shadow-2xl overflow-hidden bg-black">
            {/* Graphical fintech illustration (inline SVG) */}
            <svg viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <radialGradient id="bgGrad" cx="50%" cy="0%" r="90%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="60%" stopColor="#0a0a0a" />
                  <stop offset="100%" stopColor="#000000" />
                </radialGradient>
                <linearGradient id="accent1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#0f766e" />
                </linearGradient>
                <linearGradient id="accent2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background */}
              <rect width="800" height="1000" fill="url(#bgGrad)" />

              {/* Soft orbs */}
              <g opacity="0.35" filter="url(#glow)">
                <circle cx="640" cy="160" r="140" fill="url(#accent1)" />
                <circle cx="120" cy="320" r="120" fill="url(#accent2)" />
                <circle cx="700" cy="740" r="100" fill="url(#accent1)" />
              </g>

              {/* Decorative grid */}
              <g opacity="0.15" stroke="#8b8fa3">
                {Array.from({ length: 16 }).map((_, i) => (
                  <line key={`v-${i}`} x1={50 + i * 45} y1={80} x2={50 + i * 45} y2={920} strokeWidth="1" />
                ))}
                {Array.from({ length: 16 }).map((_, i) => (
                  <line key={`h-${i}`} x1={50} y1={80 + i * 52} x2={750} y2={80 + i * 52} strokeWidth="1" />
                ))}
              </g>

              {/* Phone mockup */}
              <g transform="translate(160,140)">
                <rect x="0" y="0" rx="36" ry="36" width="480" height="820" fill="#0b0b0b" stroke="url(#accent1)" strokeWidth="2" />
                <rect x="18" y="18" rx="28" ry="28" width="444" height="784" fill="#0f1115" stroke="#1f2937" strokeWidth="2" />
                <rect x="200" y="10" width="80" height="8" rx="4" fill="#1f2937" />

                {/* Header bar */}
                <g transform="translate(38,44)">
                  <rect x="0" y="0" width="368" height="36" rx="10" fill="#111317" stroke="#1f2937" strokeWidth="1" />
                  <rect x="8" y="8" width="120" height="20" rx="6" fill="#0b122a" />
                  <text x="16" y="23" fontFamily="system-ui, sans-serif" fontSize="12" fill="#cbd5e1">SaveWise Vault</text>
                  <circle cx="344" cy="18" r="6" fill="url(#accent2)" />
                </g>

                {/* Balance card */}
                <g transform="translate(38,100)">
                  <rect x="0" y="0" width="368" height="120" rx="16" fill="#0a0f1d" stroke="#1f2937" />
                  <text x="18" y="36" fontFamily="system-ui, sans-serif" fontSize="14" fill="#9ca3af">Total Balance</text>
                  <text x="18" y="78" fontFamily="system-ui, sans-serif" fontSize="34" fill="#e5e7eb">₦ 1,245,900</text>
                  <rect x="260" y="24" width="96" height="28" rx="8" fill="url(#accent1)" />
                  <text x="284" y="42" fontFamily="system-ui, sans-serif" fontSize="12" fill="#ffffff">+ 3.2% ↑</text>
                </g>

                {/* Charts */}
                <g transform="translate(38,246)">
                  <rect x="0" y="0" width="368" height="240" rx="16" fill="#0a0f1d" stroke="#1f2937" />
                  {/* Bars */}
                  <g fill="url(#accent1)">
                    <rect x="24" y="160" width="24" height="56" rx="6" />
                    <rect x="64" y="120" width="24" height="96" rx="6" opacity="0.85" />
                    <rect x="104" y="88" width="24" height="128" rx="6" opacity="0.75" />
                    <rect x="144" y="132" width="24" height="84" rx="6" opacity="0.9" />
                    <rect x="184" y="60" width="24" height="156" rx="6" />
                    <rect x="224" y="96" width="24" height="120" rx="6" opacity="0.8" />
                    <rect x="264" y="142" width="24" height="74" rx="6" opacity="0.9" />
                    <rect x="304" y="40" width="24" height="176" rx="6" />
                  </g>
                  {/* Line */}
                  <polyline points="24,180 64,156 104,132 144,148 184,108 224,128 264,150 304,96" fill="none" stroke="url(#accent2)" strokeWidth="3" />
                </g>

                {/* Actions */}
                <g transform="translate(38,506)">
                  <rect x="0" y="0" width="368" height="116" rx="16" fill="#0a0f1d" stroke="#1f2937" />
                  <g>
                    <rect x="18" y="18" width="100" height="80" rx="12" fill="#0b122a" stroke="#1f2937" />
                    <circle cx="68" cy="50" r="18" fill="url(#accent1)" />
                    <text x="48" y="86" fontFamily="system-ui, sans-serif" fontSize="12" fill="#cbd5e1">Save</text>
                  </g>
                  <g>
                    <rect x="134" y="18" width="100" height="80" rx="12" fill="#0b122a" stroke="#1f2937" />
                    <circle cx="184" cy="50" r="18" fill="url(#accent2)" />
                    <text x="160" y="86" fontFamily="system-ui, sans-serif" fontSize="12" fill="#cbd5e1">Invest</text>
                  </g>
                  <g>
                    <rect x="250" y="18" width="100" height="80" rx="12" fill="#0b122a" stroke="#1f2937" />
                    <circle cx="300" cy="50" r="18" fill="url(#accent1)" />
                    <text x="278" y="86" fontFamily="system-ui, sans-serif" fontSize="12" fill="#cbd5e1">Borrow</text>
                  </g>
                </g>

                {/* Coins */}
                <g transform="translate(360,660)" filter="url(#glow)">
                  <circle cx="0" cy="0" r="34" fill="url(#accent2)" />
                  <circle cx="70" cy="30" r="22" fill="url(#accent1)" />
                </g>
              </g>
            </svg>
          </div>
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
