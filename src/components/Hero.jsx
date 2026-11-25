// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "../motion";
// import Photo from "./Photo";
// import Lines from "./Lines";
// import Marq from "./Marq";

// export default function Hero() {
//   const root = useRef();

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap
//         .timeline({ defaults: { ease: "expo.out" } })
//         .from(
//           ".h-right .ph",
//           { clipPath: "inset(0 0 100% 0 round 22px)", duration: 1.5 },
//           0,
//         )
//         .from(".h-right .sk", { yPercent: 12, scale: 1.15, duration: 2 }, 0)
//         .from(
//           ".h-mid .ln > span",
//           { yPercent: 115, duration: 1.2, stagger: 0.12 },
//           0.3,
//         )
//         .from(
//           ".h-mid p, .h-left .logo, .h-foot, .h-meta, .dl",
//           { opacity: 0, y: 14, duration: 1, stagger: 0.08 },
//           0.7,
//         )

//         .to(
//           ".pill",
//           {
//             "--fill": "100%",
//             color: "#ffffff",
//             duration: 0.85,
//           },
//           0.95,
//         )
//         .fromTo(
//           ".h-right",
//           { clipPath: "inset(0% 0% 0% 100% round 22px)" },
//           { clipPath: "inset(0% 0% 0% 0% round 22px)", duration: 1.5 },
//           0,
//         )
//         .fromTo(".herobannerrr", { scale: 1.25 }, { scale: 1, duration: 2 }, 0);
//     }, root);

//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     if (imgLoaded && tlRef.current) {
//       tlRef.current.play(0);
//     }
//   }, [imgLoaded]);

//   return (
//     <section className="hero" ref={root}>
//       <div className="h-left">
//         <div className="logo">
//           <div className="logogggflexxx">
//             <div>
//               <a href="">
//                 <img src="/images/logo-montee.svg" alt="" />
//               </a>
//             </div>
//             <div className="rightsideloggggo">
//               <a href="">
//                 <img src="/images/logos/map-icon.svg" alt="" />
//               </a>
//               <a href="">
//                 <img src="/images/logos/menu-icon.svg" alt="" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="h-mid">
//           <p className="paragraphtexttt HeadingDraksectionnn">
//             Building your dreams
//           </p>
//           <h1 className="herobannerheading">
//             <Lines
//               lines={[
//                 "Real Estate in Dubai:",
//                 "Ideal for Living and",
//                 "Investing",
//               ]}
//             />
//           </h1>
//         </div>
//         <div className="h-foot">
//           <a href=" ">
//             <span className="pill contactuuusss">
//               <img
//                 className="animateicon"
//                 src="/images/icons/calllogo.png"
//                 alt=""
//               />
//               Contact Us Now
//             </span>
//           </a>

//           <div className="exploreherobannerr">
//             <span className="paragraphtexttt">
//               Explore All <br /> Our Properties
//             </span>

//             <div className="inmagetag">
//               <img src="/images/analysis/commercialsq.jpg" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="h-right">
//         <img
//           className="herobannerrr"
//           src="/images/herobannerimage.jpg"
//           g="sea"
//           sk="arch"
//           alt=""
//           onLoad={() => setImgLoaded(true)}
//         />
//         <div className="h-meta">
//           <span className="paragraphtexttt">
//             More than 1,500 real <br /> estate properties
//           </span>
//           <span className="paragraphtexttt">
//             From $145,000 with a <br /> yield of 10% per annum
//           </span>

//           <div className="omebannerlogosss">
//             <a href=" ">
//               <img src="/images/icons/logoheart.png" alt="" />
//             </a>
//             <a href=" ">
//               <img src="/images/icons/logohpouse.png" alt="" />
//             </a>
//           </div>
//         </div>

//         <div
//           className="dl paragraphtexttt fontweightttt sl-btn sl-btn--box"
//           style={{ "--sl-delay": "1s" }}
//         >
//           <span className="fontweightttt">
//             catalog <br /> download
//           </span>
//           <span>↓</span>
//         </div>
//         <div className="h-marq">
//           <Marq
//             text={[
//               "With an initial payment from $25,000",
//               "Interest-free installments",
//             ]}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


// Old Code

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../motion";
import Lines from "./Lines";
import Marq from "./Marq";

export default function Hero() {
  const root = useRef();
  const imgRef = useRef(null);
  const tlRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "expo.out" },
      });

      tl.from(
        ".h-right .ph",
        { clipPath: "inset(0 0 100% 0 round 22px)", duration: 1.5 },
        0,
      )
        .from(".h-right .sk", { yPercent: 12, scale: 1.15, duration: 2 }, 0)
        .from(
          ".h-mid .ln > span",
          { yPercent: 115, duration: 1.2, stagger: 0.12 },
          0.3,
        )
        .from(
          ".h-mid p, .h-left .logo, .h-foot, .h-meta, .dl",
          { opacity: 0, y: 14, duration: 1, stagger: 0.08 },
          0.7,
        )
        .to(
          ".pill",
          {
            "--fill": "100%",
            color: "#ffffff",
            duration: 0.85,
          },
          0.95,
        )
        .fromTo(
          ".h-right",
          { clipPath: "inset(0% 0% 0% 100% round 22px)" },
          { clipPath: "inset(0% 0% 0% 0% round 22px)", duration: 1.5 },
          0,
        )
        .fromTo(".herobannerrr", { scale: 1.25 }, { scale: 1, duration: 2 }, 0);

      tlRef.current = tl;
    }, root);

    if (imgRef.current?.complete) {
      setImgLoaded(true);
    }

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (imgLoaded && tlRef.current) {
      tlRef.current.play(0);
    }
  }, [imgLoaded]);

  return (
    <section className="hero" ref={root}>
      <div className="h-left">
        <div className="logo">
          <div className="logogggflexxx">
            <div>
              <a href="">
                <img src="/images/logo-montee.svg" alt="" />
              </a>
            </div>
            <div className="rightsideloggggo">
              <a href="">
                <img src="/images/logos/map-icon.svg" alt="" />
              </a>
              <a href="">
                <img src="/images/logos/menu-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="h-mid">
          <p className="paragraphtexttt HeadingDraksectionnn">
            Building your dreams
          </p>
          <h1 className="herobannerheading">
            <Lines
              lines={[
                "Real Estate in Dubai:",
                "Ideal for Living and",
                "Investing",
              ]}
            />
          </h1>
        </div>
        <div className="h-foot">
          <a href=" ">
            <span className="pill contactuuusss">
              <img
                className="animateicon"
                src="/images/icons/calllogo.png"
                alt=""
              />
              Contact Us Now
            </span>
          </a>

          <div className="exploreherobannerr">
            <span className="paragraphtexttt">
              Explore All <br /> Our Properties
            </span>

            <div className="inmagetag">
              <img src="/images/analysis/commercialsq.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-right">
        <img
          ref={imgRef}
          className="herobannerrr"
          src="/images/herobannerimage.jpg"
          alt="Dubai real estate"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(true)}
        />
        <div className="h-meta">
          <span className="paragraphtexttt">
            More than 1,500 real <br /> estate properties
          </span>
          <span className="paragraphtexttt">
            From $145,000 with a <br /> yield of 10% per annum
          </span>

          <div className="omebannerlogosss">
            <a href=" ">
              <img src="/images/icons/logoheart.png" alt="" />
            </a>
            <a href=" ">
              <img src="/images/icons/logohpouse.png" alt="" />
            </a>
          </div>
        </div>

        <div
          className="dl paragraphtexttt fontweightttt sl-btn sl-btn--box"
          style={{ "--sl-delay": "1s" }}
        >
          <span className="fontweightttt">
            catalog <br /> download
          </span>
          <span>↓</span>
        </div>
        <div className="h-marq">
          <Marq
            text={[
              "With an initial payment from $25,000",
              "Interest-free installments",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
