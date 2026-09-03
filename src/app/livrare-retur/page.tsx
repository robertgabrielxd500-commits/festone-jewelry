import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Livrare & retur" };

export default function ShippingReturnsPage() {
  return (
    <div className="pt-[96px] md:pt-[132px] max-w-3xl mx-auto px-6 md:px-12 pb-24">
      <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase mb-3">Informații</div>
      <h1 className="font-display italic text-3xl md:text-4xl text-cream mb-10">Livrare & retur</h1>

      <div className="flex flex-col gap-8 text-stone-lt text-sm leading-relaxed">
        <div>
          <h2 className="font-heading text-cream text-base tracking-wide mb-2">Livrare</h2>
          <p>
            Livrăm în toată țara prin curier. Comenzile de peste {siteConfig.freeShippingThreshold} lei beneficiază de
            livrare gratuită. Piesele pot fi ridicate și direct din boutique, {siteConfig.address}.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-cream text-base tracking-wide mb-2">Retur</h2>
          <p>
            Ai la dispoziție 14 zile calendaristice pentru retur, conform legislației privind protecția
            consumatorilor, cu condiția ca piesa să fie nepurtată și în ambalajul original.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-cream text-base tracking-wide mb-2">Întrebări</h2>
          <p>
            Pentru orice nelămurire legată de o comandă, sună-ne la{" "}
            <a href={siteConfig.phoneHref} className="text-gold hover:underline">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
