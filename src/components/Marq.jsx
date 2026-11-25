import { useLayoutEffect, useRef } from "react";
import { gsap, RM } from "../motion";


export default function Marq({
  text = [],
  logos = [],
  cls = "",
  duration = 30,
}) {
  const track = useRef();

  useLayoutEffect(() => {
    if (RM) return;
    const tween = gsap.to(track.current, {
      xPercent: -50,
      duration,
      ease: "none",
      repeat: -1,
    });
    return () => tween.kill();
  }, [duration]);

  const items = logos.length ? logos : text;

  return (
    <div className={"mq " + cls}>
      <div className="mq-t" ref={track}>
        {[0, 1].map((k) => (
          <div key={k} style={{ display: "flex", alignItems: "center" }}>
            {items.map((item, i) => (
              <span key={i}>
                {typeof item === "string" ? (
                  item
                ) : (
                  <img src={item.src} alt={item.name} className="mq-logo" />
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
