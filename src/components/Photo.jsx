import { G, SK } from "../data";

export default function Photo({ g, sk, className = "", style, children }) {
  return (
    <div className={"ph " + className} style={{ background: G[g], ...style }}>
      {sk && SK[sk] && (
        <svg
          className="sk"
          viewBox="0 0 100 60"
          preserveAspectRatio="xMidYMax slice"
        >
          <path d={SK[sk]} fill="currentColor" />
        </svg>
      )}
      {children}
    </div>
  );
}
