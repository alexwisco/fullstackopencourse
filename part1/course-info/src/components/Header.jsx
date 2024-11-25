const Header = ({course}) => {
    console.log('this is the header: ' + course.name)
    return(
      <div>
        <h1> {course.name}  </h1>
      </div>
    )
  }

  export default Header