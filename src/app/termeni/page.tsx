import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Termeni & Condiții" };

export default function TermsPage() {
  return (
    <div className="pt-[96px] md:pt-[132px] max-w-3xl mx-auto px-6 md:px-12 pb-24">
      <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase mb-3">Informații legale</div>
      <h1 className="font-display italic text-3xl md:text-4xl text-cream mb-10">Termeni & Condiții</h1>

      <div className="flex flex-col gap-8 text-stone-lt text-sm leading-relaxed">
        <div>
          <h2 className="font-heading text-cream text-base tracking-wide mb-2">Despre noi</h2>
          <p>
            Acest site este operat de {siteConfig.legalName}, magazin de bijuterii din argint 925 cu sediul la{" "}
            {siteConfig.address}, activ din {siteConfig.founded}.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-cream text-base tracking-wide mb-2">Comenzi</h2>
          <p>
            Prețurile afișate sunt în lei (RON) și includ TVA. Comenzile pot fi plasate telefonic sau prin
            WhatsApp — plata online urmează să fie activată.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-cream text-base tracking-wide mb-2">Retur</h2>
          <p>
            Conform legislației privind protecția consumatorilor, ai dreptul la retur în 14 zile calendaristice de
            la primirea produsului, cu condiția să fie nepurtat și în ambalajul original.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-cream text-base tracking-wide mb-2">Contact</h2>
          <p>
            Pentru orice nelămurire legată de termenii de mai sus, ne poți contacta la {siteConfig.phone} sau{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
