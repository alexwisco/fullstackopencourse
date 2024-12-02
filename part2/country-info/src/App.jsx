import { useState, useEffect } from 'react'
import './App.css'
import countriesService from "./services/countries"
import Search from './components/Search'
import Country from './components/Country'

const App = () => {

  // start with an empty string in the search bar to change on user input.
  const [search, setSearch] = useState('')

  // table of countries from url. start empty and fill. Extract one country with a search
  const [countries, setCountries] = useState([])

  // get the countries from the url through services organization from course
  useEffect(()=> {
    countriesService
      .getAll()
      .then((allCountries) => {
        setCountries(allCountries)
      })
  }, [] )
  
  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  })


  /* testing to make sure I am getting the countries properly. confirmed working
 const filtNames = countries.map((country) => {
    return country.name.common
  })
  console.log(filtNames)
  */

  // updating user search
  const handleSearchChange = (e) => setSearch(e.target.value)

  // when click the show button
  const handleClick = (country) => {
    console.log('viewing: ', country)
    setSearch(country)
  }
 
 
  return (
    <>
      <Search handleChange={handleSearchChange} search={search} />

      <Country
        filteredCountries={filteredCountries}
        handleClick={handleClick}
      />
    </>
  )

}

export default App