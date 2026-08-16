export default function Certificates({ items }) {
  return (
    <section id="certificates">
      <div className="section-head">
        <span className="section-tag">05</span>
        <h2>Certificates</h2>
      </div>
      <ul className="cert-list">
        {items.map((cert) => (
          <li key={cert.name}>
            <span className="cert-name">{cert.name}</span>
            <span className="cert-issuer">{cert.issuer}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
