"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (!name || !email || !password || !confirmPassword) {
      setError("⚠️ All fields are required")
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("❌ Passwords do not match")
      setIsLoading(false)
      return
    }

    if (!agree) {
      setError("⚠️ You must agree to the terms of service")
      setIsLoading(false)
      return
    }

    try {
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Registration attempt", { name, email, password })
      alert("🎉 Registration successful!")
    } catch (err) {
      setError("❌ Registration failed. Try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex max-w-4xl w-full">
        {/* Left Section - Branding */}
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-500 text-white w-1/2 p-10">
          <h1 className="text-2xl font-extrabold">🗳️ Online Voting</h1>
          <p className="mt-3 text-lg font-medium text-center">
            Vote Securely & Fairly <br />
            Join the Future of Elections!
          </p>
          <div className="mt-6 space-y-3">
            <span className="text-5xl">📊</span>
            <span className="text-5xl">🗳️</span>
            <span className="text-5xl">✅</span>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-800 text-center">
            Create Account
          </h2>

          {error && (
            <p className="bg-red-100 text-red-700 border-l-4 border-red-500 p-3 mb-4 rounded text-center font-medium">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password Input with Visibility Toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-600 hover:text-gray-900"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="w-4 h-4"
              />
              <label className="text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="text-blue-500 underline">
                  Terms of Service
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white font-semibold transition-all ${
                isLoading
                  ? "opacity-50 cursor-not-allowed bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "SIGN UP"}
            </button>
          </form>

          {/* Social Login Options */}
          <div className="mt-4">
            <p className="text-center text-gray-600">Or Sign Up With</p>
            <div className="flex justify-center space-x-4 mt-3">
              <button className="bg-white border p-2 rounded-full shadow-md hover:shadow-lg transition">
                🌐 Google
              </button>
              <button className="bg-white border p-2 rounded-full shadow-md hover:shadow-lg transition">
                📘 Facebook
              </button>
              <button className="bg-white border p-2 rounded-full shadow-md hover:shadow-lg transition">
                🕊️ Twitter
              </button>
            </div>
          </div>

          {/* Login Link */}
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
