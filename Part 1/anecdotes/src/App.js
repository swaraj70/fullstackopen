import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  const maxidx = points.indexOf(Math.max(...points))

  const handleClick = () => {
    const val = Math.floor((Math.random() * 10)) % anecdotes.length
    setSelected(val)
  }


  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    setVote(vote + 1)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleClick} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxidx]}</p>
      <p>has {points[maxidx]} votes</p>
    </div>
  )
}

export default App