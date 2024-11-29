import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import './App.css'
import noteService from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  //const [test, setTest] = useState(0) only used for testing 



  // retrieving from json server
  useEffect(() => {
    noteService // imported functions from notes.js
      .getAll() // getAll() from notes.js. take into account that callback functions
      // now return data directly after the change.
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  }, [])

  console.log('render ', persons.length, ' people')

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
      name: newName, // name from input box set by handleNameChange
      number: newNumber // number from input box set by handleNumberChange
    } 

      noteService
          .create(personObj)
          .then(person => {
            //console.log(personObj.name)
            //console.log(personObj.number)
            //console.log(person)
            setPersons(persons.concat(person))
            setNewName('')
            setNewNumber('')
          })
            
 
  } // addPerson

  // delete a user from the phonebook.
  // No data sent with request, just need baseUrl / id of the person
  // uses callback function from notes.js
  const deletePerson = (id) => {
    // get name of id deleted
    const obj = persons.find(person => person.id === id)
    const objName = obj.name
    // added checks
   if (window.confirm(`Delete ${objName}?`)) { // if user is sure
    noteService
        .personDelete(id) // callback from notes.js
        .then(() => {
          // can't forget to update the ui lol (i forgot)
          setPersons(persons.filter(person => person.id !== id)) 
          console.log(objName, ' has been deleted')
        })
        // error checking functionality
        .catch(error => {
          console.error('Error with deletion of: ', error)
        })
   }
  } // deletePerson

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
          <Person key={person.id}
           person={person}
           personDelete={() => deletePerson(person.id)} />
        )}
      </ul>
    </div>
  )

}

export default App
