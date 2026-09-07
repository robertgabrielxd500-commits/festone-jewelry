import { siteConfig } from "@/lib/site-config";

const PHRASE = `Argint 925 Certificat  ·  Din ${siteConfig.founded}  ·  ${siteConfig.motto}  ·  Boutique Iași  ·  Livrare în toată țara  ·  `;

export function Marquee() {
  return (
    <div
      className="overflow-hidden py-3"
      style={{ background: "rgba(201,168,76,0.04)", borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {[0, 1].map((k) => (
          <span key={k} className="font-mono text-[0.65rem] tracking-[0.3em] uppercase" style={{ color: "rgba(201,168,76,0.55)" }}>
            {PHRASE.repeat(2)}
          </span>
        ))}
      </div>
    </div>
  );
}
