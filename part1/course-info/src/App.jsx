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
      
      <Content part = {part1} exercises = {exercises1}/> 
      <Content part = {part2} exercises = {exercises2}/>
      <Content part = {part3} exercises = {exercises3}/>

      
      <Total exercises1 = {exercises1}
             exercises2 ={exercises2}
             exercises3={exercises3}/>
    </div>
  )
}

//
/*
<div>
    <h1> {course} </h1>
    <p> {part1} {exercises1} </p>
    <p>{part2} {exercises2} </p>
    <p>{part3} {exercises3} </p>
    <p>
    Number of exercies {exercises1 + exercises2 + exercises3}
    </p>
    </div>
*/
const Header = (props) => {
  console.log('this is the header: ' + props.course)

  return(
    <div>
      <h1> {props.course}  </h1>
    </div>
  )
}

const Content = (props) => {
  console.log('this is the content: ' + props.part)
  return(
    <div>
      <p> {props.part} {props.exercises} </p>
    </div>
  )
}

const Total = (props) => {
  const tote = props.exercises1 + props.exercises2 + props.exercises3
  console.log('this is the Total: ' +  tote)
  return(
    <div>
      <p> {tote}  </p>
    </div>
  )
}

export default App