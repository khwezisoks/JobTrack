import React, { useState } from "react";

function Auth({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 📌 Get users from localStorage
  const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  // 📌 Save users
  const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  // 🔐 Handle Login
  const handleLogin = () => {
    const users = getUsers();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedIn", "true");

    setUser(user);
  };

  // 📝 Handle Register
  const handleRegister = () => {
    const users = getUsers();

    const exists = users.find((u) => u.email === email);

    if (exists) {
      alert("User already exists");
      return;
    }

    const newUser = { email, password };

    users.push(newUser);
    saveUsers(users);

    alert("Account created! You can now login.");
    setIsLogin(true);
  };

  return (
    <div className="auth-container">
      <h1 className="app-title">JobTrack</h1>
      <p className="subtitle">Track your job applications smarter</p>

      <div className="auth-card">
        <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
        <p className="small-text">
          {isLogin ? "Login to continue" : "Register to get started"}
        </p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={isLogin ? handleLogin : handleRegister}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="link-text">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create an account" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;