"use client";

export default function AzureHeroMedia() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 opacity-55 [mask-image:radial-gradient(circle_at_50%_35%,black_35%,transparent_75%)] bg-sky-400/10" />

      <div className="relative grid gap-5 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs tracking-[0.18em] text-muted">
                STUDENT SUPPORT
              </div>
              <div className="rounded-full border border-sky-200/20 bg-sky-200/10 px-3 py-1 text-xs text-sky-100">
                Online
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <Bubble
                side="user"
                text="I have exams next week. Help me plan."
              />
              <Bubble
                side="ai"
                text="Tell me your subjects and available hours."
              />
              <Bubble
                side="user"
                text="Math and Physics. I can study 2 hours daily."
              />
              <Bubble
                side="ai"
                text="I will build a 7-day plan. You can adjust difficulty per subject."
                tone="accent"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-xs tracking-[0.18em] text-muted">
              GUIDED ACTIONS
            </div>

            <div className="mt-4 space-y-2">
              {[
                "Generate study plan",
                "Practice questions",
                "Time management tips",
                "Talk to an advisor",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-muted"
                >
                  {x}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-sky-200/20 bg-sky-200/10 p-4 text-xs text-sky-100">
              Transparent states: thinking, answering, escalation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({
  side,
  text,
  tone,
}: {
  side: "user" | "ai";
  text: string;
  tone?: "accent";
}) {
  const isUser = side === "user";
  const base =
    "max-w-[85%] rounded-2xl border px-4 py-3 text-xs leading-relaxed";
  const cls = isUser
    ? "ml-auto border-white/10 bg-white/10 text-foreground"
    : tone === "accent"
    ? "mr-auto border-sky-200/20 bg-sky-200/10 text-sky-100"
    : "mr-auto border-white/10 bg-white/5 text-foreground/90";

  return <div className={`${base} ${cls}`}>{text}</div>;
}
