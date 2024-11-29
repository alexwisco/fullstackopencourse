const Person = ({person, personDelete}) => {
    return (
      <div>
        <p> {person.name}: {person.number}</p>
        <button onClick={personDelete}> delete </button>
      </div>
    )
  } // person comp

  export default Person