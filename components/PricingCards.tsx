"use client";

const freeFeatures = [
  "Up to 10 active contacts",
  "One-line notes or voice-to-text",
  "Follow-up reminders (browser notifications)",
  "Your data lives in your Google Sheet",
  "Works in Gmail sidebar",
];

const paidFeatures = [
  "Everything in Free, plus:",
  "Unlimited contacts",
  "Proposal tracker — log amount, date sent, status",
  "Auto reminders: Day 3, Day 7, Day 14",
  "Email nudges (not just browser)",
  'Weekly summary: "You have $11,200 in open proposals"',
  "One-tap note templates",
];

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Free tier */}
      <div className="rounded-xl border border-border bg-surface p-8">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold">The Notebook</h3>
          <span className="text-xs px-2 py-1 rounded-full border border-mint text-mint">
            Free
          </span>
        </div>
        <p className="text-muted mb-6">Free forever</p>
        <ul className="space-y-3">
          {freeFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2 text-muted">
              <span className="text-mint mt-0.5">&#10003;</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Paid tier */}
      <div className="rounded-xl border border-border bg-surface p-8">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold">The Closer</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-amber/20 text-amber font-medium">
            Coming at launch
          </span>
        </div>
        <p className="text-2xl font-bold mb-1">
          $49<span className="text-base font-normal text-muted">/year</span>
        </p>
        <p className="text-muted text-sm mb-6">Pre-signups get launch pricing</p>
        <ul className="space-y-3">
          {paidFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2 text-muted">
              <span className="text-amber mt-0.5">&#10003;</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
