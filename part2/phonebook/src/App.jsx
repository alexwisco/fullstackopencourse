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

/* // since adding the services folder and notes.js, we can use the imported functions
// instead of this for useEffect
  useEffect(() => {
    console.log('effect')
    axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
        })
  }, [])
  */

  //testing 
  //const base = 'http://localhost:3001/persons'
  //const idCheck = '243e'
  //console.log(`${base}/${idCheck}`)

  const deletion = (id) => {
    // get name of id deleted
    const obj = persons.find(person => person.id === id)
    const objName = obj.name
    window.confirm(` delete ${objName}?`)
    noteService
        .personDelete(id)
        // add a check for this?
    console.log(objName, ' has been deleted')
  }




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

    /*
  axios 
      .post('http://localhost:3001/persons', personObj)
      .then(response => {
        setPersons(persons.concat(response.data)) // concat - make copy rather than chage state
        console.log(response.data)
        setNewName('') // clear input box
        setNewNumber('') // ^
      })
        */


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

  // add contact deleting - 2.14
  // What do i need: create new table and return, dont take one out of db.
  // 

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
           personDelete={() => deletion(person.id)} />
        )}
      </ul>
    </div>
  )

}

export default App
