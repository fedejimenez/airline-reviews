import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 3rem 5rem 3rem 0;
  font-size: 2rem;

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: -15px;
    margin-right: 10px;
  }
`
const TotalReviews = styled.div`
  font-size: 1.3rem;
  padding: 10px 0;
`

const TotalOutOf = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 0;
`

const Header = (props) => {
  const {name, image_url, avg_score} = props.attributes
  const total = props.reviews.length

  return (
    <Wrapper>
      <h1>
        <img src={image_url} alt={name}/>
        {name}
      </h1>
      <div>
        <TotalReviews>{total} Reviews</TotalReviews>
        <div className="starRating"></div>
        <TotalOutOf>{avg_score} out of 5 stars</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header