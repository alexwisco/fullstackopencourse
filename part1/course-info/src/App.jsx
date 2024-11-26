import { useState } from 'react'
import Course from './components/Course'

// Assignment 2.1-2.5, new tasks, rebuilding on part 1 tasks.
// -> reformatting into individual components
// Passing components until I can just return one 'Course' component
// in the App component.

// Files look much cleaner, much better readability
// 2.4 - Arbitrary number of courses, takes courses[] instead of course[] now
function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    // END OF COURSE 1
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 12,
          id: 2
        }
      ]
    }
  ]

  //console.log("one: ", courses[0])
  //console.log("two: ", courses[1])
  // Here I copy paste the mapping done with dynamic part quantity in the Content component
  // just changing course -> courses and part -> course
  return (
    <div>
        {courses.map((course) =>(
            <Course key = {course.id} course = {course}/>
         ))}
      </div>
  )
}

export default App
