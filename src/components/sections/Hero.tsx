"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between px-8 pt-32 pb-12"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      {/* Section label */}
      <div>
        <span className="text-[10px] tracking-[0.35em] uppercase text-black/30">
          01 // Overview
        </span>
      </div>

      {/* Main headline */}
      <div>
        <h1
          className="text-[clamp(4rem,11vw,10rem)] font-medium leading-[0.88] tracking-[-0.02em] text-black uppercase"
        >
          Forge
          <br />
          Hyperloop
        </h1>
      </div>

      {/* Bottom row */}
      <div>
        <div className="border-t border-black/15 mb-8" />
        <div className="flex items-end justify-between">
          <p className="text-sm tracking-[0.03em] text-black/50 leading-relaxed max-w-xs">
            Student engineers designing and building
            <br />
            the next generation of hyperloop systems.
          </p>
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] tracking-[0.3em] uppercase text-black/25">
              Scroll
            </span>
            <div className="w-px h-14 bg-black/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
