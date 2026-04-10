"use client";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-normal"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-black">
        Forge Hyperloop
      </span>
      <div className="flex items-center gap-10">
        <a
          href="#about"
          className="text-[11px] tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors duration-200"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-[11px] tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors duration-200"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-[11px] tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors duration-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
