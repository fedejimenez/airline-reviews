import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
  `
const AirlineLogo = styled.div`
  width: 3rem;
  margin: 5px auto 5px auto;

  img {
    height: 3rem;
    width: 3rem;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`
const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 3rem;
  min-width: 200px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`

const Airline = (props) => {
  return (
    <Card>
      <AirlineLogo>
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </AirlineLogo>
      <AirlineName>
        {props.attributes.name}
      </AirlineName>
      <Rating score={props.attributes.avg_score}></Rating>
      <LinkWrapper>
        <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Airline