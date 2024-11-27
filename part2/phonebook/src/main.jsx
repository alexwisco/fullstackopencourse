import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'

const persons = [
  {
    name: 'Prince Bean',
    number: 1234567890
  },
  {
    name: 'Bean Prince',
    number: 9876543210
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons = {persons}/>
)

