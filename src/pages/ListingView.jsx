import { Link, useParams } from 'react-router'

function ListingView({ jobs, limitWarning, applyForJob, withdrawApplication }) {
  const { id } = useParams()
  const job = jobs.find((item) => item.id === Number(id))

  if (!job) {
    return <main className="page"><p className="empty-state">Job not found.</p></main>
  }

  let closed = false
  if (job.openings === 0) {
    closed = true
  }

  let statusClass = 'open-badge'
  let statusText = job.openings + ' openings'
  let openingText = job.openings
  if (closed) {
    statusClass = 'closed-badge large'
    statusText = 'Hiring Closed'
    openingText = '0'
  }

  let actionButton = null
  if (!closed) {
    if (job.isApplied) {
      actionButton = (
        <button className="button secondary" type="button" onClick={() => withdrawApplication(job.id)}>
          Withdraw application
        </button>
      )
    } else {
      actionButton = (
        <button className="button" type="button" onClick={() => applyForJob(job.id)}>
          Apply for this role
        </button>
      )
    }
  }

  return (
    <main className="page">
      <Link className="back-link" to="/jobs">← Back to jobs</Link>
      {limitWarning && <p className="warning" role="alert">{limitWarning}</p>}
      <article className="details-card">
        <div className="details-header">
          <div>
            <span className="mode-badge">{job.mode}</span>
            <h1>{job.title}</h1>
            <p className="company">{job.company} · {job.location}</p>
          </div>
          <span className={statusClass}>{statusText}</span>
        </div>
        <p className="description">{job.description}</p>
        <div className="detail-meta">
          <div><span>Openings</span><strong>{openingText}</strong></div>
          <div><span>Experience required</span><strong>{job.experience}</strong></div>
        </div>
        <section>
          <h2>Skills</h2>
          <div className="skills">
            {job.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>
        {actionButton}
      </article>
    </main>
  )
}

export default ListingView
