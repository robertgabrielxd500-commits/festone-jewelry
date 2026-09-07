import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Confidențialitate & Cookie-uri" };

export default function PrivacyPage() {
  return (
    <div className="pt-[96px] md:pt-[132px] max-w-3xl mx-auto px-6 md:px-12 pb-24">
      <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase mb-3">Informații legale</div>
      <h1 className="font-display italic text-3xl md:text-4xl text-cream mb-10">Confidențialitate & Cookie-uri</h1>

      <div className="flex flex-col gap-8 text-stone-lt text-sm leading-relaxed">
        <div>
          <h2 className="font-heading text-cream text-base tracking-wide mb-2">Ce date colectăm</h2>
          <p>
            Colectăm datele pe care ni le oferi direct (nume, telefon, email) atunci când ne contactezi sau plasezi o
            comandă. Nu vindem și nu partajăm datele tale cu terți în scop de marketing.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-cream text-base tracking-wide mb-2">Cookie-uri</h2>
          <p>
            Folosim cookie-uri esențiale pentru funcționarea site-ului (ex. coșul de cumpărături, salvat local în
            browser-ul tău) și, opțional, cookie-uri funcționale pentru a-ți reține preferințele. Poți refuza
            cookie-urile funcționale din bannerul afișat la prima vizită.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-cream text-base tracking-wide mb-2">Drepturile tale</h2>
          <p>
            Conform GDPR, ai dreptul de acces, rectificare și ștergere a datelor tale. Pentru orice solicitare, ne
            poți contacta la{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
              {siteConfig.email}
            </a>{" "}
            sau la {siteConfig.phone}.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-cream text-base tracking-wide mb-2">Operator</h2>
          <p>
            {siteConfig.legalName}, {siteConfig.address}.
          </p>
        </div>
      </div>
    </div>
  );
}
