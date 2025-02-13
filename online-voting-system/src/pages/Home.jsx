import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-500 text-center px-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg p-10 rounded-xl shadow-2xl max-w-xl">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-800">
          Welcome to the Online Voting System
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Exercise your right to vote securely and conveniently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:bg-blue-700 shadow-md"
          >
            Register to Vote
          </Link>
          <Link
            to="/login"
            className="bg-green-500 text-white px-2 py-5
             rounded-lg font-semibold transition-all transform hover:scale-105 hover:bg-green-600 shadow-md"
          >
            Login to Vote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
