import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [test, setTest] = useState(0)


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

  /* Testing functionality of json url (added /3 to .get url)
  useEffect(() => {
    console.log('testing!')
    axios
      .get('http://localhost:3001/persons/3')
      .then(response => {
        console.log('promise fulfilled')
        sety(response.data)
      })
  }, [])
  console.log('y: ', y)
  */
 

  // When user types in form submission box
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }//

  // When user types in form submission box
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }//



  // User has clicked the submit button (the event e).
  // Creates new person object with the name the user has 
  // typed in. Adds new person to phonebook, also printing it. 
  const addPerson = (e) => {
    //console.log('beep')
    e.preventDefault()

    const personObj = {
      name: newName,
      number: newNumber
    } 
    // Check if the person is in our phonebook already 
    if (persons.some(person => person.name === newName)){
      console.log('BEEEEEP: ', `${newName} is already added to phonebook. Not Added.`)
      setNewName('')
      return
    }

    // Adding new person to phonebook
    setPersons(persons.concat(personObj))

    // printing
    // We don't like pushing, concat instead
    let newPersonsList = persons.concat(personObj)
    newPersonsList.map(person =>
      console.log("Person's name: ", person.name, ", Person's number: ", person.number)
    )

    setNewName('') // clear new name so the textbox doesn't fill up with prev. names
    setNewNumber('') // same as above

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
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App
