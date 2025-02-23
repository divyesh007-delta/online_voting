"use client"

import { useState, useEffect } from "react"

const AdminDashboard = () => {
  const [elections, setElections] = useState([])
  const [newElectionName, setNewElectionName] = useState("")
  const [newCandidates, setNewCandidates] = useState([""])
  const [duration, setDuration] = useState("") // Duration input (in minutes)

  useEffect(() => {
    const savedElections = JSON.parse(localStorage.getItem("elections")) || []
    setElections(savedElections)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingTime()
    }, 1000) // Update every second
    return () => clearInterval(interval)
  }, [elections])

  // Create a new election
  const createElection = () => {
    if (!newElectionName.trim() || !duration || newCandidates.some((c) => !c.trim())) {
      return alert("⚠️ Election name, duration, and all candidate names must be filled!")
    }

    const durationMs = parseInt(duration) * 60 * 1000 // Convert minutes to milliseconds
    const endTime = Date.now() + durationMs

    const newElection = {
      id: Date.now(),
      name: newElectionName,
      candidates: newCandidates.map((name) => ({ name, votes: 0 })),
      endTime,
      totalVotes: 0,
    }

    const updatedElections = [...elections, newElection]
    setElections(updatedElections)
    localStorage.setItem("elections", JSON.stringify(updatedElections))

    setNewElectionName("")
    setNewCandidates([""])
    setDuration("")
    alert("✅ New election created successfully!")
  }

  // Update remaining time for each election
  const updateRemainingTime = () => {
    const updatedElections = elections.map((election) => {
      const timeLeft = election.endTime - Date.now()
      return {
        ...election,
        remainingTime: timeLeft > 0 ? formatTimeLeft(timeLeft) : "Expired",
      }
    })
    setElections(updatedElections)
  }

  // Format time (minutes, seconds)
  const formatTimeLeft = (ms) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}m ${seconds}s`
  }

  // Delete an election
  const deleteElection = (id) => {
    if (window.confirm("⚠️ Are you sure you want to delete this election?")) {
      const updatedElections = elections.filter((e) => e.id !== id)
      setElections(updatedElections)
      localStorage.setItem("elections", JSON.stringify(updatedElections))
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0F3460] to-[#16213E] px-6">
      <div className="w-full max-w-4xl bg-gray-900 text-white p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-blue-400">🛠️ Admin Dashboard</h2>

        {/* Create New Election */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">🗳️ Create New Election</h3>
          <input
            type="text"
            placeholder="Enter election name"
            value={newElectionName}
            onChange={(e) => setNewElectionName(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg placeholder-gray-400 mb-3"
          />
          <h4 className="text-lg font-semibold">Candidates:</h4>
          {newCandidates.map((candidate, index) => (
            <div key={index} className="flex items-center gap-3 mt-2">
              <input
                type="text"
                placeholder={`Candidate ${index + 1}`}
                value={candidate}
                onChange={(e) => {
                  const updatedCandidates = [...newCandidates]
                  updatedCandidates[index] = e.target.value
                  setNewCandidates(updatedCandidates)
                }}
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg placeholder-gray-400"
              />
            </div>
          ))}
          <button onClick={() => setNewCandidates([...newCandidates, ""])} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            ➕ Add Candidate
          </button>

          {/* Election Duration */}
          <h4 className="text-lg font-semibold mt-4">Election Duration (Minutes):</h4>
          <input
            type="number"
            placeholder="Enter duration in minutes"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg placeholder-gray-400 mt-2"
          />

          <button onClick={createElection} className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            ✅ Create Election
          </button>
        </div>

        {/* Active Elections */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">📋 Active Elections</h3>
          {elections.length > 0 ? (
            elections.map((election) => (
              <div key={election.id} className="mb-6 p-4 bg-gray-800 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-blue-300">{election.name}</h4>
                <p className="text-sm text-gray-400">⏳ Time Remaining: {election.remainingTime}</p>
                <p className="text-sm text-gray-400">🗳️ Total Votes: {election.totalVotes}</p>

                <h5 className="text-lg font-semibold mt-3">Candidates:</h5>
                <ul className="space-y-1">
                  {election.candidates.map((candidate, index) => (
                    <li key={index} className="text-white">
                      - {candidate.name} ({candidate.votes} votes)
                    </li>
                  ))}
                </ul>

                <button onClick={() => deleteElection(election.id)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                  🗑 Delete Election
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No active elections.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
