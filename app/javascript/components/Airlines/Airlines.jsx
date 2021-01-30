import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    // get all airlines from api
    // update airlines in state
    axios.get('/api/v1/airlines')
    .then( resp => {
      setAirlines(resp.data.data)
    } )
    .catch( resp => console.log(resp) )
  }, [airlines.length])

  const list = airlines.map( item => {
  return (<li key={item.attributes.name}>{item.attributes.name}</li>)
  })

  return (
    <div className="home">
      <div className="header">
        <h1>Airline Reviews</h1>
        <div className="subeader">Honest airline reviews</div>
      </div>
      <div className="grid">
        <ul>{list}</ul>
      </div>
    </div>
  )
}

export default Airlines