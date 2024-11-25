// Course component -> second highest in tree. Takes course data
// from App.jsx
import Header from './Header'
import Total from './Total.jsx' 
import Content from './Content.jsx'

const Course = ({course}) => {

    return(
        <div>
            <Header course = {course}/>
    
            <Content parts = {course.parts} />

            <Total parts = {course.parts}/>

        </div>

    )
}


export default Course