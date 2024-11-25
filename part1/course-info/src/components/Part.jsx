

const Part = ({part}) => {
    console.log(part.name + " has " + part.exercises + " exercises total")
  return(
    <div>
      <p> {part.name} {part.exercises} </p>
    </div>
  )
}

export default Part