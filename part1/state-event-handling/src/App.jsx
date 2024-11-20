/*
Explanation for clarity and my own learning: 
on start, the App component is executed, which uses the useState hook
to create the counter status (counter) for the app.
App renders the Display component showing the counter value 0
and three Button components that set event handlers changing the counter's state.

Each event handler changes the App state using setCounter. 
"Calling a state changing function causes the component to be rerended"
so pressing the 'plus one' button, the button's event handler changes the status
of counter to 1, and the component App is rendered again. This 
rerendering causes the child (Display and Button) components to be rerendered. 
Display gets the new counter value as the prop, Button components get the event handlers that 
change the state as props. 
*/
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log("Rendering with counter value: ", counter)

  const increase = () => {
    console.log('increasing, value before: ', counter)
    setCounter(counter + 1)
  }

  const reset = () => {
    console.log('resetting to zero, value before: ', counter)
    setCounter(0)
    console.log('Counter has been reset to 0')
  }

  const decrease = () => {
    console.log('increasing, value before: ', counter)
    setCounter(counter - 1)
  }

/* for automating (w/out buttons)
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )*/

    // not needed at all, just testing out some new stuff
  const arr = ['plus one', 'reset', 'minus one']

  return (
    <div>
      
      <Display counter={counter}/>

      <Button 
        handleClick = {increase}
        // Maybe useful in an app with lots of repeated buttons? 
        text = {arr[0]}/>

      <Button 
        handleClick = {reset}
        text = {arr[1]}/>

      <Button 
        handleClick = {decrease}
        text = {arr[2]}/>


    </div>
  )
} // App 

// Lifting state up. leave the state of the application (counter value)
// in the App component, pass the state (counter value) to Display with props
// More, smaller components preffered over one large one 
// Is just a display of the state of counter. The 'backend' status is still tracked
const Display = (props) => {
  return(
    <div>{props.counter}</div>
  )
} // Display


// Button component to break up into even smaller pieces. 
// Event handler passed to Button with props 'handleClick'
const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
} // Button

export default App