const Total = ({parts}) => {
    const totalSum = parts.reduce((sum, part) => sum + part.exercises, 0)

    console.log("Total sum of all courses: ", totalSum)
    return(
      <div>
      Total number of courses: {totalSum}
      </div>
    )
  }

  export default Total