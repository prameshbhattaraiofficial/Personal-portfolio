import ArchitectureDiagram from './ArchitectureDiagram.jsx'

export default function Hero({ profile }) {
  return (
    <section className="hero" style={{ border: 'none', paddingTop: '88px' }}>
      <div>
        <div className="eyebrow">available for opportunities</div>
        <h1 className="name">{profile.name}</h1>
        <div className="role">{profile.role}</div>
        <p className="tagline">{profile.tagline}</p>
        <div className="hero-meta">
          <span>{profile.location}</span>
          <span>{profile.email}</span>
          <span>{profile.phone}</span>
        </div>
        <div className="btn-row">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn btn-secondary" href={profile.gitHub} target="_blank" rel="noopener noreferrer">GitHub </a>
          <a className="btn btn-secondary" href={profile.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <ArchitectureDiagram />
    </section>
  )
}
