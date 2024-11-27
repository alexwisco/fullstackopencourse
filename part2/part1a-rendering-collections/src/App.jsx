import { useState } from 'react'
import Note from './components/Note'

// working with both a table from main.jsx and components in their 
// own modules

const App = (props) => {
  // Initial value of the table declaring the notes passed as props
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...' // placeholder text for input box - cannot be changed yet 
  )
  // Only displaying notes if they are important.
  const [showAll, setShowAll] = useState(false) // 

  const handleNoteChange = (e) => {
    //console.log(e.target.value)
    setNewNote(e.target.value)
  }

  // function for handling note addition with HTML forms
  const addNote = (e) => {
    // preventDefault stops the default sending o f the form,
    // which would be on page reload
    e.preventDefault()
    // target is the form defined by the component
    //console.log('button clicked', e.target)

    // create object for the new note. 
    const noteObject = {
      content: newNote, // value is the state of the newNote component
      important: Math.random() > 0.5, // 50% chance of being important(?)
      id: String(notes.length + 1), // proper id, since added one at a time (what about deletion)
    }

    setNotes(notes.concat(noteObject)) // add new note to table
    console.log('New note added. ID: ', noteObject.id, " - ", noteObject.content,
      " - important?: ", noteObject.important
    )
    // functional printing for debugging. (good work me for debugging)
    let newNotesList = notes.concat(noteObject) // testing 
    newNotesList.map(note =>
      console.log("Note", note.id, ": ", note.content, ". Note is important?: ", note.important)
    )


    setNewNote('') // clear new note
    // NOT changing the 'notes' state, creating a new table also containing
    // the new note item. CANNOT change React's state directly.
  } // addNote

  // Store the list of displayed notes in new variable depending on whether
  // to show all or only importants.
  const notesToShow = showAll // showAll is either true (show all) or false (show important)
    ? notes // if true
    : notes.filter(note => note.important) // if false, filter only importants.

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>  
      <ul>
         {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNote}>
      <input value = {newNote}
      onChange ={handleNoteChange}/>
      <button type ="submit">save</button>

      </form>

    </div>
  )
}


export default App