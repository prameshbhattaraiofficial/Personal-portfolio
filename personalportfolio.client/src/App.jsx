import { useEffect, useState } from 'react'
import { api } from './api.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Summary from './components/Summary.jsx'
import Stack from './components/Stack.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Certificates from './components/Certificates.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    Promise.all([
      api.getProfile(),
      api.getSkills(),
      api.getExperience(),
      api.getEducation(),
      api.getCertificates(),
    ])
      .then(([profile, skills, experience, education, certificates]) => {
        if (!cancelled) {
          setData({ profile, skills, experience, education, certificates })
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (error) {
    return (
      <div className="state-screen">
        <p>Couldn't reach the API.</p>
        <p className="state-detail">
          {error} — make sure the ASP.NET Core backend is running on <code>http://localhost:5199</code>.
        </p>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="state-screen">
        <p>Loading portfolio…</p>
      </div>
    )
  }

  return (
    <>
      <Nav />
      <div className="wrap">
        <Hero profile={data.profile} />
        <Summary text={data.profile.summary} />
        <Stack skills={data.skills} />
        <Experience items={data.experience} />
        <Education items={data.education} />
        <Certificates items={data.certificates} />
      </div>
      <Footer profile={data.profile} />
    </>
  )
}
