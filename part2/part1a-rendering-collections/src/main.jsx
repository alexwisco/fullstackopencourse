import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'

// get returns a promise - an async operation
  /*
    - initially pending, not yet occured
    - if operation successful, fulfilled / resolved
    - rejected, failed operation
  */
    

      ReactDOM.createRoot(document.getElementById('root')).render(
        <App/>)
   

    /* Moved data for application to db.json
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]
*/



// Generates a new array called result.
// takes 'notes[]', takes the id from each ind,
// stores in new array result[]
//const result = notes.map(note => note.id)
//console.log("ID results of notes: ", result)
