// Chips that get the highlighted "lead" treatment â€” the two technologies
// this portfolio is built with.
const LEAD_ITEMS = new Set(['React', 'ASP.NET Core'])

export default function Stack({ skills }) {
  return (
    <section id="stack">
      <div className="section-head">
        <span className="section-tag">02</span>
        <h2>Stack</h2>
      </div>
      <div className="stack-grid">
        {skills.map((group) => (
          <div className="stack-card" key={group.category}>
            <h3>{group.category.toLowerCase()}</h3>
            <div className="chip-row">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`chip${LEAD_ITEMS.has(item) ? ' chip-lead' : ''}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
