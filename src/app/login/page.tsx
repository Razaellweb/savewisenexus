import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mt-[4rem] md:mt-[6.5rem] mb-[6rem]">
      <section className="w-[97%] md:w-[480px] mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-semibold">Welcome back</h1>
        <p className="text-white/70 mt-2 text-sm md:text-base">
          Log in to access your vaults, investments, and loans.
        </p>

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
              className="w-full rounded-lg bg-[#0b1020] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#1d4ed8]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1 text-white/80">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg bg-[#0b1020] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#1d4ed8]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 rounded-full text-white text-base bg-gradient-to-r from-[#1d4ed8] to-[#0f766e]"
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
      </section>
    </div>
  );
}
