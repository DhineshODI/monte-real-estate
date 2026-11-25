import { useLayoutEffect, useRef } from "react";
import { gsap } from "../motion";
import { ADV } from "../data";

export default function Advantages() {
  const root = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".adv > div", {
        scrollTrigger: { trigger: ".adv", start: "top 80%" },
        y: 50,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap
        .timeline({
          defaults: { ease: "expo.out" },
          scrollTrigger: {
            trigger: ".whydubaaiii.sectionheadingggg",
            start: "top 85%",
            once: true,
          },
        })
        .from(
          ".whydubaaiii.sectionheadingggg",
          { yPercent: 115, duration: 1.2, stagger: 0.12 },
          0.1,
        )
        .to(
          ".pill",
          {
            "--fill": "100%",
            color: "#ffffff",
            duration: 0.85,
          },
          0.95,
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="sec" ref={root}>
      <div className="container">
        <div className="why-top">
          <div>
            <p className="paragraphtexttt HeadingDraksectionnn">
              {" "}
              <span className="dotttt">● </span>Explore Our Advantages
            </p>
            <h2 className="whydubaaiii sectionheadingggg">
              Why Dubai stands unrivalled?
            </h2>
          </div>
          <a href=" ">
            <span className="pill">
              <img
                className="animateicon"
                src="/images/icons/calllogo.png"
                alt=""
              />
              Contact Us Now
            </span>
          </a>

          {/* <span className="sl-btn">
            <i>☏</i>Contact us now
          </span> */}
        </div>
        <div className="adv">
          {ADV.map((a, i) => (
            <div key={i}>
              <svg viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="6" />
                <path d="M5 8l2 2 4-4" />
              </svg>
              <h3>{a[0]}</h3>
              <p className="paragraphtexttt">{a[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
