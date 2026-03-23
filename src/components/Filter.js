import React from "react";

function Filter({ setFilter }) {
  return (
    <div className="filter">
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Applied")}>Applied</button>
      <button onClick={() => setFilter("Interview")}>Interview</button>
      <button onClick={() => setFilter("Rejected")}>Rejected</button>
    </div>
  );
}

export default Filter;