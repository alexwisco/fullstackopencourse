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
const [averageCount, setAverageCount] = useState(0)
// added for 1.8, table of values and table of text for Statistics display component
const vals = [good, neutral, bad]
const texts = ['good', 'neutral', 'bad']

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
    let newAverage = average
    let newAverageCount = averageCount

    // Also track new total value on each button click:
    // Moved this above for easier average tracking 
    //console.log('before: ', newTotal)
    newTotal = total + 1
    //console.log('after: ', newTotal)
    setTotal(newTotal)
    //console.log('after again: ', newTotal)

    if (val === 'good') {
      newGood = good + 1 // wonder if I can just inc. newGood? 
      setGood(newGood)
      // good is 1 for our average
      newAverageCount = averageCount + 1
      setAverageCount(newAverageCount)
    }

    if (val === 'neutral') {
      newNeutral = neutral + 1
      setNeutral(newNeutral)
      // can leave average counting blank as neutral is 0
    } 

    if (val === 'bad'){
      newBad = bad + 1
      setBad(newBad)
      // bad is -1 for our average
      newAverageCount = averageCount - 1
      setAverageCount(newAverageCount)
    }
    // avg - calc outside of conditionals
    newAverage = newAverageCount / newTotal
    setAverage(newAverage)
    

    console.log("good: ", {newGood},
       " neutral: ", {newNeutral},
        " bad: ", {newBad},
      "total: ",{newTotal},
      "Average Count: ", {newAverageCount},
    "Average: ", {newAverage}
  )}

  // getting the average (good = 1, neutral 0, bad = -1)


  // resetting feedback inputs - for fun
  const reset = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
    setTotal(0)
    setAverage(0)
    setAverageCount(0)
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
        <Statistics vals = {vals}
         texts = {texts}
         total = {total}
         average = {average} />
     </div>
   
   </>
  )
} // App

// for rendering the stats on the webpage. 1.9 update: only display when there are stats
const Statistics = ({vals,texts, total, average}) => {
  //console.log(vals)
  console.log('total before: ', total)
  if (total === 0) return (
      <div>
        Mess around with the buttons to see feedback stats
      </div>
    )

   else {
    return(
    <>
    <div>
    <Display val={vals[0]} text = {texts[0]}/>  
    <Display val={vals[1]} text = {texts[1]}/>
    <Display val={vals[2]} text = {texts[2]}/>
    <Display val={total} text = 'total: '/>
    <Display val={average} text = 'average'/>
    </div>
    </>
  )      
}
}

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
