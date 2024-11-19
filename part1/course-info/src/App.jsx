import { useState } from 'react'

//redoing some of the exercises after practicing more with objects and props
// some components (Header, Part, still use the constant fields while 
// content and total I tried passing the objects instead, does the same thing in
// the end, but figuring out different ways)
function App() {
  const course = 'Half Stack App Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = {
    one: 'Fundamentals of React',
    two: 'Using props to pass data',
    three: 'State of a component',
  }

  const ex = {
    one: 10,
    two: 7,
    three: 14,
  }

  const obj1 = {
    name: 'jeff',
    age: 12,
    education: 'PhD',
  }
  return (
    <div>

      <Header course = {course}/>
    
      <Content parts data = {parts} ex data01 = {ex} />
    
      <Total ex data = {ex} />

    </div>
  )
}

// Insert div with h1 title
const Header = (props) => {
  console.log('this is the header: ' + props.course)
  return(
    <div>
      <h1> {props.course}  </h1>
    </div>
  )
}

// redoing overall organization. Instead of using a handful of globals,
// work with just two objects instead (is there even a difference?)
// Not better or worse, just practicing different ways to do the same thing
const Content = ({data, data01}) => {
  // check if we're passing arguments properly
  console.log("Data: " + data.one)
  console.log("Data01: " + data01.one)
  // For Part components, match the index from 'parts' to the same index from 'ex'
  // to properly format the Part components into the Content component
  return(
    <div>
      <Part name = {data.one} number = {data01.one}/>
      <Part name = {data.two} number = {data01.two}/>
      <Part name = {data.three} number = {data01.three}/>
    </div>
  )
}

const Total = ({data}) => {
  const tote = data.one + data.two + data.three
  console.log('this is the Total: ' +  tote)
  return(
    <div>
      <p> Total exercises: {tote}  </p>
    </div>
  )
}

const Part = ({name, number}) => {
  console.log('this is Part: ' + name + " with "
     + number + " exercises" )
  return(
    <div>
      <p> {name} {number} </p>
    </div>
  )
}


export default App
