import { Link } from 'react-router'

function Landing({ jobs, appliedCount }) {
  const remoteCount = jobs.filter((job) => job.mode === 'Remote').length

  return (
    <main className="page home-page">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Your next role is closer than you think</p>
          <h1>Find work that fits your life.</h1>
          <p className="hero-copy">Explore fresh openings, compare roles, and keep your applications organized in one place.</p>
          <Link className="button hero-button" to="/jobs">Explore open roles</Link>
        </div>
        <div className="hero-mark" aria-hidden="true">WL</div>
      </section>
      <section className="stats">
        <article><strong>{jobs.length}</strong><span>Total Jobs</span></article>
        <article><strong>{appliedCount}</strong><span>Applied Jobs</span></article>
        <article><strong>{remoteCount}</strong><span>Remote Jobs</span></article>
      </section>
    </main>
  )
}

export default Landing
