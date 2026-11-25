export default function Lines({ lines }) {
  return lines.map((t, i) => (
    <span className="ln" key={i}>
      <span>{t}</span>
    </span>
  ));
}
