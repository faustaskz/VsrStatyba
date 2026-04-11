"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* ── Video background ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setLoaded(true)}
        className={[
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
          loaded ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        {/* Pirma WebM (mažesnis failas), paskui MP4 (fallback) */}
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Overlay gradientas ── */}
      {/* Tamsina video, kad tekstas būtų skaitomas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.80) 100%)",
        }}
      />

      {/* ── Turinys ── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">

        {/* Antraštė — animacija kai video užsikrauna */}
        <h1
          className={[
            "max-w-4xl text-5xl font-light leading-tight tracking-tight transition-all duration-700 md:text-7xl",
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0",
          ].join(" ")}
          style={{ transitionDelay: loaded ? "200ms" : "0ms" }}
        >
          Jūsų verslo{" "}
          <span className="font-semibold italic">buhalterija</span>
          {" —"} profesionaliai
        </h1>

        {/* Paragrafo tekstas */}
        <p
          className={[
            "mt-6 max-w-xl text-lg font-light leading-relaxed text-white/75 transition-all duration-700",
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0",
          ].join(" ")}
          style={{ transitionDelay: loaded ? "380ms" : "0ms" }}
        >
          UAB Audikom teikia pilną apskaitos paslaugų spektrą smulkioms
          ir vidutinėms įmonėms Lietuvoje.
        </p>

        {/* CTA mygtukai */}
        <div
          className={[
            "mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700",
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0",
          ].join(" ")}
          style={{ transitionDelay: loaded ? "520ms" : "0ms" }}
        >
          <a
            href="/kontaktai"
            className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-white/90 active:scale-95"
          >
            Susisiekti
          </a>
          <a
            href="/paslaugos"
            className="rounded-full border border-white/40 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/10 active:scale-95"
          >
            Mūsų paslaugos
          </a>
        </div>
      </div>

      {/* ── Scroll indikatorius (apačioje) ── */}
      <div
        className={[
          "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700",
          loaded ? "opacity-60" : "opacity-0",
        ].join(" ")}
        style={{ transitionDelay: loaded ? "800ms" : "0ms" }}
      >
        <span className="text-xs uppercase tracking-widest text-white/60">
          Slinkti žemyn
        </span>
        {/* Animuota rodyklė */}
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <div className="h-2 w-0.5 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>

    </section>
  );
}
