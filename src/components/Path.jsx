import { useLayoutEffect, useRef } from "react";
import { gsap } from "../motion";


export default function Path() {
  const root = useRef();

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(root.current);
    mm.add("(min-width: 801px)", () => {
      const r = Math.min(innerWidth * 0.26, 240);
      gsap.set(".c1", { x: -r * 1.05 });
      gsap.set(".c3", { x: r * 1.05 });

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
          { yPercent: 115, duration: 1.2, stagger: 0.12 },
          0.1,
        );

      gsap
        .timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=220%",
            scrub: 0.7,
            pin: true,
          },
        })
        .from(
          ".cir",
          { scale: 0.4, opacity: 0, stagger: 0.1, duration: 0.5 },
          0,
        )
        .to(".c1", { x: -r * 0.5, duration: 1 }, 0.6)
        .to(".c3", { x: r * 0.5, duration: 1 }, 0.6)
        .to(".c1", { x: -r * 0.28, y: r * 0.2, duration: 1 }, 1.8)
        .to(".c3", { x: r * 0.28, y: r * 0.2, duration: 1 }, 1.8)
        .to(".c2", { y: -r * 0.28, duration: 1 }, 1.8)
        .to(".cir span", { opacity: 0, duration: 0.4 }, 1.8)
        .to(".cir", { x: 0, y: 0, duration: 1.1 }, 3.1)
        .to(".one", { opacity: 1, duration: 0.6 }, 3.8)
        .to(".dlb", { opacity: 1, y: -10, duration: 0.6 }, 4);
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="sec dark path" ref={root}>
      <h2 className="sectionheadingggg">Path to Smart Ownership</h2>
      <div className="cs">
        <div className="cir c1 paragraphtexttt">
          <span>10% Initial Payment</span>
        </div>
        <div className="cir c2 paragraphtexttt fiveyearssss">
          <span>
            5 years instalments, <br /> 0% overpayment
          </span>
        </div>
        <div className="cir c3 paragraphtexttt">
          <span>Rental income, 15%</span>
        </div>
        <div className="one paragraphtexttt">
          Smart
          <br />
          Ownership
        </div>
      </div>
      {/* <span className="pill dlb paragraphtexttt">
        <i>↓</i>Catalog download
      </span> */}

      <span className="pill dlb paragraphtexttt">
        <img className="animateicon" src="/images/icons/calllogo.png" alt="" />
        Catalog Download
      </span>
    </section>
  );
}
