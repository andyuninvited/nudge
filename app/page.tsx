import Nav from "@/components/Nav";
import WaitlistForm from "@/components/WaitlistForm";
import PricingCards from "@/components/PricingCards";
import ScrollFade from "@/components/ScrollFade";

const problems = [
  {
    quote: "I've tried every CRM. They all make me feel like I'm doing it wrong.",
    attr: "founder",
  },
  {
    quote: "I went back to a spreadsheet. It's simple, but it never follows up with me.",
    attr: "consultant",
  },
  {
    quote: "I have proposals out there that I genuinely forgot about.",
    attr: "freelancer",
  },
  {
    quote: "I lost a $8,000 deal because I waited too long to follow up.",
    attr: "founder",
  },
];

const steps = [
  {
    num: "1",
    title: "Install the Chrome extension",
    body: "Adds a sidebar to Gmail. 30 seconds. No setup wizard, no required fields.",
  },
  {
    num: "2",
    title: "Drop a note",
    body: 'Type or speak one line about a contact. "Sent proposal. $4,500. Waiting." That\'s enough.',
  },
  {
    num: "3",
    title: "Get nudged",
    body: "We remind you when a contact goes cold or a proposal goes unanswered. You decide what to do next.",
  },
];

const forYou = [
  "Founders doing their own BD",
  "Consultants managing client relationships",
  "Freelancers who send proposals and wait",
  "Anyone who's lost a deal because they forgot",
];

const notForYou = [
  "Not for teams",
  "Not for enterprise",
  "Not for people who enjoy CRM configuration",
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-mint/5 blur-[120px]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-sm px-4 py-1.5 rounded-full border border-mint/30 bg-surface text-mint mb-8">
              The CRM-less CRM for founders
            </span>
          </div>

          <h1 className="animate-fade-in-up-delay-1 text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            You&apos;re losing deals because you forgot to follow up.
          </h1>

          <p className="animate-fade-in-up-delay-2 text-lg text-muted max-w-2xl mx-auto mb-10">
            Nudge lives in your Gmail sidebar. Drop a quick note, set a follow-up date, and
            we&apos;ll remind you before the deal goes cold. No CRM to manage. No fields to fill.
            Just a nudge when you need it.
          </p>

          <div className="animate-fade-in-up-delay-3 mb-4">
            <WaitlistForm variant="hero" />
            <p className="text-muted text-sm mt-3">
              Price goes up at launch. 30-day money back. No spam.
            </p>
          </div>

          <p className="text-muted text-sm mt-8 mb-6">
            Join founders who are done managing their CRM.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              ["$49/yr", "Founding price"],
              ["< 60s", "Setup time"],
              ["Your data", "In your own Google Sheet"],
            ].map(([stat, label]) => (
              <div key={stat}>
                <p className="font-mono text-xl font-bold text-text">{stat}</p>
                <p className="text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Sound familiar?</h2>
          </ScrollFade>

          <div className="space-y-4">
            {problems.map((p, i) => (
              <ScrollFade key={i} delay={i * 100}>
                <div className="border-l-2 border-mint bg-surface rounded-r-lg p-6">
                  <p className="text-lg text-text">&ldquo;{p.quote}&rdquo;</p>
                  <p className="text-sm text-muted italic mt-2">&mdash; {p.attr}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Three steps. That&apos;s it.
            </h2>
          </ScrollFade>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <ScrollFade key={s.num} delay={i * 100}>
                <div className="text-center md:text-left">
                  <div className="w-10 h-10 rounded-full border-2 border-mint text-mint flex items-center justify-center font-bold text-lg mb-4 mx-auto md:mx-0">
                    {s.num}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted">{s.body}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Simple pricing. No surprises.
            </h2>
          </ScrollFade>
          <ScrollFade>
            <PricingCards />
          </ScrollFade>
        </div>
      </section>

      {/* Data / Trust */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your data. Always.</h2>
            <p className="text-lg text-muted mb-12">
              Nudge stores your contacts in your own Google Sheet &mdash; not our database. You own
              it. You can read it, edit it, export it, delete it. We just make it smart.
            </p>
          </ScrollFade>

          <ScrollFade>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                ["Google OAuth", "No password stored"],
                ["Google Sheets", "You own the data"],
                ["Delete anytime", "No lock-in"],
              ].map(([title, sub]) => (
                <div key={title} className="text-center">
                  <p className="font-semibold text-text">{title}</p>
                  <p className="text-sm text-muted">{sub}</p>
                </div>
              ))}
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Built for one person doing their own sales.
            </h2>
          </ScrollFade>

          <ScrollFade>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
              <div className="space-y-3">
                {forYou.map((item) => (
                  <p key={item} className="flex items-start gap-2 text-muted">
                    <span className="text-mint">&#10003;</span> {item}
                  </p>
                ))}
              </div>
              <div className="space-y-3 mt-6 sm:mt-0">
                {notForYou.map((item) => (
                  <p key={item} className="flex items-start gap-2 text-muted">
                    <span className="text-red-400">&#10007;</span> {item}
                  </p>
                ))}
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Bottom CTA / Waitlist */}
      <section id="waitlist" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#111111]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-mint/5 blur-[100px]" />
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to stop losing deals because you forgot to follow up?
            </h2>
            <p className="text-lg text-muted mb-10">
              Get founding access at $49/year &mdash; locked forever when we launch.
            </p>
            <WaitlistForm />
          </ScrollFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span>Nudge &copy; 2026</span>
          <span>nudgesidebar.com</span>
          <span>Made for founders who hate CRMs</span>
        </div>
      </footer>
    </>
  );
}
