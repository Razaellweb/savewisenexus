import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mt-[4rem] md:mt-[6.5rem] mb-[6rem]">
      <section className="w-[97%] md:w-[900px] mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/5">
        <div className="grid md:grid-cols-2">
          {/* Left info panel */}
          <div className="relative hidden md:flex flex-col justify-between p-8 bg-gradient-to-br from-[#0b1a3a] via-[#0b2534] to-[#0c2b2a]">
            <div>
              <div className="flex items-center gap-2 text-xs text-white/80">
                <span className="inline-block w-2 h-2 rounded-full bg-[#22d3ee]" />
                Consistent returns
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                Welcome back
              </h2>
              <p className="mt-2 text-white/80">
                Pick up where you left off. Access your vaults, investments, and loans securely.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1d4ed8]/20 text-[#93c5fd]">✓</span>
                  2FA ready and device verification
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0f766e]/20 text-[#6ee7b7]">✓</span>
                  Encrypted sessions and bank-grade security
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#fde68a]">✓</span>
                  Instant support during business hours
                </li>
              </ul>
            </div>

            <div className="mt-8 text-xs text-white/60">CBN & NDPR-aligned • BVN verification</div>

            {/* Decorative orbs */}
            <span className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[#1d4ed8]/30 blur-2xl" />
            <span className="pointer-events-none absolute bottom-10 -left-6 h-28 w-28 rounded-full bg-[#0f766e]/30 blur-2xl" />
          </div>

          {/* Right form panel */}
          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-semibold">Log in to your account</h1>
            <p className="text-white/70 mt-2 text-sm md:text-base">
              Enter your credentials to continue.
            </p>

            {/* Social auth (placeholder) */}
            <div className="mt-5">
              <button
                type="button"
                className="w-full py-2.5 rounded-full border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 transition-colors text-sm"
                aria-label="Continue with Google"
              >
                Continue with Google
              </button>
            </div>

            {/* Divider */}
            <div className="mt-5 flex items-center gap-3 text-white/40 text-xs">
              <span className="h-px flex-1 bg-white/10" />
              OR
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <form className="mt-6 space-y-4" action="#" method="post">
              <div>
                <label htmlFor="email" className="block text-sm mb-1 text-white/80">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg bg-[#0b1020] border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm mb-1 text-white/80">
                    Password
                  </label>
                  <Link href="#" className="text-xs text-[#93c5fd] hover:underline">Forgot password?</Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="w-full rounded-lg bg-[#0b1020] border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-full text-white text-base bg-gradient-to-r from-[#1d4ed8] to-[#0f766e] hover:from-[#1a43bb] hover:to-[#0d6a62] transition-colors"
              >
                Log in
              </button>
            </form>

            <p className="mt-5 text-sm text-white/70 text-center">
              New to SaveWise Nexus? {" "}
              <Link href="/signup" className="text-[#93c5fd] hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
