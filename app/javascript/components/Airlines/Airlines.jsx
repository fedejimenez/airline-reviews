import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Airline from './Airline'
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 100%;
  margin-left: auto;
  margin-rigt: auto;
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;
  
  h1 {
    font-size: 3rem;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 2rem;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  width: 100%;
  padding: 1rem;
`

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    axios.get('/api/v1/airlines')
    .then( resp => setAirlines(resp.data.data))
    .catch( resp => console.log(resp) )
  }, [airlines.length])

  const grid = airlines.map( item => {
    return (
      <Airline 
        key={item.attributes.name}
        attributes={item.attributes}
      />
    )
  })

  return (
    <Home>
      <Header>
        <h1>Airline Reviews</h1>
        <Subheader className="subeader">Honest airline reviews</Subheader>
      </Header>
      <Grid className="grid">
        {grid}
      </Grid>
    </Home>
  )
}

export default Airlines