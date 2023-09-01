import { useState } from "react"

/*
🕛 Investi umas 8 horas fazendo a v1 deste desafio!
*/

export function App() {
  return <Counter />
}

function Counter () {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  console.log('step:', step)
  console.log('count:', count)

  const date = new Date()
  date.setDate(date.getDate() + count)

  const increaseCount = () => setCount(c => c + step)
  const decreaseCount = () => setCount(c => c - step)

  const formattedDate = date.toDateString()

  return (
    <div className="container">
      <div>
        <input value={step} onChange={(e) => setStep(+e.target.value)} type="range" min="0" max="10" />
      </div>

      <div>
        <button onClick={decreaseCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={increaseCount}>+</button>
      </div>

      <p>{
        count === 0 
          ? `Today is ${formattedDate}` 
          : count > 0 
            ? `${count} days from today is ${formattedDate}` 
            : `${(String(count)).replace('-', '')} days ago was ${formattedDate}`
      }</p>

      {(step !== 1 || count !== 0) && (
        <button onClick={() => {
          setStep(1)
          setCount(0)
        }}>
          Reset
        </button>
      )}
    </div>
  )
}