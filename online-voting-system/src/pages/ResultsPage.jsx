"use client"

import { useState, useEffect } from "react"

const ResultsPage = () => {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchResults()
  }, [])

  const fetchResults = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const data = [
        { candidate: "Candidate 1", votes: 150 },
        { candidate: "Candidate 2", votes: 120 },
        { candidate: "Candidate 3", votes: 100 },
      ]
      setResults(data)
    } catch (err) {
      setError("❌ Failed to fetch results. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const totalVotes = results.reduce((sum, result) => sum + result.votes, 0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-blue-800">📊 Election Results</h2>

        {isLoading ? (
          <div className="text-center text-lg text-gray-600 animate-pulse">Loading results...</div>
        ) : error ? (
          <div className="text-center text-red-500 font-semibold">{error}</div>
        ) : (
          <>
            <div className="space-y-5">
              {results.map((result, index) => (
                <ResultCard key={index} result={result} totalVotes={totalVotes} />
              ))}
            </div>
            <p className="mt-6 text-gray-700 text-center font-semibold">🗳️ Total Votes: {totalVotes}</p>
          </>
        )}

        <button
          onClick={fetchResults}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:bg-blue-700 shadow-md"
        >
          🔄 Refresh Results
        </button>
      </div>
    </div>
  )
}

// 🎨 Improved Result Card Component
const ResultCard = ({ result, totalVotes }) => {
  const percentage = ((result.votes / totalVotes) * 100).toFixed(1)

  return (
    <div className="bg-gray-50 p-5 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
      <h3 className="font-bold text-xl text-gray-800">{result.candidate}</h3>
      <div className="mt-2 bg-gray-300 rounded-full h-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="mt-2 text-gray-700 font-semibold">{result.votes} votes ({percentage}%)</p>
    </div>
  )
}

export default ResultsPage
