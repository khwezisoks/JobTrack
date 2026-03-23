import React from "react";
import JobItem from "./JobItem";

function JobList({ jobs, deleteJob }) {
  if (jobs.length === 0) {
    return <p>No jobs added yet.</p>;
  }

  return (
    <div>
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          deleteJob={deleteJob}
        />
      ))}
    </div>
  );
}

export default JobList;