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
  padding: 2rem 5rem 1rem 4rem;
  
  h1 {
    font-size: 3rem;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 1.5rem;
  padding: 1rem;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 4fr));
  grid-gap: 1rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 0 1rem 0;
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
        <Subheader>Honest airline reviews</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Airlines