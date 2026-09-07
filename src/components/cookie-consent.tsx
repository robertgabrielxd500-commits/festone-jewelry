"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_COOKIE = "festone_cookie_consent";

function setConsentCookie(value: "accepted" | "declined") {
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${oneYear}; SameSite=Lax`;
}

function hasConsentCookie() {
  return document.cookie.split("; ").some((row) => row.startsWith(`${CONSENT_COOKIE}=`));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasConsentCookie()) setVisible(true);
  }, []);

  if (!visible) return null;

  const handle = (value: "accepted" | "declined") => {
    setConsentCookie(value);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[600]">
      <div
        className="max-w-3xl mx-auto m-4 p-6 flex flex-col sm:flex-row items-center gap-4 glass"
        style={{ border: "1px solid rgba(201,168,76,0.25)" }}
      >
        <p className="text-sm text-stone-lt flex-1">
          Folosim cookie-uri esențiale și funcționale pentru a-ți oferi o experiență mai bună. Detalii în{" "}
          <Link href="/confidentialitate" className="underline text-gold hover:text-gold-lt">
            Politica de confidențialitate
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={() => handle("declined")} className="btn-secondary" style={{ padding: "0.6rem 1.6rem" }}>
            Refuz
          </button>
          <button onClick={() => handle("accepted")} className="btn-primary" style={{ padding: "0.6rem 1.6rem" }}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
