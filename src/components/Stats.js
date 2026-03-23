import React from "react";

function Stats({ jobs }) {
  const total = jobs.length;
  const applied = jobs.filter(j => j.status === "Applied").length;
  const interview = jobs.filter(j => j.status === "Interview").length;
  const rejected = jobs.filter(j => j.status === "Rejected").length;

  return (
    <div className="stats">
      <div className="stat-card">Total: {total}</div>
      <div className="stat-card applied">Applied: {applied}</div>
      <div className="stat-card interview">Interview: {interview}</div>
      <div className="stat-card rejected">Rejected: {rejected}</div>
    </div>
  );
}

export default Stats;