// import { useLayoutEffect, useEffect, useRef, useState } from "react";
// import { gsap } from "../motion";
// import { PORTFOLIO, TABS } from "../data";

// export default function Portfolio() {
//   const root = useRef();
//   const first = useRef(true);
//   const [tab, setTab] = useState(0);

//   // cards stagger in when the section scrolls into view
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".p-card", {
//         scrollTrigger: { trigger: root.current, start: "top 70%" },
//         y: 80,
//         scale: 0.92,
//         opacity: 0,
//         duration: 1.1,
//         ease: "expo.out",
//         stagger: 0.12,
//       });
//     }, root);
//     return () => ctx.revert();
//   }, []);

//   // clicking a tab replays the stagger (motion that answers the user's action)
//   useEffect(() => {
//     if (first.current) {
//       first.current = false;
//       return;
//     }
//     gsap.fromTo(
//       root.current.querySelectorAll(".p-card"),
//       { y: 40, opacity: 0, scale: 0.95 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: "expo.out",
//         stagger: 0.08,
//         overwrite: true,
//       },
//     );
//   }, [tab]);

//   // const pins = [
//   //   [30, 40],
//   //   [44, 52],
//   //   [48, 46],
//   //   [56, 60],
//   //   [40, 70],
//   //   [62, 36],
//   // ];

//   return (
//     <section className="sec dark" ref={root}>
//       <div className="container">
//         <div className="p-top">
//           <h2>Explore our property portfolio</h2>
//           <div className="tabs" role="tablist">
//             {TABS.map((t, i) => (
//               <button
//                 key={t}
//                 role="tab"
//                 aria-selected={tab === i}
//                 onClick={() => setTab(i)}
//               >
//                 {t}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid2">
//           {PORTFOLIO[tab].map((p, i) => (
//             <div key={tab + "-" + i} className="ph p-card">
//               <img
//                 src={p[1]}
//                 alt={p[0]}
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   display: "block",
//                 }}
//               />
//               <span className="arrow">↗</span>
//               <span className="cap">{p[0]}</span>
//             </div>
//           ))}
//         </div>

//         <div className="p-foot">
//           <span className="pill lt">All properties</span>
//           <span>Don’t miss out on hot deals. Follow us on social media</span>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../motion";
import { PORTFOLIO, TABS, CARD_INFO } from "../data";
import "../assets/css/portfolio.css";

export default function Portfolio() {
  const root = useRef();
  const [tab, setTab] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".p-card");

      cards.forEach((card) => {
        const img = card.querySelector(".p-img");

        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
              end: "top 45%",
              scrub: 0.6,
            },
          })
          .fromTo(
            card,
            { scale: 0.82, borderRadius: 40 },
            { scale: 1, borderRadius: 22, immediateRender: false },
            0,
          )
          .fromTo(
            img,
            { scale: 1.35 },
            { scale: 1, immediateRender: false },
            0,
          );
      });

      gsap.from(cards, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "expo.out",
        stagger: 0.07,
        clearProps: "transform",
      });

      gsap.from(".tabs button", {
        scrollTrigger: {
          trigger: ".tabs",
          start: "top 85%",
          once: true,
        },
        x: 70,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        stagger: { each: 0.12, from: "end" },
      });

      gsap
        .timeline({
          defaults: { ease: "expo.out" },
          scrollTrigger: {
            trigger: ".p-top",
            start: "top 100%",
            once: true,
          },
        })
        .from(
          ".p-top .sectionheadingggg",
          { yPercent: 125, duration: 1.2, stagger: 0.9 },
          0.3,
        );
    }, root);

    return () => ctx.revert();
  }, [tab]);

  return (
    <section className="sec dark pf portfoliosection" ref={root}>
      <div className="container">
        <div className="p-top">
          <h2 className="sectionheadingggg">Explore Our Property Portfolio</h2>
          <div className="tabs" role="tablist">
            {TABS.map((t, i) => (
              <button
                className="paragraphtexttt"
                key={t}
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid2">
          {PORTFOLIO[tab].map((p, i) => (
            <div key={tab + "-" + i} className="ph p-card" tabIndex={0}>
              <img className="p-img" src={p[1]} alt={p[0]} />
              {/* <span className="arrow">↗</span> */}

              <span className="arrow">
                <img src="/images/arrow-icon.svg" alt="" />
              </span>
              <span className="cap">{p[0]}</span>
              <span className="p-loc">{CARD_INFO.loc}</span>
              <div className="p-chips">
                {CARD_INFO.chips.map((c) => (
                  <div className="p-chip" key={c[0]}>
                    <small>{c[0]}</small>
                    {c[1]}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-foot">
          <span></span>
          <span className="pill lt paragraphtexttt">All Properties</span>
          <span className="paragraphtexttt">
            Don’t Miss Out on Hot Deals. <br /> Follow us on Social Media
          </span>
        </div>
      </div>
    </section>
  );
}
