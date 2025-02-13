"use client"

import { useState } from "react"

const VotingPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("")
  const [isVoted, setIsVoted] = useState(false)
  const candidates = ["Candidate 1", "Candidate 2", "Candidate 3"]

  const handleVote = () => {
    if (!selectedCandidate) {
      alert("Please select a candidate")
      return
    }
    setIsVoted(true)
    console.log("Vote cast for:", selectedCandidate)
    setTimeout(() => alert("✅ Thank you for voting!"), 700)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-800">🗳️ Cast Your Vote</h2>

        {isVoted ? (
          <div className="text-center text-green-600 font-semibold text-lg animate-fade-in">
            ✅ You have successfully voted for <span className="font-bold">{selectedCandidate}</span>!
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {candidates.map((candidate, index) => (
                <div
                  key={index}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all transform hover:scale-105 ${
                    selectedCandidate === candidate
                      ? "border-blue-500 bg-blue-100 shadow-md"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedCandidate(candidate)}
                >
                  <input
                    type="radio"
                    id={`candidate-${index}`}
                    name="candidate"
                    value={candidate}
                    checked={selectedCandidate === candidate}
                    onChange={() => setSelectedCandidate(candidate)}
                    className="hidden"
                  />
                  <div
                    className={`w-6 h-6 flex items-center justify-center border-2 rounded-full mr-3 transition-all ${
                      selectedCandidate === candidate ? "border-blue-500 bg-blue-500" : "border-gray-400"
                    }`}
                  >
                    {selectedCandidate === candidate && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <label
                    htmlFor={`candidate-${index}`}
                    className="text-lg font-medium cursor-pointer select-none"
                  >
                    {candidate}
                  </label>
                </div>
              ))}
            </div>

            <button
              onClick={handleVote}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:bg-blue-700 shadow-md"
            >
              ✅ Submit Vote
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default VotingPage
