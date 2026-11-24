import { Link } from 'react-router'
import JobCard from '../components/JobCard'

function Applications({ jobs, appliedCount, limitWarning, applyForJob, withdrawApplication }) {
  const appliedJobs = jobs.filter((job) => job.isApplied)

  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Application tracker</p>
          <h1>Applied jobs</h1>
        </div>
        <span className="usage">Applications used {appliedCount}/3</span>
      </div>
      {limitWarning && <p className="warning" role="alert">{limitWarning}</p>}
      {(() => {
        if (appliedJobs.length > 0) {
          return (
            <div className="job-grid">
              {appliedJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onApply={applyForJob}
                  onWithdraw={withdrawApplication}
                />
              ))}
            </div>
          )
        } else {
          return (
            <div className="empty-state">
              <p>You have not applied to any jobs yet.</p>
              <Link className="button" to="/jobs">Find a role</Link>
            </div>
          )
        }
      })()}
    </main>
  )
}

export default Applications
