import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JAM Growth Partners | Employer Cost Strategy, Benefits, Payroll & Private Equity Solutions",
  description:
    "JAM Growth Partners helps employers, brokers, advisors, and private equity-backed companies improve healthcare strategy, benefits, payroll efficiency, workforce cost optimization, and partnership growth.",
  keywords: [
    "employer cost strategy",
    "healthcare strategy",
    "benefits consulting",
    "payroll services",
    "PEO brokerage",
    "private equity portfolio companies",
    "workforce cost optimization",
    "broker partnerships",
    "referral partners",
  ],
};

const whyCards = [
  {
    title: "Clearer cost strategy",
    text: "We help leadership teams take a broader view of healthcare, benefits, and workforce-related expenses.",
  },
  {
    title: "Practical solution access",
    text: "Our platform connects employers with vetted strategies across multiple areas of need.",
  },
  {
    title: "Built for long-term relationships",
    text: "We work directly with employers and collaboratively with brokers, advisors, and referral partners.",
  },
];

const audienceCards = [
  {
    title: "Employers",
    text: "Growing businesses looking for better ways to manage healthcare, benefits, payroll, and workforce-related costs.",
  },
  {
    title: "Brokers",
    text: "Independent brokers who want additional solutions and support without replacing trusted client relationships.",
  },
  {
    title: "Advisors & Referral Partners",
    text: "Consultants, CPAs, financial professionals, and business leaders who want a credible partner for client introductions.",
  },
];

const solutionCards = [
  {
    title: "Healthcare & Benefits Strategy",
    bullets: [
      "Funding strategy support",
      "Healthcare cost management conversations",
      "Group health and ancillary solutions",
      "Benefits alignment for growing employers",
    ],
  },
  {
    title: "Workforce Cost Optimization",
    bullets: [
      "Tax-advantaged wellness strategies",
      "Employee engagement programs",
      "Employer cost-efficiency opportunities",
      "Support for long-term workforce planning",
    ],
  },
  {
    title: "Payroll, HR & PEO Solutions",
    bullets: [
      "Payroll service options",
      "HR infrastructure support",
      "PEO brokerage guidance",
      "Compliance-oriented solutions for growing teams",
    ],
  },
  {
    title: "Employee Protection & Supplemental Benefits",
    bullets: [
      "Voluntary benefit opportunities",
      "Protection-oriented employee offerings",
      "Individual health and related solutions",
      "Cross-sell support for existing employer relationships",
    ],
  },
];

const peCards = [
  {
    title: "Portfolio Company Support",
    text: "We help portfolio companies explore practical solutions around healthcare strategy, workforce cost management, payroll services, and employee benefits.",
  },
  {
    title: "Standardization Opportunities",
    text: "For firms with multiple operating companies, we help identify opportunities to create a more consistent approach across the portfolio.",
  },
  {
    title: "Operating Partner Collaboration",
    text: "We can work alongside operating partners, CFOs, brokers, and advisors to support employer-level execution without disrupting trusted relationships.",
  },
];

const partnerCards = [
  {
    title: "For Brokers",
    text: "We support brokers who want differentiated solutions, strategic collaboration, and additional ways to serve employer clients without replacing the relationship.",
  },
  {
    title: "For Referral Partners",
    text: "We work with professionals who have trusted executive relationships and want a credible platform to introduce when employer needs arise.",
  },
  {
    title: "For Advisors",
    text: "CPAs, consultants, financial professionals, and other advisors can partner with us when clients need support across workforce-related cost strategy.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <a href="#home" className="flex items-center gap-4 text-left">
            <img src="/logo.png" alt="JAM Growth Partners" className="h-14 w-auto" />
            <div className="leading-tight">
              <div className="text-2xl font-semibold tracking-tight">JAM Growth Partners</div>
              <div className="text-sm text-slate-500">
                Employer Cost Strategy & Workforce Solutions
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#solutions" className="hover:text-slate-900">Solutions</a>
            <a href="#private-equity" className="hover:text-slate-900">Private Equity</a>
            <a href="#partners" className="hover:text-slate-900">Partners</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/jeremiah-drobney-6032a750/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 md:inline-flex"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-600">
              Professional Sales Organization
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight leading-tight text-slate-900 md:text-6xl">
              Helping employers gain control over healthcare, benefits, and workforce costs.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              JAM Growth Partners helps growing companies make smarter decisions across
              healthcare strategy, payroll, employee benefits, workforce services, and
              strategic partnerships.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90"
              >
                Schedule a Conversation
              </a>
              <a
                href="#audiences"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                See Who We Help
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-medium text-slate-500">What we do</div>
              <div className="mt-2 text-2xl font-semibold text-slate-900">
                Employer Cost Strategy
              </div>
              <p className="mt-3 leading-7 text-slate-600">
                We help employers explore practical strategies that improve cost visibility,
                reduce inefficiencies, and strengthen the employee value proposition.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-slate-500">Ideal Employer Size</div>
                <div className="mt-2 font-semibold text-slate-900">50–2,000 employees</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-slate-500">Works With</div>
                <div className="mt-2 font-semibold text-slate-900">
                  Employers, brokers, advisors
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Why JAM Growth Partners
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            A strategic platform, not just a product menu
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Most organizations manage healthcare, payroll, benefits, and workforce services
            through disconnected conversations. We help bring those decisions together so
            employers can make clearer, more effective choices.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whyCards.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="audiences" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Who We Help
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Built for employers, brokers, and advisors
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our model supports direct employer growth while also creating meaningful
              opportunities for strategic partners.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audienceCards.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="max-w-4xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Employer Healthcare Cost Strategy
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Helping employers take a smarter approach to healthcare and workforce costs
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Many employers are looking for better ways to manage rising healthcare costs,
              improve employee benefits, and create more visibility around workforce-related
              expenses. JAM Growth Partners helps leadership teams explore practical
              strategies that support stronger financial outcomes and a better employee
              experience.
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Solutions
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Solutions for growing employers
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We organize our work around business outcomes, not just individual products.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {solutionCards.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="private-equity" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Private Equity
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Support for private equity-backed companies and portfolio growth
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              JAM Growth Partners works with private equity-backed companies and operating
              teams that want more discipline around healthcare, benefits, payroll, and
              workforce-related costs. We help create clearer employer strategies that
              support growth, improve consistency, and reduce operational inefficiencies
              across portfolio companies.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {peCards.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="max-w-4xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Benefits Consulting & Employer Solutions
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Strategic support for benefits, payroll, and employer growth
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We work with growing employers that want more than a traditional renewal
              conversation. Our model helps companies explore healthcare strategy, benefits
              alignment, payroll services, PEO options, and workforce-related solutions
              through one strategic relationship.
            </p>
          </div>
        </div>
      </section>

      <section id="partners" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Partnerships
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Built for collaboration
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              JAM Growth Partners is designed to work both directly with employers and
              alongside trusted professionals who already serve business leaders.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {partnerCards.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            About
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            A professional sales organization focused on employer growth and cost strategy
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            JAM Growth Partners was built to help employers make more informed decisions
            around some of the largest and most important operating expenses inside their
            organizations.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">What makes us different</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Many firms approach employer needs one product at a time. We believe the
              better approach is to look at healthcare, payroll, benefits, and workforce
              services as part of a broader financial and operational strategy.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Leadership</h3>
            <p className="mt-4 leading-7 text-slate-600">
              <span className="font-semibold text-slate-900">Jeremiah Drobney, President</span>
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Jeremiah founded JAM Growth Partners to bring together smarter strategies for
              employers, brokers, and advisors seeking better ways to manage healthcare,
              workforce costs, and business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            Start with a conversation, not a quote.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            The best solutions usually begin with a better understanding of where costs,
            complexity, and missed opportunities exist. We’re here to help you explore
            that clearly.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-block rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="max-w-4xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Broker Partnerships
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              A broker-friendly platform for employer solutions
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              JAM Growth Partners works with independent brokers, advisors, and referral
              partners who want access to differentiated employer solutions without
              disrupting trusted client relationships. Our partnership model is designed to
              support collaboration, create long-term value, and open the door to recurring
              growth opportunities.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Contact
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Start a conversation
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Whether you’re an employer exploring options, a broker looking for strategic
            collaboration, or an advisor with client relationships, we’d welcome the
            opportunity to connect.
          </p>
        </div>

        <form
          action="https://formspree.io/f/mojkvprq"
          method="POST"
          className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">What happens next</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              After you reach out, we’ll review your inquiry and follow up to schedule a
              short conversation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              className="rounded-2xl border border-slate-300 px-4 py-3 text-sm"
              placeholder="Name"
              required
            />
            <input
              name="email"
              type="email"
              className="rounded-2xl border border-slate-300 px-4 py-3 text-sm"
              placeholder="Email"
              required
            />
            <input
              name="company"
              className="rounded-2xl border border-slate-300 px-4 py-3 text-sm"
              placeholder="Company"
            />
            <input
              name="phone"
              className="rounded-2xl border border-slate-300 px-4 py-3 text-sm"
              placeholder="Phone"
            />
            <select
              name="interest"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm sm:col-span-2"
              defaultValue=""
            >
              <option value="" disabled>
                I’m interested in...
              </option>
              <option>Employer Solutions</option>
              <option>Broker Partnership</option>
              <option>Referral Partnership</option>
              <option>Private Equity Opportunities</option>
              <option>Other</option>
            </select>
            <textarea
              name="message"
              className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 text-sm sm:col-span-2"
              placeholder="How can we help?"
            />
          </div>

          <input type="hidden" name="_subject" value="New JAM Growth Partners Website Inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <button
            type="submit"
            className="mt-5 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Request a Conversation
          </button>
        </form>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center">
          <div>
            <div className="font-semibold text-slate-900">JAM Growth Partners</div>
            <div className="text-sm text-slate-500">
              Helping employers optimize healthcare, benefits, and workforce costs.
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jeremiah-drobney-6032a750/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Connect on LinkedIn
            </a>
            <div className="text-sm text-slate-500">
              © 2026 JAM Growth Partners. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
