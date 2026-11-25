import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../motion";
import { SVC, SVC_PHOTOS } from "../data";
import Acc from "./Acc";
import Photo from "./Photo";
import Marq from "./Marq";

export default function Services() {
  const root = useRef();
  const [open, setOpen] = useState(-1);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sp", {
        scrollTrigger: { trigger: root.current, start: "top 65%" },
        x: 120,
        opacity: 0,
        stagger: 0.3,
        duration: 1.1,
        ease: "expo.out",
      });

      gsap
        .timeline({
          defaults: { ease: "expo.out" },
          scrollTrigger: {
            trigger: ".servicesec1",
            start: "top 85%",
            once: true,
          },
        })
        .from(
          ".servicesec1 h2",
          { yPercent: 115, duration: 1.9, stagger: 0.72 },
          0.1,
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="sec dark svc tailoredddd" ref={root}>
      <div className="container">
        <div className="flexxclassss">
          <div className="servicesec1">
            <h2 className="sectionheadingggg">
              Tailored solutions for Your Real Estate Needs
            </h2>
            <span className="go paragraphtexttt HeadingDraksectionnn">
              <span className="dotttt">● </span>
              Explore more →
            </span>
          </div>
          <div className="servicesec2">
            {/* {SVC.map((s, i) => (
              <Acc
                key={i}
                cls="sp"
                label={s[0]}
                body={s[1]}
                idx={"0" + (i + 1)}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
                thumb={
                  <Photo
                    g={SVC_PHOTOS[i]}
                    className="th"
                    style={{ borderRadius: "50%" }}
                  />
                }
              />
            ))} */}

            {SVC.map((s, i) => (
              <Acc
                key={i}
                cls="sp"
                label={s[0]}
                body={s[1]}
                idx={"0" + (i + 1)}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
                thumb={
                  <img
                    src={s[2]}
                    alt={s[0]}
                    className="th"
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="chips" style={{ gridColumn: "1 / -1" }}>
        <Marq
          text={[
            "Investment from Almaty",
            "0% commission",
            "Resident visa support",
            "Payment plans",
          ]}
        />
      </div>
    </section>
  );
}
