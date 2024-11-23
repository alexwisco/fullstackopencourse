import { useState } from 'react'
import './App.css'

//task 1.6: Feedback application - good, neutral, bad, and track each result
function App() {
// must define all of our variables throughout the applciation and the setters
const [good, setGood] = useState(0) // all vars initially 0 bc no feedback yet
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const [total, setTotal] = useState(0)
const [average, setAverage] = useState(0)

// task 1.7 asks to include more statistics such as total, average, etc.
// I plan to introduce new variables to keep better track rather than just doing 
// arithmetic with the three present values for better debugging and tracking


// Click handler
// returning a function - each button gets their own individual event handler
const handleClick = (val) => () => {
    console.log({val}, ' was clicked')
    let newGood = good
    let newNeutral = neutral
    let newBad = bad
    let newTotal = total
  

    if (val === 'good') {
      newGood = good + 1 // wonder if I can just inc. newGood? 
      setGood(newGood)
    }

    if (val === 'neutral') {
      newNeutral = neutral + 1
      setNeutral(newNeutral)
    } 

    if (val === 'bad'){
      newBad = bad + 1
      setBad(newBad)
    }

    // Also track new total value on each button click:
    //console.log('before: ', newTotal)
    newTotal = total + 1
    //console.log('after: ', newTotal)
    setTotal(newTotal)
    //console.log('after again: ', newTotal)

    console.log("good: ", {newGood},
       " neutral: ", {newNeutral},
        " bad: ", {newBad},
      "total: ",{newTotal})
  }

  // resetting feedback inputs - for fun
  const reset = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
    setTotal(0)
    console.log('all values reset')
  }

  const getTotal = () => {
    setTotal(good + bad + neutral)
  }

  return (
   <>
     <div>
        <h1> Give Feedback </h1>
        <Button handler={handleClick('good')} text = 'good'/> 
        <Button handler={handleClick('neutral')} text = 'neutral'/>
        <Button handler={handleClick('bad')} text = 'bad'/> 
        <Button handler={reset} text = 'reset count'/> 
        <h1>Statistics</h1>
        <Display val={good} text = 'good: '/>  
        <Display val={neutral} text = 'neutral: '/>
        <Display val={bad} text = 'bad: '/>
        <Display val={total} text = 'total: '/>
        

     </div>
   
   </>
  )
} // App

// Button Component - for buttons
const Button = ({text, handler}) => {
  return(
    <button onClick = {handler}> {text} </button>
  )
}

// Display component - showing on screen for user to see
// TODO: why not just take one arg?
const Display = ({val, text}) => {
  return (
    <p> {text} {val}</p>
  )
}

export default App
