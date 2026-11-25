import { useLayoutEffect, useRef } from "react";
import { gsap } from "../motion";
import { TYPES, COLS } from "../data";
import Lines from "./Lines";

const OFFSETS = [60, 0, 100, 30, 70];
const DRIFT = [130, -40, 90, -70, 150];

export default function PropertyTypes() {
  const root = useRef();

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(root.current);
    mm.add("(min-width: 801px)", () => {
      gsap.utils.toArray(".col").forEach((c, i) => {
        const d = DRIFT[i % 5];
        gsap.fromTo(
          c,
          { y: d },
          {
            y: -d * 0.9,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      });
      gsap.from(".ty", {
        scrollTrigger: { trigger: ".cols", start: "top 85%" },
        scale: 0.9,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "expo.out",
      });

      gsap
        .timeline({
          defaults: { ease: "expo.out" },
          scrollTrigger: {
            trigger: ".sec.types .ln > span",
            start: "top 85%",
            once: true,
          },
        })
        .from(
          ".sec.types .ln > span",
          { yPercent: 115, duration: 1.2, stagger: 0.12 },
          0.1,
        )
        .to(
          ".cta .pill",
          {
            "--fill": "100%",
            color: "#ffffff",
            duration: 0.85,
          },
          0.95,
        );
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="sec types properttttt" ref={root}>
      <h2 className="sectionheadingggg">
        <Lines lines={["Discover Your Ideal", "Property Type"]} />
      </h2>
      <div className="container">
        <div className="cols">
          {COLS.map((col, ci) => (
            <div className="col" key={ci} style={{ marginTop: OFFSETS[ci] }}>
              {col.map((k) => {
                const t = TYPES[k];
                return (
                  <div className="ty" key={k} style={{ "--ar": t[2] }}>
                    <img
                      g={t[1]}
                      sk={k % 3 ? "none" : "tower"}
                      src={t[3]}
                      alt={t[0]}
                      className="ty-img imagesssssection"
                      style={{
                        "--ar": t[2],
                      }}
                      // style={{
                      //   position: "absolute",
                      //   inset: 0,
                      //   width: "100%",
                      //   height: "100%",
                      //   objectFit: "cover",
                      //   display: "block",
                      // }}
                    />
                    {/* <span className="arrow">↗</span> */}

                    <span className="arrow">
                      <img src="/images/arrow-icon.svg" alt="" />
                    </span>

                    <span className="n">{String(k + 1).padStart(2, "0")}</span>
                    <span className="t">{t[0]}</span>
                  </div>
                );
              })}

              {ci === 2 && (
                <div className="flexxxxxcontainer">
                  <img
                    className="imageeelogioo"
                    src="/images/logooo.png"
                    alt=""
                  />
                  <div className="cta">
                    Explore our diverse range of property types and find your
                    perfect match
                    <br />
                    {/* <span className="pill">
                      <i>↓</i>Catalog download
                    </span> */}
                    <a href=" ">
                      <span className="pill">
                        <img
                          className="animateicon"
                          src="/images/icons/donwloadlogo.png"
                          alt=""
                        />
                        Catalog Download
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
