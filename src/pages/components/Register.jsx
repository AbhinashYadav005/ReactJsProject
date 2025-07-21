import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    if (!name || !email || !password) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password
      });

      if (response.status === 201) {
        alert("Registered successfully!");
      } else {
        alert(response.data.message || "Registration failed.");
      }
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full my-2"
        />
        <input
          type="email"
          placeholder="Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full my-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full my-2"
        />

        <button
          onClick={handleRegister}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </div>
    </>
  );
}

export default Register;