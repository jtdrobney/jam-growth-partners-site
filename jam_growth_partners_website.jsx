export default function JAMGrowthPartnersWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight">JAM Growth Partners</div>
            <div className="text-sm text-slate-500">Employer Cost Strategy & Workforce Solutions</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-700">
            <a href="#why" className="hover:text-slate-900">Why Us</a>
            <a href="#solutions" className="hover:text-slate-900">Solutions</a>
            <a href="#partners" className="hover:text-slate-900">Partners</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Helping Employers Gain Control Over Healthcare, Benefits, and Workforce Costs
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-8">
              JAM Growth Partners works with employers, brokers, and advisors to bring smarter strategies to some of the largest operating expenses inside an organization. Our focus is simple: help companies operate more efficiently while improving the overall employee value proposition.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-2xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90">
                Schedule a Conversation
              </a>
              <a href="#solutions" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
                How We Help
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-medium text-slate-500">Our Focus</div>
              <div className="mt-2 text-2xl font-semibold">Employer Cost Optimization</div>
              <p className="mt-2 text-slate-600 text-sm">
                We help employers explore better ways to manage healthcare costs, workforce services, payroll infrastructure, and employee benefits.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-slate-500">Employers</div>
                <div className="mt-2 font-semibold">50 – 2,000 Employees</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-slate-500">Partners</div>
                <div className="mt-2 font-semibold">Brokers, Advisors, & Referral Networks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Why companies work with us</h2>
            <p className="mt-4 text-slate-600 leading-7">
              Many organizations manage healthcare, payroll, HR services, and benefits through separate vendors and disconnected conversations. This often leads to rising costs and missed opportunities to improve efficiency.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              JAM Growth Partners brings these conversations together. We help leadership teams explore smarter approaches that improve financial outcomes while strengthening employee benefits and workplace stability.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm">
            <ul className="space-y-4 text-sm text-slate-700">
              <li>• Strategic approach to workforce costs</li>
              <li>• Access to multiple employer solutions through one platform</li>
              <li>• Broker-friendly collaboration model</li>
              <li>• Partnership opportunities for trusted advisors</li>
              <li>• Focus on long-term employer relationships</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Solutions for growing employers</h2>
          <p className="mt-4 text-slate-600 leading-7 max-w-2xl">
            We work with employers to explore strategies that improve cost control, operational efficiency, and employee support across several key areas.
          </p>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                title: "Healthcare Strategy",
                text: "Helping employers evaluate funding structures, cost management strategies, and better approaches to managing healthcare expenses.",
              },
              {
                title: "Workforce Cost Optimization",
                text: "Identifying opportunities to improve how employers structure benefits, compensation support, and employee engagement programs.",
              },
              {
                title: "Payroll & HR Services",
                text: "Connecting employers with payroll and HR solutions that simplify administration and strengthen operational visibility.",
              },
              {
                title: "PEO Brokerage",
                text: "Guidance for organizations that need help managing compliance, HR complexity, or rapid growth.",
              },
              {
                title: "Employee Benefits & Protection",
                text: "Additional benefit programs designed to improve employee experience while supporting retention and financial protection.",
              },
              {
                title: "Wellness & Tax-Advantaged Programs",
                text: "Solutions that support employee well-being while helping employers explore opportunities to improve financial efficiency.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-6">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Built for collaboration</h2>
            <p className="mt-4 text-slate-600 leading-7">
              JAM Growth Partners works both directly with employers and in partnership with brokers, consultants, and referral professionals who serve business leaders.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Our goal is to expand the value that partners can deliver to their clients while maintaining trusted relationships and collaboration.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4 text-sm text-slate-700 leading-6">
              <li>• Broker-friendly partnership approach</li>
              <li>• Referral opportunities for advisors and consultants</li>
              <li>• Strategic conversations with employer leadership teams</li>
              <li>• Long-term residual income opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">About JAM Growth Partners</h2>
            <p className="mt-5 text-slate-300 leading-7">
              JAM Growth Partners is a professional sales organization dedicated to helping employers improve financial performance through smarter workforce strategies.
            </p>
            <p className="mt-4 text-slate-300 leading-7">
              We partner with employers, brokers, and advisors to introduce solutions that address major operating costs including healthcare, payroll infrastructure, employee benefits, and compliance support.
            </p>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Our mission</div>
            <div className="mt-6 space-y-4 text-slate-200 text-sm leading-6">
              <p>• Help employers operate more efficiently</p>
              <p>• Support advisors and brokers through collaboration</p>
              <p>• Create long-term relationships built on trust</p>
              <p>• Deliver solutions that improve employer and employee outcomes</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Start a conversation</h2>
        <p className="mt-4 text-slate-600 leading-7">
          Whether you're an employer exploring new strategies, a broker looking for collaboration, or an advisor with client relationships, we'd welcome the opportunity to connect.
        </p>
        <div className="mt-8 rounded-3xl border border-slate-200 p-8 shadow-sm bg-white">
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <input className="rounded-2xl border border-slate-300 px-4 py-3 text-sm" placeholder="Name" />
            <input className="rounded-2xl border border-slate-300 px-4 py-3 text-sm" placeholder="Email" />
            <input className="rounded-2xl border border-slate-300 px-4 py-3 text-sm sm:col-span-2" placeholder="Company" />
            <textarea className="rounded-2xl border border-slate-300 px-4 py-3 text-sm sm:col-span-2 min-h-[120px]" placeholder="How can we help?" />
          </div>
          <button className="mt-5 rounded-2xl bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">
            Submit Inquiry
          </button>
        </div>
      </section>
    </div>
  );
}
