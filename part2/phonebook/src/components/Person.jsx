import './Person.css'

const Person = ({person, personDelete}) => {
  // adding button for 2.14, deleting a person on button click. Maybe delete through search 
  // next?
    return (
      <div>
        <p> {person.name}: {person.number}</p>
        <button onClick={personDelete}> delete </button>
      </div>
    )
  } // person comp

  export default Person