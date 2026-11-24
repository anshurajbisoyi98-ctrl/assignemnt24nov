import { Link } from 'react-router'

function JobCard({ job, onApply, onWithdraw }) {
  let closed = false
  if (job.openings === 0) {
    closed = true
  }

  let actionButton = null
  if (!closed) {
    if (job.isApplied) {
      actionButton = (
        <button className="button secondary" type="button" onClick={() => onWithdraw(job.id)}>
          Withdraw
        </button>
      )
    } else {
      actionButton = (
        <button className="button" type="button" onClick={() => onApply(job.id)}>
          Apply
        </button>
      )
    }
  }

  return (
    <article className="job-card">
      <div className="job-card-top">
        <span className="mode-badge">{job.mode}</span>
        {closed && <span className="closed-badge">Hiring Closed</span>}
      </div>
      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>
      <p className="location">{job.location}</p>
      <div className="job-card-actions">
        <Link className="details-link" to={`/jobs/${job.id}`}>View Details</Link>
        {actionButton}
      </div>
    </article>
  )
}

export default JobCard
