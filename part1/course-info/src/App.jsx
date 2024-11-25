import { useState } from 'react'
import Course from './components/Course'

// Assignment 2.1-2.5, new tasks, rebuilding on part 1 tasks.
// -> reformatting into individual components
// Passing components until I can just return one 'Course' component
// in the App component.

// Files look much cleaner, much better readability

function App() {

  const course = {
    id:1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id:2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id:3
      },
      {
        name: 'Reddux',
        exercises: 11,
        id: 4
      },
    ]
  }

  return (
    <div>
      <Course course = {course}/>
    </div>
  )
}

export default App
