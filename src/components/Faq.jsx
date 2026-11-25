import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../motion";
import { FAQ } from "../data";
import Acc from "./Acc";
import Marq from "./Marq";


export default function Faq() {
  const root = useRef();
  const [open, setOpen] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".q", {
        scrollTrigger: { trigger: ".acc", start: "top 80%" },
        y: 24,
        opacity: 0,
        stagger: 0.07,
        duration: 0.8,
        ease: "power3.out",
      });
    
      gsap.from(".band", {
        scrollTrigger: {
          trigger: ".band",
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
        clipPath: "inset(0 12% 0 12% round 22px)",
      });

      gsap
        .timeline({
          defaults: { ease: "expo.out" },
          scrollTrigger: {
            trigger: ".sectionheadingggg",
            start: "top 85%",
            once: true,
          },
        })
        .from(
          ".sectionheadingggg",
          { yPercent: 50, duration: 1.2, stagger: 0.12 },
          0.1,
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div className="faqqqqsectionn" ref={root}>
      <div className="partners paragraphtextttss">
        Our Valued Partners
        {/* <Marq text={["DAMAC", "EMAAR", "NAKHEEL", "SOBHA", "MERAAS"]} /> */}
        <Marq
          logos={[
            { name: "DAMAC", src: "/images/partners/damac.jpg" },
            { name: "EMAAR", src: "/images/partners/emmar.jpg" },
            { name: "NAKHEEL", src: "/images/partners/nakeel.jpg" },
            { name: "SOBHA", src: "/images/partners/sobha.jpg" },
            { name: "MERAAS", src: "/images/partners/meera.jpg" },
          ]}
        />
      </div>

      <div className="container">
        <section className="sec cream faq">
          <div>
            <p
              className="paragraphtexttt HeadingDraksectionnn"
              style={{ fontSize: 12 }}
            >
              <span className="dotttt">● </span>
              Explore Our Advantages
            </p>
            <h2 className="sectionheadingggg">Frequently Asked Questions</h2>
            <p className="small paragraphtexttt">
              At Monte, we offer more than just real estate services; we provide
              an unparalleled experience tailored to meet your needs and exceed
              your expectations.
            </p>
          </div>
          <div className="acc">
            {FAQ.map((f, i) => (
              <Acc
                key={i}
                cls="q"
                label={f[0]}
                body={f[1]}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* <div className="cream" style={{ paddingTop: 30 }}>
        <Photo g="room" className="band" />
      </div> */}

      <div className="cream" style={{ paddingTop: 5 }}>
        <img
          src="/images/Buildyourfututure.webp"
          alt="Build your future"
          className="band"
        />
      </div>
    </div>
  );
}
