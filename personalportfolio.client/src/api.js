/*const BASE = '/api/portfolio'*/

const BASE = import.meta.env.VITE_API_URL || '/api/portfolio'

async function getJson(path) {
  const res = await fetch(`${BASE}/${path}`)
  if (!res.ok) {
    throw new Error(`Request to "${path}" failed with status ${res.status}`)
  }
  return res.json()
}

export const api = {
  getProfile: () => getJson('profile'),
  getSkills: () => getJson('skills'),
  getExperience: () => getJson('experience'),
  getEducation: () => getJson('education'),
  getCertificates: () => getJson('certificates'),
}
