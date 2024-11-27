import { useState } from 'react'

import Person from './components/Person'
import './App.css'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')

  //
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }//

  //
  const addPerson = (e) => {
    console.log('beep')
    e.preventDefault()

    //
    const personObj = {
      name: newName
    } //

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
