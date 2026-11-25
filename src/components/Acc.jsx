import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, RM } from "../motion";

export default function Acc({ cls, open, onToggle, label, body, thumb, idx }) {
  const bd = useRef();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    gsap.to(bd.current, {
      height: open ? "auto" : 0,
      duration: RM ? 0 : 0.55,
      ease: "power3.inOut",
      onComplete: () => ScrollTrigger.refresh(),
    });
  }, [open]);

  return (
    <div className={cls} data-open={open}>
      <button onClick={onToggle} aria-expanded={open}>
        {thumb}
        <span className="lb paragraphtexttt">
          {label}
          {idx && <sup>{idx}</sup>}
        </span>
        <span className={cls === "sp" ? "ch" : "pl"}>
          {cls === "sp" ? "↓" : "+"}
        </span>
      </button>
      <div className="bd" ref={bd}>
        <p className="paragraphtexttt">{body}</p>
      </div>
    </div>
  );
}
