import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  //return axios.get(baseUrl)
  const request = axios.get(baseUrl)
  return request.then(response => {
    return response.data
    //promise returned by axios no longer returned directly. Promise is 
    // taken to the request variable, and the 'then' function is called for it.
    // getAll() now returns a promise, because the 'then' of the 'promise' returns a promise

  })
}

const create = newObject => {
  //return axios.post(baseUrl)
  const request = axios.post(baseUrl, newObject)
  return request.then(response => {
    return response.data
  })
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const personDelete = (id) => { // delete a person given the personObj's id value
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, personDelete }

  // or 

  /* 
getAll: getAll, 
  create: create, 
  update: update 
  */
 // Since the name of the fields of the object are 
 // the same as the names of the vars defining their value, can short form it
