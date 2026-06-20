const hostTiers = [
  { tier: "Bronze", coins: "30k – 100k", payout: "30%" },
  { tier: "Silver", coins: "100k – 500k", payout: "35%" },
  { tier: "Gold", coins: "500k – 2M", payout: "40%" },
  { tier: "Diamond", coins: "2M+", payout: "45% + bonus" },
];

const agentTiers = [
  { tier: "Starter", req: "1 – 5 active hosts", payout: "8% override" },
  { tier: "Growth", req: "6 – 20 active hosts", payout: "12% override" },
  { tier: "Pro", req: "21 – 50 active hosts", payout: "15% + monthly bonus" },
  { tier: "Elite", req: "50+ active hosts", payout: "18% + leadership bonus" },
];

export function EarningsTables() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {[
        { title: "Host commission", rows: hostTiers, cols: ["Tier", "Monthly coins", "Payout"] },
        { title: "Agent override", rows: agentTiers, cols: ["Tier", "Requirement", "Commission"] },
      ].map((t) => (
        <div key={t.title} className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-6 py-4">
            <h3 className="font-display text-lg font-semibold">{t.title}</h3>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">Updated 2026</span>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-muted-foreground">
                {t.cols.map((c) => (
                  <th key={c} className="px-6 py-3 text-xs font-medium uppercase tracking-wider">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.rows.map((r) => {
                const vals = Object.values(r);
                return (
                  <tr key={vals[0]} className="border-t border-border/60">
                    {vals.map((v, i) => (
                      <td key={i} className={`px-6 py-4 ${i === 0 ? "font-semibold" : ""} ${i === vals.length - 1 ? "text-primary" : ""}`}>{v}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
