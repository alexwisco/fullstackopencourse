import { useState } from 'react'


function App() {
  const course = 'Half Stack App Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>

      <Header course = {course}/>
      
      <Content part1 = {part1}
              part2 = {part2}
              part3 = {part3}
              exercises1 = {exercises1}
              exercises2 = {exercises2}
              exercises3 = {exercises3}/> 
    
      <Total exercises1 = {exercises1}
             exercises2 ={exercises2}
             exercises3={exercises3}/>


    
    </div>
  )
}

const Header = (props) => {
  console.log('this is the header: ' + props.course)

  return(
    <div>
      <h1> {props.course}  </h1>
    </div>
  )
}

const Content = (props) => {
  console.log('')
  return(
    <div>
      <Part name = {props.part1} number = {props.exercises1}/>
      <Part name = {props.part2} number = {props.exercises2}/>
      <Part name = {props.part3} number = {props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  const tote = props.exercises1 + props.exercises2 + props.exercises3
  console.log('this is the Total: ' +  tote)
  return(
    <div>
      <p> Total exercises: {tote}  </p>
    </div>
  )
}

const Part = (props) => {
  console.log('this is Part: ' + props.name + " with "
     + props.number + " exercises" )
  return(
    <div>
      <p> {props.name} {props.number} </p>
    </div>
  )
}


export default App
