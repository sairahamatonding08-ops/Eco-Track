'use client'

import { useState } from 'react'

export default function CalculatorPage() {
  const [km, setKm] = useState(20)
  const [meals, setMeals] = useState(7)
  
  const calculate = () => (km * 0.2 + meals * 0.5).toFixed(1)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Carbon Calculator</h1>
      
      <div className="space-y-6">
        <div>
          <label className="block mb-2">Transport (km/day): {km}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={km}
            onChange={(e) => setKm(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div>
          <label className="block mb-2">Meat meals/week: {meals}</label>
          <input
            type="range"
            min="0"
            max="21"
            value={meals}
            onChange={(e) => setMeals(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <h3 className="font-bold mb-2">Your Carbon Footprint</h3>
          <div className="text-3xl font-bold text-green-700">{calculate()} kg CO₂/day</div>
          <p className="text-sm text-gray-600 mt-2">
            {parseFloat(calculate()) < 10 ? 'Good job!' : 'Try to reduce transport'}
          </p>
        </div>
      </div>
    </div>
  )
      }
