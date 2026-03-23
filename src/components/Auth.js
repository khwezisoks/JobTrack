import React, { useState } from "react";

function Auth({ setUser }) {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!email) {
      alert("Enter email");
      return;
    }

    const user = { email };

    // Save locally
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedIn", "true");

    setUser(user);
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Auth;