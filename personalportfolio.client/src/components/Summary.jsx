export default function Summary({ text }) {
  return (
    <section id="summary">
      <div className="section-head">
        <span className="section-tag">01</span>
        <h2>Summary</h2>
      </div>
      <p className="summary-text">{text}</p>
    </section>
  )
}
