import { useState } from 'react'
import './App.css'

function App() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  return (
    <div className="App">
      <h1>Advent of Code 2025</h1>
      <p className="subtitle">
        TypeScript solutions for Advent of Code challenges
      </p>
      
      <div className="content">
        <section className="info">
          <h2>About</h2>
          <p>
            Welcome to my Advent of Code 2025 solution repository! 
            This site showcases my solutions to the daily programming challenges.
          </p>
          <p>
            Each day's challenge will be solved using TypeScript, and you can 
            browse the solutions and see the results here.
          </p>
        </section>

        <section className="days">
          <h2>Solutions</h2>
          <p>Solutions will appear here as they are completed throughout December.</p>
          <div className="day-grid">
            {/* Days will be added here as solutions are completed */}
            {Array.from({ length: 25 }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                className={`day-button ${selectedDay === day ? 'selected' : ''}`}
                onClick={() => setSelectedDay(day)}
                disabled={true}
              >
                Day {day}
              </button>
            ))}
          </div>
        </section>

        {selectedDay && (
          <section className="solution">
            <h2>Day {selectedDay}</h2>
            <p>Solution coming soon...</p>
          </section>
        )}
      </div>
    </div>
  )
}

export default App
