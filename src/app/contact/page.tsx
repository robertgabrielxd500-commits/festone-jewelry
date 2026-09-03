import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="pt-[96px] md:pt-[132px] max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
      <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase mb-3">Contact</div>
      <h1 className="font-display italic text-3xl md:text-4xl text-cream mb-10">Vizitează boutique-ul Festone</h1>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <div>
            <div className="font-mono text-[0.6rem] tracking-[0.3em] text-stone-lt uppercase mb-2">Adresă</div>
            <p className="text-cream text-lg font-heading">{siteConfig.address}</p>
          </div>
          <div>
            <div className="font-mono text-[0.6rem] tracking-[0.3em] text-stone-lt uppercase mb-2">Telefon</div>
            <a href={siteConfig.phoneHref} className="text-gold text-lg font-heading hover:underline">
              {siteConfig.phone}
            </a>
          </div>
          <div>
            <div className="font-mono text-[0.6rem] tracking-[0.3em] text-stone-lt uppercase mb-2">Website</div>
            <a href={siteConfig.website} target="_blank" rel="noopener noreferrer" className="text-cream text-lg font-heading hover:text-gold transition-colors">
              festone.ro
            </a>
          </div>
          <div>
            <div className="font-mono text-[0.6rem] tracking-[0.3em] text-stone-lt uppercase mb-4">Program</div>
            <div className="flex flex-col gap-1.5">
              {siteConfig.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-8 font-mono text-sm text-stone-lt max-w-xs">
                  <span>{h.day}</span>
                  <span className="text-cream">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden" style={{ aspectRatio: "4/3", background: "#141210" }}>
          <iframe
            title="Locația Festone pe hartă"
            className="w-full h-full border-0"
            loading="lazy"
            src="https://www.google.com/maps?q=Bulevardul+Socola+9,+Iasi&output=embed"
          />
        </div>
      </div>
    </div>
  );
}
