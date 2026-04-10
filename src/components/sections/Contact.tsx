"use client";

import FadeIn from "@/components/FadeIn";
import SocialIcons from "@/components/SocialIcons";

const contactRows = [
  {
    label: "Email",
    display: "tawficshnoudeh@gmail.com",
    href: "mailto:tawficshnoudeh@gmail.com",
  },
  {
    label: "LinkedIn",
    display: "/in/tawficshnoudeh",
    href: "https://linkedin.com/in/tawficshnoudeh",
  },
  {
    label: "Website",
    display: "tawficshnoudeh.com",
    href: "https://tawficshnoudeh.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[80vh] flex flex-col justify-between px-8 py-24"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <div>
        {/* Rule + label */}
        <FadeIn variant="left">
          <div className="border-t border-black/15 mb-12">
            <span className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase text-accent/60">
              04 // Contact
            </span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-[2.6rem] font-medium tracking-[-0.015em] text-black mb-16 leading-tight">
            Get in touch.
          </h2>
        </FadeIn>

        {/* Contact rows */}
        <FadeIn delay={0.2}>
          <div className="border-t border-black/15 max-w-sm">
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between py-5 border-b border-black/10"
              >
                <span className="text-[10px] tracking-[0.25em] uppercase text-black/35">
                  {row.label}
                </span>
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[13px] text-black hover:text-accent transition-colors duration-200"
                >
                  {row.display}
                </a>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Footer — wordmark left, social icons center, year right */}
      <FadeIn delay={0.15}>
        <div className="flex items-center justify-between border-t border-black/10 pt-8">
          <span className="text-[10px] tracking-[0.25em] uppercase text-black/25">
            Forge Hyperloop
          </span>
          <SocialIcons />
          <span className="text-[10px] tracking-[0.15em] text-black/25">
            {new Date().getFullYear()}
          </span>
        </div>
      </FadeIn>
    </section>
  );
}
