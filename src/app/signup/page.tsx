import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="mt-[4rem] md:mt-[6.5rem] mb-[6rem]">
      <section className="w-[97%] md:w-[480px] mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-semibold">Create your account</h1>
        <p className="text-white/70 mt-2 text-sm md:text-base">
          Join SaveWise Nexus to automate savings, invest smartly, and access instant loans.
        </p>

        <form className="mt-6 space-y-4" action="#" method="post">
          <div>
            <label htmlFor="name" className="block text-sm mb-1 text-white/80">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="w-full rounded-lg bg-[#0b1020] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#1d4ed8]"
              placeholder="Adaeze Okafor"
            />
          </div>

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
              autoComplete="new-password"
              className="w-full rounded-lg bg-[#0b1020] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#1d4ed8]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 rounded-full text-white text-base bg-gradient-to-r from-[#1d4ed8] to-[#0f766e]"
          >
            Create account
          </button>
        </form>

        <p className="mt-5 text-sm text-white/70 text-center">
          Already have an account? {" "}
          <Link href="/login" className="text-[#93c5fd] hover:underline">
            Log in
          </Link>
        </p>
      </section>
    </div>
  );
}
