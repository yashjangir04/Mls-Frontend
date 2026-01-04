import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate() ;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      // 🔹 Simulate API call
      const res = await axios.post(
        "http://localhost:3000/user/login",
        {
          email,
          password,
        },
        {
            withCredentials : true,
            headers : {
                "Content-Type" : "application/json"
            }
        }
      );

      setSuccess(true);
      navigate("/query");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 mt-24 lg:mt-0 px-10 md:px-0">
      <form
        onSubmit={handleSubmit}
        className="w-100 bg-white p-8 shadow-lg flex flex-col gap-5"
      >
        <h2 className="text-2xl text-center mont-semibold">Login</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {success && (
          <p className="text-green-500 text-sm text-center">
            Login successful!
          </p>
        )}

        <div className="flex flex-col gap-1">
          <label className="text-sm mont-regular">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border border-gray-300 px-3 py-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm mont-regular">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border border-gray-300 px-3 py-2 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#2c2b76] text-white py-2 hover:bg-[#1a1945] cursor-pointer transition disabled:opacity-50 mont-regular"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
