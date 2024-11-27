import { useState } from 'react'

import Person from './components/Person'
import './App.css'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')

  // When user types in form submission box
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }//

  // User has clicked the submit button (the event e).
  // Creates new person object with the name the user has 
  // typed in. Adds new person to phonebook, also printing it. 
  const addPerson = (e) => {
    //console.log('beep')
    e.preventDefault()

    const personObj = {
      name: newName
    } 

    // Adding new person to phonebook
    setPersons(persons.concat(personObj))
    console.log('new person added. Name: ', personObj.name)

    // printing
    let newPersonsList = persons.concat(personObj)
    newPersonsList.map(person =>
      console.log("Person's name: ", person.name)
    )

    setNewName('') // clear new name


  } // addPerson

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value = {newName} onChange={handleNameChange}/>
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
