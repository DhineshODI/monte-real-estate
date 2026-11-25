// import { useLayoutEffect, useRef } from "react";
// import { gsap, RM } from "../motion";
// import "../assets/css/scrollFillBanner.css";

// const TEXTS = [
//   "Apartments with an initial payment from $25,000",
//   "Interest-free installments",
// ];
// const isVideo = (src) => /\.(mp4|webm)$/i.test(src);

// export default function VideoBannerSection({
//   src = "/images/videobanner.mp4",
//   texts = TEXTS,
// }) {
//   const root = useRef();

//   useLayoutEffect(() => {
//     const loop = RM
//       ? null
//       : gsap.to(root.current.querySelector(".sfb-track"), {
//           xPercent: -50,
//           duration: 28,
//           ease: "none",
//           repeat: -1,
//         });

//     const mm = gsap.matchMedia(root.current);
//     if (!RM) {
//       mm.add(
//         { desk: "(min-width: 801px)", mob: "(max-width: 800px)" },
//         (ctx) => {
//           const { desk } = ctx.conditions;
//           gsap
//             .timeline({
//               defaults: { ease: "none" },
//               scrollTrigger: {
//                 trigger: root.current,
//                 start: "top top",
//                 end: "+=120%",
//                 scrub: 0.6,
//                 pin: true,
//               },
//             })
//             .fromTo(
//               ".sfb-media",
//               { width: desk ? "60%" : "86%", top: "26vh", borderRadius: 32 },
//               { width: "100%", top: 0, borderRadius: 0, duration: 1 },
//               0,
//             )
//             .fromTo(".sfb-img", { scale: 1.25 }, { scale: 1, duration: 1 }, 0)
//             .fromTo(
//               ".sfb-tools",
//               { top: "calc(26vh - 44px)" },
//               { top: 24, duration: 1 },
//               0,
//             );
//         },
//         root.current,
//       );
//     }

//     return () => {
//       loop && loop.kill();
//       mm.revert();
//     };
//   }, []);

//   return (
//     <section className="sfb-root" ref={root} data-static={RM}>
//       <div className="sfb-tools">
//         <button className="sfb-tool" aria-label="Home">
//           ⌂
//         </button>
//         <button className="sfb-tool" aria-label="Search">
//           ⌕
//         </button>
//       </div>

//       <div className="sfb-media">
//         {isVideo(src) ? (
//           <video
//             className="sfb-img"
//             src={src}
//             autoPlay
//             muted
//             loop
//             playsInline
//           />
//         ) : (
//           <img
//             className="sfb-img"
//             src={src}
//             alt=""
//             onError={(e) => {
//               e.currentTarget.style.display = "none";
//             }}
//           />
//         )}
//         <div className="sfb-shade" />
//         <div className="sfb-marq" aria-hidden="true">
//           <div className="sfb-track">
//             {[0, 1].map((k) => (
//               <div key={k} style={{ display: "flex" }}>
//                 {texts.map((t, i) => (
//                   <span className="sfb-item" key={i}>
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Old Code

import { useLayoutEffect, useRef } from "react";
import { gsap, RM } from "../motion";
import "../assets/css/scrollFillBanner.css";

const TEXTS = [
  "Apartments with an initial payment from $25,000",
  "Interest-free installments",
];
const isVideo = (src) => /\.(mp4|webm)$/i.test(src);

export default function VideoBannerSection({
  src = "/images/videobanner.mp4",
  texts = TEXTS,
}) {
  const root = useRef();

  useLayoutEffect(() => {
    const trackEl = root.current?.querySelector(".sfb-track");
    const loop =
      !RM && trackEl
        ? gsap.to(trackEl, {
            xPercent: -50,
            duration: 28,
            ease: "none",
            repeat: -1,
          })
        : null;

    const mm = gsap.matchMedia(root.current);
    if (!RM) {
      mm.add("(min-width: 801px)", () => {
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=120%",
              scrub: 0.6,
              pin: true,
            },
          })
          .fromTo(
            ".sfb-media",
            { width: "60%", top: "26vh", borderRadius: 32 },
            { width: "100%", top: 0, borderRadius: 0, duration: 1 },
            0,
          )
          .fromTo(".sfb-img", { scale: 1.25 }, { scale: 1, duration: 1 }, 0)
          .fromTo(
            ".sfb-tools",
            { top: "calc(26vh - 44px)" },
            { top: 24, duration: 1 },
            0,
          );
      });
    }

    return () => {
      loop && loop.kill();
      mm.revert();
    };
  }, []);

  return (
    <section className="sfb-root" ref={root} data-static={RM}>
      <div className="sfb-tools">
        <button className="sfb-tool" aria-label="Home">
          ⌂
        </button>
        <button className="sfb-tool" aria-label="Search">
          ⌕
        </button>
      </div>

      <div className="sfb-media">
        {isVideo(src) ? (
          <video
            className="sfb-img"
            src={src}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            className="sfb-img"
            src={src}
            alt=""
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}
        <div className="sfb-shade" />
        <div className="sfb-marq" aria-hidden="true">
          <div className="sfb-track">
            {[0, 1].map((k) => (
              <div key={k} style={{ display: "flex" }}>
                {texts.map((t, i) => (
                  <span className="sfb-item" key={i}>
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
