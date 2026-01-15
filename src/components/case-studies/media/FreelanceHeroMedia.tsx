"use client";

export default function FreelanceHeroMedia() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 opacity-55 [mask-image:radial-gradient(circle_at_50%_35%,black_35%,transparent_75%)] bg-violet-400/10" />

      <div className="relative grid gap-5 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-xs tracking-[0.18em] text-muted">FILTERS</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Web", "Design", "AI", "Brand", "Mobile"].map((x, i) => (
                <span
                  key={x}
                  className={[
                    "rounded-full border px-3 py-1 text-xs",
                    i === 2
                      ? "border-violet-200/25 bg-violet-200/10 text-violet-100"
                      : "border-white/10 bg-white/5 text-muted",
                  ].join(" ")}
                >
                  {x}
                </span>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-muted">
              Sort: Best match
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { n: "Omar", t: "AI Engineer", r: "€50/hr" },
              { n: "Lina", t: "Brand Designer", r: "€45/hr" },
              { n: "Yassine", t: "Frontend Dev", r: "€40/hr" },
              { n: "Nora", t: "UI Designer", r: "€35/hr" },
            ].map((c) => (
              <div
                key={c.n}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-lg">{c.n}</div>
                    <div className="mt-1 text-xs text-muted">{c.t}</div>
                  </div>
                  <div className="text-xs text-violet-200/90">{c.r}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Verified", "Fast replies", "Top rated"]
                    .slice(0, 2)
                    .map((x) => (
                      <span
                        key={x}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                      >
                        {x}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-muted">
            Interaction-led discovery: chips, sort, and smooth transitions.
          </div>
        </div>
      </div>
    </div>
  );
}
