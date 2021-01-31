import React, {Fragment} from 'react'
import styled from 'styled-components'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'

const Wrapper = styled.div`
  background: #000;
  height: 98vh;
  padding: 4rem 1rem 0 1rem;
`

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 1rem;
  padding: 2rem 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`

const RatingBox = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
  margin-top: 1rem;

  input {
    display: none
  }

  label {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");

    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
  }
`

const Field = styled.div`
  border-radius: 4px;

  input, textarea {
    min-height: 3rem;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    font-size: 1.1rem;
    margin: 0 0 1rem 0;
    padding: 12px;
    width: 100%;
  }

  textarea {
    min-height: 8rem;
    font-family: 'Arial';
  }
`

const SubmitBtn = styled.button`
  color: #fff;
  background: #40b03d;
  border-radius: 4px;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  width: 100%;
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
  }
`

const Headline = styled.div`
  padding: 1.5rem;
  padding-left: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`

const RatingTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return (
      <Fragment>
        <input type="radio" value={score} checked={props.review.score == score} name="rating" onChange={() => console.log('selected:', score) } id={`rating-${score}`}/>
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })
  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>Have an experience with {props.attributes.name}? Share your review!</Headline>
        <Field>
          <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
        </Field>
        <Field>
          <textarea onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description"></textarea>/>
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>
              Rate this Airline
            </RatingTitle>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
      </form>
    </Wrapper>
  )
}

export default ReviewForm