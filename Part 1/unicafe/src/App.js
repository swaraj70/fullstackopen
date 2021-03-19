import React, { useState } from 'react'


const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    </>
  )
}

const Statistics = ({text, value}) => {

  if(text === "positive") {
    return (
      <>
        <tr>
          <td>{text}</td>
          <td>{value} %</td>
        </tr>
      </>
    )
  }

  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Stats
  const all = good + neutral + bad
  const avg = (good - bad) / all
  const positive = good * 100 / all

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  if(all === 0) {
    return (
      <>
        <h1>give feedback</h1>
        <Button handleClick={handleGood} text="good" />
        <Button handleClick={handleNeutral} text="neutral" />
        <Button handleClick={handleBad} text="bad" />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistics text="good" value={good} />
          <Statistics text="neutral" value={neutral} />
          <Statistics text="bad" value={bad} />
          <Statistics text="all" value={all} />
          <Statistics text="average" value={avg} />
          <Statistics text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

export default App