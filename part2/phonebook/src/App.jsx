import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  //const [test, setTest] = useState(0) only used for testing 

  useEffect(() => {
    console.log('effect')
    axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
        })
  }, [])
  console.log('render ', persons.length, ' notes')

  // When user types in form submission box
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }//

  // When user types in form submission box
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }//

  // User has clicked the submit button (the event e).
  // Creates new person object with the name/number the user has 
  // typed in. Adds new person to phonebook, also printing it. 
  const addPerson = (e) => {
    //console.log('beep')
    e.preventDefault()

    // obj to be added. 
    const personObj = {
      name: newName,
      number: newNumber
    } 

  axios 
      .post('http://localhost:3001/persons', personObj)
      .then(response => {
        setPersons(persons.concat(response.data)) // concat - make copy rather than chage state
        setNewName('') // clear input box
        setNewNumber('') // ^
      })
  } // addPerson

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>

        <div>
          name: <input value = {newName} onChange={handleNameChange}/>
        </div>

        <div>
          number: <input value = {newNumber} onChange={handleNumberChange}/>
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
         {persons.map(person => 
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App
