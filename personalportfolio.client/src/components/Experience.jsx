export default function Experience({ items }) {
  return (
    <section id="experience">
      <div className="section-head">
        <span className="section-tag">03</span>
        <h2>Experience</h2>
      </div>
      <div className="log">
        {items.map((item) => (
          <div className="commit" key={`${item.organization}-${item.period}`}>
            <div className="commit-dot" />
            <div className="commit-head">
              <span className="commit-hash">{item.period}</span>
            </div>
            <div className="commit-title">{item.title}</div>
            <div className="commit-org">{item.organization}</div>
            <div className="commit-body">
              <ul>
                {item.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
