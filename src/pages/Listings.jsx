import JobCard from '../components/JobCard'

function Listings({
  jobs,
  limitWarning,
  modeFilter,
  search,
  setModeFilter,
  setSearch,
  applyForJob,
  withdrawApplication,
}) {
  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Open positions</p>
          <h1>Browse jobs</h1>
        </div>
        <span className="results-count">{jobs.length} results</span>
      </div>
      {limitWarning && <p className="warning" role="alert">{limitWarning}</p>}
      <div className="filters">
        <input
          aria-label="Search jobs"
          placeholder="Search title, company, or location"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="filter-buttons" aria-label="Filter by work mode">
          {['All', 'Remote', 'Onsite', 'Hybrid'].map((mode) => (
            (() => {
              let buttonClass = 'filter'
              if (modeFilter === mode) {
                buttonClass = 'filter active'
              }

              return (
                <button
                  key={mode}
                  className={buttonClass}
                  type="button"
                  onClick={() => setModeFilter(mode)}
                >
                  {mode}
                </button>
              )
            })()
          ))}
        </div>
      </div>
      {(() => {
        if (jobs.length > 0) {
          return (
            <div className="job-grid">
              {jobs.map((job) => (
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
          return <p className="empty-state">No jobs match your search.</p>
        }
      })()}
    </main>
  )
}

export default Listings
