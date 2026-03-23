import React, { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Filter from "./components/Filter";
import Stats from "./components/Stats";
import NotificationBell from "./components/NotificationBell";
import Auth from "./components/Auth";

function App() {
  const [user, setUser] = useState(null);

  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // ✅ Load user from localStorage
  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const loggedIn = localStorage.getItem("loggedIn");

      if (loggedIn && savedUser) {
        setUser(savedUser);
      }
    } catch (err) {
      console.log("Auth error:", err);
    }
  }, []);

  // ✅ Save jobs locally
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // ✅ Add job
  const addJob = (job) => {
    setJobs((prev) => [...prev, job]);
  };

  // ✅ Delete job
  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    setUser(null);
  };

  // 📅 Reminders
  const today = new Date().toISOString().split("T")[0];

  const reminders = jobs.filter(
    (job) => job.status === "Interview" && job.date === today
  );

  // 🔍 Filtering + Search
  const filteredJobs = jobs
    .filter((job) => (filter === "All" ? true : job.status === filter))
    .filter((job) =>
      job.company?.toLowerCase().includes(search.toLowerCase()) ||
      job.position?.toLowerCase().includes(search.toLowerCase())
    );

  // 🔐 Show login first
  if (!user) {
    return <Auth setUser={setUser} />;
  }

  return (
    <div className="container">
      <div className="top-bar">
        <span>Welcome, {user.email}</span>
        <button onClick={logout}>Logout</button>
      </div>

      <NotificationBell reminders={reminders} />

      <h1>Job Tracker</h1>

      <Stats jobs={jobs} />

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <JobForm addJob={addJob} />
      <Filter setFilter={setFilter} />
      <JobList jobs={filteredJobs} deleteJob={deleteJob} />
    </div>
  );
}

export default App;