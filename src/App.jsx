import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import jobsData from './data/jobs'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Listings from './pages/Listings'
import ListingView from './pages/ListingView'
import Applications from './pages/Applications'
import './App.css'

function App() {
  const [jobs, setJobs] = useState(jobsData)
  const [limitWarning, setLimitWarning] = useState('')
  const [modeFilter, setModeFilter] = useState('All')
  const [search, setSearch] = useState('')

  const applyForJob = (id) => {
    const job = jobs.find((item) => item.id === id)
    let appliedCount = 0
    jobs.forEach((item) => {
      if (item.isApplied) appliedCount += 1
    })

    if (job && job.openings > 0 && job.isApplied === false) {
      if (appliedCount >= 3) {
        setLimitWarning('Application limit reached. Withdraw a job before applying to another.')
        return
      }

      const updatedJobs = jobs.map((item) => {
        if (item.id === id) {
          return { ...item, isApplied: true }
        } else {
          return item
        }
      })
      setJobs(updatedJobs)
      setLimitWarning('')
    }
  }

  const withdrawApplication = (id) => {
    const updatedJobs = jobs.map((item) => {
      if (item.id === id && item.isApplied) {
        return { ...item, isApplied: false }
      }
      return item
    })
    setJobs(updatedJobs)
    setLimitWarning('')
  }

  let appliedCount = 0
  jobs.forEach((job) => {
    if (job.isApplied) appliedCount += 1
  })

  const visibleJobs = jobs.filter((job) => {
    const matchesMode = modeFilter === 'All' || job.mode === modeFilter
    const term = search.toLowerCase()
    const matchesSearch =
      job.title.toLowerCase().includes(term) ||
      job.company.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term)
    return matchesMode && matchesSearch
  })

  return (
    <BrowserRouter>
      <Navbar appliedCount={appliedCount} />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Landing jobs={jobs} appliedCount={appliedCount} />} />
          <Route
            path="/jobs"
            element={
              <Listings
                jobs={visibleJobs}
                limitWarning={limitWarning}
                modeFilter={modeFilter}
                search={search}
                setModeFilter={setModeFilter}
                setSearch={setSearch}
                applyForJob={applyForJob}
                withdrawApplication={withdrawApplication}
              />
            }
          />
          <Route
            path="/jobs/:id"
            element={
              <ListingView
                jobs={jobs}
                limitWarning={limitWarning}
                applyForJob={applyForJob}
                withdrawApplication={withdrawApplication}
              />
            }
          />
          <Route
            path="/applied"
            element={
              <Applications
                jobs={jobs}
                appliedCount={appliedCount}
                limitWarning={limitWarning}
                applyForJob={applyForJob}
                withdrawApplication={withdrawApplication}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
