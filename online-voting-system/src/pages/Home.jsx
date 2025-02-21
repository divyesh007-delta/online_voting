import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-950 text-center px-6  bg-gray-100 w-[100vw]">
      {/* Glassmorphism Card
      -gradient-to-br from-blue-800 to
      min-h-screen flex flex-col justify-center items-center bg-zinc-950 text-center px-6  
      min-h-min  
      */}
      {/* <nav>bg-opacity-80 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50
        </nav> */}
      <div className=" bg-opacity-90 backdrop-blur-lg p-12 rounded-2xl shadow-2xl max-w-5xl w-full">
        {/* {Title } */}
        <h1 className="text-7xl font-extrabold mb-10 text-neutral-50">
          Welcome to the Online Voting System
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-xl mb-8">
          Exercise your right to vote securely and conveniently.
        </p>

        {/* Button Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Register Button */}
          <Link
            to="/register"
            className="bg-blue-600 text-white text-lg px-8 py-4  rounded-full font-bold shadow-lg transition-all transform hover:scale-105 hover:bg-blue-700"
          >
            📝 Register to Vote
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-green-500 text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 hover:bg-green-600"
          >
            🔑 Login to Vote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
