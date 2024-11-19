import { useState } from 'react'

//redoing some of the exercises after practicing more with objects and props
// some components (Header, Part, still use the constant fields while 
// content and total I tried passing the objects instead, does the same thing in
// the end, but figuring out different ways)

// update 4 hours after commiting - Didn't wait for task 1.3, which asks me to
// do what I did, but a little differently, so I will redo with the proper formatting

function App() {
  const course = 'Half Stack App Development'

  const parts = [
    {
    name: ' Fundamentals of React',
    exercises: 10,
    },

    {
    name: 'Using props to pass data',
    exercises: 7,
    },

    { 
    name: 'State of a component',
    exercises: 14
    }

  ]
  return (
    <div>

      <Header course = {course}/>
    
      <Content parts = {parts} />

  
    
      <Total parts = {parts}/>

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


const Content = ({parts}) => {
  // For Part components, match the index from 'parts' to the same index from 'ex'
  // to properly format the Part components into the Content component
  return(
    <div>
      <Part part = {parts[0]}/>
      <Part part = {parts[1]}/>
      <Part part = {parts[2]}/>
    </div>
  )
}

const Total = ({parts}) => {
  const total_ex = parts[0].exercises + parts[1].exercises + parts[2].exercises
  console.log('this is the Total number of exercises: ' +  total_ex)
  return(
    <div>
      <p> Total exercises: {total_ex}  </p>
    </div>
  )
}

const Part = ({part}) => {
    console.log(part.name + " has " + part.exercises + " exercises total")
  return(
    <div>
      <p> {part.name} {part.exercises} </p>
    </div>
  )
}


export default App
