export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          EcoTrack - SDG 12 Assistant
        </h1>
        <p className="text-gray-600 mb-6">
          Track your environmental impact and live sustainably.
        </p>
        <div className="bg-green-50 p-4 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-2">3 Key Features:</h2>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded shadow">
              <h3 className="font-bold">1. Carbon Calculator</h3>
              <p className="text-sm text-gray-600">Track daily footprint</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <h3 className="font-bold">2. Eco Marketplace</h3>
              <p className="text-sm text-gray-600">Find sustainable products</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <h3 className="font-bold">3. Community Challenges</h3>
              <p className="text-sm text-gray-600">Join sustainability challenges</p>
            </div>
          </div>
        </div>

        {/* SDG Section */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">SDG 12: Responsible Consumption</h2>
          <p className="text-gray-700">
            This app supports UN Sustainable Development Goal 12 by promoting
            sustainable consumption patterns and reducing environmental impact.
          </p>
        </div>
      </div>
    </div>
  )
}
