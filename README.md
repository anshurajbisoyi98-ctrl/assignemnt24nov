# WorkLane - Job Portal (P5)

A job portal built with React and Vite for problem statement **P5**. Users can browse jobs, view details, and apply to or withdraw from jobs, with a limit on how many they can apply to.

## Student Details

- Student Name: Anshu Raj Bisoyi
- Roll Number: 15
- Problem: P5

## Features

- Home page with stats: total jobs, applied jobs, and remote jobs
- Browse jobs with search (title, company, or location)
- Filter jobs by work mode: All, Remote, Onsite, Hybrid
- Job details page with description, openings, experience, and skills
- Apply and withdraw buttons
- Limit of 3 applications at a time, with a warning message
- Jobs with 0 openings show "Hiring Closed" and cannot be applied to
- "Applied" page that lists all jobs you applied to

## Tech Stack

- React 19
- React Router
- Vite
- Plain CSS

## Project Structure

```
src/
  components/   Navbar, JobCard
  pages/        Landing, Listings, ListingView, Applications
  data/         jobs.js (sample job data)
  App.jsx       main state and routes
```

## Install and Run

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```
