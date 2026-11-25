import { useLayoutEffect, useRef } from "react";
import { gsap } from "../motion";

const STATS = [
  [75, "+", "Successful Transactions Monthly"],
  [73, "%", "Customer Satisfaction Rate"],
  [375, "", "Exquisite Properties Ready for Your Selection"],
];

export default function About() {
  const root = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".cnt").forEach((el) => {
        const o = { v: 0 };
        gsap.to(o, {
          v: +el.dataset.to,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.round(o.v);
          },
        });
      });
      gsap.from(".stat", {
        scrollTrigger: { trigger: root.current, start: "top 60%" },
        x: -40,
        opacity: 0,
        stagger: 0.55,
        duration: 1,
        ease: "expo.out",
      });

      gsap.from(".about-photo", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          end: "top 10%",
          scrub: true,
        },
        scale: 0.88,
        borderRadius: 60,
      });

      gsap.from(".team div > *", {
        scrollTrigger: { trigger: ".team", start: "top 90%", once: true },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.12,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div className="container">
      <section className="about" ref={root}>
        {/* <div className="container"> */}
        <div className="l">
          <div>
            <p className="small paragraphtexttt">
              At Golden Gate Properties, we offer more than just real estate
              services; we provide an unparalleled experience tailored to meet
              your needs and exceed your expectations.
            </p>

            <div className="team gap-2">
              <div>
                {[0, 1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src="/images/contact-testi.webp"
                    alt={`Team / location ${i + 1}`}
                  />
                ))}
              </div>

              <p className="paragraphtexttt widthhalffff">
                Meet Our Professional team
              </p>
            </div>
          </div>
          <div>
            {STATS.map((s, i) => (
              <div className="stat" key={i}>
                <b>
                  <span className="cnt counterheadingg" data-to={s[0]}>
                    0
                  </span>
                  {s[1]}
                </b>
                <span>{s[2]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* <Photo g="arch" sk="arch" className="about-photo"> */}

        <img className="contactbgimage" src="/images/contact-us.jpg" alt="" />
        <span
          className="pill lt contactuuusss"
          style={{ position: "absolute", right: 16, top: 16 }}
        >
          Contact us
        </span>
        {/* <span className="cap">Building your dreams</span> */}
        {/* <div className="offer">
          Special offer: get the consultation with our expert
        </div> */}
        {/* </Photo> */}
        {/* </div> */}
      </section>
    </div>
  );
}
