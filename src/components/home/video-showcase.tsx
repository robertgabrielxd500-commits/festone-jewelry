"use client";

import { useState } from "react";

const YOUTUBE_ID = "8EPFqerB6qU";

export function VideoShowcase() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
      <div className="mb-12 text-center">
        <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase mb-3">Vezi-le în mișcare</div>
        <h2 className="font-display italic text-3xl md:text-4xl text-cream">Bijuteriile Festone</h2>
        <div className="divider-gold mt-5 mx-auto" />
      </div>

      <div
        className="relative overflow-hidden mx-auto"
        style={{ aspectRatio: "16/9", maxWidth: 1000, border: "1px solid rgba(201,168,76,0.3)", background: "#141210" }}
      >
        {playing ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1`}
            title="Bijuterii Festone"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full flex items-center justify-center"
            aria-label="Redă videoclipul"
          >
            <img
              src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: "rgba(7,7,7,0.45)" }} />
            <span
              className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ background: "rgba(201,168,76,0.9)" }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#070707">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
