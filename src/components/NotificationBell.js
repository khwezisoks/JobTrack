import React, { useState } from "react";

function NotificationBell({ reminders }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="notification-container">
      <div className="bell" onClick={() => setOpen(!open)}>
        🔔
        {reminders.length > 0 && (
          <span className="badge">{reminders.length}</span>
        )}
      </div>

      {open && (
        <div className="notification-panel">
          <h4>Notifications</h4>

          {reminders.length === 0 ? (
            <p>No reminders</p>
          ) : (
            reminders.map((job) => (
              <div key={job.id} className="notification-item">
                📅 Interview Today: <strong>{job.company}</strong> - {job.position}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationBell;