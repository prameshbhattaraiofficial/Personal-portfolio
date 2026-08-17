export default function Footer({ profile }) {
  return (
    <footer id="contact">
      <div className="wrap">
        <h2>Let's build something.</h2>
        <p>Open to React / .NET developer roles. The fastest way to reach me is email or a message on LinkedIn.</p>
        <div className="footer-links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn btn-secondary" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
          <a className="btn btn-secondary" href={profile.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn btn-secondary" href={profile.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="footer-bottom">
          {profile.location} <span className="accent">Â·</span> served from an ASP.NET Core API
        </div>
      </div>
    </footer>
  )
}
