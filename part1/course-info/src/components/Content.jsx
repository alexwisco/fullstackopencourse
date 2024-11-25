import Part from './Part.jsx'

// parts is 
const Content = ({parts}) => {
   // App must work given any amount of parts to the course.

   // return dynamic number of parts given 'course'
   // Could use 'course' as props, but passing parts makes it easier
   // to pass part[] to map function
   
    console.log(parts)
    return(
      <div>
        {parts.map((part) =>(
            <Part key = {part.id} part = {part}/>
         ))}
      </div>
    )
  }

  export default Content