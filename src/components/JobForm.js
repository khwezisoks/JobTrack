import React, { useState } from "react";

function JobForm({ addJob }) {
  const [form, setForm] = useState({
    company: "",
    position: "",
    status: "Applied",
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.company.trim() || !form.position.trim()) {
      return;
    }

    // Add new job
    addJob({
      ...form,
      id: Date.now(),
    });

    // Reset form
    setForm({
      company: "",
      position: "",
      status: "Applied",
      date: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
      />

      <input
        type="text"
        name="position"
        placeholder="Position"
        value={form.position}
        onChange={handleChange}
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Rejected">Rejected</option>
      </select>

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <input
        type="text"
        name="notes"
        placeholder="Notes"
        value={form.notes}
        onChange={handleChange}
      />

      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;