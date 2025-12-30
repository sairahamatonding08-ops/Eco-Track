export default function ChallengesPage() {
  const challenges = [
    { title: 'Plastic-Free Week', points: 500, joined: true },
    { title: 'Local Food Challenge', points: 300, joined: false },
    { title: 'Energy Saver', points: 600, joined: false },
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Community Challenges</h1>
      
      <div className="space-y-4 mb-8">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">{challenge.title}</h3>
                <p className="text-sm text-gray-600">{challenge.points} points</p>
              </div>
              <button className={`px-4 py-2 rounded ${
                challenge.joined 
                  ? 'bg-gray-200 text-gray-700' 
                  : 'bg-green-600 text-white'
              }`}>
                {challenge.joined ? 'Joined' : 'Join'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-green-50 p-4 rounded">
        <h3 className="font-bold mb-2">Your Progress</h3>
        <p className="mb-2">Points: <span className="font-bold">1,320</span></p>
        <p className="text-sm">Rank: <span className="font-bold">#8</span></p>
      </div>
    </div>
  )
            }
