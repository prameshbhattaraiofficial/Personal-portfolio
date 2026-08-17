export default function Education({ items }) {
  return (
    <section id="education">
      <div className="section-head">
        <span className="section-tag">04</span>
        <h2>Education</h2>
      </div>
      <div className="edu-grid">
        {items.map((item) => (
          <div className="edu-card" key={item.school}>
            <div className="edu-date">{item.period}</div>
            <div className="edu-degree">{item.degree}</div>
            <div className="edu-school">{item.school}</div>
            <div className="edu-gpa">GPA {item.gpa}</div>
            <div className="edu-course">{item.coursework.join(' • ')}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
