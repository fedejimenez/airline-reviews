import React from 'react'
import Rating from '../Rating/Rating'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: .5rem;
  padding: 1rem;
  margin: 0 1rem 1rem 0;
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Title = styled.div`
  padding: 1rem 0 1rem 0;
  fond-size: 1.2rem;
  font-weight: bold;
`

const Description = styled.div`
  padding: 0 0 1rem 0;
  font-size: 1rem;
`

const Review = (props) => {
  const {score, title, description} = props.attributes
  return (
    <Card>
      <RatingContainer>
        <Rating score={score}/>
      </RatingContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
}

export default Review