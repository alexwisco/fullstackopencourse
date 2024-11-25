import { useState } from 'react'

//redoing some of the exercises after practicing more with objects and props
// some components (Header, Part, still use the constant fields while 
// content and total I tried passing the objects instead, does the same thing in
// the end, but figuring out different ways)

// update 4 hours after commiting - Didn't wait for task 1.3, which asks me to
// do what I did, but a little differently, so I will redo with the proper formatting

// Assignment 2.1-2.5, new tasks
// -> reformatting into individual components
function App() {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>

      <Header course = {course}/>
    
      <Content course = {course} />

      <Total course = {course}/>

    </div>
  )
}


// Insert div with h1 title
const Header = ({course}) => {
  console.log('this is the header: ' + course.name)
  return(
    <div>
      <h1> {course.name}  </h1>
    </div>
  )
}


const Content = ({course}) => {
  // For Part components, match the index from 'parts' to the same index from 'ex'
  // to properly format the Part components into the Content component

  return(
    <div>
      <Part part = {course.parts[0]}/>
      <Part part = {course.parts[1]}/>
      <Part part = {course.parts[2]}/>
    </div>
  )
}

const Total = ({course}) => {
  const arr = course.parts
  const total_ex = arr[0].exercises + arr[1].exercises + arr[2].exercises
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
