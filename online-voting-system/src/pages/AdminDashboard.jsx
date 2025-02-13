const AdminDashboard = () => {
    // This would typically come from an API or database
    const electionStats = {
      totalVoters: 1000,
      votesCast: 370, // Fixed the typo
      remainingTime: "2 days",
    }
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>
  
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Registered Voters" value={electionStats.totalVoters} />
          <StatCard title="Votes Cast" value={electionStats.votesCast} />
          <StatCard title="Time Remaining" value={electionStats.remainingTime} />
        </div>
  
        {/* Admin Actions */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Admin Actions</h3>
          <div className="flex flex-wrap gap-4">
            <ActionButton color="blue" text="Manage Candidates" />
            <ActionButton color="green" text="View Detailed Results" />
            <ActionButton color="red" text="End Election" />
          </div>
        </div>
      </div>
    )
  }
  
  // Reusable Stat Card Component
  const StatCard = ({ title, value }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 transition-transform transform hover:scale-105">
      <h3 className="font-semibold text-lg text-gray-700">{title}</h3>
      <p className="text-4xl font-bold text-blue-600 mt-2">{value}</p>
    </div>
  )
  
  // Reusable Button Component
  const ActionButton = ({ color, text }) => {
    const colors = {
      blue: "bg-blue-500 hover:bg-blue-600",
      green: "bg-green-500 hover:bg-green-600",
      red: "bg-red-500 hover:bg-red-600",
    }
  
    return (
      <button className={`${colors[color]} text-white px-5 py-2 rounded-lg font-medium transition-all transform hover:scale-105`}>
        {text}
      </button>
    )
  }
  
  export default AdminDashboard
  