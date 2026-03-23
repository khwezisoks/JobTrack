import React from "react";

function JobItem({ job, deleteJob }) {
  return (
    <div className="card">
      <h3>{job.company}</h3>

      <p><strong>Position:</strong> {job.position}</p>

      <p>
        <strong>Status:</strong>{" "}
        <span className={`status ${job.status.toLowerCase()}`}>
          {job.status}
        </span>
      </p>

      <p><strong>Date:</strong> {job.date}</p>
      <p><strong>Notes:</strong> {job.notes}</p>

      <button onClick={() => deleteJob(job.id)}>Delete</button>
    </div>
  );
}

export default JobItem;