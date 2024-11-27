import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'

const persons = [
  {name: 'Prince Bean'},
  {name: 'Bean Prince'},
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons = {persons}/>
)

const print = persons.map(person => person.name)
console.log('persons: ', print)